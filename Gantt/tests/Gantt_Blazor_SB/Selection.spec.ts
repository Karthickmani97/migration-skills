import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'selection?theme=fluent');
  test.info().annotations.push({ type: 'Sample link', description: 'selection?theme=fluent' });
  await page.waitForTimeout(4000);
});

test('1-Selection initial load', async ({ page }) => {

  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Select a child record at grid side- row single', async ({ page }) => {
  await page.locator('(//td[contains(@class, "e-rowcell")])[16]').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-child record is selected on the grid side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Select a child record at chart side- row single', async ({ page }) => {
  await page.getByLabel('Left task label Market research').first().click();
  await page.waitForTimeout(1000);
  //Screenshot validation-child record is selected on the chart side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Select a row at grid side and collapse record', async ({ page }) => {
  await page.waitForTimeout(1000);
  await page.locator('(//td[contains(@class, "e-rowcell e-ellipsistooltip  e-leftalign e-gridrowindex0Level1")])[1]').click();
  await page.waitForTimeout(500);
  await page.getByRole('gridcell', { name: 'Product concept Column Header Task Name' }).locator('span').first().click();
  await page.waitForTimeout(500);
  await page.getByRole('gridcell', { name: 'Product concept Column Header Task Name' }).locator('span').first().click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Select a row at chart side and collapse record', async ({ page }) => {
  await page.getByRole('gridcell', { name: 'Market research Column Header Task Name' }).locator('span').first().click();
  await page.waitForTimeout(500);
  await page.getByRole('gridcell', { name: 'Market research Column Header Task Name' }).locator('span').first().click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Cell single selection', async ({ page }) => {
  await page.waitForTimeout(500);
  await page.locator('.e-input-group-icon').first().click();
  await page.waitForTimeout(500);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  await page.getByLabel('Defining the target audience Column Header Task Name').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Enable row hover chart side', async ({ page }) => {
  await page.waitForTimeout(1000);
  //Click the Enable Hover to be selected
  await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
  await page.waitForTimeout(1000);
  //Select the row to hover
  await page.locator('(//span[contains(@class, "e-label")])[3]').hover({ force: true });
  await page.waitForTimeout(2000);
  //Screenshot validation-Hover on the chart side of the component 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Enable row hover grid side', async ({ page }) => {
  await page.waitForTimeout(1000);
  //Click the Enable Hover to be selected
  await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
  await page.waitForTimeout(1000);
  //Select the row to hover
  await page.locator('(//td[contains(@class, "e-rowcell")])[2]').hover({ force: true });
  await page.waitForTimeout(2000);
  //Screenshot validation-Hover on the grid side of the component 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Row selection multiple', async ({ page }) => {
  await page.waitForTimeout(1000);
  //Click Type  to select multiple
  await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
  await page.waitForTimeout(500);
  //Press ArrowDown key to select multiple
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  //Press the Enter key to select it 
  await page.keyboard.press("Enter");
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  await page.waitForTimeout(500);
  //Select 1st task name 
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
  await page.waitForTimeout(500);
  //Select the 2 nd task name
  await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
  await page.waitForTimeout(500);
  //Select the 3rd task name
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(2000);
  //Screenshot validation-3 rows records are multi selected on the grid side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Row selection multiple hover grid side', async ({ page }) => {
  await page.waitForTimeout(1000);
  //Click Type  to select multiple
  await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
  await page.waitForTimeout(500);
  //Press ArrowDown key to select multiple
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  //Press the Enter key to select it 
  await page.keyboard.press("Enter");
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  await page.waitForTimeout(500);
  //Select 1st task name 
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
  await page.waitForTimeout(500);
  //Select the 2 nd task name
  await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
  await page.waitForTimeout(500);
  //Select the 3rd task name
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(500);
  //Click the Enable Hover to be selected
  await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
  await page.waitForTimeout(500);
  //Select the row to hover
  await page.locator('(//td[contains(@class, "e-rowcell")])[22]').hover({ force: true });
  await page.waitForTimeout(2000);
  //Screenshot validation-3 rows records are multi selected on the grid side of the component and recoved hovered the grid side
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Cell selection multiple hover grid side', async ({ page }) => {
  await page.waitForTimeout(1000);
  //Click mode to select the cell
  await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
  await page.waitForTimeout(500);
  //Press ArrowDown key to select Cell
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  //Press the Enter key to select it 
  await page.keyboard.press("Enter");
  await page.waitForTimeout(500);
  //Click Type  to select multiple
  await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
  await page.waitForTimeout(500);
  //Press ArrowDown key to select Cell
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  //Press the Enter key to select it 
  await page.keyboard.press("Enter");
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  await page.waitForTimeout(500);
  //Select 1st task name 
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
  await page.waitForTimeout(500);
  //Select the 2 nd task name
  await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
  await page.waitForTimeout(500);
  //Select the 3rd task name
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(500);
  //Click the Enable Hover to be selected
  await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
  await page.waitForTimeout(500);
  //Select the row to hover
  await page.locator('(//td[contains(@class, "e-rowcell")])[22]').hover({ force: true });
  await page.waitForTimeout(2000);
  //Screenshot validation-3 cells records are multi selected on the grid side of the component and recoved hovered the grid side
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Cell selection multiple hover chart side', async ({ page }) => {
  await page.waitForTimeout(1000);
  //Click mode to select the cell
  await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
  await page.waitForTimeout(500);
  //Press ArrowDown key to select Cell
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  //Press the Enter key to select it 
  await page.keyboard.press("Enter");
  await page.waitForTimeout(500);
  //Click Type to select multiple
  await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
  await page.waitForTimeout(500);
  //Press ArrowDown key to select Cell
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  //Press the Enter key to select it 
  await page.keyboard.press("Enter");
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  await page.waitForTimeout(500);
  //Select 1st task name 
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
  await page.waitForTimeout(500);
  //Select the 2 nd task name
  await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
  await page.waitForTimeout(500);
  //Select the 3rd task name
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(500);
  //Click the Enable Hover to be selected
  await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
  await page.waitForTimeout(500);
  //Select the row to hover
  await page.locator('(//td[contains(@class, "e-chart-row")])[1]').hover({ force: true });
  await page.waitForTimeout(2000);
  //Screenshot validation-3 cells records are multi selected on the grid side of the component and recoved hovered the chart side
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Row selection multiple hover chart side', async ({ page }) => {
  await page.waitForTimeout(1000);
  //Click Type  to select multiple
  await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
  await page.waitForTimeout(500);
  //Press ArrowDown key to select multiple
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  //Press the Enter key to select it 
  await page.keyboard.press("Enter");
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  await page.waitForTimeout(500);
  //Select 1st task name 
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
  await page.waitForTimeout(500);
  //Select the 2 nd task name
  await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
  await page.waitForTimeout(500);
  //Select the 3rd task name
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(500);
  //Click the Enable Hover to be selected
  await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
  await page.waitForTimeout(500);
  //Select the row to hover
  await page.locator('(//td[contains(@class, "e-chart-row")])[6]').hover({ force: true });
  await page.waitForTimeout(2000);
  //Screenshot validation-3 rows records are multi selected on the grid side of the component and recoved hovered the chart side
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Auto scroll to taskbar Enabled', async ({ page }) => {
  await page.waitForTimeout(5000);
  //Click to enable Autoscroll
  await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
  await page.waitForTimeout(500);
  //Scroll down the vertical scroll bar
  await page.evaluate("document.querySelectorAll('.e-content')[1].scrollTop=100");
  await page.waitForTimeout(2000);
  //Click the row to select on the chart sie
  await page.locator('(//td[contains(@class, "e-chart-row")])[29]').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Auto scroll to taskbar is enabled and the taskbar is selected on the chart side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Auto scroll to taskbar Enabled Hover', async ({ page }) => {
  await page.waitForTimeout(1000);
  //Click to enable Autoscroll
  await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
  await page.waitForTimeout(500);
  //Scroll down the verticall scroll bar 
  await page.evaluate("document.querySelectorAll('.e-content')[1].scrollTop=100");
  await page.waitForTimeout(500);
  //Click the row to select on the chart sie
  await page.locator('(//td[contains(@class, "e-chart-row")])[29]').click();
  await page.waitForTimeout(500);
  //Click the Enable Hover to be selected
  await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
  await page.waitForTimeout(500);
  //Hover enabled on grid side
  await page.locator('//td[@aria-label="Prototype testing Column Header Task Name"]').hover({ force: true });
  await page.waitForTimeout(2000);
  //Screenshot validation-Auto scroll to taskbar is enabled and hover  the taskbar is selected on the chart side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Cell selection multiple ', async ({ page }) => {
  await page.waitForTimeout(1000);
  //Click mode to select the cell
  await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
  await page.waitForTimeout(500);
  //Press ArrowDown key to select Cell
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  //Press the Enter key to select it 
  await page.keyboard.press("Enter");
  await page.waitForTimeout(500);
  //Click Type to select multiple
  await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
  await page.waitForTimeout(500);
  //Press ArrowDown key to select Cell
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  //Press the Enter key to select it 
  await page.keyboard.press("Enter");
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  await page.waitForTimeout(500);
  //Select 1st task name 
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
  await page.waitForTimeout(500);
  //Select the 2 nd task name
  await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
  await page.waitForTimeout(500);
  //Select the 3rd task name
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(2000);
  //Screenshot validation-Cell multiple selection made
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
