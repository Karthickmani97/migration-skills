import {test, expect} from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
      ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
  });

test('1-Initial load of the Human resource', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'human-resource-management?theme=fluent2');
    await page.waitForTimeout(2000);
    //Screenshot validation-All records displayed on initial load and Recruitment Team
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Switched to Accounts Team From Recruitment', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'human-resource-management?theme=fluent2');
    await page.waitForTimeout(2000);
    //Select to open the dropdown
    await page.locator('(//span[contains(@class, "sf-hr-dropdown")])[1]').click();
    await page.waitForTimeout(500);
    //Select Accounts Team
    await page.locator("(//li[text()='Accounts Team'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Switched from Recruitment team to Accounts Team.
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Switch to Inventory Team .', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'human-resource-management?theme=fluent2');
    await page.waitForTimeout(2000);
    //Select to open Inventory Team
    await page.locator('(//span[contains(@class, "sf-hr-dropdown")])[1]').click();
    await page.waitForTimeout(500);
    //Select Inventory  Team
    await page.locator("(//li[text()='Inventory Team'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Switched  to Inventory Team.
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
