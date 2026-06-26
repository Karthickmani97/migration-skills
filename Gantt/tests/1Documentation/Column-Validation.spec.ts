import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

//Required field validation
test('Custom validation-001', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Data-annotation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Data-annotation' });
    await page.waitForTimeout(1000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Edit the Task name
    await page.locator("input[name='ActivityName']").fill('abc');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-validation message is indicated for Task name as it is a custom validation to have min length of 5 characters
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-002', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Data-annotation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Data-annotation' });
    await page.waitForTimeout(1000);
    //Double click to cell edit 
    await page.locator("(//td[contains(@class,'e-rowcell')])[8]").dblclick();
    await page.waitForTimeout(800);
    //Press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Click the Update  button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-validation message is indicated under taskname to be added
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-003', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Data-annotation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Data-annotation' });
    await page.waitForTimeout(1200);
    //Double click the  1st child taskbar to edit
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(2000);
    await page.locator("#ActivityName").click();
    await page.waitForTimeout(500);
    //Press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Press the Tab key to navigate to the next cell for start date 
    await page.keyboard.press('Tab');
    await page.waitForTimeout(600);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1200);
    //Screenshot validation-Error persist after Tab key is pressed without entering any value in the Task name
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-004', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Custom-validation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Custom-validation' });
    await page.waitForTimeout(1000);
    //Double click the  1st child taskbar to edit
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(800);
    //click the progress 
    await page.locator("input[name='Progress']").click();
    await page.waitForTimeout(500);
    //press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type invalid progress value
    await page.keyboard.type('150');
    await page.waitForTimeout(1000);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Multiple filed validation messages are indicated and saved is blocked
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-005', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Custom-validation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Custom-validation' });
    await page.waitForTimeout(1000);
    //Double click the  1st child taskbar to edit
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(800);
    //click the progress 
    await page.locator("input[name='Progress']").click();
    await page.waitForTimeout(500);
    //Edit the progress with invalid value
    await page.locator("input[name='Progress']").fill('100');
    await page.waitForTimeout(1000);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Multiple filed validation messages are indicated and saved is blocked
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the progress cell to edit again
    await page.locator("input[name='Progress']").click();
    await page.waitForTimeout(500);
    //Click the Progress to edit it again
    await page.locator("input[name='Progress']").fill('50');
    await page.waitForTimeout(500);
    //edit the taskname with valid value
    await page.locator("input[name='ActivityName']").fill('Taner');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Record is saved successfully after entering valid progress value
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-006', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Data-annotation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Data-annotation' });
    await page.waitForTimeout(1000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Edit the Task name
    await page.locator("input[name='ActivityName']").fill('abcde');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message clears after entering min lenght of 5 characters in Task name
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-007', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Data-annotation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Data-annotation' });
    await page.waitForTimeout(1000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //click the Task name input
    await page.locator("input[name='ActivityName']").click();
    await page.waitForTimeout(500);
    //Edit the Task name
    await page.locator("input[name='ActivityName']").fill('');
    await page.waitForTimeout(500);
    //Press Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //screenshot validation-Required field validation message is displayed for taskname
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Task name input
    await page.locator("input[name='ActivityName']").click();
    await page.waitForTimeout(200);
    //Edit the Task name
    await page.locator("input[name='ActivityName']").fill('ab');
    await page.waitForTimeout(200);
    //Press Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //screenshot validation-Min length validation message is displayed for taskname
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Task name input
    await page.locator("input[name='ActivityName']").click();
    await page.waitForTimeout(200);
    //Edit the Task name
    await page.locator("input[name='ActivityName']").fill('abcde');
    await page.waitForTimeout(200);
    //Press Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Record is saved successfully after entering valid progress value
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-008', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Data-annotation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Data-annotation' });
    await page.waitForTimeout(1000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);;
    //click the Task name input
    await page.locator("input[name='ActivityName']").click();
    await page.waitForTimeout(200);
    //Edit the Task name
    await page.locator("input[name='ActivityName']").fill('ab');
    await page.waitForTimeout(200);
    //Press Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //screenshot validation-Min length validation message is displayed for taskname
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-009', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Data-annotation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Data-annotation' });
    await page.waitForTimeout(1000);
    // Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    // Click the Task name input
    const taskName = page.locator("input[name='ActivityName']");
    await taskName.click();
    await page.waitForTimeout(200);
    // Enter value that matches the regex ^[A-Z] (starts with uppercase)
    await taskName.fill('Task Name');
    await page.waitForTimeout(200);
    // Press Tab to trigger validation
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Assert: No validation error shown for Task Name
    // Adjust selector below to your app's validation message element if needed
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-010', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Custom-validation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Custom-validation' });
    await page.waitForTimeout(1000);
    // Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    // Click the Task name input
    const taskName = page.locator("input[name='ActivityName']");
    await taskName.click();
    await page.waitForTimeout(200);
    // Enter value that matches the regex ^[A-Z] (starts with uppercase)
    await taskName.fill('task name');
    await page.waitForTimeout(200);
    // Press Tab to trigger validation
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-rror displays as it is due to mismatch with regex ^[A-Z]
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-011', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Custom-validation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Custom-validation' });
    await page.waitForTimeout(1000);
    // Open Add dialog
    await page.locator("(//span[text()='Add'])[1]").click();
    // Fill all required fields with valid values
    await page.locator("input[name='ActivityName']").fill('Task Name'); // Valid
    await page.locator("input[name='StartDate']").fill('2026-01-10');   // Valid date
    await page.locator("input[name='EndDate']").fill('2026-01-12');     // Valid date
    await page.locator("input[name='Progress']").fill('50');            // Valid progress;
    // Click Save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Take screenshot after successful save-All validations passed and record is added
    await expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-012', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Custom-validation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Custom-validation' });
    await page.waitForTimeout(1000);
    // Open Add dialog
    await page.locator("(//span[text()='Add'])[1]").click();
    // Fill fields: one invalid (Task Name starts lowercase), others valid
    await page.locator("input[name='ActivityName']").fill('Task Name'); // Valid
    await page.locator("input[name='StartDate']").fill('2026-01-10');   // Valid
    await page.locator("input[name='EndDate']").fill('2026-01-12');     // Valid
    await page.locator("input[name='Progress']").fill('1');            // Invalid
    // Trigger validation
    await page.keyboard.press('Tab');
    // Click Save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Optional: Take screenshot to verify disabled appearance (gray/inactive)
    await expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-013', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Custom-validation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Custom-validation' });
    await page.waitForTimeout(2000);
    //Click the cell
    await page.locator("(//td[contains(@class,'e-rowcell')])[8]").click();
    await page.waitForTimeout(500);
    // Open Edit dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(200);
    // Make Task Name invalid
    await page.locator("input[name='ActivityName']").fill('task name'); // invalid
    await page.waitForTimeout(500);
    // Close dialog
    await page.locator("(//button[text()='Cancel'])[1]").click();
    await page.waitForTimeout(500);
    // Reopen same record
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot after reopening-No error message is displayed 
    await expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-014', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Custom-validation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Custom-validation' });
    await page.waitForTimeout(2000);
    // Click the cell to select record
    await page.locator("(//td[contains(@class,'e-rowcell')])[8]").click();
    await page.waitForTimeout(500);
    // Open Edit dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    // Set StartDate and EndDate with invalid combination (EndDate < StartDate)
    await page.locator("input[name='StartDate']").fill('2025-01-15');
    await page.locator("input[name='EndDate']").fill('2025-01-10');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    // Click Save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot for validation state-Error is displayed for invalid date range
    await expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-015', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Data-annotation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Data-annotation' });
    await page.waitForTimeout(2000);
    // Open Edit dialog
    await page.locator("(//td[contains(@class,'e-rowcell')])[8]").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    // Action 1: Valid combination
    await page.locator("input[name='StartDate']").fill('2025-01-01');
    await page.locator("input[name='EndDate']").fill('2025-01-11');
    await page.locator("input[name='Duration']").fill('10');
    await page.keyboard.press('Tab');
    // Click Save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    await expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    // Action 2: Make Duration invalid
    await page.locator("input[name='Duration']").fill('11');
    await page.keyboard.press('Tab');
    // Click Save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation-
    await expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-016', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Custom-validation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Custom-validation' });
    await page.waitForTimeout(2000);
    // Open Add dialog
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(800);
    // Locate Progress input
    const progress = page.locator("input[name='Progress']");
    const saveButton = page.locator("(//button[text()='Save'])[1]");
    // --- Step 1: Enter invalid progress (e.g., 120) and assert error + Save disabled ---
    await progress.fill('120'); // invalid if rule is 0–100
     await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
     await page.waitForTimeout(500);
    // Screenshot of invalid state
    await expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // --- Step 2: Fix progress to a valid value and assert Save enabled ---
    await progress.fill('75'); // valid
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    // Optional: Click Save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot after fixing progress
    await expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-017', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Data-annotation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Data-annotation' });
    await page.waitForTimeout(1000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Edit the Task name
    await page.locator("input[name='ActivityName']").fill('Lorem ipsum dolor sit amet consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Error message is dispayed after adding  101 characters in the Task name
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-018', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Custom-validation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Custom-validation' });
    await page.waitForTimeout(1000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //click the progress 
    await page.locator("input[name='Progress']").click();
    await page.waitForTimeout(500);
    //press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type invalid progress value
    await page.keyboard.type('50');
    await page.waitForTimeout(1000);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Multiple filed validation messages are indicated and saved is blocked
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-019', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Custom-validation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Custom-validation' });
    await page.waitForTimeout(1000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //click the progress 
    await page.locator("input[name='Progress']").click();
    await page.waitForTimeout(500);
    //press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type invalid progress value
    await page.keyboard.type('-5');
    await page.waitForTimeout(1000);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-020', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Custom-validation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Custom-validation' });
    await page.waitForTimeout(1000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //click the duration 
    await page.locator("input[name='Duration']").click();
    await page.waitForTimeout(500);
    //press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type invalid progress value
    await page.keyboard.type('10');
    await page.waitForTimeout(1000);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-021', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Data-annotation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Data-annotation' });
    await page.waitForTimeout(1000);
    //Double click to cell edit 
    await page.locator("(//td[contains(@class,'e-rowcell')])[8]").dblclick();
    await page.waitForTimeout(800);
    //Press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Press the Enter
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-validation message is indicated under taskname to be added after pressing Enter key
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-022', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Data-annotation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Data-annotation' });
    await page.waitForTimeout(1000);
    //Double click to cell edit 
    await page.locator("(//td[contains(@class,'e-rowcell')])[8]").dblclick();
    await page.waitForTimeout(800);
    //Press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Press the type some text
    await page.keyboard.type('ab');
    await page.waitForTimeout(500);
    //Press the Escape
    await page.keyboard.press('Escape');
    await page.waitForTimeout(1000);
    //Screenshot validation-validation message is indicated under taskname to be added after pressing Escape key
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-023', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Data-annotation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Data-annotation' });
    await page.waitForTimeout(1000);
    //Double click the  progress cell 
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(800);
    //Press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Press the Tab key to navigate to the next cell for start date 
    await page.keyboard.type('-1');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter')
    await page.waitForTimeout(1000);
    await page.mouse.click(542, 42);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message for Progress is displayed as it cannot access negative and must be between 0 and 100
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-024', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Custom-validation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Custom-validation' });
    await page.waitForTimeout(1000);
    //Double click the  progress cell 
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(800);
    //Press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Press the type key
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message for Progress must be lesser than 50
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-025', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Custom-validation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Custom-validation' });
    await page.waitForTimeout(1000);
    //Double click the  progress cell 
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(800);
    //Press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Press the type key
    await page.keyboard.type('-5');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message for Progress must be greater than 5
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-026', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Data-annotation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Data-annotation' });
    await page.waitForTimeout(1000);
    //Double click the  progress cell 
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(800);
    //Press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Press the Tab key to navigate to the next cell for start date 
    await page.keyboard.type('101');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter')
    await page.waitForTimeout(50);
    await page.mouse.click(542, 42);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message for Progress is displayed is more than 100
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('Custom validation-027', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Data-annotation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Data-annotation' });
    await page.waitForTimeout(1000);
    //Double click the  progress cell 
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(800);
    //Press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Press the Tab key to navigate to the next cell for start date 
    await page.keyboard.type('-1');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter')
    await page.waitForTimeout(1000);
    await page.mouse.click(542, 42);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message for Progress is displayed as it cannot access negative and must be between 0 and 100
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Cancel  button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-028', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Custom-validation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Custom-validation' });
    await page.waitForTimeout(1000);
    //Double click the  progress cell 
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(800);
    //Press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Press the type key
    await page.keyboard.type('100');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message for Progress must be lesser than 50
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Cancel  button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-029', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Custom-validation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Custom-validation' });
    await page.waitForTimeout(1000);
    //Double click the  progress cell 
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(800);
    //Press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Press the type key
    await page.keyboard.type('-5');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message for Progress must be greater than 5
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Cancel  button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Custom validation-030', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Data-annotation');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Data-annotation' });
    await page.waitForTimeout(1000);
    //Double click the  progress cell 
    await page.locator("(//td[contains(@class,'e-rowcell')])[12]").dblclick();
    await page.waitForTimeout(800);
    //Press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Press the Tab key to navigate to the next cell for start date 
    await page.keyboard.type('101');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter')
    await page.waitForTimeout(50);
    await page.mouse.click(542, 42);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message for Progress is displayed is more than 100
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Cancel  button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});