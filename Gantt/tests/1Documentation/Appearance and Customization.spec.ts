import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Taskbar background initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-backgroud');
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Taskbar backgroud tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-backgroud');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div/div/div').click();
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Taskbar height
test('3-Taskbar height initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-height');
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Taskbar height tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-height');
  await page.waitForTimeout(500);
  await page.getByLabel('Name Perform soil test Start Date 1/4/2022 End Date 1/7/2022 Duration 4 Days Progress 40').locator('div').nth(2).click();
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Taskbar labels
test('5-Taskbar labels initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-labels');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Taskbar labels tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-labels');
  await page.waitForTimeout(500);
  await page.getByLabel('Name Develop floor plan for estimation Start Date 1/6/2022 End Date 1/10/2022 Duration 3 Days Progress 30').locator('div').nth(1).click();
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Connector lines
test('7-Connector lines  initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/connector-lines-UG');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Connector lines tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/connector-lines-UG');
  await page.waitForTimeout(500);
  await page.getByLabel('Predecessor line Identify Site location Finish to Perform soil test Start 0 Days').locator('path').first().click();
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Connector lines key Navigation', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/connector-lines-UG');
  await page.waitForTimeout(500);
  await page.getByLabel('3 Column Header ID').locator('div').click();
  await page.waitForTimeout(300);
  await page.getByLabel('3 Column Header ID').press('ArrowDown');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Connector lines collapse all records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/connector-lines-UG');
  await page.waitForTimeout(500);
  await page.getByLabel('1 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(300);
  await page.getByLabel('5 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Connector lines Expand records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/connector-lines-UG');
  await page.waitForTimeout(500);
  await page.getByLabel('1 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(300);
  await page.getByLabel('1 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//customize row and cells
test('12-Customize row and cells initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/customize-row-and-cells');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Customize row and cells key navigation', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/customize-row-and-cells');
  await page.waitForTimeout(500);
  // Click on a specific cell to focus
  await page.locator("(//td[contains(@class,'rowcell')])[12]").click();
  await page.waitForTimeout(300);
  // Press the ArrowDown key
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(1000);
  // Validate the screenshot- key navigation
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Customize row and cells collapse all records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/customize-row-and-cells');
  await page.waitForTimeout(500);
  await page.getByLabel('1 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(300);
  await page.getByLabel('5 Column Header ID').locator('span').first().click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Customize row and cells Expand records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/customize-row-and-cells');
  await page.waitForTimeout(500);
  // Click on the second expand icon
  await page.locator("(//span[contains(@class,'e-icons e-treegridexpand')])[2]").click();
  await page.waitForTimeout(500);
  // Click on the first expand icon
  await page.locator("(//span[contains(@class,'e-icons e-treegridexpand')])[1]").click();
  await page.waitForTimeout(500);
  // Click on the first collapse icon
  await page.locator("(//span[contains(@class,'e-icons e-treegridcollapse')])[1]").click();
  await page.waitForTimeout(500);
  // Click on the second collapse icon
  await page.locator("(//span[contains(@class,'e-icons e-treegridcollapse')])[1]").click();
  await page.waitForTimeout(1000);
  // Validate the screenshot- Expand records
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Grid lines
test('16-Grid lines initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/grid-lines-UG');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Splitter
test('17-Splitter initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/splitter-UG');
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Change splitter position dynamically
test('18-Change splitter position dynamically initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/change-splitter-position-dynamically-UG');
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Update splitter by position', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/change-splitter-position-dynamically-UG');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Update splitter by position' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Update splitter by index', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/change-splitter-position-dynamically-UG');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Update splitter by index' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Grid side of the splitter position', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/change-splitter-position-dynamically-UG');
  await page.waitForTimeout(1000);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Grid' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Chart side of the splitter position', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/change-splitter-position-dynamically-UG');
  await page.waitForTimeout(1000);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Chart' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});



