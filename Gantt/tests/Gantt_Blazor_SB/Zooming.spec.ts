import {test, expect} from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
      ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
  });

test('1-Zooming initial load', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'zooming?theme=fluent');
    await page.waitForTimeout(4000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Zooming in', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'zooming?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Zoom in
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Zoom out', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'zooming?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Zoom out
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[2]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Zoom fit', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'zooming?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Zoom fit
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Zoom In the parent Records', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'zooming?theme=fluent');
    await page.waitForTimeout(4000);
    //Collapse the parent records
    await page.locator('(//span[contains(@class, "e-icons e-treegridexpand")])[1]').click();
    await page.locator('(//span[contains(@class, "e-icons e-treegridexpand")])[1]').click();
    //Click Zoom in
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Zoom Out the parent Records', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'zooming?theme=fluent');
    await page.waitForTimeout(4000);
    //Collapse the parent records
    await page.locator('(//span[contains(@class, "e-icons e-treegridexpand")])[1]').click();
    await page.locator('(//span[contains(@class, "e-icons e-treegridexpand")])[1]').click();
    //Click Zoom Out
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Zoom to Fit the parent Records', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'zooming?theme=fluent');
    await page.waitForTimeout(4000);
    //Collapse the parent records
    await page.locator('(//span[contains(@class, "e-icons e-treegridexpand")])[1]').click();
    await page.locator('(//span[contains(@class, "e-icons e-treegridexpand")])[1]').click();
    //Click Zoom to Fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});