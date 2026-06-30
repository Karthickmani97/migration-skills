import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Split task initial load when splitter setting is 0%', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Context menu options on chart side for split task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div[4]/div').click();
  await page.waitForTimeout(1500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div[4]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Split a task into 3 segments and drag taskbar', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(1500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[4]/td/div[2]/div[4]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_SplitTask').click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[4]/td/div[2]/div[5]/div').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(717, 235);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Contextmenu options on chart row', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Merge task left through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[2]/td/div[2]/div[4]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_MergeTask').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Left').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Merge task right through contextmenu', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(800);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[10]/td/div[2]/div[3]/div/div[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_MergeTask').click();
  await page.waitForTimeout(500);
  await page.locator('#Gantt_cmenu_Right').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Split task using method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('#SplitTask').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Merge task using method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('#MergeTask').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Zoom to fit when splitter setting is 0%', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Gantt_zoomtofit').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Add above through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_Add').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Above').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Add below through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[10]/td/div[2]/div[4]/div/div[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_Add').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Below').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Add child through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div[3]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_Add').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Child').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Add milestone through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_Add').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Milestone').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Add child to the parent through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('(//div[contains(@class,"e-gantt-parent-progressbar-inner-div")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Add').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Child').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Add above to the parent through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_Add').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Above').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Add below to the parent through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_Add').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Below').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Convert task to milestone', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div[4]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_Convert').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_ToMilestone').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Convert task to milestone and milestone to task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div[4]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_Convert').click();
  await page.waitForTimeout(400);
  await page.locator('#Gantt_cmenu_ToMilestone').click();
  await page.waitForTimeout(600);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_Convert').click();
  await page.waitForTimeout(600);
  await page.locator('#Gantt_cmenu_ToTask').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Delete all segment tasks in one parent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  //update splitter by position
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  //click the child record
  await page.locator('(//td[contains(@class,"rowcell")])[11]').click();
  await page.waitForTimeout(200);
  //Delete button
  await page.locator('(//span[contains(@class,"delete")])').click();
  await page.waitForTimeout(600);
  //Click the child record
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  //Delete task
  await page.locator("(//li[text()='Delete Task'])").click();
  await page.waitForTimeout(500);
  //click the record
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[2]/td/div[1]').click();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="Gantt_delete"]/button').click();
  await page.waitForTimeout(600);
  await page.locator('(//td[contains(@class,"rowcell")])[10]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Delete parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[3]').click();
  await page.locator('#Gantt_delete').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Add new record through toolbar and add segment', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
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
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Add new record and split task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_add').click();
  await page.waitForTimeout(800);
  await page.locator('#Duration').fill("6 days");
  await page.waitForTimeout(200);
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_SplitTask').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Split a task into multiple segments', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[12]/td/div[2]/div[3]/div/div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_SplitTask').click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[12]/td/div[2]/div[4]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_SplitTask').click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[12]/td/div[2]/div[5]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_SplitTask').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Merge task using taskbar resizing', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[1]').click();
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(947, 214);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Remove 1 segment through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div[4]/div').dblclick();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
  await page.waitForTimeout(600);
  await page.locator('//*[@id="GanttSegmentTabContainer_content_table"]/tbody/tr[1]/td[3]').click();
  await page.waitForTimeout(100);
  await page.locator('#GanttSegmentTabContainer_delete').click();
  await page.waitForTimeout(100);
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Remove all segments through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div[4]/div').dblclick();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
  await page.waitForTimeout(600);
  await page.locator('//*[@id="GanttSegmentTabContainer_content_table"]/tbody/tr[1]/td[3]').click();
  await page.waitForTimeout(100);
  await page.locator('#GanttSegmentTabContainer_delete').click();
  await page.waitForTimeout(100);
  await page.locator('//*[@id="GanttSegmentTabContainer_content_table"]/tbody/tr/td[3]').click();
  await page.waitForTimeout(100);
  await page.locator('#GanttSegmentTabContainer_delete').click();
  await page.waitForTimeout(100);
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Edit start date through cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[4]').dblclick();
  await page.waitForTimeout(800);
  await page.locator('#DataItem___StartDate').click();
  await page.waitForTimeout(600);
  await page.locator('#DataItem___StartDate').fill("4/4/2022");
  await page.waitForTimeout(100);
  await page.locator('#Gantt_update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Edit end date through cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[5]').dblclick();
  await page.waitForTimeout(800);
  await page.locator('#DataItem___EndDate').click();
  await page.waitForTimeout(600);
  await page.locator('#DataItem___EndDate').fill("4/15/2022");
  await page.waitForTimeout(100);
  await page.locator('//*[@id="DataItem___EndDate"]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_Save').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Open task information and navigate to segment tab', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class,"e-segmented-taskbar")])[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_TaskInformation').click();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Indent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_cmenu_Indent').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Indent and outdent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[12]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Indent').click();
  await page.waitForTimeout(1000);
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[4]').click();
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar")])[4]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Outdent').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Template split task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-template');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Update splitter task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(1000);
  //Splitter
  await page.locator('#Splitter').click();
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
      await page.waitForTimeout(200);
      await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
      await page.waitForTimeout(1000);
      await page.mouse.up();
      await page.waitForTimeout(2000);
    }
  }
  //Zoom to Fit
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[10]').click();
  await page.waitForTimeout(200);
  //Child taskbar
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  //Split Task
  await page.locator('(//li[contains(@class,"e-menu-item")])[12]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Split task of the records after collapse all.', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(500);
  //Collapse all records
  await page.locator('#Gantt_collapseall').click();
  await page.waitForTimeout(400);
  //Select the parent record
  await page.locator('(//td[contains(@class,"rowcell")])[1]').click();
  await page.waitForTimeout(200);
  //Delete 
  await page.locator('(//span[contains(@class,"delete")])').click();
  await page.waitForTimeout(700);
  //Click the child record
  await page.locator('(//div[contains(@class,"child")])[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(1500);
  //split task
  await page.locator("(//li[text()='Split Task'])").click();
  await page.waitForTimeout(500);
  //Split the second task
  await page.locator('(//div[contains(@class,"child")])[5]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Click split Task
  await page.locator("(//li[text()='Split Task'])").click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Split and Merge the records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  //Click to collapse the parent record.
  await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
  await page.waitForTimeout(200);
  //Split task 
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[2]').click({
    button: 'right'
  });
  //Click the split task
  await page.waitForTimeout(1000);
  await page.locator('(//li[contains(@class,"e-menu-item")])[12]').click();
  await page.waitForTimeout(200);
  //Merge task
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').click({
    button: 'right'
  });
  //Click Merge task to select right
  await page.locator('(//li[contains(@class,"e-menu-item")])[15]').click();
  await page.waitForTimeout(200);
  //Select Right to merge the task Right
  await page.locator('(//li[contains(@class,"e-menu-item")])[16]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Autofit all the columns', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  //Splitter
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  //Click work to Auto fit all columns
  await page.locator('(//th[contains(@class, "e-headercell")])[8]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  //AutoFit All Columns
  await page.locator('(//li[contains(@class, "e-menu-item")])[1]').click();
  await page.waitForTimeout(800);
  //Zoom to Fit
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[10]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Delete all the parent record on chart', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  //Delete the parent taskbar
  await page.locator('(//div[contains(@class, "e-gantt-parent-taskbar")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  //Delete task
  await page.locator('#Gantt_cmenu_DeleteTask').click();
  await page.waitForTimeout(800);
  //Second pareent record
  await page.locator('(//div[contains(@class, "e-gantt-parent-taskbar")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  //Delete task
  await page.locator('#Gantt_cmenu_DeleteTask').click();
  await page.waitForTimeout(600);
  //last pareent record
  await page.locator('(//div[contains(@class, "e-gantt-parent-taskbar")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  //Delete task
  await page.locator('#Gantt_cmenu_DeleteTask').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-AutoFit this column,Zoom In and Zoom Out.', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask');
  await page.waitForTimeout(500);
  //Splitter
  await page.locator('#Splitter').click();
  await page.waitForTimeout(200);
  //Click Add to Auto fit the column
  await page.locator('(//th[contains(@class, "e-headercell")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //AutoFit the Column ID 
  await page.locator('(//li[contains(@class, "e-menu-item")])[2]').click();
  await page.waitForTimeout(800);
  //Zoom In 
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[8]').click();
  await page.waitForTimeout(500);
  //AutoFit the column
  await page.locator('(//th[contains(@class, "e-headercell")])[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(500);
  //AutoFit the Column Name
  await page.locator('(//li[contains(@class, "e-menu-item")])[2]').click();
  await page.waitForTimeout(500);
  //Zoom Out
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[9]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

