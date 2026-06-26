import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('PET-001-Validate task dependency rendering', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should connect tasks accurately according to the input data provided.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-002-Validate Dynamic Changing of Duration Unit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //select the duration on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[6]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor value should update correctly with the selected duration unit.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-003-Validate Dynamic Changing of Duration Unit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //select the duration on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[6]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor value should update correctly with the selected duration unit.and be visible on grid and chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-004-Editing Predecessors with an Offset Duration Unit(Hour)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the predecessor for 4 th 
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("3FS+2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date 
    await page.locator("(//td[contains(@class,'e-rowcell')])[28]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 4's start date should be calculated based on Task 3's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-005-Editing Predecessors with an Offset Duration Unit(Minute)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //Select Minute
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the predecessor for 4 th 
    await page.locator("(//td[contains(@class,'e-rowcell')])[32]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("3FS+2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(500);
    //Click the start date 
    await page.locator("(//td[contains(@class,'e-rowcell')])[29]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 4's start date should be calculated based on Task 3's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-006-Editing Predecessor Field with Finish-to-Finish(FF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/AlphaNumeric');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/AlphaNumeric' });
    await page.waitForTimeout(2000);
    //Double click the predecessor for 3 row
    await page.locator("(//td[contains(@class,'e-rowcell')])[21]").dblclick();
    await page.waitForTimeout(1000);
    //Fill 2Aaa FS
    await page.locator("#DataItem___Predecessor").fill('2Aaa FF');
    await page.waitForTimeout(500);
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor value should be updated correctly and reflected on both the grid and the chart sides without any issues.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-007-Editing Predecessor Field with Finish-to-Start(FS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/negative');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/negative' });
    await page.waitForTimeout(2000);
    //Double click the predecessor for 3 row
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").dblclick();
    await page.waitForTimeout(1000);
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor value should be updated correctly and reflected on both the grid and the chart sides without any issues.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-008-Editing Predecessor Field with Start-to-Start(SS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/object');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/object' });
    await page.waitForTimeout(2000);
    //Double click the predecessor for 3 row
    await page.locator("(//td[contains(@class,'e-rowcell')])[21]").dblclick();
    await page.waitForTimeout(1000);
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor value should be updated correctly and reflected on both the grid and the chart sides without any issues.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-009-Editing the Predecessor Using Finish-to-Finish(FF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the predecessor for 12th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[96]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("11FF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-010-Editing the Predecessor Using SF', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the predecessor for 12th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[96]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("11SF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-011-Editing the Predecessor Using SS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the predecessor for 12th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[96]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("11SS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-012-Editing Predecessor Using FF Dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //click the predecessor for 12th 
    await page.locator("(//td[contains(@class,'e-rowcell')])[96]").click();
    await page.waitForTimeout(500);
    //click the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Double click the task type 
    await page.locator("(//td[contains(@class,'e-rowcell')])[323]").dblclick();
    await page.waitForTimeout(1000);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select FF dialog
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-013-Editing the Predecessor Using SF', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //click the predecessor for 12th 
    await page.locator("(//td[contains(@class,'e-rowcell')])[96]").click();
    await page.waitForTimeout(500);
    //click the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Double click the task type 
    await page.locator("(//td[contains(@class,'e-rowcell')])[323]").dblclick();
    await page.waitForTimeout(1000);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select SF dialog
    await page.locator("(//li[text()='Start-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-014-Editing the Predecessor Using SS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //click the predecessor for 12th 
    await page.locator("(//td[contains(@class,'e-rowcell')])[96]").click();
    await page.waitForTimeout(500);
    //click the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Double click the task type 
    await page.locator("(//td[contains(@class,'e-rowcell')])[323]").dblclick();
    await page.waitForTimeout(1000);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select SS dialog
    await page.locator("(//li[text()='Start-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUE NEED TO ADD TESTCASE FOR IT AFTER FIX
// test('PET-015-Adding a Connector Line Between Segment', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/Predecessor/editing');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
//     await page.waitForTimeout(2000);
//     //Right click the predecessor 
//     await page.locator("(//td[contains(@class,'e-rowcell')])[96]").click({ button: 'right' });
//     await page.waitForTimeout(1000);
//     //click the delete dependency button
//     await page.locator("(//li[text()='Delete Dependency'])[1]").hover({ force: true });
//     await page.waitForTimeout(1000);
//     //Navigate to dependency
//     await page.locator("(//li[text()='11 - Cure Foundation'])[1]").click();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//ISSUE NEED TO ADD TESTCASE FOR IT AFTER FIX
// test('PET-016-Adding a Connector Line Between Segment Child Tasks with FS ', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/Predecessor/editing');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
//     await page.waitForTimeout(2000);
//     //Right click the predecessor 
//     await page.locator("(//td[contains(@class,'e-rowcell')])[96]").click({ button: 'right' });
//     await page.waitForTimeout(1000);
//     //click the delete dependency button
//     await page.locator("(//li[text()='Delete Dependency'])[1]").hover({ force: true });
//     await page.waitForTimeout(1000);
//     //Navigate to dependency
//     await page.locator("(//li[text()='11 - Cure Foundation'])[1]").click();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//ISSUE NEED TO ADD TESTCASE FOR IT AFTER FIX
// test('PET-017-Adding a Connector Line Between Segment ', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/Predecessor/editing');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
//     await page.waitForTimeout(2000);
//     //Right click the predecessor 
//     await page.locator("(//td[contains(@class,'e-rowcell')])[96]").click({ button: 'right' });
//     await page.waitForTimeout(1000);
//     //click the delete dependency button
//     await page.locator("(//li[text()='Delete Dependency'])[1]").hover({ force: true });
//     await page.waitForTimeout(1000);
//     //Navigate to dependency
//     await page.locator("(//li[text()='11 - Cure Foundation'])[1]").click();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


test('PET-018-Hover Over Connector Line using the Tooltip Template ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //click the delete dependency button
    await page.mouse.move(925, 225);
    await page.waitForTimeout(2500);
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-020', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //Select AddRecord
    await page.locator("(//li[text()='AddRecord'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The new record should remain selected after adding it.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-021-Row Drag and Drop Above a Record', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    await page.mouse.click(52, 309);
    await page.mouse.down();
    await page.mouse.move(53, 233);
    await page.waitForTimeout(1000);
    await page.mouse.move(52, 130);
    await page.mouse.up();
    await page.waitForTimeout(5000);
    //Screenshot validation-The predecessor value (4FS) should be correctly updated in both the grid and chart views.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-022-Row Drag and Drop Below a Record', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    await page.mouse.click(51, 308);
    await page.mouse.down();
    await page.mouse.move(52, 242);
    await page.waitForTimeout(1000);
    await page.mouse.move(52, 234);
    await page.mouse.up();
    await page.waitForTimeout(5000);
    //Screenshot validation-The predecessor value (4FS) should be correctly updated in both the grid and chart views.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-023-Row Drag and Drop as a Child Record', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    await page.mouse.click(51, 310);
    await page.mouse.down();
    await page.mouse.move(52, 242);
    await page.waitForTimeout(1000);
    await page.mouse.move(52, 234);
    await page.mouse.up();
    await page.waitForTimeout(5000);
    //Screenshot validation-The predecessor value (4FS) should be correctly updated in both the grid and chart views.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-024-Row Drag and Drop Below Record Using Public Method', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //Select DropBelow
    await page.locator("(//li[text()='DropBelow'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The new record should remain selected after adding it.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-025-Row Drag and Drop Above Record Using Public Method', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //Select DropAbove
    await page.locator("(//li[text()='DropAbove'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The new record should remain selected after adding it.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('PET-026', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //Select DropAsChild
    await page.locator("(//li[text()='DropAsChild'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The new record should remain selected after adding it.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-027-Cell Editing Functionality for Unscheduled Tasks', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
    await page.waitForTimeout(2000);
    //Double click the 5 th row predecessor
    await page.locator('(//td[contains(@class,"e-rowcell")])[30]').dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("4FF");
    //Press the Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-The 'Predecessor' value should correctly reflect "4FF" in both the grid and the chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Issue
test('PET-028-Edit Dialog Functionality for Unscheduled Tasks', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
    await page.waitForTimeout(2000);
    //Double click the 5 th row predecessor
    await page.locator('(//td[contains(@class,"e-chart-row-cell e-chart-row-border")])[5]').dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator('(//div[contains(@class,"e-tab-text")])[2]').click();
    await page.waitForTimeout(1000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(1000);
    //Click the dropdown to select 
    await page.locator('(//span[contains(@class,"e-input")])[7]').click();
    await page.waitForTimeout(1000);
    //select the 4 th
    await page.locator("(//li[text()='4-Auto with Start Date only'])[1]").click();
    await page.keyboard.press("Tab");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 'Predecessor' value should correctly reflect "4FF" in both the grid and the chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-029-Edit Dialog Functionality for Unscheduled Tasks', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
    await page.waitForTimeout(2000);
    //Select Auto
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Auto'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the 4 th row predecessor
    await page.locator('(//td[contains(@class,"e-rowcell")])[24]').dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.type("1FF");
    await page.waitForTimeout(500);
    //Click the update button
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-The 'Predecessor' value should correctly reflect "1FS" in both the grid and the chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-030-Edit Dialog Functionality for Unscheduled Tasks', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
    await page.waitForTimeout(2000);
    //Select Auto
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Auto'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the 4 th row predecessor
    await page.locator('(//td[contains(@class,"e-chart-row-cell e-chart-row-border")])[4]').dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator('(//div[contains(@class,"e-tab-text")])[2]').click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select 
    await page.locator('(//span[contains(@class,"e-input")])[7]').click();
    await page.waitForTimeout(500);
    //Select the records
    await page.locator("(//li[text()='1-Project initiation'])[1]").click();
    await page.waitForTimeout(500);
    //Select records
    await page.keyboard.press("Tab");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 'Predecessor' value should correctly reflect "1FS" in both the grid and the chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-031-Cell Editing Functionality for Unscheduled Tasks', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
    await page.waitForTimeout(2000);
    //Select Manual
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Manual'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the 7 th row predecessor
    await page.locator('(//td[contains(@class,"e-rowcell")])[42]').dblclick();
    await page.waitForTimeout(1000);
    //Select records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("6FS");
    //Click the update button
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-The 'Predecessor' value should correctly reflect "6FS" in both the grid and the chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-032-Edit Dialog Functionality for Unscheduled Tasks', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
    await page.waitForTimeout(2000);
    //Select Manual
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Manual'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the 4 th row predecessor
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[3]').dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator('(//div[contains(@class,"e-tab-text")])[2]').click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select 
    await page.locator('(//span[contains(@class,"e-input")])[7]').click();
    await page.waitForTimeout(500);
    //Select the records
    await page.locator("(//li[text()='6-Develop floor plan for estimation'])[1]").click();
    await page.waitForTimeout(500);
    //Select records
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(500);
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 'Predecessor' value should correctly reflect "6FS" in both the grid and the chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//CONSOLE ERROR THROWN , ISSUE
test('PET-033-Adding a Connector Line Between Two Tasks(Auto)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
    await page.waitForTimeout(2000);
    //Move FF from the 2 nd to the 4 th 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[4]");
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
    await page.waitForTimeout(1000);
    //Screenshot validation-The 'Predecessor' value should correctly reflect "6FS" in both the grid and the chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//CONSOLE ERROR THROWN ,ISSUE
test('PET-034-Adding a Connector Line Between Two Tasks(Auto && Manual) ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
    await page.waitForTimeout(2000);
    //Move FF from the 2 nd to the 4 th 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[4]");
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
    await page.waitForTimeout(1000);
    //Screenshot validation-The end date calculation should not be applicable when connecting the predecessor between auto-scheduled and manually scheduled tasks.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('PET-035-Adding  Connector Between Two Tasks(Auto && Manual)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
    await page.waitForTimeout(2000);
    //Move FF from the 1 nd to the 6 th 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[6]");
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
    //Screenshot validation-The end date calculation should not be applicable when connecting the predecessor between auto-scheduled and manually scheduled tasks.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-036-Adding Connector Line Between Two Tasks Auto ScheduleMode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
    await page.waitForTimeout(2000);
    //Select Auto
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Auto'])[1]").click();
    await page.waitForTimeout(500);
    //Move FF from the 1 st to the 4 th 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[4]");
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
    //Screenshot validation- Adding a Connector Line Between Two Tasks in Auto ScheduleMode
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('PET-037-Connector Line Between Two Tasks in Manual ScheduleMode', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
//     await page.waitForTimeout(2000);
//     //Select Manual
//     await page.locator('(//span[contains(@class,"e-input")])[2]').click();
//     await page.waitForTimeout(1000);
//     await page.locator("(//li[text()='Manual'])[1]").click();
//     await page.waitForTimeout(500);
//     //Move FF from the 1 st to the 4 th 
//     const src = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[4]");
//     const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[6]");
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(2000);
//     //Screenshot validation-The 6th  task's end date should be calculated based on Task 4's end date
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('PET-038-Predecessor Rendering in Custom ScheduleMode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should connect tasks accurately according to the input data provided.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-039-Predecessor Rendering in Auto ScheduleMode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
    await page.waitForTimeout(2000);
    //Select Auto
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Auto'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should connect tasks accurately according to the input data provided.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-040-Predecessor Rendering in Manual ScheduleMode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
    await page.waitForTimeout(2000);
    //Select Manual
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Manual'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should connect tasks accurately according to the input data provided.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-041-Predecessor Rendering Using Alphanumeric TaskId', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/AlphaNumeric');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/AlphaNumeric' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should connect tasks accurately according to the input data provided.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-042-Predecessor Rendering Using Object TaskId', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/object');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/object' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should connect tasks accurately according to the input data provided.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-043-Predecessor Rendering Using Negative TaskId', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/negative');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/negative' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should connect tasks accurately according to the input data provided.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-044-Predecessor Rendering Using GUID TaskId', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/GuidVirtual');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/GuidVirtual' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should connect tasks accurately according to the input data provided.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//CONSOLE ERROR IS THROWN
// test('PET-045-Predecessor Rendering in RTL Mode', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/Predecessor/editing');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
//     await page.waitForTimeout(2000);
//     //Enable RTL
//     await page.locator('(//span[contains(@class,"e-switch-handle")])[1]').click();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-The dependencies should connect tasks accurately according to the input data provided.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('PET-046-Predecessor Rendering in ResourceView.', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Select resource view
    await page.locator('(//span[contains(@class,"e-switch-handle e-switch-active")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should connect tasks accurately according to the input data provided.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-46-Predecessor Using a Public Method with Alphanumeric TaskId', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/AlphaNumeric');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/AlphaNumeric' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(500);
    //Add predecessor
    await page.locator("(//li[text()='Add Predecessor'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor values ("2Aaa", "3Bbb FF-2") should be accurately updated and reflected on both the grid and chart sides without any issues.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-47-Update Predecessor with Alphanumeric Task ID', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/AlphaNumeric');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/AlphaNumeric' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(500);
    //Update predecessor
    await page.locator("(//li[text()='Update Predecessor'])[1]").click();
    await page.waitForTimeout(2500);
    //Screenshot validation-The predecessor values (e.g., 2Aaa FF+3 days) should be correctly updated and appear without issues in both the grid and chart in the 5Ddd row.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-48-Remove Predecessor Task with Alphanumeric Task ID', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/AlphaNumeric');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/AlphaNumeric' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(500);
    //Remove predecessor
    await page.locator("(//li[text()='Remove Predecessor'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor value should be removed from the task, and the connector lines between Task 4 and Task 5, as well as Task 2 and Task 5, should be removed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('PET-49-Predecessor Using a Public Method with Object TaskId', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/object');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/object' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(500);
    //Add predecessor
    await page.locator("(//li[text()='Add Predecessor'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor value should be removed from the task, and the connector lines between Task 4 and Task 5, as well as Task 2 and Task 5, should be removed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-50-Update Predecessor with Object', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/object');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/object' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(500);
    //Update predecessor
    await page.locator("(//li[text()='Update Predecessor'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor values (e.g., 7Fff,8) should be correctly updated and appear without issues in both the grid and chart in the 10th row.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-51-Remove Predecessor from Task with Object', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/object');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/object' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(500);
    //Add predecessor
    await page.locator("(//li[text()='Add Predecessor'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(500);
    //Remove predecessor
    await page.locator("(//li[text()='Remove Predecessor'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor value should be removed from the task, and the connector lines between Task 3 and Task 2 should be removed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-52-Remove Predecessor from Task with Object', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator('(//span[contains(@class,"e-input")])[4]').click();
    await page.waitForTimeout(500);
    //Remove predecessor
    await page.locator("(//li[text()='Remove Predecessor'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class,"e-input")])[4]').click();
    await page.waitForTimeout(500);
    //Add predecessor
    await page.locator("(//li[text()='Add Predecessor'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor values (4, "2FF-2") should be accurately updated and reflected on both the grid and chart sides without any issues.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-53-Updating Predecessor Using a Public Method', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator('(//span[contains(@class,"e-input")])[4]').click();
    await page.waitForTimeout(500);
    //Update predecessor
    await page.locator("(//li[text()='Update Predecessor'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor values (e.g., 6, "1FF") should be correctly updated and appear without issues in both the grid and chart in the 10th row.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-54-Remove Predecessor Using a Public Method', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/unscheduled-task');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/unscheduled-task' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator('(//span[contains(@class,"e-input")])[4]').click();
    await page.waitForTimeout(500);
    //Remove predecessor
    await page.locator("(//li[text()='Remove Predecessor'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor value should be removed from the task, and the connector lines between Task 3 and Task 2 should be removed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-55-Adding a Predecessor Using a Public Method with Negative TaskId', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/negative');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/negative' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(500);
    //Add predecessor
    await page.locator("(//li[text()='Add Predecessor'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor values (-2, "4FF-2") should be accurately updated and reflected on both the grid and chart sides without any issues.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-56-Updating a Predecessor with Negative TaskId Using a Public Method', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/negative');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/negative' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(500);
    //Update predecessor
    await page.locator("(//li[text()='Update Predecessor'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor values (e.g., 3, "4FS") should be correctly updated and appear without issues in both the grid and chart in the 10th row.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-57-Remove Predecessor with Negative TaskId Using a Public Method', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/negative');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/negative' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(500);
    //Remove predecessor
    await page.locator("(//li[text()='Remove Predecessor'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor value should be removed from the task, and the connector lines between Task 3 and Task -2 should be removed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//IT HAS AN ISSUE 
test('PET-058-Connector Line Between Last Two Tasks', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/AlphaNumeric');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/AlphaNumeric' });
    await page.waitForTimeout(2000);
    //Move FF from the 25.1 st to the 26.1
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[25]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[26]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(2100);
        }
    }
    await page.waitForTimeout(2000);
    //Screenshot validation-The 6th  task's end date should be calculated based on Task 4's end date
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-60-Edit Dialog Functionality for AlphaNumeric Sample', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/AlphaNumeric');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/AlphaNumeric' });
    await page.waitForTimeout(2000);
    //Double click the dependency
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[17]").dblclick();
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(1000);
    //Double click the dependency
    await page.locator("(//td[contains(@class,'e-lastrowcell ')])[10]").dblclick();
    await page.waitForTimeout(1000);
    //Click the drop down to select FF
    await page.locator("(//span[contains(@class,'e-input')])[9]").click();
    await page.waitForTimeout(500);
    //Select Finish-Finish
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 'Predecessor' value should correctly reflect "25.1 FF" in both the grid and the chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-61-Dependency Rendering with Invalid Predecessor Value', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Screenshot validation-Dependencies should connect tasks accurately according to the provided input data. If the predecessor value is invalid, the connector line should not be rendered.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-62-Dependency Rendering Zooming In Using the Toolbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the zoom in button
    await page.locator("(//span[text()='Zoom in'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation- zooming in, dependency lines should be rendered correctly, maintaining accurate connections between tasks as per the provided input data.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-63', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the zoom out button
    await page.locator("(//span[text()='Zoom out'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-After zooming out, dependency lines should be rendered correctly, maintaining accurate connections between tasks as per the provided input data.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-64', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the zoom to fit button
    await page.locator("(//span[text()='Zoom to fit'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-After performing the "Zoom To Fit" action, dependency lines should be rendered correctly, maintaining accurate connections between tasks according to the provided input data.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-65-Editing the Predecessor Using Finish-to-Finish(FF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the predecessor for 12th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[96]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("11FF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-66-Editing Predecessor Using SF', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //select from the duration drop down
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the predecessor for 12th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[96]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("11FF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-67-Editing Predecessor Using SF', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //select from the duration drop down
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the predecessor for 12th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[96]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("11SS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-68-Editing the Predecessor FF', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //select chart side 12 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[90]").click();
    await page.waitForTimeout(500);
    //Click the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Double click the dependency
    await page.locator("(//td[contains(@class,'e-lastrowcell ')])[11]").dblclick();
    await page.waitForTimeout(1000);
    //Click the drop down to select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //Select Finish-Finish
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 'Predecessor' value should correctly reflect "25.1 FF" in both the grid and the chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-69-Editing the Predecessor SF', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //select chart side 12 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[90]").click();
    await page.waitForTimeout(500);
    //Click the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Double click the dependency
    await page.locator("(//td[contains(@class,'e-lastrowcell ')])[11]").dblclick();
    await page.waitForTimeout(1000);
    //Click the drop down to select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //Select Start-Finish
    await page.locator("(//li[text()='Start-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 'Predecessor' value should correctly reflect "25.1 FF" in both the grid and the chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-70-Editing the Predecessor SS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //select chart side 12 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[90]").click();
    await page.waitForTimeout(500);
    //Click the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Double click the dependency
    await page.locator("(//td[contains(@class,'e-lastrowcell ')])[11]").dblclick();
    await page.waitForTimeout(1000);
    //Click the drop down to select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //Select Start-Start
    await page.locator("(//li[text()='Start-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 'Predecessor' value should correctly reflect "25.1 FF" in both the grid and the chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-71', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
     await page.locator(".e-chart-scroll-container.e-content").click();
    await page.mouse.wheel(20, 275)
    await page.waitForTimeout(2000);
    //select chart side 12 th row
    await page.locator("(//td[contains(@aria-label,'Basement Walls Column Header Job Name')])[1]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //click the delete dependency button
    await page.locator("(//li[text()='Delete Dependency'])[1]").hover({ force: true });
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//li[text()='11 - Cure Foundation'])[1]").click();
    await page.waitForTimeout(500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[11]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[12]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2, { steps: 40 });
            await page.mouse.down();
            await page.waitForTimeout(2000);
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 8 });
            await page.waitForTimeout(2000);
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    await page.waitForTimeout(1000);
        //Assertion validation-Predecessor cell should not contain '11'
        await expect(page.locator("(//td[contains(@class,'e-rowcell')])[96]")).not.toContainText('11');
});

test('PET-72', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    await page.locator(".e-chart-scroll-container.e-content").click();
    await page.mouse.wheel(20, 275)
    await page.waitForTimeout(2000);
    //select chart side 12 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[90]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //click the delete dependency button
    await page.locator("(//li[text()='Delete Dependency'])[1]").hover({ force: true });
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//li[text()='11 - Cure Foundation'])[1]").click();
    await page.waitForTimeout(500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[11]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[12]");
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
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-73-Connector Line Between Segment Child Tasks with SS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
      await page.locator(".e-chart-scroll-container.e-content").click();
    await page.mouse.wheel(20, 275)
    await page.waitForTimeout(2000);
    //select chart side 12 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[90]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //click the delete dependency button
    await page.locator("(//li[text()='Delete Dependency'])[1]").hover({ force: true });
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//li[text()='11 - Cure Foundation'])[1]").click();
    await page.waitForTimeout(500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[11]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[12]");
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
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-74-Editing the Predecessor Using Finish-to-Finish(FF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the predecessor for 12th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[96]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("11FF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-75-Editing the Predecessor Using Start-to-Finish(SF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the predecessor for 12th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[96]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("11SF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-76-Editing Predecessor Using SS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Double click the predecessor for 12th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[96]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("11SS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-77-Editing the Predecessor Using FF ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //select chart side 12 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[90]").click();
    await page.waitForTimeout(500);
    //Click the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Double click the dependency
    await page.locator("(//td[contains(@class,'e-lastrowcell ')])[11]").dblclick();
    await page.waitForTimeout(1000);
    //Click the drop down to select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //Select record
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 'Predecessor' value should correctly reflect "25.1 FF" in both the grid and the chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-78-Editing the Predecessor Using SF ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //select chart side 12 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[90]").click();
    await page.waitForTimeout(500);
    //Click the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Double click the dependency
    await page.locator("(//td[contains(@class,'e-lastrowcell ')])[11]").dblclick();
    await page.waitForTimeout(1000);
    //Click the drop down to select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //Select record
    await page.locator("(//li[text()='Start-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 'Predecessor' value should correctly reflect "25.1 FF" in both the grid and the chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-79-Editing the Predecessor Using SS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //select chart side 12 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[90]").click();
    await page.waitForTimeout(500);
    //Click the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Double click the dependency
    await page.locator("(//td[contains(@class,'e-lastrowcell ')])[11]").dblclick();
    await page.waitForTimeout(1000);
    //Click the drop down to select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //Select record
    await page.locator("(//li[text()='Start-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 'Predecessor' value should correctly reflect "25.1 FF" in both the grid and the chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('PET-80-Connector Line Between Segment Child Tasks with FF', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/Predecessor/editing');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
//     await page.waitForTimeout(2000);
//     await page.locator(".e-chart-scroll-container.e-content").click();
//     await page.mouse.wheel(20, 275)
//     await page.waitForTimeout(2000);
//     //select chart side 12 th row
//     await page.locator("(//td[contains(@class,'e-rowcell')])[90]").click({ button: 'right' });
//     await page.waitForTimeout(500);
//     //click the delete dependency button
//     await page.locator("(//li[text()='Delete Dependency'])[1]").hover({ force: true });
//     await page.waitForTimeout(1000);
//     //Navigate to dependency
//     await page.locator("(//li[text()='11 - Cure Foundation'])[1]").click();
//     await page.waitForTimeout(500);
//     const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[11]");
//     const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[12]");
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     }
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('PET-81-Connector Line Between Segment Child Tasks with FS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    await page.locator(".e-chart-scroll-container.e-content").click();
    await page.mouse.wheel(20, 275)
    await page.waitForTimeout(2000);
    //select chart side 12 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[90]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //click the delete dependency button
    await page.locator("(//li[text()='Delete Dependency'])[1]").hover({ force: true });
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//li[text()='11 - Cure Foundation'])[1]").click();
    await page.waitForTimeout(500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[11]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[12]");
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
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-82-Connector Line Between Segment Child Tasks with SS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    await page.locator(".e-chart-scroll-container.e-content").click();
    await page.mouse.wheel(20, 275)
    await page.waitForTimeout(2000);
    //select chart side 12 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[90]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //click the delete dependency button
    await page.locator("(//li[text()='Delete Dependency'])[1]").hover({ force: true });
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//li[text()='11 - Cure Foundation'])[1]").click();
    await page.waitForTimeout(1000);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[11]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[12]");
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
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-83-Connector Line Between Segment Child Tasks with FS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Event button
    await page.locator("(//button[text()='Events'])[1]").click();
    await page.waitForTimeout(500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[7]");
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
    //Screenshot validation-Task 12's end date should be calculated based on Task 11's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-84-Dependency Rendering with Year and Month Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to 300.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('PET-85-Dependency Rendering with Year and Day Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to 33.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('PET-86-Dependency Rendering with Year and Week Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to 150.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-87-Dependency Rendering with Year and Hours Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to 25.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-88-Dependency Rendering with Month and Week Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to 150.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-89-Dependency Rendering with Month and Day Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to 33.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-90-Dependency Rendering with Month and Hour Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to 25.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-91-Dependency Rendering with Week and Week Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to 150.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-92-Dependency Rendering with Week and Hour Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click zoom to fit 
    await page.locator("(//span[text()='Zoom to fit'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to 150.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-93-Dependency Rendering with Day and Day Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Format
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //select it
    await page.locator("(//li[text()='M'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(2000);
    //Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //select it
    await page.locator("(//li[text()='01'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should accurately connect tasks based on the provided input data, reflecting the updated timeline unit.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-94-Dependency Rendering with Hour and Hour Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Click zoom to fit 
    await page.locator("(//span[text()='Zoom to fit'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to 33.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-95-Dependency Rendering with Day and Hour Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click zoom to fit 
    await page.locator("(//span[text()='Zoom to fit'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should accurately connect tasks based on the provided input data, reflecting the updated timeline unit.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-96-Dependency Rendering with Year and Year Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to 2000.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-97-Dependency Rendering with Month and Month Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to 300.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-98-Dependency Rendering with Month and Year Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to 300.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-99-Dependency Rendering with Week and Year Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to 150.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-100-Dependency Rendering with Week and Month Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to 150.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-101-Dependency Rendering with Day and Week Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to 33.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-102-Dependency Rendering with Month and Month Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select from the count
    await page.locator("(//input[contains(@class,'e-control')])[8]").click();
    await page.waitForTimeout(500);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2");
    //Decrese bottom tear count by 1
    await page.locator("(//input[contains(@class,'e-control')])[8]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to .
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-103-Dependency Rendering with FS,SS,SF Types', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the dropdown for the dependency record
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select FS, SS, SF
    await page.locator("(//li[text()='FS, SS, SF'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should accurately connect tasks according to the selected dependency type, reflecting the task relationships.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-104-Dependency Rendering with FS,SS Type', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the dropdown for the dependency record
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select FS, SS
    await page.locator("(//li[text()='FS, SS'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should accurately connect tasks according to the selected dependency type, reflecting the task relationships.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-105-Dependency Rendering with FS Type', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the dropdown for the dependency record
    await page.locator("(//span[contains(@class,'e-input')])[8]").click();
    await page.waitForTimeout(500);
    //Select FS
    await page.locator("(//li[text()='FS'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should accurately connect tasks according to the selected dependency type, reflecting the task relationships.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-107-Predecessor Rendering with Baseline Enabled', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click  Render BaseLine
    await page.locator("(//button[text()='Render BaseLine'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should connect tasks accurately according to the input data provided, ensuring that both the baseline and actual task dependencies are correctly represented.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-108-Dependency Rendering with Hour and Year Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(1000);
    //select format for bottom tier 
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to .
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-109-Dependency Rendering with Hour and Month Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(800);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select format for bottom tier 
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(1000);
    //Enter the records
    await page.locator("(//li[text()='January'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the unit width is set to .
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-110-Dependency Rendering with Hour and Week Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //select format for bottom tier 
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should accurately connect tasks based on the provided input data, reflecting the updated timeline unit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-111-Dependency Rendering with Hour and Day Tiers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(600);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(600);
    //select format for bottom tier 
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("ArrowUp");
    await page.waitForTimeout(2000);
    //Screenshot validation-The dependencies should accurately connect tasks based on the provided input data, reflecting the updated timeline unit.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-112', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the search button
    await page.locator("(//input[contains(@class,'e-control')])[1]").click();
    await page.waitForTimeout(500);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("Site Evaluation");
    //Click the search icon
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //Clear the record
    await page.locator("(//input[contains(@class,'e-control')])[1]").click();
    await page.waitForTimeout(500);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-The timeline should be rendered correctly for all records, and dependency lines and taskbar should display properly based on the bottom timeline unit size.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Child-Child Mapping
test('PET-113-Adding predecessor with FF dependency type using toolbar Add', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='2-Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Finish
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The new task's end date should be calculated based on Task 2's end date and the Gantt chart should display a dependency line
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-114-Adding predecessor with FS dependency type using toolbar Add', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='2-Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select FS
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Start
    await page.locator("(//li[text()='Finish-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The new task's end date should be calculated based on Task 2's end date and the Gantt chart should display a dependency line
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-115-Adding predecessor with SF dependency type using toolbar Add', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='2-Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select SF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Start-Finish
    await page.locator("(//li[text()='Start-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The new task's end date should be calculated based on Task 2's end date and the Gantt chart should display a dependency line
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-116-Adding predecessor with SS dependency type using toolbar Add', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='2-Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select SS
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Start-Start
    await page.locator("(//li[text()='Start-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The new task's end date should be calculated based on Task 2's end date and the Gantt chart should display a dependency line
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-117-Adding predecessor with SS dependency type using toolbar Add', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='2-Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Finish
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //select day
    await page.locator("(//input[contains(@class,'e-control')])[12]").click();
    await page.waitForTimeout(500);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("3 days");
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The new task's end date should be calculated based on Task 2's end date and the Gantt chart should display a dependency line
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-118-Adding predecessor with negative lag using toolbar Add', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='2-Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Finish
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //select day
    await page.locator("(//input[contains(@class,'e-control')])[12]").click();
    await page.waitForTimeout(500);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("-2 days");
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The new record’s start date adjusts based on Task 2’s end date - 2 days and the Gantt Chart displays a dependency 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-119-Adding a Single Predecessor Using a Public Method', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //select 
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //Select Add Single Predecessor
    await page.locator("(//li[text()='Add Single Predecessor'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-A connector line should be rendered between Task 3 (predecessor) and Task 2 (successor) in the Gantt Chart, indicating a Finish-to-Finish (FF) dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-120-Adding a Single Predecessor with an Offset', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //select 
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //Select AddPredecessorWithOffset
    await page.locator("(//li[text()='AddPredecessorWithOffset'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-A connector line should be rendered between Task 3 (predecessor) and Task 2 (successor) in the Gantt Chart, indicating a Finish-to-Finish (FF) dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-121-Adding a Single Predecessor with a Negative Offset', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //select 
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //Select AddPredecessorWithOffset
    await page.locator("(//li[text()='AddPredecessorWithOffset'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-A connector line should be rendered between Task 3 (predecessor) and Task 2 (successor) in the Gantt Chart, indicating a Finish-to-Finish (FF) dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-122-Adding Multiple Predecessors Using a Public Method', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //select 
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //Select Add Multiple Predecessors
    await page.locator("(//li[text()='Add Multiple Predecessors'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-A connector line should be rendered between Task 3 (predecessor) and Task 2 (successor) in the Gantt Chart, indicating a Finish-to-Finish (FF) dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-123-Adding Multiple Predecessors with an Offset', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //select 
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //Select AddMultiplePredecessorsWithOffset
    await page.locator("(//li[text()='AddMultiplePredecessorsWithOffset'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-A connector line should be rendered between Task 3 (predecessor) and Task 2 (successor) in the Gantt Chart, indicating a Finish-to-Finish (FF) dependency with an positive offset value of 2.  
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-124', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //select 
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //Select AddPredecessorWithNegativeOffset
    await page.locator("(//li[text()='AddPredecessorWithNegativeOffset'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-A connector line should be rendered between Task 3 (predecessor) and Task 2 (successor) in the Gantt Chart, indicating a Finish-to-Finish (FF) dependency with an positive offset value of 2.  
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-125-Adding Multiple Predecessors to Task using Toolbar Add', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='2-Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Start
    await page.locator("(//li[text()='Finish-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click outside to close the dropdown
    await page.mouse.click(1018, 317);
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='3-Obtain Permits'])[1]").click();
    await page.waitForTimeout(500);
    //Select SS
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Start-Start
    await page.locator("(//li[text()='Start-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt Chart should accurately render dependency lines from Task 2 and Task 3 to the newly added task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-126-Remove Predecessor from Task using Toolbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the3 rd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[19]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the dependency to delete
    await page.locator("(//td[contains(@class,'e-lastrowcell')])[11]").click();
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor value should be removed from the task and the connector line between Task 2 and Task 3 should be removed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-127-Remove Predecessor from Task using Context Menu', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Click the 3 rd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[25]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    //click the delete dependency button
    await page.locator("(//li[text()='Delete Dependency'])[1]").hover({ force: true });
    await page.waitForTimeout(1000);
    //Navigate to dependency
    await page.locator("(//li[text()='3 - Obtain Permits'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor value should be removed from the task and the connector line between Task 2 and Task 3 should be removed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-128-Remove Predecessor from Task using public methods', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //Remove predecessor
    await page.locator("(//li[text()='RemovePredecessorFunc'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor value should be removed from the task and the connector line between Task 2 and Task 3 should be removed.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-129-Editing the Predecessor Field Finish-to-Finish(FF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 4 row
    await page.locator("(//td[contains(@class,'e-rowcell')])[33]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FF");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 4's end date should be calculated based on Task 2's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-130-Editing the Predecessor Field Finish-to-Start(FS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 4 row
    await page.locator("(//td[contains(@class,'e-rowcell')])[33]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FS");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 4's end date should be calculated based on Task 2's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-131-Editing the Predecessor Field Start-to-Start(SS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 4 row
    await page.locator("(//td[contains(@class,'e-rowcell')])[33]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SS");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 4's end date should be calculated based on Task 2's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-132-Editing the Predecessor Field Start-to-Finish(SF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 4 row
    await page.locator("(//td[contains(@class,'e-rowcell')])[33]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SF");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 4's end date should be calculated based on Task 2's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-133-Editing the Predecessor Field Finish-to-Finish(FF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 4 row
    await page.locator("(//td[contains(@class,'e-rowcell')])[33]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FF+2");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 4's end date should be calculated based on Task +2's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-134-Editing the Predecessor Field Finish-to-Start(FS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 4 row
    await page.locator("(//td[contains(@class,'e-rowcell')])[33]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FS+2");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 4's end date should be calculated based on Task +2's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-135-Editing the Predecessor Field Start-to-Start(SS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 4 row
    await page.locator("(//td[contains(@class,'e-rowcell')])[33]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SS+2");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 4's end date should be calculated based on Task +2's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-136-Editing the Predecessor Field  Start-to-Finish(SF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 4 row
    await page.locator("(//td[contains(@class,'e-rowcell')])[33]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SF+2");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 4's end date should be calculated based on Task +2's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-137-Editing the Predecessor Field Finish-to-Finish(FF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 4 row
    await page.locator("(//td[contains(@class,'e-rowcell')])[33]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FF-2");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 4's end date should be calculated based on Task -2's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-138-Editing the Predecessor Field Finish-to-Start(FS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 4 row
    await page.locator("(//td[contains(@class,'e-rowcell')])[33]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FS-2");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 4's end date should be calculated based on Task -2's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-139-Editing the Predecessor Field Start-to-Start(FS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 4 row
    await page.locator("(//td[contains(@class,'e-rowcell')])[33]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SS-2");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 4's end date should be calculated based on Task -2's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-140-Editing the Predecessor Field Start-to-Finish(SF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 4 row
    await page.locator("(//td[contains(@class,'e-rowcell')])[33]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the records
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SF-2");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 4's end date should be calculated based on Task -2's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-141-Editing the Predecessor with invalid input value Cell Editing', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 4 row
    await page.locator("(//td[contains(@class,'e-rowcell')])[33]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the invalid record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("$2%");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task 4's end date should be calculated based on Task -2's end date.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-142-Editing Predecessor FF Dependency using multi-predecessor', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the invalid record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("4FF,3FF");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 4FF, 3FF+2 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-143-Editing Predecessor FS Dependency using multi-predecessor', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the invalid record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("4FS,3FS");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 4FS,3FS+2 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-144-Editing Predecessor SS Dependency using multi-predecessor', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the invalid record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("4SS,3SS");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 4SS,3SS+3 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-145-Editing Predecessor SF Dependency using multi-predecessor', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the invalid record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type(" 4FF+2,3FF");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 4FF+2 days,3FF+4 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-146-Editing Predecessor  FF Dependency and offset value using multi-predecessor', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the invalid record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("4FF+2,3FF");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 4FF, 3FF+2 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-148-Editing Predecessor field with SS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the invalid record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("4SS+2,3SS");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 4SS+2 days,3SS+5 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-149-Editing Predecessor SF Dependency and offset value', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the invalid record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("4SF+2,3SF+3");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 4SF+2 days,3SF+5 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-150-Editing Predecessor field with FF', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the invalid record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("4FF-2,3FF");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 4FF-2 days,3FF.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-151-Editing Predecessor FS Dependency and negative offset', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the invalid record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("4FS-2,3FS");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 4FS-2 days,3FS.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-152-Editing Predecessor SS Dependency and negative offset', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the invalid record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("4SS-2,3SS");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 4SS-2 days,3SS+1 day.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-153-Editing Predecessor SF Dependency and negative offset', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dependency on 2nd row
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the invalid record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type(" 4SF-2,3SF-3");
    //Click update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 4SF-2 days,3SF+1 day.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-154', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[7]");
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
    //Click to select the record on the grid side.
    await page.locator("(//td[contains(@class,'e-rowcell')])[60]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor value is set to 6FS, 2FF+8 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-155', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[7]");
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
    //Click to select the record on the grid side.
    await page.locator("(//td[contains(@class,'e-rowcell')])[60]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor value is set to 6FS,2FS+5 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-156', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[7]");
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
    //Click to select the record on the grid side.
    await page.locator("(//td[contains(@class,'e-rowcell')])[60]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor value is set to 6FS,2SS+7 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-157-Adding a Connector Line Between Child Tasks with SF Type', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[7]");
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
    //Click to select the record on the grid side.
    await page.locator("(//td[contains(@class,'e-rowcell')])[60]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor value is set to 6FS,2SF+10 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-158-Updating a Single Predecessor Public Method', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //Update predecessor
    await page.locator("(//li[text()='UpdatePredecessorHandler'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The grid and chart sides should reflect the updated predecessor value without issues.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-159', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //UpdateMultiplePredecessors
    await page.locator("(//li[text()='UpdateMultiplePredecessors'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt chart should display a dependency line between Task 4 and Task 7 with Finish-to-Start (FS) dependency type and a 2-day lag.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-160-Adding predecessor with FF dependency type using toolbar Add', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 7 th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[55]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='2-Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Finish
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Check on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[60]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor value is set to 2FF+8 days,6FS.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-161-Editing a Predecessor with FS Dependency Type Using Toolbar Edit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 7 th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[55]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='2-Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Start
    await page.locator("(//li[text()='Finish-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Check on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[60]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor value is set to 2FS+5 days,6FS.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-162-Editing a Predecessor with SS Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 7 th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[55]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='2-Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Start-Start
    await page.locator("(//li[text()='Start-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Check on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[60]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor value is set to 2SS+7 days,6FS.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-163-Editing a Predecessor with SF Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 7 th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[55]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='2-Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Start-Finish
    await page.locator("(//li[text()='Start-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Check on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[60]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor value is set to 2SF+10 days,6FS.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Child-Parent Mapping
test('PET-164-Adding a Predecessor with FF Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='1-Planning and Permits'])[1]").click();
    await page.waitForTimeout(500);
    //Select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Finish
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Check on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[8]").click();
    await page.waitForTimeout(2000);
    //Screenshot validationGrid side: The new task's end date should be calculated based on Task 1's end date and the Gantt chart should display a dependency line, indicating Task 1 as the predecessor of the newly added record.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-165-Adding a Predecessor with FS Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='1-Planning and Permits'])[1]").click();
    await page.waitForTimeout(500);
    //Select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Start
    await page.locator("(//li[text()='Finish-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Check on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[8]").click();
    await page.waitForTimeout(2000);
    //Screenshot validationGrid side: The new task's end date should be calculated based on Task 1's end date and the Gantt chart should display a dependency line, indicating Task 1 as the predecessor of the newly added record.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-166-Adding a Predecessor with SS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='1-Planning and Permits'])[1]").click();
    await page.waitForTimeout(500);
    //Select SS
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Start-Start
    await page.locator("(//li[text()='Start-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Check on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[8]").click();
    await page.waitForTimeout(2000);
    //Screenshot validationGrid side: The new task's end date should be calculated based on Task 1's end date and the Gantt chart should display a dependency line, indicating Task 1 as the predecessor of the newly added record.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-167-Adding a Predecessor with SF', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='1-Planning and Permits'])[1]").click();
    await page.waitForTimeout(500);
    //Select SF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Start-Finish
    await page.locator("(//li[text()='Start-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Check on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[8]").click();
    await page.waitForTimeout(2000);
    //Screenshot validationGrid side: The new task's end date should be calculated based on Task 1's end date and the Gantt chart should display a dependency line, indicating Task 1 as the predecessor of the newly added record.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-168-Adding predecessor with lag using toolbar Add', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='1-Planning and Permits'])[1]").click();
    await page.waitForTimeout(500);
    //Select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Finish
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the days
    await page.locator("(//input[contains(@class,'e-control')])[12]").click();
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("3 days");
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Chart side: The Gantt Chart displays a dependency line, showing Task 1 as the predecessor of the new record and the new record’s end date adjusts based on Task 1’s end date + 3 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-169-Adding predecessor with negative lag using toolbar Add', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='1-Planning and Permits'])[1]").click();
    await page.waitForTimeout(500);
    //Select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Finish
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the days
    await page.locator("(//input[contains(@class,'e-control')])[12]").click();
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type(" -2 days");
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Chart side: The Gantt Chart displays a dependency line, showing Task 1 as the predecessor of the new record and the new record’s end date adjusts based on Task 1’s end date - 2 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-170-Adding a Connector Line Between Child and Parent', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[4]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[5]");
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
    };
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt Chart should display a connector line between Task 4 and Task 5 with a Start-to-Finish (SF) dependency type, and the taskbar should reflect the SF dependency accurately.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('PET-171-Adding a Connector Line Between Child and Parent Task using FS type', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/Predecessor/selfreference');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
//     await page.waitForTimeout(2000);
//     const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[3]");
//     const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[5]");
//     if (src && dst) {
//         const src_bound = await src.boundingBox();
//         const dst_bound = await dst.boundingBox();
//         if (src_bound && dst_bound) {
//             await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//             await page.mouse.down();
//             await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
//             await page.mouse.up();
//             await page.waitForTimeout(2000);
//         }
//     };
//     await page.waitForTimeout(2000);
//     //Screenshot validation-The Gantt chart should display a connector line between Task 3 and Task 5 with FS dependency type and the taskbar should be validated with the FS dependency type.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('PET-172-Adding a Connector Line Between Child and Parent Task using FF', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[4]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[5]");
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
    };
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt chart should display a connector line between Task 4 and Task 5 with FF dependency type and the taskbar should be validated with the FF dependency type.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-173-Adding a Connector Line Between Child and Parent Task using SS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[3]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[5]");
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
    };
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt chart should display a connector line between Task 3 and Task 5 with SS dependency type and the taskbar should be validated with the SS
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-174-Editing a Predecessor with Finish-to-Finish (FF) ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the second record
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='5-Site Preparation'])[1]").click();
    await page.waitForTimeout(500);
    //Select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Finish
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt chart should display a connector line between the dependent tasks with the FF 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-175-Editing a Predecessor with Finish-to-Start (FS) ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 1 ST record
    await page.locator("(//td[contains(@class,'e-rowcell')])[1]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='5-Site Preparation'])[1]").click();
    await page.waitForTimeout(500);
    //Select FS
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Start
    await page.locator("(//li[text()='Finish-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt chart should display a connector line between the dependent tasks with the FS
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-176-Editing a Predecessor with Start-to-Start (SS) ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the second record
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='5-Site Preparation'])[1]").click();
    await page.waitForTimeout(500);
    //Select FS
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Start-Start
    await page.locator("(//li[text()='Start-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt chart should display a connector line between the dependent tasks with the SS
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-177-Editing a Predecessor with SF Dependency Type Using Toolbar Edit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the second record
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='5-Site Preparation'])[1]").click();
    await page.waitForTimeout(500);
    //Select SF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Start-Finish
    await page.locator("(//li[text()='Start-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt chart should display a connector line between the dependent tasks with the FS
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-178-Editing the Predecessor Field Using a Finish-to-Finish(FF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5FF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt chart should display a connector line between the dependent tasks with the FS
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-179-Editing the Predecessor Field Using a Finish-to-Start(FS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5FS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt chart should display a connector line between the dependent tasks with the SS dependency type and the taskbar should be validated with the SS
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-180-Editing the Predecessor Field Using a Finish-to-Start(FS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5FS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt chart should display a connector line between the dependent tasks with the SS dependency type and the taskbar should be validated with the SS
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-181-Editing the Predecessor Field Using a Start-to-Finish(SF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5SF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt chart should display a connector line between the dependent tasks with the SS dependency type and the taskbar should be validated with the SF
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-182-Editing the Predecessor Field Using a Finish-to-Finish(FF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5FF+2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5FF+2 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-183-Editing the Predecessor Field Using a Finish-to-Finish(FS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5FS+2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5FS+2 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-184-Editing the Predecessor Field Using a Start-to-Start(SS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5SS+2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5SS+2 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-185-Editing the Predecessor Field Using a Start-to-Finish(SF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5SF+2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5SF+2 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-186-Editing the Predecessor Field Using a Finish-to-Finish(FF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5FF-2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5FF-2 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-187-Editing the Predecessor Field Using a Finish-to-Start(FS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5FS-2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5FS-2 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-188-Editing the Predecessor Field Using a Start-to-Start(SS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5SS-2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5SS-2 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-190-Editing Predecessor field with FF Dependency using multi-predecessor', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5FF,3FF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5FF,3FF+16 days
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-191-Editing Predecessor field with FS Dependency using multi-predecessor', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5FS,3FS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5FF,3FF+16 days
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-192-Editing Predecessor field with SS Dependency using multi-predecessor', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5SS,3SS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5SS,3SS+5 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-193-Editing Predecessor field with SF Dependency using multi-predecessor', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5SF,3SF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5SF,3SF+5 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-194-Editing Predecessor FF Dependency and offset value', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5FF+2,3FF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5FF+2 days,3FF+18 days
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-195-Editing Predecessor field with FS Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5FS+2,3FS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5FS+2 days,3FS+18 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-196-Editing Predecessor field with SS Dependency and offset', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5SS+2,3SS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5SS+2 days,3SS+7 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-197-Editing Predecessor field with SF Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5SF+2,3SF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5SF+2 days,3SF+7 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-198-Editing Predecessor field with FF Dependency and negative offset', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5FF-2,3FF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5FF-2 days,3FF+14 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-199-Editing Predecessor field with FS Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5FS-2,3FS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5FS-2 days,3FS+14 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-200-Editing Predecessor field with SS Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5SS-2,3SS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5SS-2 days,3SS+3 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-201-Editing Predecessor field with SF Dependency and negative', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/editing');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/editing' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("5SF-2,3SF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 5SF-2 days,3SF+3 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//PARENT MAPPING
test('PET-202-Editing a Predecessor with Finish-to-Finish(FF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 1 ST record
    await page.locator("(//td[contains(@class,'e-rowcell')])[1]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='5-Site Preparation'])[1]").click();
    await page.waitForTimeout(500);
    //Select FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Finish
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 7FF-3 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-203-Editing a Predecessor with FS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[37]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='2-Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select FS
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Start
    await page.locator("(//li[text()='Finish-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-5 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-204-Editing a Predecessor with SS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[37]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='2-Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select SS
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Start-Start
    await page.locator("(//li[text()='Start-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt chart should display a connector line between the dependent tasks with the SS
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-205-Editing a Predecessor with SF', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[37]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='2-Site Evaluation'])[1]").click();
    await page.waitForTimeout(500);
    //Select SF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Start-Finish
    await page.locator("(//li[text()='Start-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt chart should display a connector line between the dependent tasks with the SF
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-206-Adding Connector Line Between Parent  and Child Task Using FF', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[1]");
    await page.waitForTimeout(2000);
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[7]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2, { steps: 50 });
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
            await page.mouse.up();
            await page.waitForTimeout(5000);
        }
    }
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 6FS,1FF+3 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-207-Connector Line Between Parent and Child Task Using(FS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[1]");
    await page.waitForTimeout(2000);
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[7]");
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
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 6FS,1FS.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-208-Connector Line Between Parent and Child Task Using(SS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[1]");
    await page.waitForTimeout(2000);
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[7]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2, { steps: 50 });
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 50 });
            await page.mouse.up();
            await page.waitForTimeout(5000);
        }
    }
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 6FS,1SS+7 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-209-Connector Line Between Parent and Child Task Using(SF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[7]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2, { steps: 50 });
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(2000);
        }
    }
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 6FS,1SF+10 days
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-210-Editing the Predecessor Field Using a Finish-to-Finish(FF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-19 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-211-Editing the Predecessor Field Using a Finish-to-Start(FS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-5 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-212-Editing the Predecessor Field Using a Start-to-Start(SS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-7 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-213-Editing the Predecessor Field Using a Start-to-Finish(SF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-21 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-214-Editing the Predecessor Field Using a Finish-to-Finish(FF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FF+2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-17 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-215-Editing the Predecessor Field Using a Finish-to-Start(FS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FS+2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-3 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-216-Editing the Predecessor Field Using a Start-to-Start(SS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SS+2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-5 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-217-Editing the Predecessor Field Using a Start-to-Finish(SF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SF+2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-19 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-218-Editing the Predecessor Field Using a Finish-to-Finish(FF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FF-2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-21 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-219-Editing the Predecessor Field Using a Finish-to-Start(FS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FS-2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-7 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-220-Editing the Predecessor Field Using a Start-to-Start(SS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SS-2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-9 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-221-Editing the Predecessor Field Using a Start-to-Finish(SF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SF-2");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-23 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-222-Editing Predecessor FF Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency 9 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[78]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FF,4FF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 2FF+5 days,4FF.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-223-Editing Predecessor field with FS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency 9 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[78]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FS,4FS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 10th row’s predecessor field with the value 8FS-7 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-224-Editing Predecessor field with SS Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency 9 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[78]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SS,4SS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 10th row’s predecessor field with the value 8FS-9 days.Ensure the predecessor field value is set to 2SS+5 days,4SS.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-225-Editing Predecessor field with SF Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency 9 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[78]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SF,4SF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 2SF+5 days,4SF.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-226-Editing Predecessor field with FF Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency 9 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[78]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FF+2,4FF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 10th row’s predecessor field with the value 8FS-14 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-227-Editing Predecessor field with FS Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency 9 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[78]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FS+2,4FS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 2FS+5 days,4FS
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-228-Editing Predecessor field with SS Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency 9 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[78]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SS+2,4SS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 10th row’s predecessor field with the value 8FS-9 days
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-229-Editing Predecessor field with SS Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency 9 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[78]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SF+2,4SF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 2FF+5 days,4FF.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-230-Editing Predecessor field with FF Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency 9 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[78]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FF-2,4FF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 2FF+5 days,4FF.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-231-Editing Predecessor field with FS Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency 9 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[78]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2FS-2,4FS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 10th row’s predecessor field with the value 8FS-7 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-232-Editing Predecessor field with SS Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency 9 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[78]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SS-2,4SS");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 2SS+5 days,4SS.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-233-Editing Predecessor field with SF Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Double click the dropdown to select the dependency 9 th row
    await page.locator("(//td[contains(@class,'e-rowcell')])[78]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("2SF-2,4SF");
    //Click the update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Ensure the predecessor field value is set to 2SF+5 days,4SF.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//PARENT-PARENT MAPPING
test('PET-234-Editing a Predecessor with Finish-to-Finish(FF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[37]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='1-Planning and Permits'])[1]").click();
    await page.waitForTimeout(500);
    //Select  FF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Finish
    await page.locator("(//li[text()='Finish-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-14 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-235-Editing a Predecessor with FS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[37]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='1-Planning and Permits'])[1]").click();
    await page.waitForTimeout(500);
    //Select  FS
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Start
    await page.locator("(//li[text()='Finish-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-14 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-236-Editing a Predecessor with Start-to-Start(SS)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[37]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='1-Planning and Permits'])[1]").click();
    await page.waitForTimeout(500);
    //Select SS
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Finish
    await page.locator("(//li[text()='Start-Start'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-14 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-237-Editing a Predecessor with SF Dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[37]").click();
    await page.waitForTimeout(500);
    //Click edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select the dependency
    await page.locator("(//span[contains(@class,'e-input')])[11]").click();
    await page.waitForTimeout(500);
    //Select the dependency
    await page.locator("(//li[text()='1-Planning and Permits'])[1]").click();
    await page.waitForTimeout(500);
    //Select SF
    await page.locator("(//span[contains(@class,'e-input')])[13]").click();
    await page.waitForTimeout(500);
    //select Finish-Finish
    await page.locator("(//li[text()='Start-Finish'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-21 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-238-Connector Line Between Parent Tasks with Finish-to-Finish(FF)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[5]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2, { steps: 50 });
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(5000);
        }
    }
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt chart should display a connector line between the dependent tasks with the FF dependency type and the taskbar should be validated with the FF dependency type
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-239-Adding a Connector Line Between Parent Tasks with FS type', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[5]");
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
    await page.waitForTimeout(2000);
    //Screenshot validation-The Gantt chart should display a connector line between the dependent tasks with the FS dependency type and the taskbar should be validated with the FS dependency type.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-240', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[5]");
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
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-7 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-241-Adding a Connector Line Between Parent Tasks with SF type', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[5]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2, { steps: 50 });
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

test('PET-242', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1FF");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-14 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-243', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1FS");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-14 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-244', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1SS");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-14 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-245', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1SF");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-14 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-246', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1FF+2");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-14 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-247', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1FS+2");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-14 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-248', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1SS+2");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-14 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-249', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1SF+2");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-14 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-250', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1FF-2");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-14 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-251', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1FS-2");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-The lag should be updated for the 6th row’s predecessor field with the value 4FS-14 days.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-252', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1SS-2");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-253', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 5 record
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1SF-2");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-254', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 13th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1FF,5FF");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-255', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 13th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1FS,5FS");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-256', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 13th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1SS,5SS");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-257', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 13th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1SF,5SF");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-258', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 13th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1FF+2,5FF");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-259', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 13th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1FS+2,5FS");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-260', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 13th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1SS+2,5SS");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-261', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 13th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1SF+2,5SF");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-262', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 13th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1FF-2,5FF");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-263', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 13th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1FS-2,5FS");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-264', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 13th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1SS-2,5SS");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-265', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the 13th record
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").dblclick();
    await page.waitForTimeout(1000);
    //Enter the record
    await page.keyboard.type("1SF-2,5SF");
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('PET-266', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/Predecessor/selfreference');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(500);
    //Disable Predecessor Validation
    await page.locator("(//li[text()='Disable Predecessor Validation'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Comment because Events does not work
// test('PET-267', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/Predecessor/selfreference');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
//     await page.waitForTimeout(2000);
//     //Is Events
//     await page.locator("(//button[text()='Events'])[1]").click();
//     await page.waitForTimeout(500);
//     //
//     await page.locator('(//div[contains(@class, "e-gantt-parent-progressbar")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(684, 255);
//     await page.mouse.move(649, 271);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     //Screenshot validation-
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Comment because Events does not work
// test('PET-268', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/Predecessor/selfreference');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
//     await page.waitForTimeout(2000);
//     //Is Events
//     await page.locator("(//button[text()='Events'])[1]").click();
//     await page.waitForTimeout(500);
//     //
//     await page.locator('(//div[contains(@class, "e-gantt-parent-progressbar")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(684, 255);
//     await page.mouse.move(649, 271);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     //Screenshot validation-
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Comment because Events does not work
// test('PET-269', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/Predecessor/selfreference');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Predecessor/selfreference' });
//     await page.waitForTimeout(2000);
//     //Is Events
//     await page.locator("(//button[text()='Events'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click so select from the dropdown
//     await page.locator('').click();
//     await page.waitForTimeout(500);
//     //EnablePreserveLinkWithEditing
//     await page.locator("(//li[text()='Enable PreserveLink With Editing'])[1]").click();
//     await page.waitForTimeout(2000);
//     //
//     await page.locator('(//div[contains(@class, "e-gantt-parent-progressbar")])[2]').click();
//     await page.waitForTimeout(500);
//     await page.mouse.down();
//     await page.mouse.move(684, 255);
//     await page.mouse.move(649, 271);
//     await page.mouse.up();
//     await page.waitForTimeout(1000);
//     //Screenshot validation-
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });