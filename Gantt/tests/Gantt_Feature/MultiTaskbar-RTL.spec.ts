import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Collapse all parent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Multitaskbar-rtl');
  await page.waitForTimeout(500);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Disbale multi taskbar and collapse all', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Multitaskbar-rtl');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Enable multiTaskbar' }).click();
  await page.waitForTimeout(200);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Collapse all and add new record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Multitaskbar-rtl');
  await page.waitForTimeout(500);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(200);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
  await page.waitForTimeout(600);
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[2]').click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Search child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Multitaskbar-rtl');
  await page.waitForTimeout(500);
  await page.getByPlaceholder('Search').click();
  await page.waitForTimeout(200);
  await page.getByPlaceholder('Search').fill('Site Analyze');
  await page.getByPlaceholder('Search').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Collapse all and search parent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Multitaskbar-rtl');
  await page.waitForTimeout(500);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(200);
  await page.getByPlaceholder('Search').click();
  await page.waitForTimeout(200);
  await page.getByPlaceholder('Search').fill('Rose Fuller');
  await page.getByPlaceholder('Search').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Edit start date and collapse', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Multitaskbar-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[4]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___StartDate').fill('4/2/2022');
  await page.getByLabel('Update').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[3]/div/span[1]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Delete child record and collapse', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Multitaskbar-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
  await page.getByLabel('Delete').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').click();
  await page.getByLabel('Delete').click();
  await page.waitForTimeout(200);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Delete dependency through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Multitaskbar-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[8]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByLabel('Delete Dependency').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Contextmenu for parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Multitaskbar-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Contextmenu for child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Multitaskbar-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Convert to milestone and collapse', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Multitaskbar-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByLabel('Convert').click();
  await page.waitForTimeout(200);
  await page.getByLabel('To Milestone').click();
  await page.waitForTimeout(300);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Delete child and collapse', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Multitaskbar-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1200);
  await page.getByLabel('Delete Task').click();
  await page.waitForTimeout(1200);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(1800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Add above and collapse', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Multitaskbar-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Add' }).click();
  await page.waitForTimeout(200);
  await page.getByLabel('Above').click();
  await page.waitForTimeout(400);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Add options for child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Multitaskbar-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Add' }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});