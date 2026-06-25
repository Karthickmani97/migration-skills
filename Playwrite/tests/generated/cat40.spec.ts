import { test, expect } from '@playwright/test';
const ENABLE_VISUAL = process.env.ENABLE_VISUAL !== "false";

test.describe('Category cat40', () => {
  test('case 01 @cat40', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat40-case-01.png', { fullPage: true });
    }
  });

  test('case 02 @cat40', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat40-case-02.png', { fullPage: true });
    }
  });

  test('case 03 @cat40', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat40-case-03.png', { fullPage: true });
    }
  });

  test('case 04 @cat40', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat40-case-04.png', { fullPage: true });
    }
  });

  test('case 05 @cat40', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat40-case-05.png', { fullPage: true });
    }
  });

  test('case 06 @cat40', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat40-case-06.png', { fullPage: true });
    }
  });

  test('case 07 @cat40', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat40-case-07.png', { fullPage: true });
    }
  });

  test('case 08 @cat40', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat40-case-08.png', { fullPage: true });
    }
  });

  test('case 09 @cat40', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat40-case-09.png', { fullPage: true });
    }
  });

  test('case 10 @cat40', async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://example.com");
    await expect(page).toHaveURL(/example\.com/);
    await expect(page.locator("h1")).toContainText("Example Domain");
    await expect(page.locator("a")).toHaveAttribute("href", /iana\.org/);
    if (ENABLE_VISUAL) {
      await expect(page).toHaveScreenshot('cat40-case-10.png', { fullPage: true });
    }
  });

});
