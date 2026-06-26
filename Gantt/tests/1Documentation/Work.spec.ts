import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Task Type initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Task-type');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-change to fixed duration', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Task-type');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[8]').dblclick();
  await page.waitForTimeout(500);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: 'FixedDuration' }).click();
  await page.waitForTimeout(200);
  await page.getByRole('combobox').press('Enter');
  await page.waitForTimeout(300);
 await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[7]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___Work').fill('32');
  await page.waitForTimeout(100);
  await page.locator('#DataItem___Work').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Change to fixed unit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Task-type');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[8]').dblclick();
  await page.waitForTimeout(500);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: 'FixedUnit' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('combobox').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Change to fixed work', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Task-type');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[8]').dblclick();
  await page.waitForTimeout(500);
  await page.getByRole('combobox').click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: 'FixedWork' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('combobox').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Work sample initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Work');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Edit duration and work', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Work');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[5]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___Duration').click();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Duration').fill('4 days');
  await page.waitForTimeout(300);
  await page.locator('#DataItem___Duration').press('Enter');
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[7]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___Work').fill('52');
  await page.locator('#DataItem___Work').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Edit work value with double', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Work');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[7]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___Work').fill('23.5');
  await page.locator('#DataItem___Work').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Edit enddate and work value', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Work');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[6]/td[4]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___EndDate').fill('4/6/2022');
  await page.locator('#DataItem___EndDate').press('Enter');
  await page.waitForTimeout(300);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[6]/td[7]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___Work').fill('45.99');
  await page.locator('#DataItem___Work').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});