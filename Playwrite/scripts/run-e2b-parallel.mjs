import 'dotenv/config';
import fs from 'node:fs/promises';
import path from 'node:path';
import pLimit from 'p-limit';
import { Sandbox } from 'e2b';

// Main logic: orchestrate one sandbox per category, collect JSON + visual artifacts, then summarize.
const ROOT = process.cwd();
const RAW_REPORTS_DIR = path.join(ROOT, 'reports', 'e2b', 'raw');
const ARTIFACTS_DIR = path.join(ROOT, 'reports', 'e2b', 'artifacts');
const TEMPLATE = process.env.E2B_TEMPLATE || 'playwright-runner-dev';
const INSTANCES = Number(process.env.E2B_PARALLEL_INSTANCES || 50);
const TIMEOUT_MS = Number(process.env.E2B_TIMEOUT_MS || 900_000);

function categoryTag(index) {
  return `cat${String(index).padStart(2, '0')}`;
}

function allCategories() {
  // Fixed 50-category layout for this POC: cat01..cat50.
  return Array.from({ length: 50 }, (_, i) => categoryTag(i + 1));
}

const ALL_CATEGORIES = allCategories();
const ALL_CATEGORIES_SET = new Set(ALL_CATEGORIES);

function readArgValue(prefix) {
  const match = process.argv.find((arg) => arg.startsWith(prefix));
  return match ? match.slice(prefix.length) : null;
}

function normalizeCategoryName(input) {
  const normalized = String(input || '').trim().replace(/^@/, '').toLowerCase();
  if (!normalized) {
    return null;
  }

  return normalized;
}

function parseCategoryCsv(text) {
  return String(text || '')
    .split(',')
    .map((item) => normalizeCategoryName(item))
    .filter(Boolean);
}

function unique(items) {
  return Array.from(new Set(items));
}

function assertKnownCategories(categories) {
  const invalid = categories.filter((category) => !ALL_CATEGORIES_SET.has(category));
  if (invalid.length > 0) {
    throw new Error(`Unknown categories: ${invalid.join(', ')}. Expected values like cat01..cat50.`);
  }
}

async function categoriesFromFailedSummary(filePath) {
  const absolutePath = path.isAbsolute(filePath) ? filePath : path.join(ROOT, filePath);
  const text = await fs.readFile(absolutePath, 'utf8');
  const summary = JSON.parse(text);

  const entries = Array.isArray(summary?.entries) ? summary.entries : [];
  const failed = entries
    .filter((entry) => {
      // Failures are either explicit orchestration errors or non-zero test command exit codes.
      if (entry?.error) {
        return true;
      }
      if (typeof entry?.exitCode === 'number') {
        return entry.exitCode !== 0;
      }
      return false;
    })
    .map((entry) => normalizeCategoryName(entry?.category))
    .filter(Boolean);

  return unique(failed);
}

async function resolveSelectedCategories() {
  // Option 1: single category via CLI
  const cliSingle = readArgValue('--category=');
  // Option 2: multiple categories via CLI
  const cliList = readArgValue('--categories=');
  // Option 3: categories via environment (comma-separated)
  const envList = process.env.E2B_CATEGORIES || null;
  // Option 4: rerun failed categories from summary
  const failedFrom = readArgValue('--failed-from=');

  const manual = unique([
    ...parseCategoryCsv(cliSingle),
    ...parseCategoryCsv(cliList),
    ...parseCategoryCsv(envList),
  ]);

  const failed = failedFrom ? await categoriesFromFailedSummary(failedFrom) : [];
  const selected = unique([...manual, ...failed]);

  if (selected.length === 0) {
    return {
      categories: ALL_CATEGORIES,
      selectionMode: 'all',
    };
  }

  assertKnownCategories(selected);

  return {
    categories: selected,
    selectionMode: failedFrom ? 'subset+failed' : 'subset',
  };
}

async function runOneCategory(category, runId) {
  // Each category runs in an isolated sandbox to maximize parallelism and avoid shared state.
  const metadata = { runId, category };
  const sandbox = await Sandbox.create(TEMPLATE, {
    timeoutMs: TIMEOUT_MS,
    metadata,
  });

  const jsonName = `${category}.json`;
  const artifactTarName = `${category}-artifacts.tgz`;
  // Single command chain so the sandbox run has one exit code and one streamed log timeline.
  const command = [
    'cd /app',
    // Result folder is created per run to avoid path errors on first execution.
    'mkdir -p /app/results',
    // PLAYWRIGHT_JSON_OUTPUT_NAME forces a deterministic file name per category.
    `PLAYWRIGHT_JSON_OUTPUT_NAME=/app/results/${jsonName} npx playwright test --config=playwright.config.e2b.mjs --grep @${category} --workers=1 --reporter=json`,
    // Archive test-results + generated tests so downstream tooling can inspect diffs and baseline context.
    `tar -czf /app/results/${artifactTarName} -C /app test-results tests/generated || true`,
  ].join(' && ');

  try {
    const result = await sandbox.commands.run(command, {
      onStdout: (line) => process.stdout.write(`[${category}] ${line}`),
      onStderr: (line) => process.stderr.write(`[${category}] ${line}`),
    });

    let reportText = '';
    let artifactPath = null;
    try {
      // Persist per-category Playwright JSON for downstream machine-readable merge/index steps.
      const reportBytes = await sandbox.files.read(`/app/results/${jsonName}`);
      reportText = Buffer.from(reportBytes).toString('utf8');
      await fs.writeFile(path.join(RAW_REPORTS_DIR, jsonName), reportText, 'utf8');
    } catch (readError) {
      // Write a structured fallback file so the merge step can still process this category.
      const fallback = {
        category,
        error: 'Could not read JSON report from sandbox',
        details: String(readError),
      };
      reportText = JSON.stringify(fallback, null, 2);
      await fs.writeFile(path.join(RAW_REPORTS_DIR, jsonName), reportText, 'utf8');
    }

    try {
      // Persist per-category archive containing visual outputs (expected/actual/diff images).
      const archive = await sandbox.files.read(`/app/results/${artifactTarName}`);
      const localArtifactPath = path.join(ARTIFACTS_DIR, artifactTarName);
      await fs.writeFile(localArtifactPath, Buffer.from(archive));
      artifactPath = localArtifactPath;
    } catch (artifactError) {
      // Keep artifact errors visible per category without stopping the whole run.
      const markerPath = path.join(ARTIFACTS_DIR, `${category}-artifact-error.txt`);
      await fs.writeFile(markerPath, String(artifactError), 'utf8');
    }

    return {
      category,
      sandboxId: sandbox.sandboxId,
      exitCode: result.exitCode,
      artifactPath,
    };
  } finally {
    // Always clean up sandbox to control cost, even when tests fail.
    await sandbox.kill();
  }
}

async function main() {
  if (!process.env.E2B_API_KEY) {
    throw new Error('Missing E2B_API_KEY in environment');
  }

  // Ensure output directories exist before any parallel jobs start writing files.
  await fs.mkdir(RAW_REPORTS_DIR, { recursive: true });
  await fs.mkdir(ARTIFACTS_DIR, { recursive: true });
  const runId = new Date().toISOString().replace(/[:.]/g, '-');
  const selection = await resolveSelectedCategories();
  const categories = selection.categories;

  console.log(`Run mode: ${selection.selectionMode}`);
  console.log(`Selected categories (${categories.length}): ${categories.join(', ')}`);

  const limit = pLimit(INSTANCES);
  // Concurrency is controlled by plan/resource limits while still targeting one job per category.
  const jobs = categories.map((category) => limit(() => runOneCategory(category, runId)));
  const results = await Promise.allSettled(jobs);

  const summary = {
    runId,
    template: TEMPLATE,
    selectionMode: selection.selectionMode,
    selectedCategories: categories,
    requestedInstances: INSTANCES,
    categories: categories.length,
    succeeded: 0,
    failed: 0,
    entries: [],
  };

  for (let i = 0; i < results.length; i += 1) {
    const entry = results[i];
    const category = categories[i];

    if (entry.status === 'fulfilled') {
      // A fulfilled promise can still represent test failures via non-zero exit code.
      summary.entries.push({ category, ...entry.value });
      if (entry.value.exitCode === 0) {
        summary.succeeded += 1;
      } else {
        summary.failed += 1;
      }
    } else {
      // Rejected promise means orchestration failure (sandbox/network/command exception).
      summary.entries.push({ category, error: String(entry.reason) });
      summary.failed += 1;
    }
  }

  const summaryPath = path.join(ROOT, 'reports', 'e2b', 'run-summary.json');
  await fs.mkdir(path.dirname(summaryPath), { recursive: true });
  await fs.writeFile(summaryPath, JSON.stringify(summary, null, 2), 'utf8');

  console.log(`Run summary written to ${summaryPath}`);
  console.log(`Succeeded categories: ${summary.succeeded}`);
  console.log(`Failed categories: ${summary.failed}`);

  if (summary.failed > 0) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
