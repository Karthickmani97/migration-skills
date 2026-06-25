import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';

// Main logic: extract E2B artifact bundles, discover expected/actual/diff images, and emit AI-readable index files.
const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'reports', 'e2b');
const ARTIFACTS_DIR = path.join(REPORTS_DIR, 'artifacts');
const EXTRACTED_DIR = path.join(REPORTS_DIR, 'extracted');
const RAW_DIR = path.join(REPORTS_DIR, 'raw');
const OUT_JSON = path.join(REPORTS_DIR, 'visual-index.json');
const OUT_MD = path.join(REPORTS_DIR, 'visual-index.md');

function rel(filePath) {
  // Normalize to workspace-relative POSIX paths so JSON is portable across machines.
  return path.relative(ROOT, filePath).split(path.sep).join('/');
}

async function pathExists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

async function listFilesRecursive(dir) {
  const out = [];

  async function walk(current) {
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const abs = path.join(current, entry.name);
      if (entry.isDirectory()) {
        await walk(abs);
      } else {
        out.push(abs);
      }
    }
  }

  if (await pathExists(dir)) {
    await walk(dir);
  }

  return out;
}

function extractTarGz(archivePath, outputDir) {
  // Use system tar for speed and compatibility with compressed sandbox bundles.
  return new Promise((resolve, reject) => {
    const tarProcess = spawn('tar', ['-xzf', archivePath, '-C', outputDir], {
      stdio: 'pipe',
    });

    let stderr = '';
    tarProcess.stderr.on('data', (chunk) => {
      stderr += String(chunk);
    });

    tarProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`tar extraction failed (${archivePath}) exit=${code}: ${stderr}`));
      }
    });

    tarProcess.on('error', (error) => reject(error));
  });
}

async function loadRawReportByCategory(category) {
  const jsonPath = path.join(RAW_DIR, `${category}.json`);
  if (!(await pathExists(jsonPath))) {
    return null;
  }

  try {
    // If parse fails, continue with artifact-only indexing rather than crashing.
    const rawText = await fs.readFile(jsonPath, 'utf8');
    return JSON.parse(rawText);
  } catch {
    return null;
  }
}

function normalizeTitle(title) {
  // Shared normalization lets filename hints map to Playwright title paths more reliably.
  return String(title || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function flattenTestsFromSuite(suite, parentTitles = []) {
  const rows = [];
  if (!suite || typeof suite !== 'object') {
    return rows;
  }

  const currentTitles = suite.title ? [...parentTitles, suite.title] : parentTitles;

  if (Array.isArray(suite.specs)) {
    for (const spec of suite.specs) {
      const specTitlePath = [...currentTitles, spec.title].filter(Boolean);
      if (Array.isArray(spec.tests)) {
        for (const test of spec.tests) {
          const testResults = Array.isArray(test.results) ? test.results : [];
          // Use the latest result because retries can produce multiple result entries.
          const last = testResults[testResults.length - 1] || {};
          const errors = Array.isArray(last.errors) ? last.errors.map((e) => e?.message || '').filter(Boolean) : [];
          rows.push({
            titlePath: specTitlePath,
            status: last.status || test.status || 'unknown',
            errors,
          });
        }
      }
    }
  }

  if (Array.isArray(suite.suites)) {
    for (const child of suite.suites) {
      rows.push(...flattenTestsFromSuite(child, currentTitles));
    }
  }

  return rows;
}

function buildTestLookup(reportJson) {
  // Build a normalized lookup to join visual rows with Playwright test status/errors.
  const lookup = new Map();

  if (!reportJson || !Array.isArray(reportJson.suites)) {
    return lookup;
  }

  const tests = [];
  for (const suite of reportJson.suites) {
    tests.push(...flattenTestsFromSuite(suite));
  }

  for (const t of tests) {
    // Multiple tests can normalize to the same key, so store arrays as candidates.
    const key = normalizeTitle(t.titlePath.join(' '));
    if (!lookup.has(key)) {
      lookup.set(key, []);
    }
    lookup.get(key).push(t);
  }

  return lookup;
}

function detectCategoryFromArchive(fileName) {
  const match = /^([a-z]+\d{2})-artifacts\.tgz$/i.exec(fileName);
  return match ? match[1] : null;
}

function parseSnapshotEntryName(filePathNoExt) {
  const base = path.basename(filePathNoExt);
  const expectedSuffix = '-expected';
  const actualSuffix = '-actual';
  const diffSuffix = '-diff';

  if (base.endsWith(expectedSuffix)) {
    return { stem: base.slice(0, -expectedSuffix.length), kind: 'expected' };
  }
  if (base.endsWith(actualSuffix)) {
    return { stem: base.slice(0, -actualSuffix.length), kind: 'actual' };
  }
  if (base.endsWith(diffSuffix)) {
    return { stem: base.slice(0, -diffSuffix.length), kind: 'diff' };
  }

  return null;
}

function createImageGroup(stem, category) {
  return {
    id: `${category}:${stem}`,
    category,
    testHint: stem,
    expectedImage: null,
    actualImage: null,
    diffImage: null,
    status: 'unknown',
    errors: [],
  };
}

function chooseTestMeta(stem, lookup) {
  const key = normalizeTitle(stem);
  const candidates = lookup.get(key) || [];
  if (candidates.length === 0) {
    return null;
  }

  const first = candidates[0];
  // First match is enough for POC; can be enhanced to fuzzy ranking in future.
  return {
    titlePath: first.titlePath,
    status: first.status,
    errors: first.errors,
  };
}

async function main() {
  if (!(await pathExists(ARTIFACTS_DIR))) {
    throw new Error('Artifacts directory missing. Run npm run test:e2b:parallel first.');
  }

  await fs.mkdir(EXTRACTED_DIR, { recursive: true });

  const artifactEntries = await fs.readdir(ARTIFACTS_DIR, { withFileTypes: true });
  const archives = artifactEntries
    .filter((entry) => entry.isFile() && entry.name.endsWith('-artifacts.tgz'))
    .map((entry) => entry.name)
    .sort();

  if (archives.length === 0) {
    throw new Error('No artifact .tgz files found in reports/e2b/artifacts');
  }

  const extractionSummary = [];

  for (const archive of archives) {
    // Extract each category archive to its own directory for deterministic path mapping.
    const category = detectCategoryFromArchive(archive) || archive.replace(/\.tgz$/, '');
    const archivePath = path.join(ARTIFACTS_DIR, archive);
    const categoryExtractDir = path.join(EXTRACTED_DIR, category);

    await fs.rm(categoryExtractDir, { recursive: true, force: true });
    await fs.mkdir(categoryExtractDir, { recursive: true });

    try {
      await extractTarGz(archivePath, categoryExtractDir);
      extractionSummary.push({ category, archive: rel(archivePath), extractedTo: rel(categoryExtractDir), ok: true });
    } catch (error) {
      // Record extraction failure and continue to process other categories.
      extractionSummary.push({
        category,
        archive: rel(archivePath),
        extractedTo: rel(categoryExtractDir),
        ok: false,
        error: String(error),
      });
    }
  }

  const visualRows = [];
  const categoryTotals = new Map();

  for (const item of extractionSummary) {
    if (!item.ok) {
      // Keep failures in output so AI and humans can see missing categories explicitly.
      visualRows.push({
        id: `${item.category}:extraction-error`,
        category: item.category,
        status: 'artifact-error',
        testHint: null,
        titlePath: null,
        expectedImage: null,
        actualImage: null,
        diffImage: null,
        errors: [item.error || 'artifact extraction failed'],
      });
      continue;
    }

    const category = item.category;
    const categoryRoot = path.join(ROOT, item.extractedTo);
    const reportJson = await loadRawReportByCategory(category);
    const testLookup = buildTestLookup(reportJson);

    const allFiles = await listFilesRecursive(categoryRoot);
    // Visual comparison artifacts are image-based, so PNG scan is sufficient here.
    const pngFiles = allFiles.filter((f) => f.toLowerCase().endsWith('.png'));

    const groups = new Map();

    // Group image triplets by stem so each row can carry expected/actual/diff together.
    for (const pngFile of pngFiles) {
      const noExt = pngFile.slice(0, -4);
      const parsed = parseSnapshotEntryName(noExt);
      if (!parsed) {
        // Ignore non-comparison images that do not follow expected/actual/diff naming.
        continue;
      }

      if (!groups.has(parsed.stem)) {
        groups.set(parsed.stem, createImageGroup(parsed.stem, category));
      }

      const group = groups.get(parsed.stem);
      const relPath = rel(pngFile);
      if (parsed.kind === 'expected') {
        group.expectedImage = relPath;
      }
      if (parsed.kind === 'actual') {
        group.actualImage = relPath;
      }
      if (parsed.kind === 'diff') {
        group.diffImage = relPath;
      }
    }

    if (!categoryTotals.has(category)) {
      categoryTotals.set(category, {
        category,
        visualGroups: 0,
        withDiff: 0,
        withoutDiff: 0,
      });
    }

    for (const group of groups.values()) {
      const meta = chooseTestMeta(group.testHint, testLookup);
      if (meta) {
        group.titlePath = meta.titlePath;
        group.status = meta.status;
        group.errors = meta.errors;
      } else {
        group.titlePath = null;
        group.status = group.diffImage ? 'failed-visual' : 'unknown';
      }

      if (group.diffImage) {
        // Presence of diff image is the strongest indicator of visual mismatch.
        categoryTotals.get(category).withDiff += 1;
      } else {
        categoryTotals.get(category).withoutDiff += 1;
      }
      categoryTotals.get(category).visualGroups += 1;

      visualRows.push(group);
    }

    if (groups.size === 0) {
      visualRows.push({
        id: `${category}:no-visual-groups`,
        category,
        status: 'no-visual-artifacts',
        testHint: null,
        titlePath: null,
        expectedImage: null,
        actualImage: null,
        diffImage: null,
        errors: [],
      });
    }
  }

  const totals = {
    archives: archives.length,
    extractedOk: extractionSummary.filter((x) => x.ok).length,
    extractedFailed: extractionSummary.filter((x) => !x.ok).length,
    visualGroups: visualRows.filter((r) => r.status !== 'artifact-error' && r.status !== 'no-visual-artifacts').length,
    groupsWithDiff: visualRows.filter((r) => Boolean(r.diffImage)).length,
    groupsWithoutDiff: visualRows.filter((r) => !r.diffImage).length,
  };

  const output = {
    generatedAt: new Date().toISOString(),
    root: rel(ROOT),
    totals,
    extractionSummary,
    categoryTotals: Array.from(categoryTotals.values()).sort((a, b) => a.category.localeCompare(b.category)),
    visuals: visualRows,
  };

  await fs.mkdir(REPORTS_DIR, { recursive: true });
  await fs.writeFile(OUT_JSON, JSON.stringify(output, null, 2), 'utf8');

  // Keep a lightweight markdown view for quick manual triage.
  const lines = [];
  lines.push('# Visual Index');
  lines.push('');
  lines.push(`Generated at: ${output.generatedAt}`);
  lines.push(`Archives: ${totals.archives}`);
  lines.push(`Extracted OK: ${totals.extractedOk}`);
  lines.push(`Extracted Failed: ${totals.extractedFailed}`);
  lines.push(`Visual Groups: ${totals.visualGroups}`);
  lines.push(`Groups With Diff: ${totals.groupsWithDiff}`);
  lines.push('');
  lines.push('## Category Totals');
  lines.push('| Category | Visual Groups | With Diff | Without Diff |');
  lines.push('|---|---:|---:|---:|');
  for (const item of output.categoryTotals) {
    lines.push(`| ${item.category} | ${item.visualGroups} | ${item.withDiff} | ${item.withoutDiff} |`);
  }
  lines.push('');
  lines.push('## Visual Rows (sample first 200)');
  lines.push('| Category | Status | Test Hint | Expected | Actual | Diff |');
  lines.push('|---|---|---|---|---|---|');
  for (const row of output.visuals.slice(0, 200)) {
    lines.push(
      `| ${row.category || ''} | ${row.status || ''} | ${row.testHint || ''} | ${row.expectedImage || ''} | ${row.actualImage || ''} | ${row.diffImage || ''} |`
    );
  }

  await fs.writeFile(OUT_MD, `${lines.join('\n')}\n`, 'utf8');

  console.log(`Visual JSON index: ${OUT_JSON}`);
  console.log(`Visual Markdown index: ${OUT_MD}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
