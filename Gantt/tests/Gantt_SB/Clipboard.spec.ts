import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
test('1-Clipboard initial load', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'clipboard?theme=fluent');
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Copy the Record with Header', async ({ page, context }) => {
  // Navigate to the initial page
  await page.goto(Helper.baseUrl + 'clipboard?theme=fluent');
  // Wait for the page to load
  await page.waitForTimeout(2000);
  // Grant permissions for clipboard access
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  // Select and copy the text on the page
  await page.locator('(//td[contains(@class, "rowcell")])[9]').click();
  await page.waitForTimeout(800);
  //Click Copy
  await page.locator('(//span[contains(@class,"e-copy")])[1]').click();
  await page.waitForTimeout(1000);
  // Open a new tab and navigate to the Text Area component
  await page.goto('https://ej2.syncfusion.com/demos/#/fluent2/textarea/default.html');
  await page.waitForTimeout(2000);
  // Paste the copied value into the text area
  await page.locator("(//textarea[contains(@class,'e-textarea')])[3]").click({ force: true });
  await page.waitForTimeout(1000);
  await page.keyboard.press('Control+V');
  await page.waitForTimeout(3000);
  // Screenshot validation - Check if the value is printed correctly
  expect(await page.locator("(//textarea[contains(@class,'e-control')])[3]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Copy the Record', async ({ page, context }) => {
  // Navigate to the initial page
  await page.goto(Helper.baseUrl + 'clipboard?theme=fluent');
  // Wait for the page to load
  await page.waitForTimeout(2000);
  // Grant permissions for clipboard access
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  // Select and copy the text on the page
  await page.locator('(//td[contains(@class, "rowcell")])[9]').click();
  await page.waitForTimeout(800);
  //Click Copy
  await page.locator('(//span[contains(@class,"e-copy")])[2]').click();
  await page.waitForTimeout(1000);
  // Open a new tab and navigate to the Text Area component
  await page.goto('https://ej2.syncfusion.com/demos/#/fluent2/textarea/default.html');
  await page.waitForTimeout(2000);
  // Paste the copied value into the text area
  await page.locator("(//textarea[contains(@class,'e-textarea')])[3]").click({ force: true });
  await page.waitForTimeout(1000);
  await page.keyboard.press('Control+V');
  await page.waitForTimeout(3000);
  // Screenshot validation - Check if the value is printed correctly
  expect(await page.locator("(//textarea[contains(@class,'e-control')])[3]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Expand the records', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'clipboard?theme=fluent');
  await page.waitForTimeout(5000);
  //Click collapse icon to collapse parent record
  await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
  await page.waitForTimeout(800);
  //Click Expand icon to Expand the record
  await page.locator('(//span[contains(@class,"e-treegridcollapse")])[1]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Collapse the records', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'clipboard?theme=fluent');
  await page.waitForTimeout(5000);
  //Click collapse icon to collapse parent record
  await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
