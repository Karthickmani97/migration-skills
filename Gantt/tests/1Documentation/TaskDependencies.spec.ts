import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Task relationship initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/TaskRelationshipTypes');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridTask_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Predecessor offset with duration units', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/PredecessorOffsetWithDurationUnit');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Predecessor configuration initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/PredecessorConfiguration');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Add new task with dependency', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/PredecessorConfiguration');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('tab', { name: 'Dependency' }).getByText('Dependency').click();
  await page.waitForTimeout(800);
  await page.getByRole('tabpanel', { name: 'Dependency' }).getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(500);
  await page.locator('form').getByRole('cell', { name: '' }).locator('span').nth(2).click();
  await page.waitForTimeout(300);
  await page.getByRole('option', { name: '2-Identify Site location' }).click();
  await page.waitForTimeout(300);
  await page.locator('div:nth-child(4) > .e-content').click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Changing dependency type to FS and SS', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/PredecessorConfiguration');
  await page.waitForTimeout(500);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(300);
  await page.getByRole('option', { name: 'FS, SS', exact: true }).click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridConfig_gridcontrol_content_table"]/tbody/tr[6]/td[6]').dblclick();
  await page.waitForTimeout(2000);
  await page.locator('#DataItem___Predecessor').fill('2SS');
  await page.waitForTimeout(300);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Changing dependency type to FS, SS and SF', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/PredecessorConfiguration');
  await page.waitForTimeout(600);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: 'FS, SS, SF', exact: true }).click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridConfig_gridcontrol_content_table"]/tbody/tr[4]/td[6]').dblclick();
  await page.waitForTimeout(2000);
  await page.locator('#DataItem___Predecessor').fill('2SS');
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Predecessor').press('Enter');
  await page.waitForTimeout(300);
  await page.locator('//*[@id="treeGridConfig_gridcontrol_content_table"]/tbody/tr[7]/td[6]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___Predecessor').fill('3SF');
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Predecessor').press('Enter');
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
