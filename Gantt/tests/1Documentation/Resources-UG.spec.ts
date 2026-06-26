import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Resource collection', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-collection');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Assing resources', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Assign-resource');
  await page.waitForTimeout(500);
  await page.getByLabel('Right task label Fuller King').first().click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Edit resources for parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Add-Edit-resource-collection');
  await page.waitForTimeout(2000);
  //Double click the taskbar on the chart side of the component
  await page.locator("(//div[contains(@class,'parent')])[1]").dblclick();
  await page.waitForTimeout(1000);
  //Click to select resources to open dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Select resource
  await page.locator('(//span[contains(@class, "e-uncheck")])[2]').click();
  await page.waitForTimeout(500);
  //Select resource
  await page.locator('(//span[contains(@class, "e-uncheck")])[1]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The resources are added on the 1st parent taskbar on the chart side of the component.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Edit resources for child', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Add-Edit-resource-collection');
  await page.waitForTimeout(2000);
  //Double click the taskbar on the chart side of the component
  await page.locator("(//div[contains(@class,'child')])[1]").dblclick();
  await page.waitForTimeout(1000);
  //Click to enter duration value
  await page.locator("(//input[contains(@class,'control')])[3]").fill('5 days');
  await page.waitForTimeout(500);
  //Click to select resources to open dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Click to unselect resource
  await page.locator('(//span[contains(@class, "e-uncheck ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Resource unselectd from the child taskbar on the chart side
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-collapse all using key', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Add-Edit-resource-collection');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[2]').click();
  await page.waitForTimeout(200);
  await page.keyboard.press('Control+ArrowUp');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Edit enddate for child resource task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Add-Edit-resource-collection');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[6]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="DataItem___EndDate"]').click();
  await page.waitForTimeout(100);
  await page.locator('//*[@id="DataItem___EndDate"]').fill('3/31/2022');
  await page.waitForTimeout(100);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(100);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[2]/td/div[2]/div/div').click();
  await page.mouse.down();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Edit duration for resource child task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Add-Edit-resource-collection');
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[4]').dblclick();
  await page.waitForTimeout(400);
  await page.locator('#DataItem___Duration').click();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___Duration').fill('5 days');
  await page.waitForTimeout(500);
  await page.locator('#DataItem___Duration').press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Edit startdate and enddate', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Add-Edit-resource-collection');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div/div').dblclick();
  await page.waitForTimeout(1000);
  await page.locator('(//input[contains(@id, "StartDate")])[1]').click();
  await page.waitForTimeout(100);
  await page.locator('(//input[contains(@id, "StartDate")])[1]').fill('3/30/2022');
  await page.waitForTimeout(100);
  await page.locator('(//input[contains(@id, "EndDate")])[1]').click();
  await page.waitForTimeout(100);
  await page.locator('(//input[contains(@id, "EndDate")])[1]').fill('4/6/2022');
  await page.waitForTimeout(100);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Edit duration through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Add-Edit-resource-collection');
  await page.waitForTimeout(2000);
  //Double click the last child taskbar 
  await page.locator('(//div[contains(@class, "e-gantt-milestone")])[4]').dblclick();
  await page.waitForTimeout(1000);
  //Edit the duration
  await page.locator('(//input[contains(@class, "control")])[3]').fill('25');
  await page.waitForTimeout(100);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The records are updated in the taskbar
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Remove resources through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Add-Edit-resource-collection');
  await page.waitForTimeout(2000);
  //Double click the child taskbar 
  await page.locator('(//div[contains(@class, "e-gantt-milestone")])[5]').dblclick();
  await page.waitForTimeout(1000);
  //Click to select resources to open dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Unselect resource
  await page.locator('(//span[contains(@class, "e-check")])[1]').click();
  await page.waitForTimeout(500);
  //Unselect resource
  await page.locator('(//span[contains(@class, "e-check")])[1]').click();
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Resources are removed on the child taskbar on the chart side.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('11-Remove resources through cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Add-Edit-resource-collection');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[6]/td[3]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[6]/td[3]/form/div[1]').click();
  await page.waitForTimeout(500);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(500);
  await page.keyboard.press('Space');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[6]/td').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Add new Resource record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Binding-data-source-collection');
  await page.waitForTimeout(2000);
  //Click Add button on the toolbar to open dialog tab
  await page.locator("(//span[contains(@class,'add')])").click();
  await page.waitForTimeout(500);
  //Click Resources to open its dialog to add new record
  await page.locator("(//div[text()='Resources'])").click();
  await page.waitForTimeout(500);
  //Click to select the resources checkbox
  await page.locator("(//span[contains(@class,'e-uncheck')])[3]").click();
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(500);
  //Click Collapse all button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(500);
  //Click Expand all button on the toolbar 
  await page.locator("(//span[contains(@class,'expandall')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The New added resources task is shown on both Grid and Chart side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Cancel records after collapsing all the records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Binding-data-source-collection');
  await page.waitForTimeout(2000);
  //Click Collapse all button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(500)
  //Click Add button on the toolbar to open dialog tab
  await page.locator("(//span[contains(@class,'add')])").click();
  await page.waitForTimeout(500);
  //Click Cancel button
  await page.locator("(//button[text()='Cancel'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The records appear collapsed and no new task is added.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Edit Parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Binding-data-source-collection');
  await page.waitForTimeout(2000);
  //Double click on the Work in order to cell edit
  await page.locator("(//td[contains(@class,'rowcell')])[4]").dblclick();
  await page.waitForTimeout(1000)
  //Click the input ,increment
  await page.locator("(//span[contains(@class,'input')])[3]").click();
  await page.waitForTimeout(500);
  //Click Update button on the toolbar
  await page.locator("(//span[contains(@class,'update')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The work val;ue does not change in parent record.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Collapse all Records and Delete parent records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Binding-data-source-collection');
  await page.waitForTimeout(2000);
  //Click the collapse all button
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(1000)
  //Click the 1st parent record
  await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
  await page.waitForTimeout(500);
  //Click the delete button
  await page.locator("(//span[contains(@class,'delete')])").click();
  await page.waitForTimeout(500);
  //click the ok button to delete
  await page.locator("(//button[contains(@class,'e-control')])[8]").click();
  await page.waitForTimeout(500);
  //Click the 2nd parent record
  await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
  await page.waitForTimeout(500);
  //Click the delete button
  await page.locator("(//span[contains(@class,'delete')])").click();
  await page.waitForTimeout(500);
  //click the ok button to delete
  await page.locator("(//button[contains(@class,'e-control')])[8]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Parent records deleted and child record visible
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Deselect Resources record from child taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Binding-data-source-collection');
  await page.waitForTimeout(2000);
  //Double click the child taskbar
  await page.locator("(//div[contains(@class,'child')])[1]").dblclick();
  await page.waitForTimeout(1000)
  //Click the resources
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Click to uncheck the 1st resource
  await page.locator("(//span[contains(@class,'e-check')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[contains(@class,'e-control')])[9]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The resources are not shown on child taskbar
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Edit the child records with Null Value', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/through-cell-edit');
  await page.waitForTimeout(2000);
  //Double click the child records to edit it with null value
  await page.locator("(//td[contains(@class,'rowcell')])[10]").dblclick();
  await page.waitForTimeout(1000)
  //press backspace key on keyboard to clear the record
  for (let index = 0; index < 22; index++) {
    await page.keyboard.press("Backspace")

  }
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[contains(@class,'update')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The child record is edited with Null value
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Edit the child records, Work with Null Value', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Binding-data-source-collection');
  await page.waitForTimeout(2000);
  //Double click the child records , Work to edit it with Null value
  await page.locator("(//td[contains(@class,'rowcell')])[12]").dblclick();
  await page.waitForTimeout(1000)
  //press backspace key on keyboard to clear the record
  for (let index = 0; index < 3; index++) {
    await page.keyboard.press("Backspace")

  }
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[contains(@class,'update')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-the cell edited with Null value should display the record.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Edit the Duration with Null Value', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Binding-data-source-collection');
  await page.waitForTimeout(2000);
  //Double click the Duration, to edit it with Null value
  await page.locator("(//td[contains(@class,'rowcell')])[13]").dblclick();
  await page.waitForTimeout(1000)
  //press backspace key on keyboard to clear the record
  await page.locator("#DataItem___Duration").fill("");
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[contains(@class,'update')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Duration value 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Edit the Duration with Special Characters', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Binding-data-source-collection');
  await page.waitForTimeout(2000);
  //Double click the Duration, to edit it with special characters
  await page.locator("(//td[contains(@class,'rowcell')])[13]").dblclick();
  await page.waitForTimeout(1000)
  //Edit the child record, press backspace key on keyboard to clear the record
  for (let index = 0; index < 7; index++) {
    await page.keyboard.press("Backspace")

  }
  await page.waitForTimeout(500);
  //Enter the special characters
  await page.locator("(//input[contains(@class,'control')])[1]").fill('*&&^%');
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[contains(@class,'update')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The duration value is maintained and not changed after enter , special characters
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Edit the Task Type change to Fixed Work', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Binding-data-source-collection');
  await page.waitForTimeout(2000);
  //Double click the Task Type
  await page.locator("(//td[contains(@class,'rowcell')])[14]").dblclick();
  await page.waitForTimeout(1000)
  //Click the Dropdown to show Fixed Work
  await page.locator("(//span[contains(@class,'input')])[2]").click();
  await page.waitForTimeout(500);
  //Select FixedWork 
  await page.locator("(//li[text()='FixedWork'])").click();
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[contains(@class,'update')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Task type is changed to FixedWork
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Edit the Task Type change to FixedUnit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Binding-data-source-collection');
  await page.waitForTimeout(2000);
  //Double click the Task Type
  await page.locator("(//td[contains(@class,'rowcell')])[14]").dblclick();
  await page.waitForTimeout(1200)
  //Click the Dropdown to show FixeUnit
  await page.locator("(//span[contains(@class,'input')])[2]").click();
  await page.waitForTimeout(500);
  //Select FixedUnit
  await page.locator("(//li[text()='FixedUnit'])").click();
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[contains(@class,'update')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Task type is changed to FixedUnit
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Edit the Task Type change to FixedUnit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Binding-data-source-collection');
  await page.waitForTimeout(2000);
  //Double click the Task Type
  await page.locator("(//td[contains(@class,'rowcell')])[14]").dblclick();
  await page.waitForTimeout(1000)
  //Click the Dropdown to show Fixed Unit
  await page.locator("(//span[contains(@class,'input')])[2]").click();
  await page.waitForTimeout(500);
  //Select FixedUnit
  await page.locator("(//li[text()='FixedUnit'])").click();
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[contains(@class,'update')])").click();
  await page.waitForTimeout(500);
  //Double click the start date to Edit 
  await page.locator("(//td[contains(@class,'rowcell')])[15]").dblclick();
  await page.waitForTimeout(1000)
  //Press backspace to clear the start date record
  for (let index = 0; index < 9; index++) {
    await page.keyboard.press("Backspace")

  }
  await page.waitForTimeout(500);
  //Edit the start date 
  await page.locator("(//input[contains(@class,'control')])[1]").fill('03/28/21');
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[contains(@class,'update')])").click();
  await page.waitForTimeout(500);
  //Click Collapse all button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-All records are in collpased state ,both grid and chart side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Delete parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Binding-data-source-collection');
  await page.waitForTimeout(2000);
  //Click the 2nd Parent record to delete
  await page.locator("(//span[text()='Project estimation'])[1]").click();
  await page.waitForTimeout(500)
  //Click the delete button on the toolbar
  await page.locator("(//span[contains(@class,'delete')])").click();
  await page.waitForTimeout(500);
  //Click the ok , button to delete the record
  await page.locator("(//button[contains(@class,'control')])[8]").click();
  await page.waitForTimeout(500);
  //Double click the child taskbar on the chart side to open dialog tab for resources
  await page.locator("(//div[contains(@class,'child')])[1]").dblclick();
  await page.waitForTimeout(1000);
  //Select Resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Select resource to add
  await page.locator("(//span[contains(@class,'e-uncheck')])[1]").click();
  await page.waitForTimeout(500);
  //Select 2nd resource to add
  await page.locator("(//span[contains(@class,'e-uncheck')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Add button on the toolbar to add new task record
  await page.locator("(//span[contains(@class,'add')])[1]").click();
  await page.waitForTimeout(500);
  //Click the Event Name to edit it
  await page.locator("(//input[contains(@class,'control')])[2]").fill('New Task');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-New task is added and added resources visible on the child taskbar on the chart side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Edit the Child record,End Date', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Binding-data-source-collection');
  await page.waitForTimeout(2000);
  //Click the child record on grid side
  await page.locator("(//span[text()='Soil test approval'])[1]").click();
  await page.waitForTimeout(500)
  //Click the Edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click the Event Name and Edit it 
  await page.locator("(//input[contains(@class,'control')])[2]").fill('approval');
  await page.waitForTimeout(500);
  //Click the End date to edit it 
  await page.locator("(//input[contains(@class,'control')])[7]").fill('04/30/21');
  await page.waitForTimeout(500);
  //Select Resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Deselect the 1st resource
  await page.locator("(//span[contains(@class,'e-check')])[1]").click();
  await page.waitForTimeout(500);
  //Deselect 2nd resource
  await page.locator("(//span[contains(@class,'e-check')])[1]").click();
  await page.waitForTimeout(500);
  //Click to select all the resources
  await page.locator("(//span[contains(@class,'e-uncheck')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Event Name is edited on grid side and Chart side the taskbar all resources are added.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Resource Unit
test('26-Deselect Resources record from child taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-unit');
  await page.waitForTimeout(2000);
  //Double click the child taskbar
  await page.locator("(//div[contains(@class,'child')])[1]").dblclick();
  await page.waitForTimeout(1000)
  //Click the resources
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Click to uncheck the 1st resource
  await page.locator("(//span[contains(@class,'e-check')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[contains(@class,'e-control')])[9]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The resources are not shown on child taskbar
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Edit the Child record,End Date', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-unit');
  await page.waitForTimeout(2000);
  //Click the child record on grid side
  await page.locator("(//span[text()='Soil test approval'])[1]").click();
  await page.waitForTimeout(500)
  //Click the Edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click the Event Name and Edit it 
  await page.locator("(//input[contains(@class,'control')])[2]").fill('test');
  await page.waitForTimeout(500);
  //Click the End date to edit it 
  await page.locator("(//input[contains(@class,'control')])[7]").fill('04/30/21');
  await page.waitForTimeout(500);
  //Select Resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Deselect the 1st resource
  await page.locator("(//span[contains(@class,'e-check')])[1]").click();
  await page.waitForTimeout(500);
  //Deselect 2nd resource
  await page.locator("(//span[contains(@class,'e-check')])[1]").click();
  await page.waitForTimeout(500);
  //Click to select all the resources
  await page.locator("(//span[contains(@class,'e-uncheck')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Event Name is edited on grid side and Chart side the taskbar all resources are added.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Cell edit the event Resources,Cancel the records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-unit');
  await page.waitForTimeout(2000);
  //Double click the child taskbar, event resources
  await page.locator("(//td[contains(@class,'rowcell')])[19]").dblclick();
  await page.waitForTimeout(1000)
  //Click the cancel button on the toolbar
  await page.locator("(//span[contains(@class,'cancel')])[1]").click();
  await page.waitForTimeout(500);
  //Click the collapse all  button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])[1]").click();
  await page.waitForTimeout(500);
  //Double click the 2nd parent record to open dialog tab
  await page.locator("(//div[contains(@class,'parent')])[3]").dblclick();
  await page.waitForTimeout(1000);
  //Select resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Select the 1st resources to add
  await page.locator("(//span[contains(@class,'e-uncheck')])[2]").click();
  await page.waitForTimeout(500);
  //Select 2nd resources to add
  await page.locator("(//span[contains(@class,'e-uncheck')])[4]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Added resources shown on parent taskbar on chart side.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Collapse all records,delete child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-unit');
  await page.waitForTimeout(2000);
  //Click collapse all button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])[1]").click();
  await page.waitForTimeout(500)
  //Click the last child record on grid side
  await page.locator("(//span[text()='Sign contract'])[1]").click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator("(//span[contains(@class,'delete')])[1]").click();
  await page.waitForTimeout(500);
  //Click the Ok button to delete the child record
  await page.locator("(//button[contains(@class,'control')])[8]").click();
  await page.waitForTimeout(500);
  //Click the icon on 1st parent to expand it
  await page.locator("(//span[contains(@class,'treegridcollapse')])[1]").click();
  await page.waitForTimeout(500);
  //Double click the child taskbar on the chart side to open the dialog tab
  await page.locator("(//div[contains(@class,'child')])[1]").dblclick();
  await page.waitForTimeout(1000);
  //Select resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //deselet 1st resource
  await page.locator("(//span[contains(@class,'e-check')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The child record resource is deselected and 1st parent record is expanded and 2nd parent record collapsed
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Edit the Task Type change to FixedUnit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-unit');
  await page.waitForTimeout(2000);
  //Double click the Task Type
  await page.locator("(//td[contains(@class,'rowcell')])[14]").dblclick();
  await page.waitForTimeout(1000)
  //Click the Dropdown to show FixeUnit
  await page.locator("(//span[contains(@class,'input')])[2]").click();
  await page.waitForTimeout(500);
  //Select FixedUnit
  await page.locator("(//li[text()='FixedUnit'])").click();
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[contains(@class,'update')])").click();
  await page.waitForTimeout(500);
  //Double click the Task Type for the 2nd child record
  await page.locator("(//td[contains(@class,'rowcell')])[22]").dblclick();
  await page.waitForTimeout(1000)
  //Click the Dropdown to show FixeUnit
  await page.locator("(//span[contains(@class,'input')])[2]").click();
  await page.waitForTimeout(500);
  //Select FixedWork
  await page.locator("(//li[text()='FixedWork'])").click();
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[contains(@class,'update')])").click();
  await page.waitForTimeout(1800);
  //Screenshot validation-The task type for the two child records are changed.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Edit Duration with Null Value and Delete the record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-unit');
  await page.waitForTimeout(2000);
  //Double click the Duration to edit it with Null Value
  await page.locator("(//td[contains(@class,'rowcell')])[13]").dblclick();
  await page.waitForTimeout(1000)
  //press backspace key on keyboard to clear the record
  for (let index = 0; index < 7; index++) {
    await page.keyboard.press("Backspace")

  }
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[contains(@class,'update')])").click();
  await page.waitForTimeout(500);
  //Click the record to delete
  await page.locator("(//span[text()='Identify site location'])[1]").click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator("(//span[contains(@class,'delete')])[1]").click();
  await page.waitForTimeout(500);
  //Click the Ok button to delete the child record
  await page.locator("(//button[contains(@class,'control')])[8]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The record is deleted on the grid and chart side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Collapse all and Expand all records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-unit');
  await page.waitForTimeout(2000);
  //Click collapse all button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(500);
  //Click Expand all button on the toolbar 
  await page.locator("(//span[contains(@class,'expandall')])").click();
  await page.waitForTimeout(500);
  //Click the add button on the toolbar to add new task
  await page.locator("(//span[contains(@class,'add')])").click();
  await page.waitForTimeout(500);
  //Click to edit the duration
  await page.locator("(//input[contains(@class,'control')])[4]").fill('5 Days');
  await page.waitForTimeout(500);
  //Select resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Click to select all the resources
  await page.locator("(//span[contains(@class,'uncheck')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-New task added all resources are added on taskbar on chart side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Add assignment through method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/through-method-UG');
  await page.waitForTimeout(1000);
  //Click the Add assignment button on the toolbar
  await page.locator("(//button[text()='Add Assignment'])[1]").click();
  await page.waitForTimeout(1500);
  //Click the child record to edit
  await page.locator("(//span[text()='Estimation approval'])[1]").click();
  await page.waitForTimeout(500);
  //click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(800);
  //Click to edit the child record
  await page.locator("(//input[contains(@class,'control')])[2]").fill('Estimation');
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(1000);
  //Click parent record to delete
  await page.locator("(//span[text()='Project initiation'])[1]").click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator("(//span[contains(@class,'delete')])").click();
  await page.waitForTimeout(500);
  //Click Ok, button to delete the record
  await page.locator("(//button[contains(@class,'control')])[8]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Added assignment is shown on taskbar on chart side of child taskbar record and parent record deleted.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//RESOURCES-UG cases from documentation 
test('34-Update assignment through method', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/through-method-UG');
  await page.waitForTimeout(2200);
  //Click the Update assignment button on the toolbar
  await page.locator("(//button[text()='Update Assignment'])[1]").click();
  await page.waitForTimeout(1500);
  //Click the child record to edit
  await page.locator("(//span[text()='Estimation approval'])[1]").click();
  await page.waitForTimeout(500);
  //click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click to edit the child record
  await page.locator("(//input[contains(@class,'control')])[2]").fill('Estimation');
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Validation 
  const UpdateAssignment = page.locator('(//span[contains(@class,"e-label")])[4]');
  await expect(UpdateAssignment).toHaveText('Jack Davolio, Margaret Buchanan [50%]');
});

test('34-case1-Update assignment through method', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/through-method-UG');
  //Click the Delete assignment button on the toolbar
  await page.locator("(//button[text()='Delete Assignment'])[1]").click();
  await page.waitForTimeout(2000);
  //Validation 
  const DeleteAssignment = page.locator('(//span[contains(@class,"e-label")])[2]');
  await expect(DeleteAssignment).toHaveText('Martin Tamer [70%]');
  //Screenshot validation-Assignment is added and is shown on the chart side and deleted assignment is shown on the taskbar onchart side of component
  //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Add assignment through method', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/through-method-UG');
  await page.waitForTimeout(2000);
  //Click the Add assignment button on the toolbar
  await page.locator("(//button[text()='Add Assignment'])[1]").click();
  await page.waitForTimeout(3000);
  //Validation 
  const AddAssignment = page.locator('(//span[contains(@class,"e-label")])[8]');
  await expect(AddAssignment).toHaveText('Construction Supervisor, Davolio Fuller, Jack Davolio');
  await page.waitForTimeout(800);
  //Click the child record to edit
  await page.locator("(//span[text()='Identify site location'])[1]").click();
  await page.waitForTimeout(500);
  //click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click to edit the child record
  await page.locator("(//input[contains(@class,'control')])[2]").fill('location');
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(1500);
  //Click the Update assignment button on the toolbar
  await page.locator("(//button[text()='Update Assignment'])[1]").click();
  await page.waitForTimeout(2000);
  //Validation 
  const UpdateAssignment = page.locator('(//span[contains(@class,"e-label")])[4]');
  await expect(UpdateAssignment).toHaveText('Jack Davolio, Margaret Buchanan [50%]');
  //Screenshot validation-Assignment is added and updated assignment visible and edited record shown
  //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('36-Add assignment through method', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/through-method-UG');
  await page.waitForTimeout(2500);
  //Click the Add assignment button on the toolbar
  await page.locator("(//button[text()='Add Assignment'])[1]").click();
  await page.waitForTimeout(1500);
  //Validation 
  const AddAssignment = page.locator('(//span[contains(@class,"e-label")])[8]');
  await expect(AddAssignment).toHaveText('Construction Supervisor, Davolio Fuller, Jack Davolio');
  //Click the child record to edit
  await page.locator("(//span[text()='Identify site location'])[1]").click();
  await page.waitForTimeout(500);
  //click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click to edit the child record
  await page.locator("(//input[contains(@class,'control')])[2]").fill('location');
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Click the Update assignment button on the toolbar
  await page.locator("(//button[text()='Update Assignment'])[1]").click();
  await page.waitForTimeout(1000);
  //Validation 
  const UpdateAssignment = page.locator('(//span[contains(@class,"e-label")])[4]');
  await expect(UpdateAssignment).toHaveText('Jack Davolio, Margaret Buchanan [50%]');
  //Click the  Add Record button on the toolbar
  await page.locator("(//button[text()='AddRecord'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Add assignment,edited record is visible ,update assignment and added record all visible.
  //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-AddRecords and delete the child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/through-method-UG');
  await page.waitForTimeout(1200);
  //Click collapse all button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(500);
  //Click the  Add Record button on the toolbar
  await page.locator("(//button[text()='AddRecord'])[1]").click();
  await page.waitForTimeout(500);
  //Click the last child record
  await page.locator("(//span[text()='Sign contract'])[1]").click();
  await page.waitForTimeout(500);
  //Click delete button
  await page.locator("(//span[contains(@class,'delete')])").click();
  await page.waitForTimeout(500);
  //Click Ok, button to delete the record
  await page.locator("(//button[contains(@class,'control')])[8]").click();
  await page.waitForTimeout(1200);
  //Screenshot validation-New record is added and last child record is deleted.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Collapse all and Expand all records', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Resource-event');
  await page.waitForTimeout(2000);
  //Click collapse all button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(500);
  //Click Expand all button on the toolbar 
  await page.locator("(//span[contains(@class,'expandall')])").click();
  await page.waitForTimeout(500);
  //Click the add button on the toolbar to add new task
  await page.locator("(//span[contains(@class,'add')])").click();
  await page.waitForTimeout(500);
  //Click to edit the duration
  await page.locator("(//input[contains(@class,'control')])[4]").fill('5 Days');
  await page.waitForTimeout(500);
  //Select resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Click to select all the resources
  await page.locator("(//span[contains(@class,'uncheck')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-New task added all resources are added on taskbar on chart side of the component,it indicates resources added
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Edit the Child record,Edit End Date', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Resource-event');
  await page.waitForTimeout(2000);
  //Click the child record on grid side
  await page.locator("(//span[text()='Soil test approval'])[1]").click();
  await page.waitForTimeout(600)
  //Click the Edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click the Event Name and Edit it 
  await page.locator("(//input[contains(@class,'control')])[2]").fill('Soil');
  await page.waitForTimeout(500);
  //Click the End date to edit it 
  await page.locator("(//input[contains(@class,'control')])[7]").fill('04/31/21');
  await page.waitForTimeout(500);
  //Select Resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Deselect the 1st resource
  await page.locator("(//span[contains(@class,'e-check')])[1]").click();
  await page.waitForTimeout(500);
  //Deselect 2nd resource
  await page.locator("(//span[contains(@class,'e-check')])[1]").click();
  await page.waitForTimeout(500);
  //Click to select all the resources
  await page.locator("(//span[contains(@class,'e-uncheck')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The resources are added and it indicates on the toolbar
  //expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('40-Cell edit the event Resources', async ({ page }) => {
  test.slow();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Resource-event');
  await page.waitForTimeout(2000);
  //Double click the child taskbar, event resources
  await page.locator("(//td[contains(@class,'rowcell')])[19]").dblclick();
  await page.waitForTimeout(1000)
  //Click the cancel button on the toolbar
  await page.locator("(//span[contains(@class,'cancel')])[1]").click();
  await page.waitForTimeout(500);
  //Click the collapse all  button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])[1]").click();
  await page.waitForTimeout(500);
  //Double click the 2nd parent record to open dialog tab
  await page.locator("(//div[contains(@class,'parent')])[3]").dblclick();
  await page.waitForTimeout(1000);
  //Select resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Select the 1st resources to add
  await page.locator("(//span[contains(@class,'e-uncheck')])[2]").click();
  await page.waitForTimeout(500);
  //Select 2nd resources to add
  await page.locator("(//span[contains(@class,'e-uncheck')])[4]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Added resources shown and records updated is indicated on the tollbar
  //expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Collapse all records delete child record', async ({ page }) => {
  test.slow();
  await page.goto(Helper.baseUrlserver + '/Resource-event');
  await page.waitForTimeout(2000);
  //Click collapse all button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])[1]").click();
  await page.waitForTimeout(500)
  //Click the last child record on grid side
  await page.locator("(//span[text()='Sign contract'])[1]").click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator("(//span[contains(@class,'delete')])[1]").click();
  await page.waitForTimeout(500);
  //Click the Ok button to delete the child record
  await page.locator("(//button[contains(@class,'control')])[8]").click();
  await page.waitForTimeout(500);
  //Click the icon on 1st parent to expand it
  await page.locator("(//span[contains(@class,'treegridcollapse')])[1]").click();
  await page.waitForTimeout(500);
  //Double click the child taskbar on the chart side to open the dialog tab
  await page.locator("(//div[contains(@class,'child')])[1]").dblclick();
  await page.waitForTimeout(1000);
  //Select resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //deselet 1st resource
  await page.locator("(//span[contains(@class,'e-check')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The records are updated and it shows on the toolbar, deleted resource action is cancelled.
  //expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('42-Selected the resources on the child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/custom-taskbar-styling-template');
  await page.waitForTimeout(2000);
  //click the child record 
  await page.locator("(//span[text()='Identify site location'])[1]").click();
  await page.waitForTimeout(500);
  //Click Edit all button on the toolbar to open the dialog tab
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click to edit the duration
  await page.locator("(//input[contains(@class,'control')])[4]").fill('4 Days');
  await page.waitForTimeout(500);
  //Select resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Click to select all the resources
  await page.locator("(//span[contains(@class,'uncheck')])[1]").click();
  await page.waitForTimeout(500);
  //Click to select all the resources
  await page.locator("(//span[contains(@class,'uncheck')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Resources are added on the child taskbar
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-Deselected the resources on the child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/custom-taskbar-styling-template');
  await page.waitForTimeout(2000);
  //click the child record 
  await page.locator("(//span[text()='Soil test approval'])[1]").click();
  await page.waitForTimeout(500);
  //Click Edit all button on the toolbar to open the dialog tab
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click to edit the duration
  await page.locator("(//input[contains(@class,'control')])[4]").fill('3 Days');
  await page.waitForTimeout(500);
  //Select resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Click to deselect all the resources
  await page.locator("(//span[contains(@class,'stop')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The resources are all deselected and not shown on either grid or chart side.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('44-Edit resources for the child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/custom-taskbar-styling-template');
  await page.waitForTimeout(2000);
  //click collapse all button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(500);
  //Click the child record to edit 
  await page.locator("(//span[text()='Sign contract'])[1]").click();
  await page.waitForTimeout(500);
  //Click Edit all button on the toolbar to open the dialog tab
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click to select Task type from the dropdown
  await page.locator("(//span[contains(@class,'input')])[5]").click();
  await page.waitForTimeout(500);
  //Click to select None
  await page.locator("(//li[text()='None'])[1]").click();
  await page.waitForTimeout(500);
  //Select resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Click to uncheck resources
  await page.locator("(//span[contains(@class,'check')])[2]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The only selected resource is highlighted on the child taskbar on chart side.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});