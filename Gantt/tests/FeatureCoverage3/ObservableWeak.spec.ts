import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

//Observable initial load
test('OBW-001', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1500);
    expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Click Indent Task
test('OBW-002', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Perform soil test"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//Button[text()="Indent Task"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Click Outdent Task
test('OBW-003', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Perform soil test"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//Button[text()="Outdent Task"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Click Add below
test('OBW-004', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Perform soil test"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//Button[text()="Add below"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Click Clear Predecessors
test('OBW-005', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Perform soil test"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//Button[text()="Clear Predecessors"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Click Clear Predecessors
test('OBW-006', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//Button[text()="Edit Desc"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// //Get Tasks button - reloads task collection
// test('OBW-007', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
//     await page.waitForTimeout(1000);
//     await page.locator('(//Button[text()="Get Tasks"])[1]').click();
//     await page.waitForTimeout(1500);
//     expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Verify Gantt renders with all columns
test('OBW-008', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Test selection - Multiple selection mode
test('OBW-009', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(500);
    await page.keyboard.down('Control');
    await page.locator('(//td[text()="Project estimation"])[1]').click();
    await page.waitForTimeout(500);
    await page.keyboard.up('Control');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Test indent then outdent on same task
test('OBW-010', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Design sign-off"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('(//Button[text()="Indent Task"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('(//Button[text()="Outdent Task"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Test add task and verify it appears
test('OBW-011', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project estimation"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//Button[text()="Add below"])[1]').click();
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Estimation approval"])[2]').click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Test toolbar Add button
test('OBW-012', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(800);
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Test toolbar ExpandAll button
test('OBW-013', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//span[text()="Collapse all"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[text()="Expand all"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Keyboard: Arrow navigation between rows
test('OBW-014', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    // Focus a known cell
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    // Move selection down and up using arrows
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Keyboard: Arrow left and arrow right
test('OBW-015', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    // Select a parent row (Project estimation)
    await page.locator('(//td[text()="Project estimation"])[1]').click();
    await page.waitForTimeout(300);
    // Arrow left and arrow right
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(800);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(800);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Open edit dialog
test('OBW-016', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    // Select record
    await page.locator('(//td[text()="Perform soil test"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[text()="Edit"])[1]').click();
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

//Zoom in using tool bar
test('OBW-017', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click zoom in
    await page.locator('(//span[text()="Zoom in"])[1]').click();
    await page.waitForTimeout(900);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

//Zoom Out using tool bar
test('OBW-018', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click zoom Out
    await page.locator('(//span[text()="Zoom out"])[1]').click();
    await page.waitForTimeout(900);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

//Zoom to fit using tool bar
test('OBW-019', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click Zoom to fit
    await page.locator('(//span[text()="Zoom to fit"])[1]').click();
    await page.waitForTimeout(900);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

//Collpase all Zoom in using tool bar
test('OBW-020', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Collpase all 
    await page.locator('(//span[text()="Collapse all"])[1]').click();
    await page.waitForTimeout(500);
    //Click zoom in
    await page.locator('(//span[text()="Zoom in"])[1]').click();
    await page.waitForTimeout(900);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

//Zoom Out using tool bar
test('OBW-021', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Collpase all 
    await page.locator('(//span[text()="Collapse all"])[1]').click();
    await page.waitForTimeout(500);
    //Click zoom Out
    await page.locator('(//span[text()="Zoom out"])[1]').click();
    await page.waitForTimeout(900);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

//Zoom to fit using tool bar
test('OBW-022', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Collpase all 
    await page.locator('(//span[text()="Collapse all"])[1]').click();
    await page.waitForTimeout(500);
    //Click Zoom to fit
    await page.locator('(//span[text()="Zoom to fit"])[1]').click();
    await page.waitForTimeout(900);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

// Indent using tool bar
test('OBW-023', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Select record
    await page.locator('(//td[text()="Cost calculation"])[1]').click();
    await page.waitForTimeout(500);
    //Click Indent
    await page.locator('(//span[text()="Indent"])[1]').click();
    await page.waitForTimeout(900);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

// Outdent using tool bar
test('OBW-024', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Select record
    await page.locator('(//td[text()="Cost calculation"])[1]').click();
    await page.waitForTimeout(500);
    //Click Outdent
    await page.locator('(//span[text()="Outdent"])[1]').click();
    await page.waitForTimeout(900);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

// Outdent using tool bar
test('OBW-025', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Select record
    await page.locator('(//td[text()="Cost calculation"])[1]').click();
    await page.waitForTimeout(500);
    //Click Outdent
    await page.locator('(//span[text()="Outdent"])[1]').click();
    await page.waitForTimeout(900);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

// collpase  first record by arrow
test('OBW-026', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Select collpase
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(900);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

// Collpase and expand first record by arrow
test('OBW-027', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Select collpase
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    //Select Expand
    await page.locator('(//span[contains(@class,"e-treegridcollapse")])[1]').click();
    await page.waitForTimeout(900);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

// collpase all the record by arrow
test('OBW-028', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //collpase all records
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

// collpase all the record by arrow and click first taskbar
test('OBW-029', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //collpase all records
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-gantt-parent-taskbar")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

// collpase all and expand all the record by arrow
test('OBW-030', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //collpase all records
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridcollapse")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridcollapse")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridcollapse")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridcollapse")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-treegridcollapse")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

test('OBW-031', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Home');
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-032', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('End');
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-033', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('PageDown');
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-034', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('PageUp');
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-035', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Space');
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-036', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-037', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-038', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.down('Shift');
    await page.waitForTimeout(300);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    await page.keyboard.up('Shift');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// test('OBW-039', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
//     await page.waitForTimeout(1000);
//     await page.locator('(//td[text()="Project initiation"])[1]').click();
//     await page.waitForTimeout(300);
//     await page.keyboard.down('Control');
//     await page.keyboard.press('ArrowRight');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(700);
//     expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
// });

// test('OBW-040', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
//     await page.waitForTimeout(1000);
//     await page.locator('(//td[text()="Project initiation"])[1]').click();
//     await page.waitForTimeout(300);
//     await page.keyboard.down('Control');
//     await page.keyboard.press('ArrowLeft');
//     await page.keyboard.up('Control');
//     await page.waitForTimeout(700);
//     expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
// });

test('OBW-041', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.down('Control');
    await page.keyboard.press('Home');
    await page.keyboard.up('Control');
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-042', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.down('Control');
    await page.keyboard.press('End');
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-043', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Perform soil test"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-044', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Perform soil test"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-045', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Perform soil test"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Space');
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-046', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Perform soil test"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-047', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    for (let k = 0; k < 6; k++) { await page.keyboard.press('ArrowDown'); await page.waitForTimeout(80); }
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-048', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    for (let k = 0; k < 4; k++) { await page.keyboard.press('ArrowUp'); await page.waitForTimeout(80); }
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-049', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+ArrowUp');
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-050', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+ArrowUp');
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+ArrowDown');
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-051', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+Shift+ArrowUp');
    await page.waitForTimeout(800);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-052', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+Shift+ArrowUp');
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+Shift+ArrowDown');
    await page.waitForTimeout(700);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

test('OBW-053', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Open dialog
    await page.locator('(//td[text()="Project initiation"])[1]').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+Insert');
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// test('OBW-054', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
//     await page.waitForTimeout(1000);
//     //Open dialog
//     await page.locator('(//td[text()="Project initiation"])[1]').click();
//     await page.waitForTimeout(300);
//     await page.keyboard.press('Control+Insert');
//     await page.waitForTimeout(300);
//     //Enter
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
// });

// test('OBW-055', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
//     await page.waitForTimeout(1000);
//     //Open dialog
//     await page.locator('(//td[text()="Project initiation"])[1]').click();
//     await page.waitForTimeout(300);
//     await page.keyboard.press('Control+Delete');
//     await page.waitForTimeout(300);
//     //Enter
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(1500);
//     expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
// });

// Scroll to middle of Gantt 
test('OBW-056', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);

    // scroll vertically to middle of the gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) {
            const middle = Math.floor((content.scrollHeight - content.clientHeight) / 2);
            content.scrollTop = middle;
        }
    });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to middle of Gantt and select record
test('OBW-057', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);

    // scroll vertically to middle of the gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) {
            const middle = Math.floor((content.scrollHeight - content.clientHeight) / 2);
            content.scrollTop = middle;
        }
    });
    // // Try to select a middle task by visible text and use custom buttons
    await page.locator('(//td[text()="Ground floor slab"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to middle of Gantt and select record and click intent Task
test('OBW-058', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll vertically to middle of the gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) {
            const middle = Math.floor((content.scrollHeight - content.clientHeight) / 2);
            content.scrollTop = middle;
        }
    });
    // // Try to select a middle task by visible text and use custom buttons
    await page.locator('(//td[text()="Ground floor slab"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Indent Task"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to middle of Gantt and select record and click Outend Task
test('OBW-059', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll vertically to middle of the gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) {
            const middle = Math.floor((content.scrollHeight - content.clientHeight) / 2);
            content.scrollTop = middle;
        }
    });
    // // Try to select a middle task by visible text and use custom buttons
    await page.locator('(//td[text()="Ground floor slab"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Outdent Task"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to middle of Gantt and select record and click Add below
test('OBW-060', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll vertically to middle of the gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) {
            const middle = Math.floor((content.scrollHeight - content.clientHeight) / 2);
            content.scrollTop = middle;
        }
    });
    // // Try to select a middle task by visible text and use custom buttons
    await page.locator('(//td[text()="Ground floor slab"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Add below"])[1]').click().catch(() => { });
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to middle of Gantt and select record and click Edit Desc
test('OBW-061', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll vertically to middle of the gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) {
            const middle = Math.floor((content.scrollHeight - content.clientHeight) / 2);
            content.scrollTop = middle;
        }
    });
    // // Try to select a middle task by visible text and use custom buttons
    await page.locator('(//td[text()="Ground floor slab"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Edit Desc"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to middle of Gantt and select record and click Clear Predecessors
test('OBW-062', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll vertically to middle of the gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) {
            const middle = Math.floor((content.scrollHeight - content.clientHeight) / 2);
            content.scrollTop = middle;
        }
    });
    // // Try to select a middle task by visible text and use custom buttons
    await page.locator('(//td[text()="Ground floor slab"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Clear Predecessors"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to middle of Gantt and select record and click Indent in toolbar
test('OBW-063', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll vertically to middle of the gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) {
            const middle = Math.floor((content.scrollHeight - content.clientHeight) / 2);
            content.scrollTop = middle;
        }
    });
    // // Try to select a middle task by visible text and use custom buttons
    await page.locator('(//td[text()="Ground floor slab"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//span[text()="Indent"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to middle of Gantt and select record and click Indent in toolbar
test('OBW-064', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll vertically to middle of the gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) {
            const middle = Math.floor((content.scrollHeight - content.clientHeight) / 2);
            content.scrollTop = middle;
        }
    });
    // // Try to select a middle task by visible text and use custom buttons
    await page.locator('(//td[text()="Ground floor slab"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//span[text()="Outdent"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to middle of Gantt and select record and click Zoom in in toolbar
test('OBW-065', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll vertically to middle of the gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) {
            const middle = Math.floor((content.scrollHeight - content.clientHeight) / 2);
            content.scrollTop = middle;
        }
    });
    // // Try to select a middle task by visible text and use custom buttons
    await page.locator('(//td[text()="Ground floor slab"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//span[text()="Zoom in"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to middle of Gantt and select record and click Zoom out in toolbar
test('OBW-066', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll vertically to middle of the gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) {
            const middle = Math.floor((content.scrollHeight - content.clientHeight) / 2);
            content.scrollTop = middle;
        }
    });
    // // Try to select a middle task by visible text and use custom buttons
    await page.locator('(//td[text()="Ground floor slab"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//span[text()="Zoom out"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to middle of Gantt and select record and click Zoom tofit in toolbar
test('OBW-067', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll vertically to middle of the gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) {
            const middle = Math.floor((content.scrollHeight - content.clientHeight) / 2);
            content.scrollTop = middle;
        }
    });
    // // Try to select a middle task by visible text and use custom buttons
    await page.locator('(//td[text()="Ground floor slab"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//span[text()="Zoom to fit"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to middle of Gantt and select record and click Collapse all in toolbar
test('OBW-068', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll vertically to middle of the gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) {
            const middle = Math.floor((content.scrollHeight - content.clientHeight) / 2);
            content.scrollTop = middle;
        }
    });
    await page.locator('(//span[text()="Collapse all"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to middle of Gantt and select record and click Collapse expand all in toolbar
test('OBW-069', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll vertically to middle of the gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) {
            const middle = Math.floor((content.scrollHeight - content.clientHeight) / 2);
            content.scrollTop = middle;
        }
    });
    await page.locator('(//span[text()="Collapse all"])[1]').click().catch(() => { });
    await page.waitForTimeout(600);
    await page.locator('(//span[text()="Expand all"])[1]').click().catch(() => { });
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to bottom of Gantt
test('OBW-070', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll to bottom of gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) content.scrollTop = content.scrollHeight;
    });
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to bottom of Gantt select task
test('OBW-071', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll to bottom of gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) content.scrollTop = content.scrollHeight;
    });
    // Select a bottom tast
    await page.locator('(//td[text()="Project closeout & handover"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to bottom of Gantt select task and click intent Task
test('OBW-072', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll to bottom of gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) content.scrollTop = content.scrollHeight;
    });
    // Select a bottom tast
    await page.locator('(//td[text()="Project closeout & handover"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Indent Task"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to bottom of Gantt and select record and click Outend Task
test('OBW-073', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll to bottom of gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) content.scrollTop = content.scrollHeight;
    });
    // Select a bottom tast
    await page.locator('(//td[text()="Project closeout & handover"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Outdent Task"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to bottom of Gantt and select record and click Add below
test('OBW-074', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll to bottom of gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) content.scrollTop = content.scrollHeight;
    });
    // Select a bottom tast
    await page.locator('(//td[text()="Project closeout & handover"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(1200);
    await page.locator('(//button[text()="Add below"])[1]').click().catch(() => { });
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to bottom of Gantt and select record and click Edit Desc
test('OBW-075', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll to bottom of gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) content.scrollTop = content.scrollHeight;
    });
    // Select a bottom tast
    await page.locator('(//td[text()="Project closeout & handover"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Edit Desc"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to bottom of Gantt and select record and click Clear Predecessors
test('OBW-076', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll to bottom of gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) content.scrollTop = content.scrollHeight;
    });
    // Select a bottom tast
    await page.locator('(//td[text()="Project closeout & handover"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(600);
    await page.locator('(//button[text()="Clear Predecessors"])[1]').click().catch(() => { });
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to bottom of Gantt and select record and click Indent in toolbar
test('OBW-077', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll to bottom of gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) content.scrollTop = content.scrollHeight;
    });
    // Select a bottom tast
    await page.locator('(//td[text()="Project closeout & handover"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//span[text()="Indent"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to bottom of Gantt and select record and click Indent in toolbar
test('OBW-078', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll to bottom of gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) content.scrollTop = content.scrollHeight;
    });
    // Select a bottom tast
    await page.locator('(//td[text()="Project closeout & handover"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(600);
    await page.locator('(//span[text()="Outdent"])[1]').click().catch(() => { });
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to bottom of Gantt and select record and click Zoom in in toolbar
test('OBW-079', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll vertically to bottom of the gantt content
    // scroll to bottom of gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) content.scrollTop = content.scrollHeight;
    });
    // Select a bottom tast
    await page.locator('(//td[text()="Project closeout & handover"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//span[text()="Zoom in"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to bottom of Gantt and select record and click Zoom out in toolbar
test('OBW-080', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll to bottom of gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) content.scrollTop = content.scrollHeight;
    });
    // Select a bottom tast
    await page.locator('(//td[text()="Project closeout & handover"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(800);
    await page.locator('(//span[text()="Zoom out"])[1]').click().catch(() => { });
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to bottom of Gantt and select record and click Zoom tofit in toolbar
test('OBW-081', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll to bottom of gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) content.scrollTop = content.scrollHeight;
    });
    // Select a bottom tast
    await page.locator('(//td[text()="Project closeout & handover"])[1]').click({ force: true }).catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//span[text()="Zoom to fit"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to bottom of Gantt and select record and click Collapse all in toolbar
test('OBW-082', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll to bottom of gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) content.scrollTop = content.scrollHeight;
    });
    await page.locator('(//span[text()="Collapse all"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to bottom of Gantt and select record and click Collapse all and expand in toolbar
test('OBW-083', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // scroll to bottom of gantt content
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) content.scrollTop = content.scrollHeight;
    });
    await page.locator('(//span[text()="Collapse all"])[1]').click().catch(() => { });
    await page.waitForTimeout(500);
    await page.locator('(//span[text()="Expand all"])[1]').click().catch(() => { });
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

// Scroll to bottom then back to top of the Gantt page
test('OBW-084', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1200);
    // Scroll to bottom
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) content.scrollTop = content.scrollHeight;
    });
    await page.waitForTimeout(1500);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });

    // Scroll back to top
    await page.locator('#ScheduleBuilder').evaluate(() => {
        const content = document.querySelector('#ScheduleBuilder .e-content') || document.querySelector('#ScheduleBuilder .e-gantt-chart') || document.querySelector('#ScheduleBuilder .e-gridcontent');
        if (content) content.scrollTop = 0;
    });
    await page.waitForTimeout(1500);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Edit task Name in dialog and save button
test('OBW-085', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('#TaskName').fill("Update A New Task Name");
    await page.waitForTimeout(800);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
    await page.waitForTimeout(300);
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Edit task Name in dialog and save by enter
test('OBW-086', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('#TaskName').fill("Update A New Task Name");
    await page.waitForTimeout(800);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Edit StartDate in dialog and save button
test('OBW-087', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('#StartDate').fill("2024-04-12");
    await page.waitForTimeout(800);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
    await page.waitForTimeout(300);
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Edit StartDate in dialog and save by enter
test('OBW-088', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('#StartDate').fill("2024-04-12");
    await page.waitForTimeout(800);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Edit EndDate in dialog and save button
test('OBW-089', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('#EndDate').fill("2024-04-12");
    await page.waitForTimeout(800);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
    await page.waitForTimeout(300);
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Edit EndDate in dialog and save by enter
test('OBW-090', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('#EndDate').fill("2024-04-12");
    await page.waitForTimeout(800);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Edit Duration in dialog and save button
test('OBW-091', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('#Duration').fill("10 days");
    await page.waitForTimeout(800);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
    await page.waitForTimeout(300);
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Edit Duration in dialog and save by enter
test('OBW-092', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('#Duration').fill("10 days");
    await page.waitForTimeout(800);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Click start date icon  in dialog and save by enter
test('OBW-093', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class, "e-date-icon")])[1]').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
    await page.waitForTimeout(300);
    await page.getByTitle('Wednesday, April 10,').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Click start date icon  in dialog and save by enter
test('OBW-094', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class, "e-date-icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByTitle('Wednesday, April 10,').click();
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Click start date icon  in dialog and previous month
test('OBW-095', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class, "e-date-icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'previous month' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Click start date icon  in dialog and save by enter
test('OBW-096', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-date-icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'next month' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});


//Click End date icon  in dialog and save by enter
test('OBW-097', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class, "e-date-icon")])[2]').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
    await page.waitForTimeout(300);
    await page.getByTitle('Wednesday, April 10,').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Click End date icon  in dialog and save by enter
test('OBW-098', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class, "e-date-icon")])[2]').click();
    await page.waitForTimeout(300);
    await page.getByTitle('Wednesday, April 10,').click();
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Click End date icon  in dialog and previous month
test('OBW-099', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class, "e-date-icon")])[2]').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'previous month' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Click end date icon  in dialog and save by enter
test('OBW-100', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-date-icon")])[2]').click();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'next month' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Navigate to dependence
test('OBW-101', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Navigate to Notes
test('OBW-102', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(800);
    await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Navigate to dependence Click add 
test('OBW-103', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
    await page.waitForTimeout(500);
    //Add Dependency record
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[13]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Navigate to dependence Click add and save
test('OBW-104', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
    await page.waitForTimeout(500);
    //Add Dependency record
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[13]').click();
    await page.waitForTimeout(500);
    //Select record
    await page.locator('(//span[contains(@class,"e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '-Perform soil test' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Navigate to dependence Click add using key
test('OBW-105', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
    await page.waitForTimeout(500);
    //Add Dependency record
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[13]').click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Navigate to dependence Click add and save using key
test('OBW-106', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
    await page.waitForTimeout(500);
    //Add Dependency record
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[13]').click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '-Perform soil test' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Navigate to dependence Click add and save 
test('OBW-107', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
    await page.waitForTimeout(500);
    //Add Dependency record
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[13]').click();
    await page.waitForTimeout(500);
    //Select record
    await page.locator('(//span[contains(@class,"e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '-Perform soil test' }).click();
    await page.waitForTimeout(500);
    //Select Type Start-Start
    await page.locator('(//span[contains(@class,"e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Start-Start' }).click();
    await page.waitForTimeout(500);
    //Select offset 5days
    await page.locator('#Offset').fill('5 days')
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Navigate to dependence Click add and save 
test('OBW-108', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
    await page.waitForTimeout(500);
    //Add Dependency record
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[13]').click();
    await page.waitForTimeout(500);
    //Select record
    await page.locator('(//span[contains(@class,"e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '-Perform soil test' }).click();
    await page.waitForTimeout(500);
    //Select Type Finish-Finish
    await page.locator('(//span[contains(@class,"e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Finish-Finish' }).click();
    await page.waitForTimeout(500);
    //Select offset 5days
    await page.locator('#Offset').fill('5 days')
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Navigate to dependence Click add and save 
test('OBW-109', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
    await page.waitForTimeout(500);
    //Add Dependency record
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[13]').click();
    await page.waitForTimeout(500);
    //Select record
    await page.locator('(//span[contains(@class,"e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '-Perform soil test' }).click();
    await page.waitForTimeout(500);
    //Select Type Start-Finish
    await page.locator('(//span[contains(@class,"e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Start-Finish' }).click();
    await page.waitForTimeout(500);
    //Select offset 5days
    await page.locator('#Offset').fill('5 days')
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Navigate to Notes
test('OBW-110', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(800);
    await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
    //Added a notes in it
    await page.locator('#Notes_rte-editable').fill('Where there is a will, there is a way')
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Navigate to Notes
test('OBW-111', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(800);
    await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
    //Added a notes in it
    await page.locator('#Notes_rte-editable').fill('Where there is a will, there is a way')
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Navigate to dependence Click add and save 
test('OBW-112', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
    await page.waitForTimeout(500);
    //Add Dependency record
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[13]').click();
    await page.waitForTimeout(500);
    //Select record
    await page.locator('(//span[contains(@class,"e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '-Perform soil test' }).click();
    await page.waitForTimeout(500);
    //Select Type Start-Finish
    await page.locator('(//span[contains(@class,"e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Start-Finish' }).click();
    await page.waitForTimeout(500);
    //Select offset 5days
    await page.locator('#Offset').fill('5 days')
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
    //Added a notes in it
    await page.locator('#Notes_rte-editable').fill('Where there is a will, there is a way')
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});

//Navigate to dependence Click add and save 
test('OBW-113', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
    await page.waitForTimeout(1000);
    //Click add 
    await page.locator('(//span[text()="Add"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
    await page.waitForTimeout(500);
    //Add Dependency record
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[13]').click();
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
});


// // Dependency: Open edit dialog, add a predecessor via Dependency tab
// test('OBW-113', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
//     await page.waitForTimeout(1200);
//     // Select a task and open edit dialog
//     await page.locator('(//td[text()="Perform soil test"])[1]').click().catch(() => { });
//     await page.waitForTimeout(300);
//     await page.locator('(//span[text()="Edit"])[1]').click().catch(() => { });
//     await page.waitForTimeout(600);
//     // Navigate to dependency tab and add a predecessor
//     await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click().catch(() => { });
//     await page.waitForTimeout(400);
//     await page.locator("(//span[text()='Add'])[2]").click().catch(() => { });
//     await page.waitForTimeout(400);
//     await page.locator('(//span[contains(@class,"e-input")])[7]').click().catch(() => { });
//     await page.waitForTimeout(400);
//     // pick the first available predecessor option
//     await page.locator('(//li)[1]').first().click().catch(() => { });
//     await page.waitForTimeout(300);
//     await page.locator("(//button[text()='Save'])[1]").click().catch(() => { });
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
// });

// // Dependency: Open edit dialog, change dependency type to Finish-Finish
// test('OBW-104', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
//     await page.waitForTimeout(1200);
//     await page.locator('(//td[text()="Project estimation"])[1]').click().catch(() => { });
//     await page.waitForTimeout(300);
//     await page.locator('(//span[text()="Edit"])[1]').click().catch(() => { });
//     await page.waitForTimeout(600);
//     await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click().catch(() => { });
//     await page.waitForTimeout(400);
//     // double click the dependency row to edit its type then select Finish-Finish
//     await page.locator("(//td[contains(@class,'e-lastrowcell')])[1]").dblclick().catch(() => { });
//     await page.waitForTimeout(300);
//     await page.locator('(//span[contains(@class,"e-input")])[13]').click().catch(() => { });
//     await page.waitForTimeout(300);
//     await page.locator("(//li[text()='Finish-Finish'])[1]").click().catch(() => { });
//     await page.waitForTimeout(300);
//     await page.locator("(//button[text()='Save'])[1]").click().catch(() => { });
//     await page.waitForTimeout(900);
//     expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
// });

// // Dependency: Open edit dialog, change dependency type to Start-Start
// test('OBW-105', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
//     await page.waitForTimeout(1200);
//     await page.locator('(//td[text()="Design sign-off"])[1]').click().catch(() => { });
//     await page.waitForTimeout(300);
//     await page.locator('(//span[text()="Edit"])[1]').click().catch(() => { });
//     await page.waitForTimeout(600);
//     await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click().catch(() => { });
//     await page.waitForTimeout(400);
//     await page.locator("(//td[contains(@class,'e-lastrowcell')])[1]").dblclick().catch(() => { });
//     await page.waitForTimeout(300);
//     await page.locator('(//span[contains(@class,"e-input")])[13]').click().catch(() => { });
//     await page.waitForTimeout(300);
//     await page.locator("(//li[text()='Start-Start'])[1]").click().catch(() => { });
//     await page.waitForTimeout(300);
//     await page.locator("(//button[text()='Save'])[1]").click().catch(() => { });
//     await page.waitForTimeout(900);
//     expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
// });

// // Dependency: Open edit dialog, remove a predecessor using Dependency tab
// test('OBW-106', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
//     await page.waitForTimeout(1200);
//     await page.locator('(//td[text()="Project initiation"])[1]').click().catch(() => { });
//     await page.waitForTimeout(300);
//     await page.locator('(//span[text()="Edit"])[1]').click().catch(() => { });
//     await page.waitForTimeout(600);
//     await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click().catch(() => { });
//     await page.waitForTimeout(400);
//     // Try to remove the first predecessor entry
//     await page.locator("(//td[contains(@class,'e-lastrowcell')])[1]").click().catch(() => { });
//     await page.waitForTimeout(200);
//     await page.locator("(//span[text()='Delete'])[2]").click().catch(() => { });
//     await page.waitForTimeout(600);
//     await page.locator("(//button[text()='Save'])[1]").click().catch(() => { });
//     await page.waitForTimeout(900);
//     expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
// });

// // Notes: Open edit dialog, navigate to Notes tab and add text
// test('OBW-107', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
//     await page.waitForTimeout(1200);
//     await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').dblclick().catch(() => { });
//     await page.waitForTimeout(600);
//     // Navigate to Notes tab
//     await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click().catch(() => { });
//     await page.waitForTimeout(400);
//     // Click into notes editor and type
//     await page.locator("(//div[contains(@class,'e-content')])[6]").click().catch(() => { });
//     await page.waitForTimeout(200);
//     await page.keyboard.type('Automated note: OBW-092');
//     await page.waitForTimeout(300);
//     await page.locator("(//button[text()='Save'])[1]").click().catch(() => { });
//     await page.waitForTimeout(900);
//     expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
// });

// // Notes: Open edit dialog, navigate to Notes tab, format text (bold) and save
// test('OBW-108', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/ObservableCollection_Weak');
//     await page.waitForTimeout(1200);
//     await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[2]').dblclick().catch(() => { });
//     await page.waitForTimeout(600);
//     await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click().catch(() => { });
//     await page.waitForTimeout(400);
//     await page.locator("(//div[contains(@class,'e-content')])[6]").click().catch(() => { });
//     await page.waitForTimeout(200);
//     await page.keyboard.type('Bold note OBW-093');
//     await page.waitForTimeout(200);
//     // Click bold button if available in notes toolbar
//     await page.locator("(//button[contains(@class,'e-toolbar-btn') and .//span[contains(@class,'e-icon-bold')]])").first().click().catch(() => { });
//     await page.waitForTimeout(300);
//     await page.locator("(//button[text()='Save'])[1]").click().catch(() => { });
//     await page.waitForTimeout(900);
//     expect.soft(await page.locator('#ScheduleBuilder').screenshot()).toMatchSnapshot({ maxDiffPixels: 150 });
// });

