import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Parent indicator tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Data-markers');
  await page.waitForTimeout(1000);
  await page.getByLabel('Indicator for product on 1/11/2022').locator('i').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Child indicator tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Data-markers');
  await page.waitForTimeout(1000);
  await page.getByLabel('Indicator for product on 1/8/2022').locator('i').click();
  await page.waitForTimeout(1000);
expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Indicator tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Data-markers');
  await page.waitForTimeout(1000);
  await page.getByLabel('Indicator for customer on 1/11/2022').locator('i').click();
  await page.waitForTimeout(1000);
expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});