import { test, expect } from '@playwright/test';
const ENABLE_VISUAL = process.env.ENABLE_VISUAL !== "false";

test.describe('Category cat39', () => {
  test('case 01 @cat39', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat39-case-01.png', { fullPage: true });
    }
  });

  test('case 02 @cat39', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat39-case-02.png', { fullPage: true });
    }
  });

  test('case 03 @cat39', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat39-case-03.png', { fullPage: true });
    }
  });

  test('case 04 @cat39', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat39-case-04.png', { fullPage: true });
    }
  });

  test('case 05 @cat39', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat39-case-05.png', { fullPage: true });
    }
  });

  test('case 06 @cat39', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat39-case-06.png', { fullPage: true });
    }
  });

  test('case 07 @cat39', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat39-case-07.png', { fullPage: true });
    }
  });

  test('case 08 @cat39', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat39-case-08.png', { fullPage: true });
    }
  });

  test('case 09 @cat39', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat39-case-09.png', { fullPage: true });
    }
  });

  test('case 10 @cat39', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat39-case-10.png', { fullPage: true });
    }
  });

});
