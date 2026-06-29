import { test, expect } from '@playwright/test';
import { Helper } from '../Helper/helper';

test('1-Scroll horizontally and zoom-to-fit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/rtl');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Scroll-Task' }).click();
  await page.getByRole('button', { name: 'Zoom to fit' }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-NextTimeSpan and zoom-to-fit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/rtl');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Next timespan' }).click();
  await page.getByRole('button', { name: 'Zoom to fit' }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Scroll and change the Holidays and Zoom Out', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/rtl');
  await page.waitForTimeout(500);
  //Scroll
  await page.locator('#Scroll_Taskbar').click();
  await page.waitForTimeout(600);
  //Change holidays
  await page.locator('#holidays').click();
  await page.waitForTimeout(300);
  //Click Zoom out on the toolbar
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[12]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Adding new record checking on Previous Timespan', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/rtl');
  await page.waitForTimeout(500);
  //Add new record
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
  await page.waitForTimeout(200);
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(1000);
  //Previous Timespan 
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[9]').click();
  await page.waitForTimeout(200);
  //Click record to Edit
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___TaskName').fill('New');
  await page.waitForTimeout(200);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Delete the new added task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/rtl');
  await page.waitForTimeout(500);
  //Add new task
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
  await page.waitForTimeout(200);
  //Edit the startdate
  await page.locator('(//input[contains(@class,"e-control")])[3]').click();
  await page.waitForTimeout(200);
  await page.locator('(//input[contains(@class,"e-control")])[3]').fill('02/03/2019');
  //Press Enter on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  //Scroll-Task
  await page.locator('#Scroll_Taskbar').click();
  await page.waitForTimeout(1000);
  //Delete the added new task
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
  await page.waitForTimeout(200);
  //Delete
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[3]').click();
  await page.waitForTimeout(200);
  //Click ok button 
  await page.locator('(//button[contains(@class,"e-control")])[13]').click();
  await page.waitForTimeout(800);
  await page.locator('(//td[contains(@class,"e-rowcell")])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Cancel the dependency record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/rtl');
  await page.waitForTimeout(500);
  //Click the parent taskbar
  await page.locator('(//div[contains(@class,"e-gantt-parent-taskbar")])[1]').dblclick();
  await page.waitForTimeout(200);
  //Click the dependency to open its dialog tab
  await page.locator('(//div[contains(@class,"e-tab-text")])[2]').click();
  await page.waitForTimeout(200);
  //Add button on the dependency dialog tab
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[13]').click();
  //Dependency dropdown
  await page.locator('(//span[contains(@class,"e-icons")])[123]').click();
  await page.waitForTimeout(200);
  //New dependency added
  await page.locator('(//li[contains(@class,"e-list-item")])[1]').click();
  await page.waitForTimeout(200);
  //Cancel the added dependency data
  await page.locator('(//button[contains(@class,"e-control")])[17]').click();
  await page.waitForTimeout(200);
  //Change Holidays
  await page.locator('#holidays').click();
  await page.waitForTimeout(200);
  //The second parent taskbar on chart
  await page.locator('(//div[contains(@class,"e-gantt-parent-taskbar")])[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Indent
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[6]').click();;
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Insert Add Action', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/RTL');
  await page.waitForTimeout(500);
  //Click the record
  await page.locator('(//td[contains(@class, "e-rowcell ")])[2]').click();
  await page.waitForTimeout(200);
  //Press the Insert key
  await page.keyboard.press('Insert');
  await page.waitForTimeout(1000);
  //Screenshot validation-New record is inserted
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Delete child record through keybaord', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/RTL');
  await page.waitForTimeout(500);
  //Click the record
  await page.locator('(//td[contains(@class, "e-rowcell ")])[18]').click();
  await page.waitForTimeout(200);
  //Press the Delete key
  await page.keyboard.press('Delete');
  await page.waitForTimeout(800);
  //Click the Ok button
  await page.locator("(//button[text()='OK'])[1]").click();
  await page.waitForTimeout(800);
  //Screenshot validation-New record is inserted
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Delete Parent record through keybaord', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/RTL');
  await page.waitForTimeout(500);
  //Click the record
  await page.locator('(//td[contains(@class, "e-rowcell ")])[2]').click();
  await page.waitForTimeout(200);
  //Press the Delete key
  await page.keyboard.press('Delete');
  await page.waitForTimeout(800);
  //Click the Ok button
  await page.locator("(//button[text()='OK'])[1]").click();
  await page.waitForTimeout(800);
  //Screenshot validation-New record is inserted
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});