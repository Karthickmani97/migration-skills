import {test, expect} from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
      ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
  });

test('1-Change the response to small', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'ganttresponsive?theme=fluent');
    await page.waitForTimeout(2000);
    //Click to get the dropdown
    await page.locator('(//span[contains(@class,"control")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select small
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(500);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    // await page.locator("(//li[text()='Small'])").click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Change the responsive to Medium', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'ganttresponsive?theme=fluent');
    await page.waitForTimeout(2000);
    //Click to get the dropdown
    await page.locator('(//span[contains(@class,"control")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Medium
    await page.locator("(//li[text()='Medium'])").click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Change the responsive to Large', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'ganttresponsive?theme=fluent');
    await page.waitForTimeout(2000);
    //Click to get the dropdown
    await page.locator('(//span[contains(@class,"control")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Large
    await page.locator("(//li[text()='Large'])").click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Change the responsive to None', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'ganttresponsive?theme=fluent');
    await page.waitForTimeout(2000);
    //Click to get the dropdown
    await page.locator('(//span[contains(@class,"control")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Medium
    await page.locator("(//li[text()='None'])").click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});