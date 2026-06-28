import {test, expect} from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
test('1-Load On Demand initial load', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'load-on-demand?theme=fluent');
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Scroll gantt rows and select child record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'load-on-demand?theme=fluent');
  await page.waitForTimeout(5000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[55]').click();
  await page.waitForTimeout(1000);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[61]').click();
  await page.waitForTimeout(1000);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[67]').click();
  await page.waitForTimeout(1000);
  //await page.locator('(//td[contains(@class,"e-rowcell")])[67]').click();
  //await page.locator('(//td[contains(@class,"e-rowcell")])[74]').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Console error when changed to Touch mode', async ({ page }) => {
  await page.waitForTimeout(1000);
  await page.goto(Helper.baseUrl + 'load-on-demand?theme=fluent');
  await page.waitForTimeout(5000);
  await page.getByLabel('toggle settings menu').click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Touch' }).click();
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-BUG-Console error occurs when expand parent', async ({ page }) => {
  await page.waitForTimeout(1000);
  await page.goto(Helper.baseUrl + 'load-on-demand?theme=fluent');
  await page.waitForTimeout(5000);
  await page.getByLabel('6 Column Header ID', { exact: true }).locator('span').first().click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-BUG-847861-Console error when double click parent', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'load-on-demand?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the parent record on chart side
  await page.locator('(//div[contains(@class,"e-gantt-parent-taskbar")])[1]').dblclick();
  await page.waitForTimeout(2500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Tooltip for child taskbar shown after expand', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'load-on-demand?theme=fluent2');
  await page.waitForTimeout(2000);
  //Click the icon on the parent record to expand it
  await page.locator('(//span[contains(@class," e-treegridcollapse")])[2]').click();
  await page.waitForTimeout(1500);
  //Click the child taskbar to show tooltip
  await page.locator('(//div[contains(@class,"child-taskbar")])[1]').click({force:true});
  await page.waitForTimeout(3200);
  //Screenshot validation-Tooltip shown on the chart side.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});