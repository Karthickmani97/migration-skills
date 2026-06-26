import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Cell editing taskname', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Cell-editing');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[2]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___TaskName').fill('Edited');
  await page.locator('#DataItem___TaskName').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Cell editing start date and enddate', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Cell-editing');
  await page.waitForTimeout(500);
  //milestone edit
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___StartDate').fill('4/6/2022');
  await page.locator('#DataItem___StartDate').press('Enter');
  await page.waitForTimeout(300);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[4]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___EndDate').fill('4/12/2022');
  await page.locator('#DataItem___EndDate').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Edit project name and startdate', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Dialog-editing');
  await page.waitForTimeout(2000);
  //Double click the child taskbar
  await page.locator('(//div[contains(@class, "child")])[1]').dblclick();
  await page.waitForTimeout(1000);
  //Edit the name
  await page.locator('(//input[contains(@class, "control")])[2]').fill('Project1');
  await page.waitForTimeout(500);
  //Click the start date
  await page.locator('(//input[contains(@class, "control")])[3]').fill('19');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The name is edited is visible on the grid side
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Editing milestone duration and progress', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Dialog-editing');
  await page.waitForTimeout(2000);
  //Double click the milestone to edit it
  await page.locator('(//div[contains(@class, "milestone")])[3]').dblclick();
  await page.waitForTimeout(1000);
  //Edit the duration
  await page.locator('(//input[contains(@class, "control")])[5]').click({ clickCount: 3 })
  await page.locator('(//input[contains(@class, "control")])[5]').fill('8 Days');
  await page.waitForTimeout(500);
  //Edit the progress
  await page.locator('(//input[contains(@class, "control")])[6]').click({ clickCount: 2 })
  await page.locator('(//input[contains(@class, "control")])[6]').fill('32');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Progress updated and milestone coverted to taskbar
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Edit parent start date', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Dialog-editing');
  await page.waitForTimeout(2000);
  //Double click the parent record
  await page.locator('(//div[contains(@class, "parent")])[3]').dblclick();
  await page.waitForTimeout(1000);
  //Edit the Taskname
  await page.locator('(//input[contains(@class, "control")])[2]').fill('Data');
  await page.waitForTimeout(500);
  //Edit the start date
  await page.locator('(//input[contains(@class, "control")])[3]').fill('4/8/2022');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The parent records data are updated and it indicates on both grid and chart side.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Add edit dialog field - general tab', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Sections-or-tabs-in-dialog');
  await page.waitForTimeout(500);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(800);
  await page.locator('#TaskName').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Edit dialog fields - general tab', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Sections-or-tabs-in-dialog');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.waitForTimeout(200);
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(800);
  await page.locator('#TaskName').click();
  await page.waitForTimeout(200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Add new record and edit start date and dependency value', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Sections-or-tabs-in-dialog');
  await page.waitForTimeout(500);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(800);
  await page.locator('.e-date-wrapper > .e-input-group-icon').first().click();
  await page.getByText('12', { exact: true }).click();
  await page.waitForTimeout(200);
  await page.getByRole('tab', { name: 'Dependency' }).locator('div').first().click();
  await page.waitForTimeout(600);
  await page.getByLabel('Dependency', { exact: true }).getByLabel('Add').click();
  await page.waitForTimeout(200);
  await page.locator('form').getByRole('cell', { name: '' }).locator('span').nth(2).click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: '3-Perform soil test' }).click();
  await page.waitForTimeout(200);
  await page.locator('div:nth-child(4) > .e-content').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Remove and edit dependency', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Sections-or-tabs-in-dialog');
  await page.waitForTimeout(500);
  await page.getByRole('gridcell', { name: 'Perform soil test' }).click();
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(800);
  await page.locator("//div[@class='e-tab-text' and text()='Dependency']").click();
  await page.waitForTimeout(600);
  await page.getByText('2-Identify Site location', { exact: true }).click();
  await page.getByLabel('Delete', { exact: true }).click();
  await page.waitForTimeout(200);
  await page.getByRole('tabpanel', { name: 'Dependency' }).getByLabel('Add').click();
  await page.waitForTimeout(200);
  await page.locator('.e-input-group-icon.e-ddl-icon').first().click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: '5-Project estimation' }).click();
  await page.waitForTimeout(200);
  await page.locator('div:nth-child(4) > .e-content').click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Editing resources', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Sections-or-tabs-in-dialog');
  await page.waitForTimeout(2000);
  //Double click the 3rd child taskbar
  await page.locator('(//div[contains(@class, "child")])[1]').dblclick();
  await page.waitForTimeout(1000);
  //Click to select the resources
  await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
  await page.waitForTimeout(600);
  //Unselect the resource
  await page.locator('(//span[contains(@class, "e-check")])[2]').click();
  await page.waitForTimeout(200);
  //Select the resource
  await page.locator('(//span[contains(@class, "e-uncheck")])[1]').click();
  await page.waitForTimeout(200);
  //Click save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The child record taskbar on the chart side of the component has been updated
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Checking Notest tab', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Sections-or-tabs-in-dialog');
  await page.waitForTimeout(2000);
  //Click the child record
  await page.locator("(//td[text()='Develop floor plan for estimation'])[1]").click();
  await page.waitForTimeout(500);
  //Click the edit button on the toolbar
  await page.locator('(//span[contains(@class, "edit")])[1]').click();
  await page.waitForTimeout(500);
  //Click the Notes to open its dialog tab
  await page.locator('(//div[contains(@class, "e-tab-text")])[4]').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Notes dialog tab is opened
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Limiting data fields in general tab', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Limiting-data-fields-in-general-tab');
  await page.waitForTimeout(500);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(800);
  await page.locator('#TaskName').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Add record with two fields ', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Limiting-data-fields-in-general-tab');
  await page.waitForTimeout(500);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(800);
  await page.getByLabel('Name', { exact: true }).click();
  await page.getByLabel('Name', { exact: true }).fill('Data');
  await page.waitForTimeout(200);
  await page.getByLabel('Duration', { exact: true }).click();
  await page.getByLabel('Duration', { exact: true }).fill('3 days');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Edit dialog - limiting data fields', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Limiting-data-fields-in-general-tab');
  await page.waitForTimeout(500);
  // Click on a specific cell to focus
  await page.locator("(//td[contains(@class,'rowcell')])[12]").click();
  await page.waitForTimeout(800);
  // Click the Add button
  await page.locator("(//span[text()='Add'])[1]").click();
  await page.waitForTimeout(500);
  await page.locator("#TaskName").click();
  await page.waitForTimeout(500);
  // Validate the screenshot-The dialog is opened with the limited fields
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Try to edit the taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Prevent-editing-for-specific-tasks');
  await page.waitForTimeout(500);
  await page.locator('.e-gantt-child-progressbar-inner-div').first().click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(699, 175);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Drag the parent taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Prevent-editing-for-specific-tasks');
  await page.waitForTimeout(500);
  await page.locator('.e-gantt-parent-progressbar-inner-div').first().click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(700, 96);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Drag milestone task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Prevent-editing-for-specific-tasks');
  await page.waitForTimeout(500);
  await page.locator('.e-gantt-milestone').first().click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(617, 124);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[1]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Remove dependency through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Task-dependencies');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div")])[1]').dblclick();
  await page.waitForTimeout(1000);
  await page.locator("//div[@class='e-tab-text' and text()='Dependency']").click();
  await page.waitForTimeout(200);
  await page.getByRole('gridcell', { name: '-Identify Site location' }).click();
  await page.waitForTimeout(500);
  await page.getByLabel('Delete', { exact: true }).click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Remove dependency through cell-edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Task-dependencies');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[6]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___Predecessor').fill('');
  await page.locator('#DataItem___Predecessor').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Update the task value using method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Update-task-values-using-method');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Update Task 3' }).click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Taskbar drag - drag parent taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-editing');
  await page.waitForTimeout(500);
  await page.locator('.e-gantt-parent-taskbar-inner-div').first().click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(614, 97);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Taskbar drag - drag child task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-editing');
  await page.waitForTimeout(500);
  await page.locator('tr:nth-child(6) > .e-chart-row-cell > .e-taskbar-main-container > div:nth-child(3) > .e-gantt-child-taskbar-inner-div').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(677, 283);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Creatting taskbar on draw action', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Creating-taskbar-on-draw-action');
  await page.waitForTimeout(500);
  await page.locator('tr:nth-child(2) > .e-chart-row-cell').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(384, 141);
  await page.mouse.move(612, 413);
  await page.waitForTimeout(400);
  await page.mouse.up();
  await page.waitForTimeout(500);
  await page.locator('(//td[contains(@class, "e-chart-row-cell e-chart-row-border")])[3]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Indent child record and outdent miestone task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Indent-and-outdent');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.getByLabel('Indent').click();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[8]/td[2]').click();
  await page.getByLabel('Outdent').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Outdent child and collapse parent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Indent-and-outdent');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.getByLabel('Outdent').click();
  await page.waitForTimeout(300);
  await page.getByLabel('1 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Indent parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Indent-and-outdent');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[2]').click();
  await page.getByLabel('Indent').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});