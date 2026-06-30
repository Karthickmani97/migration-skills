import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Resource view row height initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRowheight');
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-check eventmarkers and holidays label', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRowheight');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Collapse all' }).click();
  await page.waitForTimeout(500);
  await page.locator('.e-left-label-inner-div').first().click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Overallocation lines and zoom-to-fit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRowheight');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Overallocation Show/Hide' }).click();
  await page.waitForTimeout(400);
  await page.getByRole('button', { name: 'Zoom to fit' }).click();
  await page.waitForTimeout(400);
  await page.getByRole('button', { name: 'Overallocation Show/Hide' }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

