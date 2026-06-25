import { Template, waitForTimeout } from 'e2b';

// Main logic: define a reusable E2B sandbox image with Playwright + tests preloaded.
export const template = Template()
  .fromBaseImage()
  .setWorkdir('/app')
  .copy('./package.json', '/app/package.json')
  .copy('./playwright.config.e2b.mjs', '/app/playwright.config.e2b.mjs')
  .copy('./tests', '/app/tests')
  // Install runtime dependencies and browser once at build time to reduce run startup cost.
  .runCmd('cd /app && npm install --omit=dev')
  .runCmd('cd /app && npm install @playwright/test')
  .runCmd('cd /app && npx playwright install --with-deps chromium')
  .setStartCmd('echo "Playwright template ready"', waitForTimeout(5_000));
