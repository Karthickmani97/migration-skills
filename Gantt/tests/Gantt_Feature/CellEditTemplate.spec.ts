import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Drag parent taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/CellEditTemplate');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[1]/td/div[2]/div[2]/div/div').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(1010, 135);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Drag child taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/CellEditTemplate');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[6]/td/div[2]/div[3]/div').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(1043, 319);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Edit child record through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/CellEditTemplate');
  await page.waitForTimeout(500);
  await page.locator('(//td[text()="Identify Site location"])[1]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[text()="Edit"])[1]').click();
  await page.waitForTimeout(800);
  await page.locator('(//span[contains(@class, "e-ddl-icon e-icons")])[1]').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Project estimation' }).click();
  await page.waitForTimeout(300);
  await page.locator('#Duration').fill('6 days');
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Edit duration through cell-edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/CellEditTemplate');
  await page.waitForTimeout(500);
  await page.locator('(//td[contains(@class, "e-rowcell e-templatecell")])[6]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Duration').click();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Duration').fill('7 days');
  await page.waitForTimeout(200);
  await page.locator('(//span[text()="Update"])[1]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Edit taskname and drag the taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/CellEditTemplate');
  await page.waitForTimeout(500);
  await page.locator('(//td[text()="Develop floor plan for estimation"])[1]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('(//span[contains(@class, "e-ddl-icon e-icons")])[1]').click();
  await page.waitForTimeout(300);
  await page.getByRole('option', { name: 'Soil test approval' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[4]').click();
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(1078, 319);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(500);
  await page.locator('(//td[text()="List materials"])[1]').click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});