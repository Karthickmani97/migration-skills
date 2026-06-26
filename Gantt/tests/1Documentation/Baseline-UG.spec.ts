import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Baseline initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/baseline-ug');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Baseline tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/baseline-ug');
  await page.waitForTimeout(500);
  await page.getByLabel('Name Perform soil test Baseline Start Date 4/4/2022 Baseline End Date 4/9/2022').click();
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Baseline milestone tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/baseline-ug');
  await page.waitForTimeout(500);
  await page.locator("(//div[contains(@class,'gantt-milestone')])[2]").click();
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});




