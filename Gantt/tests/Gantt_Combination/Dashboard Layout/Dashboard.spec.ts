import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/Helper';

test('1-Dashboard sample rendering', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dashboard');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5158/gantt-dashboard' });
    await page.waitForTimeout(2000);
    //Screenshot validation-Sanmple rendering
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
