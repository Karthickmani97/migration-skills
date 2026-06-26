import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Scroll vertically', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/virtual');
  await page.waitForTimeout(2000);
  await page.locator(".e-chart-scroll-container.e-content").click();
  await page.mouse.wheel(0,4416)
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Check dependency line in editing sample', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator(".e-chart-scroll-container.e-content").click();
  await page.mouse.wheel(0,235)
  await page.waitForTimeout(2000);
  await page.locator(".e-chart-scroll-container.e-content").click();
  await page.mouse.wheel(441,550);
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/923207
test('3-Vertical scrollbar issue in SB sample', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'overview?theme=fluent');
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903082
test('4-Copy the Record with Header', async ({ page, context }) => {
  // Navigate to the initial page
  await page.goto(Helper.baseUrl + 'clipboard?theme=fluent');
  // Wait for the page to load
  await page.waitForTimeout(2000);
  // Grant permissions for clipboard access
 // await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  // Select and copy the text on the page
  await page.locator("(//span[text()='Define the product usage'])").click();
  await page.waitForTimeout(800);
  //Click Copy
  await page.locator('(//span[contains(@class,"e-copy")])[1]').click();
  await page.waitForTimeout(1000);
  // Open a new tab and navigate to the Text Area component
  await page.goto('https://ej2.syncfusion.com/demos/#/fluent2/textarea/default.html');
  await page.waitForTimeout(3000);
  // Paste the copied value into the text area
  await page.locator("(//textarea[contains(@class,'e-textarea')])[3]").click({ force: true });
  await page.waitForTimeout(1000);
  await page.keyboard.press('Control+V');
  await page.waitForTimeout(3000);
  // Screenshot validation - Check if the value is printed correctly
  expect(await page.locator("(//textarea[contains(@class,'e-control')])[3]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});