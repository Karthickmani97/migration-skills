import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/Helper';

test('1-Dialog sample rendering', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dialog');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5158/gantt-dialog' });
    await page.waitForTimeout(2000);
    await page.locator("(//button[text()='Open Gantt Dialog'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Close the sample', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dialog');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5158/gantt-dialog' });
    await page.waitForTimeout(2000);
    await page.locator("(//button[text()='Open Gantt Dialog'])").click();
    await page.waitForTimeout(500);
    //Click the close icon
    await page.locator('//button[@aria-label="Close"]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Record is closed 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Hover over Taskbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dialog');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5158/gantt-dialog' });
    await page.waitForTimeout(2000);
    //Click the button to open the dialog
    await page.locator("(//button[text()='Open Gantt Dialog'])").click();
    await page.waitForTimeout(500);
    //Click the taskbar to hover over it 
    const taskbar = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]");
    await taskbar.hover();
    await taskbar.click({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-Hovered over child taskbar
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Expand and Collapse tasks', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dialog');
    await page.waitForTimeout(2000);
    //Open Gantt Dialog
    await page.locator("button:has-text('Open Gantt Dialog')").click();
    await page.waitForTimeout(500);
    //Click ExpandAll button
    await page.locator('.e-toolbar-item:has-text("Expand")').first().click();
    await page.waitForTimeout(500);
    //Screenshot validation-All tasks expanded
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click CollapseAll button
    await page.locator('.e-toolbar-item:has-text("Collapse")').first().click();
    await page.waitForTimeout(500);
    //Screenshot validation-All tasks collapsed
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Zoom operations', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dialog');
    await page.waitForTimeout(2000);
    //Open Gantt Dialog
    await page.locator("button:has-text('Open Gantt Dialog')").click();
    await page.waitForTimeout(500);
    //Click Zoom In
    await page.locator('.e-toolbar-item[title*="Zoom in"]').first().click();
    await page.waitForTimeout(500);
    //Screenshot validation-Zoomed in
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Zoom Out
    await page.locator('.e-toolbar-item[title*="Zoom out"]').first().click();
    await page.waitForTimeout(500);
    //Click Zoom to Fit
    await page.locator('.e-toolbar-item[title*="Zoom to fit"]').first().click();
    await page.waitForTimeout(500);
    //Screenshot validation-Zoom to fit
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Add new task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dialog');
    await page.waitForTimeout(2000);
    //Open Gantt Dialog
    await page.locator("button:has-text('Open Gantt Dialog')").click();
    await page.waitForTimeout(500);
    //Click Add button in toolbar
    await page.locator('.e-toolbar-item:has-text("Add")').first().click();
    await page.waitForTimeout(800);
    //Screenshot validation-Add dialog opened
    expect.soft(await page.locator('.e-dialog').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Cancel the add operation
    await page.locator('button:has-text("Cancel")').click();
    await page.waitForTimeout(300);
});

test('7-Edit task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dialog');
    await page.waitForTimeout(2000);
    //Open Gantt Dialog
    await page.locator("button:has-text('Open Gantt Dialog')").click();
    await page.waitForTimeout(500);
    //Double click on first task row to edit
    await page.locator('.e-row').first().dblclick();
    await page.waitForTimeout(800);
    //Screenshot validation-Edit dialog opened
    expect.soft(await page.locator('.e-dialog').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Cancel the edit operation
    await page.locator('button:has-text("Cancel")').click();
    await page.waitForTimeout(300);
});

test('8-Delete task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dialog');
    await page.waitForTimeout(2000);
    //Open Gantt Dialog
    await page.locator("button:has-text('Open Gantt Dialog')").click();
    await page.waitForTimeout(500);
    //Click on first task row to select
    await page.locator('.e-row').first().click();
    await page.waitForTimeout(300);
    //Click Delete button
    await page.locator('.e-toolbar-item:has-text("Delete")').first().click();
    await page.waitForTimeout(800);
    //Screenshot validation-Task deleted
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Context menu on task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dialog');
    await page.waitForTimeout(2000);
    //Open Gantt Dialog
    await page.locator("button:has-text('Open Gantt Dialog')").click();
    await page.waitForTimeout(500);
    //Right click on task row
    await page.locator('.e-row').first().click({ button: 'right' });
    await page.waitForTimeout(500);
    //Screenshot validation-Context menu displayed
    expect.soft(await page.locator('.e-contextmenu').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Close context menu by clicking elsewhere
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
});

test('10-Taskbar tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dialog');
    await page.waitForTimeout(2000);
    //Open Gantt Dialog
    await page.locator("button:has-text('Open Gantt Dialog')").click();
    await page.waitForTimeout(500);
    //Hover over a taskbar to show tooltip
    const taskbar = page.locator('.e-gantt-child-taskbar').first();
    await taskbar.hover();
    await page.waitForTimeout(1000);
    //Screenshot validation-Tooltip displayed
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Grid column sorting', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dialog');
    await page.waitForTimeout(2000);
    //Open Gantt Dialog
    await page.locator("button:has-text('Open Gantt Dialog')").click();
    await page.waitForTimeout(500);
    //Click on Task Name column header to sort
    await page.locator('.e-headercell:has-text("Task Name")').click();
    await page.waitForTimeout(500);
    //Screenshot validation-Tasks sorted ascending
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click again to sort descending
    await page.locator('.e-headercell:has-text("Task Name")').click();
    await page.waitForTimeout(500);
    //Screenshot validation-Tasks sorted descending
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Filter tasks', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dialog');
    await page.waitForTimeout(2000);
    //Open Gantt Dialog
    await page.locator("button:has-text('Open Gantt Dialog')").click();
    await page.waitForTimeout(500);
    //Click filter icon in column header
    await page.locator('.e-headercell .e-filtermenudiv').first().click();
    await page.waitForTimeout(500);
    //Screenshot validation-Filter menu displayed
    expect.soft(await page.locator('.e-filter-popup').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Close filter menu
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
});

test('13-Resize dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dialog');
    await page.waitForTimeout(2000);
    //Open Gantt Dialog
    await page.locator("button:has-text('Open Gantt Dialog')").click();
    await page.waitForTimeout(500);
    //Screenshot validation-Default dialog size
    expect.soft(await page.locator('.e-dialog').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Maximize dialog if maximize button exists
    const maximizeBtn = page.locator('.e-dlg-header .e-maximize');
    const isVisible = await maximizeBtn.isVisible().catch(() => false);
    if (isVisible) {
        await maximizeBtn.click();
        await page.waitForTimeout(500);
        //Screenshot validation-Maximized dialog
        expect.soft(await page.locator('.e-dialog').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('14-Search in Gantt', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dialog');
    await page.waitForTimeout(2000);
    //Open Gantt Dialog
    await page.locator("button:has-text('Open Gantt Dialog')").click();
    await page.waitForTimeout(500);
    //Click search button if available
    const searchBtn = page.locator('.e-toolbar-item:has-text("Search")').first();
    const isVisible = await searchBtn.isVisible().catch(() => false);
    if (isVisible) {
        await searchBtn.click();
        await page.waitForTimeout(500);
        //Type search query
        await page.locator('.e-search').fill('Planning');
        await page.waitForTimeout(800);
        //Screenshot validation-Search results
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('15-Predecessor link visualization', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dialog');
    await page.waitForTimeout(2000);
    //Open Gantt Dialog
    await page.locator("button:has-text('Open Gantt Dialog')").click();
    await page.waitForTimeout(500);
    //Expand all to see dependencies
    await page.locator('.e-toolbar-item:has-text("Expand")').first().click();
    await page.waitForTimeout(500);
    //Hover over a connector line if visible
    const connector = page.locator('.e-connector-line').first();
    const isVisible = await connector.isVisible().catch(() => false);
    if (isVisible) {
        await connector.hover();
        await page.waitForTimeout(500);
    }
    //Screenshot validation-Dependencies visible
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

