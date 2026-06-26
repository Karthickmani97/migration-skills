import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
  launchOptions: {
    ignoreDefaultArgs: [], // Disable the scrollbar argument
  },
});

test('1-ExpandoObject initial load ', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Add new record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//button[contains(@class,"e-control ")])[3]').click();
  await page.waitForTimeout(2000);
  await page.locator('(//button[contains(@class,"e-control")])[11]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Collapse all records', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Collapse all' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Expand all records', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
  await page.waitForTimeout(2000);
  await page.locator('(//td[contains(@class, "e-rowcell")])[12]').click();
  await page.waitForTimeout(100);
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Delete child and cancel delete', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
  await page.waitForTimeout(2000);
  await page.locator('(//td[contains(@class, "e-rowcell")])[12]').click();
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(300);
  //Ok to delete the data
  await page.locator('(//button[contains(@class, "e-control")])[10]').click();
  await page.waitForTimeout(300);
  //Select task
  await page.locator('(//td[contains(@class,"e-rowcell")])[27]').click();
  //Delete
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(300);
  //Cancel 
  await page.locator('(//button[contains(@class, "e-control")])[11]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Multisort the records', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
  await page.waitForTimeout(2000);
  await page.keyboard.down("Control");
  await page.locator("(//th[contains(@class, 'e-headercell')])[1]").click();
  await page.waitForTimeout(100);
  await page.locator("(//th[contains(@class, 'e-headercell')])[2]").click();
  await page.waitForTimeout(100);
  await page.locator("(//th[contains(@class, 'e-headercell')])[3]").click();
  await page.waitForTimeout(100);
  await page.locator("(//th[contains(@class, 'e-headercell')])[4]").click();
  await page.waitForTimeout(100);
  await page.keyboard.up("Control");
  await page.waitForTimeout(4000)
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Negatives scenarios
test('7-Edit the progress using double value', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
  await page.waitForTimeout(2000);
  await page.locator('(//td[contains(@class, "e-rowcell")])[15]').dblclick();
  await page.waitForTimeout(2000);
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.locator('#DataItem___Progress').fill('31.1');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Collapse the parent record and cancel delete', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
  await page.waitForTimeout(2000);
  //Collapse the parent records
  await page.locator('(//span[contains(@class, "e-icons e-treegridexpand")])[1]').click();
  await page.locator('(//span[contains(@class, "e-icons e-treegridexpand")])[1]').click();
  await page.locator('(//span[contains(@class, "e-icons e-treegridexpand")])[1]').click();
  await page.locator('(//span[contains(@class, "e-icons e-treegridexpand")])[1]').click();
  //Click the parent record to delete
  await page.locator('(//td[contains(@class, "e-rowcell")])[22]').click();
  //Click delete
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
  //Click Cancel
  await page.locator('(//button[contains(@class, "e-control")])[11]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Delete child Record of Parent Records', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
  await page.waitForTimeout(2000);
  //Click on Child record
  await page.locator('(//td[contains(@class, "e-rowcell")])[12]').click();
  await page.waitForTimeout(100);
  //Click the delete button
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(500);
  //Click Ok to delete the record
  await page.locator('(//button[contains(@class, "e-control")])[10]').click();
  await page.waitForTimeout(100);
  await page.locator('(//td[contains(@class, "e-rowcell")])[22]').click();
  await page.waitForTimeout(100);
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(100);
  //Click the delete button
  await page.locator('(//button[contains(@class, "e-control")])[10]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Collapse all records,Delete parent record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
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
  await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
  //Screenshot validation-The Duration is updated on the taskbar on chart side and records updated properly.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Add new task and edit progress, delete parent records ', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
  await page.waitForTimeout(2000);
  //Click Add  button on the toolbar
  await page.locator("(//span[contains(@class,'add')])[1]").click();
  await page.waitForTimeout(500);
  //Edit the new task name
  await page.locator("(//input[contains(@class,'control')])[2]").fill('New');
  await page.waitForTimeout(500);
  //Click to edit the progress
  await page.locator("#Progress").click();
  await page.waitForTimeout(500);
  await page.locator("#Progress").fill('20');
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(500);
  //Click the parent record to delete
  await page.locator("(//span[text()='Parent task 1'])[1]").click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator("(//span[contains(@class,'delete')])[1]").click();
  await page.waitForTimeout(500);
  //Click the ok button to delete the record
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(500);
  //Click the parent record to delete
  await page.locator("(//span[text()='Parent task 2'])[1]").click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator("(//span[contains(@class,'delete')])[1]").click();
  await page.waitForTimeout(500);
  //Click the ok button to delete the record
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(2000)
  //Screenshot validation- Parent record is deleted and new task is added
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Multi sort ascending the columns and collapse', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
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
  //Sort ascend 3rd column
  await page.locator("(//th[contains(@class,'e-headercell')])[3]").click();
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(500);
  //Click the collapse button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(2000)
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Edit the Start Date with wrong Data Format', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
  await page.waitForTimeout(2000);
  //Double click the start date to cell edit it 
  await page.locator("(//td[contains(@class,'rowcell')])[8]").dblclick();
  await page.waitForTimeout(1000);
  //Enter the wrong Date format
  await page.locator("(//input[contains(@class,'control')])[1]").fill('2021/1/10');
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
  await page.locator("(//span[contains(@class,'collapseall')])").click();;
  await page.waitForTimeout(2000)
  //Screenshot validation-The records are in collapsed state
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Edited both parent and Child taskname', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
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
  await page.waitForTimeout(2000);
  await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
  await page.waitForTimeout(300);
  //Screenshot validation-New task is added and parent and child taskname edited.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Collapse all records,Edit parent record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
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

test('16-Delete added task after collapse all', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
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

test('17-Collapse all Records,Add new task', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
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

test('18-Multi sort ascending the columns', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
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
  await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
  await page.waitForTimeout(300);
  //Screenshot validation-New record task is added and records are in ascending order
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('19-Collapse the records, sort the columns', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
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

test('20-sort the columns in descending order', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent');
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
  await page.locator("(//span[contains(@class,'delete')])[1]").click();
  await page.waitForTimeout(200);
  //Click Ok button to delete the parent record
  await page.locator("(//button[text()='OK'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Records are in descending order and parent record deleted.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/945033
test('21-945033-No Records Displayed', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'expando-data?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'expando-data?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click the 1st parent record 
  await page.locator('(//td[contains(@class,"rowcell")])[1]').click();
  await page.waitForTimeout(500);
  //Press the Insert key on the keyboard
  await page.keyboard.press('Insert');
  await page.waitForTimeout(2000);
  //Screenshot validation-New task is added and records are displayed
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});