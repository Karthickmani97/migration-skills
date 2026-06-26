import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/Helper';

test('1-Splitter sample rendering', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-splitter');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5158/gantt-splitter' });
    await page.waitForTimeout(2000);
    
    // Screenshot validation - sample rendering
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Resize splitter using dragTo', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-splitter');
    await page.waitForTimeout(2000);
    
    await page.locator('.e-gantt').waitFor({ state: 'visible', timeout: 10000 });
    await page.waitForTimeout(500);
    
    // Drag splitter to resize
    const splitter = page.locator('.e-gantt .e-split-bar').first();
    await splitter.waitFor({ state: 'visible', timeout: 5000 });
    
    const box = await splitter.boundingBox();
    if (box) {
        await splitter.hover();
        await page.mouse.down();
        await page.mouse.move(box.x + 100, box.y + box.height / 2, { steps: 5 });
        await page.mouse.up();
    }
    
    await page.waitForTimeout(500);
    // Screenshot validation - splitter resized
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Resize splitter with hover', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-splitter');
    await page.waitForTimeout(2000);
    
    await page.locator('.e-gantt').waitFor({ state: 'visible', timeout: 10000 });
    
    // Drag splitter to left
    const splitter = page.locator('.e-gantt .e-split-bar').first();
    await splitter.waitFor({ state: 'visible', timeout: 5000 });
    await splitter.hover();
    
    const box = await splitter.boundingBox();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 - 100, box.y + box.height / 2, { steps: 10 });
        await page.mouse.up();
    }
    
    await page.waitForTimeout(300);
    // Screenshot validation - splitter resized left
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Expand and collapse tasks in splitter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-splitter');
    await page.waitForTimeout(2000);
    
    const gantt = page.locator('.e-gantt');
    await gantt.waitFor({ state: 'visible', timeout: 5000 });
    
    // Collapse first parent task
    const collapseIcon = page.locator('.e-treegridexpand').first();
    await collapseIcon.click();
    await page.waitForTimeout(800);
    
    // Screenshot validation - task collapsed
    expect(await gantt.screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Zoom in operation in splitter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-splitter');
    await page.waitForTimeout(2000);
    
    const gantt = page.locator('.e-gantt');
    await gantt.waitFor({ state: 'visible', timeout: 5000 });
    
    // Click zoom in button
    const zoomInBtn = page.locator('.e-zoomin');
    await zoomInBtn.click();
    await page.waitForTimeout(500);
    
    // Screenshot validation - zoomed in
    expect(await gantt.screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Add task dialog in splitter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-splitter');
    await page.waitForTimeout(2000);
    
    // Click Add button
    const addBtn = page.locator('.e-add');
    await addBtn.click();
    await page.waitForTimeout(2000);
    
    const dialog = page.locator('.e-dialog');
    await dialog.waitFor({ state: 'visible', timeout: 5000 });
    
    // Remove license banners
    await page.waitForTimeout(500);
    await page.waitForTimeout(300);
    
    // Screenshot validation - Add dialog opened
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    
    // Close dialog
    const cancelBtn = page.locator('.e-dialog button:has-text("Cancel")').last();
    await cancelBtn.click({ force: true });
    await page.waitForTimeout(500);
});

test('7-Edit task dialog in splitter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-splitter');
    await page.waitForTimeout(2000);
    
    const gantt = page.locator('.e-gantt');
    await gantt.waitFor({ state: 'visible', timeout: 5000 });
    
    // Double-click Task Name cell to edit
    const firstTaskName = page.locator('.e-gantt .e-rowcell').first();
    await firstTaskName.dblclick();
    await page.waitForTimeout(2000);
    
    const dialog = page.locator('.e-dialog');
    await dialog.waitFor({ state: 'visible', timeout: 5000 });
    
    // Remove license banners
    await page.waitForTimeout(500);
    await page.waitForTimeout(500);
    
    // Screenshot validation - Edit dialog opened
    expect(await gantt.screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    
    // Close dialog
    const cancelBtn = page.locator('.e-dialog button:has-text("Cancel")').last();
    await cancelBtn.click({ force: true });
    await page.waitForTimeout(500);
});

test('8-Context menu in splitter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-splitter');
    await page.waitForTimeout(2000);
    
    const gantt = page.locator('.e-gantt');
    await gantt.waitFor({ state: 'visible', timeout: 5000 });
    
    // Right-click first row
    const firstRow = page.locator('.e-gantt .e-row').first();
    await firstRow.click({ button: 'right' });
    await page.waitForTimeout(500);
    
    const contextMenu = page.locator('.e-contextmenu');
    await contextMenu.waitFor({ state: 'visible', timeout: 3000 });
    
    // Screenshot validation - context menu displayed
    expect(await gantt.screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    
    // Close context menu
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
});

test('9-Sorting in splitter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-splitter');
    await page.waitForTimeout(2000);
    
    const gantt = page.locator('.e-gantt');
    await gantt.waitFor({ state: 'visible', timeout: 5000 });
    
    // Click Task Name header to sort
    const taskNameHeader = page.locator('.e-gantt .e-headercell').nth(1);
    await taskNameHeader.click();
    await page.waitForTimeout(1000);
    
    // Screenshot validation - tasks sorted
    expect(await gantt.screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Search functionality in splitter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-splitter');
    await page.waitForTimeout(2000);
    
    const gantt = page.locator('.e-gantt');
    await gantt.waitFor({ state: 'visible', timeout: 5000 });
    
    // Open search and type
    const searchBtn = page.locator('.e-search-icon');
    await searchBtn.click();
    await page.waitForTimeout(300);
    
    const searchBox = page.locator('.e-search input');
    await searchBox.fill('Design');
    await page.waitForTimeout(1000);
    
    // Screenshot validation - search results displayed
    expect(await gantt.screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Taskbar interaction in splitter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-splitter');
    await page.waitForTimeout(2000);
    
    const gantt = page.locator('.e-gantt');
    await gantt.waitFor({ state: 'visible', timeout: 5000 });
    
    // Hover over taskbar
    const taskbar = page.locator('.e-gantt-child-taskbar').first();
    await taskbar.hover();
    await page.waitForTimeout(500);
    
    // Screenshot validation - taskbar hover state
    expect(await gantt.screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Predecessor lines visibility in splitter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-splitter');
    await page.waitForTimeout(2000);
    
    const gantt = page.locator('.e-gantt');
    await gantt.waitFor({ state: 'visible', timeout: 5000 });
    
    // Wait for connector lines
    const connectorLines = page.locator('.e-connector-line');
    await connectorLines.first().waitFor({ state: 'visible', timeout: 3000 });
    
    // Screenshot validation - predecessor lines visible
    expect(await gantt.screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Splitter pane visibility', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-splitter');
    await page.waitForTimeout(2000);
    
    const gantt = page.locator('.e-gantt');
    await gantt.waitFor({ state: 'visible', timeout: 5000 });
    
    // Verify both panes visible
    const ganttPane = page.locator('.e-pane').first();
    const detailsPane = page.locator('.e-pane').last();
    await expect(ganttPane).toBeVisible();
    await expect(detailsPane).toBeVisible();
    
    // Screenshot validation - both panes visible
    expect(await gantt.screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});