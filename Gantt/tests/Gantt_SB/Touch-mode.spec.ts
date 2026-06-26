// import {test, expect} from '../Helper/ScriptErrorFinder';
// import { Helper } from '../Helper/helper';

// test.use({
//   launchOptions: {
//     ignoreDefaultArgs: [], // Disable the scrollbar argument
//   },
// });

// // Touch mode + bootstrap5 theme

// test('1- Overview sample - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'overview?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('2- Editing sample - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('3-Open general tab - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Defining the target audience Column Header Job Name').getByText('Defining the target audience').click();
//   await page.waitForTimeout(100);
//   await page.locator('(//div[contains(@class,"e-toolbar-item ")])[4]').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('4-Open dependency tab - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Defining the target audience Column Header Job Name').getByText('Defining the target audience').click();
//   await page.waitForTimeout(100);
//   await page.locator('(//div[contains(@class,"e-toolbar-item ")])[4]').click();
//   await page.waitForTimeout(1000);
//   await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('5-Open dependency add dialog - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Defining the target audience Column Header Job Name').getByText('Defining the target audience').click();
//   await page.waitForTimeout(100);
//   await page.locator('(//div[contains(@class,"e-toolbar-item ")])[4]').click();
//   await page.waitForTimeout(1000);
//   await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
//   await page.waitForTimeout(500);
//   await page.getByLabel('Dependency', { exact: true }).getByLabel('Add').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('6-Add new record - boostrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Add', { exact: true }).click();
//   await page.waitForTimeout(1000);
//   await page.getByLabel('Duration', { exact: true }).click();
//   await page.waitForTimeout(200);
//   await page.getByLabel('Duration', { exact: true }).fill('3 days');
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('7-Delete dialog tab - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Prepare product sketch and notes Column Header Job Name').click();
//   await page.waitForTimeout(200);
//   await page.getByLabel('Delete').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('8-Delete the record - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Prepare product sketch and notes Column Header Job Name').click();
//   await page.waitForTimeout(200);
//   await page.getByLabel('Delete').click();
//   await page.waitForTimeout(200);
//   await page.getByRole('button', { name: 'Ok' }).click();
//   await page.waitForTimeout(800);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('9-Edit dependency - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Defining the target audience Column Header Job Name').getByText('Defining the target audience').click();
//   await page.waitForTimeout(100);
//   await page.locator('(//div[contains(@class,"e-toolbar-item ")])[4]').click();
//   await page.waitForTimeout(1000);
//   await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
//   await page.waitForTimeout(500);
//   await page.getByLabel('Dependency', { exact: true }).getByLabel('Add').click();
//   await page.waitForTimeout(300);
//   await page.keyboard.press('Tab');
//   await page.waitForTimeout(200);
//   await page.keyboard.press('ArrowDown');
//   await page.keyboard.press('ArrowDown');
//   await page.keyboard.press('ArrowDown');
//   await page.waitForTimeout(300);
//   await page.locator('div:nth-child(4) > .e-content').click();
//   await page.waitForTimeout(100);
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('10-Indent and outdent - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Defining the target audience Column Header Job Name').click();
//   await page.waitForTimeout(200);
//   await page.getByLabel('Indent').click();
//   await page.waitForTimeout(1000);
//   await page.getByLabel('Defining the product usage Column Header Job Name').getByText('Defining the product usage').click();
//   await page.waitForTimeout(200);
//   await page.getByLabel('Outdent').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('11-Collapse all - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Collapse all').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('12-Cell edit 0 bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Defining the product usage Column Header Job Name').dblclick();
//   await page.waitForTimeout(1000);
//   await page.locator('#DataItem___TaskName').fill('edited');
//   await page.waitForTimeout(200);
//   await page.getByLabel('Update').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('13-Filter menu open for Task ID column', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'filtering?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter")])[1]').click();
//   await page.waitForTimeout(1500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('14-Filtering Task ID column - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'filtering?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   //Filter menu for Task ID
//   await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[1]').click();
//   //Click Enter value
//   await page.locator('(//input[contains(@class, "e-control")])[2]').click();
//   //Fill the value
//   await page.locator('(//input[contains(@class, "e-control")])[2]').fill('3');
//   await page.waitForTimeout(200);
//   //Click the filter button
//   await page.locator('(//button[contains(@class, "e-control")])[3]').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('15-Filter menu open for startdate column', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'filtering?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter")])[3]').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('16-Row selection - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'selection?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Defining the target audience Column Header Task Name').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('17-Cell selection - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'selection?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   //Click to select the toggle menu
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   //Select the touch mode
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   //select the selections
//   await page.locator('(//span[contains(@class, "e-icons")])[5]').first().click();
//   await page.waitForTimeout(300);
//   //Select cell
//   await page.locator('(//li[contains(@class, "e-list-item")])[2]').click();
//   //Click the child record
//   await page.locator('(//td[contains(@class, "e-rowcell")])[16]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('18-Delete record in dynamic obeject', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'dynamic-data?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   //toggle 
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   //Click to select touch mode
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   //Click the child task 2 .
//   await page.locator('(//td[contains(@class, "e-rowcell")])[12]').click();
//   //Click delete button on toolbar
//   await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
//   //Click the OK button.
//   await page.locator('(//button[contains(@class, "e-control")])[10]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('19-Add record in expando object - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'dynamic-data?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Child task 2 Column Header Task Name').click();
//   await page.getByLabel('Add').click();
//   await page.waitForTimeout(1000);
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('20-Observable collection - add record using method', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'observable-collection?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(5000);
//   await page.getByRole('button', { name: 'Add Data' }).click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('21-Observable collection - delete', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'observable-collection?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(5000);
//   await page.getByRole('button', { name: 'Delete Data' }).click();
//   await page.getByRole('button', { name: 'Update Data' }).click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('22-Scheduling concept - bootstap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'scheduling-mode?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('23-Holidays - bootstap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'holidays?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('24-unscheduled task - bootstap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'unscheduled-task?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('25-Baseline - bootstap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'baseline?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('26-Eventmarkers - bootstap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'eventmarkers?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(5000);
//   expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('27-Critical path - bootstap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'criticalpath?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('28-Zoom-to-fit - bootstap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'zooming?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Zoom out').click();
//   await page.getByLabel('Zoom out').click();
//   await page.getByLabel('Zoom to fit').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('29-Zoom-in - bootstap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'zooming?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Zoom in').click();
//   await page.getByLabel('Zoom in').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('30-Zoom-out - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'zooming?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Zoom out').click();
//   await page.getByLabel('Zoom out').click();
//   await page.getByLabel('Zoom out').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('31-Column template - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'column-template?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('32-Column menu autofit all columns', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'column-menu?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
//   await page.waitForTimeout(400);
//   await page.getByLabel('Autofit all columns').click();
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('32-Column menu disable columns columns', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'column-menu?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[2]').click();
//   await page.getByLabel('Columns', { exact: true }).locator('span').nth(2).click();
//   await page.getByRole('menuitem', { name: 'ID' }).locator('span').first().click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('33-Editing resources - projectview - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'resource-allocation?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Perform soil test Column Header Event Name').click();
//   await page.locator('(//div[contains(@class,"e-toolbar-item ")])[4]').click();
//   await page.waitForTimeout(1000);
//   await page.getByText('Resources', { exact: true }).click();
//   await page.waitForTimeout(500);
//   await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[1]').click();
//   await page.waitForTimeout(200);
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('34-Delete record in resource allocation', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'resource-allocation?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   //Change to Touch Mode
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   //Click the record
//   await page.locator('(//td[contains(@class,"rowcell")])[18]').click();
//   await page.waitForTimeout(100);
//   //Click delete button
//   await page.locator('(//span[contains(@class,"delete")])').click();
//   await page.waitForTimeout(100);
//   //Click the ok button
//   await page.locator("(//button[text()='Ok'])").click();
//   await page.waitForTimeout(200);
//   //Click the record 
//   await page.locator('(//td[contains(@class,"rowcell")])[50]').click();
//   await page.waitForTimeout(100);
//   //Click delete button
//   await page.locator('(//span[contains(@class,"delete")])').click();
//   await page.waitForTimeout(100);
//   //Click the ok button
//   await page.locator("(//button[text()='Ok'])").click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('35-Resrouce view inital sample - bootstrap5 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'resource-view?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('36-Delete child record in resourceview', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'resource-view?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.locator('(//td[contains(@class,"e-rowcell")])[8]').click();
//   await page.waitForTimeout(200);
//   await page.getByLabel('Delete').click();
//   await page.waitForTimeout(1500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('37-Edit resources in resource view sample', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'resource-view?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.locator('(//td[contains(@class,"e-rowcell")])[8]').click();
//   await page.waitForTimeout(200);
//   await page.locator('(//div[contains(@class,"e-toolbar-item ")])[7]').click();
//   await page.waitForTimeout(1000);
//   await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click();
//   await page.waitForTimeout(500);
//   await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[3]').click();
//   await page.waitForTimeout(200);
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForTimeout(1500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('38-Hide overallocation line', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'resource-view?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Show/Hide Overallocation').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('39-Header template sample', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'header-template?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('40-Taskbar template sample', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'taskbar-template?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(5000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('41-Contextmenu add record', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'context-menu?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   //Click the toggle 
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   //Select touch mode
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   //Click the child record
//   await page.locator('(//td[contains(@class, "rowcell")])[10]').click();
//   await page.waitForTimeout(200);
//   //Right click the child record
//   await page.locator('(//td[contains(@class, "rowcell")])[10]').click({
//     button: 'right'
//   });
//   await page.waitForTimeout(1000);
//   //click on Add
//   await page.locator("(//li[text()='Add'])").click();
//   await page.waitForTimeout(500);
//   //Click Above
//   await page.locator(" (//li[text()='Above'])").click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('42-Contextmenu delete parent anc child', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'context-menu?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   //Click toggle
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   //Click to select Touch mode
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   //Click to select child record
//   await page.locator('(//td[contains(@class, "e-rowcell")])[18]').click();
//   //Right click the record
//   await page.locator('(//td[contains(@class, "e-rowcell")])[18]').click({
//     button: 'right'
//   });
//   await page.waitForTimeout(1000);
//   //Click the delete 
//   await page.locator('(//li[contains(@class, "e-menu-item")])[6]').click();
//   await page.waitForTimeout(200);
//   //Click the OK button
//   await page.locator('(//button[contains(@class, "e-control")])[10]').click();
//   await page.waitForTimeout(500);
//   //Parent record
//   await page.locator('(//td[contains(@class, "e-rowcell")])[34]').click();
//   //Right click the record
//   await page.locator('(//td[contains(@class, "e-rowcell")])[34]').click({
//     button: 'right'
//   });
//   await page.waitForTimeout(1000);
//   //Delete
//   await page.locator('(//li[contains(@class, "e-menu-item")])[6]').click();
//   await page.waitForTimeout(200);
//   //Click ok button
//   await page.locator('(//button[contains(@class, "e-control")])[10]').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('43-Context menu delete dependency', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'context-menu?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   //Toggle
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   //Select touch mode
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   //Click child record
//   await page.locator('(//td[contains(@class, "e-rowcell")])[26]').click();
//   //Right click
//   await page.locator('(//td[contains(@class, "e-rowcell")])[26]').click({
//     button: 'right'
//   });
//   await page.waitForTimeout(1000);
//   //Click delete dependency
//   await page.locator('(//li[contains(@class, "e-menu-item")])[9]').click();
//   await page.waitForTimeout(500);
//   //select dependency
//   await page.locator('(//li[contains(@class, "e-menu-item")])[16]').click();
//   await page.waitForTimeout(1500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('44-Contextmenu indent record', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'context-menu?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   //toggle 
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   //Select touch mode
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   //Select child record
//   await page.locator('(//td[contains(@class, "e-rowcell")])[18]').click();
//   await page.waitForTimeout(200);
//   await page.locator('(//td[contains(@class, "e-rowcell")])[18]').click({
//     button: 'right'
//   });
//   await page.waitForTimeout(1000);
//   //Click indent
//   await page.locator('(//li[contains(@class, "e-menu-item")])[7]').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('45-Setting icon in flent2 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   await page.waitForTimeout(2000);
//   //toggle 
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   //Select touch mode
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('46-Setting icon in flent2 theme', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'overview?theme=material3');
//   await page.waitForTimeout(2000);
//   //toggle 
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(800);
//   //Select touch mode
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(4000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });
