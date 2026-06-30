const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 40 * 1000,

  expect: { timeout: 5000 },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'playwright-report/results.json' }]
  ],

  use: {
    headless: true,
    baseURL: 'http://127.0.0.1:5004',
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

  // ✅ FIXED
  webServer: {
    command: 'npm start', // <-- change as per your app
    url: 'http://127.0.0.1:5004',
    timeout: 120000,
    reuseExistingServer: !process.env.CI
  }
};
``
