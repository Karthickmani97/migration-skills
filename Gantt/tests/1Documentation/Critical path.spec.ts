import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

//Critical-Path-UG
test('1-Edit the Duration for Critical path', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Critical-Path-UG');
  await page.waitForTimeout(500);
  await page.getByLabel('Name Perform soil test Start Date 1/4/2022 End Date 1/7/2022 Duration 4 Days Progress 40').locator('div').nth(2).click();
  await page.waitForTimeout(500);
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(500);
  await page.getByLabel('Duration', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByLabel('Duration', { exact: true }).fill('200 Days');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Add new taskname for Critical path', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Critical-Path-UG');
  await page.waitForTimeout(500);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(500);
  await page.getByLabel('Name', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByLabel('Name', { exact: true }).fill('New Project');
  await page.getByLabel('End Date', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByLabel('End Date', { exact: true }).fill('1/8/2023');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Delete of Critical path', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Critical-Path-UG');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.waitForTimeout(500);
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(500);
  await page.getByLabel('End Date', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByLabel('End Date', { exact: true }).fill('1/7/2023');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(800);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_delete').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Critical-Path-Settings
test('4-Add new task for Critical path', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Critical-Path-Settings');
  await page.waitForTimeout(500);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(500);
  await page.getByLabel('Name', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByLabel('Name', { exact: true }).fill('New materials');
  await page.getByLabel('General', { exact: true }).locator('div').filter({ hasText: 'End Date' }).nth(2).click();
  await page.waitForTimeout(500);
  await page.getByLabel('End Date', { exact: true }).fill('1/28/2022');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Editing of Duration of Critical path', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Critical-Path-Settings');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.waitForTimeout(500);
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(500);
  await page.getByLabel('Duration', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByLabel('Duration', { exact: true }).fill('200 Days');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('6-Delete of Critical path ', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Critical-Path-Settings');
//   await page.waitForTimeout(500);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[7]/td[2]').click();
//   await page.waitForTimeout(500);
//   await page.getByLabel('Edit').click();
//   await page.waitForTimeout(800);
//   await page.locator('(//input[contains(@id,"EndDate")])[1]').click();
//   await page.waitForTimeout(500);
//   await page.locator('(//input[contains(@id,"EndDate")])[1]').fill('1/10/2022');
//   await page.waitForTimeout(200);
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForTimeout(1000);
//   await page.locator('#Gantt_delete').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Customize-taskbar-in-critical-path
test('7-Edit of taskname for Critical path', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Customize-taskbar-in-critical-path');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.waitForTimeout(500);
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(500);
  await page.getByLabel('End Date', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByLabel('End Date', { exact: true }).fill('1/8/2023');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Add new taskname', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Customize-taskbar-in-critical-path');
  await page.waitForTimeout(500);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(500);
  await page.getByLabel('Name', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByLabel('Name', { exact: true }).fill('New project');
  await page.getByLabel('End Date', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByLabel('End Date', { exact: true }).fill('1/4/2023');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test.fixme('9-Delete critical path', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Customize-taskbar-in-critical-path');
//   await page.waitForTimeout(500);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
//   await page.waitForTimeout(500);
//   await page.getByLabel('Edit').click();
//   await page.waitForTimeout(500);
//   await page.getByLabel('End Date', { exact: true }).click();
//   await page.waitForTimeout(500);
//   await page.getByLabel('End Date', { exact: true }).fill('1/7/2023');
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForTimeout(1500);
//   await page.getByLabel('Delete').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });