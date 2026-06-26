// import { test, expect } from '../Helper/ScriptErrorFinder';
// import { Helper } from '../Helper/helper';

// test('1-Download excel export', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Excel-export');
//   await page.waitForTimeout(500);
//   await page.getByLabel('Excel export').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('2-Download CSV export', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Excel-export');
//   await page.waitForTimeout(500);
//   await page.getByLabel('CSV export').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('3-Customize excel export', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Customize-excel-export');
//   await page.waitForTimeout(500);
//   await page.getByLabel('Excel export').click();
//   await page.waitForTimeout(300);
//   await page.getByLabel('CSV export').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('4-Excel export theme', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Excel-export-theme');
//   await page.waitForTimeout(500);
//   await page.getByLabel('Excel export').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('5-Filename for exported doc', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/File-name-for-exported-document');
//   await page.waitForTimeout(500);
//   await page.getByLabel('Excel export').click();
//   await page.waitForTimeout(300);
//   await page.getByLabel('CSV export').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });