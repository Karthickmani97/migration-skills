# Playwright + E2B Parallel Sandbox POC

This project is a full POC to run Playwright test categories in parallel E2B sandboxes.

It implements your requested flow:
1. Use an existing hosted app (`https://example.com`).
2. Generate 500 passable tests (50 categories x 10 tests).
3. Set up E2B and build a custom template.
4. Run categories in parallel across E2B sandboxes.
5. Collect per-sandbox JSON reports and merge them into one summary report.
6. Perform visual screenshot comparison and capture diff images.

## Prerequisites

- Node.js 20+
- npm 10+
- E2B account and API key
- Optional: E2B CLI (`npm i -g @e2b/cli`) if you want CLI workflow too

## Folder layout

- `tests/generated`: auto-generated 500 Playwright tests
- `scripts/generate-tests.mjs`: generates test files
- `e2b/template.mjs`: custom E2B template definition
- `scripts/build-template.dev.mjs`: builds `playwright-runner-dev`
- `scripts/build-template.prod.mjs`: builds `playwright-runner`
- `scripts/run-e2b-parallel.mjs`: runs 50 category jobs in E2B
- `scripts/merge-e2b-results.mjs`: merges category JSON reports
- `reports/e2b/raw`: raw per-category JSON reports

## Step-by-step (beginner friendly)

## 1) Install packages

```bash
npm install
```

## 2) Create .env file

```bash
cp .env.example .env
```

Then edit `.env` and set your real key:

```bash
E2B_API_KEY=e2b_your_real_key
E2B_TEMPLATE=playwright-runner-dev
E2B_PARALLEL_INSTANCES=50
E2B_TIMEOUT_MS=900000
ENABLE_VISUAL=true
```

## 3) Generate 500 tests

```bash
npm run generate:tests
```

You will get:
- 50 files (`cat01.spec.ts` to `cat50.spec.ts`)
- 10 tests in each file
- total 500 tests
- each test includes optional screenshot comparison when `ENABLE_VISUAL=true`

## 4) Create visual baseline snapshots (first time only)

```bash
npx playwright install chromium
npm run test:visual:baseline
```

This creates baseline images under `tests/generated/*-snapshots`.

## 5) Quick local visual verification

```bash
npm run test:visual:cat01
```

On mismatch, Playwright generates expected/actual/diff images in `test-results`.

## 6) Build E2B template

Development template:

```bash
npm run template:build:dev
```

Production template:

```bash
npm run template:build:prod
```

After build succeeds, your template names are:
- `playwright-runner-dev`
- `playwright-runner`

## 7) Run in parallel E2B sandboxes

Run all categories:

```bash
npm run test:e2b:parallel
```

Run a single category:

```bash
npm run test:e2b:cat01
# or
node scripts/run-e2b-parallel.mjs --category=cat01
```

Run a custom list:

```bash
node scripts/run-e2b-parallel.mjs --categories=cat01,cat07,cat23
# or using env
E2B_CATEGORIES=cat01,cat07,cat23 npm run test:e2b:parallel
```

Rerun only failed categories from the previous summary:

```bash
npm run test:e2b:failed
# equivalent:
node scripts/run-e2b-parallel.mjs --failed-from=reports/e2b/run-summary.json
```

What this does:
- creates one sandbox per selected category
- executes `@catXX` tests in that sandbox
- downloads JSON report for each category
- downloads per-category artifact bundle with screenshots and diff images
- kills sandbox after completion
- writes run summary to `reports/e2b/run-summary.json`

## 8) Merge and view reports

```bash
npm run report:e2b:merge
npm run report:e2b:visual-index
```

Outputs:
- `reports/e2b/merged-summary.json`
- `reports/e2b/merged-summary.md`
- `reports/e2b/visual-index.json` (AI-friendly visual artifact index)
- `reports/e2b/visual-index.md` (quick human summary)

Or run both report steps together:

```bash
npm run report:e2b:all
```

Visual artifacts output:
- `reports/e2b/artifacts/*.tgz`

Extract one category bundle:

```bash
mkdir -p reports/e2b/artifacts/cat01
tar -xzf reports/e2b/artifacts/cat01-artifacts.tgz -C reports/e2b/artifacts/cat01
```

Then inspect diff images inside extracted `test-results` directories.

### AI-readable visual format

`reports/e2b/visual-index.json` includes:
- per-category extraction status
- per-category totals for visual groups and diff count
- per-visual record with expected/actual/diff image paths
- optional status/error metadata joined from Playwright JSON reports

## Useful notes

- If your E2B plan does not allow 50 concurrent sandboxes, lower `E2B_PARALLEL_INSTANCES` (for example 10 or 20).
- This POC is intentionally simple and stable for learning.
- You can replace `https://example.com` later with your real web app URL.
- Rebuild template after baseline updates so new snapshots are copied into sandbox template.

## Next upgrades for real project

- Replace generated dummy tests with your actual tests.
- Use Playwright blob reporter and merge reports for richer HTML output.
- Add retries and rerun only failed categories.
- Upload screenshots/videos/traces from each sandbox as artifacts.
