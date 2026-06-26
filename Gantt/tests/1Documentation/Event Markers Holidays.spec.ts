import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Event Markers tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Eventmarkers');
  await page.waitForTimeout(500);
  await page.getByLabel('Event marker for Project approval and kick-off on 4/11/2022').getByText('Project approval and kick-off').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Holidays initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/holidays');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Holidays when collapse all parent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/holidays');
  await page.waitForTimeout(500);
  await page.getByLabel('1 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(200);
  await page.getByLabel('5 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(400);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});





