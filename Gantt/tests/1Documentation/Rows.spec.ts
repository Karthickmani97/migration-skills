import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Row height initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Row-height');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-collapse record using key', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Row-height');
  await page.waitForTimeout(500);
  await page.getByLabel('1 Column Header ID').click();
  await page.getByLabel('1 Column Header ID').press('Control+Shift+ArrowUp');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Collapse all tasks initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Collapse-all-tasks');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Expand all record using key', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Collapse-all-tasks');
  await page.waitForTimeout(500);
  await page.getByLabel('1 Column Header ID').locator('div').click();
  await page.getByLabel('1 Column Header ID').press('Control+ArrowDown');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Expand and collapse state of tasks', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Expand-collapse-status-of-tasks');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Expand collapsed parent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Expand-collapse-status-of-tasks');
  await page.waitForTimeout(500);
  await page.getByLabel('5 Column Header ID').locator('div').click();
  await page.getByLabel('5 Column Header ID').press('Control+Shift+ArrowDown');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Customize expand and collape', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Customize-expand-and-collapse');
  await page.waitForTimeout(500);
  await page.getByLabel('1 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(200);
  await page.getByLabel('5 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Collapse and try to expand', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Customize-expand-and-collapse');
  await page.waitForTimeout(500);
  await page.getByLabel('5 Column Header ID').locator('span').first().click();
  await page.getByLabel('5 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Collapse parent using key', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Customize-expand-and-collapse');
  await page.waitForTimeout(500);
  await page.getByLabel('1 Column Header ID').click();
  await page.getByLabel('1 Column Header ID').press('Control+Shift+ArrowUp');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Drag and drop child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Drag-and-drop');
  await page.waitForTimeout(500);
  const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[3]");
  const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[6]");
  if (src && dst) {
      const src_bound = await src.boundingBox();
      const dst_bound = await dst.boundingBox();
      if ( src_bound && dst_bound) {
          await page.mouse.move(src_bound.x + src_bound.width/2, src_bound.y + src_bound.height/2);
          await page.mouse.down();
          await page.mouse.move(dst_bound.x + dst_bound.width/2, dst_bound.y + dst_bound.height/2, {steps: 30});
          await page.mouse.up();
          await page.waitForTimeout(2000);
      }
  }
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Multiple row drag and drop', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Multiple-row-drag-drop');
  await page.waitForTimeout(500);
  await page.keyboard.down('Control');
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[2]').click();
  await page.waitForTimeout(100);
  const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[3]");
  const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[7]");
  if (src && dst) {
      const src_bound = await src.boundingBox();
      const dst_bound = await dst.boundingBox();
      if ( src_bound && dst_bound) {
          await page.mouse.move(src_bound.x + src_bound.width/2, src_bound.y + src_bound.height/2);
          await page.mouse.down();
          await page.mouse.move(dst_bound.x + dst_bound.width/2, dst_bound.y + dst_bound.height/2, {steps: 30});
          await page.mouse.up();
          await page.waitForTimeout(2000);
      }
  }
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Drag and drop rows using method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Row-drag-drop-programmatically');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Dynamic drag and drop' }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Customize rows', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Customize-rows');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Select row', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Customize-rows');
  await page.waitForTimeout(500);
  await page.getByLabel('Perform soil test Column Header Name').locator('div').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Select row and arrow down', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Customize-rows');
  await page.waitForTimeout(500);
  await page.getByText('Perform soil test').click();
  await page.getByLabel('Perform soil test Column Header Name').press('ArrowDown');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Click on customized row at grid side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Customize-rows');
  await page.waitForTimeout(500);
  await page.getByLabel('Soil test approval Column Header Name').locator('div').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Click on customized row on chart side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Customize-rows');
  await page.waitForTimeout(500);
  await page.getByRole('cell', { name: 'Name Soil test approval Start Date 1/4/2022' }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Styling alternate rows', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Customize-rows');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Row taskbar model', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Accessing-row-task-model');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Checking milestone task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Accessing-row-task-model');
  await page.waitForTimeout(500);
  await page.getByLabel('Identify Site location Column Header Name').locator('div').click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Checking first parent task level', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Accessing-row-task-model');
  await page.waitForTimeout(500);
  await page.getByText('Project initiation').click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-First parent taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Accessing-row-task-model');
  await page.waitForTimeout(500);
  await page.getByRole('cell', { name: 'Name Perform soil test Start Date 1/4/2022 End Date 1/7/2022 Duration 4 Days Progress 40' }).click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Second parent task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Accessing-row-task-model');
  await page.waitForTimeout(500);
  await page.getByText('Project estimation').click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Critical taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Accessing-row-task-model');
  await page.waitForTimeout(500);
  await page.getByRole('cell', { name: 'Name Develop floor plan for estimation Start Date 1/14/2022 End Date 1/18/2022 Duration 3 Days Progress 30' }).getByRole('status').first().click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Collapse parent and checking parent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Accessing-row-task-model');
  await page.waitForTimeout(500);
  await page.getByLabel('Project estimation Column Header Name').locator('span').first().click();
  await page.waitForTimeout(200);
  await page.getByRole('cell', { name: 'Name Project estimation Start Date 1/14/2022 End Date 1/18/2022 Duration 3 Days Progress 35' }).getByRole('status').first().click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});