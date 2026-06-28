import {test, expect} from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
test('1-Resizing initial load', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-resizing?theme=fluent');
    await page.waitForTimeout(5000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Resize the ID column', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-resizing?theme=fluent');
    await page.waitForTimeout(4000);
    //Resize the ID column
    await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[1]').click();
    await page.waitForTimeout(1000);
    await page.mouse.down();
    await page.mouse.move(425, 292);
    await page.mouse.move(518, 277);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Resize the name column', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-resizing?theme=fluent');
    await page.waitForTimeout(4000);
    //Resize the name column
    await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[2]').click();
    await page.waitForTimeout(1000);
    await page.mouse.down();
    await page.mouse.move(673, 291);
    await page.mouse.move(816, 284);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Resize the start date column', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-resizing?theme=fluent');
    await page.waitForTimeout(4000);
    //Resize the start date column
    await page.locator('(//div[contains(@class,"e-rhandler e-rcursor")])[3]').click();
    await page.waitForTimeout(1000);
    await page.mouse.down();
    await page.mouse.move(628, 286);
    await page.mouse.move(707, 296);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
