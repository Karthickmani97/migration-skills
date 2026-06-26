import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Row virtual - selection row', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Row-virtualization');
  await page.waitForTimeout(1500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Add new record and edit duration', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Row-virtualization');
  await page.waitForTimeout(2000);
  await page.locator('#Gantt_add').click();
  await page.waitForTimeout(1000);
  await page.locator('#Duration').click();
  await page.locator('#Duration').fill('5 days');
  await page.waitForTimeout(200);
  await page.locator('//*[@id="Gantt_dialog"]/div[4]/button[1]').click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Delete record at grid side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Row-virtualization');
  await page.waitForTimeout(1500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[2]').click();
  await page.waitForTimeout(300);
  await page.locator('#Gantt_delete').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Zoom out', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Row-virtualization');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[2]').click();
  await page.waitForTimeout(300);
  await page.locator('#Gantt_zoomout').click();
  await page.waitForTimeout(300);
  await page.locator('#Gantt_zoomout').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Zoom in', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Row-virtualization');
  await page.waitForTimeout(1500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[2]').click();
  await page.waitForTimeout(300);
  await page.locator('#Gantt_zoomin').click();
  await page.waitForTimeout(500);
  await page.locator('#Gantt_zoomin').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Column virtualization sample - selection', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Column-virtualization');
  await page.waitForTimeout(6000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[2]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test.fixme('7-Collapse all records using key', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Column-virtualization');
//   await page.waitForTimeout(1200);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[2]').click();
//   await page.waitForTimeout(300);
//   await page.keyboard.press('Control+ArrowUp');
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('8-Collapse all and expand parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Column-virtualization');
  await page.waitForTimeout(6000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[2]').click();
  await page.waitForTimeout(300);
  await page.keyboard.press('Control+ArrowUp');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[1]/div/span[1]').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('9-Timeline virtual initial load', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Timeline-virtualization');
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('10-Zoom to fit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Timeline-virtualization');
  await page.waitForTimeout(2000);
  await page.locator('#Gantt_zoomtofit').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('11-Zoom to fit and collapse all', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Timeline-virtualization');
//   await page.waitForTimeout(1500);
//   await page.locator('#Gantt_zoomtofit').click();
//   await page.waitForTimeout(500);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[1]').click();
//   await page.waitForTimeout(300);
//   await page.keyboard.press('Control+ArrowUp');
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('12-Zoom out', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Timeline-virtualization');
  await page.waitForTimeout(1500);
  await page.locator('#Gantt_zoomout').click();
  await page.waitForTimeout(800);
  await page.locator('#Gantt_zoomout').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

