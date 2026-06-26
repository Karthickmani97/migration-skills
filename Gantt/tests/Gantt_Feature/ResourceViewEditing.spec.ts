import { test, expect } from '@playwright/test';
import { Helper } from '../Helper/helper';

test('1-Resource view initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Checking Task ID field in dialog tab', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('#resource_add').click();
  //click task name cell
  await page.waitForTimeout(600);
  await page.locator('#TaskName').click();
  await page.waitForTimeout(1000);
  //dialog tab will be opened
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Add and edit record through dialog

test('3-Add new task without taskname', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('#resource_add').click();
  await page.waitForTimeout(800);
  await page.getByLabel('TaskName', { exact: true }).click();
  await page.getByLabel('TaskName', { exact: true }).fill('');
  await page.waitForTimeout(300);
  await page.locator('//*[@id="StartDate"]').click();
  await page.locator('//*[@id="StartDate"]').clear();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="StartDate"]').fill('3/30/2022');
  await page.waitForTimeout(300);
  await page.locator('//*[@id="EndDate"]').click();
  await page.locator('//*[@id="EndDate"]').clear();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="EndDate"]').fill('3/31/2022');
  await page.waitForTimeout(300);
  await page.locator('//*[@id="Progress"]').click();
  await page.locator('//*[@id="Progress"]').fill('25');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//resource tab alignment

test('4-Checking resources tab through edit dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(500);
  await page.getByText('Resources').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//editing resources

test('5-Assigning task from one resource to another', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(800);
  await page.getByRole('tab', { name: 'Resources' }).click();
  await page.waitForTimeout(600);
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[1]').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Assigning task to empty resource', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.getByText('Develop floor plan for estimation').click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(800);
  await page.getByRole('tab', { name: 'Resources' }).click();
  await page.waitForTimeout(800);
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[4]').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//cell-edit child tasks

// test('7-Trying to edit Task ID field-cell edit', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
//   await page.waitForTimeout(500);
//   await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[3]/td[2]').dblclick();
//   await page.waitForTimeout(300);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('8-Editing child taskname using keyboard', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[2]/td[3]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="DataItem___TaskName"]').fill('Project start ');
  await page.waitForTimeout(200);
  await page.locator('//*[@id="DataItem___TaskName"]').press('Enter');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Editing child taskname using toolbar update', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[6]/td[3]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="DataItem___TaskName"]').fill('Toolbar update');
  await page.waitForTimeout(200);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Cancel cell edit action using cancel toolbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[3]/td[3]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="DataItem___TaskName"]').fill('Site');
  await page.waitForTimeout(200);
  await page.getByLabel('Cancel').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Cancel cell-edit action using esc key', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[2]/td[3]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="DataItem___TaskName"]').fill('edited');
  await page.waitForTimeout(200);
  await page.locator('//*[@id="DataItem___TaskName"]').press('Escape');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Edit child startdate using calender', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[2]/td[4]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___StartDate').click();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___StartDate').fill('3/31/2022');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Edit child startdate via keyboard input', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[3]/td[4]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="DataItem___StartDate"]').fill('3/20/2022');
  await page.waitForTimeout(200);
  await page.locator('//*[@id="DataItem___StartDate"]').press('Enter');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Edit child enddate using calender', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[3]/td[5]').dblclick();
  await page.waitForTimeout(600);
  await page.locator('#DataItem___EndDate').click({ clickCount: 3 })
  await page.waitForTimeout(100);
  await page.locator('#DataItem___EndDate').fill("5/3/2022");
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Edit child progress value', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[3]/td[6]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="DataItem___Progress"]').fill('100');
  await page.waitForTimeout(200);
  await page.locator('//*[@id="DataItem___Progress"]').press('Enter');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Edit child progress value as double', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[2]/td[6]').dblclick();
  await page.waitForTimeout(600);
  await page.locator('//*[@id="DataItem___Progress"]').fill('32.5');
  await page.waitForTimeout(200);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Change child progress value to minus', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[6]/td[6]').dblclick();
  await page.waitForTimeout(600);
  await page.locator('//*[@id="DataItem___Progress"]').fill('-25');
  await page.waitForTimeout(200);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


//Cell edit parent record

// test('18-Edit Resouce ID - cell edit', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
//   await page.waitForTimeout(500);
//   await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[1]/td[2]').dblclick();
//   //parent id should not be editable
//   await page.waitForTimeout(300);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('19-Edit Parent resource name-cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[1]/td[3]').dblclick();
  //parent resource name should not be editable
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Edit parent startdate-cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[5]/td[4]').dblclick();
  //parent startdate should not be editable
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Edit parent enddate - cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[5]/td[4]').dblclick();
  //parent enddate should not be editable
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Edit parent progress - cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[5]/td[6]').dblclick();
  //parent Progress should not be editable
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//cell edit unassigned resource task 

test('23-Edit unassigned resource name', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[10]/td[3]').dblclick();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Edit unassigned resource startdate ', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[10]/td[4]').dblclick();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Edit unassigned resource enddate', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[10]/td[4]').dblclick();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


//delete parent record 

test('26-Try to delete parent record at grid side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[1]/td[3]').click();
  //delete option should not be visible
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Try to delete parent record at chart side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('.e-left-label-inner-div').first().click();
  //delete option should not be visible
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Try to delete unassinged resource task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[10]/td[3]').click();
  //delete option should not be visible
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Try to delete unassinged resource task at chart side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('tr:nth-child(10) > .e-chart-row-cell').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Delete parent record using keyboard delete', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[5]/td[3]').click();
  await page.waitForTimeout(300);
  await page.keyboard.press('Delete');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//delete child tasks

test('31-Delete child record at grid side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Delete child record at chart side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="resource_chartContentBody"]/tr[3]/td/div[2]/div[3]/div/div').click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Delte single child task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[6]/td[3]').click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Delete child record using delete key', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.getByText('Develop floor plan for estimation').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[7]/td[3]').press('Enter');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//cell edit unassigned task

test('35-Edit unassigned task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[20]/td[3]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="DataItem___TaskName"]').fill('edited');
  await page.waitForTimeout(200);
  await page.locator('#resource_update').click();
  await page.waitForTimeout(400);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[20]/td[4]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="DataItem___StartDate"]').fill('4/5/2022');
  await page.waitForTimeout(300);
  await page.locator('//*[@id="DataItem___StartDate"]').press('Enter');
  await page.waitForTimeout(600);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[20]/td[6]').dblclick();
  await page.waitForTimeout(400);
  await page.locator('//*[@id="DataItem___Progress"]').fill('47.5');
  await page.waitForTimeout(300);
  await page.locator('#resource_update').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Edit resource to unassigned task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('tr:nth-child(20) > .e-chart-row-cell > .e-left-label-container > .e-left-label-inner-div').click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(800);
  await page.getByText('Resources').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[1]').click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Delete unassigned task at grid side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[21]/td[3]').click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Delete all tasks from unassigned tasks', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('tr:nth-child(21) > .e-chart-row-cell > .e-left-label-container > .e-left-label-inner-div').click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(500);
  await page.locator('tr:nth-child(20) > .e-chart-row-cell > .e-left-label-container > .e-left-label-inner-div').click();
  await page.waitForTimeout(500);
  await page.keyboard.press('Delete');
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Check unassinged task after deleting child record ', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[17]/td[3]').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Add new record after deleting child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(600);
  await page.locator('#resource_add').click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="EndDate"]').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="EndDate"]').fill('3/30/2022');
  await page.waitForTimeout(300);
  await page.getByText('Resources').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[1]').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Drag child task and change view type', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[3]/td/div[2]/div[3]/div').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(1351, 212);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(500);
  await page.locator('.e-switch-handle').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('42-Try to drag and drop parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.getByRole('gridcell', { name: 'Martin Tamer Column Header Name' }).locator('div').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(45, 298);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-Overallocation line removed after taskbar dragging', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[6]/td/div[2]/div[3]/div/div').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(1292, 406);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('44-Drag and drop child record from one resource to another', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[3]/td[1]/div').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(48, 304);
  await page.waitForTimeout(300);
  await page.mouse.move(47, 331);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('45-Delete child task and change view type', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[5]/td[3]').click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(600);
  await page.locator('(//span[contains(@class, "e-switch-on")])[1]').click();
  await page.waitForTimeout(800);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[5]/td[3]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('46-Delete child task and delete from unassigned task', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[6]/td/div[3]/div').click();
  await page.waitForTimeout(1600);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[28]/td[3]').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(3000);
  // expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('47-Add new record with resource and change view type', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Resource-sb');
//   await page.waitForTimeout(1000);
//   await page.locator('(//span[text()="Add"])[1]').click();
//   await page.waitForTimeout(500);
//   await page.locator('#Duration').click();
//    await page.waitForTimeout(500);
//   await page.locator('#Duration').fill('2 days');
//   await page.waitForTimeout(500);
//   await page.getByText('Resources').click();
//   await page.waitForTimeout(500);
//   await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[2]').click();
//   await page.waitForTimeout(500);
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForTimeout(1000);
//   await page.locator('.e-switch-handle').click();
//   await page.waitForTimeout(800);
//   await page.locator('(//span[text()="New Task 21"])[1]').click();
//   await page.waitForTimeout(1200);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('48-Delete child and scroll to bottom', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//td[div/span[text()="Site Analyze"]]').click();
  await page.waitForTimeout(200);
  await page.locator('#Gamtt_delete').click();
  await page.waitForTimeout(400);
  await page.getByRole('button', { name: 'Scroll', exact: true }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('49-Delete more than two records and scroll to bottom', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//td[div/span[text()="Ground floor initiation"]]').click();
  await page.waitForTimeout(500);
  await page.locator('#Gamtt_delete').click();
  await page.waitForTimeout(800);
  await page.locator('//td[div/span[text()="Tile test"]]').click();
  await page.waitForTimeout(500);
  await page.locator('#Gamtt_delete').click();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Scroll', exact: true }).click();
  await page.waitForTimeout(3000);
  //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('50-Delete all tasks from unassigned task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Scroll', exact: true }).click();
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[28]/td[3]').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(1500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[28]/td[3]').click();
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(1300);
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('51-Cancel delete action', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.getByRole('gridcell', { name: 'Perform soil test Column Header Name' }).locator('div').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Scroll', exact: true }).click();
  await page.waitForTimeout(1500);
  await page.getByRole('gridcell', { name: 'Perform soil test Column Header Name' }).locator('div').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(1300);
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('gridcell', { name: 'Building approval Column Header Name' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('52-Collapse all and add new record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Collapse all' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('53-Add new task and expand all records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Collapse all' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(800);
  await page.getByLabel('Work', { exact: true }).click();
  await page.getByLabel('Work', { exact: true }).fill('');
  await page.waitForTimeout(100);
  await page.getByLabel('Work', { exact: true }).fill('43');
  await page.waitForTimeout(200);
  await page.getByLabel('Start Date', { exact: true }).click();
  await page.getByLabel('Start Date', { exact: true }).fill('4/2/2022');
  await page.waitForTimeout(200);
  await page.getByLabel('Duration', { exact: true }).click();
  await page.getByLabel('Duration', { exact: true }).fill('2 days');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Expand all' }).click();
  await page.waitForTimeout(400);
  await page.getByRole('button', { name: 'Scroll', exact: true }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('54-Try to edit work column for parent task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.getByRole('gridcell', { name: '32 is template cell Column Header Work' }).dblclick();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('55-Edit work column using toolbar update', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[8]/td[4]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="DataItem___Work"]').fill('53');
  await page.waitForTimeout(100);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('56-Edit work column using increment operator', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[1]/td[4]').dblclick();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('57-Edit work column using decrement operator', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[8]/td[4]').dblclick();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Decrement value' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Decrement value' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Decrement value' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Decrement value' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('58-Hide overallocation lines', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Show/Hide Overallocation' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('59-Hide overallocation and change view type', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Show/Hide Overallocation' }).click();
  await page.waitForTimeout(500);
  await page.locator('.e-switch-on').click();
  await page.waitForTimeout(1500);
  await page.locator('.e-switch-off').click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('60-/hide overallocation and drag taskbar', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Show/Hide Overallocation' }).click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[6]/td/div[2]/div[3]/div').click();
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  await page.mouse.move(1500, 400);
  await page.waitForTimeout(1000);
  await page.mouse.move(1600, 400);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Show/Hide Overallocation' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('61-Edit dependency through dialog tab - Finish to start', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[6]/td[3]').click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(300);
  await page.locator('//input[contains(@class, "e-control e-combobox e-lib e-input")][1]').click();
  await page.waitForTimeout(100);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(100);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(100);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(100);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(100);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(100);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(100);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('62-Edit dependency start to start', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(300);
  await page.locator('td:nth-child(3) > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(100);
  await page.getByRole('option', { name: 'Start-Start' }).click();
  await page.waitForTimeout(100);
  await page.locator('//input[contains(@class, "e-control e-combobox e-lib e-input")][1]').click();
  await page.waitForTimeout(100);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(100);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(100);
  await page.locator('#Offset').click();
  await page.waitForTimeout(300);
  await page.locator('#Offset').fill('3 days');
  await page.waitForTimeout(100);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('63-Edit dependency finish to finish', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.getByRole('gridcell', { name: 'Project estimation Column Header Name' }).click();
  await page.waitForTimeout(100);
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(300);
  await page.locator('td:nth-child(3) > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Finish-Finish' }).click();
  await page.waitForTimeout(500);
  await page.locator('//input[contains(@class, "e-control e-combobox e-lib e-input")][1]').click();
  await page.waitForTimeout(100);
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(100);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(100);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('64-Edit dependency start to finish', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[3]/td').click();
  await page.waitForTimeout(100);
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(800);
  await page.getByRole('tab', { name: 'Dependency' }).locator('div').first().click();
  await page.waitForTimeout(600);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(800);
  await page.locator('td:nth-child(3) > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Start-Finish' }).click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
  await page.waitForTimeout(100);
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(100);
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(100);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(100);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('65-Add record using method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
  await page.waitForTimeout(200);
  await page.locator('#Add').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('66-Add record and assign resource using method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
  await page.waitForTimeout(200);
  await page.locator('#Add_resource').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('67-Add above and below to the task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
  await page.waitForTimeout(700);
  await page.locator('#Add_above').click();
  await page.waitForTimeout(700);
  await page.locator('#Add_below').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});