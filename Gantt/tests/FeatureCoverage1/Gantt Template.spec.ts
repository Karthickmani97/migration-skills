import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('TET-001-Render Parent Taskbar Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Hover over the parent taskbar
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the StartDate and EndDate values of the corresponding task record.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-002-Render Child Taskbar Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Hover over the child taskbar
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the StartDate and EndDate values of the corresponding task record.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-003-Render  Baseline Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Render  Baseline Tooltip
    await page.locator("(//button[text()='Render BaseLine'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the BaseLineStartDate and BaseLineEndDate values of the corresponding task record.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-004-Render Baseline Milestone Template', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Render  Baseline Tooltip
    await page.locator("(//button[text()='Render BaseLine'])[1]").click();
    await page.waitForTimeout(2000);
    //Hover over the baseline 
    await page.locator("(//div[contains(@class,'e-baseline-bar')])[1]").hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the BaseLineStartDate and BaseLineEndDate values of the corresponding task record.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-005-Render Manual Taskbar Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click custom scheduling button
    await page.locator("(//button[text()='Custom Scheduling'])[1]").click();
    await page.waitForTimeout(2000);
    //Hover over manual 
    await page.locator("(//div[contains(@class,'e-gantt-manualparenttaskbar')])[1]").hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the IsManual value of the corresponding task record.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-006-Render Connectorline Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Hover 
    await page.mouse.move(726, 171);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the predecessor value "2FS" accurately.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-007-Render  Timeline Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Hover timeline  
    await page.mouse.move(405, 70);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display a calendar icon along with the corresponding date.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-008-Render Timeline Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Hover 
    await page.mouse.move(404, 96);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display a calendar icon along with the corresponding date.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-009-Render Milestone Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Hover over the milestone
    await page.mouse.move(1146, 309);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the StartDate and EndDate values of the corresponding task record.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Console error thrown
test('TET-010-Render Milestone Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Hover over the indicator 
    await page.mouse.move(1054, 217);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the StartDate and EndDate values of the corresponding task record.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-011-Render Editing Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //To the left 
    await page.locator('(//div[contains(@class, "e-taskbar-left-resizer e-icon")])[3]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(719, 201);
    await page.mouse.move(633, 201);
    await page.mouse.down();
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display a calendar icon along with the corresponding date.
    // expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-012-Render Editing Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Resizing 
    await page.locator('(//div[contains(@class, "e-taskbar-right-resizer e-icon")])[4]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(725, 199);
    await page.mouse.move(902, 201);
    await page.mouse.down();
    await page.waitForTimeout(1000);
    //Screenshot validation-The tooltip should display the Start Date in the format MMM dd, yyyy and the Duration values of the resizing taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-013-Render Editing Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Dragging the child task.
    await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[2]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(785, 205);
    await page.mouse.move(997, 200);
    await page.mouse.down();
    await page.waitForTimeout(1000);
    //Screenshot validation-The tooltip should display the Start Date in the format MMM dd, yyyy of the dragging taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


  test('TET-014 - Validate editing tooltip during task drag', async ({ page }) => {
    // Step 1: Navigate
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    await page.waitForLoadState('networkidle');
    const taskbar = page.locator('(//div[contains(@class, "e-gantt-parent-taskbar")])[1]');
    const tooltip = page.locator('.e-tooltip-wrap'); // common tooltip selector
    const gantt = page.locator('.sf-gantt');
    //Validation 1: Gantt is visible
    await expect(gantt).toBeVisible();
    // Step 2: Start dragging task
    await taskbar.click();
    await page.mouse.move(663, 130);
    await page.mouse.down();
    // Drag movement
    await page.mouse.move(1326, 125);
    // Validation 2: Tooltip should appear
    await expect(tooltip).toBeVisible();
    //Validation 3: Tooltip should contain date format (MMM dd, yyyy pattern)
    const tooltipText = await tooltip.innerText();
    // Example: Apr 20, 2022
    const datePattern = /\b[A-Z][a-z]{2} \d{1,2}, \d{4}\b/;
    expect(tooltipText).toMatch(datePattern);
    // Release mouse
    await page.mouse.up();
    //Validation 4: Gantt still stable after drag
    await expect(gantt).toBeVisible();
  });


test('TET-015-Render Editing Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Resizing 
    await page.locator('(//div[contains(@class, "e-taskbar-right-resizer e-icon")])[4]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(725, 199);
    await page.mouse.move(902, 201);
    await page.mouse.down();
    await page.waitForTimeout(1000);
    //Screenshot validation-The tooltip should display the Start Date in the format MMM dd, yyyy and the Duration values of the resizing taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-016-Verify Customized Parent Taskbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The parent taskbar should display the color #7ab748.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-017-Verify Customized Parent Taskbar Progress Color', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The parent taskbar should display the progress with the color #4b732a.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-018-Verify Customized Child Taskbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The child taskbar should display the color #6d619b.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-019-Verify Customized Child Taskbar Progress Color', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The parent taskbar should display the progress with the color #4e466e.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-020-Verify Customized Segment Taskbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The segment taskbar should display the color #8553F1.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-021-Verify Customized Segment Taskbar Progress Color', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The segment taskbar should display the progress with the color #0056B3.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-022-Render Customized Left Label', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The TaskName text should be displayed in the color #1e74ca.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-023-Render Customized Task Label', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The task label should display the progress as a percentage and the text should be in the color #1e74ca.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-024-Render Customized Right Label as Image', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The right label should display the image of the resources mentioned in the task.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-025-Render Baseline Template', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The baseline milestone should display with the color #fdb9c9.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-026-Render Baseline Milestone Template', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The baseline milestone should display with the color #fdb9c9.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-027-Verify Taskbar Dragging', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //drag and drop the 2 nd taskbar 
    await page.mouse.click(872, 198);
    await page.mouse.down();
    await page.mouse.move(872, 198);
    await page.mouse.move(1510, 200);
    await page.waitForTimeout(2000);
    //Screenshot validation-The Start Date should be updated to 4/10/2025.The End Date should be updated to 4/11/2025
    //expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-028-Verify Taskbar Left Resizing', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //drag and drop the 2 nd taskbar 
    await page.mouse.click(730, 201);
    await page.mouse.down();
    await page.mouse.move(730, 201);
    await page.mouse.move(597, 201);
    await page.waitForTimeout(2000);
    //Screenshot validation-The Start Date should be 3/31/2025.The End Date should be 4/8/2025.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-029-Verify Taskbar Right Resizing', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    await page.locator("(//div[@class='e-taskbar-right-resizer e-icon'])[2]").hover();
    await page.waitForTimeout(100);
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(844, 173);
    await page.waitForTimeout(600);
    await page.mouse.up();
    await page.waitForTimeout(3000);
    //Screenshot validation-The Start Date should be 4/2/2025.The End Date should be 4/8/2025.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-030-Editing progress value(Cell Editing)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[19]").dblclick();
    await page.waitForTimeout(1000);
    //Record added 
    await page.locator("(//input[contains(@class,'e-control')])[2]").click();
    await page.waitForTimeout(500);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(500);
    await page.keyboard.type("70");
    await page.waitForTimeout(500);
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The progress value should be updated to 70.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-031-Editing taskname value(Cell Editing)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the 2nd row taskname
    await page.locator("(//td[contains(@class,'e-rowcell')])[14]").dblclick();
    await page.waitForTimeout(1000);
    //select the record
    await page.locator("(//input[contains(@class,'e-control')])[2]").click();
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The task name value should be updated to "" (empty string).
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-032-Editing taskname value(Cell Editing)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the 2nd row taskname
    await page.locator("(//td[contains(@class,'e-rowcell')])[14]").dblclick();
    await page.waitForTimeout(1000);
    //select the record
    await page.locator("(//input[contains(@class,'e-control')])[2]").click();
    await page.waitForTimeout(500);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.waitForTimeout(500);
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(500);
    await page.keyboard.type("Frame walls");
    await page.waitForTimeout(500);
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The task name value should be updated to "Frame walls".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-033-Editing status value(Cell Editing)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the 2nd row status
    await page.locator("(//td[contains(@class,'e-rowcell')])[21]").dblclick();
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the records
    await page.locator("(//li[text()='Open'])[1]").click();
    await page.waitForTimeout(500);
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The status value should be updated to "Open".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//CONSOLE ERROR IS THROWN WHEN DOUBLE CLICK PRIORITY
test('TET-034-Editing priority value(Cell Editing)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the 2nd row priority
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").dblclick();
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //Enter the records
    await page.locator("(//li[text()='High'])[1]").click();
    await page.waitForTimeout(500);
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The priority value should be updated to "High".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-035-Editing progress value(Dialog Editing)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[13]").click();
    await page.waitForTimeout(1000);
    //Click the edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown for the progress
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("70");
    //Click the update button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The progress value should be updated to 70.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-036-Editing taskname value(Dialog Editing)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[13]").click();
    await page.waitForTimeout(1000);
    //Click the edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown for the taskname
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("");
    //Click the update button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The task name value should be updated to "" (empty string).
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-037-Editing status value(Dialog Editing)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[13]").click();
    await page.waitForTimeout(1000);
    //Click the edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown for the taskname
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.waitForTimeout(500);
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(500);
    await page.keyboard.type("Frame walls");
    await page.waitForTimeout(500);
    //Click the update button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The task name value should be updated to "Frame walls".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-038-Editing status value(Dialog Editing)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[13]").click();
    await page.waitForTimeout(1000);
    //Click the edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to the custom columns tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
    await page.waitForTimeout(500);
    //Click the dropdown for the status
    await page.locator("(//span[contains(@class,'e-input')])[9]").click();
    await page.waitForTimeout(500);
    //Enter the records
    await page.locator("(//li[text()='Open'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The status value should be updated to "Open".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-039-Editing priority value(Dialog Editing)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[13]").click();
    await page.waitForTimeout(1000);
    //Click the edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to the custom columns tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
    await page.waitForTimeout(500);
    //Click the dropdown for the priority
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //Enter the records
    await page.locator("(//li[text()='High'])[1]").click();
    await page.waitForTimeout(500);
    //Click the update button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The priority value should be updated to "High".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-040-Adding Connector Line Between Two Tasks', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Move FF from the 2 nd to the 4 th 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[4]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(2000);
    //Screenshot validation-The Predecessor value should be updated to "3FS,2FF+16 days".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-041-Connector Line Tooltip While Dropping the Connector Line', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Move FF from the 2 nd to the 4 th 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[4]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(5000);
        }
    }
    await page.waitForTimeout(1000);
    //Screenshot validation-The tooltip should display the correct predecessor relation (e.g., 2FF), indicating the type of dependency being created.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-042-Render Manual Taskbar Template', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Render  Baseline Tooltip
    await page.locator("(//button[text()='Custom Scheduling'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The manual taskbar should display with the color #1995AD.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-043-Customized Manual Taskbar Progress Color', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Render  Baseline Tooltip
    await page.locator("(//button[text()='Custom Scheduling'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The segment taskbar should display the progress with the color #0056B3.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-044-Column Template for TaskName Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The TaskName field should be displayed as defined in the column template (e.g., in button).
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-045-Filter Template for TaskName column', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for the taskname
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The filter value field for the TaskName column should be displayed as a dropdown.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-046-Verify Header Template for TaskName Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The TaskName header should display icons along with the Job Name as defined in the header template.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-047-Verify Header Template for StartDate Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Check the header template for the start date
    await page.locator("(//th[contains(@class,'e-headercell')])[4]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The StartDate header should display icons along with the Start Date as defined in the header template.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-048-Verify Header Template for EndDate Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Check the header template for the start date
    await page.locator("(//th[contains(@class,'e-headercell')])[5]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The End date header should display icons along with the End Date as defined in the header template.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-049-Verify Header Template for Duration Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Check the header template for the Duration
    await page.locator("(//th[contains(@class,'e-headercell')])[6]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Duration header should display icons along with the Duration as defined in the header template.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-050-Verify Header Template for Progress Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Check the header template for the Progress
    await page.locator("(//th[contains(@class,'e-headercell')])[7]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Progress header should display icons along with the Progress as defined in the header template.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-051-Verify Top Tier Timeline Template', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The top tier timeline should be displayed using the quarter format: Q1, Q2, Q3.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-052-Verify Bottom Tier Timeline Template', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The top tier timeline should be displayed using the Day format "dd": 01, 02, 03.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-053-Filtering Records Using "Start With" Operator', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for the taskname
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Planning and Permits'])[1]").click();
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
    //Screenshot validation-Tasks 1  should be displayed.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-054-Filtering Records Using "Does Not Start With" Operator', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for the taskname
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //Click to select Does not Start with from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Does Not Start With'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Planning and Permits'])[1]").click();
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-All records in the data collection should be displayed.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-055-Filtering Records Using "Ends With" Operator', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for the taskname
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //Click to select Ends With with from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Ends With'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2500);
    //Screenshot validation-All records in the data collection should be displayed.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-056-Filtering Records Using "Does Not End With" Operator', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for the taskname
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //Click to select Does not End with from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Does Not End With'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-All records should be displayed except Task 2
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-057-Filtering Records Using "Contains" Operator', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for the taskname
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //Click to select contains from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Contains'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Planning and Permits'])[1]").click();
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-Tasks 1  should be displayed.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-058-Filtering Records Using "Does Not Contain" Operator in TaskName Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for the taskname
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //Click to select Does not Contain with from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Does Not Contain'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-All records should be displayed except Task 2
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-059-Filtering Records Using "Equal" Operator', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for the taskname
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //Click to select Equal from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Planning and Permits'])[1]").click();
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-Tasks 1  should be displayed.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-060-Filtering Records Using "Not Equal" Operator', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for the taskname
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //Click to select Not Equal with from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Not Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-All records should be displayed except Task 2
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-061-Filtering Records Using "Empty" Operator', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for the taskname
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //Click to select Empty with from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Empty'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-No records should be displayed.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-062-Filtering Records Using "Not Empty" Operator in TaskName Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for the taskname
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //Click to select Not Empty with from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Not Empty'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-No records should be displayed.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-063-Filtering Records Using "Like" Operator', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for the taskname
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //Click to select Like with from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Like'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-No records should be displayed.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-064-Verifying PrevTimeSpan Toolbar Functionality', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //select the record
    await page.locator("(//span[text()='Previous timespan'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Toptier(Q1) should be rendered at the beginning of the project timeline.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-065-Verifying NextTimeSpan Toolbar Functionality', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //select the record
    await page.locator("(//span[text()='Next timespan'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Toptier(Q4) should be rendered at the end of the project timeline.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-066-Verifying ZoomIn Toolbar Functionality', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //select the record
    await page.locator("(//span[text()='Zoom in'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The timeline bottom tier unit width should be set to 66, and the taskbar should visually reflect this change.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-067-Verifying ZoomOut Toolbar Functionality', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //select the record
    await page.locator("(//span[text()='Zoom in'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The timeline bottom tier unit width should be set to 70.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-068-Verifying ZoomToFit Toolbar Functionality', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //select the record
    await page.locator("(//span[text()='Zoom to fit'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The timeline bottom tier unit width should be set to 312.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-069-Verifying Search Toolbar Functionality', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //select the record
    await page.locator("(//span[text()='Zoom to fit'])[1]").click();
    await page.waitForTimeout(2000);
    //Enter the record
    await page.locator("(//input[contains(@class,'e-control')])[1]").click();
    await page.keyboard.type('Site');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    //Screenshot validation-Tasks 2 and 6, which contain the text "Site", should be displayed along with their parent tasks.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-070-Editing start date value(Cell Editing)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Double click the record start date 3 rd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[28]").dblclick();
    await page.waitForTimeout(1000);
    //Click the record
    await page.locator("(//input[contains(@class,'e-control')])[2]").click();
    await page.waitForTimeout(2000);
    //Enter new record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("4/3/2025");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The start date value should be updated to "4/3/2025".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-071-Editing start date value(Dialog Editing)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //select the record start date 3 rd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[28]").click();
    await page.waitForTimeout(500);
    //Click the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //Enter new record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("4/3/2025");
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The start date value should be updated to "4/3/2025".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-072-Editing Start Date Greater Than End Date(Cell Editing)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Double click the record start date 3 rd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[28]").dblclick();
    await page.waitForTimeout(1000);
    //Click the recod
    await page.locator("(//input[contains(@class,'e-control')])[2]").click();
    await page.waitForTimeout(500);
    //Enter new record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("4/9/2025");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The start date value should be updated to "4/9/2025".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-073-Editing Start Date Greater Than End Date(Dialog Editing)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //click the record start date 3 rd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[28]").click();
    await page.waitForTimeout(1000);
    //Click the edit button
    await page.locator("(//span[contains(@class,'e-edit')])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("4/9/2025");
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The start date value should be updated to "4/9/2025".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-074-Filtering Records Using "Greater than" Operator in StartDate Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for start date
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[4]").click();
    await page.waitForTimeout(500);
    //Click to select Greater Than with from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Greater Than'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.keyboard.type("5/30/2025");
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-Display the records where the StartDate field is greater than "5/30/2025".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-075-Filtering Records Using "Greater than or Equal" Operator in StartDate Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for start date
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[4]").click();
    await page.waitForTimeout(500);
    //Click to select Greater Than Or Equal  from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Greater Than Or Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.keyboard.type("5/30/2025");
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-Display the records where the StartDate field is Greater Than Or Equal "5/30/2025".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-076-Filtering Records Using "Less than Or Equal" Operator in StartDate Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for start date
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[4]").click();
    await page.waitForTimeout(500);
    //Click to select Less Than Or Equal from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Less Than Or Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.keyboard.type("4/16/2025");
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-Display the records where the StartDate field is Less Than Or Equal "4/16/2025".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-077-Filtering Records Using "Less than Or Equal" Operator in StartDate Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for start date
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[4]").click();
    await page.waitForTimeout(500);
    //Click to select Less Than Or Equal from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Less Than Or Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.keyboard.type("4/16/2025");
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-Display the records where the StartDate field is less than or equal to "4/16/2025".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-078-Filtering Records Using "Greater than Or Equal" Operator in StartDate Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for start date
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[4]").click();
    await page.waitForTimeout(500);
    //Click to select Greater Than Or Equal from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Greater Than Or Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.keyboard.type("5/30/2025");
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-Display the records where the StartDate field is greater than or equal to "5/30/2025".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-079-Filtering Records Using "Greater than Or Equal" Operator in StartDate Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for start date
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[4]").click();
    await page.waitForTimeout(500);
    //Click to select Greater Than Or Equal from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Greater Than Or Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.keyboard.type("5/30/2025");
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-Display the records where the StartDate field is greater than or equal to "5/30/2025".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-080-Filtering Records Using "Equal" Operator in StartDate Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for start date
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[4]").click();
    await page.waitForTimeout(500);
    //Click to select Equal from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.keyboard.type("4/2/2025");
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-Tasks 1  and 2 should be displayed.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-081-Filtering Records Using "Not Equal" Operator in StartDate Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for start date
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[4]").click();
    await page.waitForTimeout(500);
    //Click to select Not Equal from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Not Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    await page.keyboard.type("4/30/2025");
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-All records should be displayed except those where the StartDate contains "6/10/2025".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-082-Filtering Records Using "Null" Operator in StartDate Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for start date
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[4]").click();
    await page.waitForTimeout(500);
    //Click to select Null from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Null'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    await page.keyboard.type("6/19/2025");
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-Tasks 22  and 24 should be displayed.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-083-Filtering Records Using "Not Null" Operator in StartDate Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the filter icon for start date
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[4]").click();
    await page.waitForTimeout(500);
    //Click to select Not Null from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select the record
    await page.locator("(//li[text()='Not Null'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select from the dropdown
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    await page.keyboard.type("6/19/2025");
    await page.waitForTimeout(500);
    //Select Filter button
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-DAll records should be displayed except those where the StartDate contains "6/19/2025".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-084-Adding a New Record Through the Add Toolbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the taskname
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("New");
    //Pregress
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("70");
    //start date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("4/3/2025");
    //Navigate to custom tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
    await page.waitForTimeout(500);
    //Click to select from status value
    await page.locator("(//span[contains(@class,'e-input')])[9]").click();
    await page.waitForTimeout(1000);
    //select the record
    await page.locator("(//li[text()='Open'])[1]").click();
    await page.waitForTimeout(1000);
    //Tab
    await page.keyboard.press("Tab");
    await page.waitForTimeout(1000);
    //Select save button
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-Display the records where the StartDate field is greater than "5/30/2025".
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUE THE RECORDS ARE NOT DISPLAYING THE TOOLTIP
test('TET-085-Render Tooltip After ZoomIn', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //select the record
    await page.locator("(//span[text()='Zoom in'])[1]").click();
    await page.waitForTimeout(500);
    await page.mouse.move(406, 74);
    await page.waitForTimeout(2000);
    //Screenshot validation-Tooltips should be rendered correctly for both the top and bottom timeline tiers after zooming in.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-086-Render Tooltip After ZoomOut', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //select the record
    await page.locator("(//span[text()='Zoom out'])[1]").click();
    await page.waitForTimeout(500);
    await page.mouse.move(406, 74);
    await page.waitForTimeout(2000);
    //Screenshot validation-Tooltips should be rendered correctly for both the top and bottom timeline tiers after zooming out.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-087-Render Tooltip After ZoomToFit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //select the record
    await page.locator("(//span[text()='Zoom to fit'])[1]").click();
    await page.waitForTimeout(500);
    await page.mouse.move(406, 74);
    await page.waitForTimeout(2000);
    //Screenshot validation-Tooltips should be rendered correctly for both the top and bottom timeline tiers after zooming to fit.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-088-Adding a New Record Through Public Method', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //select the record form the drop down
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //Click to Add Record
    await page.locator("(//li[text()='AddRecord'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are added
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-089-Updating a value Through Public Method', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //select the record form the drop down
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //Click to Update Record
    await page.locator("(//li[text()='UpdateRecord'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are updated
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-090-RTL mode : Render  Parent Taskbar Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Hover over the parent record
    await page.mouse.move(1070, 121);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the StartDate and EndDate values of the corresponding task record.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-091-RTL mode : Render  child Taskbar Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Hover over the child record
    await page.mouse.move(1236, 165);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the StartDate and EndDate values of the corresponding task record.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-092-RTL mode :  Render  Manual Taskbar Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Render  Baseline Tooltip
    await page.locator("(//button[text()='Render BaseLine'])[1]").click();
    await page.waitForTimeout(2000);
    //Hover over the baseline 
    await page.locator("(//div[contains(@class,'e-baseline-bar')])[1]").hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the BaseLineStartDate and BaseLineEndDate values of the corresponding task record.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-093-RTL mode : Render  Milestone Baseline Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Render  Baseline Tooltip
    await page.locator("(//button[text()='Render BaseLine'])[1]").click();
    await page.waitForTimeout(2000);
    //Hover over the baseline milestone
    await page.locator("(//div[contains(@class,'e-gantt-milestone')])[1]").hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the BaseLineStartDate and BaseLineEndDate values of the corresponding task record.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-094-RTL mode :  Render  Manual Taskbar Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Click custom scheduling
    await page.locator("(//button[text()='Custom Scheduling'])[1]").click();
    await page.waitForTimeout(500);
    //Hover 
    await page.locator("(//div[contains(@class,'e-gantt-milestone')])[1]").hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the predecessor value "2FS" accurately.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-095-RTL mode : Render  Connectorline Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/template');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
    await page.waitForTimeout(2000);
    //Hover over the 2nd and 3 rd connector line
    await page.mouse.move(1202, 170);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the predecessor value "2FS" accurately.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUE WRITE TESTCASE FOR IT
test('TET-096-RTL mode : Render  Timeline Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    await page.mouse.move(1495, 70);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display a calendar icon along with the corresponding date.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-097-RTL mode : Render  Timeline Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    await page.mouse.move(1485, 94);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display a calendar icon along with the corresponding date.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-098-RTL mode : Render  Milestone Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Hover over milestone
    await page.locator("(//div[contains(@class,'e-gantt-milestone')])[1]").hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the indicator date of the corresponding task record.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-099-RTL mode : Render  Indicator Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Hover over Indicator
    await page.mouse.move(894, 195);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the StartDate and EndDate values of the corresponding task record.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-100-RTL mode : Render Editing Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Left resizing the secind taskbar
    await page.mouse.click(1203, 165);
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(1203, 165);
    await page.mouse.move(1177, 167);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the Start Date in the format MMM dd, yyyy and the Duration values of the resizing taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-101-RTL mode : Render Editing Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Right resizing the second taskbar
    await page.mouse.click(1270, 167);
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(1270, 167);
    await page.mouse.move(1281, 162);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the Start Date in the format MMM dd, yyyy and the Duration values of the resizing taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-102-RTL mode : Render Editing Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Dragging the child task.
    await page.mouse.click(1270, 167);
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(1270, 167);
    await page.mouse.move(1281, 162);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the Start Date in the format MMM dd, yyyy of the dragging taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-103-RTL mode : Render Editing Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Dragging the parent task.
    await page.mouse.click(1255, 127);
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.waitForTimeout(500);
    await page.mouse.move(1255, 127);
    await page.waitForTimeout(500);
    await page.mouse.move(1279, 130);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the Start Date in the format MMM dd, yyyy of the dragging taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-104-RTL mode : Render Editing Tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Resizing
    await page.mouse.click(1270, 167);
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(1270, 167);
    await page.mouse.move(1281, 162);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the progress value as a percentage of the resizing task progress.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-105-RTL mode : Render Tooltip After ZoomIn', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Click the zoom in button
    await page.locator("(//span[text()='Zoom in'])[1]").click();
    await page.waitForTimeout(1000);
    //
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Hover top
    await page.mouse.move(1511, 70);
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    //Hover down
    await page.mouse.move(1512, 101);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the progress value as a percentage of the resizing task progress.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-106-RTL mode : Render Tooltip After ZoomOut', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Click the zoom Out button
    await page.locator("(//span[text()='Zoom out'])[1]").click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Hover top
    await page.mouse.move(1511, 70);
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    //Hover down
    await page.mouse.move(1512, 101);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the progress value as a percentage of the resizing task progress.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-107-RTL mode : Render Tooltip After ZoomToFit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Click the Zoom to fit button
    await page.locator("(//span[text()='Zoom to fit'])[1]").click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Hover top
    await page.mouse.move(1511, 70);
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    //Hover down
    await page.mouse.move(1512, 101);
    await page.waitForTimeout(2000);
    //Screenshot validation-The tooltip should display the progress value as a percentage of the resizing task progress.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-108-Column Template for TaskName Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The TaskName field should be displayed as defined in the column template (e.g., in button).
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TET-109-Filter Template for TaskName column', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Template/rtl');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/rtl' });
    await page.waitForTimeout(2000);
    //Click the filter icon for the taskname
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The filter value field for the TaskName column should be displayed as a dropdown.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
