import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Add new record and edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Built-in-toolbar-items');
  await page.waitForTimeout(500);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(800);
  await page.getByLabel('Start Date', { exact: true }).click();
  await page.getByLabel('Start Date', { exact: true }).fill('1/6/2022');
  await page.waitForTimeout(200);
  await page.getByLabel('Duration', { exact: true }).click();
  await page.getByLabel('Duration', { exact: true }).fill('3 days');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Edit milestone task through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Built-in-toolbar-items');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[2]').click();
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(800);
  await page.getByLabel('Duration', { exact: true }).click();
  await page.getByLabel('Duration', { exact: true }).fill('6 days');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Delete child and collapse all', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Built-in-toolbar-items');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.getByLabel('Delete').click();
  await page.waitForTimeout(300);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Indent record and delete child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Built-in-toolbar-items');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.getByLabel('Indent').click();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[2]').click();
  await page.getByLabel('Delete').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Expand all records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Built-in-toolbar-items');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.getByLabel('Collapse all').click();
  await page.getByLabel('Expand all').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Next timespan', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Built-in-toolbar-items');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[2]').click();
  await page.getByLabel('Next timespan').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Search child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Built-in-toolbar-items');
  await page.waitForTimeout(500);
  await page.getByPlaceholder('Search').click();
  await page.waitForTimeout(200);
  await page.getByPlaceholder('Search').fill('Perform soil test');
  await page.waitForTimeout(100);
  await page.getByTitle('Search').locator('span').nth(1).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Search parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Built-in-toolbar-items');
  await page.waitForTimeout(500);
  await page.getByPlaceholder('Search').click();
  await page.waitForTimeout(200);
  await page.getByPlaceholder('Search').fill('project estimation');
  await page.getByPlaceholder('Search').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Outdent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Built-in-toolbar-items');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.getByLabel('Outdent').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Custom toolbar items - filter', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Custom-toolbar-items');
  await page.waitForTimeout(500);
  await page.getByLabel('Quick Filter').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Clear filter', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Custom-toolbar-items');
  await page.waitForTimeout(500);
  //Click Quick Filter button
  await page.locator("(//span[text()='Quick Filter'])[1]").click();
  await page.waitForTimeout(200);
  //Clic the Filter menu
  await page.locator("(//div[contains(@class,'filtermenudiv')])[2]").click();
  await page.waitForTimeout(200);
  //Click the Clear button
  await page.locator("(//button[text()='Clear'])[1]").click();
  await page.waitForTimeout(500);
  //Screenshot validation-Record displayed without filter
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Custom toolbar - console writeline', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Built-in-and-custom-items');
  await page.waitForTimeout(500);
  const consolelogs: string[] = [];
  page.on("console", (message) => {
    if (message.type() == "error") {
      console.log(message.text());
      consolelogs.push(message.text());
    }
  });
  await page.waitForTimeout(1000);
  await page.getByLabel('Test', { exact: true }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Enable disble toolbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Enable-or-disbale-toolbar-items');
  await page.waitForTimeout(500);
  await page.getByLabel('Quick Filter').click();
  await page.waitForTimeout(500);
  await page.getByLabel('Clear Filter').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Diable toolbar items', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Enable-or-disbale-toolbar-items');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Disable' }).click();
  await page.waitForTimeout(200);
  await page.getByText('Quick FilterClear Filter').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
