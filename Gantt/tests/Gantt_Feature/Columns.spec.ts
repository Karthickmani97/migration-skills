import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Edit custom column value through cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/methods');
  await page.waitForTimeout(1000);
  //parent custom column
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[9]').dblclick();
  await page.waitForTimeout(200);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(200);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(500);
  //open child task 
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[4]/td/div[2]/div[3]/div').dblclick();
  await page.waitForTimeout(800);
  //custom column tab
  await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class,"e-footer-content")])[2]').click();
  // ✅ Ensure Gantt fully rendered
const gantt = page.locator('.e-gantt');
await page.waitForSelector('.e-gantt', { state: 'visible' });
await page.waitForLoadState('networkidle');

// ✅ Ensure not 0x0
const box = await gantt.boundingBox();
if (!box || box.width === 0 || box.height === 0) {
  throw new Error('Gantt not rendered properly (0x0)');
}

// ✅ Stabilize UI (important)
await page.waitForTimeout(1000);

// ✅ Snapshot
await expect(await gantt.screenshot()).toMatchSnapshot({
  maxDiffPixels: 100
});

test('2-Edit custom column value through dialog edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/methods');
  await page.waitForTimeout(1000);
  //child dialog open
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[3]').dblclick();
  await page.waitForTimeout(200);
  //custom tab
  await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
  await page.waitForTimeout(500);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(200);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(200);
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class, "e-gantt-parent-taskbar")])[2]').dblclick();
  await page.waitForTimeout(800);
  //custom column tab
  await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
  // ✅ Ensure Gantt fully rendered
const gantt = page.locator('.e-gantt');
await page.waitForSelector('.e-gantt', { state: 'visible' });
await page.waitForLoadState('networkidle');

// ✅ Ensure not 0x0
const box = await gantt.boundingBox();
if (!box || box.width === 0 || box.height === 0) {
  throw new Error('Gantt not rendered properly (0x0)');
}

// ✅ Stabilize UI (important)
await page.waitForTimeout(1000);

// ✅ Snapshot
await expect(await gantt.screenshot()).toMatchSnapshot({
  maxDiffPixels: 100
});
``

test('3-Edit custom column through cell and press escape', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/methods');
  await page.waitForTimeout(500);
  await page.locator('(//td[contains(@class, "e-rowcell")])[24]').dblclick();
  await page.waitForTimeout(200);
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Escape");
  await page.waitForTimeout(200);
  await page.locator('(//td[contains(@class, "e-rowcell")])[24]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Edit custom column and filtering data', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/methods');
  await page.waitForTimeout(500);
  await page.locator('(//td[contains(@class, "e-rowcell")])[32]').dblclick();
  await page.waitForTimeout(500);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(300);
  await page.locator("#Gantt_update");
  await page.waitForTimeout(300);
  await page.locator('(//td[contains(@class, "e-rowcell")])[40]').dblclick();
  await page.waitForTimeout(200);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(200);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(200);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(200);
  await page.locator('(//div[contains(@class, "e-icon-filter")])[8]').click();
  await page.waitForTimeout(500);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(500);
  await page.keyboard.type('Open')
  await page.waitForTimeout(500);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Edit custom column, delete the record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/methods');
  await page.waitForTimeout(1000);
  await page.locator('(//td[contains(@class, "e-rowcell")])[32]').dblclick();
  await page.waitForTimeout(500);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(300);
  await page.locator("#Gantt_update").click();
  await page.waitForTimeout(300);
  await page.locator('(//td[contains(@class, "e-rowcell")])[32]').click();
  await page.waitForTimeout(500);
  await page.keyboard.press("Delete");
  await page.waitForTimeout(600);
  await page.locator('//*[@id="Gantt_deleteConfirmDialog"]/div[3]/button[1]').click();
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-parent-taskbar")])[2]').dblclick();
  await page.waitForTimeout(800);
  //custom column tab
  await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Edit custom column and cancel edit using method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/methods');
  await page.waitForTimeout(800);
  await page.locator('(//td[contains(@class, "e-rowcell")])[32]').dblclick();
  await page.waitForTimeout(500);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(200);
  await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[3]').click();
  await page.waitForTimeout(500);
  await page.locator('(//td[contains(@class, "e-rowcell")])[32]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

