import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Collapse of the records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Mapping-the-duration-unit-field');
  await page.waitForTimeout(500);
  await page.getByLabel('1 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(500);
  await page.getByLabel('5 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Expand all of the records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Mapping-the-duration-unit-field');
  await page.waitForTimeout(500);
  await page.getByLabel('1 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(500);
  await page.getByLabel('5 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(500);
  await page.getByLabel('1 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(500);
  await page.getByLabel('5 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
