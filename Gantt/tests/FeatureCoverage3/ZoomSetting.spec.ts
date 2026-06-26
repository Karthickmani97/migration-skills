import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('ZMET-001', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button in toolbar
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-002', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Click the Zoom out button in toolbar
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-003', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Click the Zoom to Fit button in toolbar
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-004', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Click the ZoomIn button 
    await page.getByRole('button', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-005', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Click the ZoomOut button 
    await page.getByRole('button', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-006', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Click the ZoomToFit button 
    await page.getByRole('button', { name: 'ZoomToFit' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-007', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource View 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button in toolbar
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-008', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource View 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the Zoom out button in toolbar
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-009', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource View 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the Zoom To Fit button in toolbar
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-010', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource View 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the ZoomIn button 
    await page.getByRole('button', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-011', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource View 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the ZoomOut button 
    await page.getByRole('button', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-012', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource View 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the ZoomToFit button 
    await page.getByRole('button', { name: 'ZoomToFit' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-013', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button in toolbar
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-014', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom out button in toolbar
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-015', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom to fit button in toolbar
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-016', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom in button 
    await page.getByRole('button', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-017', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the ZoomOut button 
    await page.getByRole('button', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-018', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the ZoomToFit button 
    await page.getByRole('button', { name: 'ZoomToFit' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-019', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource View 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button in toolbar
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-020', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource View 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom out button in toolbar
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-021', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource View 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom to fit button in toolbar
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-022', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(500);
    //Enable the Resource View 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(500);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(500);
    //Click the ZoomIn button 
    await page.locator('(//button[text()="ZoomIn"])[1]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-023', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource View 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the ZoomOut button 
    await page.getByRole('button', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
// test('ZMET-024', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/zoom-settings');
//     await page.waitForTimeout(1000);
//     //Enable the Gridline
//     await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
//     await page.waitForTimeout(300);
//     //Enable the Resource View 
//     await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
//     await page.waitForTimeout(300);
//     //Enable the virtualization
//     await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
//     await page.waitForTimeout(300);
//     //Click the ZoomToFit button 
//     await page.getByRole('button', { name: 'ZoomToFit' }).click();
//     await page.waitForTimeout(1000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });
test('ZMET-025', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button in toolbar multiple time
    await page.getByRole('button', { name: 'Zoom in' }).dblclick();
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-026', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Click the Zoom out button in toolbar multiple time
    await page.getByRole('button', { name: 'Zoom out' }).dblclick();
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-027', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Click the ZoomIn  button multiple time
    await page.getByRole('button', { name: 'ZoomIn' }).dblclick();
    await page.getByRole('button', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-028', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Click the ZoomOut  button multiple time
    await page.getByRole('button', { name: 'ZoomOut' }).dblclick();
    await page.getByRole('button', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-029', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button in toolbar multiple time
    await page.getByRole('button', { name: 'Zoom in' }).dblclick();
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-030', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the Zoom out button in toolbar multiple time
    await page.getByRole('button', { name: 'Zoom out' }).dblclick();
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-031', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button multiple time
    await page.getByRole('button', { name: 'ZoomIn' }).dblclick();
    await page.getByRole('button', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-032', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    // Enable the Gridline (4th switch) and wait for it to toggle
    const gridSwitch = page.locator('(//span[contains(@class, "e-switch-handle")])[4]/..');
    await gridSwitch.waitFor({ state: 'visible', timeout: 5000 });
    await gridSwitch.click();
    // Enable the Resource view (3rd switch) and wait for it to toggle
    const resourceSwitch = page.locator('(//span[contains(@class, "e-switch-handle")])[3]/..');
    await resourceSwitch.waitFor({ state: 'visible', timeout: 5000 });
    await resourceSwitch.click();
    // Click the Zoom out toolbar button multiple times (ensure visible)
    const zoomOut = page.getByRole('button', { name: 'ZoomOut' });
    await zoomOut.waitFor({ state: 'visible', timeout: 5000 });
    await zoomOut.dblclick();
    await zoomOut.click();
    // Final quick validation: Gantt container visible
    await expect(page.locator('.e-gantt')).toBeVisible();
});
test('ZMET-033', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button in toolbar multiple time
    await page.getByRole('button', { name: 'Zoom in' }).dblclick();
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-034', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom Out button in toolbar multiple time
    await page.getByRole('button', { name: 'Zoom out' }).dblclick();
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-035', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button multiple time
    await page.getByRole('button', { name: 'ZoomIn' }).dblclick();
    await page.getByRole('button', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-036', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom Out button multiple time
    await page.getByRole('button', { name: 'ZoomOut' }).dblclick();
    await page.getByRole('button', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-037', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource View 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button in toolbar multiple time
    await page.getByRole('button', { name: 'Zoom in' }).dblclick();
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-038', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource View 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom Out button in toolbar multiple time
    await page.getByRole('button', { name: 'Zoom out' }).dblclick();
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-039', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource View 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the ZoomIn button multiple time
    await page.getByRole('button', { name: 'ZoomIn' }).dblclick();
    await page.getByRole('button', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-040', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource View 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the ZoomOut button multiple time
    await page.getByRole('button', { name: 'ZoomOut' }).dblclick();
    await page.getByRole('button', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-041', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //hover the screen
    await page.locator('(//div[contains(@class, "e-chart-scroll-container e-content")])[1]').hover();
    await page.waitForTimeout(300);
    //Mouse scroll zoom in
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, -200); // zoom in
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Mouse scroll zoom out
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, 200); // zoom out
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-042', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //hover the screen
    await page.locator('(//div[contains(@class, "e-chart-scroll-container e-content")])[1]').hover();
    await page.waitForTimeout(300);
    //Mouse scroll zoom in
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, -200); // zoom in
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Mouse scroll zoom out
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, 200); // zoom out
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-043', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //hover the screen
    await page.locator('(//div[contains(@class, "e-chart-scroll-container e-content")])[1]').hover();
    await page.waitForTimeout(300);
    //Mouse scroll zoom in
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, -200); // zoom in
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Mouse scroll zoom out
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, 200); // zoom out
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-044', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Enable the Resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //hover the screen
    await page.locator('(//div[contains(@class, "e-chart-scroll-container e-content")])[1]').hover();
    await page.waitForTimeout(300);
    //Mouse scroll zoom in
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, -200); // zoom in
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Mouse scroll zoom out
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, 200); // zoom out
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-045', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button in toolbar
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(300);
    //Click the Reset Zoom
    await page.getByRole('button', { name: 'Reset Zoom' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-046', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Click the Zoom out button in toolbar
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(300);
    //Click the Reset Zoom
    await page.getByRole('button', { name: 'Reset Zoom' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-047', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(600);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(600);
    // Get baseline timeline state after enabling gridline and virtualization
    const baselineColumnCount = await page.locator('.e-header-cell-label').count();
    //Click the ZoomIn button 
    await page.locator('(//button[text()="ZoomIn"])[1]').click();
    await page.waitForTimeout(600);
    // Verify zoom in occurred - zooming in reduces column count (shows fewer, wider columns)
    const zoomedColumnCount = await page.locator('.e-header-cell-label').count();
    expect(zoomedColumnCount).toBeLessThan(baselineColumnCount);
    //Click the Reset Zoom
    await page.getByRole('button', { name: 'Reset Zoom' }).click();
    await page.waitForTimeout(1000);
    // Verify zoom reset - should return to baseline state
    const resetColumnCount = await page.locator('.e-header-cell-label').count();
    // Assertions to verify reset zoom functionality
    expect(resetColumnCount).toBe(baselineColumnCount);
    // Verify Gantt chart is visible and rendered correctly
    await expect(page.locator('.e-gantt')).toBeVisible();
    await expect(page.locator('.e-timeline-header-container')).toBeVisible();
    // Verify grid lines are visible after all operations
    await expect(page.locator('.e-chart-row').first()).toBeVisible();
    // Verify gantt rows are rendered
    const rowCount = await page.locator('.e-chart-row').count();
    expect(rowCount).toBeGreaterThan(0);
});
test('ZMET-048', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(600);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(600);
    // Get baseline timeline state after enabling gridline and virtualization
    const baselineColumnCount = await page.locator('.e-header-cell-label').count();
    //Click the ZoomOut button 
    await page.getByRole('button', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(600);
    // Verify zoom out occurred - zooming out reduces column count
    const zoomedColumnCount = await page.locator('.e-header-cell-label').count();
    expect(zoomedColumnCount).toBeLessThan(baselineColumnCount);
    //Click the Reset Zoom
    await page.getByRole('button', { name: 'Reset Zoom' }).click();
    await page.waitForTimeout(1000);
    // Verify zoom reset - should return to baseline state
    const resetColumnCount = await page.locator('.e-header-cell-label').count();
    // Assertions to verify reset zoom functionality
    expect(resetColumnCount).toBe(baselineColumnCount);
    // Verify Gantt chart is visible and rendered correctly
    await expect(page.locator('.e-gantt')).toBeVisible();
    await expect(page.locator('.e-timeline-header-container')).toBeVisible();
    // Verify grid lines are visible after all operations
    await expect(page.locator('.e-chart-row').first()).toBeVisible();
    // Verify gantt rows are rendered
    const rowCount = await page.locator('.e-chart-row').count();
    expect(rowCount).toBeGreaterThan(0);
});
test('ZMET-049', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Click the Zoom In button in toolbar
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-050', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Click the Zoom out button in toolbar
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-051', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Click the Zoom To Fit button in toolbar
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-052', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Click the ZoomIn button
    await page.getByRole('button', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-053', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Click the ZoomToFit button
    await page.getByRole('button', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-054', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Click the ZoomTOFit button
    await page.getByRole('button', { name: 'ZoomToFit' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-055', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button in toolbar
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-056', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the Zoom out button in toolbar
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-057', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    //Click the Zoom To Fit button in toolbar
    await page.getByRole('button', { name: 'Zoom To fit' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('ZMET-058', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForLoadState('networkidle');
    const zoomInButton = page.locator('(//button[text()="ZoomIn"])[1]');
    const timeline = page.locator('.e-timeline-header-container');
    await expect(timeline).toBeVisible();
    const beforeHTML = await timeline.innerHTML();
    await zoomInButton.click();
    await page.waitForTimeout(500); 
    const afterHTML = await timeline.innerHTML();
    expect(afterHTML).not.toBe(beforeHTML);
});


test('ZMET-059', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the ZoomOut button 
    await page.getByRole('button', { name: 'Zoomout' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-060', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the ZoomToFit button 
    await page.getByRole('button', { name: 'ZoomTOFit' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-061', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the virtualization 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button in the toolbar
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-062', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the virtualization 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom Out button in the toolbar
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-063', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the virtualization 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom To Fit button in the toolbar
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-064', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the virtualization 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button 
    await page.getByRole('button', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-065', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the virtualization 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom Out button 
    await page.getByRole('button', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
// test('ZMET-066', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/zoom-settings');
//     await page.waitForTimeout(1000);
//     //Enable the virtualization 
//     await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
//     await page.waitForTimeout(300);
//     //Click the Zoom To Fit button 
//     await page.getByRole('button', { name: 'ZoomTOFit' }).click();
//     await page.waitForTimeout(1000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });
test('ZMET-067', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom in button in the toolbar
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-068', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom out button in the toolbar
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-069', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom to fit button in the toolbar
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-070', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the ZoomIn button 
    await page.getByRole('button', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-071', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the ZoomOut button 
    await page.getByRole('button', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
// test('ZMET-072', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/zoom-settings');
//     await page.waitForTimeout(1000);
//     //Enable the resource view
//     await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
//     await page.waitForTimeout(300);
//     //Enable the virtualization 
//     await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
//     await page.waitForTimeout(300);
//     //Click the ZoomToFit button 
//     await page.getByRole('button', { name: 'ZoomTOFit' }).click();
//     await page.waitForTimeout(1000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });
test('ZMET-073', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Click the Zoom In button multiple time in the toolbar
    await page.getByRole('button', { name: 'Zoom in' }).dblclick();
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-074', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Click the Zoom out button multiple time in the toolbar
    await page.getByRole('button', { name: 'Zoom out' }).dblclick();
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-075', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Click the ZoomIn button multiple time
    await page.getByRole('button', { name: 'ZoomIn' }).dblclick();
    await page.getByRole('button', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-076', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Click the ZoomIn button multiple time
    await page.getByRole('button', { name: 'ZoomOut' }).dblclick();
    await page.getByRole('button', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-077', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button multiple time in the toolbar
    await page.getByRole('button', { name: 'Zoom in' }).dblclick();
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-078', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the Zoom out button multiple time in the toolbar
    await page.getByRole('button', { name: 'Zoom out' }).dblclick();
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-079', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the ZoomIn button multiple time 
    await page.getByRole('button', { name: 'ZoomIn' }).dblclick();
    await page.getByRole('button', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('ZMET-080', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForLoadState('networkidle');
    // Enable resource view
    const resourceToggle = page.locator('(//span[contains(@class, "e-switch-handle")])[3]');
    await resourceToggle.click();
    const zoomOutButton = page.locator('(//button[text()="ZoomOut"])[1]');
    await expect(zoomOutButton).toBeVisible();
    const timeline = page.locator('.e-timeline-header-container');
    // Capture state before zoom
    const beforeText = await timeline.innerText();
    // Perform zoom slowly
    await zoomOutButton.click();
    await page.waitForTimeout(500);
    await zoomOutButton.click();
    await page.waitForTimeout(500);
    await zoomOutButton.click();
    //Wait for UI to stabilize
    await page.waitForLoadState('networkidle');
    // Capture after state
    const afterText = await timeline.innerText();
    // Assertion (more stable than count)
    expect(afterText).not.toBe(beforeText);
});


test('ZMET-081', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the virtualization 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button multiple time in the toolbar
    await page.getByRole('button', { name: 'Zoom in' }).dblclick();
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-082', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the virtualization 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom out button multiple time in the toolbar
    await page.getByRole('button', { name: 'Zoom out' }).dblclick();
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-083', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the ZoomIn button multiple time 
    await page.getByRole('button', { name: 'ZoomIn' }).dblclick();
    await page.getByRole('button', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-084', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the  virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the ZoomOut button multiple time 
    await page.getByRole('button', { name: 'ZoomOut' }).dblclick();
    await page.getByRole('button', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-085', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    //Enable the virtualization 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom In button multiple time in the toolbar
    await page.getByRole('button', { name: 'Zoom in' }).dblclick();
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-086', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    //Enable the virtualization 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the Zoom out button multiple time in toolbar
    await page.getByRole('button', { name: 'Zoom out' }).dblclick();
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-087', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    //Enable the virtualization 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the ZoomIn button multiple time 
    await page.locator('(//button[text()="ZoomIn"])[1]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="ZoomIn"])[1]').click();
    await page.waitForTimeout(1500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-088', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    //Enable the virtualization 
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //Click the ZoomIn button multiple time 
    await page.getByRole('button', { name: 'ZoomOut' }).dblclick();
    await page.getByRole('button', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-089', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //hover the screen
    await page.locator('(//div[contains(@class, "e-chart-scroll-container e-content")])[1]').hover();
    await page.waitForTimeout(300);
    //Mouse scroll zoom in
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, -200); // zoom in
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Mouse scroll zoom out
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, 200); // zoom out
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-090', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //hover the screen
    await page.locator('(//div[contains(@class, "e-chart-scroll-container e-content")])[1]').hover();
    await page.waitForTimeout(300);
    //Mouse scroll zoom in
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, -200); // zoom in
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Mouse scroll zoom out
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, 200); // zoom out
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-091', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //hover the screen
    await page.locator('(//div[contains(@class, "e-chart-scroll-container e-content")])[1]').hover();
    await page.waitForTimeout(300);
    //Mouse scroll zoom in
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, -200); // zoom in
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Mouse scroll zoom out
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, 200); // zoom out
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('ZMET-092', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(300);
    //hover the screen
    await page.locator('(//div[contains(@class, "e-chart-scroll-container e-content")])[1]').hover();
    await page.waitForTimeout(300);
    //Mouse scroll zoom in
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, -200); // zoom in
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Mouse scroll zoom out
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, 200); // zoom out
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
// test('ZMET-093', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/zoom-settings');
//     await page.waitForTimeout(500);
//      //Enable the single tier mode
//     await page.locator('(//span[contains(@class, "e-switch-handle")])[1]').click();
//     await page.waitForTimeout(300);
//     //Click the Zoom In button in toolbar
//     await page.getByRole('button', { name: 'Zoom in' }).click();
//     await page.waitForTimeout(300);
//     //Click the Reset Zoom
//     await page.getByRole('button', { name: 'Reset Zoom' }).click();
//     await page.waitForTimeout(1000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });
test('ZMET-094', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the Zoom out button in toolbar
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(300);
    //Click the Reset Zoom
    await page.getByRole('button', { name: 'Reset Zoom' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
// test('ZMET-095', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver + '/zoom-settings');
//     await page.waitForTimeout(500);
//    //Enable the single tier mode
//     await page.locator('(//span[contains(@class, "e-switch-handle")])[1]').click();
//     await page.waitForTimeout(300);
//     //Click the ZoomIn button 
//     await page.getByRole('button', { name: 'ZoomIn' }).click();
//     await page.waitForTimeout(300);
//     //Click the Reset Zoom
//     await page.getByRole('button', { name: 'Reset Zoom' }).click();
//     await page.waitForTimeout(1000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });
test('ZMET-096', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Resource view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Enable the virtualization
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(300);
    //Click the ZoomOut button 
    await page.getByRole('button', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(300);
    //Click the Reset Zoom
    await page.getByRole('button', { name: 'Reset Zoom' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-193', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Change bottom tier timeline unit in year
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-194', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Enable the Gridline
    await page.locator('(//span[contains(@class, "e-switch-handle")])[4]').click();
    await page.waitForTimeout(300);
    //Change bottom tier timeline unit in year
    await page.getByRole('combobox').nth(1).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'ZoomToFit' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-195', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Change top tier timeline unit in Month
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(300);
    //Change bottom tier timeline unit in Hour
    await page.getByRole('combobox').nth(1).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Zoom in' }).click();
    //Click NextTimeSpan
    await page.getByRole('button', { name: 'Next timespan' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-196', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom-settings');
    await page.waitForTimeout(1000);
    //Change top tier timeline unit in Month
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(300);
    //Change bottom tier timeline unit in Hour
    await page.getByRole('combobox').nth(1).click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Zoom in' }).click();
    //Click Previous timespan
    await page.getByRole('button', { name: 'Previous timespan' }).click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-197', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    //Click the Zoom In on toolbar
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-198', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    //Click the Zoom out on toolbar
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-199', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    //Click the Zoom to fit on toolbar
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-200', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    //Enable Duration Unit
    await page.locator('(//span[@class="e-switch-handle"])[1]').click();
    await page.waitForTimeout(500);
    //Click the Zoom In on toolbar
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-201', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    //Enable Duration Unit
    await page.locator('(//span[@class="e-switch-handle"])[1]').click();
    await page.waitForTimeout(500);
    //Click the Zoom out on toolbar
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-202', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    //Enable Duration Unit
    await page.locator('(//span[@class="e-switch-handle"])[1]').click();
    await page.waitForTimeout(500);
    //Click the Zoom to fit on toolbar
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-203', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    // Enable RTL
    await page.locator('(//span[@class="e-switch-handle"])[2]').click();
    await page.waitForTimeout(500);
    //Click the Zoom In on toolbar
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-204', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    // Enable RTL
    await page.locator('(//span[@class="e-switch-handle"])[2]').click();
    await page.waitForTimeout(500);
    //Click the Zoom out on toolbar
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-205', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    // Enable RTL
    await page.locator('(//span[@class="e-switch-handle"])[2]').click();
    await page.waitForTimeout(500);
    //Click the Zoom to fit on toolbar
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-206', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    //Enable Duration Unit
    await page.locator('(//span[@class="e-switch-handle"])[1]').click();
    await page.waitForTimeout(500);
    // Enable RTL
    await page.locator('(//span[@class="e-switch-handle"])[1]').click();
    await page.waitForTimeout(500);
    //Click the Zoom In on toolbar
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-207', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    //Enable Duration Unit
    await page.locator('(//span[@class="e-switch-handle"])[1]').click();
    await page.waitForTimeout(500);
    // Enable RTL
    await page.locator('(//span[@class="e-switch-handle"])[1]').click();
    await page.waitForTimeout(500);
    //Click the Zoom out on toolbar
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-208', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    //Enable Duration Unit
    await page.locator('(//span[@class="e-switch-handle"])[1]').click();
    await page.waitForTimeout(500);
    // Enable RTL
    await page.locator('(//span[@class="e-switch-handle"])[1]').click();
    await page.waitForTimeout(500);
    //Click the Zoom to fit on toolbar
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-209', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    //Click the Zoom In on toolbar
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Zoom In on toolbar
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Zoom In on toolbar
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Zoom In on toolbar
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-210', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    //Click the Zoom out on toolbar
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Zoom out on toolbar
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-211', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    //Enable Duration Unit
    await page.locator('(//span[@class="e-switch-handle"])[1]').click();
    await page.waitForTimeout(500);
    // Enable RTL
    await page.locator('(//span[@class="e-switch-handle"])[1]').click();
    await page.waitForTimeout(500);
    //Click the Zoom In on toolbar
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Zoom In on toolbar
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Zoom In on toolbar
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Zoom In on toolbar
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-212', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    //Enable Duration Unit
    await page.locator('(//span[@class="e-switch-handle"])[1]').click();
    await page.waitForTimeout(500);
    // Enable RTL
    await page.locator('(//span[@class="e-switch-handle"])[1]').click();
    await page.waitForTimeout(500);
    //Click the Zoom out on toolbar
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Zoom out on toolbar
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-213', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    //hover the screen
    await page.locator('(//div[contains(@class, "e-chart-scroll-container e-content")])[1]').hover();
    await page.waitForTimeout(300);
    //Mouse scroll zoom in
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, -200); // zoom in
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Mouse scroll zoom out
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, 200); // zoom out
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('ZMET-214', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/zoom/custom-level');
    await page.waitForTimeout(1000);
    //Enable Duration Unit
    await page.locator('(//span[@class="e-switch-handle"])[1]').click();
    await page.waitForTimeout(500);
    // Enable RTL
    await page.locator('(//span[@class="e-switch-handle"])[1]').click();
    await page.waitForTimeout(500);
    //hover the screen
    await page.locator('(//div[contains(@class, "e-chart-scroll-container e-content")])[1]').hover();
    await page.waitForTimeout(300);
    //Mouse scroll zoom in
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, -200); // zoom in
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Mouse scroll zoom out
    await page.keyboard.down('Control');
    await page.mouse.wheel(0, 200); // zoom out
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});