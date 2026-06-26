import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Predecessor validation inital load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/PredecessorValidation');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Edit start date of the child', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/PredecessorValidation');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridValidation_gridcontrol_content_table"]/tbody/tr[3]/td[3]').dblclick();
  await page.waitForTimeout(400);
  await page.locator('#DataItem___StartDate').fill('4/12/2022');
  await page.waitForTimeout(200);
  await page.locator('#DataItem___StartDate').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Predecessor validation mode initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/PredecessorValidationMode');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Predecessor offset validation initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/PredecessorOffsetValidation');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Add new record with predecessor offset value', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/PredecessorOffsetValidation');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: 'Dependency' }).getByText('Dependency').click();
  await page.waitForTimeout(1000);
  await page.getByRole('tabpanel', { name: 'Dependency' }).getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(500);
  await page.locator('form').getByRole('cell', { name: '' }).locator('span').nth(2).click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: '3-Perform soil test' }).click();
  await page.waitForTimeout(500);
  await page.locator('input[name="Offset"]').click();
  await page.waitForTimeout(500);
  await page.locator('input[name="Offset"]').fill('2');
  await page.waitForTimeout(500);
  await page.locator('div:nth-child(4) > .e-content').click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Editing offset value', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/PredecessorOffsetValidation');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridOffset_gridcontrol_content_table"]/tbody/tr[3]/td[5]').dblclick();
  await page.waitForTimeout(400);
  await page.locator('#DataItem___Predecessor').fill('2FS+2 days');
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Predecessor').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Add new record and edit offset value', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/PredecessorOffsetValidation');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Duration', { exact: true }).click();
  await page.waitForTimeout(300);
  await page.getByLabel('Duration', { exact: true }).fill('2 days');
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridOffset_gridcontrol_content_table"]/tbody/tr[1]/td[5]').dblclick();
  await page.waitForTimeout(400);
  await page.locator('#DataItem___Predecessor').fill('3FS+3 days');
  await page.waitForTimeout(300);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Auto link validation inital load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/PredecessorAutoLinkValidation');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Editing dependency value with offsest', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/PredecessorAutoLinkValidation');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridauto_gridcontrol_content_table"]/tbody/tr[8]/td[5]').dblclick();
  await page.waitForTimeout(400);
  await page.locator('#DataItem___Predecessor').fill('7FS+2 days');
  await page.waitForTimeout(200);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
