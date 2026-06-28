import {test, expect} from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
test('1-Tab key navigation', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'taskbar-template?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[7]').click();
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

