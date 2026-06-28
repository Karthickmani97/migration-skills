import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
test('1-Load sample', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'tooltip-template?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'tooltip-template?theme=fluent2' });
    await page.waitForTimeout(5000);
    //Screenshot validation-Record is rendered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Hover on chart side', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'tooltip-template?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'tooltip-template?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the child record to select it
    await page.locator('(//div[contains(@class,"e-gantt-child")])[4]').hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-First child taskbar record is hovered on.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});