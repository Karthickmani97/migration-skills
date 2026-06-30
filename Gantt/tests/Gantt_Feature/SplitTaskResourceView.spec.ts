import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Split task resourceview intitial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Context menu options on chart side for parent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(600);
  await page.locator('(//div[contains(@class, "e-gantt-parent-taskbar")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Context menu options on chart side for split task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(600);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Split a task into 3 segments and drag taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[6]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_SplitTask').click();
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[7]').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(1318, 213);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Contextmenu options on grid side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('(//td[contains(@class, "e-rowcell")])[10]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Split task and Merge task left through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[6]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_SplitTask').click();
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[6]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_MergeTask').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Left').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Merge task right through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[6]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_SplitTask').click();
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[6]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_MergeTask').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Right').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Zoom to fit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('#Gantt_zoomtofit').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Add above through contextmenu and split the task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('(//td[contains(@class, "e-rowcell")])[11]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Add').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Above').click();
  await page.waitForTimeout(600);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[8]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_SplitTask').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Add below through contextmenu and split task and merge', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('(//td[contains(@class, "e-rowcell")])[11]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Add').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Below').click();
  await page.waitForTimeout(600);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[8]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_SplitTask').click();
  await page.waitForTimeout(600);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[7]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_MergeTask').click();
    await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_Right').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Add Milestone through contextmenu and delete split task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('(//td[contains(@class, "e-rowcell")])[19]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Add').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Milestone').click();
  await page.waitForTimeout(600);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
    await page.waitForTimeout(500);
  await page.locator('#Gantt_delete').click();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').click();
    await page.waitForTimeout(500);
  await page.keyboard.press("Delete")
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Convert task to milestone', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Convert').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_ToMilestone').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Convert task to milestone and milestone to task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(1200);
  await page.locator('#Gantt_cmenu_Convert').click();
  await page.waitForTimeout(300);
  await page.locator('#Gantt_cmenu_ToMilestone').click();
  await page.waitForTimeout(1000);
  await page.locator('(//div[contains(@class, "e-gantt-milestone e-unscheduled-milestone-top ")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(1200);
  await page.locator('#Gantt_cmenu_Convert').click();
  await page.waitForTimeout(1300);
  await page.locator('#Gantt_cmenu_ToTask').click();
  await page.waitForTimeout(1200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Delete all tasks in one parent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
   await page.waitForTimeout(400);
  await page.locator('#Gantt_delete').click();
  await page.waitForTimeout(400);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_DeleteTask').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Select parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[3]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Add new record through toolbar and add segment', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('#Gantt_add').click();
  await page.waitForTimeout(800);
  await page.locator('#Duration').fill("3 days");
  await page.waitForTimeout(200);
  await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
  await page.waitForTimeout(600);
  await page.locator('#GanttSegmentTabContainer_add').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="GanttSegmentTabContainer"]/div[4]').click();
  await page.waitForTimeout(200);
  await page.locator('#GanttSegmentTabContainer_add').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="GanttSegmentTabContainer"]/div[4]').click();
  await page.waitForTimeout(200);
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(1000);
   await page.locator('(//td[contains(@class, "e-rowcell")])[2]').click();
     await page.waitForTimeout(200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Add new record and split task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('#Gantt_add').click();
  await page.waitForTimeout(1000);
  await page.locator('#Duration').fill("6 days");
  await page.waitForTimeout(200);
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[28]/td/div[2]/div[3]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_SplitTask').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Split a task into multiple segments', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[6]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_SplitTask').click();
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[7]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_SplitTask').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Merge task using taskbar resizing', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[2]').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(904, 200);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Remove 1 segment through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[2]').dblclick();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
  await page.waitForTimeout(600);
  await page.locator('//*[@id="GanttSegmentTabContainer_content_table"]/tbody/tr[1]/td[3]').click();
  await page.waitForTimeout(100);
  await page.locator('#GanttSegmentTabContainer_delete').click();
  await page.waitForTimeout(200);
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Remove all segments through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[6]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_SplitTask').click();
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[6]').dblclick();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
  await page.waitForTimeout(600);
  await page.locator('//*[@id="GanttSegmentTabContainer_content_table"]/tbody/tr[1]/td[3]').click();
  await page.waitForTimeout(400);
  await page.locator('#GanttSegmentTabContainer_delete').click();
  await page.waitForTimeout(500);
  await page.locator('#GanttSegmentTabContainer_delete').click();
  await page.waitForTimeout(500);
  await page.locator('#GanttSegmentTabContainer_delete').click();
  await page.waitForTimeout(500);
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Edit start date through cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[4]').dblclick();
  await page.waitForTimeout(800);
  await page.locator('#DataItem___StartDate').click();
  await page.waitForTimeout(600);
  await page.locator('#DataItem___StartDate').fill("4/1/2022");
  await page.waitForTimeout(100);
  await page.locator('#Gantt_update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Edit end date through cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[5]').dblclick();
  await page.waitForTimeout(800);
  await page.locator('#DataItem___EndDate').click();
  await page.waitForTimeout(600);
  await page.locator('#DataItem___EndDate').fill("4/15/2022");
  await page.waitForTimeout(100);
  await page.locator('//*[@id="DataItem___EndDate"]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Save').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Open task information and navigate to segment tab', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_TaskInformation').click();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Update splitter task, drag and drop records on gid', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  //Drag and drop the child records on grid 
  const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[2]");
  const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[4]");
  if (src && dst) {
    const src_bound = await src.boundingBox();
    const dst_bound = await dst.boundingBox();
    if (src_bound && dst_bound) {
      await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
      await page.mouse.down();
      await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
      await page.mouse.up();
      await page.waitForTimeout(2000);
    }
  }
  //Zoom to Fit
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[10]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Collapse all and right click', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-Splittask');
  await page.waitForTimeout(500);
  //Collapse all records
  await page.locator('#Gantt_collapseall').click();
  //Select the parent record
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
  //Split task 
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[2]/td/div[2]/div[3]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


