import {test, expect} from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
      ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
  });

    test('1-Row Height initial load', async ({ page }) => {
        await page.goto(Helper.baseUrl + 'row-height?theme=fluent');
        await page.waitForTimeout(5000);
        expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    });

    test('2-Row Height big icon ', async ({ page }) => {
        await page.goto(Helper.baseUrl + 'row-height?theme=fluent');
        await page.waitForTimeout(4000);
        //Select big icon for row height
        await page.locator('(//span[contains(@class,"e-big-icon")])[1]').click();
        await page.waitForTimeout(5000);
        expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    });

    test('3-Row Height medium', async ({ page }) => {
        await page.goto(Helper.baseUrl + 'row-height?theme=fluent');
        await page.waitForTimeout(4000);
        //Select medium icon for row height
        await page.locator('(//span[contains(@class,"e-medium-icon")])[1]').click();
        await page.waitForTimeout(5000);
        expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    });

    test('4-Row Height small icon', async ({ page }) => {
        await page.goto(Helper.baseUrl + 'row-height?theme=fluent');
        await page.waitForTimeout(4000);
        //Select small icon for row height
        await page.locator('(//span[contains(@class,"e-small-icon")])[1]').click();
        await page.waitForTimeout(5000);
        expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    });
