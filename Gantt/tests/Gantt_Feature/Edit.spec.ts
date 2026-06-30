import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Edit progress value as double', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/editing');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGanttEditing_gridcontrol_content_table"]/tbody/tr[3]/td[6]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Progress').fill('22.55');
  await page.waitForTimeout(100);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Edit progress value through keyboard', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/editing');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGanttEditing_gridcontrol_content_table"]/tbody/tr[6]/td[6]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Progress').fill('42.999');
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Progress').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Insert record continuously at grid side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/methods');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(300);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(300);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(300);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(300);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(300);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Edit startdate and endate through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/837290');
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="GanttSelfdata_chartContentBody"]/tr[2]/td/div[1]').click();
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(800);
  await page.getByLabel('Start Date', { exact: true }).click({clickCount: 3});
  await page.getByLabel('Start Date', { exact: true }).fill('4/9/2019');
  await page.waitForTimeout(200);
  await page.getByLabel('End Date', { exact: true }).click({clickCount: 3});
  await page.getByLabel('End Date', { exact: true }).fill('4/12/2019');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Edit startdate as string', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/837290');
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="treeGridGanttSelfdata_gridcontrol_content_table"]/tbody/tr[8]/td[4]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___StartDate').fill('4/8/2019');
  await page.locator('#DataItem___StartDate').press('Enter');
  await page.waitForTimeout(1300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
})

test('6-Edit enddate as string', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/837290');
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="treeGridGanttSelfdata_gridcontrol_content_table"]/tbody/tr[9]/td[5]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___EndDate').fill('4/12/2019');
  await page.getByLabel('Update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Edit multi parent startdate', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/837290');
  await page.waitForTimeout(2000);
  //startdate double click
  await page.locator('//*[@id="treeGridGanttSelfdata_gridcontrol_content_table"]/tbody/tr[7]/td[4]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___StartDate').fill('4/6/2019');
  await page.locator('#DataItem___StartDate').press('Enter');
  await page.waitForTimeout(300);
  //enddate double click - enddate should not be editable
  await page.locator('//*[@id="treeGridGanttSelfdata_gridcontrol_content_table"]/tbody/tr[7]/td[5]').dblclick();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('8-BUG-843568-Taskbar width does not change', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Selfdata-virtual');
  await page.waitForTimeout(1000);
  await page.locator('.e-gantt-milestone').first().click();
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(1200);
  await page.getByLabel('End Date', { exact: true }).click();
  await page.getByLabel('End Date', { exact: true }).fill('10/12/2023');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-BUG-843568-Editing milestone enddate', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Selfdata-virtual');
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="treeGridGanttSelfdata_gridcontrol_content_table"]/tbody/tr[5]/td[4]').dblclick();
  await page.waitForTimeout(400);
  await page.locator('#DataItem___EndDate').fill('4/9/2019');
  await page.waitForTimeout(200);
  await page.locator('#DataItem___EndDate').press('Enter');
  await page.waitForTimeout(700);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-BUG-843568-Editing taskbar enddate', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Selfdata-virtual');
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="treeGridGanttSelfdata_gridcontrol_content_table"]/tbody/tr[4]/td[2]').click();
  await page.waitForTimeout(100);
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(1200);
  await page.getByLabel('End Date', { exact: true }).click();
  await page.getByLabel('End Date', { exact: true }).fill('4/12/2019');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-BUG-843568-Editing taskbar enddate', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Selfdata-virtual');
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="treeGridGanttSelfdata_gridcontrol_content_table"]/tbody/tr[3]/td[4]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___EndDate').fill('4/8/2019');
  await page.getByLabel('Update').click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Tab key navigation', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/methods');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[3]').dblclick();
  await page.waitForTimeout(300);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(400);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Child taskbar when showEditing tolltip set as falsr', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Selfdata-virtual');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="GanttSelfdata_chartContentBody"]/tr[4]/td/div[2]/div[3]/div').click();
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(1071, 288);
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Parent taskbar when showEditing tolltip set as false', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Selfdata-virtual');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="GanttSelfdata_chartContentBody"]/tr[1]/td/div[2]/div[2]/div').click();
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(1024, 182);
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Taskbar resize icon hover', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Selfdata-virtual');
    await page.waitForTimeout(2000);
    await page.locator('//*[@id="treeGridGanttSelfdata_gridcontrol_content_table"]/tbody/tr[2]/td[5]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___Duration').click();
    await page.waitForTimeout(200);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(200);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(200);
    await page.locator('//input[@class="e-control e-textbox e-lib e-input"]').fill('12');
    await page.waitForTimeout(200);
    await page.locator('(//span[@class="e-tbar-btn-text"])[5]').click();
	  await page.waitForTimeout(200);
    await page.locator('//*[@id="GanttSelfdata_chartContentBody"]/tr[2]/td/div[2]/div[3]/div').hover();
    await page.waitForTimeout(4000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Edit custom column value using key', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/852187-Edit-template');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[1]/td[7]').dblclick();
  await page.waitForTimeout(300);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: 'Close' }).click();
  await page.waitForTimeout(200);
  await page.getByRole('combobox').press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Cancel cell edit using escape key', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/852187-Edit-template');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[6]/td[7]').dblclick();
  await page.waitForTimeout(300);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(200);
  await page.getByRole('combobox').press('ArrowDown');
  await page.getByRole('combobox').press('ArrowDown');
  await page.waitForTimeout(200);
  await page.getByRole('combobox').press('Escape');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Add new record with custom value', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/852187-Edit-template');
  await page.waitForTimeout(500);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(800);
  await page.getByLabel('Duration', { exact: true }).click();
  await page.getByLabel('Duration', { exact: true }).fill('3 days');
  await page.waitForTimeout(200);
  await page.getByText('Custom Columns').click();
  await page.waitForTimeout(400);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: 'validate' }).click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(800);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[8]/td[2]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Cancel edit for custom column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/852187-Edit-template');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.getByLabel('Edit', { exact: true }).click();
  await page.waitForTimeout(800);
  await page.getByText('Custom Columns').click();
  await page.waitForTimeout(400);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: 'validate' }).click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(800);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[8]/td[2]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Right resize taskbar in self-data', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/selfdata-virtual');
  await page.waitForTimeout(1000);
  await page.locator('tr:nth-child(4) > .e-chart-row-cell > .e-taskbar-main-container > .e-taskbar-right-resizer').click({force: true});
  await page.waitForTimeout(100);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(1072, 290);
  await page.waitForTimeout(600);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  await page.locator('(//td[text()="Product concept "])[1]').click();
  await page.waitForTimeout(200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Left resize taskbar in self-data', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/selfdata-virtual');
  await page.waitForTimeout(1000);
  await page.locator('tr:nth-child(8) > .e-chart-row-cell > .e-taskbar-main-container > .e-taskbar-left-resizer').click();
  await page.waitForTimeout(100);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(770, 434);
  await page.waitForTimeout(600);
  await page.mouse.up();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Right resize taskbar in RTL', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/selfdata-virtual');
  await page.waitForTimeout(1000);
  await page.locator('tr:nth-child(3) > .e-chart-row-cell > .e-taskbar-main-container > .e-taskbar-left-resizer').click();
  await page.waitForTimeout(100);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(620, 259);
  await page.waitForTimeout(600);
  await page.mouse.up();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Left resize taskbar in RTL', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/selfdata-virtual');
  await page.waitForTimeout(1000);
  await page.locator('tr:nth-child(4) > .e-chart-row-cell > .e-taskbar-main-container > .e-taskbar-right-resizer').click();
  await page.waitForTimeout(100);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(155, 288);
  await page.waitForTimeout(600);
  await page.mouse.up();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Editing dependency column with special character', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/selfdata-virtual');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGanttSelfdata_gridcontrol_content_table"]/tbody/tr[4]/td[7]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Predecessor').fill("$%#@&^");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Editing dependency column with invalid character', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/selfdata-virtual');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGanttSelfdata_gridcontrol_content_table"]/tbody/tr[3]/td[7]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Predecessor').fill("12FDST");
  await page.locator('#GanttSelfdata_update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Editing negative progress value', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ParentID-field');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[6]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Progress').fill('-25');
  await page.waitForTimeout(200);
  await page.keyboard.press('Enter')
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Editing invalid progress', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ParentID-field');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[7]/td[6]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Progress').fill('@#$#%');
  await page.waitForTimeout(200);
  await page.locator('#Gantt_update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Editing duration field using characters', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ParentID-field');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[5]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').click();
  await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').fill('Three days');
  await page.waitForTimeout(200);
  await page.locator('#Gantt_update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Editing duration field using special characters', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ParentID-field');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[5]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').click();
  await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').fill('@#$%$^');
  await page.waitForTimeout(200);
  await page.locator('#Gantt_update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Editing duration field with invalid numbers', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ParentID-field');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[5]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').click();
  await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').fill('3 4');
  await page.waitForTimeout(500);
  await page.locator('#Gantt_update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Save Record added', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/editing');
  await page.waitForTimeout(500);
  //Click the Add button
  await page.locator('(//span[contains(@class, "e-add e-icons e-btn-icon e-icon-left")])[1]').click();
  await page.waitForTimeout(200);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-New record is saved
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
