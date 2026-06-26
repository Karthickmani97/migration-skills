import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
  launchOptions: {
    ignoreDefaultArgs: [], // Disable the scrollbar argument
  },
});

test('1-Column menu initial load', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Autofit all columns', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
  await page.waitForTimeout(1000);
  await page.locator('(//li[contains(@class, "e-menu-item")])[1]').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Autofit this column', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
  await page.waitForTimeout(1000);
  await page.locator('(//li[contains(@class, "e-menu-item")])[2]').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Sort ascending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
  await page.waitForTimeout(1000);
  await page.locator('(//li[contains(@class, "e-menu-item")])[3]').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Sort descending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
  await page.waitForTimeout(1000);
  await page.locator('(//li[contains(@class, "e-menu-item")])[4]').click();
  await page.waitForTimeout(2500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Columns disable', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
  await page.waitForTimeout(1000);
  await page.locator('(//li[contains(@class,"e-menu-item")])[5]').hover();
  await page.waitForTimeout(1000);
  await page.locator('(//li[contains(@class,"e-menu-item")])[7]').click();
  await page.waitForTimeout(300);
  await page.locator('(//li[contains(@class,"e-menu-item")])[9]').click();
  await page.waitForTimeout(1000);
  await page.locator('(//td[contains(@role, "gridcell")])[32]').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Enabling columns', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Select the column menu
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
  await page.waitForTimeout(1000);
  //Select columns
  await page.locator('(//li[contains(@class,"e-menu-item")])[5]').click();
  await page.waitForTimeout(1000);
  //Start date enable
  await page.locator('(//li[contains(@class,"e-menu-item")])[9]').click();
  await page.waitForTimeout(300);
  //ID enable
  await page.locator('(//li[contains(@class,"e-menu-item")])[7]').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Filter menu open', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click to select the column menu
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
  await page.waitForTimeout(1000);
  //Hover over the filter for the filter menu to open
  await page.locator('(//li[contains(@class, "e-menu-item")])[6]').hover();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Column menu focusing out', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click to select the column menu
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
  await page.waitForTimeout(1000);
  //Click on the child record to focus out
  await page.locator('(//td[contains(@role, "gridcell")])[23]').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Filter menu focusing out', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click to select the column menu
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
  await page.waitForTimeout(1000);
  //Hover over the filter menu
  await page.locator('(//li[contains(@class, "e-menu-item")])[6]').hover();
  await page.waitForTimeout(1000);
  //Click on the child record to focus out
  await page.locator('(//td[contains(@role, "gridcell")])[16]').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('11-Filtering parent record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click to slect the column menu
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
  await page.waitForTimeout(1000);
  //Hover over the filter menu
  await page.locator('(//li[contains(@class, "e-menu-item")])[6]').hover();
  await page.waitForTimeout(1000);
  //Click on the input
  await page.locator('//input[contains(@class, "e-control e-numerictextbox e-lib e-input")]').click();
  //Enter the value on the input
  await page.locator('//input[contains(@class, "e-control e-numerictextbox e-lib e-input")]').fill('6');
  //Filter the record ,click the filter button
  await page.locator('(//button[contains(@class, "e-control")])[3]').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Filtering child record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click to slect the column menu
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
  await page.waitForTimeout(1000);
  //Hover over the filter menu
  await page.locator('(//li[contains(@class, "e-menu-item")])[6]').hover();
  await page.waitForTimeout(1000);
  //Click on the input
  await page.locator('//input[contains(@class, "e-control e-numerictextbox e-lib e-input")]').click();
  //Enter the value on the input
  await page.locator('//input[contains(@class, "e-control e-numerictextbox e-lib e-input")]').fill('8');
  //Filter the record ,click the filter button
  await page.locator('(//button[contains(@class, "e-control")])[3]').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('13-Collapse the records', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the parent record to collapse the record
  await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//multisort ascend each column
test('14-Multisort Ascend each column', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Press the Control key on the keyboard
  await page.keyboard.down("Control");
  //Click the column menu
  await page.locator("(//th[contains(@class,'e-headercell')])[1]").click();
  await page.waitForTimeout(200);
  //Select the column
  await page.locator("(//th[contains(@class,'e-headercell')])[2]").click();
  await page.waitForTimeout(200);
  //Select the column
  await page.locator("(//th[contains(@class,'e-headercell')])[3]").click();
  //Select the column
  await page.waitForTimeout(200);
  await page.locator("(//th[contains(@class,'e-headercell')])[4]").click();
  await page.waitForTimeout(500);
  //Let up the keyboard pressed 
  await page.keyboard.up("Control");
  await page.waitForTimeout(200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//multisort descending  each column
test('15-Multisort descend each column', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//th[contains(@class, "e-headercell")])[1]').click({
    modifiers: ['Control']
  });
  await page.locator('(//th[contains(@class, "e-headercell")])[2]').click({
    modifiers: ['Control']
  });
  await page.locator('(//th[contains(@class, "e-headercell")])[3]').click({
    modifiers: ['Control']
  });
  await page.locator('(//th[contains(@class, "e-headercell")])[4]').click({
    modifiers: ['Control']
  });
  //Select a record  
  await page.locator('(//th[contains(@class, "e-headercell")])[1]').click({
    modifiers: ['Control']
  });
  await page.locator('(//th[contains(@class, "e-headercell")])[2]').click({
    modifiers: ['Control']
  });
  await page.locator('(//th[contains(@class, "e-headercell")])[3]').click({
    modifiers: ['Control']
  });
  await page.locator('(//th[contains(@class, "e-headercell")])[4]').click({
    modifiers: ['Control']
  });
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Collapse the records,Sort the records', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the parent record to collapse the record
  await page.locator('(//span[contains(@class,"e-treegridexpand")])[5]').click();
  await page.waitForTimeout(500);
  //Press the keyboard down
  await page.keyboard.down("Control");
  //Sort the second column header
  await page.locator("(//th[contains(@class,'e-headercell')])[2]").click();
  await page.waitForTimeout(500);
  //Let up the keyboard pressed 
  await page.keyboard.up("Control");
  //Click the column menu 
  await page.locator('(//div[contains(@class,"columnmenu")])[2]').click();
  await page.waitForTimeout(500);
  //Click the Filter button
  await page.locator('(//li[contains(@class,"menu")])[6]').click();
  await page.waitForTimeout(500);
  //Enter the records
  await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('Functionality design');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Click the Filter button
  await page.locator("(//button[text()='Filter'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Record is filtered and column header sorted in ascending state
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Sort progress in descending and deselect', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the column menu for progress
  await page.locator('(//div[contains(@class,"columnmenu")])[6]').click();
  await page.waitForTimeout(500);
  //Click to select the columns 
  await page.locator("(//li[text()='Columns'])[1]").click();
  await page.waitForTimeout(500);
  //Click to deselect start date
  await page.locator("(//span[text()='Start Date'])[2]").click();
  await page.waitForTimeout(500);
  //Click to deselect Enddate
  await page.locator("(//span[text()='End Date'])[2]").click();
  await page.waitForTimeout(500);
  //Click to deselect Duration
  await page.locator("(//span[text()='Duration'])[2]").click();
  await page.waitForTimeout(500);
  //Click to deselect progress
  await page.locator("(//span[text()='Progress'])[2]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The columns are deselcted and progress header sorted in descending
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Autofill all columns and Filter startdate', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the column menu for progress
  await page.locator('(//div[contains(@class,"columnmenu")])[6]').click();
  await page.waitForTimeout(500);
  //Click to select Autofit all columns
  await page.locator('(//li[contains(@class,"menu")])[1]').click();
  await page.waitForTimeout(500);
  //Click to select column menu for start date
  await page.locator('(//div[contains(@class,"columnmenu")])[3]').click();
  await page.waitForTimeout(500);
  //Click the Filter to show column 
  await page.locator('(//li[contains(@class,"menu")])[6]').click();
  await page.waitForTimeout(500);
  //Click to Enter the input for start date
  await page.locator('(//input[contains(@class,"control")])[2]').fill('4/19/2021');
  await page.waitForTimeout(500);
  //Click Filter button
  await page.locator("(//button[text()='Filter'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-All columns are Autofited and Startdate Filtered.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Autofit this column and Filter End date', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the column menu for End date
  await page.locator('(//div[contains(@class,"columnmenu")])[4]').click();
  await page.waitForTimeout(500);
  //Click to select Autofit this column
  await page.locator('(//li[contains(@class,"menu")])[2]').click();
  await page.waitForTimeout(500);
  //Click to select column menu for start date
  await page.locator('(//div[contains(@class,"columnmenu")])[4]').click();
  await page.waitForTimeout(500);
  //Click the Filter to show column 
  await page.locator('(//li[contains(@class,"menu")])[6]').click();
  await page.waitForTimeout(500);
  //Click to select to show the dropdown 
  await page.locator('(//span[contains(@class,"e-input")])[2]').click();
  await page.waitForTimeout(500);
  //Click to select Null
  await page.locator("(//li[text()='Null'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-End date Column is autofited and filtered to have Null value.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Autofit this column and Filter End date', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the column menu for End date
  await page.locator('(//div[contains(@class,"columnmenu")])[4]').click();
  await page.waitForTimeout(500);
  //Click to select Autofit this column
  await page.locator('(//li[contains(@class,"menu")])[2]').click();
  await page.waitForTimeout(500);
  //Click to select column menu for start date
  await page.locator('(//div[contains(@class,"columnmenu")])[4]').click();
  await page.waitForTimeout(500);
  //Click the Filter to show column 
  await page.locator('(//li[contains(@class,"menu")])[6]').click();
  await page.waitForTimeout(500);
  //Click to select to show the dropdown 
  await page.locator('(//span[contains(@class,"e-input")])[2]').click();
  await page.waitForTimeout(500);
  //Click to select Less Than Or Equal
  await page.locator("(//li[text()='Less Than Or Equal'])[1]").click();
  await page.waitForTimeout(500);
  //Click to Enter the input for End date
  await page.locator('(//input[contains(@class,"control")])[2]').fill('4/28/2021');
  await page.waitForTimeout(500);
  //Click Filter button
  await page.locator("(//button[text()='Filter'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-End date Column is autofited and filtered to have Less Than Or Equal
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903087/
test('21-BUG-903087-Visibility Issue when Hover', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the the settings button
  await page.locator('(//span[contains(@class, "sb-settings sb-icons sb-icon-settings-preferences")])').click();
  await page.waitForTimeout(1000);
  //Click the Touch button
  await page.locator('(//div[contains(@class, "sf-preference-touch-btn")])[1]').click();
  await page.waitForTimeout(1000);
  //Click to select the column menu
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
  await page.waitForTimeout(1000);
  //Hover over the column menu
  await page.locator('(//li[contains(@class, "e-menu-caret-icon")])[1]').hover();
  await page.waitForTimeout(1000);
  //Hover over the checkbox for ID
  await page.mouse.move(493, 434);
  await page.waitForTimeout(2000);
  //Screenshot validation-The records hovered on are visible
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/991624
test('22-991624', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'column-menu?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'column-menu?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the column menu icon on the ID column header
  const columnMenuIcon = page.locator('(//div[contains(@class,"e-columnmenu")])[1]');
  await columnMenuIcon.waitFor({ state: 'visible' });
  await columnMenuIcon.click();
  await page.waitForTimeout(500);
  // Hover over the Filter menu item (has a > caret) to open its flyout dialog
  const filterMenuItem = page.locator('(//span[contains(@class,"e-menu-icon e-icons e-icon-filter")])[1]');
  await filterMenuItem.waitFor({ state: 'visible' });
  await filterMenuItem.hover();
  await page.waitForTimeout(1000);
  // Wait for the filter flyout panel to appear then select Greater Than from the operator dropdown
  const operatorDropdown = page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[1]');
  await operatorDropdown.waitFor({ state: 'visible' });
  await operatorDropdown.click();
  await page.waitForTimeout(500);
  // Select Greater Than
  await page.locator("(//li[text()='Greater Than'])[1]").click();
  await page.waitForTimeout(500);
  // Click the Filter Value input and type 11
  const filterValueInput = page.locator('//input[@aria-label="Filter Value"]');
  await filterValueInput.waitFor({ state: 'visible' });
  await filterValueInput.click();
  await page.waitForTimeout(300);
  await page.keyboard.type('11');
  await page.waitForTimeout(500);
  // Click the Filter button to apply
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(2000);
  // Screenshot validation - ID column filtered with Greater Than 11
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});