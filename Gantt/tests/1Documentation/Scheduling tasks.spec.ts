import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Taskbarwidth after delete of manual task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/manuallyscheduledtasks');
  await page.waitForTimeout(1000);
  await page.locator('//tr[@class="e-row e-disable-gridhover"][1]').click();
  await page.getByLabel('Delete').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Add and save of task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/manuallyscheduledtasks');
  await page.waitForTimeout(1000);
  await page.getByLabel('Add').click();
  await page.getByRole('button', { name: 'Save' }).press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Collapse all  of the Records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/manuallyscheduledtasks');
  await page.waitForTimeout(1000);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Expand all of the Records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/manuallyscheduledtasks');
  await page.waitForTimeout(1000);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(200);
  await page.getByLabel('Expand all').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Edit of Duration using a dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/manuallyscheduledtasks');
  await page.waitForTimeout(2000);
  //Click the duration cell 
  await page.locator('(//td[contains(@class, "rowcell")])[11]').click();
  await page.waitForTimeout(500);
  //Click the edit button on the toolbar
  await page.locator('(//span[contains(@class, "edit")])[1]').click();
  await page.waitForTimeout(500);
  //Edit the duration
  await page.locator('(//input[contains(@class, "control")])[5]').fill('4 Days');
  await page.waitForTimeout(500);
  //Press the enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  //Screenshot validation-The records remain same on both grid and chart side
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Delete of End date', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/manuallyscheduledtasks');
  await page.waitForTimeout(1000);
  await page.locator('(//td[@class="e-rowcell  e-leftalign"])[5]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[@class="e-tbar-btn-text"])[4]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Add and save of the tasks', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Automatically-scheduled-task');
  await page.waitForTimeout(2000);
  //Click the Add button on the toolbar
  await page.locator('(//span[contains(@class, "add")])[1]').click();
  await page.waitForTimeout(500);
  //Edit the new task
  await page.locator('(//input[contains(@class, "control")])[2]').fill('List of New Materials');
  await page.waitForTimeout(500);
  //Edit the duration
  await page.locator('(//input[contains(@class, "control")])[5]').fill('10 Days');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-New task is added on both grid and chart side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('8-Collapse all of Records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Automatically-scheduled-task');
  await page.waitForTimeout(500);
  await page.locator('(//span[@class="e-tbar-btn-text"])[7]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Expand all of Records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Automatically-scheduled-task');
  await page.waitForTimeout(500);
  await page.locator('(//span[@class="e-tbar-btn-text"])[7]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[@class="e-tbar-btn-text"])[6]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Editing of the Tasks', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Automatically-scheduled-task');
  await page.waitForTimeout(2000);
  //Click the child record
  await page.locator("(//span[text()='Identify Site location'])[1]").click();
  await page.waitForTimeout(500);
  //Click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Edit the task name
  await page.locator("(//input[contains(@class,'control')])[2]").fill('Identify Site');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The child record edited is updated on the grid side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Delete of the record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Automatically-scheduled-task');
  await page.waitForTimeout(500);
  await page.getByText('Soil test approval').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[@class="e-tbar-btn-text"])[4]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Parent-Startdate edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Automatically-scheduled-task');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[3]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___StartDate').fill('1/5/2022');
  await page.getByLabel('Update').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-StartDate edit through dialog edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Automatically-scheduled-task');
  await page.waitForTimeout(2000);
  //Click the parent record on grid side
  await page.locator("(//span[text()='Project initiation'])[1]").click();
  await page.waitForTimeout(500);
  //Click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Edit the task name
  await page.locator("(//input[contains(@class,'control')])[3]").fill('1/7/2022');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The 1st parent taskbar is updated on the chart side of the component.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Duration edit through cell-edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Automatically-scheduled-task');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[5]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___Duration').click();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___Duration').fill('8 Days');
  await page.waitForTimeout(500);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Duration edit through dialog-edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Automatically-scheduled-task');
  await page.waitForTimeout(2000);
  //Click the child record on grid side
  await page.locator("//*[@id='treeGridGantt_gridcontrol_content_table']/tbody/tr[6]/td[2]").click();
  await page.waitForTimeout(500);
  //Click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Edit the Duration
  await page.locator("(//input[contains(@class,'control')])[5]").fill('8 Days');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The record is updated on the chart side and grid of the component.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//custom
test('16-Add of task and saving it', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Custom-UG');
  await page.waitForTimeout(2000);
  //Click the Add button on the toolbar
  await page.locator("(//span[contains(@class,'add')])").click();
  await page.waitForTimeout(500);
  //Edit the taskname
  await page.locator("(//input[contains(@class,'control')])[2]").fill('New Task 10');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-New task is added and is visible
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Collapse all of the records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Custom-UG');
  await page.waitForTimeout(500);
  await page.locator('(//span[@class="e-tbar-btn-text"])[3]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Expand all of the records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Custom-UG');
  await page.waitForTimeout(500);
  await page.locator('(//span[@class="e-tbar-btn-text"])[3]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[@class="e-tbar-btn-text"])[6]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Taskbar duration edit through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Custom-UG');
  await page.waitForTimeout(2000);
  //Click the child taskbar
  await page.locator("(//div[contains(@class,'child')])[13]").click();
  await page.waitForTimeout(500);
  //Click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Edit the duration
  await page.locator("(//input[contains(@class,'control')])[5]").fill('10 Days');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The dutaion record is updated and child taskbar is edited
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Delete of records through keyboard', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Custom-UG');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[8]/td[2]').click();
  await page.waitForTimeout(500);
  await page.keyboard.press('Delete');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Taskmode edit of child through cell-edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Custom-UG');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[8]/td[7]').dblclick();
  await page.waitForTimeout(500);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(600);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(600);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[8]/td[7]').click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Taskmode edit through dialog edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Custom-UG');
  await page.waitForTimeout(2000);
  //Click the child record on grid side
  await page.locator("(//td[text()='List materials'])[1]").click();
  await page.waitForTimeout(500);
  //Click the edit button
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click the task mode dropdown
  await page.locator("(//span[contains(@class,'input')])[7]").click();
  await page.waitForTimeout(500);
  //Select the Task Mode
  await page.locator("(//li[text()='Manual'])").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The edited child taskbar the Task mode has been changed to Manual
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-StartDate edit through cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Custom-UG');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[3]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___StartDate').fill('1/8/2022');
  await page.getByLabel('Update').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-StartDate edit through dialog edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Custom-UG');
  await page.waitForTimeout(2000);
  //Click the child record on the grid side
  await page.locator("(//td[text()='Soil test approval'])[1]").click();
  await page.waitForTimeout(500);
  //Click the edit button
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Edit the startdate
  await page.locator("(//input[contains(@class,'control')])[3]").fill('1/10/2022');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Sceeenshot validation-The startdate is updated on the grid side of the component.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('25-EndDate edit through cell-edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Custom-UG');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[8]/td[4]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___EndDate').fill('1/11/2022');
  await page.getByLabel('Update').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-EndDate edit through dialog edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Custom-UG');
  await page.waitForTimeout(500);
  //Click the child end daterecord on the grid side of the component
  await page.locator("//*[@id='treeGridGantt_gridcontrol_content_table']/tbody/tr[8]/td[2]").click();
  await page.waitForTimeout(500);
  //Click edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Edit the Endate
  await page.locator("(//input[contains(@class,'control')])[4]").click({clickCount: 3});
  await page.locator("(//input[contains(@class,'control')])[4]").fill('1/17/2022');
  await page.waitForTimeout(500);
  //Press the enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
  await page.waitForTimeout(200);
  //Screenshot validation-The records are updated on the chart side of the component and grid side of end date.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


//Unscheduled tasks
test('28-The tooltip for duration', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Unscheduled-UG');
  await page.waitForTimeout(500);
  await page.locator('//div[@class="e-gantt-child-progressbar-inner-div e-gantt-child-taskbar e-gantt-unscheduled-taskbar "]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-The tooltip for Start Date', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Unscheduled-UG');
  await page.waitForTimeout(500);
  await page.getByLabel('Name Identify Site location Start Date 1/4/2022 Progress 0').locator('div').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-The tooltip for End Date', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Unscheduled-UG');
  await page.waitForTimeout(500);
  await page.getByLabel('Name Perform soil test Start Date 1/7/2022 Progress 0').locator('div').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Tooltip for the taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Unscheduled-UG');
  await page.waitForTimeout(500);
  await page.getByLabel('Name Soil test approval Start Date 1/4/2022 End Date 1/7/2022 Duration 4 Days Progress 30').locator('div').nth(1).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Weekend-or-non-workingdays
test('32-Collapse of the records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Weekend-or-non-workingdays');
  await page.waitForTimeout(500);
  await page.getByLabel('5 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(500);
  await page.getByLabel('1 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Expand of the records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Weekend-or-non-workingdays');
  await page.waitForTimeout(500);
  await page.getByLabel('1 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(500);
  await page.getByLabel('1 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Working time range
test('34-Tooltip for the working time range', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Working-time-range');
  await page.waitForTimeout(500);
  await page.getByLabel('Name Perform soil test Start Date 1/4/2022 End Date 1/4/2022 Duration 1 Day Progress 50').locator('div').nth(2).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
