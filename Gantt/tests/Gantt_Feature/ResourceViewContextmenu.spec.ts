import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Add new child through context menu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[4]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Add new child record for another parent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('tr:nth-child(7) > .e-chart-row-cell > .e-left-label-container').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Add above and below tasks', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1600);
  await page.locator('//li[contains(@id, "resource_cmenu_Add")]').click();
  await page.waitForTimeout(500);
  await page.locator('//li[contains(@id, "resource_cmenu_Above")]').click();
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[4]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('//li[contains(@id, "resource_cmenu_Add")]').click();
  await page.waitForTimeout(300);
  await page.locator('//li[contains(@id, "resource_cmenu_Below")]').click();;
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Add milestone task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('//li[contains(@id, "Gamtt_cmenu_Add")]').click();
  await page.waitForTimeout(500);
  await page.locator('//li[contains(@id, "Gamtt_cmenu_Milestone")]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Add new task and change view type', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.getByText('Ground floor initiation').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('//li[contains(@id, "Gamtt_cmenu_Add")]').click();
  await page.waitForTimeout(500);
  await page.locator('//li[contains(@id, "Gamtt_cmenu_Above")]').click();
  await page.waitForTimeout(500);
  await page.locator('.e-switch-handle').click();
  await page.waitForTimeout(800);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[19]/td[3]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Add new record and drag and drop', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1500);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[5]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Add below and zoom-to-fit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('//li[contains(@id, "Gamtt_cmenu_Add")]').click();
  await page.waitForTimeout(500);
  await page.locator('//li[contains(@id, "Gamtt_cmenu_Below")]').click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Zoom to fit' }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Contextmenu items for parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[4]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Child task information - general tab', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[3]/td/div[3]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Task Information' }).click();
  await page.waitForTimeout(600);
  await page.locator('#TaskName').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Child task information - resources tab', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[3]/td/div[3]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Task Information' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('Resources').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Child task information - dependency tab', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.getByRole('gridcell', { name: 'Perform soil test Column Header Name' }).locator('div').click({
    button: 'right'
  });
  await page.waitForTimeout(1500);
  await page.getByRole('menuitem', { name: 'Task Information' }).click();
  await page.waitForTimeout(1000);
  await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Delete a record and change view type', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Delete Task' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Change ViewType' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Delete child at chart side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="resource_chartContentBody"]/tr[3]/td/div[1]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Delete Task' }).click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[18]/td[3]').click();
  await page.waitForTimeout(700);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Convert task to milestone', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.getByText('Develop floor plan for estimation').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Convert' }).click();
  await page.waitForTimeout(400);
  await page.getByRole('menuitem', { name: 'To Milestone' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Convert to milestone and drag and drop it', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="resource_chartContentBody"]/tr[6]/td/div[1]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Convert' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('menuitem', { name: 'To Milestone' }).click();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="resource_chartContentBody"]/tr[6]/td/div[2]/div[3]/div').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(45, 512);
  await page.waitForTimeout(1000);
  await page.mouse.up();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Convert to milestone and convert to task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[6]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(800);
  await page.getByLabel('Convert').click();
  await page.waitForTimeout(300);
  await page.getByLabel('To Milestone').click();
  await page.waitForTimeout(800);
  await page.locator('.e-gantt-milestone').click({
    button: 'right'
  });
  await page.waitForTimeout(800);
  await page.getByLabel('Convert').click();
  await page.waitForTimeout(300);
  await page.getByLabel('To Task').click();
  await page.waitForTimeout(800);
  await page.locator('//*[@id="resource_chartContentBody"]/tr[6]/td/div[1]').click();
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-convert to milestone and change view type', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[3]/td/div[3]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Convert' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('menuitem', { name: 'To Milestone' }).click();
  await page.waitForTimeout(500);
  await page.locator('.e-switch-on').click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Context menu items for parent - virtual', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Contextmenu items for child - virtual', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[3]').click({
    button: 'right'
  }); 
  await page.waitForTimeout(2400);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Task information resources tab for child - virtual', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Task Information' }).click();
  await page.waitForTimeout(1000);
  await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
  await page.waitForTimeout(600);
  await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Delte child and scroll', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[6]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Delete Task' }).click();
  await page.waitForTimeout(600);
  await page.locator('//*[@id="Scroll_Rows"]').click();
  await page.waitForTimeout(3500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Delet child and zoom-to-fit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[8]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Delete Task' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Zoom to fit' }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Convert task to milestone', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(2000);
  await page.getByRole('menuitem', { name: 'Convert' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('menuitem', { name: 'To Milestone' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Convert milestone to task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(1000);
  await page.getByRole('gridcell', { name: 'Task58 Column Header Name' }).click({
    button: 'right'
  });
  await page.waitForTimeout(2000);
  await page.getByRole('menuitem', { name: 'Convert' }).click();
  await page.waitForTimeout(600);
  await page.getByRole('menuitem', { name: 'To Milestone' }).click();
  await page.waitForTimeout(600);
 await page.getByRole('gridcell', { name: 'Task58 Column Header Name' }).click({
    button: 'right'
  });
  await page.waitForTimeout(2000);
  await page.getByRole('menuitem', { name: 'Convert' }).click();
  await page.waitForTimeout(600);
  await page.getByRole('menuitem', { name: 'To Task' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-BUG-844105-Console error while opening header', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_header_table"]/thead/tr/th[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(2000);
  await page.getByRole('menuitem', { name: 'AutoFit Column' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-BUG-844105-Console error AutoFit all columns', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_header_table"]/thead/tr/th[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(2000);
  await page.getByRole('menuitem', { name: 'AutoFit All Columns' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});