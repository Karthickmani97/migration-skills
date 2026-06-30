import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Add new task by context menu', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/emptyandload');
    await page.waitForTimeout(500);
    //Right click the record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[2]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Press ArrowDown key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    //Press ArrowDown key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    //Press Enter key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    //Press Tab key
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(200);
    //Press Enter key
    await page.keyboard.press('Enter');
    await page.waitForTimeout(200);
    //Click the record
    await page.locator('(//td[contains(@class, "e-rowcell ")])[8]').click();
    await page.waitForTimeout(500);
    //Screenshot validation-New record is added through context menu
    expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Rendering gantt in SfTab', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/SfTab');
    await page.waitForTimeout(500);
    //Click to render the Gantt Chart
    await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
    await page.waitForTimeout(800);
    //Screenshot validation-The Gantt Chart is rendered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  });