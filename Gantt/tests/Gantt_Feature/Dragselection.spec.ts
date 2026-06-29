import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

/** Drag between two locators (centre-to-centre) */
async function dragBetweenRows(
    page: import('@playwright/test').Page,
    fromLocator: import('@playwright/test').Locator,
    toLocator: import('@playwright/test').Locator,
    steps = 15
) {
    const fromBox = await fromLocator.boundingBox();
    const toBox   = await toLocator.boundingBox();
    if (!fromBox || !toBox) throw new Error('Cannot get bounding boxes for drag');
    await page.mouse.move(fromBox.x + fromBox.width / 2, fromBox.y + fromBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(toBox.x + toBox.width / 2, toBox.y + toBox.height / 2, { steps });
    await page.mouse.up();
}

/** Count aria-selected rows in the treegrid */
async function selectedRowCount(page: import('@playwright/test').Page) {
    return page.locator('.e-treegrid .e-row[aria-selected="true"]').count();
}

/** Navigate to a DS page and wait for the grid */
async function gotoDS(page: import('@playwright/test').Page, url: string) {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
    await page.waitForSelector('.e-treegrid .e-row', { state: 'visible', timeout: 15000 });
    await page.waitForTimeout(600);
}

const URL_DS  = Helper.baseUrlserver + '/BLAZ-967659DS';  // 18 rows, events
const URL_967 = Helper.baseUrlserver + '/BLAZ-967659';    //  8 rows, flat

// ---------------------------------------------------------------------------
// DS-001  Initial load – BLAZ-967659 (8-row flat page)
// ---------------------------------------------------------------------------
test('DS-001', async ({ page }) => {
    await gotoDS(page, URL_967);
    await expect(page.locator('.e-treegrid')).toBeVisible();
    const rowCount = await page.locator('.e-treegrid .e-row').count();
    expect.soft(rowCount).toBe(8);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-002  Initial load – BLAZ-967659DS (18-row hierarchical page)
// ---------------------------------------------------------------------------
test('DS-002', async ({ page }) => {
    await gotoDS(page, URL_DS);
    await expect(page.locator('.e-treegrid')).toBeVisible();
    const rowCount = await page.locator('.e-treegrid .e-row').count();
    expect.soft(rowCount).toBe(18);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-003  Event paragraphs rendered on DS page before any interaction
// ---------------------------------------------------------------------------
test('DS-003', async ({ page }) => {
    await gotoDS(page, URL_DS);
    await expect(page.locator('p').nth(0)).toBeVisible();
    await expect(page.locator('p').nth(1)).toBeVisible();
    await expect(page.locator('p').nth(2)).toBeVisible();
    await expect(page.locator('p').nth(3)).toBeVisible();
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-004  Drag rows 1→8 on 8-row page, ≥8 rows selected
// ---------------------------------------------------------------------------
test('DS-004', async ({ page }) => {
    await gotoDS(page, URL_967);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(7));
    await page.waitForTimeout(800);
    const count = await selectedRowCount(page);
    expect.soft(count).toBeGreaterThanOrEqual(8);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-005  Drag rows 1→8 on DS (18-row) page, ≥8 rows selected
// ---------------------------------------------------------------------------
test('DS-005', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(7));
    await page.waitForTimeout(800);
    const count = await selectedRowCount(page);
    expect.soft(count).toBeGreaterThanOrEqual(8);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-006  RowDragSelectionStarting event fires – first paragraph updates
// ---------------------------------------------------------------------------
test('DS-006', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(7));
    await page.waitForTimeout(1000);
    const eventText = await page.locator('p').nth(0).innerText();
    expect.soft(eventText).toMatch(/DragSelection/i);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-007  RowDragSelectionCompleting event fires – third paragraph updates
// ---------------------------------------------------------------------------
test('DS-007', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(7));
    await page.waitForTimeout(1000);
    const text = await page.locator('p').nth(2).innerText();
    expect.soft(text.length).toBeGreaterThan(5);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-008  RowDragSelectionCompleted event fires – fourth paragraph updates
// ---------------------------------------------------------------------------
test('DS-008', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(7));
    await page.waitForTimeout(1000);
    const text = await page.locator('p').nth(3).innerText();
    expect.soft(text.length).toBeGreaterThan(5);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-009  Starting args paragraph populated after drag
// ---------------------------------------------------------------------------
test('DS-009', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(4));
    await page.waitForTimeout(800);
    const startingText = await page.locator('p').nth(1).innerText();
    expect.soft(startingText.length).toBeGreaterThan(3);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-010  Single-row drag (stays in one row) selects ≥1 row
// ---------------------------------------------------------------------------
test('DS-010', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const firstCell = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]').first();
    const box = await firstCell.boundingBox();
    if (!box) throw new Error('Cannot find first cell bounding box');
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width / 2 + 5, box.y + box.height / 2, { steps: 5 });
    await page.mouse.up();
    await page.waitForTimeout(600);
    const count = await selectedRowCount(page);
    expect.soft(count).toBeGreaterThanOrEqual(1);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-011  ArrowDown navigates focus after drag selection
// ---------------------------------------------------------------------------
test('DS-011', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(7));
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(400);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-012  ArrowUp navigates focus after drag selection
// ---------------------------------------------------------------------------
test('DS-012', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(7));
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(400);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-013  Tab key after drag – grid stays stable
// ---------------------------------------------------------------------------
test('DS-013', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(1), cells.nth(4));
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.keyboard.press('Tab');
    await page.waitForTimeout(400);
    await expect(page.locator('.e-treegrid')).toBeVisible();
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-014  Escape during drag – grid stays stable
// ---------------------------------------------------------------------------
test('DS-014', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const row3 = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]').nth(2);
    const row7 = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]').nth(6);
    const box3 = await row3.boundingBox();
    const box7 = await row7.boundingBox();
    if (!box3 || !box7) throw new Error('Cannot get bounding boxes');
    await page.mouse.move(box3.x + box3.width / 2, box3.y + box3.height / 2);
    await page.mouse.down();
    await page.mouse.move(box7.x + box7.width / 2, box7.y + box7.height / 2, { steps: 12 });
    await page.keyboard.press('Escape');
    await page.mouse.up();
    await page.waitForTimeout(800);
    await expect(page.locator('.e-treegrid')).toBeVisible();
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-015  Enter key after selection – grid stays stable
// ---------------------------------------------------------------------------
test('DS-015', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(7));
    await page.waitForTimeout(600);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(600);
    await expect(page.locator('.e-treegrid')).toBeVisible();
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-016  Shift+Click extends selection beyond drag range
// ---------------------------------------------------------------------------
test('DS-016', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(7));
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.keyboard.down('Shift');
    await cells.nth(11).click({ force: true });
    await page.keyboard.up('Shift');
    await page.waitForTimeout(600);
    const count = await selectedRowCount(page);
    expect.soft(count).toBeGreaterThanOrEqual(1);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-017  Shift+ArrowDown extends keyboard selection after drag
// ---------------------------------------------------------------------------
test('DS-017', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(7));
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.keyboard.down('Shift');
    for (let i = 0; i < 3; i++) {
        await page.keyboard.press('ArrowDown');
        await page.waitForTimeout(80);
    }
    await page.keyboard.up('Shift');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-018  Ctrl+Click adds individual rows to selection
// ---------------------------------------------------------------------------
test('DS-018', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(3));
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await cells.nth(7).click({ modifiers: ['Control'], force: true });
    await page.waitForTimeout(200);
    await cells.nth(10).click({ modifiers: ['Control'], force: true });
    await page.waitForTimeout(400);
    await expect(page.locator('.e-treegrid')).toBeVisible();
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-019  Two sequential drags – grid stays stable after each
// ---------------------------------------------------------------------------
test('DS-019', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(4), 10);
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await dragBetweenRows(page, cells.nth(6), cells.nth(11), 10);
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await expect(page.locator('.e-treegrid')).toBeVisible();
});

// ---------------------------------------------------------------------------
// DS-020  Drag + Escape + re-drag – fresh selection works
// ---------------------------------------------------------------------------
test('DS-020', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(5));
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    await dragBetweenRows(page, cells.nth(8), cells.nth(14));
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    const count = await selectedRowCount(page);
    expect.soft(count).toBeGreaterThanOrEqual(1);
});

// ---------------------------------------------------------------------------
// DS-021  Drag all 18 rows on DS page – all (or most) selected
// ---------------------------------------------------------------------------
test('DS-021', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    const total = await cells.count();
    await dragBetweenRows(page, cells.nth(0), cells.nth(total - 1), 20);
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    const count = await selectedRowCount(page);
    expect.soft(count).toBeGreaterThanOrEqual(total - 2);
});

// ---------------------------------------------------------------------------
// DS-022  Drag all 8 rows on 967659 page – all selected
// ---------------------------------------------------------------------------
test('DS-022', async ({ page }) => {
    await gotoDS(page, URL_967);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(7), 20);
    await page.waitForTimeout(800);
    const count = await selectedRowCount(page);
    expect.soft(count).toBeGreaterThanOrEqual(8);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-023  Drag middle range rows 3→10 on DS page
// ---------------------------------------------------------------------------
test('DS-023', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(2), cells.nth(9));
    await page.waitForTimeout(800);
    const count = await selectedRowCount(page);
    expect.soft(count).toBeGreaterThanOrEqual(1);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-024  Drag bottom range rows 11→17 on DS page
// ---------------------------------------------------------------------------
test('DS-024', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(10), cells.nth(16));
    await page.waitForTimeout(800);
    const count = await selectedRowCount(page);
    expect.soft(count).toBeGreaterThanOrEqual(1);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-025  Full-page screenshot after drag on DS page
// ---------------------------------------------------------------------------
test('DS-025', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(7));
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-026  Full-page screenshot after drag on 967659 page
// ---------------------------------------------------------------------------
test('DS-026', async ({ page }) => {
    await gotoDS(page, URL_967);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(7));
    await page.waitForTimeout(800);
    expect.soft(await page.screenshot({ fullPage: true })).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-027  Drag selection starts mid-grid (rows 5→12)
// ---------------------------------------------------------------------------
test('DS-027', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(4), cells.nth(11));
    await page.waitForTimeout(800);
    const count = await selectedRowCount(page);
    expect.soft(count).toBeGreaterThanOrEqual(1);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-028  Arrow key navigation within drag selection (ArrowRight)
// ---------------------------------------------------------------------------
test('DS-028', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(2), cells.nth(6));
    await page.waitForTimeout(600);
    await cells.nth(4).click({ force: true });
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(200);
    await expect(page.locator('.e-treegrid')).toBeVisible();
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-029  Drag then click single row – single row selected
// ---------------------------------------------------------------------------
test('DS-029', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(7));
    await page.waitForTimeout(600);
    // Single click a specific row
    await cells.nth(5).click({ force: true });
    await page.waitForTimeout(400);
    await expect(page.locator('.e-treegrid')).toBeVisible();
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-030  Rapid drag (fewer steps) – still produces selection
// ---------------------------------------------------------------------------
test('DS-030', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(7), 5);
    await page.waitForTimeout(800);
    const count = await selectedRowCount(page);
    expect.soft(count).toBeGreaterThanOrEqual(1);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-031  Slow drag (many steps) – still produces selection
// ---------------------------------------------------------------------------
test('DS-031', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(7), 30);
    await page.waitForTimeout(800);
    const count = await selectedRowCount(page);
    expect.soft(count).toBeGreaterThanOrEqual(1);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-032  Extend selection with Shift+Arrow keys after drag
// ---------------------------------------------------------------------------
test('DS-032', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(5));
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.keyboard.down('Shift');
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(100);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.up('Shift');
    await page.waitForTimeout(400);
    await expect(page.locator('.e-treegrid')).toBeVisible();
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-033  Drag on 967659 page then keyboard navigate
// ---------------------------------------------------------------------------
test('DS-033', async ({ page }) => {
    await gotoDS(page, URL_967);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    await dragBetweenRows(page, cells.nth(0), cells.nth(4));
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// ---------------------------------------------------------------------------
// DS-034  Grid remains stable after multiple drag+escape cycles
// ---------------------------------------------------------------------------
test('DS-034', async ({ page }) => {
    await gotoDS(page, URL_DS);
    const cells = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]');
    for (let i = 0; i < 3; i++) {
        await dragBetweenRows(page, cells.nth(i), cells.nth(i + 4), 8);
        await page.waitForTimeout(400);
        await page.keyboard.press('Escape');
        await page.waitForTimeout(200);
    }
    await expect(page.locator('.e-treegrid')).toBeVisible();
    const rowCount = await page.locator('.e-treegrid .e-row').count();
    expect.soft(rowCount).toBe(18);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
