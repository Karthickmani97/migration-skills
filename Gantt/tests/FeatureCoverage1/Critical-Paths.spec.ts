import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('CPET-001', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Critical taskbars (those with zero slack) are rendered correctly based on the slack value. 
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-002', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Screenshot validation-Critical taskbars (those with zero slack) are rendered correctly based on the slack value.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-003', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the progress cell of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[30]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Critical taskbars (those with zero slack) are rendered correctly based on the slack value.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-004', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the progress cell of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[25]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the progress field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 5th task should be rendered as a non-critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-005', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the progress cell of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the update button
    await page.locator("(//span[contains(@class,'e-update')])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 2nd task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-006', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the progress cell of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the progress field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 2nd task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-007', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the progress cell of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[34]").dblclick();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the update button
    await page.locator("(//span[contains(@class,'e-update')])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 8th task should be rendered as a non-critical segment taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-008', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the progress cell of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[34]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the progress field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 2nd task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-009', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Render baseline
    await page.locator("(//button[text()='Render BaseLine'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the progress cell of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[54]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the update button
    await page.locator("(//span[contains(@class,'e-update')])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 9th task should be rendered as a non-critical taskbar along with its baseline taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-010', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Render baseline
    await page.locator("(//button[text()='Render BaseLine'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the progress cell of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[54]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the progress field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 9th task should be rendered as a non-critical taskbar along with its baseline taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-011', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Render baseline
    await page.locator("(//button[text()='Render BaseLine'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the progress cell of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[54]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the progress field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 12th task should be rendered as a non-critical milestone along with its baseline milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-012', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Render baseline
    await page.locator("(//button[text()='Render BaseLine'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the progress cell of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[54]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the progress field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 12th task should be rendered as a non-critical taskbar along with its milestone baseline taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-013', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the Add button to open the dialog
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the End date field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/30/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 12th task should be rendered as a non-critical taskbar along with its milestone baseline taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-014', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the Add button to open the dialog
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the End date field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/30/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //click the added task 
    await page.locator("(//td[contains(@class,'e-rowcell')])[1]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the progress field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 12th task should be rendered as a non-critical taskbar along with its milestone baseline taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-015', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add above 
    await page.locator("(//li[text()='Above'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-016', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Below 
    await page.locator("(//li[text()='Below'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-017', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Child 
    await page.locator("(//li[text()='Child'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-018', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[29]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Child 
    await page.locator("(//li[text()='Above'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-019', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[29]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Below 
    await page.locator("(//li[text()='Below'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-020', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[29]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Child 
    await page.locator("(//li[text()='Child'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-021', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[50]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Above 
    await page.locator("(//li[text()='Above'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-022', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[50]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Below 
    await page.locator("(//li[text()='Below'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a critical segment taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-023', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[50]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Add Child 
    await page.locator("(//li[text()='Child'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a critical segment taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-024', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[29]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the convert button in the context menu to open the dialog
    await page.locator("#Gantt_cmenu_Convert").click();
    await page.waitForTimeout(1000);
    //To task 
    await page.locator("#Gantt_cmenu_ToTask").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 5th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-025', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[29]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the convert button in the context menu to open the dialog
    await page.locator("#Gantt_cmenu_Convert").click();
    await page.waitForTimeout(1000);
    //To task 
    await page.locator("#Gantt_cmenu_ToTask").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-026', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[20]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the indent button
    await page.locator("#Gantt_cmenu_Indent").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-027', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(2000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[67]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the indent button
    await page.locator("#Gantt_cmenu_Indent").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 12th task should be rendered as a taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-028', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[61]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the indent button
    await page.locator("#Gantt_cmenu_Indent").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 11th task should be rendered as a taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-029', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[20]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the indent button
    await page.locator("#Gantt_cmenu_Indent").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-030', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[67]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the indent button
    await page.locator("#Gantt_cmenu_Indent").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 12th task should be rendered as a taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-031', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[61]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the indent button
    await page.locator("#Gantt_cmenu_Indent").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 11th task should be rendered as a taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-032', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[20]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the outdent button
    await page.locator("(//li[text()='Outdent'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-033', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[67]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the outdent button
    await page.locator("#Gantt_cmenu_Outdent").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 12th task should be rendered as a taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-034', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[61]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the outdent button
    await page.locator("#Gantt_cmenu_Outdent").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 11th task should be rendered as a taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-035', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[20]").click();
    await page.waitForTimeout(500);
    //Click the outdent button
    await page.locator("(//span[text()='Outdent'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 11th task should be rendered as a taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-036', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[67]").click();
    await page.waitForTimeout(500);
    //Click the outdent button
    await page.locator("(//span[text()='Outdent'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 12th task should be rendered as a taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-037', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[61]").click();
    await page.waitForTimeout(500);
    //Click the outdent button
    await page.locator("(//span[text()='Outdent'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 11th task should be rendered as a taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-039', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[8]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click the merge tasks
    await page.locator("#Gantt_cmenu_MergeTask").click();
    await page.waitForTimeout(1000);
    //Right 
    await page.locator("#Gantt_cmenu_Right").click();
    //Screenshot validation-The 11th task should be rendered as a critical segment taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-040', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[9]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click the merge tasks
    await page.locator("#Gantt_cmenu_MergeTask").click();
    await page.waitForTimeout(1000);
    //Right 
    await page.locator("#Gantt_cmenu_Left").click();
    //Screenshot validation-The 11th task should be rendered as a critical segment taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-041', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    //press control + A to select all text in the cell
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Type the new duration value   
    await page.keyboard.press('Backspace');
    await page.keyboard.type('5 days');
    //Press the enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 2nd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-042', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").dblclick();
    await page.waitForTimeout(500);
    //press control + A to select all text in the cell
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Type the new duration value   
    await page.keyboard.press('Backspace');
    await page.keyboard.type('5 days');
    //Press the enter button
    await page.keyboard.press('Enter');
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-043', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the progress cell of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[8]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the progress field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5 days');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 2nd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-044', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the progress cell of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[8]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the progress field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('10 days');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-045', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the start date cell of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").dblclick();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type the start date
    await page.keyboard.type('4/10/2025');
    //Press the enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-046', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the start date cell
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").dblclick();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type the start date
    await page.keyboard.type('4/9/2025');
    //Press the enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-047', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the progress field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/9/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-048', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the progress field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/9/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-049', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[25]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/11/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-050', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//span[contains(@class,'e-update')])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-051', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[25]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/11/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-052', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 3rd  task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-053', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[30]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//span[contains(@class,'e-update')])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-054', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[30]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-055', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[13]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 2nd task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-056', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[13]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-058', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[30]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 8th task should be rendered as a non-critical segment taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-060', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Render baseline button
    await page.locator("(//button[text()='Render BaseLine'])[1]").click();
    await page.waitForTimeout(500);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[57]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 8th task should be rendered as a non-critical segment taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-062', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Render baseline button
    await page.locator("(//button[text()='Render BaseLine'])[1]").click();
    await page.waitForTimeout(500);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[78]").click();
    await page.waitForTimeout(1000);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 8th task should be rendered as a non-critical segment taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-063', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])").click();
    await page.waitForTimeout(500);
    //Click the  field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/30/2025');
    await page.waitForTimeout(500);
    //Navigate to the dependency tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Select the predecessor task
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //add the task 
    await page.locator("(//li[text()='2-Defining the product usage'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 8th task should be rendered as a non-critical segment taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-064', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add above 
    await page.locator("(//li[text()='Above'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-065', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Below 
    await page.locator("(//li[text()='Below'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-066', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Child 
    await page.locator("(//li[text()='Child'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-067', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[29]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Above 
    await page.locator("(//li[text()='Above'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-068', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[29]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Add Below 
    await page.locator("(//li[text()='Below'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-069', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[29]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Child 
    await page.locator("(//li[text()='Child'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-070', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[50]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Above 
    await page.locator("(//li[text()='Above'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-071', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[50]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Below 
    await page.locator("(//li[text()='Below'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-072', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[50]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Child 
    await page.locator("(//li[text()='Child'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-073', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[29]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click theConvert to task in the context menu to open the dialog
    await page.locator("(//li[text()='Convert'])[1]").click();
    await page.waitForTimeout(1000);
    //Convert to task
    await page.locator("(//li[text()='To Task'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 5th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-074', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click To Milestone to task in the context menu to open the dialog
    await page.locator("(//li[text()='Convert'])[1]").click();
    await page.waitForTimeout(1000);
    //Convert to task
    await page.locator("(//li[text()='To Milestone'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-075', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click Indent to task in the context menu to open the dialog
    await page.locator("(//li[text()='Indent'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-076', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[78]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click Indent to task in the context menu to open the dialog
    await page.locator("(//li[text()='Indent'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 12th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-077', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[71]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click Indent to task in the context menu to open the dialog
    await page.locator("(//li[text()='Indent'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 11th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-081', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click Outdent to task in the context menu to open the dialog
    await page.locator("(//li[text()='Outdent'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-082', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[78]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click Outdent to task in the context menu to open the dialog
    await page.locator("(//li[text()='Outdent'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 12th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-083', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  field in the dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click Outdent to task in the context menu to open the dialog
    await page.locator("(//li[text()='Outdent'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 12th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-088', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Right click the  field in the dialog
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[9]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click Merge Task to task in the context menu to open the dialog
    await page.locator("(//li[text()='Merge Task'])[1]").click();
    await page.waitForTimeout(500);
    //Right
    await page.locator("(//li[text()='Right'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-The 11th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-089', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Right click the  field in the dialog
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[9]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click Merge Task to task in the context menu to open the dialog
    await page.locator("(//li[text()='Merge Task'])[1]").click();
    await page.waitForTimeout(500);
    //Left
    await page.locator("(//li[text()='Left'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-The 11th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-092', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //select the second record
    await page.locator("(//td[contains(@class,'e-rowcell')])[8]").click();
    await page.waitForTimeout(1000);
    //Click Edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Duration field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5 days');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-The 2ND task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-093', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //select the 3rd record
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(1000);
    //Click Edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Duration field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5 days');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 3RD task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-096', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //select the 4th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click();
    await page.waitForTimeout(1000);
    //Click Edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-097', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //select the 3rd record
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(1000);
    //Click Edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/9/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 3RD task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-100', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //select the 4th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click();
    await page.waitForTimeout(1000);
    //Click Edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the End date field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/11/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-101', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //select the 3rd  record
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(1000);
    //Click Edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the End date field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-103', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //select the 4th  record
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click();
    await page.waitForTimeout(1000);
    //Click Edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to the dependency tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Select the predecessor task
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //add the task 
    await page.locator("(//li[text()='3-Defining the target audience'])[1]").click();
    await page.waitForTimeout(500);
    //Type 
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 8th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-107', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //select the 4th  record
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click();
    await page.waitForTimeout(1000);
    //Click Edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to the dependency tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Select the predecessor task
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //add the task 
    await page.locator("(//li[text()='3-Defining the target audience'])[1]").click();
    await page.waitForTimeout(500);
    //Type 
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Start -Start
    await page.locator("(//li[text()='Start-Start'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 8th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-108', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //select the 4th  record
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click();
    await page.waitForTimeout(1000);
    //Click Edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to the dependency tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Select the predecessor task
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //add the task 
    await page.locator("(//li[text()='3-Defining the target audience'])[1]").click();
    await page.waitForTimeout(500);
    //Type 
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Start -Start
    await page.locator("(//li[text()='Start-Finish'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 8th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-109', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //select the 4th  record
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click();
    await page.waitForTimeout(1000);
    //Click Edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to the dependency tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Select the predecessor task
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //add the task 
    await page.locator("(//li[text()='3-Defining the target audience'])[1]").click();
    await page.waitForTimeout(500);
    //Type 
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Start -Finish
    await page.locator("(//li[text()='Start-Finish'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 8th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-113', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //select the 3rd  record
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(1000);
    //Click Edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to the dependency tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Select the predecessor task
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //add the task 
    await page.locator("(//li[text()='4-Prepare product sketch and notes'])[1]").click();
    await page.waitForTimeout(500);
    //Type 
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Finish -Start
    await page.locator("(//li[text()='Finish-Start'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 8th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-117', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //select the 3rd  record
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(1000);
    //Click Edit button on the toolbar
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to the dependency tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Select the predecessor task
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //add the task 
    await page.locator("(//li[text()='4-Prepare product sketch and notes'])[1]").click();
    await page.waitForTimeout(500);
    //Type 
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Start -Start
    await page.locator("(//li[text()='Start-Start'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 3rd task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-118', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[4]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[3]");
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
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-21 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-119', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[4]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[3]");
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
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-21 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('CPET-120', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[4]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[3]");
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
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-21 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-121', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[4]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[3]");
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
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-21 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-122', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Select the 3rd taskbar
    await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[2]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(950, 201);
    await page.mouse.move(1160, 204);
    await page.waitForTimeout(500);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-123', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Select the 3rd taskbar
    await page.locator('(//div[contains(@class, "e-taskbar-left-resizer e-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(879, 202);
    await page.mouse.move(828, 203);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-124', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Select the 3rd taskbar
    await page.locator('(//div[contains(@class, "e-taskbar-right-resizer e-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(975, 200);
    await page.mouse.move(1189, 202);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-125', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Select the 2nd taskbar
    await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[1]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(957, 165);
    await page.mouse.move(1189, 167);
    await page.waitForTimeout(500);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 2nd task should be rendered as a critical taskbar.
    await expect.soft(page.locator('.sf-gantt')).toBeVisible();
    await expect.soft(page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[1]')).toBeVisible();
    await expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 300 });
});

test('CPET-126', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Select the 2nd taskbar
    await page.locator('(//div[contains(@class, "e-taskbar-left-resizer e-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(879, 165);
    await page.mouse.move(829, 166);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 2nd task should be rendered as a critical taskbar.
    await expect.soft(page.locator('.sf-gantt')).toBeVisible();
    await expect.soft(page.locator('(//div[contains(@class, "e-taskbar-left-resizer e-icon")])[1]')).toBeVisible();
    await expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 300 });
});

test('CPET-127', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Select the 2nd taskbar
    await page.locator('(//div[contains(@class, "e-taskbar-right-resizer e-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(974, 165);
    await page.mouse.move(1193, 169);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 2nd task should be rendered as a critical taskbar.
    await expect.soft(page.locator('.sf-gantt')).toBeVisible();
    await expect.soft(page.locator('(//div[contains(@class, "e-taskbar-right-resizer e-icon")])[1]')).toBeVisible();
    await expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 300 });
});

test('CPET-128', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Critical taskbars (those with zero slack) should be rendered correctly based on the updated work week selection.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-129', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Thursday
    await page.locator("(//li[text()='Thursday'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Critical taskbars (those with zero slack) should be rendered correctly based on the updated work week selection.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-130', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Thursday
    await page.locator("(//li[text()='Thursday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Friday
    await page.locator("(//li[text()='Friday'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Critical taskbars (those with zero slack) should be rendered correctly based on the updated work week selection.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-131', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Critical taskbars (those with zero slack) should be rendered correctly based on the updated work week selection.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-132', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Critical taskbars (those with zero slack) should be rendered correctly based on the updated work week selection.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-133', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/9/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Critical taskbars (those with zero slack) should be rendered correctly based on the updated work week selection.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-134', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/9/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-135', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/21/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-136', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/9/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-137', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Thursday
    await page.locator("(//li[text()='Thursday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Friday
    await page.locator("(//li[text()='Friday'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/9/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-138', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[contains(@class,'e-edit')])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/9/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-139', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[contains(@class,'e-edit')])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/9/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-140', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[contains(@class,'e-edit')])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/21/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-141', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Thursday
    await page.locator("(//li[text()='Thursday'])[1]").click();
    await page.waitForTimeout(500);
    //click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[contains(@class,'e-edit')])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/9/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-142', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Thursday
    await page.locator("(//li[text()='Thursday'])[1]").click();
    await page.waitForTimeout(500);
    //select Friday
    await page.locator("(//li[text()='Friday'])[1]").click();
    await page.waitForTimeout(500);
    //click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[contains(@class,'e-edit')])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/9/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-143', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/14/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-144', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/21/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-145', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5/5/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-146', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //select Thursday
    await page.locator("(//li[text()='Thursday'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-147', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //select Thursday
    await page.locator("(//li[text()='Thursday'])[1]").click();
    await page.waitForTimeout(500);
    //select Friday
    await page.locator("(//li[text()='Friday'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-148', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the records of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[contains(@class,'e-edit')])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/14/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-149', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the records of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[contains(@class,'e-edit')])[1]").click();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/21/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-150', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the records of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[contains(@class,'e-edit')])[1]").click();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5/5/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-151', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //select Thursday
    await page.locator("(//li[text()='Thursday'])[1]").click();
    await page.waitForTimeout(500);
    //click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the records of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[contains(@class,'e-edit')])[1]").click();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-152', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //select Thursday
    await page.locator("(//li[text()='Thursday'])[1]").click();
    await page.waitForTimeout(500);
    //select Friday
    await page.locator("(//li[text()='Friday'])[1]").click();
    await page.waitForTimeout(500);
    //click the  3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the records of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[contains(@class,'e-edit')])[1]").click();
    await page.waitForTimeout(500);
    //Click the end date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-153', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the Duration of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[19]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5 days');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-154', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the Duration of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[19]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5 days');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-155', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1500);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(600);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(600);
    //Double click the Duration of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[19]").dblclick();
    await page.waitForTimeout(1200);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(600);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5 days');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-156', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //select Thursday
    await page.locator("(//li[text()='Thursday'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the Duration of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[19]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5 days');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-157', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //select Thursday
    await page.locator("(//li[text()='Thursday'])[1]").click();
    await page.waitForTimeout(500);
    //select Friday
    await page.locator("(//li[text()='Friday'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the Duration of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[19]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5 days');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-158', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //click the  3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the records of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[contains(@class,'e-edit')])[1]").click();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-159', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //click the  3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the records of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[contains(@class,'e-edit')])[1]").click();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-160', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //click the  3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the records of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[contains(@class,'e-edit')])[1]").click();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-161', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //select Thursday
    await page.locator("(//li[text()='Thursday'])[1]").click();
    await page.waitForTimeout(500);
    //click the  3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the records of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[contains(@class,'e-edit')])[1]").click();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-162', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown for the workweek
    await page.locator('(//div[contains(@class, "e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(500);
    //select Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //select Thursday
    await page.locator("(//li[text()='Thursday'])[1]").click();
    await page.waitForTimeout(500);
    //select Friday
    await page.locator("(//li[text()='Friday'])[1]").click();
    await page.waitForTimeout(500);
    //click the  3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the records of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[contains(@class,'e-edit')])[1]").click();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-163', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Include weekend button
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Critical taskbars (those with zero slack) are rendered correctly based on the slack value. 
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-164', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Include weekend button
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the start date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[17]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/6/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-165', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Include weekend button
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the End Date of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/6/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-166', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Include weekend button
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(1000);
    //Double click the Duration of 3rd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[19]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5 days');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-167', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Include weekend button
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the taskbar to drag 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(1109, 204, { steps: 10 });
    await page.mouse.up();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-168', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Include weekend button
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the taskbar to left resize
    await page.locator("(//div[contains(@class,'e-taskbar-left-resizer e-icon')])[2]").click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(784, 195, { steps: 10 });
    await page.mouse.up();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-169', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Include weekend button
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the taskbar to left resize
    await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[2]").click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(1018, 207, { steps: 10 });
    await page.mouse.up();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-170', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Resource view toggle
    await page.locator("(//span[contains(@class,'e-switch-handle ')])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Critical taskbars (those with zero slack) are rendered correctly based on the slack value. 
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-171', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Right click the 5th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[29]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //select delete dependency
    await page.locator("(//li[text()='Delete Dependency'])[1]").click();
    await page.waitForTimeout(500);
    //select the 4th task
    await page.locator("(//li[text()='4 - Prepare product sketch and notes'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The connector line between the 5th and 4th tasks should be removed.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-172', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //click the start date 
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //select the End date 
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/23/2025');
    await page.waitForTimeout(500);
    //select resources
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //select  1 resource
    await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck')])[2]").click();
    await page.waitForTimeout(500);
    //select segments
    await page.locator("(//div[contains(@class,'e-tab-text')])[4]").click();
    await page.waitForTimeout(500);
    //Click the Add segment button
    await page.locator("(//span[contains(@class,'e-add e-icons e-btn-icon e-icon-left')])[2]").click();
    await page.waitForTimeout(500);
    //Click the start date of the segment
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //End date
    await page.locator("(//input[contains(@class,'e-control')])[8]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click the Add segment button
    await page.locator("(//span[contains(@class,'e-add e-icons e-btn-icon e-icon-left')])[2]").click();
    await page.waitForTimeout(500);
    //select End date
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/11/2025');
    await page.waitForTimeout(500);
    await page.locator("(//input[contains(@class,'e-control')])[8]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/16/2025');
    await page.waitForTimeout(500);
    //Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click the Add segment button
    await page.locator("(//span[contains(@class,'e-add e-icons e-btn-icon e-icon-left')])[2]").click();
    await page.waitForTimeout(500);
    //select End date
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/17/2025');
    await page.waitForTimeout(500);
    await page.locator("(//input[contains(@class,'e-control')])[8]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/23/2025');
    await page.waitForTimeout(500);
    //Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //select delete dependency
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    //expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-173', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //click the start date 
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //select the End date 
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/23/2025');
    await page.waitForTimeout(500);
    //select dependency tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add dependency button
    await page.locator("(//span[contains(@class,'e-add e-icons e-btn-icon e-icon-left')])[2]").click();
    await page.waitForTimeout(500);
    //select the task from the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select the dependency task
    await page.locator("(//li[text()='2-Defining the product usage'])[1]").click();
    await page.waitForTimeout(500);
    //press Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);;
    //select segments
    await page.locator("(//div[contains(@class,'e-tab-text')])[4]").click();
    await page.waitForTimeout(500);
    //Click the Add segment button
    await page.locator("(//span[contains(@class,'e-add e-icons e-btn-icon e-icon-left')])[3]").click();
    await page.waitForTimeout(500);
    //Click the start date of the segment
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    await page.locator("(//input[contains(@class,'e-control')])[8]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click the Add segment button
    await page.locator("(//span[contains(@class,'e-add e-icons e-btn-icon e-icon-left')])[3]").click();
    await page.waitForTimeout(500);
    //select End date
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/11/2025');
    await page.waitForTimeout(500);
    await page.locator("(//input[contains(@class,'e-control')])[8]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/16/2025');
    await page.waitForTimeout(500);
    //Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click the Add segment button
    await page.locator("(//span[contains(@class,'e-add e-icons e-btn-icon e-icon-left')])[3]").click();
    await page.waitForTimeout(500);
    //select End date
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/17/2025');
    await page.waitForTimeout(500);
    await page.locator("(//input[contains(@class,'e-control')])[8]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/23/2025');
    await page.waitForTimeout(500);
    //Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //select delete dependency
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
   // expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-174', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Double click the 8th start date of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[52]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 8th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-175', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click IncludeWeekend
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the 8th start date of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[52]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 8th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-176', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click 8th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[52]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 5th task should be rendered as a non-critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-177', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click IncludeWeekend
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(500);
    //Click 8th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[52]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the progress field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 5th task should be rendered as a non-critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-178', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Double click the 8th end date of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[53]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/17/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 8th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-179', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click IncludeWeekend
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the 8th end date of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[53]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/13/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 8th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-180', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click 8th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[53]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the end date  field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/17/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 5th task should be rendered as a non-critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-181', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click IncludeWeekend
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the 8th end date of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[53]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/13/2025');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 8th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-182', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Double click the 8th Duration of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[54]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('3 days');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 8th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-183', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click IncludeWeekend
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the 8th duration of the milestone task
    await page.locator("(//td[contains(@class,'e-rowcell')])[54]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('3 days');
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 8th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-184', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click 8th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[53]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the duration field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/17/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 8th task should be rendered as a non-critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-185', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click IncludeWeekend
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(500);
    //Click 8th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[53]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the end date  field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/17/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
    await page.waitForTimeout(200);
    //Screenshot validation-The 8th task should be rendered as a non-critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-186', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click Critical Path on the toolbar
    await page.locator("(//span[text()='Critical Path'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The task should be rendered accurately according to the input data.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-187', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click Zoominon the toolbar
    await page.locator("(//span[text()='Zoom in'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Critical taskbars (those with zero slack) should be rendered correctly based on the slack value.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-188', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click Zoomout the toolbar
    await page.locator("(//span[text()='Zoom out'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Critical taskbars (those with zero slack) should be rendered correctly based on the slack value.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-189', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click zoom to fit the toolbar
    await page.locator("(//span[text()='Zoom to fit'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Critical taskbars (those with zero slack) should be rendered correctly based on the slack value.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-190', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click Update Slack Value the toolbar
    await page.locator("(//button[text()='Update Slack Value'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Critical taskbars (those with zero slack) are rendered correctly based on the slack value. 
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-191', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[4]");
    const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[3]");
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
    //Screenshot validation-Task 4 should be rendered above Task 3.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-192', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[8]");
    const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[3]");
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
    //Screenshot validation-Task 8 should be rendered below Task 3.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('CPET-193', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[4]");
    const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[3]");
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
    //Screenshot validation-Task 8 should be rendered below Task 3.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-194', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Click RemovePredecessor 
    await page.locator("(//li[text()='Remove Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The connector lines 3FS and 4FS should be removed from Task 5.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-195', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Click Update Duration Value 
    await page.locator("(//li[text()='Update Duration Value'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-196', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Click Update Progress Value
    await page.locator("(//li[text()='Update Progress Value'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-197', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Click Convert To Milestone
    await page.locator("(//li[text()='Convert To Milestone'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-198', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the 4th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[29]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Click Indent Record
    await page.locator("(//li[text()='Indent Record'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-199', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the 4th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[29]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Click Outdent Record
    await page.locator("(//li[text()='Outdent Record'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-200', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Click Add Record
    await page.locator("(//li[text()='Add Record'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a critical task.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-201', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the start date  2nd record
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5/5/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 2nd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-202', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //click the start date  2nd record
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the progress field in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5/5/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 2nd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-203', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the end date 2nd record
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/30/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 2nd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-204', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //click the end date 2nd record
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the end date in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/30/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 2nd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-205', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the progress 19th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-206', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //click the 19th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the progress in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-207', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the duration 
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('168 days');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 2nd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-208', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //click the 2nd 
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the duration in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('168');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 2nd task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-209', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19 and 20 tasks should be rendered as a critical taskbar
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-210', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(500);
    //Click include weekend
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(500);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19 and 20 tasks should be rendered as a critical taskbar
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-211', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Minute from the dropdown
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19 and 20 tasks should be rendered as a critical taskbar
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-212', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(500);
    //Click include weekend
    await page.locator("(//button[text()='IncludeWeekEnd'])[1]").click();
    await page.waitForTimeout(500);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Minute from the dropdown
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19 and 20 tasks should be rendered as a critical taskbar
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-213', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Minute from the dropdown
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //click the 19th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-214', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Minute from the dropdown
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //click the 19th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the progress in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-215', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Minute from the dropdown
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //click the 2nd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5/5/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-216', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Minute from the dropdown
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //click the 2nd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5/5/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-217', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Minute from the dropdown
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //click the 2nd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[11]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('168');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 2nd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-218', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Minute from the dropdown
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //click the 2nd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the end date in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/30/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 2nd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-219', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Minute from the dropdown
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //click the 2nd task
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/30/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 2nd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-220', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter decrement value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 19th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[129]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('23/4/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-221', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter decrement value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 19th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[129]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the start  date in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('23/4/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-222', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter decrement value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('42');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 11th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[74]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 11th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-223', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter decrement value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('42');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 11th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[74]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the end  date in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 11th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-224', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('40');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 12th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[83]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 11th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-225', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter decrement value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('40');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 12th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[83]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the end  date in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 11th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-226', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('42');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 11th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[74]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 11th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-227', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter decrement value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('42');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 11th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[74]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the duration in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('26');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-228', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('42');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 11th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[74]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 11th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-229', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('42');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 11th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[74]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('23/4/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 11th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-230', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Minute from the dropdown
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 19th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[130]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/23/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 11th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-231', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Minute from the dropdown
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter decrement value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 11th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[74]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the duration in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/23/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-232', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Minute from the dropdown
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 19th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[131]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5266');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-233', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Minute from the dropdown
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter decrement value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 19th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[131]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the duration in the dialog
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5266');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('CPET-235', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click the taskbar to resize 
    await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[15]").click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(1379, 395, { steps: 10 });
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 10th task should be rendered as a non-critical taskbar.
    await expect.soft(page.locator('.sf-gantt')).toBeVisible();
    await expect.soft(page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[15]")).toBeVisible();
    await expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 300 });
});

test('CPET-238', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('40');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 19th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[133]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('20SF+3');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-239', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('40');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 19th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[133]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//td[contains(@class,'e-lastrowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[9]").click();
    await page.waitForTimeout(500);
    //select the dependency record
    await page.locator("(//li[text()='20-Selling cost'])[1]").click();
    await page.waitForTimeout(500);
    //Press the Tab key
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await page.keyboard.type('3 days');
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-240', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Right click the 4 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[19]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the indent button in the context menu
    await page.locator("(//li[text()='Indent'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-241', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Right click the 4 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[19]").click();
    await page.waitForTimeout(1000);
    //Click the indent button on the toolbar
    await page.locator("(//span[text()='Indent'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-242', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Right click the 4 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[19]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Outdent button in the context menu
    await page.locator("(//li[text()='Outdent'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-243', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Right click the 4 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[19]").click();
    await page.waitForTimeout(1000);
    //Click the Outdent button on the toolbar
    await page.locator("(//span[text()='Outdent'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-244', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Right click the 11 th row
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[9]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Merge Task 
    await page.locator("(//li[text()='Merge Task'])[1]").click();
    await page.waitForTimeout(500);
    //Merge the records
    await page.locator("(//li[text()='Left'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('CPET-245', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Right click the 11 th row
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[9]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Merge Task 
    await page.locator("(//li[text()='Merge Task'])[1]").click();
    await page.waitForTimeout(500);
    //Merge the records
    await page.locator("(//li[text()='Right'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-246', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Right click the 11 th row
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[9]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Merge Task 
    await page.locator("(//li[text()='Merge Task'])[1]").click();
    await page.waitForTimeout(500);
    //Merge the records
    await page.locator("(//li[text()='Left'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-247', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Double click the 3rd 
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(1000);
    //Click control +A
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.keyboard.type('10 days');
    //Click the Merge Task 
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-248', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Double click the start date 
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
    await page.waitForTimeout(500);
    //Click the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Click control +A
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('10 days');
    await page.waitForTimeout(500);
    //Press  the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-249', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Double click the start date 
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
    await page.waitForTimeout(1000);
    //Click control +A
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/9/2025');
    await page.waitForTimeout(500);
    //Press  the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-250', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //click the 3rd 
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/9/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-251', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Double click the end date 
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").dblclick();
    await page.waitForTimeout(1000);
    //Click control +A
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Press  the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('CPET-252', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //click the 3rd 
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the End date
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-253', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Double click dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[28]").dblclick();
    await page.waitForTimeout(1000);
    //Click control +A
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('3FF');
    await page.waitForTimeout(500);
    //Press  the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Issue 
test('CPET-254', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //click the 4th
    await page.locator("(//td[contains(@class,'e-rowcell')])[28]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Double click the record to edit 
    await page.locator("(//td[contains(@class,'e-lastrowcell')])[10]").dblclick();
    await page.waitForTimeout(1000);    
   //Click to select from the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select 3
    await page.locator("(//li[text()='3-Defining the target audience'])[1]").click();
    await page.waitForTimeout(500);
    //select FF
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Enter FF
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);        
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-255', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Double click dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[28]").dblclick();
    await page.waitForTimeout(1000);
    //Click control +A
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('3FS');
    await page.waitForTimeout(500);
    //Press  the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-256', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //click the 4th
    await page.locator("(//td[contains(@class,'e-rowcell')])[28]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Double click the record to edit 
    await page.locator("(//td[contains(@class,'e-lastrowcell')])[10]").dblclick();
    await page.waitForTimeout(1000);    
   //Click to select from the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select 3
    await page.locator("(//li[text()='3-Defining the target audience'])[1]").click();
    await page.waitForTimeout(500);
    //select FS
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Enter FS
    await page.locator("(//li[text()='Finish-Start'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);        
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-257', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Double click dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[28]").dblclick();
    await page.waitForTimeout(1000);
    //Click control +A
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('3SS');
    await page.waitForTimeout(500);
    //Press  the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-258', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //click the 4th
    await page.locator("(//td[contains(@class,'e-rowcell')])[28]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Double click the record to edit 
    await page.locator("(//td[contains(@class,'e-lastrowcell')])[10]").dblclick();
    await page.waitForTimeout(1000);    
   //Click to select from the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select 3
    await page.locator("(//li[text()='3-Defining the target audience'])[1]").click();
    await page.waitForTimeout(500);
    //select SS
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Enter SS
    await page.locator("(//li[text()='Start-Start'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);        
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-259', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Double click dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[28]").dblclick();
    await page.waitForTimeout(1000);
    //Click control +A
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('3SF');
    await page.waitForTimeout(500);
    //Press  the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-260', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //click the 4th
    await page.locator("(//td[contains(@class,'e-rowcell')])[28]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Double click the record to edit 
    await page.locator("(//td[contains(@class,'e-lastrowcell')])[10]").dblclick();
    await page.waitForTimeout(1000);    
   //Click to select from the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select 3
    await page.locator("(//li[text()='3-Defining the target audience'])[1]").click();
    await page.waitForTimeout(500);
    //select SF
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Enter SF
    await page.locator("(//li[text()='Start-Finish'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);        
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-261', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Double click dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").dblclick();
    await page.waitForTimeout(1000);
    //Click control +A
    await page.waitForTimeout(500);
    await page.keyboard.type('4FF');
    await page.waitForTimeout(500);
    //Press  the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-262', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //click the 3rd 
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click Add record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);    
   //Click to select from the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select 4
    await page.locator("(//li[text()='4-Prepare product sketch and notes'])[1]").click();
    await page.waitForTimeout(500);
    //select FF
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Enter FF
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);        
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-263', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Double click dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").dblclick();
    await page.waitForTimeout(1000);
    //Click control +A
    await page.waitForTimeout(500);
    await page.keyboard.type('4FS');
    await page.waitForTimeout(500);
    //Press  the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-264', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //click the 3rd 
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click Add record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);    
   //Click to select from the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select 4
    await page.locator("(//li[text()='4-Prepare product sketch and notes'])[1]").click();
    await page.waitForTimeout(500);
    //select FS
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Enter FS
    await page.locator("(//li[text()='Finish-Start'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);        
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-265', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Double click dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").dblclick();
    await page.waitForTimeout(1000);
    //Click control +A
    await page.waitForTimeout(500);
    await page.keyboard.type('4SS');
    await page.waitForTimeout(500);
    //Press  the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('CPET-266', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Click the 3rd task 
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[9]").click();
    await page.waitForTimeout(500);
    //select the dependency record
    await page.locator("(//li[text()='4-Prepare product sketch and notes'])[1]").click();
    await page.waitForTimeout(500);
    //Press the Tab key
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-268', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Click the 3rd task 
    await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[9]").click();
    await page.waitForTimeout(500);
    //select the dependency record
    await page.locator("(//li[text()='4-Prepare product sketch and notes'])[1]").click();
    await page.waitForTimeout(500);
    //Press the Tab key
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await page.keyboard.type('2');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-269', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[4]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[3]");
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
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-270', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[4]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[3]");
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
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-271', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(2000);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[4]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[3]");
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
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-275', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
    await page.waitForTimeout(500);
    //Click the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Progress
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Click control +A
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Press  the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 2nd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-276', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click the Remove Predecessor
    await page.locator("(//li[text()='Remove Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The connector lines 3FS and 4FS should be removed from Task 5.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-277', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click the Update Duration Value
    await page.locator("(//li[text()='Update Duration Value'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 3rd task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-278', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click the Update Progress Value
    await page.locator("(//li[text()='Update Progress Value'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-279', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click the Convert To Milestone
    await page.locator("(//li[text()='Convert To Milestone'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-280', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click the Indent Record button on the toolbar
    await page.locator("(//li[text()='Indent Record'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-281', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click the Outdent Record button on the toolbar
    await page.locator("(//li[text()='Outdent Record'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 4th task should be rendered as a critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-282', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click the Add Record
    await page.locator("(//li[text()='Add Record'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a critical task.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-283', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Above 
    await page.locator("(//li[text()='Above'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-284', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Below 
    await page.locator("(//li[text()='Below'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-285', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Child 
    await page.locator("(//li[text()='Child'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-286', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Click disabled dependency button
    await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
    await page.waitForTimeout(1000);
    //Right click the first task to open the context menu
    await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //Click the Add button in the context menu to open the dialog
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    //Add Milestone 
    await page.locator("(//li[text()='Milestone'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The new task should be rendered as a critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-287', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Click the duration dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('40');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 19th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[133]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('20SF+3');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-288', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Click the  dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //select Hour from the dropdown
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('40');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click the 19th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[133]").click();
    await page.waitForTimeout(500);
    //Click the edit button to open the dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//td[contains(@class,'e-lastrowcell')])[10]").dblclick();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[9]").click();
    await page.waitForTimeout(500);
    //select the dependency record
    await page.locator("(//li[text()='20-Selling cost'])[1]").click();
    await page.waitForTimeout(500);
    //Press the Tab key
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await page.keyboard.type('3 days');
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 19th task should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-289', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/RTLCriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/RTLCriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Resource view toggle
    await page.locator("(//span[contains(@class,'e-switch-handle')])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Critical taskbars (those with zero slack) are rendered correctly based on the slack value. 
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-290', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Resource view toggle
    await page.locator("(//span[contains(@class,'e-switch-handle')])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter decrement  value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('40');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Double click duration
    await page.locator("(//td[contains(@class,'e-rowcell')])[180]").dblclick();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('11');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The task should be rendered as a critical segment taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-291', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Resource view toggle
    await page.locator("(//span[contains(@class,'e-switch-handle')])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter decrement  value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('40');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Double click duration
    await page.locator("(//td[contains(@class,'e-rowcell')])[180]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select duration field
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('11');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The task should be rendered as a critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-292', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Resource view toggle
    await page.locator("(//span[contains(@class,'e-switch-handle')])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter decrement  value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Double click start date
    await page.locator("(//td[contains(@class,'e-rowcell')])[31]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5/5/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The task should be rendered as a critical segment taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-293', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Resource view toggle
    await page.locator("(//span[contains(@class,'e-switch-handle')])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter decrement  value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //click duration
    await page.locator("(//td[contains(@class,'e-rowcell')])[31]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select start date  field
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5/5/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The task should be rendered as a critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-294', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1200);
    //Click the Resource view toggle
    await page.locator("(//span[contains(@class,'e-switch-handle')])[1]").click();
    await page.waitForTimeout(600);
    //Click to enter decrement  value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(600);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Double click end date
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5/5/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The task should be rendered as a critical segment taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-295', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Resource view toggle
    await page.locator("(//span[contains(@class,'e-switch-handle')])[1]").click();
    await page.waitForTimeout(500);
    //Click to enter decrement  value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //click duration
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select end date  field
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('5/5/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The task should be rendered as a critical milestone.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-296', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Resource view toggle
    await page.locator("(//span[contains(@class,'e-switch-handle')])[1]").click();
    await page.waitForTimeout(500);
    //Double click progress
    await page.locator("(//td[contains(@class,'e-rowcell')])[181]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-297', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Resource view toggle
    await page.locator("(//span[contains(@class,'e-switch-handle')])[1]").click();
    await page.waitForTimeout(500);
    //click duration
    await page.locator("(//td[contains(@class,'e-rowcell')])[181]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select progress field
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-298', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the Resource view toggle
    await page.locator("(//span[contains(@class,'e-switch-handle')])[1]").click();
    await page.waitForTimeout(500);
    //Click Render BaseLine
    await page.locator("(//button[text()='Render BaseLine'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-299', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Critical taskbars (those with zero slack) are rendered correctly based on the slack value. 
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-300', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Critical taskbars (those with zero slack) are rendered correctly based on the slack value. 
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-301', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click hierarchy
    await page.locator("(//li[text()='hierarchy'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Critical taskbars (those with zero slack) are rendered correctly based on the slack value. 
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-302', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click custom adaptor
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Critical taskbars (those with zero slack) are rendered correctly based on the slack value. 
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-303', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(500);
    //click progress 15 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[105]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 15th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-304', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(500);
    //click duration
    await page.locator("(//td[contains(@class,'e-rowcell')])[105]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select progress field
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-305', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(500);
     //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click start date 10 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[66]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/30/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 10th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-306', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(500);
     //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click start date 10 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[66]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date 
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/30/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 10th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-307', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(500);
     //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click end  date 7 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[46]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('3/31/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The tasks 7,8,9 and 10 a should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-308', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(500);
     //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click end date 7 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[46]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date 
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('3/31/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The tasks 7,8,9 and 10 a should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-309', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(500);
     //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click duration 7th th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[47]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('15');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The tasks 7,8,9 and 10 a should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-310', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(500);
     //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click duration 7th th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[47]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Click the duration
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('15');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
  await page.waitForTimeout(200);
    //Screenshot validation-The tasks 7,8,9 and 10 a should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-311', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
    //click progress 15 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[105]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 15th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-312', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
    //click progress 15 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[105]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select progress field
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 15th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-313', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
    //click progress 10 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[66]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/30/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The task 10 should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-314', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
    //click progress 10 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[66]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select start date field
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/30/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
  await page.waitForTimeout(200);
    //Screenshot validation-The 10th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-315', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
     //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //click end  date 7 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[46]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('3/31/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The tasks 7,8,9 and 10 a should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-316', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
    //click progress 10 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[46]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select end date field
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('3/31/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
  await page.waitForTimeout(200);
    //Screenshot validation-The 10th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-317', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
     //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //duration 7 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[47]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('15');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The tasks 7,8,9 and 10 a should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-318', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
    //click progress 7 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[46]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select duration field
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('15');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
  await page.waitForTimeout(200);
    //Screenshot validation-The 10th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-319', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click custom adaptor
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
    //Progress field 
    await page.locator("(//td[contains(@class,'e-rowcell')])[105]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 15th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-320', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click dynamic object
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
    //click progress 15 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[105]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select progress field
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 15th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-321', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click dynamic object
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
     //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //duration 10 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[66]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/17/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The task 10 should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-322', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click dynamic object
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
    //click start date 10 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[66]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select start date field
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/17/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 10th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-323', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click dynamic object
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
     //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //8 th task end date
    await page.locator("(//td[contains(@class,'e-rowcell')])[53]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/15/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The task 8th should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-324', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click dynamic object
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
    //click start date 8th th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[53]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select end date field
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/15/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
  await page.waitForTimeout(200);
    //Screenshot validation-The 8th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-325', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click dynamic object
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
     //Click to enter increment value
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('10');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //8 th task duration
    await page.locator("(//td[contains(@class,'e-rowcell')])[54]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('9');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The task 8th should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-326', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click dynamic object
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
    //click duration 8th th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[54]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select duration field
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('9');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 8th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-327', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click hierarchy
    await page.locator("(//li[text()='hierarchy'])[1]").click();
    await page.waitForTimeout(500);
    //2nd task progress
    await page.locator("(//td[contains(@class,'e-rowcell')])[14]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 2nd task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-328', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click hierarchy
    await page.locator("(//li[text()='hierarchy'])[1]").click();
    await page.waitForTimeout(500);
    //click duration 8th th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[54]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select progress field
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
  await page.waitForTimeout(200);
    //Screenshot validation-The 2nd task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-329', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click hierarchy
    await page.locator("(//li[text()='hierarchy'])[1]").click();
    await page.waitForTimeout(500);
    //5th task start date
    await page.locator("(//td[contains(@class,'e-rowcell')])[31]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 5th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-330', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click hierarchy
    await page.locator("(//li[text()='hierarchy'])[1]").click();
    await page.waitForTimeout(500);
    //click duration 8th th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[54]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select start date field
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/10/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 8th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-331', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click hierarchy
    await page.locator("(//li[text()='hierarchy'])[1]").click();
    await page.waitForTimeout(500);
    //5th task end date
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/30/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 5th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-332', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click hierarchy
    await page.locator("(//li[text()='hierarchy'])[1]").click();
    await page.waitForTimeout(500);
    // 5 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[33]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select end  date field
    await page.locator("(//input[contains(@class,'e-control')])[4]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('4/30/2025');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
  await page.waitForTimeout(200);
    //Screenshot validation-The 5th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-333', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click hierarchy
    await page.locator("(//li[text()='hierarchy'])[1]").click();
    await page.waitForTimeout(500);
    //5th task duration
    await page.locator("(//td[contains(@class,'e-rowcell')])[34]").dblclick();
    await page.waitForTimeout(1000);
    //Press Control+A to select the existing value
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('23');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The task 5 should be rendered as a critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('CPET-334', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //Click hierarchy
    await page.locator("(//li[text()='hierarchy'])[1]").click();
    await page.waitForTimeout(500);
    // 5 th task
    await page.locator("(//td[contains(@class,'e-rowcell')])[33]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //select duration field
    await page.locator("(//input[contains(@class,'e-control')])[5]").click();
    await page.waitForTimeout(500);
    //Press Control+A to select the existing value and delete it
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('23');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The 5th task should be rendered as a non-critical taskbar.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});