import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Context menu initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ContextMenu-UG');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Delete task after indent at treegrid', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ContextMenu-UG');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(500);
  await page.getByLabel('Indent').click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(500);
  await page.getByLabel('Delete Task').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Context menu open for parent at treegrid', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ContextMenu-UG');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Context menu open for child at chart side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ContextMenu-UG');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div/div').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Delte dependency and convert milestone to task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ContextMenu-UG');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[4]/td/div[2]/div/div/div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByLabel('Delete Dependency').click();
  await page.waitForTimeout(200);
  await page.getByLabel('2 - Identify Site location').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[8]/td[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  await page.getByLabel('Convert').click();
  await page.waitForTimeout(200);
  await page.getByLabel('To Task').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Convert task to milestone and indent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ContextMenu-UG');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  await page.getByLabel('Convert').click();
  await page.getByLabel('To Milestone').click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  await page.getByLabel('Indent').click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[1]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Custom contextmenu items', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Custom-context-menu-items');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Refresh gantt at treegrid side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Custom-context-menu-items');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  await page.getByLabel('Refresh').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Refresh gantt at chart side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Custom-context-menu-items');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  await page.locator('(//li[contains(@role, "menuitem")])[1]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Built in context menu items', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Built-in-and-custom-context-menu-items');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Add child and refresh', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Built-in-and-custom-context-menu-items');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(100);
  await page.getByLabel('Child').click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);;
  await page.getByLabel('Refresh').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Add above and refresh gantt', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Built-in-and-custom-context-menu-items');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(200);
  await page.getByLabel('Above').click();
  await page.waitForTimeout(600);
  await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  await page.getByLabel('Refresh').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Sub contextmenu items', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Sub-context-menu-items');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  await page.getByLabel('GantAction').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Disable contextmenu items for duration column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Disable-context-menu-items-dynamically');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[5]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Refresh gantt after selection', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Disable-context-menu-items-dynamically');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  await page.getByLabel('GantAction').click();
  await page.getByLabel('Refresh').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Disable contextmenu for specific column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Disable-the-context-menu-for-specific-columns');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[5]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Contextmenu for taskname column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Disable-the-context-menu-for-specific-columns');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  await page.getByLabel('Refresh').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});