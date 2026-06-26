import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Tooltip for taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Enable-tooltip');
  await page.waitForTimeout(500);
  await page.getByLabel('Name Identify site location Start Date 1/4/2022 End Date 1/7/2022 Duration 4 Days Progress 70').locator('div').nth(2).click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Eventmarker tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Enable-tooltip');
  await page.waitForTimeout(500);
  await page.getByLabel('Event marker for Project approval and kick-off on 1/10/2022').getByText('Project approval and kick-off').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Top tier timeline cell tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Timeline-cells-tooltip');
  await page.waitForTimeout(500);
  await page.getByText('Jan 02, 2022').hover();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Bottom tier timeline cell tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Timeline-cells-tooltip');
  await page.waitForTimeout(500);
  await page.getByLabel('Timeline cell 1/5/2022').getByText('W').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Taskname cell tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Cell-tooltip');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').hover();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Taskbar tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-Tooltip');
  await page.waitForTimeout(500);
  await page.getByLabel('Name Perform soil test Start Date 1/4/2022 End Date 1/7/2022 Duration 4 Days Progress 40').locator('div').nth(1).click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Taskbar editing tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-editing-tooltip');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div[5]').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(615, 166);
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Child taskbar tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-editing-tooltip');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div[3]/div').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Baseline tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Baseline-tooltip');
  await page.waitForTimeout(500);
  await page.getByLabel('Name Identify site location Baseline Start Date 1/4/2022 Baseline End Date 1/11/2022').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('10-Indicator tooltip', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Indicator-tooltip');
//   await page.waitForTimeout(500);
//   await page.locator('//*[@id="Gantt_chartContentBody"]/tr[1]/td/label').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('11-Indicator tooltip for child task', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Indicator-tooltip');
//   await page.waitForTimeout(500);
//   await page.locator('//*[@id="Gantt_chartContentBody"]/tr[5]/td/label').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('12-Timeline template tooltip top tier', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Timeline-cell-tooltip');
  await page.waitForTimeout(500);
  await page.getByText('Mar 28, 2021').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Timeline template tooltip bottom tier', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Timeline-cell-tooltip');
  await page.waitForTimeout(500);
  await page.getByLabel('Timeline cell 4/5/2021').getByText('M').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});