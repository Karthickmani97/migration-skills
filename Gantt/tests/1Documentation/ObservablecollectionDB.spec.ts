import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

// Add Data button
test('ObservableCollection-001', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator('#add').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Delete Data button
test('ObservableCollection-002 ', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator('#del').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Add three records
test('ObservableCollection-003 ', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator('#add').click();
    await page.waitForTimeout(300);
    await page.locator('#add').click();
    await page.waitForTimeout(300);
    await page.locator('#add').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Toolbar Add to open Dialog
test('ObservableCollection-004', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Toolbar Delete
test('ObservableCollection-005 ', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator('(//td[text()="Perform soil test"])[1]').click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'delete')])[1]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Add Delete
test('ObservableCollection-006', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator('#add').click();
    await page.waitForTimeout(400);
    await page.locator('#del').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Add then check status message
test('ObservableCollection-007', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator('#add').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Delete parent removes children
test('ObservableCollection-008 ', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    // Delete first (parent) record and expect children removed visually
    await page.locator('#del').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Delete then check status message
test('ObservableCollection-009 ', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator('#del').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Add using toolbar then edit via grid click
test('ObservableCollection-010', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(800);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    // Click newly added row (approximate locator)
    await page.locator("(//td[contains(@class,'rowcell')])[last()]").click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Multiple Toolbar Adds
test('ObservableCollection-011', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(300);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(700);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Click Add and ensure gantt visible
test('ObservableCollection-012', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator('#add').click();
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').isVisible()).toBeTruthy();
});

//Add then open edit dialog
test('ObservableCollection-013', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator('#add').click();
    await page.waitForTimeout(600);
    // attempt to open edit by double-clicking last taskbar
    await page.locator("(//div[contains(@class,'gantt-child')])[last()]").dblclick();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Delete unit no records
test('ObservableCollection-014', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    // Keep deleting until page stabilizes
    for (let i = 0; i < 2; i++) {
        await page.locator('#del').click();
        await page.waitForTimeout(1000);
    }
    await page.waitForTimeout(1200);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Add then Validate TaskName text appears
test('ObservableCollection-015', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator('#add').click();
    await page.waitForTimeout(800);
    // take a screenshot including tree grid to validate task name presence visually
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Toolbar Add then Delete quickly
test('ObservableCollection-016', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("#add").click();
    await page.waitForTimeout(200);
    await page.locator("(//td[text()='New Task 9'])[1]").click();
    await page.waitForTimeout(200);
    await page.locator("(//span[contains(@class,'delete')])[1]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Add then Delete using keyboard actions
test('ObservableCollection-017', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator('#add').click();
    await page.waitForTimeout(300);
    // Focus first row and press Delete
    await page.locator("(//td[contains(@class,'rowcell')])[1]").click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Delete');
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Add many then collapse/expand
test('ObservableCollection-018', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    for (let i = 0; i < 4; i++) { await page.locator('#add').click(); await page.waitForTimeout(200); }
    // Click collapse all if present
    await page.locator("(//span[contains(@class,'e-treegridexpand')])[2]").click().catch(() => { });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-treegridcollapse')])[1]").click().catch(() => { });
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Add then remove child directly
test('ObservableCollection-019', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    // Add a new record (will be a top-level task)
    await page.locator('#add').click();
    await page.waitForTimeout(500);
    // Attempt to remove a child (if any) via delete toolbar
    await page.locator("(//span[contains(@class,'delete')])[1]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Verify toolbar presence
test('ObservableCollection-020', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    const toolbar = await page.locator('.e-toolbar').first();
    expect(await toolbar.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Add then from edit
test('ObservableCollection-021', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator('#add').click();
    await page.waitForTimeout(600);
    // try to open edit dialog and dependency tab
    await page.locator("(//div[contains(@class,'e-gantt-child')])[last()]").dblclick().catch(() => { });
    await page.waitForTimeout(700);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Repeated add/delete stability
test('ObservableCollection-022', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    for (let i = 0; i < 6; i++) {
        await page.locator('#add').click();
        await page.waitForTimeout(800);
        await page.locator('#del').click();
        await page.waitForTimeout(800);
    }
    await page.waitForTimeout(1200);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Final visual sanity
test('ObservableCollection-023', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Insert key adds new record
test('ObservableCollection-024', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//td[contains(@class,'rowcell')])[1]").click();
    await page.keyboard.press('Insert');
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Arrow navigation and Enter to open edit
test('ObservableCollection-025', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    // Navigate down two rows and press Enter
    await page.locator("(//td[contains(@class,'rowcell')])[1]").click();
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Home/End navigation
test('ObservableCollection-026', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    // Focus grid then press End and Home
    await page.locator("(//td[contains(@class,'rowcell')])[1]").click();
    await page.keyboard.press('End');
    await page.waitForTimeout(300);
    await page.keyboard.press('Home');
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Tab to toolbar and activate Add via Enter
test('ObservableCollection-027', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    // Press Tab repeatedly to focus toolbar then press Enter
    for (let i = 0; i < 6; i++) { await page.keyboard.press('Tab'); await page.waitForTimeout(150); }
    await page.keyboard.press('Enter');
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Toolbar Add and Save
test('ObservableCollection-028', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Delete key remove record
test('ObservableCollection-029', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);

    await page.locator("(//td[contains(@class,'rowcell')])[1]").click();
    await page.keyboard.press('Delete');
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Add task  Modified the task name
test('ObservableCollection-030 ', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#TaskName').fill('New Task Modified');
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Add task  Modified the StartDate
test('ObservableCollection-031', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').fill('12/5/2022');
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Add task  Modified the EndDate
test('ObservableCollection-032', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#EndDate').fill('12/5/2022');
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Add task  Modified the Duration 
test('ObservableCollection-033', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#Duration').fill('10');
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Add task  Modified the Progress 
test('ObservableCollection-034', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#Progress').fill('80');
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Add task and save by modified 
test('ObservableCollection-035', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#TaskName').fill('New Task Modified');
    await page.waitForTimeout(500);
    await page.locator('#StartDate').fill('12/5/2022');
    await page.waitForTimeout(500);
    await page.locator('#EndDate').fill('12/5/2022');
    await page.waitForTimeout(500);
    await page.locator('#Duration').fill('10');
    await page.waitForTimeout(500);
    await page.locator('#Progress').fill('80');
    await page.waitForTimeout(800);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Add task by modified and Cancel 
test('ObservableCollection-036', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#TaskName').fill('New Task Modified');
    await page.waitForTimeout(500);
    await page.locator('#StartDate').fill('12/5/2022');
    await page.waitForTimeout(500);
    await page.locator('#EndDate').fill('12/5/2022');
    await page.waitForTimeout(500);
    await page.locator('#Duration').fill('10');
    await page.waitForTimeout(500);
    await page.locator('#Progress').fill('80');
    await page.waitForTimeout(800);
    await page.locator("(//button[text()='Cancel'])[1]").click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// Progress SpinUp 2
test('ObservableCollection-037 ', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#Progress').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-spin-up')])[2]").click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-spin-up')])[2]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Progress Spindown 0
test('ObservableCollection-038', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#Progress').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-spin-down')])[2]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Click dateicon in start date
test('ObservableCollection-039', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-date-icon')])[1]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// Click dateicon in End date
test('ObservableCollection-040', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-date-icon')])[2]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// Click dateicon in Change start date
test('ObservableCollection-041', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-date-icon')])[1]").click();
    await page.waitForTimeout(500);
    await page.getByTitle('Wednesday, April 6,').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// Change previous month start date
test('ObservableCollection-042', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-date-icon')])[1]").click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'previous month' }).click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// Change next month start date
test('ObservableCollection-045', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-date-icon')])[1]").click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'next month' }).click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Click dateicon in Change End date
test('ObservableCollection-046', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-date-icon')])[2]").click();
    await page.waitForTimeout(500);
    await page.getByTitle('Wednesday, April 6,').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// Change previous month End date
test('ObservableCollection-047', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-date-icon')])[2]").click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'previous month' }).click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Change next month End date
test('ObservableCollection-048', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-date-icon')])[2]").click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'next month' }).click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Click dateicon change StartDate & save
test('ObservableCollection-049', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-date-icon')])[1]").click();
    await page.waitForTimeout(500);
    await page.getByTitle('Wednesday, April 6,').click();
    await page.waitForTimeout(800);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Change previous month start date & Save
test('ObservableCollection-050', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-date-icon')])[1]").click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'previous month' }).click();
    await page.waitForTimeout(800);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Change next month start date & Save
test('ObservableCollection-051', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-date-icon')])[1]").click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'next month' }).click();
    await page.waitForTimeout(800);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Click dateicon in Change End date & Save
test('ObservableCollection-052', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-date-icon')])[2]").click();
    await page.waitForTimeout(500);
    await page.getByTitle('Wednesday, April 6,').click();
    await page.waitForTimeout(800);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Change previous month End date & Save
test('ObservableCollection-053', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-date-icon')])[2]").click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'previous month' }).click()
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Change next month End date & Save
test('ObservableCollection-054', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(800);
    await page.locator('#StartDate').click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-date-icon')])[2]").click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'next month' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// Escape to add new record
test('ObservableCollection-055', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//td[contains(@class,'rowcell')])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Insert');
    await page.waitForTimeout(500);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//close to add new record
test('ObservableCollection-056', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-icon-dlg-close')])").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//cancel to add new record
test('ObservableCollection-057', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//button[contains(@class,'e-flat e-flat')])").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Delete then check status message 1
test('ObservableCollection-058', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator('#del').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Delete then check status message 2
test('ObservableCollection-059', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator('#del').click();
    await page.waitForTimeout(500);
    await page.locator('#del').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//collpase 1st record
test('ObservableCollection-060', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-treegridexpand')])[1]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//collpase 2nd record
test('ObservableCollection-061', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-treegridexpand')])[2]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//collpase both records
test('ObservableCollection-062', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-treegridexpand')])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-treegridexpand')])[1]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// collpase both records & Expand
test('ObservableCollection-063', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-treegridexpand')])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-treegridexpand')])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-treegridcollapse')])[1]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//collpase Expand & add Task
test('ObservableCollection-064', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-treegridexpand')])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-treegridexpand')])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-treegridcollapse')])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//collpase 1st taskbar
test('ObservableCollection-065 ', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// collpase 2nd taskbar
test('ObservableCollection-066', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[2]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//collpase both taskbar
test('ObservableCollection-067', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[2]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// collpase both taskbar & Expand
test('ObservableCollection-068', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[2]").click();
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//collpase Expand & add Task
test('ObservableCollection-069', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[2]").click();
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// collpase 1st record AddData
// test('ObservableCollection-070', async ({ page }) => {
//     await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
//     await page.waitForTimeout(500);
//     await page.locator("(//span[contains(@class,'e-treegridexpand')])[1]").click();
//     await page.waitForTimeout(500);
//     await page.locator('#add').click();
//     await page.waitForTimeout(800);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
// });

// collpase 2nd record
// test('ObservableCollection-071', async ({ page }) => {
//     await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
//     await page.waitForTimeout(500);
//     await page.locator("(//span[contains(@class,'e-treegridexpand')])[2]").click();
//     await page.waitForTimeout(500);
//     await page.locator('#add').click();  
//     await page.waitForTimeout(800);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
// });

// collpase both records
// test('ObservableCollection-072', async ({ page }) => {
//     await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
//     await page.waitForTimeout(500);
//     await page.locator("(//span[contains(@class,'e-treegridexpand')])[1]").click();
//     await page.waitForTimeout(500);
//     await page.locator("(//span[contains(@class,'e-treegridexpand')])[2]").click();
//     await page.waitForTimeout(500);
//     await page.locator('#add').click();  
//     await page.waitForTimeout(800);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
// });

//collpase both records & Expand
// test('ObservableCollection-073', async ({ page }) => {
//     await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
//     await page.waitForTimeout(500);
//     await page.locator("(//span[contains(@class,'e-treegridexpand')])[1]").click();
//     await page.waitForTimeout(500);
//     await page.locator("(//span[contains(@class,'e-treegridexpand')])[2]").click();
//     await page.waitForTimeout(500);
//     await page.locator("(//span[contains(@class,'e-treegridcollapse')])[1]").click();
//     await page.waitForTimeout(800);
//     await page.locator('#add').click();  
//     await page.waitForTimeout(500);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
// });

//collpase 1st record
test('ObservableCollection-074', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-treegridexpand')])[1]").click();
    await page.waitForTimeout(500);
    await page.locator('#del').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// collpase 2nd record
test('ObservableCollection-075', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-treegridexpand')])[2]").click();
    await page.waitForTimeout(500);
    await page.locator('#del').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// collpase both records
test('ObservableCollection-076', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-treegridexpand')])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-treegridexpand')])[1]").click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//collpase both records & Expand
// test('ObservableCollection-077', async ({ page }) => {
//     await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
//     await page.waitForTimeout(500);
//     await page.locator("(//span[contains(@class,'e-treegridexpand')])[1]").click();
//     await page.waitForTimeout(500);
//     await page.locator("(//span[contains(@class,'e-treegridexpand')])[2]").click();
//     await page.waitForTimeout(500);
//     await page.locator("(//span[contains(@class,'e-treegridcollapse')])[1]").click();
//     await page.waitForTimeout(800);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
// });

// collpase Expand & add Task
// test('ObservableCollection-078', async ({ page }) => {
//     await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
//     await page.waitForTimeout(500);
//     await page.locator("(//span[contains(@class,'e-treegridexpand')])[1]").click();
//     await page.waitForTimeout(500);
//     await page.locator("(//span[contains(@class,'e-treegridexpand')])[2]").click();
//     await page.waitForTimeout(500);
//     await page.locator("(//span[contains(@class,'e-treegridcollapse')])[1]").click();
//     await page.waitForTimeout(500);
//     await page.locator("(//span[text()='Add'])[1]").click();
//     await page.waitForTimeout(500);
//     await page.locator("(//button[text()='Save'])[1]").click();
//     await page.waitForTimeout(800);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
// });

//Add 2 records by using insert Key
test('ObservableCollection-079', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//td[contains(@class,'e-rowcell  e-leftalign')])[2]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Insert');
    await page.waitForTimeout(500);
    await page.keyboard.press('Insert');
    await page.waitForTimeout(1200);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//Add 2 records by using Delete Key
test('ObservableCollection-080', async ({ page }) => {
    await page.goto("http://localhost:5004/E2EMigration/ObservableCollection");
    await page.waitForTimeout(500);
    await page.locator("(//td[contains(@class,'e-rowcell  e-leftalign')])[2]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Delete');
    await page.waitForTimeout(500);
    await page.keyboard.press('Delete');
    await page.waitForTimeout(1200);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});