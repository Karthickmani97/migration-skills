import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
        ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
});

test('1-Load sample', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-template?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-template?theme=fluent2' });
    await page.waitForTimeout(5000);
    //Screenshot validation-Record is rendered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Select record', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-template?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-template?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the child record to select it
    await page.locator('(//td[contains(@class,"e-rowcell")])[9]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Record is selected
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Hover on chart side', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-template?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-template?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the child record to select it
    await page.locator('(//div[contains(@class,"e-gantt-child")])[2]').hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-First child taskbar record is hovered on.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});