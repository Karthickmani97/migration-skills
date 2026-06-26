import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('UAR-001 Undo action', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])").click();
    await page.waitForTimeout(200);
    //click the save butto
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    //
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Undo button
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Undo action is performed
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-002 Redo action', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])").click();
    await page.waitForTimeout(200);
    //click the save butto
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    //
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Undo button
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(100);
    //Click the Redo button
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Undo then Redo action is performed
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Zoom In and Undo action
test('UAR-003 Zoom In and Undo', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    // Add a new task
    await page.locator("(//span[text()='Add'])").click();
    await page.waitForTimeout(200);
    // Save the task
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    // Before Zoom In
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Zoom In
    await page.locator("(//span[text()='Zoom in'])").click();
    await page.waitForTimeout(500);
    // Undo last action (Zoom In)
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-004 Zoom In and Zoom out actions with Undo', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    // Navigate to the Gantt page with undo/redo enabled
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    // Allow the page and Gantt to fully render
    await page.waitForTimeout(2000);
    // Add a new task (ensures there is content to interact with)
    await page.locator("(//span[text()='Add'])").click();
    await page.waitForTimeout(200);
    // Save the added task
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    // Baseline screenshot before any zoom operations
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Zoom In (increase time scale granularity)
    await page.locator("(//span[text()='Zoom in'])").click();
    await page.waitForTimeout(2000);
    // Screenshot after Zoom In for visual validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Zoom out (decrease time scale granularity)
    await page.locator("(//span[text()='Zoom out'])").click();
    await page.waitForTimeout(2000);
    // Screenshot after Zoom out for visual validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo the last zoom operation (should revert the Zoom out and return to the Zoom In state)
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(2000);
    // Final screenshot Screenshot validation to confirm the last action has been reverted correctly
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-005 Zoom In, Zoom out, Zoom to fit and Undo', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Add task
    await page.locator("(//span[text()='Add'])").click();
    await page.waitForTimeout(200);
    //Save task
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    //Before zoom actions
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Zoom In
    await page.locator("(//span[text()='Zoom in'])").click();
    await page.waitForTimeout(2000);
    //After Zoom In
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Zoom out
    await page.locator("(//span[text()='Zoom out'])").click();
    await page.waitForTimeout(2000);
    //After Zoom out
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Zoom to fit
    await page.locator("(//span[text()='Zoom to fit'])").click();
    await page.waitForTimeout(2000);
    //After Zoom to fit
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-006 Zoom In, Zoom out, Zoom to fit and Undo Outdent', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Add task
    await page.locator("(//span[text()='Add'])").click();
    await page.waitForTimeout(200);
    //Save task
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    //Before zoom actions
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Zoom In
    await page.locator("(//span[text()='Zoom in'])").click();
    await page.waitForTimeout(500);
    //Zoom out
    await page.locator("(//span[text()='Zoom out'])").click();
    await page.waitForTimeout(500);
    //Zoom to fit
    await page.locator("(//span[text()='Zoom to fit'])").click();
    await page.waitForTimeout(500);
    //Right click the recoord to Outdent
    await page.locator("(//td[contains(@class,'e-rowcell')])[14]").click({ button: 'right' });
    await page.waitForTimeout(500);
    await page.locator("//li[text()='Outdent']").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-007 Zoom In, Zoom out, Zoom to fit and Undo Indent', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Add task
    await page.locator("(//span[text()='Add'])").click();
    await page.waitForTimeout(200);
    //Save task
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    //Zoom In
    await page.locator("(//span[text()='Zoom in'])").click();
    await page.waitForTimeout(500);
    //Zoom out
    await page.locator("(//span[text()='Zoom out'])").click();
    await page.waitForTimeout(500);
    //Zoom to fit
    await page.locator("(//span[text()='Zoom to fit'])").click();
    await page.waitForTimeout(500);
    //Right click the recoord to Indent
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Indent
    await page.locator("//li[text()='Indent']").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-008 Task Information', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Right click the recoord to Indent
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Task Information
    await page.locator("//li[text()='Task Information']").click();
    await page.waitForTimeout(500);
    //Click the cancek button
    await page.locator("(//button[text()='Cancel'])").click();
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator("(//span[text()='Delete'])").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-009 Delete  Task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Right click the recoord to Indent
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Delete Task
    await page.locator("//li[text()='Delete Task']").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-010 Convert To Milestone', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Right click the recoord to Indent
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Delete Task
    await page.locator("//li[text()='Convert']").click();
    await page.waitForTimeout(500);
    //Click Convert to Milestone
    await page.locator("//li[text()='To Milestone']").click();
    await page.waitForTimeout(500);
    //Zoom to fit
    await page.locator("(//span[text()='Zoom to fit'])").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-011 Cell edit the record ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Double click to edit 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control +A to select All 
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete existing value
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type new value
    await page.keyboard.type('Cell Edited Task Name');
    await page.waitForTimeout(500);
    //Press the Enter Key
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-012 Dialog Edit the record ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Double click to edit 
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").click();
    await page.waitForTimeout(500);
    //Click the Edit button on the toolbar
    await page.locator("(//span[text()='Edit'])").click();
    await page.waitForTimeout(300);
    //select Task Name field
    await page.locator('//input[@name="TaskName"]').click();
    await page.waitForTimeout(500);
    //Press Control +A to select All 
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete existing value
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type new value
    await page.keyboard.type('Dialog Edited Task Name');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-013 Column resizer of 1st record', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });

    // Give grid time to render
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(1000);

    //  Column resizer handle
    await page.locator("(//div[contains(@class,'e-rhandler e-rcursor')])[1]").click();

    // Locate the same resizer handle for dragging
    const handle = page.locator("(//div[contains(@class,'e-rhandler e-rcursor')])[1]");
    await handle.scrollIntoViewIfNeeded();
    await handle.waitFor({ state: 'visible' });

    // Read the header cell width that this handle belongs to
    const getHeaderWidth = async () =>
        await handle.evaluate((el) => {
            const headerCell = el.closest('.e-headercell');
            return headerCell ? Math.round(headerCell.getBoundingClientRect().width) : 0;
        });

    const before = await getHeaderWidth();
    expect(before).toBeGreaterThan(40); // sanity check

    // --- Drag the handle to the right to increase width ---
    const box = await handle.boundingBox();
    if (!box) throw new Error('Resizer handle not visible / no bounding box');

    // Start from the middle of the handle
    const startX = box.x + box.width / 2;
    const startY = box.y + box.height / 2;

    await page.mouse.move(startX, startY);
    await page.mouse.down();

    // Drag in steps for reliability across engines
    const deltaX = 160; // adjust as needed
    const steps = 12;
    for (let i = 1; i <= steps; i++) {
        await page.mouse.move(startX + (deltaX * i) / steps, startY);
    }
    await page.mouse.up();

    const after = await getHeaderWidth();

    // Assert the width increased meaningfully (allow min/max constraints)
    expect(after).toBeGreaterThanOrEqual(before + 100);

    // Optional visual check of the gantt after resize
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-014 Convert To Task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Right click the recoord to Indent
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Convert To Task
    await page.locator("//li[text()='Convert']").click();
    await page.waitForTimeout(500);
    //Click Convert to Task
    await page.locator("//li[text()='To Task']").click();
    await page.waitForTimeout(500);
    //Zoom to fit
    await page.locator("(//span[text()='Zoom to fit'])").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-015 Multi sort and Undo Redo ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Press the keyboard Control button down
    await page.keyboard.down("Control");
    await page.waitForTimeout(500);
    //Sort ascend 1st column
    await page.locator("//th[contains(@class, 'e-headercell')][1]").click();
    await page.waitForTimeout(500);
    //Sort ascend 2nd column
    await page.locator("//th[contains(@class, 'e-headercell')][2]").click();
    await page.waitForTimeout(500);
    //Sort ascend 3rd column
    await page.locator("//th[contains(@class, 'e-headercell')][3]").click();
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.up("Control");
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-016 Next Timespan ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Select Next Timespan
    await page.locator("(//span[text()='Next timespan'])").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-017 Previous Timespan ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Select Previous Timespan
    await page.locator("(//span[text()='Previous timespan'])").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Issue have to click Undo button  times to undo the last action
test('UAR-018 Filter the Taskname', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Click the column menu of Task Name
    await page.locator("(//div[contains(@class,'e-columnmenu')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Filter option
    await page.locator("//li[text()='Filter']").click();
    await page.waitForTimeout(500);
    //Type the filter value in Task Name column
    await page.locator('//input[@placeholder="Enter the value"]').fill('List Materials');
    await page.waitForTimeout(500);
    //Click the Filter button
    await page.locator("(//button[text()='Filter'])").click();
    await page.waitForTimeout(500);
    //Click Undo button to undo the last action
    await page.locator("#GanttChart_undo").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("#GanttChart_redo").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-019 Filter the Taskname', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Click the column menu of Task Name
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //Type the filter value in Task Name column
    await page.locator('//input[@placeholder="Enter the value"]').fill('List Materials');
    await page.waitForTimeout(500);
    //Click the Filter button
    await page.locator("(//button[text()='Filter'])").click();
    await page.waitForTimeout(500);
    //Click zoom to fit 
    await page.locator("(//span[text()='Zoom to fit'])").click();
    await page.waitForTimeout(500);
    //Click Undo button twice to undo the last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-020 Add Above', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Right click the recoord to Add Above
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Add
    await page.locator("//li[text()='Add']").click();
    await page.waitForTimeout(300);
    //Click Above
    await page.locator("//li[text()='Above']").click();
    await page.waitForTimeout(200);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-021 Add Below', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Right click the recoord to Add Below
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Add
    await page.locator("//li[text()='Add']").click();
    await page.waitForTimeout(300);
    //Click Below
    await page.locator("//li[text()='Below']").click();
    await page.waitForTimeout(200);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-022 Add Child', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Right click the recoord to Add Child
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Add
    await page.locator("//li[text()='Add']").click();
    await page.waitForTimeout(300);
    //Click Child
    await page.locator("//li[text()='Child']").click();
    await page.waitForTimeout(200);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-023 Add Milestone', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Right click the recoord to Add Milestone
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Add
    await page.locator("//li[text()='Add']").click();
    await page.waitForTimeout(300);
    //Click Milestone
    await page.locator("//li[text()='Milestone']").click();
    await page.waitForTimeout(200);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-024 Add Milestone use keyboard Navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Right click the recoord to Add Milestone
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Add
    await page.locator("//li[text()='Add']").click();
    await page.waitForTimeout(300);
    //Click Milestone
    await page.locator("//li[text()='Milestone']").click();
    await page.waitForTimeout(200);
    // Undo using Ctrl + Z
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyZ');
    await page.keyboard.up('Control');
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + y
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyY');
    await page.keyboard.up('Control');
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-025 Add Child using Keyboard Navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Right click the recoord to Add Child
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Add
    await page.locator("//li[text()='Add']").click();
    await page.waitForTimeout(300);
    //Click Child
    await page.locator("//li[text()='Child']").click();
    await page.waitForTimeout(200);
    // Undo using Ctrl + Z
    await page.keyboard.press('Control+Z');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + Y
    await page.keyboard.press('Control+Y');
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-026 Add Below using keyboard Navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Right click the recoord to Add Below
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Add
    await page.locator("//li[text()='Add']").click();
    await page.waitForTimeout(300);
    //Click Below
    await page.locator("//li[text()='Below']").click();
    await page.waitForTimeout(200);
    // Undo using Ctrl + Z
    await page.keyboard.press('Control+Z');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + Y
    await page.keyboard.press('Control+Y');
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-027 Add Above using keyboard navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Right click the recoord to Add Above
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Add
    await page.locator("//li[text()='Add']").click();
    await page.waitForTimeout(300);
    //Click Above
    await page.locator("//li[text()='Above']").click();
    await page.waitForTimeout(200);
    // Undo using Ctrl + Z
    await page.keyboard.press('Control+Z');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Redo using Ctrl + Y
    await page.keyboard.press('Control+Y');
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-028 Autofit All Columns', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Right click the to Autofit All Columns
    await page.locator("(//th[contains(@class,'e-headercell')])[2]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click AutoFit All Columns
    await page.locator("//li[text()='AutoFit All Columns']").click();
    await page.waitForTimeout(300);
    //Right click the recoord to Add Above
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Add
    await page.locator("//li[text()='Add']").click();
    await page.waitForTimeout(300);
    //Click Above
    await page.locator("//li[text()='Above']").click();
    await page.waitForTimeout(200);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-029 AutoFit Column', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Right click the to AutoFit Column
    await page.locator("(//th[contains(@class,'e-headercell')])[2]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click AutoFit Column
    await page.locator("//li[text()='AutoFit Column']").click();
    await page.waitForTimeout(300);
    //Right click the recoord to Add Below
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Add
    await page.locator("//li[text()='Add']").click();
    await page.waitForTimeout(300);
    //Click Below
    await page.locator("//li[text()='Below']").click();
    await page.waitForTimeout(200);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-030 sort ascending', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Right click the to Sort Ascending
    await page.locator("(//th[contains(@class,'e-headercell')])[2]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Sort Ascending
    await page.locator("//li[text()='Sort Ascending']").click();
    await page.waitForTimeout(300);
    //Right click the recoord to Add Below
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Add
    await page.locator("//li[text()='Add']").click();
    await page.waitForTimeout(300);
    //Click Below
    await page.locator("//li[text()='Below']").click();
    await page.waitForTimeout(200);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-031 Sort Descending', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/enable-undo-and-redo');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/enable-undo-and-redo' });
    await page.waitForTimeout(2000);
    //Right click the to Sort Descending
    await page.locator("(//th[contains(@class,'e-headercell')])[2]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Sort Descending
    await page.locator("//li[text()='Sort Descending']").click();
    await page.waitForTimeout(300);
    //Right click the recoord to Add Below
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Add
    await page.locator("//li[text()='Add']").click();
    await page.waitForTimeout(300);
    //Click Below
    await page.locator("//li[text()='Below']").click();
    await page.waitForTimeout(200);
    //Undo last action
    await page.locator("(//span[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//span[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//performing actions via methods
test('UAR-032 Delete the record via method', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Select the record to delete
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").click();
    await page.waitForTimeout(500);
    //Click the Delete button on the toolbar
    await page.locator("(//span[text()='Delete'])").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-033 Inline Edit the record via method', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Double click to edit
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").dblclick();
    await page.waitForTimeout(500);
    //Press Control +A to select All
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete existing value
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type new value
    await page.keyboard.type('Inline Edited Task Name');
    await page.waitForTimeout(500);
    //Press Enter to save the edited value
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-034 Save the edited record via method', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Double click to edit
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").dblclick();
    await page.waitForTimeout(500);
    //Press Control +A to select All
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete existing value
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type new value
    await page.keyboard.type('Saved Edited Task Name');
    await page.waitForTimeout(500);
    //Press the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Issue in Undo Redo action
test('UAR-035 Convert to Milestone', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Right click the milestone to Convert to Task
    await page.locator("(//td[contains(@class,'e-rowcell')])[8]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Convert to Task
    await page.locator("//li[text()='Convert']").click();
    await page.waitForTimeout(300);
    //To Milestone
    await page.locator("//li[text()='To Milestone']").click();
    await page.waitForTimeout(300);
    //Undo last action
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-036 Add dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])").click();
    await page.waitForTimeout(200);
    //Move to dependency tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(200);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(200);
    //Click the dropdown icon of Predecessor field
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(200);
    //select the predecessor value
    await page.locator("//li[text()='1-Project initiation']").click();
    //click the save button
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Undo button
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Undo action is performed
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-037 Add record ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])").click();
    await page.waitForTimeout(200);
    //click the save button
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Undo button
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(100);
    //Click the Redo button
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Undo then Redo action is performed
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Zoom In and Undo action
test('UAR-038 Zoom In and Undo', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    // Add a new task
    await page.locator("(//span[text()='Add'])").click();
    await page.waitForTimeout(200);
    // Save the task
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    // Before Zoom In
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Zoom In
    await page.locator("(//span[text()='Zoom in'])").click();
    await page.waitForTimeout(500);
    // Undo last action (Zoom In)
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo button
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Undo then Redo action is performed
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-039 Zoom In and Zoom out actions with Undo', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    // Navigate to the Gantt page with undo/redo enabled
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    // Allow the page and Gantt to fully render
    await page.waitForTimeout(2000);
    // Add a new task (ensures there is content to interact with)
    await page.locator("(//span[text()='Add'])").click();
    await page.waitForTimeout(200);
    // Save the added task
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    // Baseline screenshot before any zoom operations
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Zoom In (increase time scale granularity)
    await page.locator("(//span[text()='Zoom in'])").click();
    await page.waitForTimeout(2000);
    // Screenshot after Zoom In for visual validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform Zoom out (decrease time scale granularity)
    await page.locator("(//span[text()='Zoom out'])").click();
    await page.waitForTimeout(2000);
    // Screenshot after Zoom out for visual validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Undo the last zoom operation (should revert the Zoom out and return to the Zoom In state)
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(2000);
    // Final screenshot Screenshot validation to confirm the last action has been reverted correctly
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo button
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Undo then Redo action is performed
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-040 Zoom In, Zoom out, Zoom to fit and Undo', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Add task
    await page.locator("(//span[text()='Add'])").click();
    await page.waitForTimeout(200);
    //Save task
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    //Zoom In
    await page.locator("(//span[text()='Zoom in'])").click();
    await page.waitForTimeout(2000);
    //Zoom out
    await page.locator("(//span[text()='Zoom out'])").click();
    await page.waitForTimeout(2000);
    //Zoom to fit
    await page.locator("(//span[text()='Zoom to fit'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Undo last action
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Redo button
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Undo then Redo action is performed
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-041 Zoom In, Zoom out, Zoom to fit and Undo Outdent', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Add task
    await page.locator("(//span[text()='Add'])").click();
    await page.waitForTimeout(200);
    //Save task
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    //Zoom In
    await page.locator("(//span[text()='Zoom in'])").click();
    await page.waitForTimeout(500);
    //Zoom out
    await page.locator("(//span[text()='Zoom out'])").click();
    await page.waitForTimeout(500);
    //Zoom to fit
    await page.locator("(//span[text()='Zoom to fit'])").click();
    await page.waitForTimeout(500);
    //Right click the recoord to Outdent
    await page.locator("(//td[contains(@class,'e-rowcell')])[14]").click({ button: 'right' });
    await page.waitForTimeout(500);
    await page.locator("//li[text()='Outdent']").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-042 Zoom In, Zoom out, Zoom to fit and Undo Indent', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Add task
    await page.locator("(//span[text()='Add'])").click();
    await page.waitForTimeout(200);
    //Save task
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    //Zoom In
    await page.locator("(//span[text()='Zoom in'])").click();
    await page.waitForTimeout(500);
    //Zoom out
    await page.locator("(//span[text()='Zoom out'])").click();
    await page.waitForTimeout(500);
    //Zoom to fit
    await page.locator("(//span[text()='Zoom to fit'])").click();
    await page.waitForTimeout(500);
    //Right click the recoord to Indent
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Indent
    await page.locator("//li[text()='Indent']").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-043 Task Information', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Right click the recoord to Indent
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Task Information
    await page.locator("//li[text()='Task Information']").click();
    await page.waitForTimeout(500);
    //Click the cancek button
    await page.locator("(//button[text()='Cancel'])").click();
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator("(//span[text()='Delete'])").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-044 Delete  Task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Right click the recoord to Indent
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Delete Task
    await page.locator("//li[text()='Delete Task']").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Undo Redo-045 Convert To Task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Right click the recoord 
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Delete Task
    await page.locator("//li[text()='Convert']").click();
    await page.waitForTimeout(500);
    //Click Convert to Task
    await page.locator("//li[text()='To Task']").click();
    await page.waitForTimeout(500);
    //Zoom to fit
    await page.locator("(//span[text()='Zoom to fit'])").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('UAR-046 Autofit All Columns', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Right click the to Autofit All Columns
    await page.locator("(//th[contains(@class,'e-headercell')])[2]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click AutoFit All Columns
    await page.locator("//li[text()='AutoFit All Columns']").click();
    await page.waitForTimeout(300);
    //Right click the recoord to Add Above
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Add
    await page.locator("//li[text()='Add']").click();
    await page.waitForTimeout(300);
    //Click Above
    await page.locator("//li[text()='Above']").click();
    await page.waitForTimeout(200);
    //Undo last action
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-047 AutoFit Column', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Right click the to AutoFit Column
    await page.locator("(//th[contains(@class,'e-headercell')])[2]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click AutoFit Column
    await page.locator("//li[text()='AutoFit Column']").click();
    await page.waitForTimeout(300);
    //Right click the recoord to Add Below
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click Add
    await page.locator("//li[text()='Add']").click();
    await page.waitForTimeout(300);
    //Click Below
    await page.locator("//li[text()='Below']").click();
    await page.waitForTimeout(200);
    //Undo last action
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-048 Next Timespan ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Select Next Timespan
    await page.locator("(//span[text()='Next timespan'])").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('UAR-049 Previous Timespan ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/gantt/performing-undo-and-redo-actions-via-methods' });
    await page.waitForTimeout(2000);
    //Select Previous Timespan
    await page.locator("(//span[text()='Previous timespan'])").click();
    await page.waitForTimeout(500);
    //Undo last action
    await page.locator("(//button[text()='Undo'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Redo last action
    await page.locator("(//button[text()='Redo'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

