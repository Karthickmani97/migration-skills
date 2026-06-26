import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Filter Column', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Filtering-specific-column');
    await page.waitForTimeout(1000);
    //Filter column
    await page.locator("(//button[text()='Filter Column'])").click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
