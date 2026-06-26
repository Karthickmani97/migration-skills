import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
  launchOptions: {
    ignoreDefaultArgs: [], // Disable the scrollbar argument
  },
});

test('1-AutoFill all columns', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Autofill all columns
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click on Name
  await page.locator('(//th[contains(@class,"e-headercell")])[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(500);
  //Click AutoFill all columns
  await page.locator('(//li[contains(@class,"e-menu-item")])[1]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Autofit columns', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Autofit columns 
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click on End date
  await page.locator('(//th[contains(@class,"e-headercell")])[4]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Click Autofit all columns
  await page.locator('(//li[contains(@class,"e-menu-item")])[2]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Sort Ascending ID ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Sort Ascending
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click on ID 
  await page.locator('(//th[contains(@class,"e-headercell")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Click sort asecending
  await page.locator('(//li[contains(@class,"e-menu-item")])[3]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Sort Descending ID ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Sort Descending
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click on ID 
  await page.locator('(//th[contains(@class,"e-headercell")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Click sort descending
  await page.locator('(//li[contains(@class,"e-menu-item")])[4]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Task information for records ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Checking on Task information for parent record
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click parent record
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Click the Task information to show the dialog tab for it.
  await page.locator('(//li[contains(@class,"e-menu-item")])[5]').click();
  await page.waitForTimeout(500);
  await page.locator('#TaskName').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Delete task for the records ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Delete task for child record
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click on child record
  await page.locator('(//td[contains(@class,"e-rowcell")])[10]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Click on the task
  await page.locator('(//li[contains(@class,"e-menu-item")])[6]').click();
  await page.waitForTimeout(500);
  //Click ok to delete the task
  await page.locator('(//button[contains(@class,"e-control")])[10]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Outdent child records', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Outdent child record
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click on child record
  await page.locator('(//td[contains(@class,"e-rowcell")])[10]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //outdent
  await page.locator('(//li[contains(@class,"e-menu-item")])[8]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Convert child record to Milestone', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Convert the child record to Milestone
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click child record
  await page.locator('(//td[contains(@class,"e-rowcell")])[10]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Click convert
  await page.locator('(//li[contains(@aria-label,"Convert")])').click();
  await page.waitForTimeout(1000);
  //Click Milestone
  await page.locator('(//li[contains(@aria-label,"To Milestone")])').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Convert Milestone to Task', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Convert the child record to Milestone
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click child record
  await page.locator('(//td[contains(@class,"e-rowcell")])[42]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Hover on  convert
  await page.locator('(//li[contains(@class,"e-menu-item")])[14]').click();
  await page.waitForTimeout(1000);
  //Click to convert to Task
  await page.locator('(//ul[contains(@class,"e-menu-parent e-ul")])[1]').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('10-Indent child records', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Indent child record
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click on child record
  await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Indent record
  await page.locator('(//li[contains(@class,"e-menu-item")])[7]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Delete Dependency record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Delete Dependency
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click on child record
  await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Delete dependency
  await page.locator('(//li[contains(@class,"e-menu-item")])[9]').click();
  await page.waitForTimeout(1000);
  //Click on the dependency to be deleted.
  await page.locator('(//li[contains(@class,"e-menu-item")])[16]').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Add the data records Above', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Add Records Above
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click on child record
  await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Hover on Add
  await page.locator('(//li[contains(@class,"e-menu-item")])[15]').hover();
  await page.waitForTimeout(1000);
  //Click Above
  await page.locator('(//li[contains(@class,"e-menu-item")])[16]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Add the data records Below', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Add data Records Below
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click on child record
  await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Hover on Add
  await page.locator('(//li[contains(@class,"e-menu-item")])[15]').hover();
  await page.waitForTimeout(1000);
  //Click below
  await page.locator('(//li[contains(@class,"e-menu-item")])[17]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Add the data records for child record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Add data Records to Add Child 
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(4000);
  //Click on child record
  await page.locator('(//td[contains(@class,"rowcell")])[26]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Click on Add
  await page.locator("(//li[text()='Add'])").click();
  await page.waitForTimeout(1000);
  //Click the child 
  await page.locator("(//li[text()='Child'])").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('15-Add the data records to Milestone', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(1000);
  //Click on child record
  await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Hover on Add
  await page.locator('(//li[text()="Add"])').hover();
  await page.waitForTimeout(1000);
  //Click milestone 
  await page.locator('(//li[text()="Milestone"])[1]').click();
  await page.waitForTimeout(1200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Delete record using the toolbar', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Delete the selected record
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(1000);
  //Click the child record
  await page.locator('(//td[contains(@class,"e-rowcell")])[18]').click();
  await page.waitForTimeout(500);
  //Delete
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(500);
  //Click ok to delete
  await page.locator('(//button[contains(@class,"e-control ")])[10]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Edit record using the toolbar', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Edit the selected record
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(1000);
  //Click the child record
  await page.locator('(//td[contains(@class,"e-rowcell")])[18]').click();
  await page.waitForTimeout(500);
  //Click on Edit button 
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[2]').click();
  await page.waitForTimeout(500);
  //Edit child record when dialog is opened.
  await page.locator('(//input[contains(@class,"e-control ")])[2]').click();
  await page.waitForTimeout(500);
  //Press the keyboard Control+A to select it
  await page.keyboard.press('Control+A');
  //Press Backspace on keyboard to clear the data
  await page.keyboard.press('Backspace');
  //Fill the record
  await page.locator('(//input[contains(@class,"e-control ")])[2]').fill('Target Audience');
  //Click to save
  await page.locator('(//button[contains(@class,"e-control ")])[11]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Add and save record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Add record
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(1000);
  //Click Add button
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
  await page.waitForTimeout(500);
  //Click save
  await page.locator('(//button[contains(@class,"e-control ")])[11]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Collapse all record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Collapse record
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(1000);
  //Click Collapse
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Expand all record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  //Expand all record
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(1000);
  //Click Collapse all
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
  await page.waitForTimeout(500);
  //Click on expand all
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[6]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Notes
test('21-Click to show the Notes dialog Tab', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Notes dialog tab should be visible when click to open it.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/855236/
test('22-Insert image Tab in Notes', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(500);
  //Click the icon for insert image
  await page.locator("(//span[contains(@class,'image')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Insert image tab should should be visible after Notes dialog tab is opened.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('23-Add new record in notes tab and bold the text', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(500);
  //Press the keyboard and type the record
  await page.keyboard.type('Notes');
  await page.waitForTimeout(500);
  //Press the keyboard to select all the record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(200);
  //Press the keyboard to bold the record
  await page.keyboard.press('Control+B');
  await page.waitForTimeout(500);
  //Press keyboard arrowdown to deselect
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  //Screenshot validation-When add new text and press the keyboard to Bold the text , the added text should be in bold letters
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('24-Add new record in notes tab and Italicize the text', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard and type the record
  await page.keyboard.type('Italic');
  await page.waitForTimeout(500);
  //Press the keyboard to select allthe record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(200);
  //Press the keyboard to italicize the record , control+I
  await page.keyboard.press('Control+I');
  await page.waitForTimeout(1000);
  //Press keyboard arrowdown to deselect
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  //Screenshot validation-The added text when press on the keyboard , it should apppear in italics.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Insert Link Tab in Notes', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(800);
  //Click the icon for insert link
  await page.locator("(//span[contains(@class,'link')])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Insert link tab should be visible when clicked after open the notes dialog Tab.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Click to Cancel the Notes dialog Tab', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(500);
  //Click cancel
  await page.locator("(//button[text()='Cancel'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The records should be reverted after click the cancel button and the child taskbar records be the same.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Add new text to Notes and save the record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard the tab to select to add record
  await page.keyboard.press('Tab');
  await page.waitForTimeout(5000);
  //Press the keyboard and type the record
  await page.keyboard.type('Notes');
  await page.waitForTimeout(500);
  //Click  save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The added text in notes should be saved when click on the save button.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Underline the added text in Notes dialog tab', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard and type the record
  await page.keyboard.type('Underline');
  await page.waitForTimeout(500);
  //Press the keyboard to select the record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(100);
  //Press the keyboard to Underline the text
  await page.keyboard.press('Control+U');
  await page.waitForTimeout(1000);
  //Press keyboard arrowdown to deselect
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  //Screenshot validation-The text added in notes dialog tab should be underlined after perfoming the keyboard action ,Control+U
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Strike through the added text added in Notes', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard and type the record
  await page.keyboard.type('Define the product usage');
  await page.waitForTimeout(500);
  //Press the keyboard to select all the record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(200);
  //Press the keyboard to strike through the added text
  await page.keyboard.press('Control+Shift+S');
  await page.waitForTimeout(1000);
  //Press keyboard arrowdown to deselect
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  //Screenshot validation- The text added in notes dialog tab should be striked through after performing the keyboard action press Control+Shift+S
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Undo the record already added and Redo in Notes', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard and type the record
  await page.keyboard.type('testing and feedback');
  await page.waitForTimeout(500);
  //Click the Undo button
  await page.locator("(//span[contains(@class,'undo')])").click();
  await page.waitForTimeout(500);
  //Click redo button
  await page.locator("(//span[contains(@class,'redo')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The recorded added and then undone should be visible again after click of redo button to show the text once more.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Undo the record already added in Notes', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard and type the record
  await page.keyboard.type('Customer testing and feedback');
  await page.waitForTimeout(500);
  //Click the Undo button
  await page.locator("(//span[contains(@class,'undo')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Notes Tab to not show added record
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Lowercases in Notes dialog tab', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard and type the record
  await page.keyboard.type('CUSTOMER STRENGTH');
  await page.waitForTimeout(500);
  //Press the keyboard to select all the record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Press the keyboard to lower the cases
  await page.keyboard.press('Control+Shift+L');
  await page.waitForTimeout(500);
  //Press keyboard arrowdown to deselect
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  //Screenshot validation-The text added should be in lowercases after performing the action on keyboard press Control+Shift+L
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-The text added in superscript in Notes', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard and type the record
  await page.keyboard.type('market opportunity analysis');
  await page.waitForTimeout(500);
  //Press the keyboard to select all the record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Press the keyboard to have superscript
  await page.keyboard.press('Control+Shift+=');
  await page.waitForTimeout(500);
  //Press keyboard arrowdown to deselect
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  //Screenshot validation-The text should be in Superscript format after press the keyboard Control+Shift+=
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('34-Changed the text in subcript in Notes', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard and type the record
  await page.keyboard.type('Concept approval');
  await page.waitForTimeout(500);
  //Press the keyboard to select all the record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Press the keyboard to have subscript
  await page.keyboard.press('Control+=');
  await page.waitForTimeout(500);
  //Press keyboard arrowdown to deselect
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  //Screenshot validation-Text should be in subscript format after press the keyboard actions Control+=
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('35-Numbered List the text  in Notes', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard and type the record
  await page.keyboard.type('Concept approval');
  await page.waitForTimeout(500);
  //Press the keyboard to select all the record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Press the keyboard to have have numbered list
  await page.keyboard.press('Control+Shift+O');
  await page.waitForTimeout(500);
  //Press keyboard arrowdown to deselect
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  //Screenshot validation-Text should have a number before the text added 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Bulleted List for the  text  in Notes', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard and type the record
  await page.keyboard.type('Research completed');
  await page.waitForTimeout(500);
  //Press the keyboard to select all the record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Press the keyboard to have bulleted list
  await page.keyboard.press('Control+Alt+O');
  await page.waitForTimeout(500);
  //Press keyboard arrowdown to deselect
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  //Screenshot validation-Text should have a bullet before the text after it is added
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Decrease indent for the records in Notes', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard and type the record
  await page.keyboard.type('Develop design to meet industry');
  await page.waitForTimeout(500);
  //Press the keyboard to select all the record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Press keyboard to increase indent 
  await page.keyboard.press('Control+]');
  await page.waitForTimeout(500);
  //Press the keyboard to have decreased indent
  await page.keyboard.press('Control+[');
  await page.waitForTimeout(500);
  //Press keyboard arrowdown to deselect
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  //Screenshot validation-The record added should appear indented but decreased, it should be near the edge.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Increased indent for the records in Notes', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard and type the record
  await page.keyboard.type('CAM - Computer Aided Manufacturing');
  await page.waitForTimeout(500);
  //Press the keyboard to select all the record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Press keyboard to increase indent 
  await page.keyboard.press('Control+]');
  await page.waitForTimeout(500);
  //Press keyboard arrowdown to deselect
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  //Screenshot validation-The record added should appear indented but increased, it should be far from the edge of the dialog tab.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Format the records in Notes dialog tab', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard and type the record
  await page.keyboard.type('Assembling material to finished goods');
  await page.waitForTimeout(500);
  //Press the keyboard to select all the record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Press keyboard to increase indent 
  await page.keyboard.press('Control+]');
  await page.waitForTimeout(500);
  //Press the keyboard to select all the record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Clear format
  await page.keyboard.press('Control+Shift+R');
  await page.waitForTimeout(500);
  //Press keyboard arrowdown to deselect
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  //Screenshot validation-The records texts  added should be formated and appear on its original form after selecting it to be indented
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Change the text to be in Code view in Notes', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard and type the record
  await page.keyboard.type('Address any unforeseen issue');
  await page.waitForTimeout(500);
  //Press the keyboard to select all the record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Press the keyboard to to change 
  await page.keyboard.press('Control+Shift+H');
  await page.waitForTimeout(500);
  //Press keyboard arrowdown to deselect
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  //Screenshot validation-When click on code view the selected text should be visible in code view format
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Uppercases in Notes dialog tab', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard and type the record
  await page.keyboard.type('Address any unforeseen issue');
  await page.waitForTimeout(500);
  //Press the keyboard to select all the record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Press the keyboard to Upper the cases
  await page.keyboard.press('Control+Shift+U');
  await page.waitForTimeout(500);
  //Press keyboard arrowdown to deselect
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  //Screenshot validation-The selected text record should all be in uppercases after press the keyboard ,Control+Shift+U
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('42-Text in Notes tab not clearly visible', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the taskbar child to open the dialog
  await page.locator("(//div[contains(@class,'child')])[2]").dblclick();
  await page.waitForTimeout(1000);
  //Click to open notes dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
  await page.waitForTimeout(1000);
  //Click to select for record to add
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(1000);
  //Press the keyboard and type the record
  await page.keyboard.type('Text');
  await page.waitForTimeout(500);
  //Press the keyboard to select all the record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Press the keyboard to hided 
  await page.keyboard.press('Control+Shift+H');
  await page.waitForTimeout(500);
  //Press keyboard arrowdown to deselect
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  //Screenshot validation-The selected text record are hidden after press the keyboard ,Control+Shift+H
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/936351
test('43-936351-Context Menu Items Not Displayed', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'context-menu?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Double click taskname
  await page.locator('(//td[contains(@class,"rowcell")])[2]').dblclick();
  await page.waitForTimeout(1000);
  //Click the clear record
  await page.locator('(//td[contains(@class,"rowcell")])[3]').click({
    button: 'right'
  });
  await page.waitForTimeout(2000);
  //Screenshot validation-Context menu is displayed properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/936420
test('44-936420-Record not added', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'context-menu?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'context-menu?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click Add button
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(800);
  //Click record to select
  await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
  await page.waitForTimeout(1000);
  //press the insert button
  await page.keyboard.press('Insert');
  await page.waitForTimeout(2000);
  //Screenshot validation-Record is added in the correct position
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
