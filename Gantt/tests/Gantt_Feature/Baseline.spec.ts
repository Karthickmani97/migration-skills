import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Editing Predecessor line Start-to-start', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/baseline');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGanttBaseline_gridcontrol_content_table"]/tbody/tr[3]/td[6]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Predecessor').fill('6SS');
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Predecessor').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Editing predecessor line Finish-to-start', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/baseline');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGanttBaseline_gridcontrol_content_table"]/tbody/tr[3]/td[6]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Predecessor').fill('7FS');
  await page.waitForTimeout(200);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Editing predecessor line Fine-to-finish', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/baseline');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGanttBaseline_gridcontrol_content_table"]/tbody/tr[3]/td[6]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Predecessor').fill('5FF');
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Predecessor').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Editing predecessor line Start-to-finish', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/baseline');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGanttBaseline_gridcontrol_content_table"]/tbody/tr[3]/td[6]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Predecessor').fill('6SF');
  await page.waitForTimeout(200);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Adding Task and saving', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/baseline');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(800);
  await page.getByLabel('Name', { exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Adding Task and Start Date and End Date', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/baseline');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(800);
  await page.locator('.e-date-wrapper > .e-input-group-icon').first().click();
  await page.waitForTimeout(200);
  await page.getByTitle('Wednesday, April 10, 2019').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7- Adding and Editing  of Task Name  ', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/baseline');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(800);
  await page.getByLabel('Name', { exact: true }).click();
  await page.getByLabel('Name', { exact: true }).fill('Soil Approval Location');
  await page.locator('.e-date-wrapper > .e-input-group-icon').first().click();
  await page.getByTitle('Wednesday, April 10, 2019').click();
  await page.getByRole('button', { name: 'Increment value' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('8-Editing Duration using keyboard ', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/baseline');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGanttBaseline_gridcontrol_content_table"]/tbody/tr[2]/td[2]').click();
  await page.waitForTimeout(100);
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(800);
  await page.getByLabel('Duration', { exact: true }).click();
  await page.getByLabel('Duration', { exact: true }).fill('40 days');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Baseline Start Date Wrong Date Format', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/baseline');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGanttBaseline_gridcontrol_content_table"]/tbody/tr[2]/td[3]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___StartDate').fill('2019');
  await page.getByLabel('Update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Baseline End Date Wrong Date Format', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/baseline');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGanttBaseline_gridcontrol_content_table"]/tbody/tr[4]/td[2]').click();
  await page.waitForTimeout(100);
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(800);
  await page.getByLabel('End Date', { exact: true }).click();
  await page.getByLabel('End Date', { exact: true }).fill('2019/30/12');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
