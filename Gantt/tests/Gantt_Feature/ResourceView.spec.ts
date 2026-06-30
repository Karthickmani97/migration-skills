import { test, expect } from '@playwright/test';
import { Helper } from '../Helper/helper';

//Filtering in resourceview 

// test('1-Filter parent resrource ID column - start with operator', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
//   await page.waitForTimeout(500);
//   await page.getByRole('cell', { name: 'Re-ID Filter Icon' }).getByRole('button', { name: 'Filter Icon' }).click();
//   await page.waitForTimeout(300);
//   await page.getByPlaceholder('Enter the value').click();
//   await page.waitForTimeout(100);
//   await page.getByPlaceholder('Enter the value').fill('R-1');
//   await page.waitForTimeout(100);
//   await page.getByPlaceholder('Enter the value').press('Enter');
//   await page.waitForTimeout(300);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('2-Filtering Task ID column - ends with operator', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
//   await page.waitForTimeout(500);
//   await page.getByRole('cell', { name: 'Re-ID Filter Icon' }).getByRole('button', { name: 'Filter Icon' }).click();
//   await page.waitForTimeout(300);
//   await page.getByPlaceholder('Enter the value').click();
//   await page.waitForTimeout(200);
//   await page.getByPlaceholder('Enter the value').fill('T-1');
//   await page.waitForTimeout(200);
//   await page.getByPlaceholder('Enter the value').press('Enter');
//   await page.waitForTimeout(500);
//   await page.getByRole('button', { name: 'Zoom to fit' }).click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('3-Filtering parent taskname - contains operator', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(1000);
  //Click on filter icon in taskname column
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter ")])[2]').click();
  await page.waitForTimeout(500);
  //Click on filter operator dropdown
  await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
  await page.waitForTimeout(500);
  //Select Contains operator
  await page.locator("(//li[text()='Contains'])[1]").click();
  await page.waitForTimeout(500);
  //Enter value in filter input
  await page.locator('(//input[contains(@class, "control")])[3]').click();
  await page.waitForTimeout(500);
  //Fill value in filter input
  await page.getByPlaceholder('Enter the value').fill('Martin Tamer');
  await page.waitForTimeout(500);
  //Click on filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Record has been filtered
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Filtering child taskname - equal operator', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(500);
  await page.getByTitle('Filter Icon').nth(1).click();
  await page.waitForTimeout(300);
  await page.locator('.e-input-group-icon.e-ddl-icon').click();
  await page.waitForTimeout(100);
  await page.getByRole('option', { name: 'Equal', exact: true }).click();
  await page.waitForTimeout(100);
  await page.getByPlaceholder('Enter the value').click();
  await page.waitForTimeout(100);
  await page.getByPlaceholder('Enter the value').fill('Site Analyze');
  await page.waitForTimeout(100);
  await page.getByRole('button', { name: 'Filter', exact: true }).click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Filtering start date column - greater than or equal operator', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(500);
  await page.getByTitle('Filter Icon').nth(2).click();
  await page.waitForTimeout(300);
  await page.locator('.e-input-group-icon.e-ddl-icon').click();
  await page.waitForTimeout(300);
  await page.getByRole('option', { name: 'Greater Than Or Equal' }).click();
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Choose a Date').click();
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Choose a Date').fill('4/1/2022');
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Filter', exact: true }).click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Filtering startdate - greater than operator', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(500);
  await page.getByTitle('Filter Icon').nth(2).click();
  await page.waitForTimeout(300);
  await page.locator('.e-input-group-icon.e-ddl-icon').click();
  await page.waitForTimeout(300);
  await page.getByRole('option', { name: 'Greater Than', exact: true }).click();
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Choose a Date').click();
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Choose a Date').fill('4/1/2022');
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Filter', exact: true }).click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7- Filtering enddate - less than operator', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(500);
  await page.getByTitle('Filter Icon').nth(3).click();
  await page.waitForTimeout(300);
  await page.locator('.e-input-group-icon.e-ddl-icon').click();
  await page.waitForTimeout(300);
  await page.getByRole('option', { name: 'Less Than', exact: true }).click();
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Choose a Date').click();
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Choose a Date').fill('4/8/2022');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Filter', exact: true }).click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Filtering enddate - less than or equal operator', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(500);
  await page.getByTitle('Filter Icon').nth(3).click();
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Choose a Date').click();
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Choose a Date').fill('4/8/2022');
  await page.waitForTimeout(200);
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Filter', exact: true }).click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Filtering enddate - not-equal operator', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(500);
  await page.getByTitle('Filter Icon').nth(3).click();
  await page.waitForTimeout(300);
  await page.locator('.e-input-group-icon.e-ddl-icon').click();
  await page.waitForTimeout(300);
  await page.getByRole('option', { name: 'Not Equal' }).click();
  await page.waitForTimeout(400);
  await page.getByPlaceholder('Choose a Date').click();
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Choose a Date').fill('4/5/2022');
  await page.waitForTimeout(200);
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Filter', exact: true }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Filtering work column - equal operator', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.getByTitle('Filter Icon').nth(2).click();
  await page.waitForTimeout(300);
  await page.locator('.e-input-group-icon.e-ddl-icon').first().click();
  await page.waitForTimeout(300);
  await page.getByRole('option', { name: 'Equal', exact: true }).click();
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Enter the value').click();
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Enter the value').fill('50');
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Filter', exact: true }).click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Filter progress column - equal operator', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.getByTitle('Filter Icon').nth(3).click();
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Enter the value').click();
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Enter the value').fill('100');
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Filter', exact: true }).click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Search child record with exact word', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Scroll_Rows"]').click();
  await page.waitForTimeout(300);
  await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').click();
  await page.waitForTimeout(200);
  await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').fill('Wiring test');
  await page.waitForTimeout(200);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Search parent record with first word', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Scroll_Rows"]').click();
  await page.waitForTimeout(300);
  await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').click();
  await page.waitForTimeout(200);
  await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').fill('Tamer');
  await page.waitForTimeout(200);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-zoom-to-fit and sort name column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Zoom to fit' }).click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon")][1]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Sort descending work column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon")][2]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon")][2]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Collapse all and sort progress column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Collapse all' }).click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon")][3]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Collapse and expand parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Collapse all' }).click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[12]/td[3]/div/span[1]').click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Scroll', exact: true }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Assing resource to unassinged task', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Scroll', exact: true }).click();
  await page.waitForTimeout(1500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[29]/td[3]').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('Resources').click();
  await page.waitForTimeout(1000);
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[2]').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[29]/td[3]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Convert to milestone and delete another child', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.getByRole('gridcell', { name: 'Site Analyze Column Header Name' }).locator('div').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  await page.getByRole('menuitem', { name: 'Convert' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('menuitem', { name: 'To Milestone' }).click();
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[2]/td/div[3]/div').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Drag and drop child task to another resource', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[8]/td[1]/div').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(44, 560);
  await page.waitForTimeout(500);
  await page.mouse.move(47, 471);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('21-Console error occurs when changing view type', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.locator('.e-switch-on').click();
  await page.waitForTimeout(800);
  await page.locator('.e-switch-off').click();
  await page.waitForTimeout(800);
  await page.locator('.e-switch-on').click();
  await page.waitForTimeout(800);
  await page.locator('.e-switch-off').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Unit edit through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridresource_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
  await page.waitForTimeout(500);
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(800);
  await page.getByText('Resources').click();
  await page.waitForTimeout(600);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Add New record with predecessor', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(200);
  await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
  await page.waitForTimeout(800);
  await page.getByLabel('Dependency', { exact: true }).getByLabel('Add').click();
  await page.waitForTimeout(200);
  await page.locator('form').getByRole('cell', { name: '' }).locator('span').nth(2).click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: '3-Site Analyze' }).click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Edit predecessor through dialog to previous', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.getByLabel('Site Analyze Column Header Name').click();
  await page.waitForTimeout(200);
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(200);
  await page.getByRole('tab', { name: 'Dependency' }).locator('div').first().click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(200);
  await page.locator('form').getByRole('cell', { name: '' }).locator('span').nth(2).click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: '2-Identify Site location' }).click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Console error for overallocation when right clicked', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.getByLabel('Site Analyze Column Header Name').click();
  await page.waitForTimeout(200);
  await page.locator('.e-rangecontainer > div:nth-child(3) > div:nth-child(2)').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Console error when predecessor is right clicked', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[8]/td[3]').first().click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Add new record and right taskbar resize', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(800);
  await page.getByText('Resources').click();
  await page.waitForTimeout(600);
  await page.locator('(//span[contains(@class, "e-frame e-icons e-uncheck")])[2]').click();
  await page.waitForTimeout(600);
  await page.locator('(//div[contains(@class, "e-tab-text")])[1]').click();
  await page.waitForTimeout(600);
  await page.locator('#Work').click();
  await page.waitForTimeout(600);
  await page.locator('#Work').fill('8');
  await page.waitForTimeout(600);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar-inner-div e-gantt-child-taskbar   ")])[3]').click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[5]/td/div[2]/div[5]').click();
  await page.waitForTimeout(1000);
  await page.mouse.down();
  await page.mouse.move(1034, 360);
  await page.mouse.move(1080, 366);
  await page.waitForTimeout(1000);
  await page.mouse.up();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Left taskbar resize', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1200);
  await page.locator('tr:nth-child(8) > .e-chart-row-cell > .e-taskbar-main-container > .e-taskbar-left-resizer').hover();
  await page.waitForTimeout(800);
  await page.mouse.down();
  await page.waitForTimeout(500);
  await page.mouse.move(1150, 470);
  await page.waitForTimeout(600);
  await page.mouse.up();
  await page.waitForTimeout(2500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Add record in GUID sample', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/GanttResourceGUID');
  await page.waitForTimeout(1000);
  await page.locator('(//button[contains(@class, "e-control e-btn e-lib col-1")])').click();
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_add').click();
  await page.waitForTimeout(1200);
  await page.locator('#TaskName').click();
  await page.waitForTimeout(1000);
  await page.locator('#TaskName').fill(" ");
  await page.waitForTimeout(500);
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(1200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Delete record in GUID sample', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/GanttResourceGUID');
  await page.waitForTimeout(1000);
  await page.locator('(//button[contains(@class, "e-control e-btn e-lib col-1")])').click();
  await page.waitForTimeout(600);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').click();
  await page.waitForTimeout(300);
  await page.locator('#Gantt_delete').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Add record in empty data source', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/GanttResourceINT');
  await page.waitForTimeout(500);
  await page.locator('#Gantt_add').click();
  await page.waitForTimeout(800);
  await page.locator('#Duration').click();
  await page.locator('#Duration').fill("3 days");
  await page.waitForTimeout(500);
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Insert record and change view type', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/GanttResourceINT');
  await page.waitForTimeout(500);
  await page.locator('(//button[contains(@class, "e-control e-btn")])[1]').click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').click();
  await page.waitForTimeout(800);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(200);
  await page.locator('(//span[contains(@class, "e-switch-on")])').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Project View
test('32-Add new record ,collapse and click on Previous Timespan', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  //Change view to project view
  await page.locator('(//span[contains(@class, "e-switch-handle")])[1]').click();
  await page.waitForTimeout(500);
  //Add new task
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
  await page.waitForTimeout(800);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1500);
  //Collapse all the records
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
  await page.waitForTimeout(200);
  //Zoom to Fit 
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[10]').click();
  await page.waitForTimeout(200);
  //Previous Timespan
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[12]').dblclick();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Filter the records  after scroll', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  //Change view to project view
  await page.locator('(//span[contains(@class, "e-switch-handle")])[1]').click();
  await page.waitForTimeout(500);
  //Scroll
  await page.locator('#Scroll_Rows').click();
  await page.waitForTimeout(800);
  //Zoom Out
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[9]').dblclick();
  await page.waitForTimeout(200);
  //Next Timespan
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[11]').click();
  //Filter
  await page.locator('(//div[contains(@class, "e-filtermenudiv")])[2]').click();
  //Enter value
  await page.locator('(//input[contains(@class, "e-control")])[4]').click();
  await page.waitForTimeout(200);
  await page.locator('(//input[contains(@class, "e-control")])[4]').fill('Tile test');
  //Filter
  await page.locator('(//button[contains(@class, "e-control")])[14]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Drag and Drop row after delete of taskbar on chart side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  //Change view to project view
  await page.locator('(//span[contains(@class, "e-switch-handle")])[1]').click();
  await page.waitForTimeout(500);
  // context menu on chart side taskbar 
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  //Delete task
  await page.locator('(//li[contains(@class, "e-menu-item")])[6]').click();
  await page.waitForTimeout(300);
  //Click ok to delete
  await page.locator('(//button[contains(@class, "e-control")])[14]').click();
  //Row Drag and drop
  const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[5]");
  const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[8]");
  if (src && dst) {
    const src_bound = await src.boundingBox();
    const dst_bound = await dst.boundingBox();
    if (src_bound && dst_bound) {
      await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
      await page.mouse.down();
      await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
      await page.mouse.up();
      await page.waitForTimeout(500);
    }
  }
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Outdent the record through context menu and deleted', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  //Change view to project view
  await page.locator('(//span[contains(@class, "e-switch-handle")])[1]').click();
  await page.waitForTimeout(500);
  //Scroll
  await page.locator('#Scroll_Rows').click();
  await page.waitForTimeout(800);
  //Outdent the record through context menu
  await page.locator('(//td[contains(@class, "e-rowcell")])[65]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  //Click outdent
  await page.locator('#Gamtt_cmenu_Outdent').click();
  await page.waitForTimeout(500);
  //Click the record
  await page.locator('(//td[contains(@class, "e-rowcell")])[65]').click();
  await page.waitForTimeout(200);
  //Delete the record
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(200);
  //Click Ok button to delete the record
  await page.locator('(//button[contains(@class, "e-control")])[14]').click();;
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('36-Convert record to milestone', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  //Change view to project view
  await page.locator('(//span[contains(@class, "e-switch-handle")])[1]').click();
  await page.waitForTimeout(500);
  //Click Convert  record through context menu
  await page.locator('(//td[contains(@class, "e-rowcell")])[9]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Click convert 
  await page.locator('#Gamtt_cmenu_Convert').click();
  await page.waitForTimeout(500);
  //Convert it to Milestone
  await page.locator('#Gamtt_cmenu_ToMilestone').click();
  await page.waitForTimeout(200);
  //Collapse all records
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
  await page.waitForTimeout(200);
  //Click the child taskbar after collapse
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[1]').click();
  //Resize 
  await page.waitForTimeout(1000);
  await page.mouse.down();
  await page.mouse.move(1317, 167);
  await page.mouse.move(1022, 158);
  await page.mouse.up();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Edit the parent record after Next timespan', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  //Change view to project view
  await page.locator('(//span[contains(@class, "e-switch-handle")])[1]').click();
  await page.waitForTimeout(500);
  //Scroll
  await page.locator('#Scroll_Rows').click();
  await page.waitForTimeout(800);
  //Collapse all the records
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
  await page.waitForTimeout(200);
  //Expand all the records
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
  await page.waitForTimeout(500);
  //Select Next timespan
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[11]').click();
  await page.waitForTimeout(200);
  //Edit the parent record through cell edit
  await page.locator('(//td[contains(@class, "e-rowcell")])[2]').dblclick();
  await page.waitForTimeout(500);
  //Fill the record
  await page.locator('#DataItem___TaskName').fill('Project');
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Resource view
test('38-Zoom to Fit after Scroll', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  //Collapse all the records
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
  await page.waitForTimeout(200);
  //Zoom to Fit
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[10]').click();
  await page.waitForTimeout(500);
  //Scroll
  await page.locator('#Scroll_Rows').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Task information for Unassign Task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  //Scroll
  await page.locator('#Scroll_Rows').click();
  //Search the records
  await page.locator('(//input[contains(@class, "e-control")])[2]').fill('Unassigned Tasks');
  await page.waitForTimeout(200);
  //Click the search button
  await page.locator('(//span[contains(@class, "e-search-icon")])[1]').click();
  await page.waitForTimeout(200);
  //Click to show the Task information
  await page.locator('(//div[contains(@class, "e-gantt-parent-taskbar")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  //Task information to open the dialog
  await page.locator('#Gamtt_cmenu_TaskInformation').click();
  await page.waitForTimeout(600);
  //click taskname cell
  await page.locator('#TaskName').click();
  await page.waitForTimeout(1000);
  //dialog tab will be opened with task information
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Filter Taskname column by FilterByColumn method', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.locator('//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")]').click();
  await page.waitForTimeout(200);
  //filter taskname column - contains operator
  await page.keyboard.type("FilterByColumn");
  await page.waitForTimeout(50);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(500);
  //Zoom to fit
  await page.locator('#Gamtt_zoomtofit').click();
  await page.waitForTimeout(500);
  await page.locator('//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")]').click();
  await page.waitForTimeout(500);
  //Reset zoom
  await page.keyboard.type("ResetZoomAsync");
  await page.waitForTimeout(500);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(700);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Filter Date column by FilterByColumn method', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.locator('//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")]').click();
  await page.waitForTimeout(200);
  //filter taskname column - contains operator
  await page.keyboard.type("FilterByColumn");
  await page.waitForTimeout(200);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(500);
  await page.locator('//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")]').click();
  await page.waitForTimeout(1200);
  //filter taskID column - equal operator
  await page.keyboard.type("FilterByDate");
  await page.waitForTimeout(1500);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(700);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('42-Zoom in and ResetZoomAsync by method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.locator('#Gamtt_zoomin').click();
  await page.waitForTimeout(100);
  await page.locator('#Gamtt_zoomin').click();
  await page.waitForTimeout(100);
  await page.locator('//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")]').click();
  await page.waitForTimeout(500);
  //Reset zoom
  await page.keyboard.type("ResetZoomAsync");
  await page.waitForTimeout(500);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(700);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-Zoom out and ResetZoomAsync by method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.locator('#Gamtt_zoomout').click();
  await page.waitForTimeout(100);
  await page.locator('#Gamtt_zoomout').click();
  await page.waitForTimeout(100);
  await page.locator('//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")]').click();
  await page.waitForTimeout(200);
  //Reset zoom
  await page.keyboard.type("ResetZoomAsync");
  await page.waitForTimeout(500);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(700);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('44-Zoom to fit and ResetZoomAsync by method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.locator('#Gamtt_zoomout').click();
  await page.waitForTimeout(100);
  await page.locator('#Gamtt_zoomtofit').click();
  await page.waitForTimeout(100);
  await page.locator('//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")]').click();
  await page.waitForTimeout(200);
  //Reset zoom
  await page.keyboard.type("ResetZoomAsync");
  await page.waitForTimeout(500);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(700);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('45-Update projectdates and ResetZoomAsync by method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  await page.locator('//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")]').click();
  await page.waitForTimeout(500);
  //Update project start and enddates 
  await page.keyboard.type("UpdateProjectDates");
  await page.waitForTimeout(500);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(500);
  await page.locator('//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")]').click();
  await page.waitForTimeout(500);
  await page.keyboard.type("ResetZoomAsync");
  await page.waitForTimeout(500);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('46-CURD operation and ResetZoomAsync by method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(500);
  //click add button
  await page.locator('(//span[contains(@class, "add")])');
  await page.waitForTimeout(800);
  //Press the Enter button
  await page.keyboard.press("Enter");
  await page.waitForTimeout(800);
  //Click the child record
  await page.locator('(//td[contains(@class, "rowcell")])[16]').click();
  await page.waitForTimeout(500);
  // deleted record
  await page.locator('(//span[contains(@class, "delete")])').click();
  await page.waitForTimeout(500);
  // edit start date
  await page.locator('(//td[contains(@class, "rowcell")])[12]').dblclick();
  await page.waitForTimeout(800);
  //Enter the start date
  await page.locator('#DataItem___StartDate').fill('4/8/2022');
  await page.waitForTimeout(400);
  //Click update button
  await page.locator('(//span[contains(@class, "update")])').click();
  await page.waitForTimeout(600);
  //Click the dropdown
  await page.locator('(//span[contains(@class, "input")])[4]').click();
  await page.waitForTimeout(600);
  //Reset zoom
  await page.keyboard.type("ResetZoomAsync");
  await page.waitForTimeout(500);
  //Press the Enter button
  await page.keyboard.press("Enter");
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('47-Drag taskbar and ResetZoomAsync by method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(800);
  const taskbarSelector = '(//div[contains(@class, "e-gantt-child-taskbar")])[2]';
  const taskbar = await page.locator(taskbarSelector).first();
  const box = await taskbar.boundingBox();
  if (!box) throw new Error('Failed to locate the taskbar element');
  // Drag operation - 33px left (one cell)
  await page.mouse.move(box.x + 10, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + 10 + 150, box.y + box.height / 2, { steps: 5 });
  await page.mouse.up();
  await page.locator('//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")]').click();
  await page.waitForTimeout(800);
  //Reset zoom
  await page.keyboard.type("ResetZoomAsync");
  await page.waitForTimeout(600);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/868984/
test('48-Click the ScrollToTaskbar button to perform the action', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ResourceOverallocation');
  await page.waitForTimeout(2000);
  //Click the ScrollToTaskbar button 
  await page.locator("(//button[text()='ScrollToTaskbar'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The record should be able to be scrolled down.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/914493
test('49-BUG-914493-Primary ID updating issue', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-914493');
  await page.waitForTimeout(500);
  //Double click on taskbar to edit
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[4]').dblclick();
  await page.waitForTimeout(800);
  //Navigate to resources tab
  await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
  await page.waitForTimeout(500);
  //Click to add resources
  await page.locator('(//span[contains(@class, "e-uncheck")])[2]').click();
  await page.waitForTimeout(200);
  await page.locator('(//span[contains(@class, "e-uncheck")])[2]').click();
  await page.waitForTimeout(200);
  //save the record
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/851685
test('50-Tab navigation Issue', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(2000);
  //Click the Duration cell of the parent record  
  await page.locator("(//td[contains(@class,'rowcell')])[6]").click();
  await page.waitForTimeout(500);
  //Press the keyboard key Tab
  await page.keyboard.press('Tab');
  await page.waitForTimeout(2000);
  //Screenshot validation-The tab is navigated to the chart side from the treegrid side.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/902096
test('51-Console when delete with keyboardnavigation', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  // click the taskname to cell edit it
  await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
  await page.waitForTimeout(500);
  //Press the Delete key on the keyboard
  await page.keyboard.press('Delete');
  await page.waitForTimeout(500);
  //Screenshot validation-No console error thrown and the record selected is deleted
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/901731
test('52-Drag child and drop on parent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[2]");
  const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[4]");
  if (src && dst) {
    const src_bound = await src.boundingBox();
    const dst_bound = await dst.boundingBox();
    if (src_bound && dst_bound) {
      await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
      await page.mouse.down();
      await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
      await page.mouse.up();
      await page.waitForTimeout(1000);
    }
  }
  await page.waitForTimeout(1000);
  //Screenshot validation-The child record is dragged and dropped in parent record
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
