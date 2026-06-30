import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const isCI = !!process.env.CI;

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 40 * 1000,

  expect: {
    timeout: 5000
  },

  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'playwright-report/results.json' }]
  ],

  use: {
    headless: true,

    // ✅ VERY IMPORTANT → correct server URL
    baseURL: 'http://localhost:5004/',

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],

  // ✅ DO NOT start server here in CI
  webServer: isCI ? undefined : undefined
};

export default config;
