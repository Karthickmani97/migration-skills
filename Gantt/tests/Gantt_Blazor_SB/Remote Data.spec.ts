import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
import { pdf } from 'pdf-to-img';

test.use({
    launchOptions: {
        ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
});

test('1-Initial load of Remote data ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'remote-data?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'remote-data?theme=fluent2' });
    await page.waitForTimeout(5000);
    //Screenshot validation-Initial load of the sample
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('2-Records of the 1000th row shown', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'remote-data?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'remote-data?theme=fluent2' });
    await page.waitForTimeout(5000);
    // Estimate scrollTop based on row height (e.g., 50px * 1000 = 50000)
    await page.evaluate(() => {
        document.querySelectorAll('.e-content')[1].scrollTop = 50000;
    });
    await page.waitForTimeout(5000); 
    // Screenshot validation- for the final scrolled state
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Records of the 2500th row shown', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'remote-data?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'remote-data?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the 1000th row
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(2000);
    // Press the ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(2000);
    // Press the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    // Screenshot validation - for the final scrolled state
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Records of the 5000th row shown', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'remote-data?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'remote-data?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the 1000th row
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(2000);
    // Press the ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(2000);
    // Press the ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(2000);
    // Press the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    // Screenshot validation - for the final scrolled state
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});