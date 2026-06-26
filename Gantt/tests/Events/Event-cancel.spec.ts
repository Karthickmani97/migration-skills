import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Row selecting event at grid side and chart side', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Events-args');
  await page.waitForTimeout(1000);
  await page.locator('(//td[contains(@class,"rowcell")])[30]').click();
  await page.waitForTimeout(300);
  await page.locator('(//div[contains(@class,"e-left-label-container")])[9]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Cell edit - cancel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Events-args');
  await page.waitForTimeout(1000);
  await page.locator('(//td[contains(@class,"rowcell")])[23]').dblclick();
  await page.waitForTimeout(1000);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('3-Dialog open through taskbar doubleclick', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Events-args');
  await page.waitForTimeout(1000);
  // Double click on second taskbar
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[2]').dblclick();
  // Assertion 1: Dialog should be visible
  const dialog = page.locator('.e-dialog');
  await expect(dialog).toBeVisible();
  //Assertion 2: Dialog header text
  await expect(
    dialog.locator('.e-dlg-header')
  ).toHaveText('Task Information');
  //Assertion 3: Task Name field should be visible
  const taskNameInput = page.locator('#TaskName');
  await expect(taskNameInput).toBeVisible();
  //Assertion 4: Task name value (based on screenshot)
  await expect(taskNameInput).toHaveValue('Defining the target audience');
  //Assertion 5: Save & Cancel buttons exist
  await expect(page.locator('(//button[text()="Save"])')).toBeVisible();
  await expect(page.locator('(//button[text()="Cancel"])')).toBeVisible();
});


test('4-Toolbar click - cancel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Events-args');
  await page.waitForTimeout(1000);
  await page.locator("(//span[text()='Add'])[1]").click();
  await page.waitForTimeout(400);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Collapse record - cancel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Events-args');
  await page.waitForTimeout(1000);
  await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
  await page.waitForTimeout(300);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Sorting descending - cancel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Events-args');
  await page.waitForTimeout(1000);
  await page.locator('//th[contains(@class, "e-headercell")][2]').click();
  await page.waitForTimeout(300);
  await page.locator('//th[contains(@class, "e-headercell")][2]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Sorting ascending - cancel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Events-args');
  await page.waitForTimeout(1000);
  await page.locator('//th[contains(@class, "e-headercell")][2]').click();
  await page.waitForTimeout(300);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Splitter resize - cancel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Events-args');
  await page.waitForTimeout(1000);
  await page.locator('(//div[contains(@class,"e-split-bar e-split-bar-horizontal e-resizable-split-bar e-last-bar")])[1]').click();
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(911, 346);
  await page.waitForTimeout(1000);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Column resize - cancel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Events-args');
  await page.waitForTimeout(1000);
  await page.locator('(//div[contains(@class, "e-rhandler e-rcursor")])[2]').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(506, 105);
  await page.waitForTimeout(600);
  await page.mouse.up();
  await page.waitForTimeout(600);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Drag and Drop row - cancel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Events-args');
  await page.waitForTimeout(1000);
  const src = page.locator('(//div[contains(@class,"e-rowcelldrag")])[2]');
  const dst = page.locator('(//div[contains(@class,"e-rowcelldrag")])[9]');
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
  await page.waitForTimeout(1000);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Editing cell - cancel save', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Event-cancel');
  await page.waitForTimeout(1000);
  await page.locator('(//td[contains(@class,"rowcell")])[16]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___TaskName').fill("data");
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Expanding cancel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Event-cancel');
  await page.waitForTimeout(1000);
  await page.locator("(//span[text()='Collapse all'])").click();
  await page.waitForTimeout(500);
  await page.locator("(//span[text()='Expand all'])").click();
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-search record - cancel search', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Event-cancel');
  await page.waitForTimeout(1000);
  await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').click();
  await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').fill('Concept');
  await page.waitForTimeout(300);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(300);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Filter dialog open - cancel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Event-cancel');
  await page.waitForTimeout(1000);
  await page.locator('(//div[contains(@class, "e-icon-filter")])[2]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Add dialog open - cancel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Event-cancel');
  await page.waitForTimeout(1000);
  await page.locator("(//span[text()='Add'])").click();
  await page.waitForTimeout(700);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Edit dialog open - cancel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Event-cancel');
  await page.waitForTimeout(1000);
  await page.locator('(//td[contains(@class,"rowcell")])[44]').click();
  await page.waitForTimeout(200);
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Delete record - cancel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Event-cancel');
  await page.waitForTimeout(1000);
  await page.locator('(//td[contains(@class,"rowcell")])[44]').click();
  await page.waitForTimeout(200);
  await page.locator("(//span[text()='Delete'])[1]").click();
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Zooming - cancel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Event-cancel');
  await page.waitForTimeout(1000);
  await page.locator("(//span[text()='Zoom out'])").click();
  await page.waitForTimeout(500);
  await page.locator("(//span[text()='Zoom in'])").click();
  await page.waitForTimeout(500);
  await page.locator("(//span[text()='Zoom to fit'])").click();
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Contextmenu open - cancel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Event-cancel');
  await page.waitForTimeout(1000);
  await page.locator("(//td[contains(@class,'rowcell')])[23]").click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Reorder the ID column', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Events-args');
  await page.waitForTimeout(1000);
  const src = page.locator("(//th[contains(@class,'e-headercell')])[1]");
  const dst = page.locator("(//th[contains(@class,'e-headercell')])[2]");
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
  await page.waitForTimeout(1000);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});






