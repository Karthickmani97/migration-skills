import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
  launchOptions: {
    ignoreDefaultArgs: [], // Disable the scrollbar argument
  },
});

test('1-Default Functionalities initial load', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'default-functionalities?theme=fluent');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-collapse parent record through treegrid icon', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'default-functionalities?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-expand parent record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'default-functionalities?theme=fluent');
  await page.waitForTimeout(4000);
  //Click to Collapse
  await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
  //Click to Expand parent record
  await page.locator('(//span[contains(@class,"e-treegridcollapse")])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Navigate to chart side through tab key', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'default-functionalities?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@role, "gridcell")])[6]').click();
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});