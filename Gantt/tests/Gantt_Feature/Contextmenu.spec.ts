import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Right click on splitter separator', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/contextmenu');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Right click on timeline cell', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/contextmenu');
  await page.waitForTimeout(500);
  await page.getByText('Mar 31, 2019').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Right click on header cell', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/contextmenu');
  await page.waitForTimeout(500);
  await page.locator('div').filter({ hasText: /^Duration$/ }).click({
    button: 'right'
  });
  await page.waitForTimeout(500);
   //Do validation 
  await expect(page.locator('(//ul[contains(@class, "e-control e-contextmenu e-lib e-menu-parent")])')).toBeVisible();
  await page.waitForTimeout(1000);
  //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/854064
//Add milestone
test('4-BUG-854064-When record is added as milestone', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/854064-context-menu');
  await page.waitForTimeout(1200);
  await page.locator('(//td[contains(@class,"e-rowcell ")])[47]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Hover on Add
  await page.locator('(//li[contains(@class,"e-menu-item ")])[12]').click();
  await page.waitForTimeout(1000);
  //Click Milestone
  await page.locator('(//li[contains(@class,"e-menu-item ")])[14]').click();
  await page.waitForTimeout(1200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Convert to milestone
test('5-BUG-854064-When record is added as milestone', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/854064-context-menu');
  await page.waitForTimeout(1200);
  await page.locator('(//td[contains(@class,"rowcell ")])[56]').click({
    button: 'right'
  });
  await page.waitForTimeout(1200);
  //Click on Add button to show the  context menu for Milestone
  await page.locator('(//li[text()="Add"])').click();
  await page.waitForTimeout(1000);
  //Click on Milestone
  await page.locator('(//li[text()="Milestone"])').click();
  await page.waitForTimeout(1200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

