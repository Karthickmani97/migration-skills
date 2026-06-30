import { test, expect } from '@playwright/test';
import { Helper } from '../Helper/helper';

test('1-Scroll to last record for minimum records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/selfdata-virtual');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Scroll-Rows' }).click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Scroll gantt columns using scroll method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/selfdata-virtual');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'ScrollCol' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Editing duration through dialog edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/selfdata-virtual');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="GanttSelfdata_chartContentBody"]/tr[3]/td/div[2]/div[3]/div').first().dblclick();
  await page.waitForTimeout(800);
  await page.getByLabel('Duration', { exact: true }).click();
  await page.getByLabel('Duration', { exact: true }).fill('2 days');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
       await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
     await page.waitForTimeout(200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('4-CollapseAtLevel and scroll', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/bst');
//   await page.waitForTimeout(500);
//   await page.getByRole('button', { name: 'Collapse' }).click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Scroll-Rows' }).click();
//   await page.waitForTimeout(800);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('5-Collapse multi parent and scroll', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/bst');
  await page.waitForTimeout(500);
  await page.getByRole('gridcell', { name: '5 Column Header ID', exact: true }).locator('span').nth(1).click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Scroll-Rows' }).click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Collapse parent trough treegrid and scroll', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/bst');
  await page.waitForTimeout(500);
  await page.getByRole('gridcell', { name: '1 Column Header ID', exact: true }).locator('span').first().click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Scroll-Rows' }).click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test.fixme('8-Delete record and scroll', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/bst');
//   await page.waitForTimeout(500);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
//   await page.waitForTimeout(200);
//   await page.getByRole('button', { name: 'Delete' }).click();
//   await page.waitForTimeout(500);
//   await page.getByRole('button', { name: 'Scroll-Rows' }).click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('9-Tab key navigation in virtual sample', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/bst');
  await page.waitForTimeout(500);
  await page.getByLabel('Defining the target audience is template cell Column Header Task Name').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___Name').fill('Notes');
  await page.waitForTimeout(400);
  await page.locator('#DataItem___Name').press('Tab');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Editing start date using tab key navigation', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/selfdata-virtual');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGanttSelfdata_gridcontrol_content_table"]/tbody/tr[2]/td[2]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___TaskName').press('Tab');
  await page.waitForTimeout(400);
  await page.locator('#DataItem___StartDate').fill('4/6/2019');
  await page.waitForTimeout(400);
  await page.locator('#DataItem___StartDate').press('Tab');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Resize to taskname', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ColumnVirtual');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'SplitterPixel' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Resize to the column year', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ColumnVirtual');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'SplitterPosition' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-BUG-852557-Selection issue', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Virtual');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[2]').click();
  await page.waitForTimeout(800);
  await page.keyboard.press('Shift+ArrowDown');
  await page.waitForTimeout(500);
  await page.keyboard.press('Shift+ArrowDown');
  await page.waitForTimeout(500);
  await page.keyboard.press('Shift+ArrowDown');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Multiple deletion in virtual', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Virtual');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[2]').click();
  await page.waitForTimeout(200);
  await page.keyboard.press('Shift+ArrowDown');
  await page.waitForTimeout(200);
  await page.keyboard.press('Shift+ArrowDown');
  await page.waitForTimeout(200);
  await page.keyboard.press('Shift+ArrowDown');
  await page.waitForTimeout(1000);
  await page.keyboard.press("Delete");
   await page.waitForTimeout(200);
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
   await page.waitForTimeout(400);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-scroll rows and zoom to fit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/864306-FrozenColumn');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Scroll_Rows"]').click();
  await page.waitForTimeout(2000);
  await page.locator('#Gantt_zoomtofit').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Add record when frozen virtual sample', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/864306-FrozenColumn');
  await page.waitForTimeout(1500);
  await page.locator('#Gantt_add').click();
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Duration"]').click();
  await page.locator('//*[@id="Duration"]').fill('3 days');
  await page.waitForTimeout(1000);
  await page.locator('(//div[contains(@class,"e-tab-text")])[3]').click();
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Assignee"]').click();
  await page.locator('//*[@id="Assignee"]').fill('Sam');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gantt_dialog"]/div[4]/button[1]').click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Editing startdate column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/864306-FrozenColumn');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').dblclick();
  await page.waitForTimeout(800);
  await page.locator('#DataItem___StartDate').click();
  await page.locator('#DataItem___StartDate').fill('1/17/2000');
  await page.waitForTimeout(1000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Edit enddate column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/864306-FrozenColumn');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[4]').dblclick();
  await page.waitForTimeout(800);
  await page.locator('#DataItem___EndDate').click();
   await page.waitForTimeout(300);
  await page.locator('#DataItem___EndDate').fill('1/28/2000');
  await page.waitForTimeout(600);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Edit duration column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/864306-FrozenColumn');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[5]').dblclick();
  await page.waitForTimeout(800);
  await page.locator('(//input[contains(@class, "e-control e-textbox e-lib e-input")])').click();
  await page.locator('(//input[contains(@class, "e-control e-textbox e-lib e-input")])').fill('12 days');
  await page.waitForTimeout(1000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('20-Scroll to change position and add - refresh', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/virtual');
//   await page.waitForTimeout(1500);
//   await page.locator('#Position').click();
//   await page.waitForTimeout(3000);
//   await page.locator('#Add_method').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('21-Scroll to change position and convert to milstone', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/virtual');
  await page.waitForTimeout(1500);
  await page.locator('#Position').click();
  await page.waitForTimeout(3000);
  await page.locator('#Convert').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-taskbar editing and refresh', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/virtual');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div[5]').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(1273, 263);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-taskbar drag and refresh', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/virtual');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div[3]/div/div').click();
  await page.waitForTimeout(500);
  await page.mouse.down();
  await page.waitForTimeout(500);
  await page.mouse.move(900, 263);
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Scroll to change position and cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/virtual');
  await page.waitForTimeout(2000);
  await page.locator('#Position').click();
  await page.waitForTimeout(3000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[4]').dblclick();
  await page.waitForTimeout(800);
  await page.locator('#DataItem___EndDate').click();
  await page.locator('#DataItem___EndDate').fill("1/24/2017");
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Scroll to change position and zooming', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/virtual');
  await page.waitForTimeout(2000);
  await page.locator('#Position').click();
  await page.waitForTimeout(3000);
  await page.locator('#Gantt_zoomout').click();
  await page.waitForTimeout(2000);
  await page.locator('#Gantt_zoomout').click();
  await page.waitForTimeout(1800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Scroll to change position and sorting', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/virtual');
  await page.waitForTimeout(1000);
  await page.locator('#Position').click();
  await page.waitForTimeout(3000);
  await page.getByText('Duration').click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Scroll to change position and insert', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/virtual');
  await page.waitForTimeout(1000);
  await page.locator('#Position').click();
  await page.waitForTimeout(3000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[7]/td[5]').click();
  await page.waitForTimeout(500);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Scroll to change position to delete the data', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/virtual');
  await page.waitForTimeout(2000);
  //Scroll rows
  await page.locator('#Scroll_Rows').click();
  await page.waitForTimeout(2000);
  //select the data to delete
  await page.locator('(//td[contains(@class, "rowcell")])[1]').click();
  await page.waitForTimeout(500);
  //Delete
  await page.keyboard.press('Delete');
  await page.waitForTimeout(500);
  //click the ok button
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(600);
  //Zoom to Fit
  await page.locator('(//span[contains(@class,"zoomtofit")])').click();
  await page.waitForTimeout(1500);
  await page.locator('(//td[contains(@class, "rowcell")])[8]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/939965
test('29-Search for Task, and Collapse all the records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/virtual');
  await page.waitForTimeout(1000);
  //Search the task
  await page.locator('(//input[contains(@class, "e-control")])[1]').click();
  await page.waitForTimeout(800);
  //Fill the Task 
  await page.locator('(//input[contains(@class, "e-control")])[1]').fill('Task 11');
  await page.waitForTimeout(200);
  //Search 
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  //await page.locator('(//td[contains(@class, "e-rowcell")])[15]').click();
  await page.waitForTimeout(500);
  //Collapse all the records
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
  await page.waitForTimeout(1000);
  await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Resize the Child task on Taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/virtual');
  await page.waitForTimeout(1000);
  //Resize the child taskbar
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div[2]').click();
  await page.waitForTimeout(500);
  await page.mouse.down();
  await page.mouse.move(711, 263);
  await page.mouse.move(1174, 516);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  //Previous timespan
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[14]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Collapse using icon', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/virtual');
  await page.waitForTimeout(1000);
  //Click the icon for collapse
  await page.locator('(//span[contains(@class, "e-icons e-treegridexpand")])[1]').click();
  await page.waitForTimeout(2200);
  //Screenshot validation-The record is collapsed state
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Expand the record using icon', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/virtual');
  await page.waitForTimeout(1000);
  //Click the icon for collapse
  await page.locator('(//span[contains(@class, "e-icons e-treegridexpand")])[1]').click();
  await page.waitForTimeout(1200);
  //Click the icon to expan the record
  await page.locator('(//span[contains(@class, "e-icons e-treegridcollapse")])[1]').click();
  await page.waitForTimeout(2200);
  //Screenshot validation-The record is expanded state
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Toolbar add after scroll', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/virtual');
  await page.waitForTimeout(500);
  //Click the scroll button
  await page.locator("(//button[text()='Scroll'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the icon add button
  await page.locator('(//span[contains(@class, "e-add e-icons e-btn-icon e-icon-left")])[1]').click();
  await page.waitForTimeout(800);
  //Click the Save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(1200);
  //Screenshot validation-Toolbar added after scroll
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Delete record using method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/virtual');
  await page.waitForTimeout(500);
  //Right click the task
  await page.locator('(//td[contains(@class, "e-rowcell ")])[23]').click({
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
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  //Press Tab key
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Press Enter key
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  //Click the delete button
  await page.locator("(//button[text()='Delete Row'])[1]").click();
  await page.waitForTimeout(800);
  //Click the Ok button
  await page.locator("(//button[text()='OK'])[1]").click();
  await page.waitForTimeout(800);
  //Screenshot validation-Record is deleted
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
