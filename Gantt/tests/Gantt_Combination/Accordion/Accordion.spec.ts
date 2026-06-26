import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/Helper';

test('1-Accordion sample rendering', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-accordion');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5158/gantt-accordion' });
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Screenshot validation-Sample rendering
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Hover over Taskbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-accordion');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    const taskbar = page.locator('.e-gantt-child-taskbar').first();
    await taskbar.hover();
    await page.waitForTimeout(800);
    await page.waitForTimeout(300);
    //Screenshot validation-Hovered over child taskbar
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Expand and collapse accordion items', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-accordion');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Screenshot validation-Initial state
    expect.soft(await page.locator('.e-accordion').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Expand Timeline View
    const timelineHeader = page.locator('.e-acrdn-header:has-text("Timeline View")');
    const isTimelineVisible = await timelineHeader.isVisible().catch(() => false);
    if (isTimelineVisible) {
        await timelineHeader.click();
        await page.waitForTimeout(500);
            await page.waitForTimeout(300);
        //Screenshot validation-Timeline expanded
        expect.soft(await page.locator('.e-accordion').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('4-Expand all and collapse all in Gantt', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-accordion');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Ensure accordion is expanded
    const ganttVisible = await page.locator('.e-gantt').isVisible().catch(() => false);
    if (ganttVisible) {
        //Click Expand All button
        const expandBtn = page.locator('.e-toolbar-item:has-text("Expand")').first();
        const isExpandVisible = await expandBtn.isVisible().catch(() => false);
        if (isExpandVisible) {
            await expandBtn.click();
            await page.waitForTimeout(500);
                    await page.waitForTimeout(300);
            //Screenshot validation-Expanded
            expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
            //Click Collapse All button
            const collapseBtn = page.locator('.e-toolbar-item:has-text("Collapse")').first();
            await collapseBtn.click();
            await page.waitForTimeout(500);
                    await page.waitForTimeout(300);
            //Screenshot validation-Collapsed
            expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
        }
    }
});

test('5-Zoom operations in accordion', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-accordion');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Click Zoom In button
    const zoomInBtn = page.locator('.e-toolbar-item[title*="Zoom in"]').first();
    const isZoomVisible = await zoomInBtn.isVisible().catch(() => false);
    if (isZoomVisible) {
        await zoomInBtn.click();
        await page.waitForTimeout(500);
            await page.waitForTimeout(300);
        //Screenshot validation-Zoomed in
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
        //Zoom to fit
        const zoomFitBtn = page.locator('.e-toolbar-item[title*="Zoom to fit"]').first();
        await zoomFitBtn.click();
        await page.waitForTimeout(500);
            await page.waitForTimeout(300);
        //Screenshot validation-Zoom to fit
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('6-Add task in accordion Gantt', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-accordion');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(500);
    //Ensure Gantt is visible
    await page.locator('.e-gantt').waitFor({ state: 'visible', timeout: 5000 });
    //Click Add button
    await page.locator('.e-toolbar-item:has-text("Add")').first().click();
    await page.waitForTimeout(800);
    await page.waitForTimeout(300);
    //Screenshot validation-Add dialog
    expect.soft(await page.locator('.e-dialog').last().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Close dialog
    await page.locator('.e-dialog button:has-text("Cancel")').last().click();
    await page.waitForTimeout(300);
});

test('7-Edit task in accordion', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-accordion');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(500);
    //Ensure Gantt is visible
    await page.locator('.e-gantt').waitFor({ state: 'visible', timeout: 5000 });
    //Double click first row to open edit dialog
    await page.locator('.e-row').first().dblclick();
    await page.waitForTimeout(1000);
    await page.waitForTimeout(300);
    //Screenshot validation-Edit dialog
    expect.soft(await page.locator('.e-dialog').last().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Close dialog
    await page.locator('.e-dialog button:has-text("Cancel")').last().click();
    await page.waitForTimeout(300);
});

test('8-Context menu in accordion', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-accordion');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(500);
    //Ensure Gantt is visible
    await page.locator('.e-gantt').waitFor({ state: 'visible', timeout: 5000 });
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

test('9-Sort columns in accordion', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-accordion');
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

test('10-Search in accordion Gantt', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-accordion');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(500);
    //Ensure Gantt is visible
    await page.locator('.e-gantt').waitFor({ state: 'visible', timeout: 5000 });
    //Click Search icon
    await page.locator('.e-toolbar-item[title*="Search"]').first().click();
    await page.waitForTimeout(500);
    await page.waitForTimeout(300);
    //Type search text
    await page.locator('.e-search input').fill('Design');
    await page.waitForTimeout(800);
    await page.waitForTimeout(300);
    //Screenshot validation-Search result
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Switch between accordion panels', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-accordion');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Click Resources header
    const resourcesHeader = page.locator('.e-acrdn-header').nth(2);
    const isResourcesVisible = await resourcesHeader.isVisible().catch(() => false);
    if (isResourcesVisible) {
        await resourcesHeader.click();
        await page.waitForTimeout(500);
            await page.waitForTimeout(300);
        //Screenshot validation-Resources panel
        expect.soft(await page.locator('.e-accordion').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
        //Switch back to Project Gantt
        const ganttHeader = page.locator('.e-acrdn-header').first();
        await ganttHeader.click();
        await page.waitForTimeout(800);
            await page.waitForTimeout(300);
        //Screenshot validation-Back to Gantt
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('12-Predecessor line visualization', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-accordion');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(300);
    //Expand all to see predecessor lines
    const expandBtn = page.locator('.e-toolbar-item:has-text("Expand")').first();
    const isExpandVisible = await expandBtn.isVisible().catch(() => false);
    if (isExpandVisible) {
        await expandBtn.click();
        await page.waitForTimeout(500);
            await page.waitForTimeout(300);
    }
    //Screenshot validation-Predecessor lines visible
    expect(await page.locator('.e-gantt-chart').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

