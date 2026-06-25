import { defineConfig } from '@playwright/test';

// Main logic: local Playwright config for deterministic visual checks and stable screenshots.
export default defineConfig({
  testDir: './tests/generated',
  fullyParallel: true,
  timeout: 30_000,
  outputDir: 'test-results',
  expect: {
    timeout: 5_000,
    toHaveScreenshot: {
      animations: 'disabled',
      caret: 'hide',
      maxDiffPixelRatio: 0.01,
    },
  },
  retries: 0,
  reporter: [['list']],
  use: {
    baseURL: 'https://example.com',
    headless: true,
    viewport: {
      width: 1280,
      height: 720,
    },
  },
});
