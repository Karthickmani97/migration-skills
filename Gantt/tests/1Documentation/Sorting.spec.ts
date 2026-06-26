import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Sorting column initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SortingColumInitial');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridcol_gridcontrol_content_table"]/tbody/tr[4]/td[2]').click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Sorting column on gantt initial', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SortingColumnOnGanttInitial');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Sort column dynamically initial', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SortingColumnDynamically');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Sort column using method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SortingColumnDynamically');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGriddynamic_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Sort Taskname Column' }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Sorting task ID column descending', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SortingColumnDynamically');
  await page.waitForTimeout(500);
  await page.locator('div').filter({ hasText: /^ID$/ }).click();
  await page.waitForTimeout(300);
  await page.locator('div').filter({ hasText: /^ID$/ }).click();
  await page.waitForTimeout(400);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Clear sorting inital load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ClearAllSortedColumns');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Clear sorting', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ClearAllSortedColumns');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Clear Sorting' }).click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test.fixme('8-Sorting after clear sorting', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/ClearAllSortedColumns');
//   await page.waitForTimeout(500);
//   await page.getByRole('button', { name: 'Clear Sorting' }).click();
//   await page.waitForTimeout(300);
//   await page.locator('//*[@id="treeGridclear_gridcontrol_header_table"]/thead/tr/th[1]/div[2]').click();
//   await page.waitForTimeout(300);
//   await page.locator('//*[@id="treeGridclear_gridcontrol_header_table"]/thead/tr/th[1]/div[2]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('9-Sorting events initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SortingEvents');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Sorting Taskname column ascending', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SortingEvents');
  await page.waitForTimeout(500);
  await page.locator('div').filter({ hasText: /^Name$/ }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Sorting custom column initial', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SortingCustomColumns');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Sort custom column using method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SortingCustomColumns');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridcustom_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Sort Custom Column' }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
})