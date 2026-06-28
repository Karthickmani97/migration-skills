import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
test('1-Resource allocation initial load', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Add new record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the Add button on the toolbar
  await page.locator('(//span[contains(@class,"add")])').click();
  await page.waitForTimeout(500);
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //screenshot validation-There should be added record displayed, both on grid and chart side.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/933531
test('3-Fixed word: add record with resources', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the add button
  await page.locator('(//span[contains(@class,"add")])').click();
  await page.waitForTimeout(500);
  //Select Resources
  //Click the checkbox in resources to select it
  await page.locator('(//span[contains(@class, "e-uncheck")])[2]').click();
  await page.waitForTimeout(500);
  //Select the checkbox for second resource
  await page.locator('(//span[contains(@class, " e-uncheck")])[1]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-New resources added should be shown on the added task on Grid and chart side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Fixed unit: add record with resources', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the parent record on the Grid side of the component
  await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
  await page.waitForTimeout(500);
  //Click the Add button on the toolbar
  await page.locator('(//span[contains(@class,"add")])').click();
  await page.waitForTimeout(500);
  //Click the dropdown to select Task type
  //Select the checkbox to select the resource
  await page.locator('(//span[contains(@class, "e-uncheck")])[2]').click();
  await page.waitForTimeout(300);
  //Select the second resource checkbox 
  await page.locator('(//span[contains(@class, "e-uncheck")])[4]').click();
  await page.waitForTimeout(300);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Resources added should be shown on grid and chart side and Task type changed on Grid 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Fixed duration: add record with resources', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the Add button on the toolbar
  await page.locator('(//span[contains(@class,"add")])').click();
  await page.waitForTimeout(1000);
  //Click the dropdown to select Task type
  //Click to select checkbox for the resource to add
  await page.locator('(//span[contains(@class, "e-uncheck")])[3]').click();
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Added resources is shown and new task added also visible on the grid side.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Fixed duration: editing resources-dialog edit', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the first child taskbar
  await page.locator('(//div[contains(@class,"child")])[1]').dblclick();
  await page.waitForTimeout(1000);
  //Click the resources
  //Click the checkbox to select it
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[2]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Fixed work: editing resources', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[18]').click();
  await page.waitForTimeout(200);
  await page.locator('(//div[contains(@class,"e-toolbar-item ")])[4]').click();
  await page.waitForTimeout(1000);
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[4]').click();
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[1]').click();
  await page.waitForTimeout(300);
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Fixed work: removing resources', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(500);
  // Click on the task with label 'Develop floor plan for estimation'
  await page.locator('(//span[text()="Develop floor plan for estimation"])[1]').click();
  await page.waitForTimeout(500);
  // Click on the toolbar item to edit resources
  await page.locator('(//div[contains(@class,"e-toolbar-item ")])[4]').click();
  await page.waitForTimeout(500);
  // Click to uncheck the fourth resource checkbox
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[4]').click();
  await page.waitForTimeout(200);
  // Click the save button to save changes
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(500);
  // Click on the cell to select it
  await page.locator('(//td[contains(@class,"e-rowcell")])[34]').click();
  await page.waitForTimeout(500);
  // Screenshot validation-Resources removed should not be shown on the taskbar
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Collapse all parent record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Collapse all' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Expand all records', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Collapse all' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Expand all' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Fixed duration: editing start date', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[15]').dblclick();
  await page.waitForTimeout(1000);
  await page.locator('//input[contains(@id, "StartDate")]').fill('4/3/2021');
  await page.waitForTimeout(300);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Fixed work: editing startdate and enddate', async ({ page }) => {
  // Navigate to the resource allocation page with the fluent theme
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  // Double-click on the cell to edit the task
  await page.locator('(//td[contains(@class,"e-rowcell")])[23]').dblclick();
  await page.waitForTimeout(1000);
  // Fill in the start date
  await page.locator('//input[contains(@id, "StartDate")]').fill('4/3/2021');
  await page.waitForTimeout(500);
  // Press the Tab key to move to the next input field
  await page.keyboard.press("Tab");
  await page.waitForTimeout(500);
  // Fill in the end date
  await page.locator('//input[contains(@id, "EndDate")]').fill('4/12/2021');
  await page.waitForTimeout(500);
  // Press the Enter key to save the changes
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);
  // Screenshot validation- The start and end dates should be updated on the taskbar
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Fixed duration: editing work', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[12]').dblclick();
  await page.waitForTimeout(1000);
  await page.locator('#DataItem___Work').fill('83');
  await page.waitForTimeout(300);
  await page.locator('#DataItem___Work').press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Changed fixed duration as fixed work', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[14]').dblclick();
  await page.waitForTimeout(1000);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(400);
  await page.getByRole('option', { name: 'FixedWork' }).click();
  await page.waitForTimeout(300);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Changed fixed duration as fixed unit', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[14]').dblclick();
  await page.waitForTimeout(1000);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: 'FixedUnit' }).click();
  await page.getByRole('combobox').press('Enter');
  await page.waitForTimeout(300);
  await page.locator('(//td[contains(@class,"e-rowcell")])[12]').dblclick();
  await page.waitForTimeout(1000);
  await page.locator('#DataItem___Work').fill('75');
  await page.getByLabel('Update').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Changed fixed work as fixed duration', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[22]').dblclick();
  await page.waitForTimeout(1000);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: 'FixedDuration' }).click();
  await page.getByRole('combobox').press('Enter');
  await page.waitForTimeout(300);
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[2]').dblclick();
  await page.waitForTimeout(1000);
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[2]').click();
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[3]').click();
  await page.waitForTimeout(200);
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Changed fixed work as fixed unit', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[62]').dblclick();
  await page.waitForTimeout(1000);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: 'FixedUnit' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(300);
  await page.locator(' (//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[6]').dblclick();
  await page.waitForTimeout(1000);
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[3]').click();
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Editing unit for fixed duration', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[10]').click();
  await page.locator('(//div[contains(@class,"e-toolbar-item ")])[4]').click();
  await page.waitForTimeout(1000);
  await page.locator('(//span[contains(@class, "e-frame e-icons e-check")])[1]').click();
  await page.waitForTimeout(200);
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Editing unit for fixed work', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[58]').click();
  await page.locator('(//div[contains(@class,"e-toolbar-item ")])[4]').click();
  await page.waitForTimeout(800);
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[5]').click();
  await page.waitForTimeout(500);
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Checking parent duration edit', async ({ page }) => {
  // Navigate to the resource allocation page with the fluent theme
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(2000);
  // Click on the specific cell to edit the parent duration
  await page.locator('(//td[contains(@class,"e-rowcell")])[34]').click();
  await page.waitForTimeout(300);
  // Click on the toolbar item to enable editing
  await page.locator('(//span[contains(@class,"e-edit")])[1]').click();
  await page.waitForTimeout(2000);
  // Screenshot validation - Parent duration should be editable and the changes should be saved
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Resources dialog UI', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[18]').click();
  await page.locator('(//div[contains(@class,"e-toolbar-item ")])[4]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Remove all resources through ID checkbox', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(2000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[18]').click();
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class,"e-toolbar-item ")])[4]').click();
  await page.waitForTimeout(1000);
  await page.locator('(//span[contains(@class, "e-frame e-icons e-stop ")])').click();
  await page.waitForTimeout(500);
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Cancelling resource edit', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[1]').dblclick();
  await page.waitForTimeout(1000);
  await page.locator('(//span[contains(@class, "e-frame e-icons e-check")])[2]').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Delete parent record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.getByRole('gridcell', { name: 'Project initiation Column Header Event Name' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Delete all parents', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  //select the first parent record
  await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator('(//span[contains(@class,"delete")])').click();
  await page.waitForTimeout(500);
  //Click the Ok button
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(500);
  //Click the secod parent record
  await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator('(//span[contains(@class,"delete")])').click();
  //Click the Ok button
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Delete parent and collapse', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.getByRole('gridcell', { name: 'Project initiation Column Header Event Name' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Collapse all' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Delete parent record and insert record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-gantt-parent-taskbar-inner-div e-row-expand e-gantt-parent-taskbar")])[2]').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(500);
  await page.locator('(//td[contains(@aria-label, "Sign contract Column Header Event Name")])[1]').click();
  await page.waitForTimeout(500);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Delete child record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[2]').click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Collapse all' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Expand all' }).click();
  await page.waitForTimeout(1300);
  await page.locator('(//td[contains(@class, "e-rowcell")])[2]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Edit Duration with a Null value', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  //Click duration
  await page.locator('(//td[contains(@class, "e-rowcell")])[13]').dblclick();
  await page.waitForTimeout(300);
  //Input the null value
  const input = await page.locator('(//input[contains(@id, "DataItem___Duration")])[1]');
  await input.click();
  await input.press('Control+A');
  await input.press('Backspace');
  await page.waitForTimeout(600);
  //Press the keyboard Enter key
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Edit Duration with a Negative value', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  //Select the duration
  await page.locator('(//td[contains(@class, "e-rowcell")])[13]').dblclick();
  await page.waitForTimeout(300);
  //Enter the negative value in duration
  await page.locator('(//input[contains(@class, "e-control")])[1]').fill('-7');
  //Press the keyboard Enter key
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Edit Start Date with wrong date format', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  //Select the start date
  await page.locator('(//td[contains(@class, "e-rowcell")])[15]').dblclick();
  await page.waitForTimeout(300);
  //Enter the wrong date format
  await page.locator('(//input[contains(@class, "e-control")])[1]').fill('2021/4/7');
  //Press the keyboard Enter key
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Edit Start Date with special characters', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  //Click to select the start date
  await page.locator('(//td[contains(@class, "e-rowcell")])[15]').dblclick();
  await page.waitForTimeout(300);
  //Fill in the special characters
  await page.locator('(//input[contains(@class, "e-control")])[1]').fill('*&^%$%');
  //Press the keyboard Enter key
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Edit End Date with special characters', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  //Click to select the End date
  await page.locator('(//td[contains(@class, "e-rowcell")])[16]').dblclick();
  await page.waitForTimeout(300);
  //Fill in the special characters in End date
  await page.locator('(//input[contains(@class, "e-control")])[1]').fill('*&^%$%');
  //Press the keyboard Enter key
  await page.keyboard.press('Enter');
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Edit End Date with wrong date format', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(4000);
  //Select the End date
  await page.locator('(//td[contains(@class, "e-rowcell")])[16]').dblclick();
  await page.waitForTimeout(300);
  //Enter the wrong date 
  await page.locator('(//input[contains(@class, "e-control")])[1]').fill('2021/21/1');
  //Press the keyboard Enter key
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Editing resources through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  await page.waitForTimeout(2000);
  //Click the first child taskbar
  await page.locator('(//div[contains(@class,"child")])[1]').dblclick();
  await page.waitForTimeout(1000);
  //Click the checkbox to select it
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[2]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/69537
test('36-BUG-69537-Issue in events resource edit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  await page.waitForTimeout(2000);
  await page.locator("//div[@role='separator']").click();
  await page.waitForTimeout(1000);
  await page.mouse.down();
  await page.mouse.move(753, 520);
  await page.mouse.move(850, 520);
  await page.mouse.move(1030, 520);
  await page.waitForTimeout(1000);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  //Double click event resources of child record
  await page.locator('(//td[contains(@class,"rowcell")])[11]').dblclick();
  await page.waitForTimeout(3000);
  //Click the resources to show the dropdown
  await page.locator('(//div[contains(@class,"e-multiselect e-control-wrapper e-control-container e-input-group e-checkbox e-valid-input")])[1]').click();
  await page.waitForTimeout(2500);
  //Press keyboard arrow down 
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(1000);
  //Press keyboard arrow down 
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(1000);
  //Press keyboard arrow down
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(1000);
  //Press keyboard Enter to select the resource added
  await page.keyboard.press('Space');
  await page.waitForTimeout(1500);
  //Press keyboard Tab to move to next cell
  await page.keyboard.press('Tab');
  await page.waitForTimeout(1000);
  //Screenshot validation-After press the Tab key no exception is thrown and it moves to next cell
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903988
test('37-Visibility Issue when hover over resources', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  await page.waitForTimeout(2000);
  //Click the settings
  await page.locator('(//span[contains(@class, " sb-icon-settings-preferences")])[1]').click();
  await page.waitForTimeout(500);
  //Select Touch Mode
  await page.locator("(//div[text()='Touch'])[1]").click();
  await page.waitForTimeout(500);
  //Click the child record on grid side
  await page.locator('(//td[contains(@class, "e-rowcell")])[10]').click();
  await page.waitForTimeout(500);
  //Click the Edit button 
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
  await page.waitForTimeout(500);
  //Hover over the resources
  await page.mouse.move(8745, 449);
  await page.waitForTimeout(2000);
  //Screenshot validation- Resources are displayed and are visible.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/901711
test('38-Edit button not visible ', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  await page.waitForTimeout(1000);
  //Click collapse all button
  await page.locator('(//span[contains(@class, "collapseall")])[1]').click();
  await page.waitForTimeout(500);
  //Select the record to delete
  await page.locator('(//td[contains(@class, "rowcell")])[2]').click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator('(//span[contains(@class, "delete")])[1]').click();
  await page.waitForTimeout(500);
  //Click the OK button
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(500);
  //Select the record to delete
  await page.locator('(//td[contains(@class, "rowcell")])[2]').click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator('(//span[contains(@class, "delete")])[1]').click();
  await page.waitForTimeout(500);
  //Click the OK button
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(500);
  //Select the record to delete
  await page.locator('(//td[contains(@class, "rowcell")])[2]').click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator('(//span[contains(@class, "delete")])[1]').click();
  await page.waitForTimeout(500);
  //Click the OK button
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-The edit button does not display on the toolbar after delete all the records on treegrid side and chart side
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903023
test('39-Console error double click save button', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(1000);
  //Click collapse all button
  await page.locator("(//span[text()='Collapse all'])[1]").click();
  await page.waitForTimeout(500);
  //select the first parent record
  await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator("(//span[text()='Delete'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Ok button
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(500);
  //Click the secod parent record
  await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator("(//span[text()='Delete'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Ok button
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(500);
  //Click the child record
  await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator("(//span[text()='Delete'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Ok button
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(500);
  //Click the Add button on the toolbar to add data record
  await page.locator("(//span[text()='Add'])[1]").click();
  await page.waitForTimeout(500);
  //Double click the Save buttton
  await page.locator("(//button[text()='Save'])").dblclick();
  await page.waitForTimeout(1000);
  //Screenshot validation-New task is added and no console is thrown
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/922728
test('40-Console error when press insert key ', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent');
  await page.waitForTimeout(1000);
  await page.locator('(//td[contains(@class,"rowcell")])[1]').click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.keyboard.press('Insert');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/944852
test('41-944852-Console error thrown', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'resource-allocation?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Double click the event resources to cell edit it
  await page.locator('(//td[contains(@class,"rowcell")])[11]').dblclick();
  await page.waitForTimeout(1000);
  //Click it to select records from the drop down
  await page.locator('(//div[contains(@class,"e-multi-select-wrapper")])[1]').click();
  await page.waitForTimeout(500);
  //Select Event Resources Rose Fuller
  await page.locator('(//span[contains(@class,"e-frame e-icons")])[3]').click();
  await page.waitForTimeout(500);
  //Click Update button on the toolbar
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation- No console error is thrown when updating the resources
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('42-Fixed Unit ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'resource-allocation?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Fixed Unit
  await page.locator('(//td[contains(@class,"rowcell")])[14]').dblclick();
  await page.waitForTimeout(1000);
  //Click the dropdown
  await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[1]').click();
  await page.waitForTimeout(500);
  //Select Fixed Unit
  await page.locator("(//li[text()='FixedUnit'])[1]").click();
  await page.waitForTimeout(500);
  //Press the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  //Double click to cell edit Work Hours
  await page.locator('(//td[contains(@class,"rowcell")])[12]').dblclick();
  await page.waitForTimeout(1000);
  //Press the keyboard to clear the records.
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Fill it with 100 Hours on the input
  await page.keyboard.type('100 Hours');
  await page.waitForTimeout(500);
  //Click the update button
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Duration value that is 2 days is updated as 8.22 days.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-Fixed Unit change in resources', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'resource-allocation?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Fixed Unit
  await page.locator('(//td[contains(@class,"rowcell")])[14]').dblclick();
  await page.waitForTimeout(1000);
  //Click the dropdown
  await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[1]').click();
  await page.waitForTimeout(500);
  //Select Fixed Unit
  await page.locator("(//li[text()='FixedUnit'])[1]").click();
  await page.waitForTimeout(500);
  //Press the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  //Double click to cell edit the Duration
  await page.locator('(//td[contains(@class,"rowcell")])[13]').dblclick();
  await page.waitForTimeout(1000);
  //Press the keyboard to clear the records.
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Fill it with days on the input
  await page.keyboard.type('8 days');
  await page.waitForTimeout(500);
  //Press the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  //Screenshot validation-The work hours that was 16 hours updated to 97.3056Hours
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Using dialog tab
test('44-Fixed Unit change in resources through dialog', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'resource-allocation?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click the record to edit the dialog tab
  await page.locator('(//td[contains(@class,"rowcell")])[14]').click();
  await page.waitForTimeout(500);
  //Click the Edit button to open dialog tab
  await page.locator('(//span[contains(@class,"e-edit")])[1]').click();
  await page.waitForTimeout(500);
  //Click the check box to select resources
  await page.locator('(//span[contains(@class,"e-frame e-icons e-uncheck ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The resources are unchecked and it is indicated in chart side
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('45-Fixed Unit change in resources through dialog', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'resource-allocation?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click the record to edit the dialog tab
  await page.locator('(//td[contains(@class,"rowcell")])[14]').click();
  await page.waitForTimeout(1000);
  //Click the Edit button to open dialog tab
  await page.locator('(//span[contains(@class,"edit")])[1]').click();
  await page.waitForTimeout(500);
  //Click the check box to select resources
  await page.locator('(//span[contains(@class,"e-frame e-icons e-uncheck ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Fixed Unit
  await page.locator('(//td[contains(@class,"rowcell")])[14]').dblclick();
  await page.waitForTimeout(1000);
  //Click the dropdown
  await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[1]').click();
  await page.waitForTimeout(500);
  //Select FixedUnit
  await page.locator("(//li[text()='FixedUnit'])[1]").click();
  await page.waitForTimeout(2000);
  //Press the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  //Screenshot validation-Resources are unchecked and it is indicated in chart side
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Fixed Work
test('46-Fixed Work ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'resource-allocation?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Double click to cell edit Work Hours
  await page.locator('(//td[contains(@class,"rowcell")])[20]').dblclick();
  await page.waitForTimeout(1000);
  //Press the keyboard to clear the records.
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Fill it with 100 Hours on the input
  await page.keyboard.type('100 Hours');
  await page.waitForTimeout(500);
  //Click the update button
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Duration value will be updated also from the calculation when select in Fixed Unit 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('47-Fixed Work change in resources', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'resource-allocation?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Double click to cell edit the Duration
  await page.locator('(//td[contains(@class,"rowcell")])[21]').dblclick();
  await page.waitForTimeout(1000);
  //Press the keyboard to clear the records.
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Fill it with days on the input
  await page.keyboard.type('8 days');
  await page.waitForTimeout(500);
  //Press the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  //Screenshot validation-The records are updated on chart side and the work hours updated to 97.3056Hours
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Using dialog tab
test('48-FixedWork change in resources through dialog', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'resource-allocation?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click the record to edit the dialog tab
  await page.locator('(//td[contains(@class,"rowcell")])[21]').click();
  await page.waitForTimeout(1000);
  //Click the Edit button to open dialog tab
  await page.locator('(//span[contains(@class,"edit")])[1]').click();
  await page.waitForTimeout(500);
  //Click the check box to select resources
  await page.locator('(//span[contains(@class,"e-frame e-icons e-uncheck ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Duration value will be updated also from the calculation when select in  FixedWork and resources updated 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('49-FixedWork change in resources through dialog', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'resource-allocation?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click the record to edit the dialog tab
  await page.locator('(//td[contains(@class,"rowcell")])[21]').click();
  await page.waitForTimeout(1000);
  //Click the Edit button to open dialog tab
  await page.locator('(//span[contains(@class,"edit")])[1]').click();
  await page.waitForTimeout(500);
  //Click the check box to select resources
  await page.locator('(//span[contains(@class,"e-frame e-icons e-uncheck ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Duration value will be updated also from the calculation when select in FixedWork and resources updated 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Fixed Duration
test('50-FixedDuration changes in work update  ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'resource-allocation?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Double click to cell edit Work Hours
  await page.locator('(//td[contains(@class,"rowcell")])[12]').dblclick();
  await page.waitForTimeout(1000);
  //Press the keyboard to clear the records.
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Fill it with 100 Hours on the input
  await page.keyboard.type('50 Hours');
  await page.waitForTimeout(500);
  //Press the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  //Screenshot validation-The work hours that was 16 hours updated to 50 hours and the Duration value that is 2 days is updated as 2.5 days.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('51-FixedDuration change in resources', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'resource-allocation?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Double click to cell edit the Duration
  await page.locator('(//td[contains(@class,"rowcell")])[13]').dblclick();
  await page.waitForTimeout(1000);
  //Press the keyboard to clear the records.
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Fill it with days on the input
  await page.keyboard.type('10days');
  await page.waitForTimeout(500);
  //Press the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  //Screenshot validation-2 Days updated to 10 days and the Work hours updated to 121 hours and on the chart side
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Using dialog tab
test('52-FixedDuration change in resources through dialog', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'resource-allocation?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click the record to edit the dialog tab
  await page.locator('(//td[contains(@class,"rowcell")])[14]').click();
  await page.waitForTimeout(1000);
  //Click the Edit button to open dialog tab
  await page.locator('(//span[contains(@class,"edit")])[1]').click();
  await page.waitForTimeout(500);
  //Click the check box to select resources
  await page.locator('(//span[contains(@class,"e-frame e-icons e-uncheck ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Duration value will be updated also from the calculation when select in FixedDuration and resources updated 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Cell edit in Fixed Duration ,Work Hours
test('53-FixedDuration change in work updates resources', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'resource-allocation?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Double click to cell edit Work Hours
  await page.locator('(//td[contains(@class,"rowcell")])[20]').dblclick();
  await page.waitForTimeout(1000);
  //Press the keyboard to clear the records.
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Fill it with 100 Hours on the input
  await page.keyboard.type('100 Hours');
  await page.waitForTimeout(500);
  //Click the update button
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-FixedDuration the chart side taskbars update the resources
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Cell edit in Fixed Duration ,Duration
test('54-FixedDuration change in Duration updates work value', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'resource-allocation?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Double click to cell edit Work Hours
  await page.locator('(//td[contains(@class,"rowcell")])[21]').dblclick();
  await page.waitForTimeout(1000);
  //Press the keyboard to clear the records.
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Fill it with Duration
  await page.keyboard.type('8 days');
  await page.waitForTimeout(500);
  //Click the update button
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-FixedDuration change in Duration updates work value to 97.3056 hours and on the chart side the resources
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});