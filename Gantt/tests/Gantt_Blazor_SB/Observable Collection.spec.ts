import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
test('1-Observable Collection initial load', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Delete record using delete button', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(4000);
  for (let i = 0; i < 11; i++) {
    await page.locator('(//button[contains(@class, "e-control")])[4]').click();
    await page.waitForTimeout(500);
  }
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test.fixme('3-Add and delete record', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
//   await page.waitForTimeout(4000);
//   await page.locator('(//td[contains(@class, "e-rowcell e-ellipsistooltip")])[3]').click();
//   await page.waitForTimeout(200);
//   //Click Add
//   await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
//   await page.waitForTimeout(1000);
//   //Click to save
//   await page.locator('(//button[text()="Save"])[1]').click();
//   await page.waitForTimeout(2000);
//   await page.locator('(//td[contains(@class, "e-rowcell e-ellipsistooltip")])[2]').click();
//   await page.waitForTimeout(400);
//   //Delete
//   await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
//   await page.waitForTimeout(1500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('4-Add record using method', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the child record on grid side
  await page.locator('(//td[contains(@class, "e-rowcell e-ellipsistooltip")])[2]').click();
  await page.waitForTimeout(500);
  //Add Data Button
  await page.locator('(//button[contains(@class, "e-control")])[3]').click();
  await page.waitForTimeout(500);
  //Double click the new task added
  await page.locator('(//td[text()="New Task"])[1]').dblclick();
  await page.waitForTimeout(1000);
  //Enter the record
  await page.locator('#DataItem___TaskName').fill('Project data');
  await page.waitForTimeout(800);
  //Click the update button
  await page.locator('(//span[text()="Update"])[1]').click();
  await page.waitForTimeout(2500);
  //Screenshot validation-Record added is updated on the grid side.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Delete record using method', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class, "e-rowcell e-ellipsistooltip")])[6]').click();
  await page.waitForTimeout(100);
  //Delete Data
  await page.locator('(//button[contains(@class, "e-control")])[4]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Update record using method', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(4000);
  //Update Data
  await page.locator('(//button[contains(@class, "e-control")])[5]').click();
  await page.waitForTimeout(300);
  await page.getByRole('gridcell', { name: '1 Column Header ID', exact: true }).locator('span').first().click();
  await page.waitForTimeout(500);
  await page.getByRole('gridcell', { name: '1 Column Header ID', exact: true }).locator('span').first().click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Edit taskname record through dialog edit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the child record
  await page.locator('(//td[contains(@class, "e-rowcell")])[8]').click();
  await page.waitForTimeout(300);
  //Edit button
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(500);
  //Select the taskname to edit
  await page.locator('(//input[contains(@class, "e-control")])[2]').click();
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.locator('(//input[contains(@class, "e-control")])[2]').fill('Define the product');
  //Click to save
  await page.locator('(//button[contains(@class, "e-control")])[12]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Negatives scenarios
test('8-Edit the start date using wrong date format', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the start date
  await page.locator('(//td[contains(@class, "e-rowcell")])[15]').dblclick();
  await page.waitForTimeout(2000);
  //Press the keybaord Control+A to select all
  await page.keyboard.press('Control+A');
  //Press the Backspace key to clear the selected records
  await page.keyboard.press('Backspace');
  //Enter the wrong date format
  await page.locator('#DataItem___StartDate').fill('2021/2/14');
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Edit the End date with Null Value', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the End date
  await page.locator('(//td[contains(@class, "e-rowcell")])[16]').dblclick();
  await page.waitForTimeout(100);
  //Null value
  const input = await page.locator('#DataItem___EndDate');
  await input.click();
  await input.press('Control+A');
  await input.press('Backspace');
  await page.waitForTimeout(600);
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Edit Duration with Null value', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the Duration
  await page.locator('(//td[contains(@class, "rowcell")])[17]').dblclick();
  await page.waitForTimeout(1000);
  //null value
  const input = await page.locator('(//input[contains(@class, "control")])[1]');
  await input.click();
  await input.press('Control+A');
  await input.press('Backspace');
  await page.waitForTimeout(600);
  await page.waitForTimeout(500);
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Edit Progress with Null value', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the Progress
  await page.locator('(//td[contains(@class, "e-rowcell")])[18]').dblclick();
  await page.waitForTimeout(100);
  //Null value
  const input = await page.locator('(//input[contains(@class, "e-control")])[1]');
  await input.click();
  await input.press('Control+A');
  await input.press('Backspace');
  await page.waitForTimeout(600);
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Edit Duration with Negative value', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the Duration
  await page.locator('(//td[contains(@class, "e-rowcell")])[17]').dblclick();
  await page.waitForTimeout(500);
  //Negative value
  await page.locator('(//input[contains(@class, "e-control")])[1]').fill('-4');
  await page.waitForTimeout(500);
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Edit Progress with Negative value', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the Progress
  await page.locator('(//td[contains(@class, "e-rowcell")])[18]').dblclick();
  await page.waitForTimeout(100);
  //Negative value
  await page.locator('(//input[contains(@class, "e-control")])[1]').fill('-40');
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Add record and drag the taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(4000);
  //Click Add
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
  await page.waitForTimeout(1000);
  //Click to save
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(1000);
  //drag taskbar
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[1]').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(920, 232);
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test.fixme('15-Add record and resize the taskbar', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
//   await page.waitForTimeout(4000);
//   //Add record using method
//   await page.locator('(//button[contains(@class, "e-control")])[3]').click();
//   await page.waitForTimeout(500);
//   await page.locator('(//div[contains(@class, "e-taskbar-right-resizer")])[1]').click();
//   await page.waitForTimeout(500);
//   await page.mouse.down();
//   await page.waitForTimeout(400);
//   await page.mouse.move(1140, 415);
//   await page.waitForTimeout(400);
//   await page.mouse.up();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('16-Edit progress and click on add method button', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(2000);
  //Edit progress through cell edit
  await page.locator('(//div[contains(@class,"child")])[1]').dblclick();
  await page.waitForTimeout(500);
  //Enter the value
  await page.locator('(//input[contains(@class,"control")])[6]').click();
  await page.waitForTimeout(600);
  await page.locator('(//input[contains(@class,"control")])[6]').fill("100");
  await page.waitForTimeout(600);
  //Press the enter key on the keyboard
  await page.keyboard.press("Enter");
  await page.waitForTimeout(500);
  //Click the add button
  await page.locator('(//button[contains(@id,"add")])[1]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Edit progress through dialog and click add button', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(2000);
  //Edit progress through dialog edit
  await page.locator('(//div[contains(@class,"child")])[1]').dblclick();
  await page.waitForTimeout(1000);
  //Edit the progress
  await page.locator('(//input[contains(@class,"control")])[6]').click();
  await page.waitForTimeout(200);
  await page.locator('(//input[contains(@class,"control")])[6]').fill("100");
  await page.waitForTimeout(200);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(100);
  //Click on add button
  await page.locator("(//button[text()='Add Data'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/testing/_workitems/edit/876638
test('18-Edit the start date with Null Value', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the start date 
  await page.locator("(//td[contains(@class,'rowcell')])[3]").dblclick();
  await page.waitForTimeout(1000);
  //Enter the Null value
  await page.locator('(//input[contains(@class,"control")])').fill("");
  await page.waitForTimeout(500);
  //Click the update button
  await page.locator("(//span[text()='Update'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Start date reverts to normal date when Null value is entered and updated
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/testing/_workitems/edit/889922
test('19-Records are updated on the chart side', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the add button on the toolbar
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(300);
  //Click the the update button on the toolbar
  await page.locator("(//button[text()='Update Data'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Added record is updated and chart side of the component records are visible
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Delete Record,Add new Data and Update the Tasks ', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(2000);
  //Click delete data button
  await page.locator("(//button[text()='Delete Data'])").click();
  await page.waitForTimeout(500);
  //Click delete data button
  await page.locator("(//button[text()='Delete Data'])").click();
  await page.waitForTimeout(500);
  //Click Add data 
  await page.locator("(//button[text()='Add Data'])").click();
  await page.waitForTimeout(500);
  //Click the the update button on the toolbar
  await page.locator("(//button[text()='Update Data'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Added record is updated and chart it is shown.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('21-Edit the Duration through cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(2000);
  //Double click duration cell to allow for cell edit 
  await page.locator('(//td[contains(@class,"rowcell")])[11]').dblclick();
  await page.waitForTimeout(1000);
  //Enter the value 
  await page.locator('(//input[contains(@class,"control")])[1]').fill('6 Days');
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(500);
  //Double click the 1st parent record 
  await page.locator('(//td[contains(@class,"rowcell")])[2]').dblclick();
  await page.waitForTimeout(1000);
  //Edit the parent record with Null value
  await page.locator('(//input[contains(@class,"control")])[1]').fill('');
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(500);
  //Click Add data 
  await page.locator("(//button[text()='Add Data'])").click();
  await page.waitForTimeout(500);
  //Click the the add button on the toolbar
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-New records added shown and parent record saved with Null value visible.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Delete last parent Record,Delete Data', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the last parent record to delete
  await page.locator("(//span[text()='38'])[1]").click();
  await page.waitForTimeout(500);
  //Click delete button on the toolbar
  await page.locator('(//span[contains(@class,"delete")])[1]').click();
  await page.waitForTimeout(500);
  //Click delete data button
  await page.locator("(//button[text()='Delete Data'])").click();
  await page.waitForTimeout(500);
  //Double click the start date to cell edit it in child record
  await page.locator('(//td[contains(@class,"rowcell")])[9]').dblclick();
  await page.waitForTimeout(1000);
  //Enter the record 
  await page.locator('(//input[contains(@class,"control")])[1]').fill('4/4/2021');
  await page.waitForTimeout(2000);
  //Screenshot validation-The cell of start date is in edited state
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Update Data,Add new task and Update the Data', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the the update button on the toolbar
  await page.locator("(//button[text()='Update Data'])").click();
  await page.waitForTimeout(500);
  //Click the add button on the toolbar
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(500);
  //Click the the update button on the toolbar
  await page.locator("(//button[text()='Update Data'])").click();
  await page.waitForTimeout(500);
  //Click Add data 
  await page.locator("(//button[text()='Add Data'])").click();
  await page.waitForTimeout(500);
  //Double click the child taskbar for added record
  await page.locator('(//div[contains(@class,"child")])[1]').dblclick();
  await page.waitForTimeout(1000);
  //Click the Duration 
  await page.locator('(//input[contains(@class,"control")])[5]').fill('14 Days');
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The records are updated on both Grid and Chart side
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Edit Start date and End date through cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(2000);
  //Double click the start date to cell edit it in child record
  await page.locator('(//td[contains(@class,"rowcell")])[9]').dblclick();
  await page.waitForTimeout(1000);
  //Enter the Null Value
  await page.locator('(//input[contains(@class,"control")])[1]').fill('');
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(500);
  //Double click the End date to cell edit it in child record
  await page.locator('(//td[contains(@class,"rowcell")])[10]').dblclick();
  await page.waitForTimeout(1000);
  //Enter the Null Value
  await page.locator('(//input[contains(@class,"control")])[1]').fill('');
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(500);
  //Double click the Duration to cell edit it in child record
  await page.locator('(//td[contains(@class,"rowcell")])[9]').dblclick();
  await page.waitForTimeout(1000);
  //Enter the Duration
  await page.locator('(//input[contains(@class,"control")])[1]').fill('5 Days');
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(500);
  //Click the the update button on the toolbar
  await page.locator("(//button[text()='Update Data'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The child taskbar on chart side is shown Duration
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Edit the child record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the the record
  await page.locator("(//td[text()='Concept approval'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the edit button
  await page.locator('(//span[contains(@class,"edit")])[1]').click();
  await page.waitForTimeout(500);
  //Click duration to edit it to switch it from Milestone to Task
  await page.locator('(//input[contains(@class,"control")])[5]').fill('5 Days');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(1000);
  //Click Delete Data
  await page.locator("(//button[text()='Delete Data'])").click();
  await page.waitForTimeout(500);
  //Click Delete Data
  await page.locator("(//button[text()='Delete Data'])").click();
  await page.waitForTimeout(500);
  //Click Delete Data
  await page.locator("(//button[text()='Delete Data'])").click();
  await page.waitForTimeout(500);
  //Click the the update button on the toolbar
  await page.locator("(//button[text()='Update Data'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The record indicated it is updated.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/885151
test('26-BUG-885151-Green Cell Coloration on Null Entry', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  await page.waitForTimeout(2000);
  //Double click the duration
  await page.locator('(//td[contains(@class,"e-rowcell")])[11]').dblclick();
  await page.waitForTimeout(1000);
  //Enter Null value in duration
  await page.locator('#DataItem___Duration').fill('');
  await page.waitForTimeout(500);
  //Press the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  //Click the cell on any row
  await page.locator('(//td[contains(@class,"e-rowcell")])[10]').click();
  await page.waitForTimeout(1000);
  //Screenshot validation-There is no selection made after select the record.
  expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/927718
test('27-927718-Console error is thrown when delete record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent');
  test.info().annotations.push({ type: 'Sample link', description: 'observable-collection?theme=fluent' });
  await page.waitForTimeout(2000);
  //Click the parent record
  await page.locator('(//td[contains(@class,"e-rowcell")])[1]').click();
  await page.waitForTimeout(500);
  //Press the insert key 3 times not continously
  await page.keyboard.press('Insert');
  await page.waitForTimeout(500);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(500);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(500);
  //Click the 43 record added 
  await page.locator('(//td[contains(@class,"e-rowcell")])[1]').click();
  await page.waitForTimeout(500);
  //Click the delete button
  await page.locator('(//span[contains(@class,"delete")])[1]').click();
  await page.waitForTimeout(500);
  //Click the 42 record added 
  await page.locator('(//td[contains(@class,"e-rowcell")])[1]').click();
  await page.waitForTimeout(500);
  //Click the delete button
  await page.locator('(//span[contains(@class,"delete")])[1]').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Console error not thrown
  expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Add multiple records and validate', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(2000);
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(1000);
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(1000);
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(1000);
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(1000);
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(1000);
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(1200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Delete multiple newly added records', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(2000);
  for (let i = 0; i < 3; i++) {
    await page.locator('(//button[contains(@class, "e-control")])[4]').click();
    await page.waitForTimeout(500);
  }
  await page.waitForTimeout(1200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Edit task name via dialog and verify', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(3000);
  await page.locator('(//td[contains(@class, "e-rowcell")])[8]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(500);
  await page.locator('(//input[contains(@class, "e-control")])[2]').fill('Updated Task Name');
  await page.waitForTimeout(500);
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Change progress to 75 via cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(3000);
  await page.locator('(//td[contains(@class, "e-rowcell")])[18]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('(//input[contains(@class,"e-control")])[1]').fill('75');
  await page.waitForTimeout(200);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Set duration to 10 Days via dialog edit', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(2000);
  await page.locator('(//div[contains(@class,"child")])[1]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('(//input[contains(@class,"control")])[5]').fill('10 Days');
  await page.waitForTimeout(500);
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Drag newly added taskbar slightly and verify', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(3000);
  // Add a task then drag
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(500);
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(800);
  const tb = page.locator('(//div[contains(@class, "e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[1]');
  await tb.click();
  await page.mouse.down();
  await page.mouse.move(900, 230);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Resize a taskbar left handle and validate', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(3000);
  await page.locator('(//div[contains(@class, "e-taskbar-left-resizer")])[1]').click();
  await page.mouse.down();
  await page.mouse.move(700, 420);
  await page.mouse.up();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Quick add then cancel via dialog', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(3000);
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(300);
  // Open dialog then click Cancel
  await page.locator("(//button[text()='Cancel'])").click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Update Data then revert', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator("(//button[text()='Update Data'])").click();
  await page.waitForTimeout(500);
  await page.locator('(//button[contains(@class, "e-control")])[4]').click();
  await page.waitForTimeout(500);
  await page.locator("(//button[text()='Update Data'])").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Add then Edit StartDate via cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(500);
  await page.locator('(//button[text()="Save"])').click();
  await page.waitForTimeout(800);
  await page.locator('(//td[contains(@class,"rowcell")])[9]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('(//input[contains(@class,"control")])[1]').fill('4/10/2021');
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Set milestone by setting duration empty', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator('(//td[contains(@class,"rowcell")])[11]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___Duration').fill('');
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Change parent duration after child edit', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator('(//td[contains(@class,"rowcell")])[9]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('(//input[contains(@class,"control")])[1]').fill('7 Days');
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  await page.locator('(//td[contains(@class,"rowcell")])[2]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('(//input[contains(@class,"control")])[1]').fill('');
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Add and immediately delete to check stability', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(800);
  await page.locator('(//button[contains(@class, "e-control")])[4]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Edit progress to boundary 0 and 100', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  // set to 0
  await page.locator('(//td[contains(@class, "e-rowcell")])[18]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('(//input[contains(@class,"e-control")])[1]').fill('0');
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  // set to 100
  await page.locator('(//td[contains(@class, "e-rowcell")])[18]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('(//input[contains(@class,"e-control")])[1]').fill('100');
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('42-Toggle expand/collapse a parent row', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').dblclick();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-Perform sequential add, update, delete operations', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(300);
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(500);
  await page.locator("(//button[text()='Update Data'])").click();
  await page.waitForTimeout(500);
  await page.locator('(//button[contains(@class, "e-control")])[4]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('44-Edit start date to invalid value and recover', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator('(//td[contains(@class, "e-rowcell")])[15]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___StartDate').fill('invalid-date');
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  // recover by entering valid date
  await page.locator('(//td[contains(@class, "e-rowcell")])[15]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___StartDate').fill('4/1/2021');
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('45-Set EndDate null then set back', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  const input = page.locator('#DataItem___EndDate');
  await page.waitForTimeout(500);
  await page.locator('(//td[contains(@class, "e-rowcell")])[16]').dblclick();
  await page.waitForTimeout(500);
  await input.fill('');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.waitForTimeout(500);
  await page.locator('(//td[contains(@class, "e-rowcell")])[16]').dblclick();
  await page.waitForTimeout(500);
  await input.fill('4/20/2021');
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('46-Insert key multiple times then cleanup', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
  await page.waitForTimeout(500);
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('Insert');
    await page.waitForTimeout(500);
  }
  // delete a couple
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class,"delete")])[1]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class,"delete")])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('47-Edit and cancel dialog edit', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator('(//td[contains(@class, "e-rowcell")])[8]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(300);
  await page.locator('(//input[contains(@class, "e-control")])[2]').fill('Temp Name');
  await page.waitForTimeout(500);
  await page.locator("(//button[text()='Cancel'])").click();
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-left-label-container")])[2]');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('48-Bulk update via Update Data button', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator("(//button[text()='Update Data'])").click();
  await page.waitForTimeout(1200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('49-Ensure chart side renders after several operations', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(300);
  await page.locator('(//button[text()="Save"])').click();
  await page.waitForTimeout(500);
  await page.locator('(//button[text()="Update Data"])').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('50-Delete alternating rows and validate', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  // delete 2 alternating rows
  await page.locator('(//button[contains(@class, "e-control")])[4]').click();
  await page.waitForTimeout(800);
  await page.locator('(//button[contains(@class, "e-control")])[4]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('51-Add then update a child task duration and verify', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(800);
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class,"child")])[1]').dblclick();
  await page.waitForTimeout(800);
  await page.locator('(//input[contains(@class,"control")])[5]').fill('3 Days');
  await page.waitForTimeout(800);
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(1200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('52-Edit progress with non-numeric value and revert', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator('(//td[contains(@class, "e-rowcell")])[18]').dblclick();
  await page.waitForTimeout(800);
  await page.locator('(//input[contains(@class,"e-control")])[1]').fill('abc');
  await page.waitForTimeout(800);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  // revert to valid
  await page.locator('(//td[contains(@class, "e-rowcell")])[18]').dblclick();
  await page.waitForTimeout(800);
  await page.locator('(//input[contains(@class,"e-control")])[1]').fill('50');
  await page.waitForTimeout(800);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('53-Add data then use Update button multiple times', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator('(//button[text()="Add Data"])').click();
  await page.waitForTimeout(300);
  await page.locator('(//button[text()="Update Data"])').click();
  await page.waitForTimeout(300);
  await page.locator('(//button[text()="Update Data"])').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('54-Delete then Add then Update sequence', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator('(//button[text()="Delete Data"])').click();
  await page.waitForTimeout(300);
  await page.locator('(//button[text()="Add Data"])').click();
  await page.waitForTimeout(300);
  await page.locator('(//button[text()="Update Data"])').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('55-Edit parent row name and validate grid', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('(//input[contains(@class,"control")])[1]').fill('Parent Changed');
  await page.waitForTimeout(300);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('56-Add then toggle selection and validate', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(400);
  await page.locator('(//button[text()="Save"])').click();
  await page.waitForTimeout(400);
  await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
  await page.waitForTimeout(400);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('57-Final stability check after many operations', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(2000);
  // a mix of operations
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(300);
  await page.locator('(//button[text()="Save"])').click();
  await page.waitForTimeout(400);
  await page.locator('(//button[text()="Update Data"])').click();
  await page.waitForTimeout(400);
  await page.locator('(//button[contains(@class, "e-control")])[4]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('58-Bulk add and update chart side validation', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  // Add several records quickly and save each
  for (let i = 0; i < 4; i++) {
    await page.locator('(//span[contains(@class,"add")])[1]').click();
    await page.waitForTimeout(300);
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(400);
  }
  // Push all to chart side
  await page.locator("(//button[text()='Update Data'])").click();
  await page.waitForTimeout(1200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('59-Invalid progress and duration inputs recover gracefully', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  // Set progress beyond 100 then recover
  await page.locator('(//td[contains(@class, "e-rowcell")])[18]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('(//input[contains(@class,"e-control")])[1]').fill('150');
  await page.waitForTimeout(300);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  // Revert to valid value
  await page.locator('(//td[contains(@class, "e-rowcell")])[18]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('(//input[contains(@class,"e-control")])[1]').fill('50');
  await page.waitForTimeout(300);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  // Enter non-numeric duration then correct it
  await page.locator('(//td[contains(@class,"rowcell")])[11]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___Duration').fill('abc');
  await page.waitForTimeout(300);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  // Correct duration
  await page.locator('(//td[contains(@class,"rowcell")])[11]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___Duration').fill('5 Days');
  await page.waitForTimeout(300);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('60-Rapid add-delete-drag resilience', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'observable-collection?theme=fluent2');
  await page.waitForTimeout(1500);
  //Rapid add and immediate delete
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(200);
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(300);
  await page.locator('(//button[contains(@class, "e-control")])[4]').click();
  await page.waitForTimeout(500);
  // Add again and perform a small drag and resize
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(300);
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(600);
  const tb = page.locator('(//div[contains(@class, "e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[1]');
  await tb.click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.mouse.move(900, 230);
  await page.mouse.up();
  await page.waitForTimeout(500);
  // Resize right handle slightly
  await page.locator('(//div[contains(@class, "e-taskbar-right-resizer")])[1]').click();
  await page.mouse.down();
  await page.mouse.move(1150, 420);
  await page.mouse.up();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});