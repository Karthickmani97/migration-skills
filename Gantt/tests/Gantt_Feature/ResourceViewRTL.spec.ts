import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Resource view RTL initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-RTL add dialog alignment', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.getByRole('gridcell', { name: 'Site Analyze Column Header Name' }).click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#TaskName').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Add and edit record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.locator('//td[contains(@aria-label, "Site Analyze Column Header Name")]').click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(800);
  await page.getByLabel('TaskName', { exact: true }).click();
  await page.getByLabel('TaskName', { exact: true }).fill('Project strart');
  await page.waitForTimeout(200);
  await page.getByLabel('Work', { exact: true }).click();
  await page.getByLabel('Work', { exact: true }).fill('67');
  await page.waitForTimeout(200);
  await page.getByLabel('Duration', { exact: true }).click();
  await page.getByLabel('Duration', { exact: true }).fill('3');
  await page.waitForTimeout(200);
  await page.getByLabel('Progress', { exact: true }).click();
  await page.getByLabel('Progress', { exact: true }).fill('10');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Add record with resource and dependency', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(800);
  await page.getByLabel('Start Date', { exact: true }).click();
  await page.getByLabel('Start Date', { exact: true }).fill('4/3/2022');
  await page.waitForTimeout(200);
  await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
  await page.waitForTimeout(500);
  await page.locator('//button[span[text()="Add"]]').nth(1).click();
  await page.waitForTimeout(300);
  await page.getByRole('combobox').nth(1).click();
  await page.waitForTimeout(100);
  await page.getByRole('option', { name: 'Start-Start' }).click();
  await page.waitForTimeout(100);
  await page.locator('.e-input-group-icon.e-ddl-icon').first().click();
  await page.waitForTimeout(100);
  await page.getByRole('option', { name: '3-Site Analyze' }).click();
  await page.waitForTimeout(100);
  await page.locator('div:nth-child(4) > .e-content').click();
  await page.waitForTimeout(300);
  await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[2]').click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Delete record and zoom-to-fit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Zoom to fit' }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Edit work column and change view type', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[2]/td[4]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Work').fill('52');
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Work').press('Enter');
  await page.waitForTimeout(300);
  await page.locator('.e-switch-on').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Zoom-in and hide overallocation line', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Show/Hide Overallocation' }).click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('8-Delete unassigned tasks', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
//   await page.waitForTimeout(6000);
//   await page.getByRole('button', { name: 'Scroll', exact: true }).click();
//   await page.waitForTimeout(500);
//   await page.getByRole('row', { name: ' Building approval Column Header Name 60 is template cell Column Header Work 50 Column Header Progress 4/1/2022 Column Header Start Date 4 is template cell Column Header Duration' }).getByRole('cell', { name: '50 Column Header Progress' }).click();
//   await page.waitForTimeout(500);
//   await page.getByRole('button', { name: 'Delete' }).click();
//   await page.waitForTimeout(500);
//   await page.getByRole('button', { name: 'Ok' }).click();
//   await page.waitForTimeout(300);
//   await page.getByRole('cell', { name: 'Right task label Name Building test Start Date 4/1/2022 End Date 4/6/2022 Duration 4 Days Progress 50 Right task label' }).getByRole('term').first().click();
//   await page.waitForTimeout(500);
//   await page.getByRole('button', { name: 'Delete' }).click();
//   await page.waitForTimeout(500);
//   await page.getByRole('button', { name: 'Ok' }).click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('9-Search record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.getByPlaceholder('Search').click();
  await page.waitForTimeout(200);
  await page.getByPlaceholder('Search').fill('Tile test');
  await page.waitForTimeout(100);
  await page.getByPlaceholder('Search').press('Enter');
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Clear search', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.getByPlaceholder('Search').click();
  await page.waitForTimeout(200);
  await page.getByPlaceholder('Search').fill('50');
  await page.waitForTimeout(200);
  await page.getByPlaceholder('Search').press('Enter');
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Search').click();
  await page.waitForTimeout(200);
  await page.getByPlaceholder('Search').fill('');
  await page.waitForTimeout(200);
  await page.getByPlaceholder('Search').press('Enter');
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Add new record through keyboard', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[3]/td[4]').click();
  await page.waitForTimeout(200);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Delelte record from assigned resource', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.locator("(//div[@class='e-right-label-container'])[3]").click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Scroll', exact: true }).click();
  await page.waitForTimeout(500);
  await page.locator("//td[.//span[@class='e-treecell' and text()='Site Analyze']]").click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(1200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Remove dependency and edit dependency', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class,"e-right-label-container")])[8]').dblclick();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
  await page.waitForTimeout(300);
  await page.getByRole('gridcell', { name: '-Identify Site location' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('tabpanel', { name: 'Dependency' }).getByLabel('Delete').click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1500);
  await page.locator('(//div[contains(@class,"e-right-label-container")])[3]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
  await page.waitForTimeout(300);
 await page.getByRole('tabpanel', { name: 'Dependency' }).getByLabel('Add').click();
  await page.waitForTimeout(300);
  await page.locator('.e-input-group-icon.e-ddl-icon').first().click();
  await page.waitForTimeout(300);
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(300);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(100);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(100);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Check overallocation line after collapse and expand', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.getByRole('gridcell', { name: 'Martin Tamer Column Header Name' }).locator('span').first().click();
  await page.waitForTimeout(200);
  await page.getByRole('gridcell', { name: 'Martin Tamer Column Header Name' }).locator('span').first().click();
  await page.waitForTimeout(200);
  await page.getByRole('gridcell', { name: 'Rose Fuller Column Header Name' }).locator('span').first().click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Edit taskname and change viewtype', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___TaskName').fill('Edited');
  await page.waitForTimeout(100);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(300);
  await page.locator('.e-switch-on').click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Dragging child taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[3]/td/div[2]/div[3]/div').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(551, 281);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Add new child task through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.getByRole('gridcell', { name: 'Site Analyze Column Header Name' }).click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Add' }).click();
  await page.waitForTimeout(400);
  await page.getByRole('menuitem', { name: 'Above' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Delete all child records through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[3]/td/div[2]/div[3]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Delete Task' }).click();
  await page.waitForTimeout(400);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[2]/td').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Delete Task' }).click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Convert task to milestone and delete dependency', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[3]/td/div[3]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(500);
  await page.getByRole('menuitem', { name: 'Convert' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('menuitem', { name: 'To Milestone' }).click();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[8]/td/div[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(500);
  await page.getByRole('menuitem', { name: 'Delete Dependency' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('menuitem', { name: '2 - Identify Site location' }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Add milestone task and below', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceviewRTL');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[8]/td/div[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gamtt_cmenu_Add"]').click();
  await page.waitForTimeout(300);
  await page.getByRole('menuitem', { name: 'Milestone' }).click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[3]/td/div[3]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gamtt_cmenu_Add"]').click();
  await page.waitForTimeout(300);
  await page.getByRole('menuitem', { name: 'Below' }).click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});