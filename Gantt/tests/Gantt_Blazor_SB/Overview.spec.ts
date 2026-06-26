// import { test, expect } from '../Helper/ScriptErrorFinder';
// import { Helper } from '../Helper/helper';
// import { pdf } from 'pdf-to-img';

// test.use({
//   launchOptions: {
//     ignoreDefaultArgs: [], // Disable the scrollbar argument
//   },
// });
// test('1-Overview initial load', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(5000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('2-Change default view to grid view', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   // Navigate to the overview page with the fluent theme
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(1000);
//   // Click on the settings icon
//   await page.locator('(//span[contains(@class, "settings")])[2]').click();
//   await page.waitForTimeout(1000);
//   // Click on the dropdown to change the view to grid
//   await page.locator('(//span[contains(@class,"e-custom e-keyboard")])[1]').click();
//   await page.waitForTimeout(500);
//   // Navigate through the dropdown options
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(200);
//   // Click on the first cell in the grid
//   await page.locator('(//td[contains(@class,"e-rowcell ")])[1]').click();
//   await page.waitForTimeout(1000);
//   // Screenshot validation - The view should be changed to grid view
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('3-Change grid view to chart view', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   // Navigate to the overview page with the fluent theme
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(1000);
//   // Click on the settings icon
//   await page.locator('(//span[contains(@class, "settings")])[2]').click();
//   await page.waitForTimeout(1000);
//   // Click on the dropdown to change the view to chart
//   await page.locator('(//span[contains(@class, "input")])[9]').click();
//   await page.waitForTimeout(500);
//   // Press the ArrowDown key on the keyboard
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(300);
//   // Press the ArrowDown key again
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(300);
//   // Press the ArrowDown key again
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(300);
//   // Press the Enter key to confirm the selection
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(1000);
//   // Screenshot validation - The view should be changed to chart view
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('4-Navigate to chart side through tab key', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(4000);
//   await page.locator('//*[@id="treeGridGanttOverview_gridcontrol_content_table"]/tbody/tr[1]/td[1]').click();
//   await page.waitForTimeout(300);
//   await page.keyboard.press('Tab');
//   await page.waitForTimeout(300);
//   await page.keyboard.press('Tab');
//   await page.waitForTimeout(300);
//   await page.keyboard.press('Tab');
//   await page.waitForTimeout(300);
//   await page.keyboard.press('Tab');
//   await page.waitForTimeout(300);
//   await page.keyboard.press('Tab');
//   await page.waitForTimeout(500);
//   await page.keyboard.press('Tab');
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //Failed only in CI report
// // test('5-Collapse all the records', async ({ page }) => {
// //   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
// //   await page.waitForTimeout(5000);
// //   //Collapse all 
// //   await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
// //   await page.waitForTimeout(2500);
// //   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// // });

// test('6-Expand all the records', async ({ page }) => {
//   //await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Collapse all
//   await page.locator('#GanttOverview_collapseall').click();
//   await page.waitForTimeout(500);
//   //Expand all
//   await page.locator('#GanttOverview_expandall').click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-Records are in expanded state
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('7-Autofit all columns', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(4000);
//   //Click the column menu
//   await page.locator('(//div[contains(@class, "e-icons")])[4]').click();
//   await page.waitForTimeout(2000);
//   //Click Autofit all columns
//   await page.locator('(//li[@class="e-menu-item"])[1]').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('8-Autofit this columns', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   // Navigate to the overview page with the fluent theme
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(1000);
//   // Click the column menu
//   await page.locator('(//div[contains(@class, "e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   // Click Autofit all columns
//   await page.locator('(//li[contains(@class, "e-menu-item")])[2]').click();
//   await page.waitForTimeout(1000);
//   // Screenshot validation - The columns should be autofitted
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('9-Sort ascending of the column', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   // Navigate to the overview page with the fluent theme
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(1000);
//   // Click the column menu
//   await page.locator('(//div[contains(@class, "e-icons")])[4]').click();
//   await page.waitForTimeout(700);
//   // Click to sort ascending
//   await page.locator('(//li[contains(@class, "e-menu-item")])[3]').click();
//   await page.waitForTimeout(1200);
//   // Screenshot validation - The column should be sorted in ascending order
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('10-Sort descending of the column', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   // Navigate to the overview page with the fluent theme
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(1000);
//   // Click the column menu
//   await page.locator('(//div[contains(@class, "e-icons")])[4]').click();
//   await page.waitForTimeout(700);
//   // Click to sort descending
//   await page.locator('(//li[contains(@class, "e-menu-item")])[4]').click();
//   await page.waitForTimeout(1200);
//   // Screenshot validation - The column should be sorted in descending order
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('11-Sort the columns and uncheck the columns', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   // Navigate to the overview page with the fluent theme
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(1000);
//   // Click the column menu
//   await page.locator('(//div[contains(@class, "e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   // Hover to sort columns
//   await page.locator('(//li[contains(@class, "e-menu-item")])[5]').hover();
//   await page.waitForTimeout(1000);
//   // Uncheck Assignee column
//   await page.locator('(//li[contains(@class, "e-menu-item")])[9]').click();
//   await page.waitForTimeout(1000);
//   // Screenshot validation - The Assignee column should be unchecked
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('12-Add the ID column', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   // Navigate to the overview page with the fluent theme
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(3500);
//   // Click the column menu
//   await page.locator('(//div[contains(@class, "e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   // Hover to sort columns
//   await page.locator('(//li[contains(@class, "e-menu-item")])[5]').hover();
//   await page.waitForTimeout(500);
//   // Click on ID checkbox to add the column
//   await page.locator('(//span[contains(@class, "e-icons e-frame")])[2]').click();
//   await page.waitForTimeout(500);
//   // Screenshot validation - The ID column should be added
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //failed only in CI report

// // test('13-Filtering the column status, with starts with operator', async ({ page }) => {
// //   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
// //   await page.waitForTimeout(4000);
// //   //Click the column menu
// //   await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[1]').click();
// //   await page.waitForTimeout(1000);
// //   //Hover to filter
// //   await page.locator('(//li[contains(@class, "e-menu-item")])[6]').hover();
// //   await page.waitForTimeout(500);
// //   await page.locator('(//input[contains(@class, "e-control e-autocomplete e-lib e-input")])[1]').fill('Batch Editing');
// //   //Click to Filter button
// //   await page.keyboard.press("Enter");
// //   await page.waitForTimeout(1000);
// //   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// // });

// test('14-Column resizing', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   // Navigate to the overview page with the fluent theme
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(1000);
//   // Click on the settings icon
//   await page.locator('(//span[contains(@class, "settings")])[2]').click();
//   await page.waitForTimeout(800);
//   // Switch to Grid view
//   await page.locator('(//span[contains(@class,"e-custom e-keyboard")])[1]').click();
//   await page.waitForTimeout(500);
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(100);
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(100);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(1000);
//   // Click on the first cell in the grid
//   await page.locator('(//td[contains(@class,"e-rowcell ")])[1]').click();
//   await page.waitForTimeout(300);
//   // Click on the column resize handler
//   await page.locator('(//div[contains(@class, "e-rhandler e-rcursor")])[1]').click();
//   await page.waitForTimeout(1000);
//   // Perform column resizing
//   await page.mouse.click(1015, 329);
//   await page.mouse.down();
//   await page.mouse.move(1015, 329);
//   await page.mouse.move(1185, 330);
//   await page.mouse.up();
//   await page.waitForTimeout(1000);
//   // Screenshot validation - The column should be resized
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('15-Editing status column with null value', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(1000);
//   //Click settings
//   await page.locator('(//span[contains(@class, "settings")])[2]').click();
//   await page.waitForTimeout(500);
//   //Grid, click the dropdown
//   await page.locator('(//span[contains(@class, "input")])[9]').click();
//   await page.waitForTimeout(500);
//   //Click to select Grid
//   await page.locator("(//li[text()='Grid'])").click();
//   await page.waitForTimeout(500);
//   //Click the parent record
//   await page.locator('(//td[contains(@class,"rowcell ")])[1]').click();
//   await page.waitForTimeout(500);
//   //Click the status for the parent record
//   await page.locator('(//td[contains(@class, "rowcell")])[4]').dblclick();
//   await page.waitForTimeout(1000);
//   //Passing null value
//   await page.locator('#DataItem___Status').fill('')
//   await page.waitForTimeout(500);
//   //Press the Enter button on the keyboard
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(1000);
//   //Screenshot validation-the status column when updated should be saved with having a Null value
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //diabled editing for assignee column

// // test('16-Editing Assingee column through cell edit', async ({ page }) => {
// //   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
// //   await page.waitForTimeout(1000);
// //   //Click the settings
// //   await page.locator('(//span[contains(@class, "settings")])[2]').click();
// //   await page.waitForTimeout(500);
// //   //click to select from dropdown , Grid
// //   await page.locator('(//span[contains(@class, "input")])[9]').click();
// //   await page.waitForTimeout(500);
// //   //Click to select Grid
// //   await page.locator("(//li[text()='Grid'])").click();
// //   await page.waitForTimeout(500);
// //   //Click the first parent record
// //   await page.locator('(//td[contains(@class,"rowcell ")])[1]').click();
// //   await page.waitForTimeout(500);
// //   //Click Assignee
// //   await page.locator('(//td[contains(@class, "rowcell")])[3]').dblclick();
// //   await page.waitForTimeout(1000);
// //   //Passing null value
// //   await page.locator('(//input[contains(@class, "control")])[10]').fill("");
// //   await page.waitForTimeout(500);
// //   //Press the Enter button on the keyboard
// //   await page.keyboard.press("Enter");
// //   await page.waitForTimeout(1000);
// //   //Screenshot validation-the Assignee column when updated should be saved with having a Null value
// //   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// // });

// test('17-Editing Priority column through cell edit', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Double click status column
//   await page.locator('(//td[contains(@class, "rowcell")])[32]').dblclick();
//   await page.waitForTimeout(1000);
//   //Passing null value
//   await page.locator('#DataItem___Status').fill("");
//   await page.waitForTimeout(500);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('18-Show the Grid lines', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   // Navigate to the overview page with the fluent theme
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(1000);
//   // Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(500);
//   // Click to show the Grid lines
//   await page.locator('(//span[contains(@class,"switch")])[4]').click();
//   await page.waitForTimeout(500);
//   // Move the Row height slider
//   await page.mouse.move(1160, 313);
//   await page.mouse.down();
//   await page.mouse.move(1160, 313);
//   await page.mouse.move(1274, 310);
//   await page.mouse.up();
//   // Click to Close the settings
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(1000);
//   // Screenshot validation - The grid lines should be shown
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('19-Show the Event Makers and Zoom Fit', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(500);
//   //Click to show the Event Makers
//   await page.locator('(//span[contains(@class,"switch")])[8]').click();
//   await page.waitForTimeout(500);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(500);
//   //Zoom Fit
//   await page.locator('(//span[contains(@class,"zoomtofit")])[1]').click();
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('20-Change the Work Week and show the Taskbar labels', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(1700);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(200);
//   //Click to change the Work week
//   await page.locator('(//input[contains(@class,"multiselect")])[1]').click();
//   await page.waitForTimeout(1000);
//   //Select the day
//   await page.keyboard.press('ArrowDown');
//   await page.waitForTimeout(500);
//   //To select the work week day
//   await page.keyboard.press('Enter');
//   await page.waitForTimeout(500);
//   //To remobe the selection
//   await page.keyboard.press('Tab');
//   await page.waitForTimeout(500);
//   //Click to show taskbar labels
//   await page.locator('(//span[contains(@class,"switch")])[16]').click();
//   await page.waitForTimeout(500);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(1700);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('21-Change the Duration to Minutes', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(200);
//   //Click to change Duration
//   await page.locator('(//span[contains(@class,"input")])[1]').click();
//   await page.waitForTimeout(200);
//   //Select the Minutes
//   await page.locator("(//li[text()='Minute'])[1]").click();
//   await page.waitForTimeout(200);
//   //Click to disable the dependency 
//   await page.locator('(//span[contains(@class,"switch")])[12]').click();
//   await page.waitForTimeout(200);
//   //Change view mode to chart
//   await page.locator('(//span[contains(@class,"input")])[8]').click();
//   await page.waitForTimeout(200);
//   //Change chart
//   await page.locator("(//li[text()='Chart'])[1]").click();
//   await page.waitForTimeout(200);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('22-Change the Timeline width', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(200);
//   //Click to change Timeline width
//   await page.locator('(//span[contains(@class,"e-spin-up")])[1]').click();
//   await page.waitForTimeout(200);
//   //Select to show Grid Lines
//   await page.locator('(//span[contains(@class,"switch")])[4]').click();
//   await page.waitForTimeout(200);
//   //Click to show Event Makers 
//   await page.locator('(//span[contains(@class,"switch")])[8]').click();
//   await page.waitForTimeout(200);
//   //Click to show Task Labels
//   await page.locator('(//span[contains(@class,"switch")])[16]').click();
//   await page.waitForTimeout(200);
//   //Change view mode to chart
//   await page.locator('(//span[contains(@class,"input")])[8]').click();
//   await page.waitForTimeout(200);
//   //Change chart
//   await page.locator("(//li[text()='Chart'])[1]").click();
//   await page.waitForTimeout(200);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('23-Increase the Row Height after Zoom Fit', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Zoom Fit
//   await page.locator('(//span[contains(@class,"zoomtofit")])[1]').click();
//   await page.waitForTimeout(500);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(1000);
//   //Move the Rowheight to 60
//   await page.locator('(//div[contains(@class, "e-handle e-handle-first")])').click();
//   await page.waitForTimeout(500);
//   await page.mouse.down();
//   await page.mouse.move(1625, 393);
//   await page.mouse.move(1804, 393);
//   await page.mouse.up();
//   await page.waitForTimeout(800);
//   //Change view mode to chart
//   await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group e-control-container e-control-wrapper e-custom e-keyboard")])').click();
//   await page.waitForTimeout(500);
//   //Change chart
//   await page.locator("(//li[text()='Chart'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-Row height should be increased after Zoom Fit
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('24-Zoom Out and change view to chart side.', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(1000);
//   //Change view mode to chart
//   await page.locator('(//span[contains(@class,"input")])[8]').click();
//   await page.waitForTimeout(200);
//   //Change chart
//   await page.locator("(//li[text()='Chart'])[1]").click();
//   await page.waitForTimeout(200);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(200);
//   //Zoom Out
//   await page.locator('(//span[contains(@class,"zoomout")])[1]').click();
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('25-Zoom In and change view to chart side.', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(800);
//   //Change view mode to chart
//   await page.locator('(//span[contains(@class,"input")])[8]').click();
//   await page.waitForTimeout(500);
//   //Change chart
//   await page.locator("(//li[text()='Chart'])[1]").click();
//   await page.waitForTimeout(200);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(200);
//   //Zoom In
//   await page.locator('(//span[contains(@class,"zoomin")])[1]').click();
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('26-Timeline Width and Change of the Duration', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(200);
//   //Change view mode to chart
//   await page.locator('(//span[contains(@class,"input")])[8]').click();
//   await page.waitForTimeout(500);
//   //Change chart
//   await page.locator("(//li[text()='Chart'])[1]").click();
//   await page.waitForTimeout(600);
//   //Zoom In
//   await page.locator('(//span[contains(@class,"zoomin")])[1]').click();
//   await page.waitForTimeout(500);
//   //Click to Edit the Timeline Width
//   await page.locator('(//input[contains(@class,"e-control e-numerictextbox e-lib e-input")])[1]').fill('50');
//   await page.waitForTimeout(500);
//   //Duration to Edit
//   await page.locator('(//span[contains(@class,"input")])[1]').click();
//   await page.waitForTimeout(500);
//   //Enter the Duration
//   await page.locator("(//li[text()='Day'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/922472
// test('27-Change the View type to Resource view', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(200);
//   //Click the View type to select resource view
//   await page.locator('(//span[contains(@class,"input")])[7]').click();
//   await page.waitForTimeout(500);
//   //Select Resource view
//   await page.locator("(//li[text()='Resource view'])").click();
//   await page.waitForTimeout(500);
//   //Zoom In
//   await page.locator('(//span[contains(@class,"zoomin")])').click();
//   await page.waitForTimeout(200);
//   //Show Grid lines
//   await page.locator('(//span[contains(@class,"switch-handle")])[1]').click();
//   await page.waitForTimeout(500);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-view should be changed to Resource view and chart side taskbars zoomed in and Grid lines shown.
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //disabled editing for assingee column

// // test('28-Edit the Assignee and status to be Null value and Zoom In', async ({ page }) => {
// //   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
// //   await page.waitForTimeout(2000);
// //   //Click the Assignee
// //   await page.locator('(//td[contains(@class,"rowcell")])[17]').dblclick();
// //   await page.waitForTimeout(1000);
// //   //Edit to have Null Value
// //   await page.locator('(//input[contains(@class,"control")])[1]').fill('');
// //   await page.waitForTimeout(200);
// //   //Press Enter on the keyboard
// //   await page.keyboard.press('Enter');
// //   await page.waitForTimeout(200);
// //   //Zoom In
// //   await page.locator('(//span[contains(@class,"zoomin")])[1]').click();
// //   await page.waitForTimeout(2000);
// //   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// // });

// test('29-Edit the status after changing the view to be Grid.', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2200);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(200);
//   //Change view mode to Grid
//   await page.locator('(//span[contains(@class,"input")])[8]').click();
//   await page.waitForTimeout(200);
//   //Change Grid
//   await page.locator("(//li[text()='Grid'])[1]").click();
//   await page.waitForTimeout(200);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(200);
//   //Select the status to edit
//   await page.locator('(//td[contains(@class,"rowcell")])[4]').dblclick();
//   await page.waitForTimeout(1000);
//   //Edit the status 
//   await page.locator('#DataItem___Status').fill('Completed');
//   await page.waitForTimeout(200);
//   //Press Enter on the keyboard
//   await page.keyboard.press('Enter');
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('30-Edit Priority and Zoom Fit the records.', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2200);
//   //Click to edit priority
//   await page.locator('(//td[contains(@class,"rowcell")])[5]').dblclick();
//   await page.waitForTimeout(1000);
//   //Edit to be Critical
//   await page.locator('(//input[contains(@class,"control")])').fill('Critical');
//   await page.waitForTimeout(200);
//   //Press Enter on the keyboard
//   await page.keyboard.press('Enter');
//   await page.waitForTimeout(200);
//   //Edit to Zoom Fit
//   await page.locator('(//span[contains(@class,"zoomtofit")])[1]').click();
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('31-Select the Grid Lines,Event Makers', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(1000);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(500);
//   //Select to show Grid Lines
//   await page.locator('(//span[contains(@class,"handle")])[1]').click();
//   await page.waitForTimeout(500);
//   //Click to show Event Makers 
//   await page.locator('(//span[contains(@class,"handle")])[2]').click();
//   await page.waitForTimeout(500);
//   //Click to show Task Labels
//   await page.locator('(//span[contains(@class,"handle")])[4]').click();
//   await page.waitForTimeout(500);
//   //Click to change the Work week
//   await page.locator('(//div[contains(@class,"multiselect")])[1]').click();
//   await page.waitForTimeout(500);
//   await page.keyboard.press('ArrowDown');
//   await page.waitForTimeout(500);
//   //Press Enter
//   await page.keyboard.press('Enter');
//   await page.waitForTimeout(1000);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(1400);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('32-Autofit all the columns after Editing planned hours', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(200);
//   //Change view mode to Grid
//   await page.locator('(//span[contains(@class,"input")])[8]').click();
//   await page.waitForTimeout(200);
//   //Change Grid
//   await page.locator("(//li[text()='Grid'])[1]").click();
//   await page.waitForTimeout(200);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(200);
//   //Click planned Hours to edit
//   await page.locator('(//td[contains(@class,"rowcell")])[34]').dblclick();
//   await page.waitForTimeout(1000);
//   //Enter the value
//   await page.locator('#DataItem___Work').fill('200');
//   await page.waitForTimeout(200);
//   await page.keyboard.press('Enter');
//   await page.waitForTimeout(500);
//   //Click the column menu
//   await page.locator('(//div[contains(@class,"columnmenu")])[6]').click();
//   await page.waitForTimeout(200);
//   //Click to AutoFit all columns
//   await page.locator("(//li[text()='Autofit all columns'])[1]").click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('33-Collapse the Records, switch to Resource view ', async ({ page }) => {
//   //await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(200);
//   //Click the View type to select resource view
//   await page.locator('(//span[contains(@class,"input")])[7]').click();
//   await page.waitForTimeout(800);
//   //Select Resource view
//   await page.locator("(//li[text()='Resource view'])[1]").click();
//   await page.waitForTimeout(800);
//   //Change view mode to Grid
//   await page.locator('(//span[contains(@class,"input")])[8]').click();
//   await page.waitForTimeout(200);
//   //Change Grid
//   await page.locator("(//li[text()='Grid'])[1]").click();
//   await page.waitForTimeout(200);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(200);
//   //Collapse all
//   await page.locator('(//span[contains(@class,"collapseall")])[1]').click();
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('34-Resource view ,Zoom Fit', async ({ page }) => {
//   //await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(200);
//   //Click the View type to select resource view
//   await page.locator('(//span[contains(@class,"input")])[7]').click();
//   await page.waitForTimeout(800);
//   //Select Resource view
//   await page.locator("(//li[text()='Resource view'])[1]").click();
//   await page.waitForTimeout(800);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(500);
//   //Zoom Fit
//   await page.locator('(//span[contains(@class,"zoomtofit")])[1]').click();
//   await page.waitForTimeout(200);
//   //Collapse all
//   await page.locator('(//span[contains(@class,"collapseall")])[1]').click();
//   await page.waitForTimeout(500);
//   //Expand all
//   await page.locator('(//span[contains(@class,"expandall")])[1]').click();
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('35-Edit the Parent taskbar dependency data', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Click the parent taskbar
//   await page.locator('(//div[contains(@class,"parent")])[1]').dblclick();
//   await page.waitForTimeout(800);
//   //Click the Dependency to open the dialog tab and edit
//   await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
//   await page.waitForTimeout(200);
//   //Click the Add button
//   await page.locator('(//span[contains(@class,"add")])[1]').click();
//   await page.waitForTimeout(200);
//   //Click the dropdown button to show the dependency
//   await page.locator('(//input[contains(@class,"e-control e-combobox e-lib e-input")])[1]').click();
//   await page.waitForTimeout(200);
//   //Select the dependency
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(500);
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(500);
//   //Click the save button
//   await page.locator('(//button[text()="Save"])[1]').click();
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('36-Change to Resource view and Zoom Fit', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(200);
//   //Click the View type to select resource view
//   await page.locator('(//span[contains(@class,"input")])[7]').click();
//   await page.waitForTimeout(800);
//   //Select Resource view
//   await page.locator("(//li[text()='Resource view'])[1]").click();
//   await page.waitForTimeout(800);
//   //Select to show Grid Lines
//   await page.locator('(//span[contains(@class,"handle")])[1]').click();
//   await page.waitForTimeout(200);
//   //Click to show Event Makers 
//   await page.locator('(//span[contains(@class,"handle")])[2]').click();
//   await page.waitForTimeout(200);
//   //Click to show Task Labels
//   await page.locator('(//span[contains(@class,"handle")])[4]').click();
//   await page.waitForTimeout(200);
//   //Dependency uncheck
//   await page.locator('(//span[contains(@class,"handle")])[3]').click();
//   await page.waitForTimeout(200);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(500);
//   //Zoom Fit
//   await page.locator('(//span[contains(@class,"zoomtofit")])[1]').click();
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/887396
// test('37-Select record to show the alignemnt color', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Select the child record
//   await page.locator("(//td[contains(@class,'rowcell')])[8]").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-The selection color is same on both grid and chart side
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/887231
// test('38-BUG-887231-Text color visibility', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   //Click the settings to show Touch Mode
//   await page.locator("(//span[contains(@class, 'settings')])[1]").click();
//   await page.waitForTimeout(1000);
//   //Click the button to switch to Touch
//   await page.locator("(//div[text()='Touch'])").click();
//   await page.waitForTimeout(1000);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(700);
//   //Select to show Grid Lines
//   await page.locator('(//span[contains(@class,"handle")])[1]').click();
//   await page.waitForTimeout(1000);
//   //Screenshot validation-The text view for Grid lines should be visible
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test.fixme('39-ExcelFileUpload_try', async ({ page, context }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(2000);
//   //  Press the button to download the Excel files 
//   const [download] = await Promise.all([
//     page.waitForEvent('download'),
//     await page.locator("(//span[contains(@class,'e-excelexport e-icons e-btn-icon e-icon-left')])[1]").click()
//   ]);
//   await page.waitForTimeout(500);
//   // Define where the downloaded excel file will go and get saved 
//   const path = "./tests/file-uploads/trial" + download.suggestedFilename();
//   await download.saveAs(path);
//   await page.waitForTimeout(500);
//   // attach the downloaded file to the report 
//   await testInfo.attach('downloaded', { path: path });
//   await page.waitForTimeout(500);
//   // Define the Expected Export File's Path which I want to upload 
//   const ExpectedExportFile = "./tests/ExcelExportFiles-Diff/ExpectedExport/ExcelFileUpload_try/Export.xlsx";
//   await page.waitForTimeout(200);
//   //Now navigate to spreadsheet component 
//   await page.goto("https://ej2.syncfusion.com/demos/#/fluent2/spreadsheet/default.html");
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.waitForTimeout(2000);
//   //Click on File 
//   await page.locator("(//li[contains(@aria-label, 'File')])[1]").click();
//   await page.waitForTimeout(2000);
//   //Listen for the File Chooser dialog Event 
//   page.on("filechooser", async (fileChooser) => {
//     ////using .setFiles() to upload the desired files - Here, [ExpectedExportFile] is the const where I have designated the path of the Export File I want to upload 
//     await fileChooser.setFiles([ExpectedExportFile])
//   });
//   //Now click the Open option which will open the file chooser dialog and wait for the upload to be done 
//   await page.locator("(//li[contains(@aria-label, 'Open')])[1]").click({ force: true });
//   await page.waitForTimeout(3000);
//   //Screenshot 
//   expect(await page.locator("(//div[contains(@class,'e-sheet')])[1]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test.fixme('40-CVSExportFileUpload_try', async ({ page, context }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   //  Press the button to download the CSV Excel files 
//   const [download] = await Promise.all([
//     page.waitForEvent('download'),
//     await page.locator("(//span[contains(@class,'e-pdfexport e-icons e-btn-icon')])[1]").click()
//   ]);
//   await page.waitForTimeout(500);
//   // Define where the downloaded excel file will go and get saved 
//   const path = "./tests/file-uploads/trial" + download.suggestedFilename();
//   await download.saveAs(path);
//   await page.waitForTimeout(500);
//   // attach the downloaded file to the report 
//   await testInfo.attach('downloaded', { path: path });
//   await page.waitForTimeout(500);
//   // Define the Expected Export File's Path which I want to upload 
//   const ExpectedExportFile = "./tests/ExcelExportFiles-Diff2/ExpectedExport2/ExcelFileUpload_try2/Export2.csv";
//   await page.waitForTimeout(500);
//   //Now navigate to spreadsheet component 
//   await page.goto("https://ej2.syncfusion.com/demos/#/fluent2/spreadsheet/default.html");
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.waitForTimeout(2000);
//   //Click on File 
//   await page.locator("(//li[contains(@aria-label, 'File')])[1]").click();
//   await page.waitForTimeout(2000);
//   //Listen for the File Chooser dialog Event 
//   page.on("filechooser", async (fileChooser) => {
//     ////using .setFiles() to upload the desired files - Here, [ExpectedExportFile] is the const where I have designated the path of the Export File I want to upload 
//     await fileChooser.setFiles([ExpectedExportFile])
//   });
//   //Now click the Open option which will open the file chooser dialog and wait for the upload to be done 
//   await page.locator("(//li[contains(@aria-label, 'Open')])[1]").click({ force: true });
//   await page.waitForTimeout(2000);
//   //Screenshot 
//   expect(await page.locator("(//div[contains(@class,'e-sheet')])[1]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test.fixme('41-PDF Export for Overview sample', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(4000);
//   // Press the button to download the PDF files    
//   const [download] = await Promise.all([page.waitForEvent('download'),
//   await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
//   await page.waitForTimeout(1000);
//   // Define the Actual Export File Path with proper name           
//   const path = "./tests/Gantt_SB/PdfExportFiles/PDF/" + download.suggestedFilename();
//   await download.saveAs(path);
//   await page.waitForTimeout(500);
//   // attach the downloaded file to the report ( This is the playwright event to download the File)       
//   await testInfo.attach('downloaded', { path: path });
//   await page.waitForTimeout(1500);
//   //The "pdf" here is the package that converts the file to PNG format 
//   const doc = await pdf(path);
//   await page.waitForTimeout(500);
//   expect(doc.length).toBe(1);
//   //Converts the 1 pages to image format and takes snapshot     
//   for await (const page of doc) {
//     //Screenshot validation-The PDF Image for the record has been updated.
//     expect(page).toMatchSnapshot('ExportPdf.png', { maxDiffPixels: 100 });
//   }
// });

// test.fixme('42-Zoom In ,Zoom Fit and press PDF Export', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(2000);
//   //Click Zoom In button
//   await page.locator('(//span[contains(@class, "zoomin")])[1]').click();
//   await page.waitForTimeout(200);
//   //Click Zoom Fit button on the toolbar
//   await page.locator('(//span[contains(@class, "zoomtofit")])[1]').click();
//   await page.waitForTimeout(200);
//   // Press the button to download the PDF files    
//   const [download] = await Promise.all([page.waitForEvent('download'),
//   await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
//   await page.waitForTimeout(500);
//   // Define the Actual Export File Path with proper name           
//   const path = "./tests/Gantt_SB/ZoomFitFiles/PDF/" + download.suggestedFilename();
//   await download.saveAs(path);
//   await page.waitForTimeout(500);
//   // attach the downloaded file to the report ( This is the playwright event to download the File)       
//   await testInfo.attach('downloaded', { path: path });
//   await page.waitForTimeout(500);
//   //The "pdf" here is the package that converts the file to PNG format 
//   const doc = await pdf(path);
//   await page.waitForTimeout(500);
//   expect(doc.length).toBe(1);
//   //Converts the 1 pages to image format and takes snapshot     
//   for await (const page of doc) {
//     //Screenshot validation-The PDF Image the records on chart side are in ZoomFit state
//     expect(page).toMatchSnapshot('ZoomFit.png', { maxDiffPixels: 100 });
//   }
// });

// test.fixme('43-Zoom Out and click PDF Export', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(2000);
//   //Click Zoom Out button on the toolbar
//   await page.locator('(//span[contains(@class, "zoomout")])[1]').click();
//   await page.waitForTimeout(500);
//   // Press the button to download the PDF files    
//   const [download] = await Promise.all([page.waitForEvent('download'),
//   await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
//   await page.waitForTimeout(500);
//   // Define the Actual Export File Path with proper name           
//   const path = "./tests/Gantt_SB/ZoomoutFiles/PDF/" + download.suggestedFilename();
//   await download.saveAs(path);
//   await page.waitForTimeout(500);
//   // attach the downloaded file to the report ( This is the playwright event to download the File)       
//   await testInfo.attach('downloaded', { path: path });
//   await page.waitForTimeout(1500);
//   //The "pdf" here is the package that converts the file to PNG format 
//   const doc = await pdf(path);
//   await page.waitForTimeout(500);
//   expect(doc.length).toBe(1);
//   //Converts the 1 pages to image format and takes snapshot     
//   for await (const page of doc) {
//     //Screenshot validation-PDF Image is in ZoomOut on the chart side
//     expect(page).toMatchSnapshot('Zoomout.png', { maxDiffPixels: 100 });
//   }
// });

// test.fixme('44-Zoom In and click PDF Export', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(2000);
//   //Click Zoom In button on the toolbar
//   await page.locator('(//span[contains(@class, "zoomin")])[1]').click();
//   await page.waitForTimeout(500);
//   // Press the button to download the PDF files    
//   const [download] = await Promise.all([page.waitForEvent('download'),
//   await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
//   await page.waitForTimeout(500);
//   // Define the Actual Export File Path with proper name           
//   const path = "./tests/Gantt_SB/ZoominFiles/PDF/" + download.suggestedFilename();
//   await download.saveAs(path);
//   await page.waitForTimeout(500);
//   // attach the downloaded file to the report ( This is the playwright event to download the File)       
//   await testInfo.attach('downloaded', { path: path });
//   await page.waitForTimeout(1500);
//   //The "pdf" here is the package that converts the file to PNG format 
//   const doc = await pdf(path);
//   await page.waitForTimeout(500);
//   expect(doc.length).toBe(1);
//   //Converts the 1 pages to image format and takes snapshot     
//   for await (const page of doc) {
//     //Screenshot validation-PDF Image is in Zoomin on the chart side
//     expect(page).toMatchSnapshot('Zoomin.png', { maxDiffPixels: 100 });
//   }
// });

// test.fixme('45-Zoom Out,Zoom In and click PDF Export', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(2000);
//   //Click Zoom Out button on the toolbar
//   await page.locator('(//span[contains(@class, "zoomout")])[1]').click();
//   await page.waitForTimeout(500);
//   //Click Zoom In button on the toolbar
//   await page.locator('(//span[contains(@class, "zoomin")])[1]').click();
//   await page.waitForTimeout(500);
//   // Press the button to download the PDF files    
//   const [download] = await Promise.all([page.waitForEvent('download'),
//   await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
//   await page.waitForTimeout(500);
//   // Define the Actual Export File Path with proper name           
//   const path = "./tests/Gantt_SB/ZoomOutZoomInFiles/PDF/" + download.suggestedFilename();
//   await download.saveAs(path);
//   await page.waitForTimeout(500);
//   // attach the downloaded file to the report ( This is the playwright event to download the File)       
//   await testInfo.attach('downloaded', { path: path });
//   await page.waitForTimeout(1500);
//   //The "pdf" here is the package that converts the file to PNG format 
//   const doc = await pdf(path);
//   await page.waitForTimeout(500);
//   expect(doc.length).toBe(1);
//   //Converts the 1 pages to image format and takes snapshot     
//   for await (const page of doc) {
//     //Screenshot validation-PDF Image is in Zoomin on the chart side
//     expect(page).toMatchSnapshot('ZoomoutZoomin.png', { maxDiffPixels: 100 });
//   }
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/912910
// test('46-BUG-912910-Toolbar Icon Zoom Fit Not Aligned Center', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=highcontrast');
//   await page.waitForTimeout(2000);
//   //Hover over toolbar for zoom fit
//   await page.locator("(//span[contains(@class, 'e-zoomtofit')])[1]").hover();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-The toolbar zoomtofit is well aligned
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/testing/_workitems/edit/906846
// test('47-BUG-904471-Console error thrown', async ({ page }) => {
//   //await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(2000);
//   //Right click 1st child taskkbar
//   await page.locator('(//div[contains(@class,"gantt-child")])[2]').click({
//     button: 'right'
//   });
//   await page.waitForTimeout(1000);
//   //Click the Task Information
//   await page.locator("(//li[text()='Task Information'])[1]").click();
//   await page.waitForTimeout(1000);
//   //Click the Cancel button
//   await page.locator("(//button[text()='Cancel'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click collapse all button
//   await page.locator('(//span[contains(@class,"e-collapseall")])[1]').click();
//   await page.waitForTimeout(500);
//   //Click expand all button
//   await page.locator('(//span[contains(@class,"e-expandall")])[1]').click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-The records are in expanded state 
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903686
// test('48-BUG-903686-Console error when changing view', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(2000);
//   //Click the settings button
//   await page.locator('(//span[contains(@class,"e-settings")])[1]').click();
//   await page.waitForTimeout(500);
//   //Select to show Critical path
//   await page.locator('(//span[contains(@class,"handle")])[5]').click();
//   await page.waitForTimeout(500);
//   //Click the dropdown for view type
//   await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group ")])[2]').click();
//   await page.waitForTimeout(500);
//   //Select resource view
//   await page.locator("(//li[text()='Resource view'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click the close button
//   await page.locator('(//span[contains(@class,"e-close")])[3]').click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-The view type is switched to Resource view
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/testing/_workitems/edit/913762
// test('49-BUG-913762-Checkbox Visibility Issue', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2-highcontrast');
//   await page.waitForTimeout(1000);
//   //Click to select the column menu
//   await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
//   await page.waitForTimeout(800);
//   //Hover over the column menu
//   await page.locator('(//li[contains(@class, "e-menu-caret-icon")])[1]').click();
//   await page.waitForTimeout(500);
//   //Hover over the checkbox
//   await page.locator('(//input[contains(@class, "e-control e-checkbox e-lib")])[1]').hover();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-The records hovered on are visible
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/testing/_workitems/edit/913760
// test('50-BUG-913760-Console error when cell edit Planned Hours', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(2000);
//   //Double click the planned hours to cell edit it 
//   await page.locator('(//td[contains(@class, "rowcell")])[13]').dblclick();
//   await page.waitForTimeout(1000);
//   //Hover over the column menu
//   await page.locator('(//input[contains(@class, "e-lib e-input")])[1]').fill('ABCDEFGH');
//   await page.waitForTimeout(500);
//   //Press the Enter key on the keyboard
//   await page.keyboard.press('Enter');
//   await page.waitForTimeout(2000);
//   //Screenshot validation-The characters entered are not saved but reverts to its value.
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test.fixme('51-Click the child  and click PDF Export', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(2000);
//   //Click the child record 
//   await page.locator("(//span[text()='Martin Tamer'])[1]").click({
//     button: 'right'
//   });
//   await page.waitForTimeout(1000);
//   //Click Convert
//   await page.locator("(//li[text()='Convert'])[1]").hover();
//   await page.waitForTimeout(500);
//   //Select To Milestone
//   await page.locator("(//li[text()='To Milestone'])[1]").click();
//   await page.waitForTimeout(500);
//   // Press the button to download the PDF files    
//   const [download] = await Promise.all([page.waitForEvent('download'),
//   await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
//   await page.waitForTimeout(500);
//   // Define the Actual Export File Path with proper name           
//   const path = "./tests/Gantt_SB/ChildTaskFiles/PDF/" + download.suggestedFilename();
//   await download.saveAs(path);
//   await page.waitForTimeout(500);
//   // attach the downloaded file to the report ( This is the playwright event to download the File)       
//   await testInfo.attach('downloaded', { path: path });
//   await page.waitForTimeout(1500);
//   //The "pdf" here is the package that converts the file to PNG format 
//   const doc = await pdf(path);
//   await page.waitForTimeout(500);
//   expect(doc.length).toBe(1);
//   //Converts the 1 pages to image format and takes snapshot     
//   for await (const page of doc) {
//     //Screenshot validation-PDF is shown
//     expect(page).toMatchSnapshot('ChildTasks.png', { maxDiffPixels: 100 });
//   }
// });

// //https://dev.azure.com/EssentialStudio/testing/_workitems/edit/905536
// test('52-Edit the Parent taskbar dependency data', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Click the settings button
//   await page.locator('(//span[contains(@class,"e-settings")])[1]').click();
//   await page.waitForTimeout(500);
//   //Change view mode to chart
//   await page.locator('(//span[contains(@class,"input")])[8]').click();
//   await page.waitForTimeout(200);
//   //Change chart
//   await page.locator("(//li[text()='Chart'])[1]").click();
//   await page.waitForTimeout(200);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(200);
//   //Right click 1st child taskbar
//   await page.locator('(//div[contains(@class,"gantt-child")])[1]').click({
//     button: 'right'
//   });
//   await page.waitForTimeout(1000);
//   //Click split task
//   await page.locator('#GanttOverview_cmenu_SplitTask').click();
//   await page.waitForTimeout(200);
//   //Click the outdent on the toolbar
//   await page.locator('(//span[contains(@class,"e-outdent")])[1]').click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation- Record is outdented and visible on both grid and chart side
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/902110
// test('53-BUG-902110-Console error thrown when Add New segment.', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Click to child taskbar
//   await page.locator('(//div[contains(@class,"gantt-child")])[1]').dblclick();
//   await page.waitForTimeout(1000);
//   //Click segment to open it the dialog
//   await page.locator('(//div[contains(@class,"e-tab-text")])[6]').click();
//   await page.waitForTimeout(500);
//   //Click to select the segment
//   await page.locator("  (//td[text()='01/06/2022'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click the delete button
//   await page.locator('(//span[contains(@class,"e-delete")])[1]').click();
//   await page.waitForTimeout(500);
//   //Click the Add button
//   await page.locator('(//span[contains(@class,"e-add")])[1]').click();
//   await page.waitForTimeout(500);
//   //Click the save button
//   await page.locator("(//button[text()='Save'])[1]").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-No console error is thrown and segment on chart side still added.
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/898283
// test('54-BUG-898283-Console error is thrown', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(1500);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(500);
//   //Click to Edit the Timeline Width
//   await page.locator('(//input[contains(@class,"e-control e-numerictextbox e-lib e-input")])[1]').fill('');
//   await page.waitForTimeout(500);
//   //Press the Enter key on the keyboard
//   await page.keyboard.press('Enter');
//   await page.waitForTimeout(500);
//   //Click the close button.
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(1000);
//   //Screenshot validation-The timeline width is updated 
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/896766/
// test('55-Alignment issue for task label after select rowheight ', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(2000);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(500);
//   //Click RowHeight to select '60'
//   await page.mouse.click(1159, 413);
//   await page.waitForTimeout(500);
//   //Click to show tasklabels
//   await page.locator('(//span[contains(@class,"e-switch-handle")])[4]').click();
//   await page.waitForTimeout(500);
//   //Click the close button.
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-The Tasklabels are updated and well aligned on the chart side of the component
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/909748
// test.fixme('56-BUG-909748-Predecessor lines are not aligned', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(2000);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(500);
//   //Click the View type to select resource view
//   await page.locator('(//span[contains(@class,"input")])[7]').click();
//   await page.waitForTimeout(500);
//   //Select Resource view
//   await page.locator("(//li[text()='Resource view'])[1]").click();
//   await page.waitForTimeout(800);
//   // Press the button to download the PDF files    
//   const [download] = await Promise.all([page.waitForEvent('download'),
//   await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
//   await page.waitForTimeout(500);
//   // Define the Actual Export File Path with proper name           
//   const path = "./tests/Gantt_SB/OverviewFiles/PDF/" + download.suggestedFilename();
//   await download.saveAs(path);
//   await page.waitForTimeout(500);
//   // attach the downloaded file to the report ( This is the playwright event to download the File)       
//   await testInfo.attach('downloaded', { path: path });
//   await page.waitForTimeout(1500);
//   //The "pdf" here is the package that converts the file to PNG format 
//   const doc = await pdf(path);
//   await page.waitForTimeout(500);
//   expect(doc.length).toBe(1);
//   //Converts the 1 pages to image format and takes snapshot     
//   for await (const page of doc) {
//     //Screenshot validation-Predecessor lines are properly aligned
//     expect(page).toMatchSnapshot('Overview.png', { maxDiffPixels: 100 });
//   }
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/899452
// test('57-Edit the status after changing the view to be Grid.', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(1000);
//   //Click the settings button
//   await page.locator('(//span[contains(@class,"settings")])[2]').click();
//   await page.waitForTimeout(200);
//   //Change view mode to Grid
//   await page.locator('(//span[contains(@class,"input")])[8]').click();
//   await page.waitForTimeout(200);
//   //Change Grid
//   await page.locator("(//li[text()='Grid'])[1]").click();
//   await page.waitForTimeout(200);
//   //Click to Close
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(200);
//   //Select the planned hours to edit
//   await page.locator('(//td[contains(@class,"rowcell")])[34]').dblclick();
//   await page.waitForTimeout(1000);
//   //Edit the planned hours
//   await page.locator('(//input[contains(@class,"e-control")])[12]').fill('43 hours');
//   await page.waitForTimeout(200);
//   //Press Enter on the keyboard
//   await page.keyboard.press('Enter');
//   await page.waitForTimeout(1000);
//   //Screenshot validation-The planned Hours is updated properly and no console error is thrown
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/902610
// test('58-Merge records and collapse all ', async ({ page }) => {
//   //await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(1000);
//   //Resize the child taskbar to merge it
//   await page.mouse.click(957, 448);
//   await page.mouse.down();
//   await page.mouse.move(957, 448);
//   await page.mouse.move(908, 448);
//   await page.mouse.up();
//   await page.waitForTimeout(1000);
//   //Cllck the collapse button
//   await page.locator('(//span[contains(@class,"collapseall")])[1]').click();
//   await page.waitForTimeout(1000);
//   //Screenshot validation-Records are in collapsed state
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903042
// test('59-Work Week Issue after close Icon click', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(1000);
//   //Click the settings
//   await page.locator('(//span[contains(@class,"settings")])[2]').click();
//   await page.waitForTimeout(200);
//   //Click to change the Work week
//   await page.locator('(//input[contains(@class,"multiselect")])[1]').click();
//   await page.waitForTimeout(1000);
//   //Select the day Monday
//   await page.locator('(//span[contains(@class,"e-frame e-icons")])[1]').click();
//   await page.waitForTimeout(500);
//   //Select the day Tuesday
//   await page.locator('(//span[contains(@class,"e-frame e-icons")])[2]').click();
//   await page.waitForTimeout(500);
//   //Select the day Wednesday
//   await page.locator('(//span[contains(@class,"e-frame e-icons")])[3]').click();
//   await page.waitForTimeout(500);
//   //  //Select the day Thursday
//   await page.locator('(//span[contains(@class,"e-frame e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   //Select the day Friday
//   await page.locator('(//span[contains(@class,"e-frame e-icons")])[5]').click();
//   await page.waitForTimeout(500);
//   //Select the day Saturday
//   await page.locator('(//span[contains(@class,"e-frame e-icons")])[6]').click();
//   await page.waitForTimeout(500);
//   //Click the close icon
//   await page.mouse.click(1797, 433);
//   await page.waitForTimeout(500);
//   //Click the input to chek on the records
//   await page.locator('(//input[contains(@class,"multiselect")])[1]').click();
//   await page.waitForTimeout(1300);
//   //Screenshot validation- The records should be indicated from the dropdown
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903045
// test('60-Console error when switch milestone ', async ({ page }, testInfo) => {
//   //await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(1000);
//   //Right click the 
//   await page.locator('(//div[contains(@class,"e-gantt-child")])[2]').click({
//     button: 'right'
//   });
//   //Click Convert
//   await page.locator("(//li[text()='Convert'])[1]").hover();
//   await page.waitForTimeout(500);
//   //Select To Milestone
//   await page.locator("(//li[text()='To Milestone'])[1]").click();
//   await page.waitForTimeout(500);
//   // Press the button to download the PDF files    
//   const [download] = await Promise.all([page.waitForEvent('download'),
//   await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
//   await page.waitForTimeout(500);
//   // Define the Actual Export File Path with proper name           
//   const path = "./tests/Gantt_SB/OverviewFiles1/PDF1/" + download.suggestedFilename();
//   await download.saveAs(path);
//   await page.waitForTimeout(500);
//   // attach the downloaded file to the report ( This is the playwright event to download the File)       
//   await testInfo.attach('downloaded', { path: path });
//   await page.waitForTimeout(1500);
//   //The "pdf" here is the package that converts the file to PNG format 
//   const doc = await pdf(path);
//   await page.waitForTimeout(500);
//   expect(doc.length).toBe(1);
//   //Converts the 1 pages to image format and takes snapshot     
//   for await (const page of doc) {
//     //Screenshot validation-Consile error is not thrown when convert the record and export pdf
//     expect(page).toMatchSnapshot('Overview.png1', { maxDiffPixels: 100 });
//   }
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903961
// test('61-Console error when drag child taskbar', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(2000);
//   //Click the child taskbar to move
//   await page.mouse.click(8256, 532);
//   await page.waitForTimeout(500);
//   //Click to move it to the left
//   await page.mouse.move(674, 531);
//   await page.waitForTimeout(500);
//   //Click the  child record
//   await page.locator("(//span[text()='PDF Export'])[1]").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-No console error is thrown after drag the child taskbar
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903989
// test('62-Console error edit null planned Hours', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(1000);
//   //Double click the planned hours to cell edit it 
//   await page.locator('(//td[contains(@class, "rowcell")])[34]').dblclick();
//   await page.waitForTimeout(1000);
//   //Click the input to enter the null value
//   await page.locator('(//input[contains(@class, "e-input")])[1]').fill('');
//   await page.waitForTimeout(500);
//   //Press the Enter key on the keyboard
//   await page.keyboard.press('Enter');
//   await page.waitForTimeout(1000);
//   //Screenshot validation-The records are updated in planned hours on grid and chart side.
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/904489
// test('63-Edit the Parent taskbar dependency data', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Click the parent taskbar
//   await page.locator('(//div[contains(@class,"parent")])[1]').dblclick();
//   await page.waitForTimeout(1000);
//   //Click the Dependency to open the dialog tab and edit
//   await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
//   await page.waitForTimeout(200);
//   //Click the Add button
//   await page.locator('(//span[contains(@class,"add")])[1]').click();
//   await page.waitForTimeout(200);
//   //Click the dropdown button to show the dependency
//   await page.locator('(//input[contains(@class," e-input")])[2]').click();
//   await page.waitForTimeout(200);
//   //Select the dependency
//   await page.keyboard.press("ArrowDown");
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(200);
//   //Click the save button
//   await page.locator('(//button[text()="Save"])[1]').click();
//   await page.waitForTimeout(500);
//   //Click the parent taskbar 
//   await page.locator('(//div[contains(@class,"parent")])[1]').dblclick();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-Dialog tab opened
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//   // await page.setViewportSize({ width: 1920, height: 1080 });
//   // await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   // await page.waitForTimeout(2000);
//   // //Double click the planned hours to cell edit it 
//   // await page.locator('(//td[contains(@class, "rowcell")])[13]').dblclick();
//   // await page.waitForTimeout(1000);
//   // //Hover over the column menu
//   // await page.locator('(//input[contains(@class, "e-lib e-input")])[1]').fill('43654789321');
//   // await page.waitForTimeout(500);
//   // //Press the Enter key on the keyboard
//   // await page.keyboard.press('Enter');
//   // await page.waitForTimeout(2000);
//   // //Screenshot validation-It saves the value and no console error is thrown
//   // expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
