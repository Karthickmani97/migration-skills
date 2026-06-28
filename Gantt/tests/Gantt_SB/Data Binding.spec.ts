import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
// test('1-Remote data initial load ', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'remote-data?theme=fluent');
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('2-Remote data collapse and expand', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'remote-data?theme=fluent');
//   await page.waitForTimeout(2000);
//   await page.getByRole('term').filter({ hasText: 'Radicle emerged from caryopsis' }).locator('div').click();
//   await page.waitForTimeout(500);
//   await page.getByRole('gridcell', { name: 'Germination Column Header Task Name' }).locator('span').first().click();
//   await page.waitForTimeout(500);
//   await page.getByRole('gridcell', { name: 'Germination Column Header Task Name' }).locator('span').first().click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('3-Dynamic data initial load', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Add new record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
  await page.waitForTimeout(1000);
  await page.locator('(//button[contains(@class,"e-control ")])[11]').click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Collapse all records', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Expand all records', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Editing child task name', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@role, "gridcell")])[17]').dblclick();
  await page.waitForTimeout(1000);
  await page.locator('(//input[contains(@class,"e-control")])[1]').fill('edited');
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Deleting child record at grid side', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class, "e-rowcell")])[12]').click();
  await page.waitForTimeout(200);
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(500);
  await page.locator('(//button[contains(@class, "e-control")])[10]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Deleting child record at chart side', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[2]').click();
  await page.waitForTimeout(300);
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(600);
  await page.locator('(//button[contains(@class, "e-control")])[10]').click();
  await page.waitForTimeout(700);
  await page.locator('(//td[contains(@class, "e-rowcell")])[11]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Deleting parent record at grid side', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class, "e-rowcell")])[2]').click();
  await page.waitForTimeout(200);
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(500);
  await page.locator('(//button[contains(@class, "e-control")])[10]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Deleting parent record at chart side', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-gantt-parent-taskbar")])[1]').click();
  await page.waitForTimeout(200);
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(500);
  await page.locator('(//button[contains(@class, "e-control")])[10]').click();
  await page.waitForTimeout(200);
  await page.locator('(//td[contains(@role, "gridcell")])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Editing the Taskname through cell-edit', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(4000);
  //Click taskname 
  await page.locator('(//td[contains(@class, "e-rowcell")])[2]').dblclick();
  await page.waitForTimeout(200);
  //Press the keyboard Control+A to select all 
  await page.keyboard.press('Control+A');
  //press the keyboard Backspace to clear the record
  await page.keyboard.press('Backspace');
  //Fill the record
  await page.locator('(//input[contains(@class, "e-control")])[1]').fill('New Task');
  await page.waitForTimeout(500);
  //Update
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/923239
test('13-Editing the Duration through cell-edit', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(4000);
  //Click Duration
  await page.locator('(//td[contains(@class, "e-rowcell")])[9]').dblclick();
  await page.waitForTimeout(200);
  //Press the keyboard Control+A to select all 
  await page.keyboard.press('Control+A');
  //press the keyboard Backspace to clear the record
  await page.keyboard.press('Backspace');
  //Fill the record for Duration
  await page.locator('(//input[contains(@class, "e-control")])[1]').fill('10 Days');
  await page.waitForTimeout(500);
  //Update
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Negative scenarios
test('14-Editing the Start Date with invalid characters', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(4000);
  //Click start date 
  await page.locator('(//td[contains(@class, "e-rowcell")])[8]').dblclick();
  await page.waitForTimeout(200);
  //Press the keyboard Control+A to select all 
  await page.keyboard.press('Control+A');
  //press the keyboard Backspace to clear the record
  await page.keyboard.press('Backspace');
  //Fill the nspecial characters
  await page.locator('(//input[contains(@class, "e-control")])[1]').fill('*&^%$#');
  await page.waitForTimeout(500);
  //Update
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Editing the Duration with negative value', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(4000);
  //Click Duration
  await page.locator('(//td[contains(@class, "e-rowcell")])[9]').dblclick();
  await page.waitForTimeout(200);
  //Fill the negative value in Duration
  await page.locator('(//input[contains(@class, "e-control")])[1]').fill('-4');
  await page.waitForTimeout(500);
  //Click keyboard Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Editing the Progress with negative value', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(4000);
  //Click Progress
  await page.locator('(//td[contains(@class, "e-rowcell")])[10]').dblclick();
  await page.waitForTimeout(200);
  //Fill the negative value in the progress 
  await page.locator('(//input[contains(@class, "e-control")])[1]').fill('-50');
  await page.waitForTimeout(500);
  //Click keyboard Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Collapse all and delete first parent record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(4000);
  //Click Collapse all
  await page.locator('(//span[contains(@class,"collapseall")])').click();
  await page.waitForTimeout(100);
  //Click parent record
  await page.locator('(//td[contains(@class, "rowcell")])[2]').click();
  await page.waitForTimeout(100);
  //Click Delete button
  await page.locator('(//span[contains(@class, "delete")])').click();
  await page.waitForTimeout(100);
  //Click ok to delete parent record
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/testing/_workitems/edit/876233
test('18-Isssue when click to edit the startdate and progress', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(1000);
  //Click the startdate to edit 
  await page.locator('(//td[contains(@class,"rowcell ")])[8]').dblclick();
  await page.waitForTimeout(1000);
  //Click progress to cell edit
  await page.locator('(//td[contains(@class,"rowcell ")])[10]').dblclick();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/887953
test('19-BUG-Sorting ascending order the records', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(2000);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  await page.waitForTimeout(500);
  //Sort ascend 1st column
  await page.locator("(//th[contains(@class,'e-headercell')])[1]").click();
  await page.waitForTimeout(500);
  //Sort ascend 2nd column
  await page.locator("(//th[contains(@class,'e-headercell')])[2]").click();
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(2000)
  //Screenshot validation-The column headers are sorted in ascending order
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Collapse all records,Delete parent record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(2000);
  //Click collapse all button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])[1]").click();
  await page.waitForTimeout(500);
  //Click the parent record to select to delete it
  await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator("(//span[contains(@class,'delete')])[1]").click();
  await page.waitForTimeout(500);
  //Click the ok button to delete the record
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(500);
  //Click Expand all button on the toolbar
  await page.locator("(//span[contains(@class,'expandall')])[1]").click();
  await page.waitForTimeout(500);
  //Click the child record to edit 
  await page.locator("(//td[contains(@class,'rowcell')])[7]").click();
  await page.waitForTimeout(500);
  //Click edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click the Duration to edit 
  await page.locator("(//input[contains(@class,'control')])[4]").fill('8 Days');
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000)
  //Screenshot validation-The Duration is updated on the taskbar on chart side and records updated properly.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Add new task and edit progress', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(2000);
  //Click Add  button on the toolbar
  await page.locator("(//span[contains(@class,'add')])[1]").click();
  await page.waitForTimeout(500);
  //Edit the new task name
  await page.locator("(//input[contains(@class,'control')])[2]").fill('New');
  await page.waitForTimeout(500);
  //Click to edit the progress
  await page.locator("(//input[contains(@class,'control')])[5]").click();
  await page.waitForTimeout(300);
  await page.locator("(//input[contains(@class,'control')])[5]").fill('20');
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(500);
  //Click the parent record to delete
  await page.locator("(//td[contains(@class,'rowcell')])[7]").click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator('(//button[contains(@class, "e-control e-btn e-lib e-tbar-btn e-tbtn-txt")])[4]').click();
  await page.waitForTimeout(500);
  //Click the ok button to delete the record
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(500);
  //Click the parent record to delete
  await page.locator("(//td[contains(@class,'rowcell')])[7]").click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator("(//button[contains(@class,'e-control e-btn e-lib e-tbar-btn e-tbtn-txt')])[4]").click();
  await page.waitForTimeout(500);
  //Click the ok button to delete the record
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation- parent records are deleted
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Edit the Start Date with wrong Data Format', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(2000);
  //Double click the start date to cell edit it 
  await page.locator("(//td[contains(@class,'rowcell')])[8]").dblclick();
  await page.waitForTimeout(1000);
  //Enter the wrong Date format
  await page.locator("(//input[contains(@class,'control')])[1]").fill('2021/1/11');
  await page.waitForTimeout(500);
  //Click the update button on the toolbar
  await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[3]").click();
  await page.waitForTimeout(500);
  //Click the 2nd parent record to delete
  await page.locator("(//span[text()='Parent task 2'])[1]").click();
  await page.waitForTimeout(500);
  //Click the delete button
  await page.locator("(//span[contains(@class,'delete')])").click();
  await page.waitForTimeout(500);
  //Click the ok button to delete the record
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(500);
  //Click collapseall button on the toolbar
  await page.locator("(//span[text()='Collapse all'])").click();;
  await page.waitForTimeout(2000)
  //Screenshot validation-The records are in collapsed state
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Edited both parent and Child taskname', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(2000);
  //Double click the parent record to cell edit it 
  await page.locator("(//span[text()='Parent task 1'])[1]").dblclick();
  await page.waitForTimeout(1000);
  //Enter the record
  await page.locator("(//input[contains(@class,'control')])[1]").fill('Task 1');
  await page.waitForTimeout(500);
  //Click the update button on the toolbar
  await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[3]").click();
  await page.waitForTimeout(500);
  //Double click the child  record to cell edit it 
  await page.locator("(//span[text()='Child task 1'])[1]").dblclick();
  await page.waitForTimeout(1000);
  //Enter the record
  await page.locator("(//input[contains(@class,'control')])[1]").fill('Child Record');
  await page.waitForTimeout(500);
  //Click the update button on the toolbar
  await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[3]").click();
  await page.waitForTimeout(500);
  //Click to Add New task 
  await page.locator("(//span[text()='Add'])[1]").click();
  await page.waitForTimeout(500);
  //Click to Edit the Duration
  await page.locator("(//input[contains(@class,'control')])[4]").fill('10 Days');
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000)
  //Screenshot validation-New task is added and parent and child taskname edited.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Collapse all records,Edit parent record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the collapse all button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(500);
  //Double click the parent record to cell edit it 
  await page.locator("(//span[text()='Parent task 5'])[1]").dblclick();
  await page.waitForTimeout(1000);
  //Enter the record
  await page.locator("(//input[contains(@class,'control')])[1]").fill('5');
  await page.waitForTimeout(500);
  //Click the update button on the toolbar
  await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[3]").click();
  await page.waitForTimeout(500);
  //Click the icon on the parent record
  await page.locator("(//span[contains(@class,'treegridcollapse')])[1]").click();
  await page.waitForTimeout(500);
  //Click the icon on the parent record
  await page.locator("(//span[contains(@class,'treegridcollapse')])[4]").click();
  await page.waitForTimeout(2000)
  //Screenshot validation-The two parent records are expanded.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Delete added task after collapse all', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(2000);
  //Click collapseall button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(500);
  //Click Add button on the toolbar
  await page.locator("(//span[contains(@class,'add')])").click();
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(500);
  //Click the Added task to delete it
  await page.locator("(//span[text()='New Task 21'])[1]").click();
  await page.waitForTimeout(500);
  //Click the delete button
  await page.locator("(//span[contains(@class,'delete')])[1]").click();
  await page.waitForTimeout(500);
  //Click the ok button to delete the task
  await page.locator("(//button[text()='OK'])[1]").click();
  await page.waitForTimeout(500);
  //Click expandall button on the toolbar
  await page.locator("(//span[contains(@class,'expandall')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The records are in expanded state.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Multi sort ascending the columns', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(2000);
  //Press the Control button on the keyboard
  await page.keyboard.down("Control");
  await page.waitForTimeout(2000);
  //Sort ascend 1st column
  await page.locator("(//th[contains(@class,'e-headercell')])[1]").click();
  await page.waitForTimeout(200);
  //Sort ascend 2nd column
  await page.locator("(//th[contains(@class,'e-headercell')])[2]").click();
  await page.waitForTimeout(200);
  //Sort ascend 3rd column
  await page.locator("(//th[contains(@class,'e-headercell')])[3]").click();
  await page.waitForTimeout(200);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(1000);
  //Click the Add button on the toolbar
  await page.locator("(//span[contains(@class,'e-add')])[1]").click();
  await page.waitForTimeout(200);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
  await page.waitForTimeout(200);
  //Screenshot validation-New record task is added and records are in ascending order
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Collapse the records, sort the columns', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the Collapseall button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])[1]").click();
  await page.waitForTimeout(200);
  //Press the Control button on the keyboard and column headercell
  await page.locator('(//th[contains(@class, "e-headercell")])[1]').click({
    modifiers: ['Control']
  });
  await page.waitForTimeout(200);
  //Click the 2nd headercell
  await page.locator('(//th[contains(@class, "e-headercell")])[2]').click({
    modifiers: ['Control']
  });
  await page.waitForTimeout(200);
  //Click the 3rd headercell
  await page.locator('(//th[contains(@class, "e-headercell")])[3]').click({
    modifiers: ['Control']
  });
  await page.waitForTimeout(200);
  //Select a record for the columns to be in descending order
  await page.locator('(//th[contains(@class, "e-headercell")])[1]').click({
    modifiers: ['Control']
  });
  await page.waitForTimeout(200);
  //Click the 2nd headercell to be in descending order
  await page.locator('(//th[contains(@class, "e-headercell")])[2]').click({
    modifiers: ['Control']
  });
  await page.waitForTimeout(200);
  //Click the 3rd headercell to be in descending order
  await page.locator('(//th[contains(@class, "e-headercell")])[3]').click({
    modifiers: ['Control']
  });
  await page.waitForTimeout(200);
  //Click the Add button on the toolbar
  await page.locator("(//span[contains(@class,'e-add')])[1]").click();
  await page.waitForTimeout(200);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-New task is added and sorting is in descending order and in collapsed state.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Collapse all Records,Add new task', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the Collapseall button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])[1]").click();
  await page.waitForTimeout(200);
  //Click the Add button on the toolbar
  await page.locator("(//span[contains(@class,'e-add')])[1]").click();
  await page.waitForTimeout(200);
  //Edit the Taskname to have Null Value 
  await page.locator("(//input[contains(@class,'control')])[2]").fill('');
  await page.waitForTimeout(500);
  //Edit the Duration
  await page.locator("(//input[contains(@class,'control')])[4]").fill('10');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click Expandall button on the toolbar
  await page.locator("(//span[contains(@class,'expandall')])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-New task name edited with Null value and all records Expanded
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-sort the columns in descending order', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(2000);
  //Press the Control button on the keyboard and column headercell
  await page.locator('(//th[contains(@class, "e-headercell")])[1]').click({
    modifiers: ['Control']
  });
  await page.waitForTimeout(200);
  //Click the 2nd headercell
  await page.locator('(//th[contains(@class, "e-headercell")])[2]').click({
    modifiers: ['Control']
  });
  await page.waitForTimeout(200);
  //Click the 3rd headercell
  await page.locator('(//th[contains(@class, "e-headercell")])[3]').click({
    modifiers: ['Control']
  });
  await page.waitForTimeout(200);
  //Select a record for the columns to be in descending order
  await page.locator('(//th[contains(@class, "e-headercell")])[1]').click({
    modifiers: ['Control']
  });
  await page.waitForTimeout(200);
  //Click the 2nd headercell to be in descending order
  await page.locator('(//th[contains(@class, "e-headercell")])[2]').click({
    modifiers: ['Control']
  });
  await page.waitForTimeout(200);
  //Click the 3rd headercell to be in descending order
  await page.locator('(//th[contains(@class, "e-headercell")])[3]').click({
    modifiers: ['Control']
  });
  await page.waitForTimeout(200);
  //Click the Add button on the toolbar
  await page.locator("(//span[contains(@class,'e-add')])[1]").click();
  await page.waitForTimeout(200);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(200);
  //Click the parent record to delete
  await page.locator("(//td[contains(@class,'e-rowcell')])[7]").click();
  await page.waitForTimeout(200);
  //Click the delete button on the toolbar
  await page.locator("(//button[contains(@class,'e-control e-btn e-lib e-tbar-btn e-tbtn-txt')])[4]").click();
  await page.waitForTimeout(500);
  //Click Ok button to delete the parent record
  await page.locator("(//button[text()='OK'])[1]").click();
  await page.waitForTimeout(2200);
  //Screenshot validation-Records are in descending order and parent record deleted.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903065
test('30-Console errow when delete all records', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(1000);
  //Click Collapse all
  await page.locator('(//span[contains(@class,"collapseall")])').click();
  await page.waitForTimeout(200);
  //Click parent record
  await page.locator('(//td[contains(@class, "rowcell")])[2]').click();
  await page.waitForTimeout(200);
  //Click Delete button
  await page.locator('(//span[contains(@class, "delete")])').click();
  await page.waitForTimeout(200);
  //Click ok to delete parent record
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(200);
  //Click parent record
  await page.locator('(//td[contains(@class, "rowcell")])[2]').click();
  await page.waitForTimeout(200);
  //Click Delete button
  await page.locator('(//span[contains(@class, "delete")])').click();
  await page.waitForTimeout(200);
  //Click ok to delete parent record
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(200);
  //Click parent record
  await page.locator('(//td[contains(@class, "rowcell")])[2]').click();
  await page.waitForTimeout(200);
  //Click Delete button
  await page.locator('(//span[contains(@class, "delete")])').click();
  await page.waitForTimeout(200);
  //Click ok to delete parent record
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(200);
  //Click parent record
  await page.locator('(//td[contains(@class, "rowcell")])[2]').click();
  await page.waitForTimeout(200);
  //Click Delete button
  await page.locator('(//span[contains(@class, "delete")])').click();
  await page.waitForTimeout(200);
  //Click ok to delete parent record
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(100);
  //Click parent record
  await page.locator('(//td[contains(@class, "rowcell")])[2]').click();
  await page.waitForTimeout(100);
  //Click Delete button
  await page.locator('(//span[contains(@class, "delete")])').click();
  await page.waitForTimeout(200);
  //Click ok to delete parent record
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(100);
  //Click Add button 
  await page.locator('(//span[contains(@class, "add")])[1]').click();
  await page.waitForTimeout(100);
  //Click the save button
  await page.locator("(//button[contains(@class,'e-control')])[11]").click();
  await page.waitForTimeout(800);
  //Screensot validation-Console error is not thrown and the new task is added.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/933660
test('31-Multi sort ascending and add', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'dynamic-data?theme=fluent');
  await page.waitForTimeout(1000);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  //Sort ascend 1st column
  await page.locator("(//th[contains(@class,'e-headercell')])[1]").click();
  await page.waitForTimeout(100);
  //Sort ascend 2nd column
  await page.locator("(//th[contains(@class,'e-headercell')])[2]").click();
  await page.waitForTimeout(100);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(500)
  //Click Add button
  await page.locator("(//span[contains(@class,'add')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Selection made on the columns and new task is added.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});