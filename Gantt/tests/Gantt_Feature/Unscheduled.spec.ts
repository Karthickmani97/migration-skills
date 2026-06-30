import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Drag parent parent task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/UnScheduleTasks');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Unscheduled_chartContentBody"]/tr[1]/td/div[2]/div[2]/div').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(1010, 135);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Add child task and drag the parent task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/UnScheduleTasks');
  await page.waitForTimeout(1000);
  await page.getByLabel('1 Column Header ID').locator('div').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  await page.getByRole('menuitem', { name: 'Add' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('menuitem', { name: 'Child' }).click();
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[1]').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(1032, 178);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Drag child taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/UnScheduleTasks');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridUnscheduled_gridcontrol_content_table"]/tbody/tr[2]/td[5]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___Duration').click();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___Duration').fill('3 days');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="Unscheduled_chartContentBody"]/tr[2]/td/div[2]/div[2]').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(1010, 315);
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Task Null Unscedhuled', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/UnScheduleEdit2');
  await page.waitForTimeout(1000);
  //Click the parent taskbar
  await page.locator('(//div[contains(@class, "e-gantt-parent-taskbar")])[1]').click();
  await page.waitForTimeout(200);
  //Click the delete button
  await page.locator('(//span[contains(@class, "e-delete e-icons e-btn-icon e-icon-left")])[1]').click();
  await page.waitForTimeout(200);
  //Click the Ok button
  await page.locator("(//button[text()='OK'])[1]").click();
  await page.waitForTimeout(800);
  //Click the parent taskbar
  await page.locator('(//div[contains(@class, "e-gantt-parent-taskbar")])[1]').click();
  await page.waitForTimeout(200);
  //Click the delete button
  await page.locator('(//span[contains(@class, "e-delete e-icons e-btn-icon e-icon-left")])[1]').click();
  await page.waitForTimeout(200);
  //Click the Ok button
  await page.locator("(//button[text()='OK'])[1]").click();
  await page.waitForTimeout(800);
  //Screenshot validation-No records is displayed
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});