import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/Helper';

test('1-Tab sample rendering', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-tab');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5158/gantt-tab' });
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Screenshot validation-Sample rendering
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Project Beta', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-tab');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5158/gantt-tab' });
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Click Project Beta tab
    const betaTab = page.locator('.e-tab-text:has-text("Project Beta")');
    const isBetaVisible = await betaTab.isVisible().catch(() => false);
    if (isBetaVisible) {
        await betaTab.click();
        await page.waitForTimeout(800);
            await page.waitForTimeout(300);
        //Screenshot validation-Project Beta
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    }
    //Click Summary tab if exists
    const summaryTab = page.locator('.e-tab-text:has-text("Summary")');
    const isSummaryVisible = await summaryTab.isVisible().catch(() => false);
    if (isSummaryVisible) {
        await summaryTab.click();
        await page.waitForTimeout(800);
            await page.waitForTimeout(300);
        //Screenshot validation-Summary (tab content, not Gantt)
        const summaryContent = page.locator('.e-content .e-item.e-active');
        const hasSummaryContent = await summaryContent.isVisible().catch(() => false);
        if (hasSummaryContent) {
            expect.soft(await summaryContent.screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
        } else {
            expect.soft(await page.locator('.e-tab').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
        }
    }
});

test('3-Switch between all tabs', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-tab');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Click Project Beta tab
    await page.locator('.e-tab-text:has-text("Project Beta")').click();
    await page.waitForTimeout(800);
    await page.waitForTimeout(300);
    //Screenshot validation-Project Beta active
    expect.soft(await page.locator('.e-tab').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Project Gamma tab if exists
    const gammaTab = page.locator('.e-tab-text:has-text("Project Gamma")');
    const isVisible = await gammaTab.isVisible().catch(() => false);
    if (isVisible) {
        await gammaTab.click();
        await page.waitForTimeout(800);
            await page.waitForTimeout(300);
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    }
    //Return to Project Alpha
    await page.locator('.e-tab-text:has-text("Project Alpha")').click();
    await page.waitForTimeout(800);
    await page.waitForTimeout(300);
});

test('4-Gantt operations in Project Alpha tab', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-tab');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Ensure Project Alpha is active
    await page.locator('.e-tab-text:has-text("Project Alpha")').click();
    await page.waitForTimeout(500);
    await page.waitForTimeout(300);
    //Check if Expand button exists
    const expandBtn = page.locator('.e-toolbar-item:has-text("Expand")').first();
    const isExpandVisible = await expandBtn.isVisible().catch(() => false);
    if (isExpandVisible) {
        await expandBtn.click();
        await page.waitForTimeout(500);
            await page.waitForTimeout(300);
        //Screenshot validation-Expanded
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
        //Collapse all tasks
        const collapseBtn = page.locator('.e-toolbar-item:has-text("Collapse")').first();
        const isCollapseVisible = await collapseBtn.isVisible().catch(() => false);
        if (isCollapseVisible) {
            await collapseBtn.click();
            await page.waitForTimeout(500);
                    await page.waitForTimeout(300);
            //Screenshot validation-Collapsed
            expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
        }
    } else {
        //Take screenshot of default state if toolbar not available
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('5-Gantt operations in Project Beta tab', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-tab');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Click Project Beta tab
    await page.locator('.e-tab-text:has-text("Project Beta")').click();
    await page.waitForTimeout(800);
    await page.waitForTimeout(300);
    //Check if Zoom In button exists
    const zoomInBtn = page.locator('.e-toolbar-item[title*="Zoom in"]').first();
    const isZoomInVisible = await zoomInBtn.isVisible().catch(() => false);
    if (isZoomInVisible) {
        await zoomInBtn.click();
        await page.waitForTimeout(500);
            await page.waitForTimeout(300);
        //Screenshot validation-Zoomed in
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
        //Zoom to Fit
        const zoomFitBtn = page.locator('.e-toolbar-item[title*="Zoom to fit"]').first();
        const isZoomFitVisible = await zoomFitBtn.isVisible().catch(() => false);
        if (isZoomFitVisible) {
            await zoomFitBtn.click();
            await page.waitForTimeout(500);
                    await page.waitForTimeout(300);
            //Screenshot validation-Zoom to fit
            expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
        }
    } else {
        //Take screenshot of default state if zoom buttons not available
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('6-Add task in tab', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-tab');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Click Add button
    await page.locator('.e-toolbar-item:has-text("Add")').first().click();
    await page.waitForTimeout(800);
    await page.waitForTimeout(300);
    //Screenshot validation-Add dialog
    expect.soft(await page.locator('.e-dialog').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Close dialog
    await page.locator('.e-dialog button:has-text("Cancel")').last().click();
    await page.waitForTimeout(300);
});

test('7-Edit task in tab', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-tab');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Double click first row to open edit dialog
    await page.locator('.e-row').first().dblclick();
    await page.waitForTimeout(1000);
    await page.waitForTimeout(300);
    //Screenshot validation-Edit dialog
    expect.soft(await page.locator('.e-dialog').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Close dialog
    await page.locator('.e-dialog button:has-text("Cancel")').last().click();
    await page.waitForTimeout(300);
});

test('8-Context menu in tab', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-tab');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Right click on first task row
    await page.locator('.e-row').first().click({ button: 'right' });
    await page.waitForTimeout(600);
    await page.waitForTimeout(300);
    //Screenshot validation-Context menu
    expect.soft(await page.locator('.e-contextmenu').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Close menu
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
});

test('9-Tab navigation with keyboard', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-tab');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Focus on tab header
    await page.locator('.e-tab-header').click();
    await page.waitForTimeout(300);
    //Navigate with arrow keys
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500);
    await page.waitForTimeout(300);
    //Screenshot validation-Next tab active
    expect.soft(await page.locator('.e-tab').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Navigate back
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.waitForTimeout(300);
});

test('10-Taskbar interaction in each tab', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-tab');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Hover over taskbar in Project Alpha
    const taskbar1 = page.locator('.e-gantt-child-taskbar').first();
    await taskbar1.hover();
    await page.waitForTimeout(800);
    await page.waitForTimeout(300);
    //Screenshot validation-Taskbar tooltip
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Switch to Project Beta
    await page.locator('.e-tab-text:has-text("Project Beta")').click();
    await page.waitForTimeout(800);
    await page.waitForTimeout(300);
    //Hover over taskbar in Project Beta
    const taskbar2 = page.locator('.e-gantt-child-taskbar').first();
    await taskbar2.hover();
    await page.waitForTimeout(800);
    await page.waitForTimeout(300);
    //Screenshot validation-Taskbar tooltip in Beta
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Filter in tab Gantt', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-tab');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Click filter icon on first column
    await page.locator('.e-headercell .e-filtermenudiv').first().click();
    await page.waitForTimeout(500);
    await page.waitForTimeout(300);
    //Screenshot validation-Filter menu
    expect.soft(await page.locator('.e-filter-popup').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Close filter menu
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
});

test('12-Sort columns in tab', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-tab');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Click Task Name header to sort
    await page.locator('.e-headercell:has-text("Task Name")').click();
    await page.waitForTimeout(500);
    await page.waitForTimeout(300);
    //Screenshot validation-Sorted ascending
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click again to sort descending
    await page.locator('.e-headercell:has-text("Task Name")').click();
    await page.waitForTimeout(500);
    await page.waitForTimeout(300);
    //Screenshot validation-Sorted descending
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
