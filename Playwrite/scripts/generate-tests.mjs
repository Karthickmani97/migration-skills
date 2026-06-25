import fs from 'node:fs/promises';
import path from 'node:path';

// Main logic: generate 50 categories x 10 deterministic Playwright tests with optional visual assertions.
const ROOT = process.cwd();
const GENERATED_DIR = path.join(ROOT, 'tests', 'generated');
const CATEGORY_COUNT = 50;
const TESTS_PER_CATEGORY = 10;

function categoryTag(index) {
  // Category tags are used as shard keys in E2B runner (--grep @catXX).
  return `cat${String(index).padStart(2, '0')}`;
}

function fileContent(categoryIndex) {
  const tag = categoryTag(categoryIndex);
  const lines = [];

  lines.push("import { test, expect } from '@playwright/test';");
  lines.push('// Main logic: set false to skip screenshot checks when needed.');
  lines.push('const ENABLE_VISUAL = process.env.ENABLE_VISUAL !== "false";');
  lines.push('');
  lines.push(`test.describe('Category ${tag}', () => {`);

  for (let i = 1; i <= TESTS_PER_CATEGORY; i += 1) {
    const caseId = String(i).padStart(2, '0');
    lines.push(
      `  test('case ${caseId} @${tag}', async ({ page, baseURL }) => {`
    );
    lines.push('    await page.goto(baseURL || "https://example.com");');
    lines.push('    await expect(page).toHaveURL(/example\\.com/);');
    lines.push('    await expect(page.locator("h1")).toContainText("Example Domain");');
    lines.push('    await expect(page.locator("a")).toHaveAttribute("href", /iana\\.org/);');
    lines.push('    if (ENABLE_VISUAL) {');
    lines.push('      // Snapshot name is deterministic so baseline and comparison mapping stay stable.');
    lines.push(`      await expect(page).toHaveScreenshot('${tag}-case-${caseId}.png', { fullPage: true });`);
    lines.push('    }');
    lines.push('  });');
    lines.push('');
  }

  lines.push('});');
  lines.push('');
  return lines.join('\n');
}

async function main() {
  // Regeneration is destructive by design so the suite shape is always predictable.
  await fs.rm(GENERATED_DIR, { recursive: true, force: true });
  await fs.mkdir(GENERATED_DIR, { recursive: true });

  const writes = [];
  for (let i = 1; i <= CATEGORY_COUNT; i += 1) {
    const tag = categoryTag(i);
    const filePath = path.join(GENERATED_DIR, `${tag}.spec.ts`);
    writes.push(fs.writeFile(filePath, fileContent(i), 'utf8'));
  }

  await Promise.all(writes);
  console.log(`Generated ${CATEGORY_COUNT * TESTS_PER_CATEGORY} tests in ${CATEGORY_COUNT} categories.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
