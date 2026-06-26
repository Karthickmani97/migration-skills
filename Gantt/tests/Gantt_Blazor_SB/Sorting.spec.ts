import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
  launchOptions: {
    ignoreDefaultArgs: [], // Disable the scrollbar argument
  },
});

test('1-Sorting initial load', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent');
  await page.waitForTimeout(3000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Task ID descending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent');
  await page.waitForTimeout(3000);
  await page.locator('//th[contains(@class, "e-headercell")][1]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Task ID ascending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent');
  await page.waitForTimeout(3000);
  await page.getByRole('gridcell', { name: 'Product concept Column Header Task Name' }).click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][1]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][1]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-TaskName ascending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent');
  await page.waitForTimeout(3000);
  await page.locator('//th[contains(@class, "e-headercell")][2]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][2]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][2]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-TaskName descending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent');
  await page.waitForTimeout(3000);
  await page.locator('//th[contains(@class, "e-headercell")][2]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][2]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-StartDate descending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent');
  await page.waitForTimeout(3000);
  await page.getByRole('gridcell', { name: 'Define the target audience Column Header Task Name' }).click();
  await page.waitForTimeout(300);
  await page.locator('//th[contains(@class, "e-headercell")][3]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][3]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-StartDate ascending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent');
  await page.waitForTimeout(3000);
  await page.locator('//th[contains(@class, "e-headercell")][3]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][3]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][3]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Enddate descending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent');
  await page.waitForTimeout(3000);
  await page.locator('//th[contains(@class, "e-headercell")][4]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][4]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Enddate ascending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent');
  await page.waitForTimeout(3000);
  await page.locator('//th[contains(@class, "e-headercell")][4]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][4]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][4]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Duration descending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent');
  await page.waitForTimeout(3000);
  await page.locator('//th[contains(@class, "e-headercell")][5]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][5]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Duration ascending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent');
  await page.waitForTimeout(3000);
  await page.locator('//th[contains(@class, "e-headercell")][5]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][5]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][5]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Progress descending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent');
  await page.waitForTimeout(3000);
  await page.locator('//th[contains(@class, "e-headercell")][6]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][6]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Progress ascending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent');
  await page.waitForTimeout(3000);
  await page.locator('//th[contains(@class, "e-headercell")][6]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][6]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][6]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Dependency descending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent');
  await page.waitForTimeout(3000);
  await page.locator('//th[contains(@class, "e-headercell")][7]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][7]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Dependency ascending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent');
  await page.waitForTimeout(3000);
  await page.locator('//th[contains(@class, "e-headercell")][7]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][7]').click();
  await page.waitForTimeout(500);
  await page.locator('//th[contains(@class, "e-headercell")][7]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Multisort ascending
test('16-Multi sort ascending the columns', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'sorting?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  //Sort ascend 1st column
 await page.locator("(//th[contains(@class,'e-headercell')])[1]").click();
  await page.waitForTimeout(100);
  //Sort ascend 2nd column
 await page.locator("(//th[contains(@class,'e-headercell')])[2]").click();
  await page.waitForTimeout(100);
  //Sort ascend 3rd column
  await page.locator("(//th[contains(@class,'e-headercell')])[3]").click();
  await page.waitForTimeout(100);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(500)
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//multisort descending  each column
test('17-Multisort descend each column', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'sorting?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click on the control button to allow for selection of each column
  await page.locator('(//th[contains(@class, "e-headercell")])[1]').click({
    modifiers: ['Control']
  });
  await page.locator('(//th[contains(@class, "e-headercell")])[2]').click({
    modifiers: ['Control']
  });
  await page.locator('(//th[contains(@class, "e-headercell")])[3]').click({
    modifiers: ['Control']
  });
  //Select a record for the columns
  await page.locator('(//th[contains(@class, "e-headercell")])[1]').click({
    modifiers: ['Control']
  });
  await page.locator('(//th[contains(@class, "e-headercell")])[2]').click({
    modifiers: ['Control']
  });
  await page.locator('(//th[contains(@class, "e-headercell")])[3]').click({
    modifiers: ['Control']
  });
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/946127
test('18-946127-Tab action not works', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'sorting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'sorting?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click the parent task.
  await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
  await page.waitForTimeout(500);
  //Click the icon to open the dialog
  await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
  await page.waitForTimeout(300);
  //Click the row till the Tab
  await page.locator('(//td[contains(@class,"e-rowcell")])[7]').click();
  await page.waitForTimeout(500);
  //Press the Tab button
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(2000);
  //Screenshot validation-Tab moves record to the next row.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
