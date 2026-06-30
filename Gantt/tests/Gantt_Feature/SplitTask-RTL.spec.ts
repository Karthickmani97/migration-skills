import { test, expect } from '@playwright/test';
import { Helper } from '../Helper/helper';

test('1-Split task initial load in rtl sample', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Context menu options on chart side', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div[4]/div').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Split a task into 3 segments and drag taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-gantt-child-progressbar-inner-div e-gantt-child-progressbar ")])[6]').click({
     button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_SplitTask').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Contextmenu options for parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[5]/td/div[2]/div[2]/div/div').click({
     button: 'right'
  });
  await page.waitForTimeout(200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Merge task left through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[7]/td/div[2]/div[4]/div').click({
     button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_MergeTask').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Left').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Merge task right through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div[3]/div').click({
     button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_MergeTask').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Right').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Split task using method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(500);
  await page.locator('#SplitTask').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Merge task using method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(500);
  await page.locator('#MergeTask').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Zoom to fit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(500);
  await page.locator('#Gantt_zoomout').click();
  await page.locator('#Gantt_zoomtofit').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Add above through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[3]/td/div[2]/div[4]/div').click({
     button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Add').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Above').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Add below through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click({
     button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Add').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Below').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Add child through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[3]').click({
     button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Add').click();
  await page.waitForTimeout(1300);
  await page.locator('#Gantt_cmenu_Child').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Add milestone through contextmenu', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[3]').click({
     button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Add').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Milestone').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Convert task to milestone', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[7]/td/div[2]/div[4]/div/div[2]').click({
     button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Convert').click();
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_ToMilestone').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Convert task to milestone and milestone to task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[7]/td/div[2]/div[4]/div/div[2]').click({
     button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Convert').click();
  await page.waitForTimeout(500);
  await page.locator('#Gantt_cmenu_ToMilestone').click();
  await page.waitForTimeout(600);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[7]/td[3]').click({
     button: 'right'
  });
  await page.waitForTimeout(200);
  await page.locator('#Gantt_cmenu_Convert').click();
  await page.waitForTimeout(400);
  await page.locator('#Gantt_cmenu_ToTask').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Delete all segment tasks in one parent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(1000);
  //click the record
  await page.locator('(//td[contains(@class,"rowcell")])[20]').click();
  await page.waitForTimeout(500);
  //Click delete button
  await page.locator('(//span[contains(@class,"delete")])').click();
  await page.waitForTimeout(600);
  //click the child taskbar
  await page.locator('(//div[contains(@class,"e-gantt-child-progressbar-inner-div e-gantt-child-progressbar ")])[3]').click({
     button: 'right'
  });
  await page.waitForTimeout(500);
  //Click Delete Task
  await page.locator("(//li[text()='Delete Task'])").click();
  await page.waitForTimeout(1500);
  //select the row
  await page.locator('(//td[contains(@class,"row")])[2]').click();
  await page.waitForTimeout(500);
  //Press the keyboard
  await page.keyboard.press('Delete');
  await page.waitForTimeout(800);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('17-Sorting record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_header_table"]/thead/tr/th[3]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Filter segment task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/SplitTask-rtl');
  await page.waitForTimeout(800);
  await page.getByTitle('Filter Icon').first().click();
  await page.waitForTimeout(500);
  await page.getByRole('spinbutton', { name: 'Filter Value' }).click();
  await page.waitForTimeout(200);
  await page.getByRole('spinbutton', { name: 'Filter Value' }).fill('3');
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
