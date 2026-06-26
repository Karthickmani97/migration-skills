import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
import { pdf } from 'pdf-to-img';

test('MTD-001', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/methods');
    await page.waitForTimeout(2000);
    //Press the keyboard Control button down
    await page.keyboard.down("Control");
    await page.waitForTimeout(500);
    //Select 1st task name 
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(500);
    //Select the 2 nd task name
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
    await page.waitForTimeout(500);
    //Select the 3rd task name
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").click();
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.up("Control");
    await page.waitForTimeout(2000);
    //Screenshot validation-1. Verify multi-task selection using Ctrl+Click adds individual tasks to selection array
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('MTD-002', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/methods ');
    await page.waitForTimeout(2000);
    // Press Shift down
    await page.keyboard.down('Shift');
    await page.waitForTimeout(500);
    // Select tasks
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(500);
    //Task name 2
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
    await page.waitForTimeout(500);
    //Task name 3
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").click();
    await page.waitForTimeout(500);
    // Release Shift
    await page.keyboard.up('Shift');
    await page.waitForTimeout(2000);
    // Screenshot validation-2. Verify multi-task selection using Shift+Click selects continuous range of tasks  
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('MTD-003', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/methods ');
    await page.waitForTimeout(2000);
    // Press Shift down
    await page.keyboard.down('Shift');
    await page.waitForTimeout(500);
    // Select tasks
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(500);
    //Task name 2
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
    await page.waitForTimeout(500);
    //Task name 3
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").click();
    await page.waitForTimeout(500);
    //Task name 4
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").click();
    await page.waitForTimeout(500);
    // Release Shift
    await page.keyboard.up('Shift');
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[4]").click();
    await page.waitForTimeout(500);
    //Click the OK button
    await page.locator("(//button[text()='OK'])[2]").click();
    await page.waitForTimeout(2000);
    // Screenshot validation-3. Verify toolbar Delete button removes all currently selected tasks from both UI and data source
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('MTD-004', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/methods ');
    await page.waitForTimeout(2000);
    // Press Shift down
    await page.keyboard.down('Shift');
    await page.waitForTimeout(500);
    // Select tasks
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(500);
    //Task name 2
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
    await page.waitForTimeout(500);
    //Task name 3
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").click();
    await page.waitForTimeout(500);
    //Task name 4
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").click();
    await page.waitForTimeout(500);
    // Release Shift
    await page.keyboard.up('Shift');
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").click({ button: 'right' });
    await page.waitForTimeout(500);
    //Click the delete option in contextmenu
    await page.locator("(//li[text()='Delete Task'])[1]").click();
    await page.waitForTimeout(500);
    //Click the OK button
    await page.locator("(//button[text()='OK'])[2]").click();
    await page.waitForTimeout(2000);
    // Screenshot validation-4. Verify context menu Delete option removes all selected tasks when triggered via right-click
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('MTD-005', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/methods ');
    await page.waitForTimeout(2000);
    //Task name 2
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
    await page.waitForTimeout(500);
    //Click the delete key
    await page.keyboard.press('Delete');
    await page.waitForTimeout(500);
    //Click the OK button
    await page.locator("(//button[text()='OK'])[2]").click();
    await page.waitForTimeout(2000);
    // Screenshot validation-12. Verify deleting tasks with predecessor relationships updates successor task dependencies
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('MTD-006', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/methods ');
    await page.waitForTimeout(2000);
    // Press Shift down
    await page.keyboard.down('Shift');
    await page.waitForTimeout(500);
    // Select tasks
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(500);
    //Task name 2
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
    await page.waitForTimeout(500);
    //Task name 3
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").click();
    await page.waitForTimeout(500);
    //Task name 4
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").click();
    await page.waitForTimeout(500);
    //Task name 5
    await page.locator("(//td[contains(@class,'e-rowcell')])[34]").click();
    await page.waitForTimeout(500);
    //Task name 6
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").click();
    await page.waitForTimeout(500);
    //Task name 7
    await page.locator("(//td[contains(@class,'e-rowcell')])[50]").click();
    await page.waitForTimeout(500);
    // Release Shift
    await page.keyboard.up('Shift');
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[4]").click();
    await page.waitForTimeout(500);
    //Click the OK button
    await page.locator("(//button[text()='OK'])[2]").click();
    await page.waitForTimeout(2000);
    // Screenshot validation-29. Verify UI remains responsive during large-scale deletion operations (no freezing)
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('MTD-007', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/methods ');
    await page.waitForTimeout(2000);
    //Scroll down
    await page.evaluate(() => {
        document.querySelectorAll('.e-content')[1].scrollTop = 1000;
    });
    await page.waitForTimeout(2000);
    //Click the last task name
    await page.locator("(//td[contains(@class,'e-rowcell')])[314]").click();
    await page.waitForTimeout(500);
    //Click delete button
    await page.keyboard.press('Delete');
    await page.waitForTimeout(500);
    //Click the OK button
    await page.locator("(//button[text()='OK'])[2]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-31. Verify deletion operations work correctly with virtual scrolling enabled
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

test('MTD-008', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/methods ');
    await page.waitForTimeout(2000);
    //Click the last task name
    await page.locator("(//td[contains(@class,'e-rowcell')])[314]").click();
    await page.waitForTimeout(500);
    //Click delete button
    await page.keyboard.press('Delete');
    await page.waitForTimeout(500);
    //Click the OK button
    await page.locator("(//button[text()='OK'])[2]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-32. Verify deleting non-rendered tasks (outside viewport) completes successfully
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

test('MTD-009', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/methods ');
    await page.waitForTimeout(2000);

    // Press Control down
    await page.keyboard.down('Control');
    await page.waitForTimeout(500);

    // Click 20 task name cells (spaced roughly apart)
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();   // Task 1
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();   // Task 2
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").click();  // Task 3
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").click();  // Task 4
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[34]").click();  // Task 5
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").click();  // Task 6
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[50]").click();  // Task 7
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[58]").click();  // Task 8
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[66]").click();  // Task 9
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[74]").click();  // Task 10
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[82]").click();  // Task 11
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[90]").click();  // Task 12
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[98]").click();  // Task 13
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[106]").click();  // Task 14
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[114]").click();  // Task 15
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[122]").click();  // Task 16
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[130]").click();  // Task 17
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[138]").click();  // Task 18
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[146]").click();  // Task 19
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[154]").click();  // Task 20
    await page.waitForTimeout(500);

    // Release control
    await page.keyboard.up('Control');
    await page.waitForTimeout(500);

    // Click the delete button
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[4]").click();
    await page.waitForTimeout(500);
    //Click the OK button
    await page.locator("(//button[text()='OK'])[2]").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('MTD-010', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/methods ');
    await page.waitForTimeout(2000);

    // Press Control down
    await page.keyboard.down('Control');
    await page.waitForTimeout(500);

    // Click 10 task name cells (spaced roughly apart)
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();   // Task 1
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();   // Task 2
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").click();  // Task 3
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[26]").click();  // Task 4
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[34]").click();  // Task 5
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").click();  // Task 6
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[50]").click();  // Task 7
    await page.waitForTimeout(300);
    await page.locator("(//td[contains(@class,'e-rowcell')])[58]").click();  // Task 8
    await page.waitForTimeout(300);
    // Release control
    await page.keyboard.up('Control');
    await page.waitForTimeout(500);

    // Click the delete button
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[4]").click();
    await page.waitForTimeout(500);
    //Click the OK button
    await page.locator("(//button[text()='OK'])[2]").click();
    await page.waitForTimeout(2000);

    // Screenshot validation-131. Verify deleting all visible tasks in virtual viewport correctly handles viewport transition to next available content
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});