import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Multi taskbar when collapse all records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Collapse record using method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Collapse', exact: true }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Diable multi taskbar and collapse all', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Enable multiTaskbar' }).click();
  await page.waitForTimeout(200);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Collapse all and drag last record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Collapse', exact: true }).click();
  await page.waitForTimeout(1200);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[2]/td/div[3]/div[2]/div').click({force:true});
  await page.waitForTimeout(800);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(655, 206);
  await page.mouse.move(755, 206);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Expand two parents', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[3]/div/span[1]').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[3]/div/span[1]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Delete child and collapse all', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[3]').click();
    await page.waitForTimeout(500);
  await page.getByLabel('Delete').click();
  await page.waitForTimeout(300);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-collapse all and drag left task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(300);
  await page.locator('div').filter({ hasText: /^100$/ }).nth(2).click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(394, 311);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Collapse all and select parent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(300);
  await page.locator('.e-chart-row-cell > div').first().click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Delete childs and collapse all', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').click();
  await page.waitForTimeout(200);
  await page.getByLabel('Delete').click();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[3]').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_delete').click();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.press('Delete');
  await page.waitForTimeout(300);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Search single record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.getByPlaceholder('Search').click();
  await page.waitForTimeout(200);
  await page.getByPlaceholder('Search').fill('Project');
  await page.getByPlaceholder('Search').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Search multiple records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.getByPlaceholder('Search').click();
  await page.waitForTimeout(200);
  await page.getByPlaceholder('Search').fill('building');
  await page.getByPlaceholder('Search').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Search parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.getByPlaceholder('Search').click();
  await page.waitForTimeout(200);
  await page.getByPlaceholder('Search').fill('Rose Fuller');
  await page.getByPlaceholder('Search').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Collapse parent using treegrid action', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[3]/div/span[1]').click();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]/div/span[1]').click();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]/div/span[1]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Drag child and collapse', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[6]/td/div[2]/div[3]/div').click({force:true});
  await page.waitForTimeout(800);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(850, 350);
  await page.mouse.move(900, 350);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(500);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Drag and drop child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[1]/div').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(49, 277);
  await page.mouse.move(45, 250);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Edit start date and collapse', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[4]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___StartDate').fill('4/8/2022');
   await page.waitForTimeout(300);
  await page.locator('#DataItem___StartDate').press('Enter');
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Collapse', exact: true }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Right click on parent task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Checking resource information through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByLabel('Task Information').locator('span').click();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Delete record using contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[8]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gantt_cmenu_DeleteTask"]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Convert to milestone', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_Convert').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_ToMilestone').click();
  await page.waitForTimeout(400);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[5]/td/div[3]/div').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Delete dependency through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[10]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_DeleteDependency').click();
  await page.waitForTimeout(200);
  await page.getByLabel('4 - Perform soil test').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Delete dependency through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[10]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_DeleteDependency').click();
  await page.waitForTimeout(200);
  await page.getByLabel('4 - Perform soil test').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Add new task and drag and drop the unassigned', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  //Add new task
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
  await page.waitForTimeout(200);
  //Press the Enter key on thekeyboard
  //await page.keyboard.press('Enter');
  await page.locator('//*[@id="Gantt_dialog"]/div[4]/button[1]').click();
  await page.waitForTimeout(1000);
  //Allow Taskbar drag and drop
  await page.locator('(//button[contains(@class, "btn btn-outline-info")])[1]').click();
  await page.waitForTimeout(500);
  //Drag and drop the record
  const src = page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[15]');
  const dst = page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[17]');
  if (src && dst) {
    const src_bound = await src.boundingBox();
    const dst_bound = await dst.boundingBox();
    if (src_bound && dst_bound) {
      await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
      await page.mouse.down();
      await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
      await page.mouse.up();
      await page.waitForTimeout(1500);
    }
  }
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Delete the child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(500);
  //Add new task
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
  await page.waitForTimeout(800);
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1700);
  //Collapse all 
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
  await page.waitForTimeout(500);
  //Expand the parent record
  await page.locator('(//span[contains(@class, "e-icons e-treegridcollapse")])[1]').click();
  await page.waitForTimeout(500);
  //Select the child record to delete
  await page.locator('(//td[contains(@class, "e-rowcell")])[11]').click();
  await page.waitForTimeout(500);
  //Click the delete button
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Edit the task after sorting', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resourcemultitaskbar');
  await page.waitForTimeout(1000);
  //Sort in ascending 
  await page.locator('(//div[contains(@class, "e-headercelldiv")])[2]').click();
  await page.waitForTimeout(500);
  //Click the record 
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').dblclick();
  await page.waitForTimeout(500);
  //Edit the record
  await page.locator('#DataItem___TaskName').fill('Work');
  await page.waitForTimeout(200);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

