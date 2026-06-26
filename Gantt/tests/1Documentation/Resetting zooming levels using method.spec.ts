import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Reset Zoom', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resetting-zooming-levels');
  await page.waitForTimeout(1000);
  //Reset Zoom
  await page.locator("(//button[text()='Reset Zoom'])").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Zoom In ', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resetting-zooming-levels');
  await page.waitForTimeout(1000);
  //Zoom In
  await page.locator('(//span[contains(@class, "zoomin")])').click();
  await page.waitForTimeout(500);
  //Reset Zoom
  await page.locator("(//button[text()='Reset Zoom'])").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Zoom Out', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resetting-zooming-levels');
  await page.waitForTimeout(1000);
  //Zoom out
  await page.locator('(//span[contains(@class, "zoomout")])').click();
  await page.waitForTimeout(500);
  //Reset Zoom
  await page.locator("(//button[text()='Reset Zoom'])").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Zoom to Fit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resetting-zooming-levels');
  await page.waitForTimeout(1000);
  //Zoom to fit
  await page.locator('(//span[contains(@class, "zoomtofit")])').click();
  await page.waitForTimeout(500);
  //Reset Zoom
  await page.locator("(//button[text()='Reset Zoom'])").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Collapse all , Zoom to Fit and Reset Zoom', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resetting-zooming-levels');
  await page.waitForTimeout(1000);
  //Collapse all the records , first parent record
  await page.locator('(//span[contains(@class, "icons")])[4]').click();
  await page.waitForTimeout(1000);
  //Collapse the second parent record
  await page.locator('(//span[contains(@class, "icons")])[6]').click();
  await page.waitForTimeout(1000);
  //Zoom to fit
  await page.locator('(//span[contains(@class, "zoomtofit")])').click();
  await page.waitForTimeout(1000);
  //Reset Zoom
  await page.locator("(//button[text()='Reset Zoom'])").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
