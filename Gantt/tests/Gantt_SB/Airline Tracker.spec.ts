import {test, expect} from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
      ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
  });

test('1-Filter the Origin', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'airline-tracker?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the dropdown record for origin
    await page.locator('(//span[contains(@class, "input")])[2]').click();
    await page.waitForTimeout(500);
    //Select the origin
    await page.locator("(//li[text()='MCO'])").click();
    await page.waitForTimeout(500);
    //Click the search button.
    await page.locator("(//button[text()='Search'])[1]").click()
    await page.waitForTimeout(2000);
    //Screenshot validation-Origin is filtered from the search.
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Search the Destination', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'airline-tracker?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the dropdown record for Destination
    await page.locator('(//span[contains(@class, "input")])[4]').click();
    await page.waitForTimeout(500);
    //Select the Destination
    await page.locator("(//li[text()='ORD'])").click();
    await page.waitForTimeout(500);
    //Click the search button.
    await page.locator("(//button[text()='Search'])[1]").click()
    await page.waitForTimeout(2500);
    //Screenshot validation-Destination is filtered from the search.
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Search the Airlines', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'airline-tracker?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the dropdown record for Airlines
    await page.locator('(//span[contains(@class, "input")])[6]').click();
    await page.waitForTimeout(500);
    //Select the Destination
    await page.locator("(//li[text()='Lufthansa'])").click();
    await page.waitForTimeout(500);
    //Click the search button.
    await page.locator("(//button[text()='Search'])[1]").click()
    await page.waitForTimeout(2500);
    //Screenshot validation-Destination is filtered from the search.
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Filter the Airline', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'airline-tracker?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the 1st parent record
    await page.locator('(//td[contains(@class, "rowcell")])[1]').click();
    await page.waitForTimeout(500);
    //Press Control+ArrowUp on the keyboard to collapse all
    await page.keyboard.press('Control+ArrowUp');
    await page.waitForTimeout(500);
    //Click the dropdown record for Airlines
    await page.locator('(//span[contains(@class, "input")])[6]').click();
    await page.waitForTimeout(500);
    //Select the Destination
    await page.locator("(//li[text()='American Airlines'])").click();
    await page.waitForTimeout(500);
    //Click the search button.
    await page.locator("(//button[text()='Search'])[1]").click()
    await page.waitForTimeout(500);
    //Click the 1st parent record
    await page.locator('(//td[contains(@class, "rowcell")])[1]').click();
    await page.waitForTimeout(500);
    //Press Control+ArrowUp on the keyboard.
    await page.keyboard.press('Control+ArrowDown');
    await page.waitForTimeout(2000);
    //Screenshot validation-Record for Airline selected is in expanded state.
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/905271
test('5-Show the tooltip for Parent Records on chart', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'airline-tracker?theme=fluent2');
    await page.waitForTimeout(2000);
    // Hover over the parent taskbar
    const parentTaskbar = page.locator('(//div[contains(@class,"parent")])[1]');
    await parentTaskbar.hover();
    await page.waitForTimeout(2000);
    // Verify that the tooltip is visible
    const tooltip = page.locator('.container-fluid');
    await expect(tooltip).toBeVisible();
    await page.waitForTimeout(2000);
    // Screenshot validation - Tooltip for parent taskbar displayed
    expect(await tooltip.screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Show the tooltip for child Records on chart side', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'airline-tracker?theme=fluent2');
    await page.waitForTimeout(2000);
    //Hover over the parent taskbar
    await page.locator('(//div[contains(@class,"child")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Tooltip for child taskbar displayed
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Clear the records after selection', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'airline-tracker?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the dropdown record for origin
    await page.locator('(//span[contains(@class, "input")])[2]').click();
    await page.waitForTimeout(500);
    //Select the origin
    await page.locator("(//li[text()='LHR'])").click();
    await page.waitForTimeout(500);
    //Click the search button.
    await page.locator("(//button[text()='Search'])[1]").click()
    await page.waitForTimeout(500);
    //Click the clear button.
    await page.locator("(//button[text()='Clear'])[1]").click()
    await page.waitForTimeout(2000);
    //Screenshot validation-Selected record after updated is cleared.
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Initial load of airline tracker', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'airline-tracker?theme=fluent2');
    await page.waitForTimeout(2000);
    //Screenshot validation-Tooltip for child taskbar displayed
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/980057
test('9-980057', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'airline-tracker?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'airline-tracker?theme=fluent2' });
  await page.waitForTimeout(5000);
  //Click the dropdown record for Airlines
  await page.locator('(//span[contains(@class, "input")])[6]').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-No two scrollbars are rendered
  expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});