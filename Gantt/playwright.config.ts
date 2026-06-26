import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const isCI = !!process.env.CI; // Detect CI / sandbox

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
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'testResults.xml' }]
  ],

  use: {
    headless: true,
    actionTimeout: 0,

    launchOptions: {
      ignoreDefaultArgs: ['--hide-scrollbars'],
    },

    // ✅ VERY IMPORTANT
    // Use baseURL instead of webServer in shared VM
    baseURL: 'http://127.0.0.1:5004',

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],

  /**
   * ✅ KEY FIX
   * Only start webServer in LOCAL (not in sandbox/CI)
   */
  webServer: isCI
    ? undefined // ✅ disable in VM / E2B
    : [
        {
          command: 'npm run start-server',
          url: 'http://127.0.0.1:5004',
          reuseExistingServer: true,
          timeout: 300000,
        },
        {
          command: 'npm run start-locale',
          url: 'http://127.0.0.1:5001',
          reuseExistingServer: true,
          timeout: 300000,
        }
      ],
};

export default config;