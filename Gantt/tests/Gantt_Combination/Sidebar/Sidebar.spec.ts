import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/Helper';

test('1-Sidebar sample rendering', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-sidebar');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5158/gantt-sidebar' });
    await page.waitForTimeout(4000);
    
    // Screenshot validation - sample rendering
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Add task dialog in sidebar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-sidebar');
    await page.waitForTimeout(4000);
    
    // Click Add button
    const addBtn = page.locator('.e-add');
    await addBtn.click();
    await page.waitForTimeout(2000);
    
    const dialog = page.locator('.e-dialog');
    await dialog.waitFor({ state: 'visible', timeout: 5000 });
    await page.waitForTimeout(800);
    
    // Screenshot validation - Add dialog opened
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    
    // Close dialog
    const cancelBtn = page.locator('.e-dialog button:has-text("Cancel")').last();
    await cancelBtn.click({ force: true });
    await page.waitForTimeout(500);
});

test('3-Collapse and expand tasks', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-sidebar');
    await page.waitForTimeout(4000);
    
    // Click Collapse all
    const collapseBtn = page.locator('.e-toolbar-item:has-text("Collapse all")');
    await collapseBtn.click();
    await page.waitForTimeout(800);
    
    // Screenshot validation - collapsed
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    
    // Click Expand all
    const expandBtn = page.locator('.e-toolbar-item:has-text("Expand all")');
    await expandBtn.click();
    await page.waitForTimeout(800);
    
    // Screenshot validation - expanded
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Toggle sidebar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-sidebar');
    await page.waitForTimeout(4000);
    
    // Click toggle sidebar button
    const toggleBtn = page.locator('#toggleSidebarBtn');
    await toggleBtn.click();
    await page.waitForTimeout(1000);
    
    // Screenshot validation - sidebar toggled
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Select different project', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-sidebar');
    await page.waitForTimeout(4000);
    
    // Click Mobile App Development project
    const projectItem = page.locator('.list-group-item:has-text("Mobile App Development")');
    await projectItem.click();
    await page.waitForTimeout(1000);
    
    // Screenshot validation - different project loaded
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

