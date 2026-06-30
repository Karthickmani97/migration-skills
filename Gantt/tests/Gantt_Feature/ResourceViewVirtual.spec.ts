import { test, expect } from '@playwright/test';
import { Helper } from '../Helper/helper';

test('1-Resource view virtual initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Add record and edit and scroll to bottom', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2500);
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('End Date', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByLabel('End Date', { exact: true }).fill('4/2/2022');
  await page.waitForTimeout(500);
  await page.getByLabel('Progress', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByLabel('Progress', { exact: true }).fill('35');
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="Scroll_Rows"]').click();
  await page.waitForTimeout(4000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[32]/td[3]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Collapse all and zoom-to-fit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Collapse all' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Zoom to fit' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Zoom-to-fit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Zoom to fit' }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Edit startdate - cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[12]/td[4]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___StartDate').fill('4/3/2022');
  await page.waitForTimeout(300);
  await page.locator('#DataItem___StartDate').press('Enter');
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Edit resources through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[13]/td[3]').click();
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_edit').click();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[3]').click();
  await page.waitForTimeout(1300);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(3000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Delte child records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[3]').click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[6]/td[3]').click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(400);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[3]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Zoom-in and filter child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Zoom In', exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Zoom In', exact: true }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Zoom-out and filtering enddate column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Zoom out', exact: true }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Zoom out', exact: true }).click();
  await page.waitForTimeout(300);
  await page.getByTitle('Filter Icon').nth(3).click();
  await page.waitForTimeout(200);
  await page.locator('.e-input-group-icon.e-ddl-icon').click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: 'Greater Than', exact: true }).click();
  await page.waitForTimeout(200);
  await page.getByPlaceholder('Choose a Date').click();
  await page.getByPlaceholder('Choose a Date').fill('5/17/2022');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Filter', exact: true }).click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Zoom-in method and next timespan', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Zoom In', exact: true }).click();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[4]/td').click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Next timespan' }).click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Zoom out method and previous timespan', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Zoom Out', exact: true }).click();
  await page.waitForTimeout(1200);
  await page.getByRole('button', { name: 'Next timespan' }).click();
  await page.waitForTimeout(1400);
  await page.getByRole('button', { name: 'Previous timespan' }).click();
  await page.waitForTimeout(1400);
  await page.locator('(//td[contains(@aria-label,"Martin Tamer Column Header Name")])[1]').click();
  await page.waitForTimeout(1200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Filtering duration column with equal operator', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.getByTitle('Filter Icon').nth(4).click();
  await page.waitForTimeout(200);
  await page.locator('.e-input-group-icon.e-ddl-icon').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Equal', exact: true }).click();
  await page.waitForTimeout(1500);
  await page.getByPlaceholder('Enter the value').click();
  await page.waitForTimeout(500);
  await page.getByPlaceholder('Enter the value').fill('3');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Filter', exact: true }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Clear filtering', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.getByTitle('Filter Icon').nth(1).click();
  await page.waitForTimeout(200);
  await page.locator('.e-input-group-icon.e-ddl-icon').click();
  await page.waitForTimeout(300);
  await page.getByRole('option', { name: 'Contains' }).click();
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Enter the value').click();
  await page.getByPlaceholder('Enter the value').fill('Task135');
  await page.waitForTimeout(400);
  await page.locator('.e-input-group-icon.e-ddl-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Clear Filtering' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Collapse all method and open add dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'CollapseAll' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'OpenAddDialog' }).click();
  await page.waitForTimeout(800);
  await page.locator("#TaskName").click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('15-Sorting resource ID column', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/resource-virtual');
//   await page.waitForTimeout(2000);
//   await page.getByText('ResourceId').click();
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('16-Clear sorting using method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.getByText('Start Date', { exact: true }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'ClearSorting' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Open edit dialog using method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.locator('(//span[text()="Task47"])[1]').click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'EditDialog' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Edit dependency value', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[3]').click();
  await page.locator('#Gantt_edit').click();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.waitForTimeout(300);
  await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: '47-Task47' }).click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Scroll rows to check resource collection', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Scroll-center' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/935832
test('20-Console error when add resources', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  // Select the task 146
  await page.locator('(//td[contains(@class,"rowcell ")])[146]').click();
  await page.waitForTimeout(500);
  //Click the Edit button on the toolbar
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Resources tab
  await page.locator('(//div[contains(@class,"e-tab-text")])[3]').click();
  await page.waitForTimeout(500);
  //Click checkbox to select Fuller king
  await page.locator('(//span[contains(@class,"e-frame e-icons e-uncheck ")])[3]').click();
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator('(//button[text()="Save"])').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Console error not thrown
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});