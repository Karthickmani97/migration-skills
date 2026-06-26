import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Set height and width', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Set-width-and-height');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Responsive with the paret container', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Responsive-with-the-parent-container');
  await page.waitForTimeout(1000);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Auto scroll to the taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Auto-scroll-to-taskbar');
  await page.waitForTimeout(500);
  await page.getByRole('cell', { name: 'Name Estimation approval Start Date 5/16/2022' }).getByRole('status').first().click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Scroll by exteral button inital load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Scroll-the-content-by-external-button');
  await page.waitForTimeout(2500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Scroll columns horizontally', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Scroll-the-content-by-external-button');
  await page.waitForTimeout(2500);
  await page.getByRole('textbox').first().click();
  await page.waitForTimeout(100);
  await page.getByRole('textbox').first().fill('4');
  await page.waitForTimeout(100);
  await page.getByRole('button', { name: 'Scroll Horizontally' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Scroll gantt rows vertically', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Scroll-the-content-by-external-button');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox').nth(1).click();
  await page.waitForTimeout(100);
  await page.getByRole('textbox').nth(1).fill('1000');
  await page.waitForTimeout(100);
  await page.getByRole('button', { name: 'Scroll Vertically' }).click();
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Scroll horizontal and vertically till bottom', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Scroll-the-content-by-external-button');
  await page.waitForTimeout(2500);
  await page.getByRole('textbox').first().click();
  await page.waitForTimeout(100);
  await page.getByRole('textbox').first().fill('9');
  await page.waitForTimeout(100);
  await page.getByRole('button', { name: 'Scroll Horizontally' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox').nth(1).click();
  await page.waitForTimeout(200);
  await page.getByRole('textbox').nth(1).fill('5000');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Scroll Vertically' }).click();
  await page.waitForTimeout(3000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-SCroll bottom to top', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Scroll-the-content-by-external-button');
  await page.waitForTimeout(2000);
  // Click on a cell to focus
  await page.locator("(//td[contains(@class,'rowcell')])[8]").click();
  await page.waitForTimeout(500);
  // Click on the textbox and fill with '3000' to scroll down
  await page.getByRole('textbox').nth(1).click();
  await page.waitForTimeout(100);
  await page.getByRole('textbox').nth(1).fill('3000');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Scroll Vertically' }).click();
  await page.waitForTimeout(3000);
  // Click on the textbox and fill with '-3000' to scroll up
  await page.getByRole('textbox').nth(1).click();
  await page.waitForTimeout(200);
  await page.getByRole('textbox').nth(1).fill('-3000');
  await page.waitForTimeout(100);
  await page.getByRole('button', { name: 'Scroll Vertically' }).click();
  await page.waitForTimeout(3000);
  // Validate the screenshot- scroll up
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Freeze particular column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Freeze-particular-column');
  await page.waitForTimeout(1200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Freeze direction left and right', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Freeze-direction');
  await page.waitForTimeout(1200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Add or remove frozen column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Add-or-remove-frozen-columns-by-dragging-the-column-separator');
  await page.waitForTimeout(1200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('12-Dragging frozen line', async ({ page }) => {
//   // Navigate to the test page
//   await page.goto(Helper.baseUrlserver + '/Add-or-remove-frozen-columns-by-dragging-the-column-separator');
// await page.waitForTimeout(1200);

//   // Locate the draggable element (column separator) dynamically
//   const columnSeparator = await page.locator('//div[contains(@class,"e-split-bar e-split-bar-horizontal)]').first();
  
//   // Verify the element exists
//   if (!(await columnSeparator.isVisible())) {
//     throw new Error('Column separator not found or not visible');
//   }

//   // Get the bounding box of the separator to calculate drag coordinates dynamically
//   const boundingBox = await columnSeparator.boundingBox();
//   if (!boundingBox) {
//     throw new Error('Could not retrieve bounding box for the column separator');
//   }

//   // Perform drag action
//   await columnSeparator.click(); // Click to focus
//   await page.mouse.down();
//   // Move relative to the element's position (e.g., drag 100 pixels to the right)
//   await page.mouse.move(boundingBox.x + 100, boundingBox.y + boundingBox.height / 2, { steps: 10 });
//   await page.mouse.up();

//   // Wait for any animations or updates to complete
//   await page.waitForTimeout(1000);
//  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('13-Change deafult frozen line color', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Change-default-frozen-line-color');
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

