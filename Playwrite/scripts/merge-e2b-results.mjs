import fs from 'node:fs/promises';
import path from 'node:path';

// Main logic: merge per-category JSON outputs into one compact machine-readable and markdown summary.
const ROOT = process.cwd();
const RAW_DIR = path.join(ROOT, 'reports', 'e2b', 'raw');
const OUT_JSON = path.join(ROOT, 'reports', 'e2b', 'merged-summary.json');
const OUT_MD = path.join(ROOT, 'reports', 'e2b', 'merged-summary.md');

async function listJsonFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
    .map((entry) => entry.name)
    .sort();
}

function safeParseJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    // Malformed JSON should be counted, not fatal for overall summary generation.
    return null;
  }
}

function pickStats(parsed) {
  if (!parsed || typeof parsed !== 'object') {
    // Keep schema stable even when one category report is missing/corrupt.
    return { passed: 0, failed: 1, skipped: 0, timedOut: 0, malformed: true };
  }

  if (parsed.stats) {
    const s = parsed.stats;
    return {
      passed: Number(s.expected || s.passed || 0),
      failed: Number(s.unexpected || s.failed || 0),
      skipped: Number(s.skipped || 0),
      timedOut: Number(s.timedOut || 0),
      malformed: false,
    };
  }

  return { passed: 0, failed: 1, skipped: 0, timedOut: 0, malformed: true };
}

async function main() {
  // Read each category report and normalize stats to a stable output schema.
  const files = await listJsonFiles(RAW_DIR);
  if (files.length === 0) {
    throw new Error('No JSON reports found. Run npm run test:e2b:parallel first.');
  }

  const categories = [];
  const total = { passed: 0, failed: 0, skipped: 0, timedOut: 0, malformed: 0 };

  for (const name of files) {
    // Aggregate totals from each category so dashboards/AI can reason on one summary file.
    const filePath = path.join(RAW_DIR, name);
    const text = await fs.readFile(filePath, 'utf8');
    const parsed = safeParseJson(text);
    const stats = pickStats(parsed);

    total.passed += stats.passed;
    total.failed += stats.failed;
    total.skipped += stats.skipped;
    total.timedOut += stats.timedOut;
    total.malformed += stats.malformed ? 1 : 0;

    categories.push({
      category: name.replace('.json', ''),
      ...stats,
    });
  }

  const merged = {
    generatedAt: new Date().toISOString(),
    files: files.length,
    totals: total,
    categories,
  };

  await fs.mkdir(path.dirname(OUT_JSON), { recursive: true });
  await fs.writeFile(OUT_JSON, JSON.stringify(merged, null, 2), 'utf8');

  // Also emit a human-readable table for quick inspection in editors/PR comments.
  const lines = [];
  lines.push('# E2B Parallel Playwright Summary');
  lines.push('');
  lines.push(`Generated at: ${merged.generatedAt}`);
  lines.push(`Category reports: ${merged.files}`);
  lines.push('');
  lines.push('## Totals');
  lines.push(`- Passed: ${merged.totals.passed}`);
  lines.push(`- Failed: ${merged.totals.failed}`);
  lines.push(`- Skipped: ${merged.totals.skipped}`);
  lines.push(`- Timed out: ${merged.totals.timedOut}`);
  lines.push(`- Malformed reports: ${merged.totals.malformed}`);
  lines.push('');
  lines.push('## By Category');
  lines.push('| Category | Passed | Failed | Skipped | Timed out | Malformed |');
  lines.push('|---|---:|---:|---:|---:|---:|');
  for (const c of categories) {
    lines.push(`| ${c.category} | ${c.passed} | ${c.failed} | ${c.skipped} | ${c.timedOut} | ${c.malformed ? 'yes' : 'no'} |`);
  }

  await fs.writeFile(OUT_MD, `${lines.join('\n')}\n`, 'utf8');

  console.log(`Merged JSON: ${OUT_JSON}`);
  console.log(`Merged Markdown: ${OUT_MD}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
