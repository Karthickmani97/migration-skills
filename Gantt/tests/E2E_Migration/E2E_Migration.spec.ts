import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
        ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
});

const baseUrl = 'http://localhost:5004';

test('1-Add Edit Dialog', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/AddEditDialog');
    // Navigating to the AddEditDialog page
    await page.waitForTimeout(1500);
    //Screenshot validation-The Gantt chart should be shown
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('2-Add Dialog Open', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/AddEditDialog');
    await page.waitForTimeout(500);
    // Clicking the add button
    await page.locator("#AddEditDialog_add").click();
    await page.waitForTimeout(200);
    await page.locator('#TaskName').click();
    await page.waitForTimeout(1000);
    // Only General and Dependency tab should be shown
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Taking a screenshot of the Gantt chart
    await page.waitForTimeout(500);
    // Open Dependency tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(1500);
    // Taking a screenshot of the Gantt chart
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Clicking the Cancel button
    await page.locator('//*[@id="AddEditDialog_dialog"]/div[4]/button[2]').click();
    await page.waitForTimeout(1000);
    // Screenshot validation-The record is cancelled and the Gantt chart should be shown
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Add new task name', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/AddEditDialog');
    await page.waitForTimeout(500);
    // Clicking the add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    // Clicking the TaskName input field Typing 'Added Task' in the TaskName input field
    await page.locator("(//input[contains(@class,'control')])[2]").fill('Added Task');
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])[1]").click();
    // Clicking the Save button
    await page.waitForTimeout(1000);
    //Screenshot validation-New task is added
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('4-Edit Dialog', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/AddEditDialog');
    await page.waitForTimeout(500);
    // Clicking the chart content body
    await page.locator("(//td[contains(@class,'chart-row-cell')])[2]").click();
    await page.waitForTimeout(300);
    // Clicking the edit button
    await page.locator("#AddEditDialog_edit").click();
    await page.waitForTimeout(300);
    await page.locator('#TaskName').click();
    await page.waitForTimeout(800);
    // Taking a screenshot of the Gantt chart
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Clicking the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Edit button dilog is opened and when click save the records on grid and chart side are same.
    expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Add record in self-data', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selfdata');
    await page.waitForTimeout(500);
    // Clicking the add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    // Clicking the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Test case for adding a record in self-data
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    //clicking the add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    // Clicking the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Two records are added in self-data
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('6-Cancelling taskname in dependency dialog tab', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selfdata');
    await page.waitForTimeout(500);
    // Clicking the grid control content table
    await page.locator("(//td[contains(@class,'rowcell')])[18]").click();
    await page.waitForTimeout(200);
    // Clicking the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    // Clicking the Dependency tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(500);
    // Clicking the add button in the dependency tab
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    // Clicking the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation-Taskname is not added in dependency dialog tab
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('7-initializing Baseline', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Baseline');
    // Navigating to the Baseline page
    await page.waitForTimeout(500);
    // Screenshot validation-The Gantt chart should be shown for baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('8-Baseline Parent BaselineStartDate Update', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Baseline');
    // Navigating to the Baseline page
    await page.waitForTimeout(500);
    // Locator for double-clicking the cell
    await page.locator("(//td[contains(@class,'rowcell')])[5]").dblclick();
    await page.waitForTimeout(500);
    // BaselineStartDate input
    await page.locator("(//input[contains(@class,'control')])[1]").fill('4/3/2019');
    await page.waitForTimeout(300);
    // Click the  update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(300);
    //Click the grid content table
    await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
    await page.waitForTimeout(500);
    // Screenshot validation-The BaselineStartDate is updated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('9-Baseline Parent BaselineEndDate Update', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Baseline');
    // Navigating to the Baseline page
    await page.waitForTimeout(500);
    // Locator for double-clicking the cell
    await page.locator("(//td[contains(@class,'rowcell')])[6]").dblclick();
    await page.waitForTimeout(300);
    // Filling the BaselineEndDate input
    await page.locator("(//input[contains(@class,'control')])[1]").fill('4/7/2019');
    await page.waitForTimeout(200);
    // Click the  update button
    await page.locator("(//span[contains(@class,'e-update')])[1]").click();
    await page.waitForTimeout(300);
    //Click the grid content table
    await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
    await page.waitForTimeout(500);
    // Screenshot validation-The BaselineEndDate is updated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('10-Baseline Parent BaselineStartDate Cancel', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Baseline');
    // Navigating to the Baseline page
    await page.waitForTimeout(500);
    // Locator for double-clicking the cell
    await page.locator("(//td[contains(@class,'rowcell')])[5]").dblclick();
    await page.waitForTimeout(300);
    // Filling the BaselineStartDate input
    await page.locator("(//input[contains(@class,'control')])[1]").fill('4/2/2019');
    await page.waitForTimeout(300);
    // Locator for cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(300);
    // Locator for clicking the cell
    await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
    await page.waitForTimeout(500);
    // Screenshot validation-Cancel is not updated and the record is same
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('11-Baseline Parent BaselineEndDate Cancel', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Baseline');
    await page.waitForTimeout(500);
    // Locator for double-clicking the cell
    await page.locator("(//td[contains(@class,'rowcell')])[6]").dblclick();
    await page.waitForTimeout(300);
    // Locator for BaselineEndDate input
    await page.locator("(//input[contains(@class,'control')])[1]").fill('4/2/2019');
    await page.waitForTimeout(300);
    // Locator for cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(300);
    // Locator for clicking the cell
    await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
    await page.waitForTimeout(500);
    // Screenshot validation-Cancel is not updated and the record is same
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('12-Baseline Child BaselineStartDate Update', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Baseline');
    await page.waitForTimeout(500);
    // Locator for double-clicking the cell
    await page.locator("(//td[contains(@class,'rowcell')])[17]").dblclick();
    await page.waitForTimeout(300);
    // Locator for BaselineStartDate input
    await page.locator("(//input[contains(@class,'control')])[1]").fill('4/4/2019');
    // Filling the BaselineStartDate input
    await page.waitForTimeout(200);
    // Locator for update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(300);
    // Locator for clicking the cell
    await page.locator("(//td[contains(@class,'rowcell')])[14]").click();
    await page.waitForTimeout(500);
    // Screenshot validation-The BaselineStartDate is updated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('13-Baseline Child BaselineEndDate Update', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Baseline');
    await page.waitForTimeout(500);
    // Locator for double-clicking the cell
    await page.locator("(//td[contains(@class,'rowcell')])[18]").dblclick();
    await page.waitForTimeout(300);
    // Locator for BaselineEndDate input
    await page.locator("(//input[contains(@class,'control')])[1]").fill('4/6/2019');
    await page.waitForTimeout(300);
    // Locator for update button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(300);
    // Locator for clicking the cell
    await page.locator("(//td[contains(@class,'rowcell')])[14]").click();
    await page.waitForTimeout(500);
    // Screenshot validation-The BaselineEndDate is updated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('14-Baseline Child BaselineStartDate Cancel', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Baseline');
    await page.waitForTimeout(500);
    // Locator for double-clicking the cell
    await page.locator("(//td[contains(@class,'rowcell')])[17]").dblclick();
    await page.waitForTimeout(300);
    // Locator for BaselineStartDate input
    await page.locator("(//input[contains(@class,'control')])[1]").fill('4/4/2019');
    await page.waitForTimeout(200);
    // Locator for cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation-Cancel is not updated and the record is same
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('15-Baseline Child BaselineEndDate Cancel', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Baseline');
    await page.waitForTimeout(500);
    // Locator for double-clicking the cell
    await page.locator("(//td[contains(@class,'rowcell')])[18]").dblclick();
    await page.waitForTimeout(300);
    // Locator for BaselineEndDate input
    await page.locator("//*[@id='DataItem___BaselineEndDate']").fill('4/4/2019');
    await page.waitForTimeout(200);
    // Locator for cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//td[contains(@class,'rowcell')])[14]").click();
    // Locator for clicking the cell
    await page.waitForTimeout(500);
    // Screenshot validation-cancel is not updated and the record is same
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('16-Height and width with 100%', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/heightwidth');
    await page.waitForTimeout(500);
    // Locator for the element with class 'e-gantt'
    const ganttElement = page.locator('.e-gantt');
    // Screenshot validation-Height and width with 100% is indicated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('17-Initial_Render_Checkbox', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Checkbox');
    await page.waitForTimeout(500);
    //Screenshot validation-Initial render checkbox is indicated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('18-CheckBox Selection', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Checkbox');
    await page.waitForTimeout(500);
    // Locator for clicking the checkbox cell
    await page.locator("(//td[contains(@class,'rowcell')])[12]").click();
    await page.waitForTimeout(200);
    // Locator for double-clicking the checkbox cell
    await page.locator("(//td[contains(@class,'rowcell')])[12]").dblclick();
    await page.waitForTimeout(300);
    // Press SPACE key to select the checkbox
    await page.keyboard.press('Space');
    await page.waitForTimeout(500);
    //Screenshot validation-CheckBox Selection is indicated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('19-Adding_A_new_row', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Checkbox');
    await page.waitForTimeout(500);
    // Locator for clicking the add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    // Locator for clicking the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screeshot validation-Adding a new row is indicated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('20-Deleting_A_new_row', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Checkbox');
    await page.waitForTimeout(500);
    // Locator for clicking the row to delete
    await page.locator("(//td[contains(@class,'rowcell')])[12]").click();
    await page.waitForTimeout(200);
    // Locator for clicking the delete button
    await page.locator("(//span[contains(@class,'delete')])[1]").click();
    await page.waitForTimeout(500);
    // Locator for clicking the OK button in the confirmation dialog
    await page.locator("(//button[text()='OK'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-Deleting a new row is indicated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('21-CheckBox DeSelection', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Checkbox');
    await page.waitForTimeout(500);
    // Locator for clicking the checkbox cell
    await page.locator("(//td[contains(@class,'rowcell')])[18]").click();
    await page.waitForTimeout(200);
    // Locator for double-clicking the checkbox cell
    await page.locator("(//td[contains(@class,'rowcell')])[18]").dblclick();
    await page.waitForTimeout(300);
    // Press SPACE key to deselect the checkbox
    await page.keyboard.press('Space');
    await page.waitForTimeout(500);
    //Screenshot validation-CheckBox DeSelection is indicated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('22-initializing columnmenu', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/columnmenu');
    await page.waitForTimeout(500);
    //Screenshot validation-Initializing columnmenu is indicated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('23-Autofit all columns', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/columnmenu');
    await page.waitForTimeout(500);
    // Locator for clicking the column menu
    await page.locator("(//div[contains(@class,'columnmenu')])[1]").click();
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    // Press ENTER key
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Locator for clicking a cell
    await page.locator("(//td[contains(@class,'rowcell')])[9]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-Autofit all columns is indicated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('24-Autofit this column', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/columnmenu');
    await page.waitForTimeout(500);
    // Locator for clicking the column menu
    await page.locator("(//div[contains(@class,'columnmenu')])[1]").click();
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key twice
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    // Press ENTER key
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Locator for clicking a cell
    await page.locator("(//td[contains(@class,'rowcell')])[9]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-Autofit this column is indicated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('25-Sort Ascending', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/columnmenu');
    await page.waitForTimeout(500);
    // Locator for clicking the column menu
    await page.locator("(//div[contains(@class,'columnmenu')])[1]").click();
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key three times
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    // Press ENTER key
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Locator for clicking a cell
    await page.locator("(//th[contains(@class,'headercell')])[3]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-Sort Ascending is indicated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('26-Sort Descending', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/columnmenu');
    await page.waitForTimeout(500);
    // Locator for clicking the column menu
    await page.locator("(//div[contains(@class,'columnmenu')])[1]").click();
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key four times
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    // Press ENTER key
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Locator for clicking a cell
    await page.locator("(//td[contains(@class,'rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-Sort Descending is indicated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('27-ColumnIndex Initial Load', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnIndex');
    await page.waitForTimeout(500);
    // Screenshot validation - Initial Load
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('28-Toggle Task View Button', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnIndex');
    await page.waitForTimeout(500);
    // Locator for clicking the Toggle Task View button
    await page.locator("(//button[text()='ToggleTaskView'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Toggle Task View Button
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('29-Setting Column Index To 0 using Button', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnIndex');
    await page.waitForTimeout(500);
    // Locator for clicking the Set Index To 0 button
    await page.locator('#SetIndexTo0').click();
    await page.waitForTimeout(500);
    // Screenshot validation - Setting Column Index To 0
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('30-Setting column index to 1 using button', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnIndex');
    await page.waitForTimeout(500);
    // Locator for clicking the Set Index To 1 button
    await page.locator("(//button[text()='SetIndexTo0'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Setting Column Index To 1
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('31-Setting column index to 2 using button', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnIndex');
    await page.waitForTimeout(500);
    // Locator for clicking the Set Index To 2 button
    await page.locator("(//button[text()='SetIndexTo2'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Setting Column Index To 2
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('32-Setting column index to 3 using button', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnIndex');
    await page.waitForTimeout(500);
    // Locator for clicking the Set Index To 3 button
    await page.locator("(//button[text()='SetIndexTo3'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Setting Column Index To 3
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('33-Setting column index to 4 using button', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnIndex');
    await page.waitForTimeout(500);
    // Locator for clicking the Set Index To 4 button
    await page.locator("(//button[text()='SetIndexTo4'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Setting Column Index To 4
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('34-Toggle Gantt View Button', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnIndex');
    await page.waitForTimeout(500);
    // Locator for clicking the Toggle Gantt View button
    await page.locator("(//button[text()='ToggleGanttView'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Toggle Gantt View Button
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('35-initializing CustomColumn', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/TaskbarTemplate');
    await page.waitForTimeout(500);
    // Screenshot validation - Initializing CustomColumn
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('36-Selection CustomColumn', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/TaskbarTemplate');
    await page.waitForTimeout(500);
    // Locator for resizing the split bar
    await page.locator("(//div[contains(@class,'e-resizable-split-bar')])[1]").click();
    await page.mouse.down
    await page.mouse.move(20, 80);
    await page.waitForTimeout(1000);
    // Locator for clicking a cell
    await page.locator("(//td[contains(@class,'rowcell')])[11]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Selection CustomColumn
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('37-CustomColumn CellEdit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/TaskbarTemplate');
    await page.waitForTimeout(500);
    // Locator for double-clicking a cell
    await page.locator("(//td[contains(@class,'rowcell')])[3]").dblclick();
    await page.waitForTimeout(300);
    // Locator for editing the custom field
    await page.locator("(//input[contains(@class,'control')])[1]").fill('New Custom Name');
    await page.waitForTimeout(300);
    // Locator for clicking the update button
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[5]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - CustomColumn CellEdit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('38-CustomColumn DialogEdit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/TaskbarTemplate');
    await page.waitForTimeout(500);
    // Locator for double-clicking a cell in the chart content
    await page.locator("(//div[contains(@class,'e-gantt-child')])[1]").dblclick();
    await page.waitForTimeout(300);
    // Locator for clicking the Custom Columns tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(200);
    // Locator for editing the custom field
    await page.locator("(//input[contains(@class,'control')])[7]").fill('New Custom Name 1');
    await page.waitForTimeout(200);
    // Locator for clicking the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - CustomColumn DialogEdit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('39-CustomColumn Dialog Edit Custom value', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/customcolumn');
    await page.waitForTimeout(500);
    // Locator for double-clicking a cell in the chart content
    await page.locator("(//div[contains(@class,'e-gantt-child')])[1]").dblclick();
    await page.waitForTimeout(300);
    // Locator for clicking the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(300);
    // Locator for clicking a cell
    await page.locator("(//td[contains(@class,'rowcell')])[20]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - CustomColumn Dialog Edit Custom value
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('40-CustomColumn Add dialog fields', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/CustomAddDialog');
    await page.waitForTimeout(500);
    // Locator for clicking the add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    // Locator for clicking the Custom Columns tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(800);
    // Screenshot validation - CustomColumn Add dialog fields
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Locator for editing the status field
    await page.locator("(//input[contains(@class,'control')])[8]").fill('Progress');
    await page.waitForTimeout(200);
    // Locator for editing the project ID field
    await page.locator("(//input[contains(@class,'control')])[9]").fill('12');
    await page.waitForTimeout(200);
    // Locator for clicking the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Editing custom columns values
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Editing custom column using key navigation', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomAddDialog');
    await page.waitForTimeout(500);
    // Locator for resizing the split bar
    await page.locator("(//div[contains(@class,'e-resizable-split-bar')])[1]").click();
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1073, 257);
    await page.waitForTimeout(500);
    await page.mouse.move(984, 257);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    // Locator for double-clicking a cell
    await page.locator("(//div[contains(@class,'milestone')])[1]").dblclick();
    await page.waitForTimeout(1000);
    // Locator for clicking the Custom Columns tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
    await page.waitForTimeout(800);
    // Press TAB key twice
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    // Locator for editing the workers count field
    await page.locator("//*[@id='WorkersCount']").fill('4');
    await page.waitForTimeout(500);
    // Press TAB key three times and ENTER key
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Editing custom column using key navigation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('42-Parent Notes tab navigation when clicking notes icon', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/customcolumn');
    await page.waitForTimeout(500);
    // Locator for double-clicking the notes icon
    await page.locator("(//td[contains(@class,'rowcell')])[9]").dblclick();
    await page.waitForTimeout(300);
    // Screenshot validation - Parent Notes tab navigation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Press TAB key twice and type 'Parent record'
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.type('Parent record');
    await page.waitForTimeout(200);
    // Press TAB key and ENTER key
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Editing notes information through key navigation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('43-Child Notes tab navigation when clicking notes icon', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/customcolumn');
    await page.waitForTimeout(500);
    // Locator for double-clicking the notes icon
    await page.locator("(//td[contains(@class,'rowcell')])[16]").dblclick();
    await page.waitForTimeout(300);
    // Screenshot validation - Child Notes tab navigation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Press TAB key twice and type 'Child record'
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.waitForTimeout(600);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.type('Child record');
    await page.waitForTimeout(600);
    // Press TAB key and ENTER key
    await page.keyboard.press('Tab');
    await page.waitForTimeout(600);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Editing child notes through key navigation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('44-Dynamic Column Width', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnIndex');
    await page.waitForTimeout(500);
    // Locator for clicking the Width button
    await page.locator("(//button[text()='Chage Width'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Dynamic Column Width
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('45-Dynamic Column Add', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/columnmenu');
    await page.waitForTimeout(500);
    // Locator for clicking the Add Columns button
    await page.locator("(//button[text()='Add Columns'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Dynamic Column Add
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('46-Header template Load', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/HeaderTemplate');
    await page.waitForTimeout(500);
    // Screenshot validation - Header template Load
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('47-initializing contextmenu', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    // Screenshot validation - Initializing contextmenu
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(600);
    // Locator for right-clicking a task
    await page.locator("(//div[contains(@class,'gantt-child')])[2]").click();
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'gantt-child')])[2]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Locator for clicking Task Information
    await page.locator("#GanttContextmenu_cmenu_TaskInformation").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Opening task information
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('48-Deleting selected task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'gantt-child')])[2]").click();
    await page.waitForTimeout(500);
    // Locator for right-clicking a task
    await page.locator("(//div[contains(@class,'gantt-child')])[2]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Locator for clicking Delete Task
    await page.locator("(//li[text()='Delete Task'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Deleting selected task
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('49-Adding a task above', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    // Locator for right-clicking a task
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key five times and ARROW_RIGHT key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(600);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Adding a task above
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('50-Adding a task below', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    // Locator for right-clicking a task
    await page.locator("(//div[contains(@class,'gantt-child')])[2]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key five times, ARROW_RIGHT key, and ARROW_DOWN key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Adding a task below
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('51-Adding a child', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    // Locator for right-clicking a task
    await page.locator("(//div[contains(@class,'gantt-child')])[4]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key four times, ARROW_RIGHT key, and ARROW_DOWN key twice
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    await page.locator("(//td[text()='List materials'])[1]").click();
    await page.waitForTimeout(200);
    // Screenshot validation - Adding a child
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('52-Adding a milestone', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    // Locator for right-clicking a task
    await page.locator("(//div[contains(@class,'gantt-child')])[2]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key five times, ARROW_RIGHT key, and ARROW_DOWN key three times
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    await page.locator("(//td[text()='List materials'])[1]").click();
    await page.waitForTimeout(200);
    // Screenshot validation - Adding a milestone
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('53-Converting task to milestone', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    // Locator for right-clicking a task
    await page.locator("(//div[contains(@class,'gantt-child')])[7]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key three times, ARROW_RIGHT key, and ENTER key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Converting task to milestone
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('54-Converting milestone to task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    // Locator for right-clicking a milestone
    await page.locator("(//div[contains(@class,'milestone')])[2]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key three times, ARROW_RIGHT key, and ENTER key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Converting milestone to task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('55-delete parent task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    //
    await page.locator("(//div[contains(@class,'gantt-parent')])[1]").click();
    await page.waitForTimeout(500);
    // Locator for right-clicking a parent task
    await page.locator("(//div[contains(@class,'gantt-parent')])[1]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Locator for clicking Delete Task
    await page.locator("(//li[text()='Delete Task'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Deleting parent task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('56-sort ascending', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    await page.locator("(//th[contains(@class,'e-headercell')])[1]").click();
    await page.waitForTimeout(200);
    // Locator for right-clicking a column header
    await page.locator("(//th[contains(@class,'e-headercell')])[1]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Locator for clicking Sort Ascending
    await page.locator("(//li[text()='Sort Ascending'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Sort ascending
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('57-sort descending', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    // Locator for right-clicking a column header
    await page.locator("(//th[contains(@class,'e-headercell')])[1]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Locator for clicking Sort Descending
    await page.locator("(//li[text()='Sort Descending'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Sort descending
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('58-Autofit this column', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    // Locator for right-clicking a column header
    await page.locator("(//th[contains(@class,'e-headercell')])[1]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Locator for clicking Autofit
    await page.locator("(//li[text()='AutoFit Column'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Autofit this column
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('59-Autofit all columns', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    // Locator for right-clicking a column header
    await page.locator("(//th[contains(@class,'e-headercell')])[1]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Locator for clicking Autofit All
    await page.locator("(//li[text()='AutoFit All Columns'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Autofit all columns
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('60-Delete Dependency', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'gantt-child')])[2]").click();
    await page.waitForTimeout(500);
    // Locator for right-clicking a task
    await page.locator("(//div[contains(@class,'gantt-child')])[2]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Locator for clicking Delete Dependency
    await page.locator("(//li[text()='Delete Dependency'])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='2 - Identify Site location'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Delete Dependency
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('61-Delete Dependency after add actions', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    // Locator for right-clicking a task
    await page.locator("(//div[contains(@class,'gantt-parent')])[1]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key three times, ARROW_RIGHT key, and ENTER key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Locator for right-clicking another task
    await page.locator("(//div[contains(@class,'milestone')])[1]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key three times, ARROW_RIGHT key, and ENTER key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Delete Dependency after add actions
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('62-Context menu Open using Connector lines', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    // Locator for right-clicking a connector line
    await page.locator("(//div[contains(@class,'milestone')])[2]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Screenshot validation - Context menu Open using Connector lines
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('63-Task Outdent Context menu', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Selfdata');
    await page.waitForTimeout(500);
    // Locator for right-clicking a task
    await page.locator("(//div[contains(@class,'gantt-child')])[3]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key three times and ENTER key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Task Outdent Context menu
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('64-Task Indent Context menu', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Selfdata');
    await page.waitForTimeout(500);
    // Locator for right-clicking a task
    await page.locator("(//div[contains(@class,'gantt-child')])[3]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key three times and ENTER key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Task Indent Context menu
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('65-Right click after taskbar left resizing', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    // Left resize taskbar
    await page.locator("(//div[contains(@class,'gantt-child')])[3]").click();
    await page.mouse.down
    await page.mouse.move(50, 0);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(500);
    // Right-click the taskbar
    await page.locator("(//div[contains(@class,'gantt-child')])[3]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Screenshot validation - Taskbar left resizing
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('66-Right click after taskbar right resizing', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    // Right resize taskbar
    await page.locator("(//div[contains(@class,'gantt-child')])[3]").click();
    await page.waitForTimeout(500);
    await page.mouse.down
    await page.mouse.move(-20, 0);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(500);
    // Right-click the taskbar
    await page.locator("(//div[contains(@class,'gantt-child')])[3]").click({ button: 'right' });
    await page.waitForTimeout(500);
    // Screenshot validation - Taskbar right resizing
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('67-Delete Dependency using context menu', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'gantt-child')])[3]").click();
    await page.waitForTimeout(500);
    // Right-click a task
    await page.locator("(//div[contains(@class,'gantt-child')])[3]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click Delete Dependency
    await page.locator("(//li[text()='Delete Dependency'])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='2 - Identify Site location'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Delete Dependency using mouse
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('68-Delete Dependency using key navigation', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    // Right-click a task
    await page.locator("(//div[contains(@class,'gantt-child')])[3]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key three times and ENTER key twice
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Delete Dependency using key
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('69-Delete Dependency after converting milestone to task', async ({ page }) => {
    // test.setTimeout(30000);
    await page.goto(baseUrl + '/E2EMigration/selfdata');
    await page.waitForTimeout(500);
    // Right-click a milestone
    await page.locator("(//div[contains(@class,'milestone')])[1]").click({ button: 'right' });
    await page.waitForTimeout(300);
    await page.locator("#GanttSelfdata_cmenu_Convert").click();
    await page.waitForTimeout(400);
    await page.locator("#GanttSelfdata_cmenu_ToTask").click();
    await page.waitForTimeout(200);
    await page.locator("(//div[contains(@class,'child-taskbar')])[4]").click({ button: 'right' });
    await page.waitForTimeout(400);
    await page.locator("#GanttSelfdata_cmenu_DeleteDependency").click();
    await page.waitForTimeout(200);
    await page.locator("#GanttSelfdata_cmenu_Dependency0").click();
    await page.waitForTimeout(400);
    // Screenshot validation - Dependency cell value
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('70-Context menu open after update cell', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/virtual');
    await page.waitForTimeout(1000);
    // Double-click a cell to edit
    await page.locator("(//td[contains(@class,'rowcell')])[16]").dblclick();
    await page.waitForTimeout(1000);
    // Edit the cell
    await page.locator("(//input[contains(@class,'control')])[2]").fill('Edited');
    await page.waitForTimeout(300);
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(300);
    // Right-click the cell
    await page.locator("(//td[contains(@class,'rowcell')])[16]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    // Screenshot validation - Context menu after cell-edit
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(600);
    // Double-click a cell to edit
    await page.locator("(//td[contains(@class,'rowcell')])[23]").dblclick();
    await page.waitForTimeout(1000);
    // Edit the cell
    await page.locator("(//input[contains(@class,'control')])[2]").fill('Edited');
    await page.waitForTimeout(300);
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(300);
    // Right-click the cell
    await page.locator("(//td[contains(@class,'rowcell')])[23]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    // Screenshot validation - Context menu open after cancel cell
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('71-Context menu when editing is set as false', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Disable editing
    await page.locator("(//button[text()='Editing False'])[1]").click();
    await page.waitForTimeout(500);
    // Right-click a task
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Screenshot validation - Context menu when editing is set as false
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('72-Context menu open on grid side after cancelling delete toolbar', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selfdata');
    await page.waitForTimeout(500);
    // Click a cell to select
    await page.locator("(//td[contains(@class,'rowcell')])[26]").click();
    // Click delete button
    await page.locator("(//span[contains(@class,'delete')])[1]").click();
    await page.waitForTimeout(500);
    // Click cancel button in delete confirmation dialog
    await page.locator("(//button[text()='OK'])[1]").click();
    await page.waitForTimeout(500);
    // Right-click the cell
    await page.locator("(//td[contains(@class,'rowcell')])[26]").click({ button: 'right' });
    await page.waitForTimeout(500);
    // Screenshot validation - Context menu open on grid side
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Right-click a milestone
    await page.locator("(//div[contains(@class,'milestone')])[1]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Screenshot validation - Context menu open on chart side
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('73-Convert milestone to taskbar and taskbar tooltip', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selfdata');
    await page.waitForTimeout(500);
    // Right-click a milestone
    await page.locator("(//td[contains(@class,'rowcell')])[26]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    // Press ARROW_DOWN key five times, ARROW_RIGHT key, and ENTER key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Drag the taskbar
    await page.locator("(//div[contains(@class,'milestone')])[1]").click();
    await page.mouse.down
    await page.waitForTimeout(500);
    // Screenshot validation - Convert milestone to taskbar and taskbar tooltip
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('74-Convert taskbar to milestone and taskbar tooltip', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selfdata');
    await page.waitForTimeout(500);
    // Right-click a taskbar
    await page.locator("(//td[contains(@class,'rowcell')])[26]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    // Press ARROW_DOWN key five times, ARROW_RIGHT key, and ENTER key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Drag the milestone
    await page.locator("(//div[contains(@class,'gantt-child')])[7]").hover();
    await page.mouse.down
    await page.waitForTimeout(1000);
    // Screenshot validation - Convert taskbar to milestone and taskbar tooltip
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('75-Context Menu Custom Load', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Customcontext');
    await page.waitForTimeout(500);
    // Screenshot validation - Context Menu Custom Load
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('76-Context Menu Custom Load Menu Click', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Customcontext');
    await page.waitForTimeout(500);
    // Click a cell to select
    await page.locator("(//td[contains(@class,'rowcell')])[14]").click();
    await page.waitForTimeout(200);
    //select record
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").click();
    await page.waitForTimeout(500);
    // Right-click a task
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click Zoom Out
    await page.locator("(//li[text()='ZoomOut'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Context Menu Custom Load Menu Click
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('77-Context Menu Custom Load Menu Click in Tree Grid side', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Customcontext');
    await page.waitForTimeout(500);
    // Right-click a cell in Tree Grid side
    await page.locator("(//td[contains(@class,'rowcell')])[32]").click({ button: 'right' });
    await page.waitForTimeout(1000);
    // Click Zoom Out
    await page.locator("(//li[text()='ZoomOut'])[1]").click();
    await page.waitForTimeout(600);
    // Screenshot validation - Context Menu Custom Load Menu Click in Tree Grid side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('78-perform add action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Click the add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - perform add action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('79-Change critical path to normal task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Click the critical path button
    await page.locator("(//span[text()='Critical Path'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Change critical path to normal task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('80-changing child start date using edit action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Click on the child task start date cell
    await page.locator("(//td[contains(@class,'rowcell')])[10]").click();
    await page.waitForTimeout(200);
    // Click the edit button
    await page.locator("(//span[contains(@class,'edit')])[1]").click();
    await page.waitForTimeout(1000);
    // Change the start date
    await page.locator("(//input[contains(@class,'control')])[3]").fill("4/5/2021");
    await page.waitForTimeout(200);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - changing child start date using edit action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('81-changing child end date using edit action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Click on the child task end date cell
    await page.locator("(//td[contains(@class,'rowcell')])[23]").click();
    await page.waitForTimeout(200);
    // Click the edit button
    await page.locator("(//span[contains(@class,'edit')])[1]").click();
    await page.waitForTimeout(1000);
    // Change the end date
    await page.locator("(//input[contains(@class,'control')])[4]").fill("4/13/2021");
    await page.waitForTimeout(200);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - changing child end date using edit action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('82-changing parent start date using edit action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Click on the parent task start date cell
    await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
    await page.waitForTimeout(200);
    // Click the edit button
    await page.locator("(//span[contains(@class,'edit')])[1]").click();
    await page.waitForTimeout(1000);
    // Change the start date
    await page.locator("(//input[contains(@class,'control')])[3]").fill("4/5/2021");
    await page.waitForTimeout(200);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - changing parent start date using edit action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('83-Changing Startdate Using Cell Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Double-click on the start date cell
    await page.locator("(//td[contains(@class,'rowcell')])[52]").dblclick();
    await page.waitForTimeout(300);
    // Change the start date
    await page.locator("(//input[contains(@class,'control')])[1]").fill("4/12/2021");
    await page.waitForTimeout(200);
    // Click the update button
    await page.locator("(//span[contains(@class,'update')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Changing Startdate Using Cell Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('84-Changing EndDate Using Cell Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Double-click on the end date cell
    await page.locator("(//td[contains(@class,'rowcell')])[11]").dblclick();
    await page.waitForTimeout(300);
    // Change the end date
    await page.locator("(//input[contains(@class,'control')])[1]").fill("4/9/2021");
    await page.waitForTimeout(200);
    // Press Enter to save
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Changing EndDate Using Cell Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('85-Remove dependency for critical taskbar using cell edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Double-click on the predecessor cell
    await page.locator("(//td[contains(@class,'rowcell')])[28]").dblclick();
    await page.waitForTimeout(300);
    // Clear the predecessor value
    await page.locator("#DataItem___Predecessor").fill("");
    await page.waitForTimeout(200);
    // Press Enter to save
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Remove dependency for critical taskbar using cell edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('86-Remove dependency for critical taskbar using dialog edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Double-click on the taskbar
    await page.locator("(//div[contains(@class,'gantt-child')])[5]").dblclick();
    await page.waitForTimeout(800);
    // Click on the dependency tab
    await page.locator("(//div[@class='e-tab-text'])[2]").click();
    await page.waitForTimeout(600);
    // Click on the dependency cell
    await page.locator("(//td[text()='2-Defining the product usage'])[1]").click();
    await page.waitForTimeout(300);
    // Click the delete button
    await page.locator("(//span[contains(@class,'delete')])[2]").click();
    await page.waitForTimeout(500);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Remove dependency for critical taskbar using dialog edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('87-Changing Startdate Using Cell Edit of Parent Tasks', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Double-click on the parent task start date cell
    await page.locator("(//td[contains(@class,'rowcell')])[3]").dblclick();
    await page.waitForTimeout(300);
    // Change the start date
    await page.locator("#DataItem___StartDate").fill("3/28/2021");
    await page.waitForTimeout(200);
    // Click the update button
    await page.locator("(//span[contains(@class,'update')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Changing Startdate Using Cell Edit of Parent Tasks
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('88-Changing multi parent start date Using Cell Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Double-click on the multi parent task start date cell
    await page.locator("(//td[contains(@class,'rowcell')])[45]").dblclick();
    await page.waitForTimeout(300);
    // Change the start date
    await page.locator("#DataItem___StartDate").fill("4/12/2021");
    await page.waitForTimeout(300);
    // Click the update button
    await page.locator("(//span[contains(@class,'update')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Changing multi parent start date Using Cell Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('89-Insert Add Action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Click on the cell to insert a new task
    await page.locator("(//td[contains(@class,'rowcell')])[16]").click();
    await page.waitForTimeout(200);
    // Press the Insert key
    await page.keyboard.press('Insert');
    await page.waitForTimeout(500);
    // Screenshot validation - Insert Add Action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('90-Delete Parent record', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Click on the parent task cell
    await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
    await page.waitForTimeout(200);
    // Press the Delete key
    await page.keyboard.press('Delete');
    await page.waitForTimeout(500);
    // Confirm the delete action
    await page.locator("(//button[text()='OK'])[1]").click();
    await page.waitForTimeout(500);
    // Click on the first cell to refresh the view
    await page.locator("(//td[contains(@class,'rowcell')])[1]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Delete Parent record
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('91-Indent critical taskbar', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Click on the critical taskbar cell
    await page.locator("(//td[contains(@class,'rowcell')])[23]").click();
    await page.waitForTimeout(300);
    // Click the indent button
    await page.locator("(//span[contains(@class,'indent')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Indent critical taskbar
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click on the critical taskbar cell again
    await page.locator("(//td[contains(@class,'rowcell')])[23]").click();
    await page.waitForTimeout(300);
    // Click the outdent button
    await page.locator("(//span[contains(@class,'outdent')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Outdent critical taskbar
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('93-Dragging parent task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Drag the parent task
    await page.locator("(//div[contains(@class,'gantt-parent')])[1]").click();
    await page.mouse.click(100, 0);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(500);
    // Click on the parent task cell to refresh the view
    await page.locator("//*[@id='treeGridGantt_gridcontrol_content_table']/tbody/tr[1]/td[2]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Dragging parent task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('94-Dragging child task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Drag the child task
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").click();
    await page.mouse.click(100, 0);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(500);
    // Click on the child task cell to refresh the view
    await page.locator("//*[@id='treeGridGantt_gridcontrol_content_table']/tbody/tr[4]/td[2]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Dragging child task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('95-rightside-taskbar editing', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Click on the right side of the taskbar
    await page.locator("//*[@id='Gantt_chartContentBody']/tr[4]/td/div[2]/div[2]").click();
    await page.mouse.down();
    await page.waitForTimeout(500);
    // Move the mouse to the right
    await page.mouse.move(50, 0);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(500);
    // Click on the taskbar cell to refresh the view
    await page.locator("//*[@id='treeGridGantt_gridcontrol_content_table']/tbody/tr[4]/td[2]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - rightside-taskbar editing
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('96-leftside-taskbar editing', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CriticalPath');
    await page.waitForTimeout(500);
    // Click on the left side of the taskbar
    await page.locator("//*[@id='Gantt_chartContentBody']/tr[4]/td/div[2]/div[2]").click();
    await page.mouse.down();
    await page.waitForTimeout(500);
    // Move the mouse to the left
    await page.mouse.move(-50, 0);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(500);
    // Click on the taskbar cell to refresh the view
    await page.locator("//*[@id='treeGridGantt_gridcontrol_content_table']/tbody/tr[4]/td[2]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - leftside-taskbar editing
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('97-Load GanttCustom Adaptor', async ({ page }) => {
    await page.goto(baseUrl + '/CustomAdaptor');
    await page.waitForTimeout(500);
    // Screenshot validation - Load GanttCustom Adaptor
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click the add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    // Fill the task name input
    await page.locator("#TaskName").fill("New record");
    await page.waitForTimeout(300);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - perform add action
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Double-click the newly added record
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").dblclick();
    await page.waitForTimeout(1000);
    // Click the resource input
    await page.locator("(//div[@role='presentation'])[3]").click();
    await page.waitForTimeout(800);
    // Press Tab to navigate
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    // Press ArrowDown and Space to select resource
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Space');
    await page.waitForTimeout(500);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Editing resources for newly added record
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('98-Delete record', async ({ page }) => {
    await page.goto(baseUrl + '/CustomAdaptor');
    await page.waitForTimeout(500);
    // Click the record to delete
    await page.locator("(//td[contains(@class,'rowcell')])[14]").click();
    await page.waitForTimeout(200);
    // Click the delete button
    await page.locator("(//span[contains(@class,'delete')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Delete record
    expect(await page.locator('#CustomAdaptor_Gantt_Toolbar').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// test('99-Filtering resources column', async ({ page }) => {
//     await test.step('99-Filtering resources column', async () => {
//         await page.goto(baseUrl + '/CustomAdaptor');
//         await page.waitForTimeout(1000);
//         // Click the filter icon on the resources column
//         await page.locator("(//div[contains(@class,'filtermenudiv')])[3]").click();
//         await page.waitForTimeout(300);
//         // Press Tab to navigate
//         await page.keyboard.press('Tab');
//         await page.waitForTimeout(700);
//         // Press ArrowDown to select filter option
//         await page.keyboard.press('ArrowDown');
//         await page.waitForTimeout(700);
//         // Press Tab to navigate
//         await page.keyboard.press('Tab');
//         await page.waitForTimeout(700);
//         // Press Enter to apply filter
//         await page.keyboard.press('Enter');
//         await page.waitForTimeout(1500);
//         // Screenshot validation - Filtering resources column
//         expect(await page.locator('#CustomAdaptor_Gantt_Toolbar').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
//     });

//     await test.step('100-Clear Filtering', async () => {
//         await page.waitForTimeout(500);
//         // Click the filter icon on the resources column
//         await page.locator("(//div[contains(@class,'e-filtermenudiv e-icons e-icon-filter ')])[3]").click();
//         await page.waitForTimeout(300);
//         // Press Tab to navigate
//         await page.keyboard.press('Tab');
//         await page.keyboard.press('Tab');
//         await page.waitForTimeout(700);
//         await page.keyboard.press('Tab');
//         // Press Enter to clear filter
//         await page.waitForTimeout(700);
//         await page.keyboard.press('Enter');
//         await page.waitForTimeout(1500);
//         // Screenshot validation - Clear Filtering
//         expect(await page.locator('#CustomAdaptor_Gantt_Toolbar').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
//     });
// });

// test('101-Sorting Task ID Ascending', async ({ page }) => {
//     await page.goto(baseUrl + '/CustomAdaptor');
//     await page.waitForTimeout(1000);
//     // Click the Task ID column header to sort ascending
//     await page.locator("(//th[contains(@class,'headercell')])[1]").click();
//     await page.waitForTimeout(500);
//     // Screenshot validation - Sorting Task ID Ascending
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
//     await page.waitForTimeout(600);
//     // Click the Task ID column header to sort descending
//     await page.locator("(//th[contains(@class,'headercell')])[1]").click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation - Sorting Task ID descending
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
// });

// test('102-Sorting resources column Ascending', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(baseUrl + '/CustomAdaptor');
//     await page.waitForTimeout(1000);
//     // Click the resources column header to sort ascending
//     await page.locator("(//th[contains(@class,'headercell')])[3]").click();
//     await page.waitForTimeout(500);
//     // Screenshot validation - Sorting resources column Ascending
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
//     await page.waitForTimeout(600);
//     // Click the resources column header to sort descending
//     await page.locator("(//th[contains(@class,'headercell')])[3]").click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation - Sorting resources column descending
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
// });

// test('103-Collapse all records and expanding parent record', async ({ page }) => {
//     await page.goto(baseUrl + '/CustomAdaptor');
//     await page.waitForTimeout(1000);
//     // Click the collapse all button
//     await page.locator("(//span[contains(@class,'collapseall')])[1]").click();
//     await page.waitForTimeout(500);
//     // Click the expand icon of the parent record
//     await page.locator("(//span[contains(@class,'expandall')])[1]").click();
//     await page.waitForTimeout(1000);
//     // Screenshot validation - Collapse all records and expanding parent records
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
// });

// test('104-Delete and Insert record through keyboard', async ({ page }) => {
//     await page.goto(baseUrl + '/CustomAdaptor');
//     await page.waitForTimeout(1000);
//     // Click the record to delete
//     await page.locator("(//div[contains(@class,'gantt-child')])[3]").click();
//     await page.waitForTimeout(500);
//     // Press Delete key to delete the record
//     await page.keyboard.press('Delete');
//     await page.waitForTimeout(700);
//     // Click the cell to insert a new record
//     await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
//     await page.waitForTimeout(500);
//     // Press Insert key to insert a new record
//     await page.keyboard.press('Insert');
//     await page.waitForTimeout(1000);
//     //validation
//     const Insertrec = page.locator('//*[@id="treeGridCustomAdaptor_gridcontrol_content_table"]/tbody/tr[1]/td[3]');
//     await expect(Insertrec).toHaveText('New Task 33');
//     // // Screenshot validation - Delete and Insert record through keyboard
//     // expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
// });

test('105-Taskbar tooltip', async ({ page }) => {
    await page.goto(baseUrl + '/CustomAdaptor');
    await page.waitForTimeout(500);
    // Click and hold the taskbar to show tooltip
    await page.mouse.down
    await page.locator("(//div[contains(@class,'gantt-child')])[2]").click();
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation - Taskbar tooltip
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('106-Resizing resource column', async ({ page }) => {
    await page.goto(baseUrl + '/CustomAdaptor');
    await page.waitForTimeout(500);
    // Click and hold the resize handle of the resources column
    await page.locator("(//div[contains(@class,'e-rhandler e-rcursor')])[3]").click();
    await page.mouse.down();
    // Move the mouse to resize the column
    await page.mouse.move(70, 10);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation - Resizing resource column
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('107-Context menu task information', async ({ page }) => {
    await page.goto(baseUrl + '/CustomAdaptor');
    await page.waitForTimeout(1000);
    // Right-click the taskbar to open context menu
    const record1 = await page.locator("(//div[contains(@class,'gantt-child')])[3]");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click the Task Information option
    await page.locator("(//li[text()='Task Information'])[1]").click();
    await page.waitForTimeout(800);
    // Screenshot validation - Context menu task information
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('108-Context menu delete record', async ({ page }) => {
    await page.goto(baseUrl + '/CustomAdaptor');
    await page.waitForTimeout(500);
    // Right-click the taskbar to open context menu
    const record1 = await page.locator("(//div[contains(@class,'gantt-child')])[3]");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click the Delete Task option
    await page.locator("(//li[text()='Delete Task'])[1]").click();
    await page.waitForTimeout(500);
    // Right-click the treegrid cell to open context menu
    const record2 = await page.locator("(//td[contains(@class,'rowcell')])[32]");
    await record2.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click the Delete Task option
    await page.locator("(//li[text()='Delete Task'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Context menu delete record
    //expect(await page.locator('#CustomAdaptor_Gantt_Toolbar').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('109-Context menu Add above', async ({ page }) => {
    await page.goto(baseUrl + '/CustomAdaptor');
    await page.waitForTimeout(500);
    // Right-click the taskbar to open context menu
    const record1 = await page.locator("(//div[contains(@class,'gantt-parent')])[1]");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Press ArrowDown to navigate
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    // Press ArrowRight to expand submenu
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);
    // Press Enter to select Add Above option
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Click the cell to refresh view
    await page.locator("(//td[contains(@class,'rowcell')])[8]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Context menu Add above
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
// test('110-Context menu Add below', async ({ page }) => {
//     await test.step('110-Context menu Add below', async () => {
//         await page.goto(baseUrl + '/CustomAdaptor');
//         await page.waitForTimeout(1000);
//         // Right-click the treegrid cell to open context menu
//         const record1 = await page.locator("(//td[contains(@class,'rowcell')])[2]");
//         await record1.click({ button: 'right' });
//         await page.waitForTimeout(1000);
//         // Press ArrowDown to navigate
//         await page.keyboard.press('ArrowDown');
//         await page.keyboard.press('ArrowDown');
//         await page.keyboard.press('ArrowDown');
//         await page.waitForTimeout(1000);
//         // Press ArrowRight to expand submenu
//         await page.keyboard.press('ArrowRight');
//         await page.waitForTimeout(500);
//         // Press ArrowDown to select Add Below option
//         await page.keyboard.press('ArrowDown');
//         await page.waitForTimeout(500);
//         // Press Enter to select Add Below option
//         await page.keyboard.press('Enter');
//         await page.waitForTimeout(1000);
//         // Screenshot validation - Context menu Add below
//         expect(await page.locator('#CustomAdaptor_Gantt_Toolbar').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
//     });

//     await test.step('111-Editing child task name', async () => {
//         await page.goto(baseUrl + '/CustomAdaptor');
//         await page.waitForTimeout(1000);
//         // Double-click the child task name cell to edit
//         await page.locator("(//td[contains(@class,'rowcell')])[14]").dblclick();
//         await page.waitForTimeout(800);
//         // Fill the task name input
//         await page.locator("(//input[contains(@class,'control')])[2]").fill("Edited");
//         await page.waitForTimeout(200);
//         // Click the update button
//         await page.locator("(//span[contains(@class,'update')])[1]").click();
//         await page.waitForTimeout(500);
//         // Click the cell to refresh view
//         await page.locator("(//td[contains(@class,'rowcell')])[14]").click();
//         await page.waitForTimeout(1000);
//         // Screenshot validation - Editing child task name
//         expect(await page.locator('#CustomAdaptor_Gantt_Toolbar').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
//     });

//     await test.step('112-Changing Startdate Using Cell Edit', async () => {
//         await page.waitForTimeout(1000);
//         // Double-click the start date cell to edit
//         await page.locator("(//td[contains(@class,'rowcell')])[34]").dblclick();
//         await page.waitForTimeout(1000);
//         // Press Control+A to select all text
//         await page.keyboard.press('Control+A');
//         await page.waitForTimeout(300);
//         // Press Backspace to clear the input
//         await page.keyboard.press('Backspace');
//         await page.waitForTimeout(200);
//         // Fill the start date input
//         await page.locator("(//input[contains(@class,'control')])[2]").fill("6/10/2022");
//         await page.waitForTimeout(200);
//         // Click the update button
//         await page.locator("(//span[contains(@class,'update')])[1]").click();
//         await page.waitForTimeout(500);
//         // Click the cell to refresh view
//         await page.locator("(//td[contains(@class,'rowcell')])[32]").click();
//         await page.waitForTimeout(1000);
//         // Screenshot validation - Changing Startdate Using Cell Edit
//         expect(await page.locator('#CustomAdaptor_Gantt_Toolbar').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
//     });

//     await test.step('113-Changing EndDate Using Cell Edit', async () => {
//         await page.waitForTimeout(600);
//         // Double-click the end date cell to edit
//         await page.locator("(//td[contains(@class,'rowcell')])[65]").dblclick();
//         await page.waitForTimeout(800);
//         // Press Control+A to select all text
//         await page.keyboard.press('Control+A');
//         await page.waitForTimeout(300);
//         // Press Backspace to clear the input
//         await page.keyboard.press('Backspace');
//         await page.waitForTimeout(200);
//         // Fill the end date input
//         await page.locator("(//input[contains(@class,'control')])[2]").fill("6/15/2022");
//         await page.waitForTimeout(200);
//         // Press Enter to save the changes
//         await page.keyboard.press('Enter');
//         await page.waitForTimeout(500);
//         // Click the cell to refresh view
//         await page.locator("(//td[contains(@class,'rowcell')])[62]").click();
//         await page.waitForTimeout(1000);
//         // Screenshot validation - Changing EndDate Using Cell Edit
//         expect(await page.locator('#CustomAdaptor_Gantt_Toolbar').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
//     });
// });

test('114-Dragging child task', async ({ page }) => {
    await page.goto(baseUrl + '/CustomAdaptor');
    await page.waitForTimeout(500);
    // Mouse down on the child task
    await page.mouse.down
    await page.locator("(//td[contains(@class,'e-rowdragdrop')])[11]").click();
    await page.waitForTimeout(500);
    // Drag and drop the child task
    await page.mouse.move(100, 0);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(500);
    // Click the cell to refresh the view
    await page.locator("(//td[contains(@class,'rowcell')])[68]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Dragging child task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('115-Child to child drag and drop', async ({ page }) => {
    await page.goto(baseUrl + '/CustomAdaptor');
    await page.waitForTimeout(500);
    // // Locate the drag element
    // const drag = await page.locator("(//td[contains(@class,'e-rowdragdrop')])[3]");
    // // Locate the drop element
    // const drop = await page.locator("(//td[contains(@class,'e-rowdragdrop')])[7]");
    // await page.waitForTimeout(1000);
    // // Perform drag and drop action
    // await drag.hover();
    // await page.mouse.down();
    // await page.mouse.move(0, 10);
    // await page.waitForTimeout(500);
    // await drop.hover();
    // await page.waitForTimeout(700);
    // await page.mouse.up();
    // await page.waitForTimeout(1000);
    // Screenshot validation - Dragging child task
    expect(await page.locator('#CustomAdaptor_Gantt_Toolbar').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('116-Onload Dynamic Data', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Screenshot validation - Dynamic Data Load
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('117-Parent Task Name Change', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Double-click the parent task name cell to edit
    await page.locator("(//td[contains(@class,'rowcell')])[2]").dblclick();
    await page.waitForTimeout(300);
    // Clear the task name input
    await page.locator("(//input[contains(@class,'control')])[1]").fill('New Parent Task');
    await page.waitForTimeout(300);
    // Click the update button
    await page.locator("(//span[contains(@class,'update')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Parent Task Name Change
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('118-Parent Start Date Change', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Double-click the parent start date cell to edit
    await page.locator("(//td[contains(@class,'rowcell')])[3]").dblclick();
    await page.waitForTimeout(300);
    // Clear the start date input
    await page.locator("(//input[contains(@class,'control')])[1]").fill('1/20/2021');
    await page.waitForTimeout(200);
    // Click the update button
    await page.locator("#Ganttdynamicdata_update").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Parent Start Date Change
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('119-Child Task Name Change', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Double-click the child task name cell to edit
    await page.locator("(//td[contains(@class,'rowcell')])[7]").dblclick();
    await page.waitForTimeout(300);
    await page.locator("//*[@id='DataItem___TaskName']").fill('Child Task Name');
    await page.waitForTimeout(300);
    // Click the update button
    await page.locator("#Ganttdynamicdata_update").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Child Task Name Change
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('120-Parent Start Date Change', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Double-click the parent start date cell to edit
    await page.locator("(//td[contains(@class,'rowcell')])[8]").dblclick();
    await page.waitForTimeout(300);
    // Clear the start date input
    await page.locator("//*[@id='DataItem___StartDate']").fill('4/20/2021');
    await page.waitForTimeout(300);
    // Click the update button
    await page.locator("(//span[contains(@class,'update')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Parent Start Date Change
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('121-Parent Progress Change', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Double-click the parent progress cell to edit
    await page.locator("(//td[contains(@class,'rowcell')])[10]").dblclick();
    await page.waitForTimeout(300);
    // Clear the progress input
    await page.locator("//*[@id='DataItem___Progress']").fill('80.00');
    await page.waitForTimeout(200);
    // Click the update button
    await page.locator("(//span[contains(@class,'update')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Parent Progress Change
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('122-Parent Task Name Change keyboard', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Double-click the parent task name cell to edit
    await page.locator("(//td[contains(@class,'rowcell')])[2]").dblclick();
    await page.waitForTimeout(300);
    // Click the task name input
    await page.locator("//*[@id='DataItem___TaskName']").fill('New Parent Value');
    await page.waitForTimeout(200);
    // Press Enter to save the changes
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Parent Task Name Change Keyboard
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('123-Parent Start Date Change_Keyboard', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Double-click the parent start date cell to edit
    await page.locator("(//td[contains(@class,'rowcell')])[3]").dblclick();
    await page.waitForTimeout(300);
    // Clear the start date input
    await page.locator("//*[@id='DataItem___StartDate']").fill('2/20/2021');
    await page.waitForTimeout(200);
    // Press Enter to save the changes
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Parent Start Date Change Keyboard
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('124-Child Task Name Change Keyboard', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Double-click the child task name cell to edit
    await page.locator("(//td[contains(@class,'rowcell')])[7]").dblclick();
    await page.waitForTimeout(300);
    // Clear the task name input
    await page.locator("//*[@id='DataItem___TaskName']").fill('New Child Task');
    await page.waitForTimeout(300);
    // Press Enter to save the changes
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Child Task Name Change Keyboard
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('125-Parent Start Date Change Keyboard', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Double-click the parent start date cell to edit
    await page.locator("(//td[contains(@class,'rowcell')])[8]").dblclick();
    await page.waitForTimeout(300);
    // Type the new start date
    await page.locator("//*[@id='DataItem___StartDate']").fill('3/20/2021');
    await page.waitForTimeout(200);
    // Press Enter to save the changes
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Parent Start Date Change Keyboard
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('126-Parent Progress Change Keyboard', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Double-click the parent progress cell to edit
    await page.locator("(//td[contains(@class,'rowcell')])[10]").dblclick();
    await page.waitForTimeout(300);
    // Clear the progress input
    await page.locator("//*[@id='DataItem___Progress']").fill('$97.00');
    await page.waitForTimeout(200);
    // Press Enter to save the changes
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Parent Progress Change Keyboard
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('127-Child Dialogue Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Double-click the child task to open dialog
    await page.locator("(//div[contains(@class,'gantt-child')])[3]").dblclick();
    await page.waitForTimeout(300);
    // Type the new task name
    await page.locator("//*[@id='TaskName']").fill('Child Task');
    await page.waitForTimeout(200);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    // Click the cell to refresh view
    await page.locator("(//td[contains(@class,'rowcell')])[12]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Child Dialogue Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('128-Child Dialogue Edit Start Date', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Double-click the child task to open dialog
    await page.locator("(//div[contains(@class,'gantt-child')])[3]").dblclick();
    await page.waitForTimeout(300);
    // Click the start date input
    // Type the new start date
    await page.locator("//*[@id='StartDate']").fill('5/7/2021');
    await page.waitForTimeout(500);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    // Click the cell to refresh view
    await page.locator("(//td[contains(@class,'rowcell')])[12]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Child Dialogue Edit Start Date
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('129-Child Dialogue Edit Duration', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Double-click the child task to open dialog
    await page.locator("(//div[contains(@class,'gantt-child')])[3]").dblclick();
    await page.waitForTimeout(500);
    // Type the new duration
    await page.locator("//*[@id='Duration']").fill('80 Days');
    await page.waitForTimeout(300);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    // Click the cell to refresh view
    await page.locator("(//div[contains(@class,'gantt-child')])[3]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Child Dialogue Edit Duration
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('130-Parent Task bar Tooltip', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Mouse down on the parent task bar
    await page.locator("(//div[contains(@class,'gantt-parent')])[1]").hover();
    await page.waitForTimeout(1000);
    // Screenshot validation - Parent Task bar Tooltip
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('131-Child Task bar Tooltip', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Mouse down on the child task bar
    await page.locator("(//div[contains(@class,'gantt-child')])[6]").hover();
    await page.waitForTimeout(1000);
    // Screenshot validation - Child Task bar Tooltip
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// Taskbar Editing

test('132-Dragging parent task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Drag and drop the parent task bar
    await page.locator("(//div[contains(@class,'gantt-parent')])[1]").click();
    await page.mouse.click(100, 0);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Dragging parent task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('133-Dragging Child task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Drag and drop the child task bar
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").click();
    await page.mouse.click(100, 0);
    await page.mouse.up();
    await page.locator("(//td[contains(@class,'rowcell')])[12]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Dragging child task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('134-Resize taskbar editing', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Resize the taskbar
    await page.locator("(//div[contains(@class,'e-taskbar-left-resizer e-icon')])[1]").click();
    await page.mouse.move(50, 0);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation - Resize taskbar editing
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('135-Resize Progress', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Resize the progress bar
    await page.locator("//*[@id='Ganttdynamicdata_chartContentBody']/tr[4]/td/div[2]/div[4]").click();
    await page.mouse.move(50, 0);
    await page.waitForTimeout(500);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation - Resize Progress
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// Toolbar Actions

test('136-Add Toolbar', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Click the add button on the toolbar
    await page.locator("#Ganttdynamicdata_add").click();
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Add Toolbar
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('137-ZoomIn Toolbar', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Click the zoom in button on the toolbar
    await page.locator("#Ganttdynamicdata_zoomin").click();
    await page.waitForTimeout(500);
    // Screenshot validation - ZoomIn Toolbar
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('138-ZoomOut Toolbar', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Click the zoom out button on the toolbar
    await page.locator("#Ganttdynamicdata_zoomout").click();
    await page.waitForTimeout(500);
    // Screenshot validation - ZoomOut Toolbar
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('139-ZoomToFit Toolbar', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Click the zoom to fit button on the toolbar
    await page.locator("#Ganttdynamicdata_zoomtofit").click();
    await page.waitForTimeout(500);
    // Screenshot validation - ZoomToFit Toolbar
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('140-Indent Task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Click the indent button on the toolbar
    await page.locator("//*[@id='treeGridGanttdynamicdata_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(300);
    await page.locator("#Ganttdynamicdata_indent").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Indent Task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('141-Outdent Task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Click the outdent button on the toolbar
    await page.locator("//*[@id='treeGridGanttdynamicdata_gridcontrol_content_table']/tbody/tr[4]/td[3]").click();
    await page.waitForTimeout(300);
    await page.locator("#Ganttdynamicdata_outdent").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Outdent Task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('142-Collapse Task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Click the collapse all button on the toolbar
    await page.locator("(//span[contains(@class,'collapseall')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Collapse Task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('143-Expand Task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/DynamicObject');
    await page.waitForTimeout(500);
    // Click the expand all button on the toolbar
    await page.locator("(//span[contains(@class,'expandall')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Expand Task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('144-Load on default format', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Screenshot validation - Load on default format
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('145-Dynamic change date format', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    //click the change date format button
    await page.locator("(//button[text()='ChangeDateFormat'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Dynamic change date format
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('146-Add new task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    //click the add new task button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(800);
    // Click the Save button
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Add new task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('147-initializing empty and load', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/daymarker');
    await page.waitForTimeout(500);
    // Screenshot validation - initializing empty and load
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click the collapse all button on the toolbar
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Collapseall records
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click the expand all button on the toolbar
    await page.locator("(//span[text()='Expand all'])[1]").click();
    await page.waitForTimeout(500);
    // Click the collapse icon in the treegrid
    await page.locator("(//span[contains(@class,'e-icons e-treegridexpand')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Collapse records using treegrid collapse icon
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('148-Eventmarkers and holidays length in single child record', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/tooltip');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[20]").click();
    await page.waitForTimeout(200);
    // Press the INSERT key
    await page.keyboard.press('Insert');
    await page.waitForTimeout(500);
    // Click on another cell
    await page.locator("//*[@id='treeGridGanttTooltip_gridcontrol_content_table']/tbody/tr[2]/td[2]").click();
    await page.waitForTimeout(200);
    // Press the DELETE key
    await page.keyboard.press('Delete');
    await page.waitForTimeout(300);
    // Click on the same cell again
    await page.locator("//*[@id='treeGridGanttTooltip_gridcontrol_content_table']/tbody/tr[2]/td[2]").click();
    await page.waitForTimeout(200);
    // Press the DELETE key again
    await page.keyboard.press('Delete');
    await page.waitForTimeout(500);
    // Screenshot validation - Eventmarkers and holidays length in single child record
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('149-Change holidays dynamically', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/tooltip');
    await page.waitForTimeout(500);
    // Click on the holidays element
    await page.locator("(//button[text()='Change Holidays'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Change holidays dynamically
    expect(await page.locator('#GanttTooltip').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('150-Child To Child Drag', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/PreventDragAndDrop');
    await page.waitForTimeout(500);
    const drag = page.locator("(//div[contains(@class,'e-rowcelldrag')])[2]");
    const drop = page.locator("(//div[contains(@class,'e-rowcelldrag')])[5]");
    await drag.hover();
    await page.mouse.down();
    await page.mouse.move(0, 10);
    await drop.hover();
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation - Child To Child Drag
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('151-Child To Parent Drag', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/PreventDragAndDrop');
    await page.waitForTimeout(500);
    const drag = page.locator("(//div[contains(@class,'e-rowcelldrag')])[4]");
    const drop = page.locator("(//div[contains(@class,'e-rowcelldrag')])[6]");
    await drag.hover();
    await page.mouse.down();
    await page.mouse.move(0, 10);
    await drop.hover();
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation - Child To Parent Drag
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('152-Child To Child Before Drag', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/PreventDragAndDrop');
    await page.waitForTimeout(500);
    const drag = page.locator("(//div[contains(@class,'e-rowcelldrag')])[5]");
    const drop = page.locator("(//div[contains(@class,'e-rowcelldrag')])[2]");
    await drag.hover();
    await page.mouse.down();
    await page.mouse.move(0, 10);
    await drop.hover();
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation - Child To Child Before Drag
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('153-Parent To Parent Drag', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/PreventDragAndDrop');
    await page.waitForTimeout(500);
    const drag = page.locator("(//div[contains(@class,'e-rowcelldrag')])[1]");
    const drop = page.locator("(//div[contains(@class,'e-rowcelldrag')])[6]");
    await drag.hover();
    await page.mouse.down();
    await page.mouse.move(0, 10);
    await drop.hover();
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation - Parent To Parent Drag
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('154-Parent To Parent Drag Before', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/PreventDragAndDrop');
    await page.waitForTimeout(500);
    const drag = page.locator("(//div[contains(@class,'e-rowcelldrag')])[6]");
    const drop = page.locator("(//div[contains(@class,'e-rowcelldrag')])[1]");
    await page.mouse.down();
    await page.mouse.move(0, 10);
    await drop.hover();
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation - Parent To Parent Drag Before
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('155-Parent Updated on Dragging Row', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/PreventDragAndDrop');
    await page.waitForTimeout(500);
    //Click the parent taskbar
    const drag = page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]");
    await drag.hover();
    await page.mouse.down();
    await page.mouse.move(100, 0);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    await page.locator("//*[@id='treeGridPreventDragandDrop_gridcontrol_content_table']/tbody/tr[1]/td[3]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Parent Updated on Dragging Row
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('156-initializing editing features', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Screenshot validation - Initializing editing features
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//span[contains(@class,'add')])[1]").click();
    await page.waitForTimeout(500);
    //Click save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Perform add action
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('157-perform delete action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[16]").click();
    await page.waitForTimeout(300);
    // Click on the delete button
    await page.locator("(//span[contains(@class,'delete')])[1]").click();
    await page.waitForTimeout(500);
    // Confirm the deletion
    await page.locator("(//button[text()='OK'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Perform delete action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('158-perform cancel action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[16]").dblclick();
    await page.waitForTimeout(300);
    // Click on the cancel button
    await page.locator("(//span[text()='Update'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Perform cancel action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('159-changing child task name using edit action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[16]").click();
    await page.waitForTimeout(300);
    // Click on the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(300);
    // Type the new task name
    await page.locator("//*[@id='TaskName']").fill("Identify Site area");
    await page.waitForTimeout(300);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Changing child task name using edit action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('160-changing child start date using edit action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[9]").click();
    await page.waitForTimeout(200);
    // Click on the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(300);
    // Type the new start date
    await page.locator("//*[@id='StartDate']").fill("4/5/2019");
    await page.waitForTimeout(300);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Changing child start date using edit action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('161-changing child end date using edit action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[9]").click();
    await page.waitForTimeout(300);
    // Click on the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(300);
    // Type the new end date
    await page.locator("//*[@id='EndDate']").fill("4/8/2019");
    await page.waitForTimeout(300);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Changing child end date using edit action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('162-changing child progress using edit action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[9]").click();
    await page.waitForTimeout(200);
    // Click on the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    // Type the new progress value
    await page.locator("//*[@id='Progress']").fill("40");
    await page.waitForTimeout(300);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Changing child progress using edit action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('163-changing parent task name using edit action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[30]").click();
    await page.waitForTimeout(300);
    // Click on the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    // Type the new task name
    await page.locator("//*[@id='TaskName']").fill("Start project");
    await page.waitForTimeout(300);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Changing parent task name using edit action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('164-changing parent start date using edit action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[30]").click();
    await page.waitForTimeout(200);
    // Click on the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    // Click on the start date field
    await page.locator("//*[@id='StartDate']").fill("4/5/2019");
    await page.waitForTimeout(300);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Changing parent start date using edit action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('165-changing child task name using double click action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").dblclick();
    await page.waitForTimeout(300);
    // Type the new task name
    await page.locator("//*[@id='TaskName']").fill("Identify Site place");
    await page.waitForTimeout(300);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Changing child task name using double click action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('166-changing child start date using double click action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").dblclick();
    await page.waitForTimeout(1000);
    // Type the new start date
    await page.locator("//*[@id='StartDate']").fill("4/6/2019");
    await page.waitForTimeout(300);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Changing child start date using double click action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('167-changing child end date using double click action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").dblclick();
    await page.waitForTimeout(1000);
    // Type the new end date
    await page.locator("//*[@id='EndDate']").fill("4/9/2019");
    await page.waitForTimeout(300);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Changing child end date using double click action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('168-changing child progress using double click action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").dblclick();
    await page.waitForTimeout(1000);
    // Type the new progress value
    await page.locator("//*[@id='Progress']").fill("45");
    await page.waitForTimeout(200);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Changing child progress using double click action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('169-changing duration using edit action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[19]").click();
    await page.waitForTimeout(200);
    // Click on the edit button
    await page.locator("(//span[contains(@class,'edit')])[1]").click();
    await page.waitForTimeout(200);
    // Type the new duration
    await page.locator("//*[@id='Duration']").fill("2 days");
    await page.waitForTimeout(300);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Changing duration using edit action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('170-changing duration using double click action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").dblclick();
    await page.waitForTimeout(1000);
    // Type the new duration
    await page.locator("//*[@id='Duration']").fill("2 days");
    await page.waitForTimeout(300);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Changing duration using double click action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('171-changing duration using edit action as Minutes', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[37]").click();
    await page.waitForTimeout(200);
    // Click on the edit button
    await page.locator("(//span[contains(@class,'edit')])[1]").click();
    await page.waitForTimeout(500);
    // Type the new duration
    await page.locator("//*[@id='Duration']").fill("2 Minutes");
    await page.waitForTimeout(200);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Changing duration using edit action as Minutes
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('172-changing duration using edit action as Hour', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[46]").click();
    await page.waitForTimeout(200);
    // Click on the edit button
    await page.locator("(//span[contains(@class,'edit')])[1]").click();
    await page.waitForTimeout(500);
    // Type the new duration
    await page.locator("//*[@id='Duration']").fill("2 Hour");
    await page.waitForTimeout(200);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Changing duration using edit action as Hour
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('173-Changing Taskname Using Cell Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[9]").dblclick();
    await page.waitForTimeout(300);
    // Type the new task name
    await page.locator("//*[@id='DataItem___TaskName']").fill("New Value");
    await page.waitForTimeout(300);
    // Click on the update button
    await page.locator("(//span[contains(@class,'update')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Changing Taskname Using Cell Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('174-Changing Startdate Using Cell Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[10]").dblclick();
    await page.waitForTimeout(300);
    // Click on the start date field
    await page.locator("//*[@id='DataItem___StartDate']").click();
    await page.waitForTimeout(100);
    // Select all text in the start date field
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(300);
    // Press backspace to clear the field
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(300);
    // Type the new start date
    await page.locator("//*[@id='DataItem___StartDate']").type("4/4/2019");
    await page.waitForTimeout(300);
    // Click on the update button
    await page.locator("(//span[contains(@class,'update')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Changing Startdate Using Cell Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('175-Changing EndDate Using Cell Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[11]").dblclick();
    await page.waitForTimeout(300);
    // Click on the end date field
    await page.locator("//*[@id='DataItem___EndDate']").click();
    await page.waitForTimeout(100);
    // Select all text in the end date field
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(300);
    // Press backspace to clear the field
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(300);
    // Type the new end date
    await page.locator("//*[@id='DataItem___EndDate']").fill("4/8/2019");
    await page.waitForTimeout(300);
    // Click on the update button
    await page.locator("(//span[contains(@class,'update')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Changing EndDate Using Cell Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('176-Changing Progress Using Cell Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[20]").dblclick();
    await page.waitForTimeout(300);
    // Type the new progress value
    await page.locator("//*[@id='DataItem___Progress']").fill("60");
    await page.waitForTimeout(300);
    // Click on the update button
    await page.locator("(//span[contains(@class,'update')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Changing Progress Using Cell Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('177-Changing Taskname Using Cell Edit of Parent Tasks', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[2]").dblclick();
    await page.waitForTimeout(300);
    // Type the new task name
    await page.locator("//*[@id='DataItem___TaskName']").fill("New Value");
    await page.waitForTimeout(300);
    // Click on the update button
    await page.locator("(//span[contains(@class,'update')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Changing Taskname Using Cell Edit of Parent Tasks
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('178-Changing Startdate Using Cell Edit of Parent Tasks', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[3]").dblclick();
    await page.waitForTimeout(300);
    // Click on the start date field
    await page.locator("//*[@id='DataItem___StartDate']").click();
    await page.waitForTimeout(100);
    // Select all text in the start date field
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(300);
    // Press backspace to clear the field
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(300);
    // Type the new start date
    await page.locator("//*[@id='DataItem___StartDate']").fill("4/4/2019");
    await page.waitForTimeout(300);
    // Click on the update button
    await page.locator("(//span[contains(@class,'update')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Changing Startdate Using Cell Edit of Parent Tasks
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('179-Changing EndDate Using Cell Edit of Parent Tasks', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[4]").dblclick();
    await page.waitForTimeout(500);
    // Screenshot validation - Changing EndDate Using Cell Edit of Parent Tasks
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('180-Changing Progress Using Cell Edit of Parent Tasks', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[6]").dblclick();
    await page.waitForTimeout(500);
    // Screenshot validation -The progress won't be updated for parent tasks
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('181-Changing Taskname Using Cell Edit Keyboard Interactions', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[16]").dblclick();
    await page.waitForTimeout(300);
    // Type the new task name
    await page.locator("//*[@id='DataItem___TaskName']").fill("New Value");
    await page.waitForTimeout(300);
    // Press Enter key
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Changing Taskname Using Cell Edit Keyboard Interactions
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('182-Cancel Taskname Using Cell Edit Keyboard Interactions', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[16]").dblclick();
    await page.waitForTimeout(300);
    // Type the new task name
    await page.locator("//*[@id='DataItem___TaskName']").fill("New Value");
    await page.waitForTimeout(300);
    // Press Escape key
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
    // Screenshot validation - Cancel Taskname Using Cell Edit Keyboard Interactions
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('183-Insert Add Action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
    await page.waitForTimeout(300);
    // Press Insert key
    await page.keyboard.press('Insert');
    await page.waitForTimeout(1000);
    // Screenshot validation -New record is added at the top of the grid
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('184-Delete Action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").click();
    await page.waitForTimeout(300);
    // Click on the delete button
    await page.locator("(//span[contains(@class,'delete')])[1]").click();
    await page.waitForTimeout(500);
    // Confirm the deletion
    await page.locator("(//button[text()='OK'])[1]").click();
    await page.waitForTimeout(600);
    // Screenshot validation - Delete Action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('185-Cell editing Notes Adding Parent task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[7]").dblclick();
    await page.waitForTimeout(300);
    // Click on the notes field
    await page.locator("//div[@class='e-content']").click();
    await page.waitForTimeout(500);
    // Type the new notes
    await page.locator("//div[@class='e-content']").fill("New Notes");
    await page.waitForTimeout(1000);
    // Screenshot validation - Cell editing Notes Adding Parent task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('186-Close after Open Edit Dialog', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").dblclick();
    await page.waitForTimeout(1000);
    // Click on the close button in the dialog header
    await page.locator("(//button[contains(@class,'closeicon')])[1]").click();
    await page.waitForTimeout(500);
    // Click on the specific cell to ensure focus
    await page.locator("(//td[contains(@class,'rowcell')])[15]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Close after Open Edit Dialog
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('187-Cancel after Open Edit Dialog', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").dblclick();
    await page.waitForTimeout(1000);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Cancel after Open Edit Dialog
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('188-Close after Open Add Dialog', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click on the add button
    await page.locator("(//span[contains(@class,'add')])[1]").click();
    await page.waitForTimeout(1000);
    // Click on the close button in the dialog header
    await page.locator("(//button[contains(@class,'closeicon')])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Close after Open Add Dialog
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('189-Delete confirmation cancel', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//div[contains(@class,'gantt-child')])[5]").click();
    await page.waitForTimeout(300);
    // Click on the delete button
    await page.locator("(//span[contains(@class,'delete')])[1]").click();
    await page.waitForTimeout(500);
    // Click on the cancel button in the confirmation dialog
    await page.locator("(//button[text()='Cancel'])[1]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Delete confirmation cancel
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('190-Add Dialog Cancel Without Duration', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/NoDuration');
    await page.waitForTimeout(500);
    // Click on the add button in the context menu
    await page.locator("(//span[contains(@class,'add')])[1]").click();
    await page.waitForTimeout(1000);
    // Click on the cancel button in the confirmation dialog
    await page.locator("(//button[text()='Cancel'])[1]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Add Dialog Cancel Without Duration
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('191-Add Dialog New task Without Duration', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/NoDuration');
    await page.waitForTimeout(500);
    // Click on the add button in the context menu
    await page.locator("(//span[contains(@class,'add')])[1]").click();
    await page.waitForTimeout(500);
    // Click on the cancel button in the confirmation dialog
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Add Dialog New task Without Duration
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('192-Adding two records', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click on the add button
    await page.locator("(//span[contains(@class,'add')])[1]").click();
    await page.waitForTimeout(500);
    // Click on the cancel button in the confirmation dialog
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    // Add 2nd time
    await page.locator("(//span[contains(@class,'add')])[1]").click();
    await page.waitForTimeout(500);
    // Click on the Add button in the confirmation dialog
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Adding two records
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('193-Focus on taskbar after dialog cancel', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/contextmenu');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//tr[contains(@class,'e-chart-row')])[2]").dblclick();
    await page.waitForTimeout(1000);
    // Click on the cancel button in the dialog
    await page.locator("(//button[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    // Perform mouse down and up actions on the taskbar
    await page.locator("(//tr[contains(@class,'e-chart-row')])[2]").click({ button: 'left' });
    await page.waitForTimeout(500);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation - Focus on taskbar after dialog cancel
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('194-Focus on Tree grid date after dialog edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").dblclick();
    await page.waitForTimeout(1000);
    // Type the new start date
    await page.locator('#StartDate').fill("04/08/2019");
    await page.waitForTimeout(300);
    // Press Enter key
    await page.locator('//*[@id="GanttEditing_dialog"]/div[4]/button[1]').click();
    await page.waitForTimeout(1000);
    // Double click on the specific cell in the tree grid
    await page.locator("(//td[contains(@class,'rowcell')])[17]").dblclick();
    await page.waitForTimeout(300);
    // Screenshot validation - Double click
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Press Enter key
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Focus on Tree grid date after dialog edit
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('195-toolbar items when double on parent enddate cell', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[4]").dblclick();
    await page.waitForTimeout(300);
    // Screenshot validation - Toolbar items when double on parent enddate cell
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('196-toolbar items when double on parent duration cell', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[5]").dblclick();
    await page.waitForTimeout(300);
    // Screenshot validation - Toolbar items when double on parent duration cell
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('197-toolbar items when double on parent progress cell', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[6]").dblclick();
    await page.waitForTimeout(300);
    // Screenshot validation - Toolbar items when double on parent progress cell
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('198-Row height small', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RowHeight');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[18]").click();
    await page.waitForTimeout(300);
    // Click on the small row height button
    await page.locator("(//span[contains(@class,'small')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Row height small
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click on the medium row height button
    await page.locator("(//span[contains(@class,'medium')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Row height medium
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click on the big row height button
    await page.locator("(//span[contains(@class,'big')])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Row height big
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('199-edit notes dialog while tab key navigation', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[20]").dblclick();
    await page.waitForTimeout(300);
    // Press Tab key multiple times
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    // Click on the save button in the dialog
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Edit notes dialog while tab key navigation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('200-notes dialog while tab navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[27]").dblclick();
    await page.waitForTimeout(300);
    // Click on the progress field
    await page.locator("#DataItem___Progress").click();
    // Press Tab key multiple times
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    // Screenshot validation - Notes dialog while tab navigation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('201-cell edit through tab navigation', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selfdata');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[18]").dblclick();
    await page.waitForTimeout(300);
    // Type the new task name
    await page.locator("#DataItem___TaskName").fill("Edited record");
    await page.waitForTimeout(300);
    // Press Tab key multiple times
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    // Press Enter key
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Cell edit through tab navigation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('202-Editing start date after indent', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Selfdata');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[26]").click();
    await page.waitForTimeout(300);
    // Click on the indent button
    await page.locator("(//span[contains(@class,'indent')])[1]").click();
    await page.waitForTimeout(300);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[27]").dblclick();
    await page.waitForTimeout(300);
    // Click on the start date field
    await page.locator("//*[@id='DataItem___StartDate']").click();
    await page.waitForTimeout(100);
    // Select all text in the start date field
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(300);
    // Press backspace to clear the field
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(200);
    // Type the new start date
    await page.locator("//*[@id='DataItem___StartDate']").fill("4/6/2019");
    await page.waitForTimeout(300);
    // Press Enter key
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Editing start date after indent
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('203-Editing enddate after indent', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Selfdata');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[26]").click();
    await page.waitForTimeout(300);
    // Click on the indent button
    await page.locator("(//span[contains(@class,'indent')])[1]").click();
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[28]").dblclick();
    await page.waitForTimeout(300);
    // Type the new end date
    await page.locator("//*[@id='DataItem___EndDate']").type("4/9/2019");
    await page.waitForTimeout(300);
    // Press Enter key
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Editing enddate after indent
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('204-initializing editing features', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editTemp');
    await page.waitForTimeout(500);
    // Screenshot validation - Initializing editing features
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[2]").dblclick();
    await page.waitForTimeout(300);
    // Press Arrow Down key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    // Screenshot validation - Edit template Dropdown Check Parent Dropdown
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click on the cancel button
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[2]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Edit template Dropdown Check Parent
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('205-Edit template Dropdown Check Child', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editTemp');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[8]").dblclick();
    await page.waitForTimeout(300);
    // Press Arrow Down key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    // Screenshot validation - Edit template Dropdown Check Child Dropdown
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click on the cancel button
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[2]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Edit template Dropdown Check Child
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('206-Edit template ParentName Update', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editTemp');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[2]").dblclick();
    await page.waitForTimeout(300);
    // Press Arrow Down key multiple times
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    // Click on the update button
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[5]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Edit template ParentName Update
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('207-Edit template Child Name Update', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editTemp');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[14]").dblclick();
    await page.waitForTimeout(300);
    // Press Arrow Down key multiple times
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    // Click on the update button
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[5]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Edit template Child Name Update
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('208-Edit template Child Name Update Keyboard', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editTemp');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[20]").dblclick();
    await page.waitForTimeout(300);
    // Click on the task name field
    await page.locator("//*[@id='treeGridEditTemplate_gridcontrol_content_table']/tbody/tr[4]/td[2]/form/div[1]").click();
    await page.waitForTimeout(200);
    // Type the new task name
    await page.locator("//*[@id='treeGridEditTemplate_gridcontrol_content_table']/tbody/tr[4]/td[2]/form/div[1]").type("P");
    await page.waitForTimeout(500);
    // Click on the update button
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[5]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Edit template Child Name Update Keyboard
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('209-Edit template Dialog Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editTemp');
    await page.waitForTimeout(500);
    // Double click on the specific cell
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(300);
    // Click on the general tab container
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(300);
    // Press Arrow Down key and Enter key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Edit template Dialog Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('210-initializing empty and load', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/emptyandload');
    await page.waitForTimeout(500);
    // Screenshot validation - Initializing empty and load
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[1]").click();
    await page.waitForTimeout(300);
    // Click on the delete button
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[3]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Empty gantt chart
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('211-data adding in empty gantt chart', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/emptyandload');
    await page.waitForTimeout(500);
    // Click on the add button
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(1000);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Data adding in empty gantt chart
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('212-Add new task by context menu', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/emptyandload');
    await page.waitForTimeout(500);
    // Right-click on the specific cell
    const record1 = page.locator("(//td[contains(@class,'rowcell')])[2]");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Navigate through the context menu
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Click on the specific cell to ensure focus
    await page.locator("(//td[contains(@class,'rowcell')])[8]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Add new task by context menu
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('213-Add new task by context menu Below', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/emptyandload');
    await page.waitForTimeout(500);
    // Right-click on the specific cell
    const record1 = page.locator("(//td[contains(@class,'rowcell')])[2]");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Navigate through the context menu
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Click on the specific cell to ensure focus
    await page.locator("(//td[contains(@class,'rowcell')])[8]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Add new task by context menu Below
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('214-Add new task by context menu Child', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/emptyandload');
    await page.waitForTimeout(500);
    // Right-click on the specific cell
    const record1 = page.locator("(//div[contains(@class,'gantt-child')])[1]");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Navigate through the context menu
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Click on the specific cell to ensure focus
    await page.locator("(//td[contains(@class,'rowcell')])[8]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Add new task by context menu Child
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('215-Add new task by context menu milestone', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/emptyandload');
    await page.waitForTimeout(500);
    // Right-click on the specific cell
    const record1 = page.locator("(//div[contains(@class,'milestone')])[2]");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Navigate through the context menu
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(400);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(600);
    // Click on the specific cell to ensure focus
    await page.locator("(//td[contains(@class,'rowcell')])[8]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Add new task by context menu milestone
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('216-BLAZ-26363 Load Empty Gantt', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/EmptyGantt');
    await page.waitForTimeout(500);
    // Screenshot validation - Load Empty Gantt
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('217-Rendering gantt in SfTab', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/SfTab');
    await page.waitForTimeout(500);
    // Click on the second tab
    await page.locator("(//div[text()='Gantt Chart'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Rendering gantt in SfTab
    expect.soft(await page.locator('.control-section').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click on the fourth tab
    await page.locator("(//div[text()='Gantt Chart'])[2]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Rendering issue in Sf gantt with events
    expect.soft(await page.locator('.control-section').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('218-Indicators Tooltip', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Eventmarkers');
    await page.waitForTimeout(500);
    // Move mouse to the specific element to show tooltip
    await page.locator("(//label[contains(@class,'e-label e-indicator-span')])[1]").hover();
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation - Indicators Tooltip
    expect(await page.locator('#Eventmarkers').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('219-GridLines as both View', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/daymarker');
    await page.waitForTimeout(500);
    // Screenshot validation - GridLines as both View
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click on the collapse all button
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(500);
    // Click on the expand all button
    await page.locator("(//span[text()='Expand all'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensure the grid lines updated after Collapse and Expand
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('220-initializing exporting', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/exporting');
    await page.waitForTimeout(500);
    // Screenshot validation - Initializing exporting
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    // Click on the excel export button
    await page.locator('#GanttExport_excelexport').click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Excel export
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    // Click on the csv export button
    await page.locator('#GanttExport_csvexport').click();
    await page.waitForTimeout(1000);
    // Screenshot validation - CSV export
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('221-CollapseATLevel Initial Load', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CollapseAtlevel');
    await page.waitForTimeout(500);
    // Screenshot validation - CollapseATLevel Initial Load
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click on the collapse at level button
    await page.locator('#collapseAtLevel').click();
    await page.waitForTimeout(500);
    // Screenshot validation - CollapseAtlevel Toolbar
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click on the expand at level button
    await page.locator('#expandAtLevel').click();
    await page.waitForTimeout(1000);
    // Screenshot validation - ExpandAtlevel Toolbar
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('222-ZoomOut Toolbar', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CollapseAtlevel');
    await page.waitForTimeout(500);
    // Click on the zoom out button
    await page.locator('#CollapseAtLevel_zoomout').click();
    await page.waitForTimeout(500);
    // Screenshot validation - ZoomOut Toolbar
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click on the collapse at level button
    await page.locator('#collapseAtLevel').click();
    await page.waitForTimeout(500);
    // Screenshot validation - CollapseAtlevel TreeGrid Icon Click
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click on the expand icon in the tree grid
    await page.locator("(//span[contains(@class,'e-treegridexpand')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - ExpandAtlevel TreeGrid Icon Click
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('223-CollapseAtlevel TreeGrid Icon Click', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CollapseAtlevel');
    await page.waitForTimeout(500);
    // Click on the collapse icon in the tree grid
    await page.locator("(//span[contains(@class,'e-icons e-treegridexpand')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - CollapseAtlevel TreeGrid Icon Click
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('224-IsExpand Load', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Isexpand');
    await page.waitForTimeout(500);
    // Ensure the second parent is not expanded
    await page.locator("(//td[contains(@class,'rowcell')])[30]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - IsExpand Load
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('225-Ensuring Toolbar Expand', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Isexpand');
    await page.waitForTimeout(500);
    // Click on the expand all button
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[7]").click();
    await page.waitForTimeout(500);
    //Click the parent record
    await page.locator("(//td[contains(@class,'rowcell')])[30]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Ensuring Toolbar Expand
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('226-Ensuring Toolbar Collapse', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Isexpand');
    await page.waitForTimeout(500);
    // Click on the collapse all button
    await page.locator("(//span[contains(@class,'collapse')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Ensuring Toolbar Collapse
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(1000);
    // Click on the expand all button
    await page.locator("(//span[contains(@class,'expandall')])[1]").click();
    await page.waitForTimeout(500);
    // Click on the add button
    await page.locator("(//span[contains(@class,'add')])[1]").click();
    await page.waitForTimeout(1000);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Toolbar Expand and add
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('227-Adding a task after Collapse all', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Isexpand');
    await page.waitForTimeout(500);
    // Click on the collapse all button
    await page.locator("(//span[contains(@class,'collapse')])[1]").click();
    await page.waitForTimeout(500);
    // Click on the add button
    await page.locator("(//span[contains(@class,'add')])[1]").click();
    await page.waitForTimeout(1000);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Adding a task after Collapse all
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('228-CollapseAllParentTasks Onload', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Hierarchydata');
    await page.waitForTimeout(500);
    // Screenshot validation - CollapseAllParentTasks Onload
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click on the expand icon in the tree grid
    await page.locator("(//span[contains(@class,'e-icons e-treegridcollapse')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Expanding a task specific task by click
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('229-Expand all toolbar', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Hierarchydata');
    await page.waitForTimeout(500);
    // Click on the expand all button
    await page.locator("(//span[contains(@class,'e-expandall')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Expand all toolbar
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click on the collapse key button
    await page.locator("(//button[text()='CollapseKey'])[1]").click();
    await page.waitForTimeout(500);
    // Click on task 9 and check if it is collapsed dynamically
    await page.locator("//*[@id='treeGridHierarchydata_gridcontrol_content_table']/tbody/tr[9]/td[2]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Collapse Key
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('230-Expand Key', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Hierarchydata');
    await page.waitForTimeout(500);
    // Click on the expand key button
    await page.locator("(//button[text()='ExpandKey'])[1]").click();
    await page.waitForTimeout(500);
    // Click on task 9 and check if it is expanded dynamically
    await page.locator("//*[@id='treeGridHierarchydata_gridcontrol_content_table']/tbody/tr[3]/td[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Expand Key
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('231-initializing filter', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/filtering');
    await page.waitForTimeout(500);
    // Screenshot validation - Initializing filter
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('232-Filtering integer column by equal operator', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/filtering');
    await page.waitForTimeout(500);
    // Click on the filter icon in the header
    await page.locator("(//div[contains(@class,'filtermenudiv')])[1]").click();
    await page.waitForTimeout(400);
    // Enter the value for filtering
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.type('2');
    await page.waitForTimeout(300);
    // Click on the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Filtering integer column by equal operator
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('233-Filtering integer column by Greater than operator', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/filtering');
    await page.waitForTimeout(500);
    // Click on the filter icon in the header
    await page.locator("(//div[contains(@class,'filtermenudiv')])[1]").click();
    await page.waitForTimeout(400);
    // Navigate through the filter menu
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    // Enter the value for filtering
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.type('2');
    await page.waitForTimeout(300);
    // Click on the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Filtering integer column by Greater than operator
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('234-Filtering integer column by Greater than or Equal to operator', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/filtering');
    await page.waitForTimeout(500);
    // Click on the filter icon in the header
    await page.locator("(//div[contains(@class,'filtermenudiv')])[1]").click();
    await page.waitForTimeout(400);
    // Navigate through the filter menu
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    // Enter the value for filtering
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.type('4');
    await page.waitForTimeout(400);
    // Click on the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Filtering integer column by Greater than or Equal to operator
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('235-Filtering integer column by Lesser than operator', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/filtering');
    await page.waitForTimeout(500);
    // Click on the filter icon in the header
    await page.locator("(//div[contains(@class,'filtermenudiv')])[1]").click();
    await page.waitForTimeout(400);
    // Navigate through the filter menu
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    // Enter the value for filtering
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.type('4');
    await page.waitForTimeout(300);
    // Click on the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Filtering integer column by Lesser than operator
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('236-Filtering integer column by Lesser than or Equal to operator', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/filtering');
    await page.waitForTimeout(500);
    // Click on the filter icon in the header
    await page.locator("(//div[contains(@class,'filtermenudiv')])[1]").click();
    await page.waitForTimeout(400);
    // Navigate through the filter menu
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    // Enter the value for filtering
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.type('4');
    await page.waitForTimeout(300);
    // Click on the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Filtering integer column by Lesser than or Equal to operator
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// test('237-Filtering task name by Ends With', async ({ page }) => {
//     await page.goto(baseUrl + '/E2EMigration/filtering');
//     await page.waitForTimeout(1000);
//     // Click on the filter icon in the header
//     await page.locator("(//div[contains(@class,'filtermenudiv')])[2]").click();
//     await page.waitForTimeout(1000);
//     // Navigate through the filter menu
//     await page.keyboard.press('ArrowDown');
//     await page.keyboard.press('ArrowDown');
//     await page.waitForTimeout(1000);
//     // Enter the value for filtering
//     await page.keyboard.press('Tab');
//     await page.waitForTimeout(500)
//     await page.keyboard.type('n');
//     await page.waitForTimeout(500)
//     await page.keyboard.press('Tab');
//     await page.waitForTimeout(500)
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(1000);
//     // Screenshot validation - Filtering task name by Ends With
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
// });

// test('238-Filtering task name by Contains Operator', async ({ page }) => {
//     await page.goto(baseUrl + '/E2EMigration/filtering');
//     await page.waitForTimeout(1000);
//     // Click on the filter icon in the header
//     await page.locator("(//div[contains(@class,'filtermenudiv')])[2]").click();
//     await page.waitForTimeout(1000);
//     // Navigate through the filter menu
//     await page.keyboard.press('ArrowDown');
//     await page.keyboard.press('ArrowDown');
//     await page.keyboard.press('ArrowDown');
//     await page.keyboard.press('ArrowDown');
//     await page.waitForTimeout(1000);
//     // Enter the value for filtering
//     await page.keyboard.press('Tab');
//     await page.keyboard.type('a');
//     await page.keyboard.press('Tab');
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(1000);
//     // Screenshot validation - Filtering task name by Contains Operator
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
// });

test('239-Filtering task Start date by Equal Operator', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/filtering');
    await page.waitForTimeout(500);
    // Click on the filter icon in the header
    await page.locator("(//div[contains(@class,'filtermenudiv')])[3]").click();
    await page.waitForTimeout(400);
    // Enter the value for filtering
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.type('4/2/2019');
    await page.waitForTimeout(500);
    // Click on the filter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Filtering task Start date by Equal Operator
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('240-Filtering task Start date by Greater Than Operator', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/filtering');
    await page.waitForTimeout(500);
    // Click on the filter icon in the header
    await page.locator("(//div[contains(@class,'filtermenudiv')])[3]").click();
    await page.waitForTimeout(400);
    // Navigate through the filter menu
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    // Enter the value for filtering
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.type('4/2/2019');
    await page.waitForTimeout(500);
    // Click on the filter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Filtering task Start date by Greater Than Operator
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('241-Filtering task End date by Less Than Operator', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/filtering');
    await page.waitForTimeout(500);
    // Click on the filter icon in the header
    await page.locator("(//div[contains(@class,'filtermenudiv')])[4]").click();
    await page.waitForTimeout(400);
    // Navigate through the filter menu
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    // Enter the value for filtering
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.type('4/8/2019');
    await page.waitForTimeout(300);
    // Click on the filter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Filtering task End date by Less Than Operator
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('242-Filtering task Duration by Starts With Operator', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/filtering');
    await page.waitForTimeout(500);
    // Click on the filter icon in the header
    await page.locator("(//div[contains(@class,'filtermenudiv')])[5]").click();
    await page.waitForTimeout(400);
    // Enter the value for filtering
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.type('3');
    await page.waitForTimeout(500);
    // Click on the filter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Filtering task Duration by Starts With Operator
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('243-Filtering task Duration by Ends With Operator', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/filtering');
    await page.waitForTimeout(500);
    // Click on the filter icon in the header
    await page.locator("(//div[contains(@class,'filtermenudiv')])[5]").click();
    await page.waitForTimeout(400);
    // Navigate through the filter menu
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    // Enter the value for filtering
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.type('0');
    await page.waitForTimeout(300);
    // Click on the filter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Filtering task Duration by Ends With Operator
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('244-Filtering task Duration by Contains Operator', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/filtering');
    await page.waitForTimeout(500);
    // Click on the filter icon in the header
    await page.locator("(//div[contains(@class,'filtermenudiv')])[5]").click();
    await page.waitForTimeout(400);
    // Navigate through the filter menu
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    // Enter the value for filtering
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.type('4');
    await page.waitForTimeout(300);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    // Click on the filter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Filtering task Duration by Contains Operator
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click on the clear filter button
    await page.locator("(//button[text()='Clear Filter'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Clear filter using method
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('245-filter using method', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/filtering');
    await page.waitForTimeout(500);
    // Click on the filter dynamic button
    await page.locator("(//button[text()='Filter Column'])[1]").click();
    await page.waitForTimeout(400);
    // Screenshot validation - Filter using method
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click on the filter icon in the header
    await page.locator("(//div[contains(@class,'filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    // Navigate through the filter menu
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Clear filter using filter icon
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('246-initial load frozen columns', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/FrozenColumns');
    await page.waitForTimeout(500);
    // Screenshot validation - Initial load frozen columns
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('247-Changing frozen line position', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/FrozenColumns');
    await page.waitForTimeout(500);
    // Click on the frozen line position button
    await page.locator("(//span[contains(@class,'e-input-group-icon e-spin-up')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Changing frozen line position
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('248-Changing frozen line position to 5', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/FrozenColumns');
    await page.waitForTimeout(500);
    // Click on the numeric textbox
    await page.locator(".e-control.e-numerictextbox.e-lib.e-input").click();
    await page.waitForTimeout(300);
    // Clear the numeric textbox
    await page.locator(".e-control.e-numerictextbox.e-lib.e-input").fill('');
    await page.waitForTimeout(300);
    // Enter the value 5
    await page.locator(".e-control.e-numerictextbox.e-lib.e-input").type('5');
    await page.waitForTimeout(500);
    // Screenshot validation - Changing frozen line position to 5
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('249-Changing frozen line position to 7', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/FrozenColumns');
    await page.waitForTimeout(500);
    // Click on the numeric textbox
    await page.locator(".e-control.e-numerictextbox.e-lib.e-input").click();
    await page.waitForTimeout(300);
    // Clear the numeric textbox
    await page.locator(".e-control.e-numerictextbox.e-lib.e-input").fill('');
    await page.waitForTimeout(300);
    // Enter the value 7
    await page.locator(".e-control.e-numerictextbox.e-lib.e-input").type('7');
    await page.waitForTimeout(500);
    // Screenshot validation - Changing frozen line position to 7
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('250-Autofitall columns', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/FrozenColumns');
    await page.waitForTimeout(500);
    // Click on the filter icon in the header
    await page.locator("(//div[contains(@class,'e-icons e-columnmenu ')])[1]").click();
    await page.waitForTimeout(400);
    // Navigate through the filter menu
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Click on the specific cell to ensure focus
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Autofitall columns
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('251-Autofit this column', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/FrozenColumns');
    await page.waitForTimeout(500);
    // Click on the filter icon in the header
    await page.locator("(//div[contains(@class,'e-icons e-columnmenu ')])[1]").click();
    await page.waitForTimeout(400);
    // Navigate through the filter menu
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Click on the specific cell to ensure focus
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Autofit this column
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('252-Sort Ascending', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/FrozenColumns');
    await page.waitForTimeout(500);
    // Click on the filter icon in the header
    await page.locator("(//div[contains(@class,'e-icons e-columnmenu ')])[1]").click();
    await page.waitForTimeout(400);
    // Navigate through the filter menu
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Click on the specific cell to ensure focus
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Sort Ascending
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('253-Sort Descending', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/FrozenColumns');
    await page.waitForTimeout(500);
    // Click on the filter icon in the header
    await page.locator("(//div[contains(@class,'e-icons e-columnmenu ')])[1]").click();
    await page.waitForTimeout(400);
    // Navigate through the filter menu
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Click on the specific cell to ensure focus
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Sort Descending
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('254-Resize frozen column', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/FrozenColumns');
    await page.waitForTimeout(500);
    // Resize the frozen column
    await page.locator("(//div[contains(@class,'e-frozen-cursor e-frozen-left-cursor')])[1]").hover();
    await page.mouse.down();
    await page.waitForTimeout(1000);
    await page.mouse.move(50, 10);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation - Resize frozen column
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('255-Resize Task ID column', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/FrozenColumns');
    await page.waitForTimeout(500);
    // Resize the Task ID column
    await page.locator("(//div[contains(@class,'e-rhandler e-rcursor')])[1]").hover();
    await page.mouse.down();
    await page.waitForTimeout(500);
    await page.mouse.move(50, 10);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation - Resize Task ID column
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('256-Sort ascending using header', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/FrozenColumns');
    await page.waitForTimeout(500);
    // Click on the header to sort ascending
    await page.locator("//*[@id='treeGridFrozen_gridcontrol_header_table']/thead/tr/th[2]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Sort ascending using header
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click on the header to sort descending
    await page.locator("//*[@id='treeGridFrozen_gridcontrol_header_table']/thead/tr/th[2]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Sort descending using header
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('257-Pefrom Oudent to Task Next To Parent', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Selfdata');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[10]").click();
    await page.waitForTimeout(300);
    // Click on the outdent button
    await page.locator("(//span[contains(@class,'outdent')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Pefrom Oudent to Task Next To Parent
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('258-Pefrom Multiple Oudent to All other task of 1st parent', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Selfdata');
    await page.waitForTimeout(500);
    // Select multiple tasks
    await page.keyboard.down('Control');
    await page.waitForTimeout(500);
    await page.locator("(//td[contains(@class,'rowcell')])[10]").click();
    await page.locator("(//td[contains(@class,'rowcell')])[18]").click();
    await page.locator("(//td[contains(@class,'rowcell')])[26]").click();
    await page.waitForTimeout(500);
    await page.keyboard.up('Control');
    await page.waitForTimeout(500);
    // Click on the outdent button
    await page.locator("(//span[contains(@class,'outdent')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Pefrom Multiple Oudent to All other task of 1st parent
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('259-Pefrom Indent to an task after Outdent', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Selfdata');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("(//td[contains(@class,'rowcell')])[26]").click();
    await page.waitForTimeout(300);
    // Click on the indent button
    await page.locator("(//span[contains(@class,'indent')])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Pefrom Indent to an task after Outdent
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('260-Pefrom Multiple Indent', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Selfdata');
    await page.waitForTimeout(500);
    // Select multiple tasks
    await page.keyboard.down('Control');
    await page.waitForTimeout(500);
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[4]/td[2]").click();
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[5]/td[2]").click();
    await page.waitForTimeout(500);
    await page.keyboard.up('Control');
    await page.waitForTimeout(500);
    // Click on the indent button
    await page.locator('#GanttSelfdata_indent').click();
    await page.waitForTimeout(300);
    // Screenshot validation - Pefrom Multiple Indent
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click on the specific cell
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(300);
    // Click on the indent button
    await page.locator('#GanttSelfdata_indent').click();
    await page.waitForTimeout(500);
    // Screenshot validation - Making a task as sub-Parent Task
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click on the specific cell
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(300);
    // Click on the outdent button
    await page.locator('#GanttSelfdata_outdent').click();
    await page.waitForTimeout(500);
    // Screenshot validation - Converting a Sub_Parent task to Normal parent
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('261-Pefrom Multiple Indent and Subtask', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Selfdata');
    await page.waitForTimeout(500);
    // Select multiple tasks
    await page.keyboard.down('Control');
    await page.waitForTimeout(500);
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[8]/td[2]").click();
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[9]/td[2]").click();
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[10]/td[2]").click();
    await page.waitForTimeout(500);
    await page.keyboard.up('Control');
    await page.waitForTimeout(500);
    // Click on the indent button
    await page.locator('#GanttSelfdata_indent').click();
    await page.waitForTimeout(500);
    // Screenshot validation - Pefrom Multiple Indent and Subtask
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('262-initializing Keyboard interaction', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/keyboardinteraction');
    await page.waitForTimeout(500);
    // Screenshot validation - Initializing Keyboard interaction
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click on the specific row
    await page.locator("//*[@id='GanttKeyboard_chartContentBody']/tr[3]").click();
    await page.waitForTimeout(500);
    // Press HOME key
    await page.keyboard.press('Home');
    await page.waitForTimeout(500);
    // Screenshot validation - Keyboard First Row Selection
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('263-Keyboard Last Row Selection', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/keyboardinteraction');
    await page.waitForTimeout(500);
    // Click on the specific row
    await page.locator("//*[@id='GanttKeyboard_chartContentBody']/tr[3]").click();
    await page.waitForTimeout(500);
    // Press END key
    await page.keyboard.press('End');
    await page.waitForTimeout(500);
    // Screenshot validation - Keyboard Last Row Selection
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('264-Keyboard Move Row Selection Down', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/keyboardinteraction');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("//*[@id='treeGridGanttKeyboard_gridcontrol_content_table']/tbody/tr[3]/td[4]").click();
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    // Screenshot validation - Keyboard Move Row Selection Down
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('265-Keyboard Move Row Selection up', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/keyboardinteraction');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("//*[@id='treeGridGanttKeyboard_gridcontrol_content_table']/tbody/tr[3]/td[4]").click();
    await page.waitForTimeout(500);
    // Press ARROW_UP key
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(500);
    // Screenshot validation - Keyboard Move Row Selection up
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('266-Keyboard Collapse All', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/keyboardinteraction');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("//*[@id='treeGridGanttKeyboard_gridcontrol_content_table']/tbody/tr[1]/td[2]").click();
    await page.waitForTimeout(300);
    // Press CONTROL + ARROW_UP keys
    await page.keyboard.press('Control+ArrowUp');
    await page.waitForTimeout(500);
    // Screenshot validation - Keyboard Collapse All
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('267-initializing Keyboard interaction', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/keyboardinteraction');
    await page.waitForTimeout(500);
    // Screenshot validation - Initializing Keyboard interaction
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click on the specific row
    await page.locator("//*[@id='GanttKeyboard_chartContentBody']/tr[3]").click();
    await page.waitForTimeout(500);
    // Press HOME key
    await page.keyboard.press('Home');
    await page.waitForTimeout(500);
    // Screenshot validation - Keyboard First Row Selection
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('268-Keyboard Last Row Selection', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/keyboardinteraction');
    await page.waitForTimeout(500);
    // Click on the specific row
    await page.locator("//*[@id='GanttKeyboard_chartContentBody']/tr[3]").click();
    await page.waitForTimeout(500);
    // Press END key
    await page.keyboard.press('End');
    await page.waitForTimeout(500);
    // Screenshot validation - Keyboard Last Row Selection
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('269-Keyboard Move Row Selection Down', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/keyboardinteraction');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("//*[@id='treeGridGanttKeyboard_gridcontrol_content_table']/tbody/tr[3]/td[4]").click();
    await page.waitForTimeout(300);
    // Press ARROW_DOWN key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    // Screenshot validation - Keyboard Move Row Selection Down
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('270-Keyboard Move Row Selection up', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/keyboardinteraction');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("//*[@id='treeGridGanttKeyboard_gridcontrol_content_table']/tbody/tr[3]/td[4]").click();
    await page.waitForTimeout(300);
    // Press ARROW_UP key
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(500);
    // Screenshot validation - Keyboard Move Row Selection up
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('271-Keyboard Collapse All', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/keyboardinteraction');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("//*[@id='treeGridGanttKeyboard_gridcontrol_content_table']/tbody/tr[1]/td[2]").click();
    await page.waitForTimeout(300);
    // Press CONTROL + ARROW_UP keys
    await page.keyboard.press('Control+ArrowUp');
    await page.waitForTimeout(500);
    // Screenshot validation - Keyboard Collapse All
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('272-Keyboard Collapse Row', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/keyboardinteraction');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("//*[@id='treeGridGanttKeyboard_gridcontrol_content_table']/tbody/tr[5]/td[2]").click();
    await page.waitForTimeout(300);
    // Press CONTROL + SHIFT + ARROW_UP keys
    await page.keyboard.press('Control+Shift+ArrowUp');
    await page.waitForTimeout(500);
    // Screenshot validation - Keyboard Collapse Row
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('273-Keyboard Collapse Row', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/keyboardinteraction');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("//*[@id='treeGridGanttKeyboard_gridcontrol_content_table']/tbody/tr[5]/td[2]").click();
    await page.waitForTimeout(300);
    // Press CONTROL + SHIFT + ARROW_UP keys
    await page.keyboard.press('Control+Shift+ArrowUp');
    await page.waitForTimeout(500);
    // Screenshot validation - Keyboard Collapse Row
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('274-Focus on milestone task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/keyboardinteraction');
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("//*[@id='treeGridGanttKeyboard_gridcontrol_content_table']/tbody/tr[4]/td[6]").click();
    await page.waitForTimeout(300);
    // Press TAB key
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    // Screenshot validation - Focus on milestone task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('276-initial dependency', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/predecessor');
    await page.waitForTimeout(500);
    // Screenshot validation - Initial dependency
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Drag and drop from top to bottom
    await page.mouse.move(787, 201);
    await page.mouse.move(1032, 237);
    await page.waitForTimeout(2000);
    // Screenshot validation - Top to bottom
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(1000);
    // Drag and drop from bottom to top
    await page.mouse.move(787, 201);
    await page.mouse.move(787, 238);
    await page.waitForTimeout(2000);
    // Screenshot validation - Bottom to top
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(1000);
});
test('277-Multiple Connectors Diagonally', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/predecessor');
    await page.waitForTimeout(500);
    // Drag and drop first element
    await page.locator("//*[@id='GanttPredecessor_chartContentBody']/tr[3]/td/div[2]/div[1]/div").dragTo(
        page.locator("//*[@id='GanttPredecessor_chartContentBody']/tr[4]/td/div[2]/div[1]/div")
    );
    await page.waitForTimeout(1000);
    // Drag and drop second element
    await page.locator("//*[@id='GanttPredecessor_chartContentBody']/tr[4]/td/div[2]/div[6]/div").dragTo(
        page.locator("//*[@id='GanttPredecessor_chartContentBody']/tr[6]/td/div[2]/div[6]/div")
    );
    await page.waitForTimeout(1000);
    // Drag and drop third element
    await page.locator("//*[@id='GanttPredecessor_chartContentBody']/tr[6]/td/div[2]/div[1]/div").dragTo(
        page.locator("//*[@id='GanttPredecessor_chartContentBody']/tr[7]/td/div[2]/div[1]/div")
    );
    await page.waitForTimeout(1000);
    // Compare screen
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(1000);
    // Drag and drop element
    await page.locator("//*[@id='GanttPredecessor_chartContentBody']/tr[2]/td/div[2]/div[1]/div").dragTo(
        page.locator("//*[@id='GanttPredecessor_chartContentBody']/tr[8]/td/div[2]/div[1]")
    );
    await page.waitForTimeout(500);
    // Compare screen
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Drag and drop element
    await page.locator("//*[@id='GanttPredecessor_chartContentBody']/tr[2]/td/div[2]/div[3]/div").dragTo(
        page.locator("//*[@id='GanttPredecessor_chartContentBody']/tr[8]/td/div[2]/div[3]/div")
    );
    await page.waitForTimeout(1000);
    // Compare screen- Multiple Connectors Diagonally
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('280-TEST-32152 cancelling taskname in dependency add dialog', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click add button
    await page.locator("#GanttEditing_add").click();
    await page.waitForTimeout(1000);
    // Click second tab
    await page.locator("(//div[@class='e-toolbar-item e-template e-ileft'])[1]").click();
    await page.waitForTimeout(600);
    // Click add button in dependency tab
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(400);
    // Send keys to navigate
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    // Compare screen- cancelling taskname in dependency add dialog
    expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('281-TEST-32152 Add record with dependency', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click add button
    await page.locator("#GanttEditing_add").click();
    await page.waitForTimeout(1000);
    // Click second tab
    await page.locator("(//div[@class='e-toolbar-item e-template e-ileft'])[1]").click();
    await page.waitForTimeout(600);
    // Click add button in dependency tab
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(600);
    // Send keys to navigate
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.locator("//*[@id='GanttEditing_dialog']/div[4]/button[1]").click();
    await page.waitForTimeout(1000);
    // Compare screen- Add record with dependency
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('282-Load GanttRemoteData', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/GanttRemoteData');
    await page.waitForTimeout(500);
    // Compare screen
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click add button
    await page.locator("(//span[contains(@class,'add')])[1]").click();
    await page.waitForTimeout(500);
    // Click save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(800);
    // Compare screen- Load GanttRemoteData
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('283-perform delete action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/GanttRemoteData');
    await page.waitForTimeout(500);
    // Click element to delete
    await page.locator("//*[@id='GanttRemotedata_chartContentBody']/tr[3]/td/div[2]/div[3]/div").click();
    await page.waitForTimeout(300);
    // Click delete button
    await page.locator("#GanttRemotedata_delete").click();
    await page.waitForTimeout(500);
    // Confirm delete
    await page.locator("(//button[text()='OK'])[1]").click();
    await page.waitForTimeout(400);
    // Compare screen- perform delete action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('284-changing child task name using edit action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/GanttRemoteData');
    await page.waitForTimeout(500);
    // Click element to edit
    await page.locator("//*[@id='treeGridGanttRemotedata_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(300);
    // Click add button
    await page.locator("#GanttRemotedata_add").click();
    await page.waitForTimeout(1000);
    // Click and clear task name
    await page.locator("//*[@id='TaskName']").click();
    await page.waitForTimeout(500);
    await page.locator("//*[@id='TaskName']").fill('');
    await page.waitForTimeout(200);
    // Click save button
    await page.locator("//*[@id='GanttRemotedata_dialog']/div[4]/button[1]").click();
    await page.waitForTimeout(400);
    // Click to refresh view
    await page.locator('//*[@id="treeGridGanttRemotedata_gridcontrol_content_table"]/tbody/tr[1]/td[2]').click();
    await page.waitForTimeout(200);
    // Compare screen- changing child task name using edit action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('285-changing child start date using edit action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/GanttRemoteData');
    await page.waitForTimeout(500);
    // Click element to edit
    await page.locator("//*[@id='treeGridGanttRemotedata_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(300);
    // Click add button
    await page.locator("#GanttRemotedata_add").click();
    await page.waitForTimeout(1000);
    // Enter new start date
    await page.locator("//*[@id='StartDate']").fill("03/07/2021");
    await page.waitForTimeout(300);
    // Click save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Compare screen- changing child start date using edit action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('286-changing duration using edit action', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/GanttRemoteData');
    await page.waitForTimeout(500);
    // Click element to edit
    await page.locator("//*[@id='treeGridGanttRemotedata_gridcontrol_content_table']/tbody/tr[4]/td[4]").click();
    await page.waitForTimeout(200);
    // Click add button
    await page.locator("#GanttRemotedata_add").click();
    await page.waitForTimeout(500);
    // Enter new duration
    await page.locator("//*[@id='Duration']").fill("2 days");
    await page.waitForTimeout(300);
    // Click save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Click to refresh view
    await page.locator('//*[@id="treeGridGanttRemotedata_gridcontrol_content_table"]/tbody/tr[1]/td[2]').click();
    await page.waitForTimeout(400);
    // Compare screen- changing duration using edit action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('287-Changing Taskname Using Cell Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/GanttRemoteData');
    await page.waitForTimeout(500);
    // Double click to edit task name
    await page.locator("//*[@id='treeGridGanttRemotedata_gridcontrol_content_table']/tbody/tr[4]/td[2]").dblclick();
    await page.waitForTimeout(300);
    // Click and clear task name
    await page.locator("//*[@id='DataItem___TaskName']").click();
    await page.locator("//*[@id='DataItem___TaskName']").fill('');
    await page.waitForTimeout(400);
    // Enter new task name
    await page.locator("//*[@id='DataItem___TaskName']").fill("New Value");
    await page.waitForTimeout(300);
    // Click update button
    await page.locator("#GanttRemotedata_update").click();
    await page.waitForTimeout(500);
    // Screenshot validation- Changing Taskname Using Cell Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('288-Changing Startdate Using Cell Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/GanttRemoteData');
    await page.waitForTimeout(500);
    // Double click to edit start date
    await page.locator("//*[@id='treeGridGanttRemotedata_gridcontrol_content_table']/tbody/tr[4]/td[3]").dblclick();
    await page.waitForTimeout(300);
    // Click and clear start date
    await page.locator("//*[@id='DataItem___StartDate']").click();
    await page.waitForTimeout(100);
    await page.locator("//*[@id='DataItem___StartDate']").press('Control+a');
    await page.waitForTimeout(300);
    await page.locator("//*[@id='DataItem___StartDate']").press('Backspace');
    await page.waitForTimeout(300);
    // Enter new start date
    await page.locator("//*[@id='DataItem___StartDate']").fill("03/08/2021");
    await page.waitForTimeout(300);
    // Click update button
    await page.locator("#GanttRemotedata_update").click();
    await page.waitForTimeout(500);
    // Screensot validation - Changing Startdate Using Cell Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('289-Progress Resize Left', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/GanttRemoteData');
    await page.waitForTimeout(500);
    // Perform mouse down action
    await page.locator("//*[@id='GanttRemotedata_chartContentBody']/tr[6]/td/div[2]/div[4]").hover();
    await page.mouse.down();
    await page.mouse.move(0, 30);
    await page.waitForTimeout(3000);
    await page.mouse.up();
    await page.waitForTimeout(3000);
    // Screenshot validation - Progress Resize Left
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('290-initial reorder', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/reorder');
    await page.waitForTimeout(500);
    // Compare screen
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click button to reorder columns
    await page.locator("#Button1").click();
    await page.waitForTimeout(1000);
    // Compare screen
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform column reorder
    await page.locator("//*[@id='treeGridGanttReaorder_gridcontrol_header_table']/thead/tr/th[4]").hover();
    await page.mouse.down();
    await page.mouse.move(858, 100);
    await page.mouse.move(658, 100);
    await page.mouse.move(572, 100);
    await page.waitForTimeout(1000);
    // await page.locator("//*[@id='treeGridGanttReaorder_gridcontrol_header_table']/thead/tr/th[3]").hover();
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Compare screen
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform duration reorder
    await page.locator("//*[@id='treeGridGanttReaorder_gridcontrol_header_table']/thead/tr/th[2]").hover();
    await page.mouse.down();
    await page.mouse.move(317, 100);
    await page.mouse.move(217, 100);
    await page.mouse.move(80, 100);
    await page.waitForTimeout(1000);
    //await page.locator("//*[@id='treeGridGanttReaorder_gridcontrol_header_table']/thead/tr/th[1]").hover();
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Compare screen
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Perform duration move to last column
    const src = page.locator("//*[@id='treeGridGanttReaorder_gridcontrol_header_table']/thead/tr/th[1]");
    const dst = page.locator("//*[@id='treeGridGanttReaorder_gridcontrol_header_table']/thead/tr/th[5]");
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
    // await page.locator("//*[@id='treeGridGanttReaorder_gridcontrol_header_table']/thead/tr/th[1]").hover();
    // await page.mouse.down();
    // await page.mouse.move(5, 5);
    // await page.waitForTimeout(1000);
    // await page.locator("//*[@id='treeGridGanttReaorder_gridcontrol_header_table']/thead/tr/th[5]").hover();
    // await page.waitForTimeout(1000);
    // await page.mouse.up();
    await page.waitForTimeout(1000);
    // Compare screen
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click button to reorder single column
    await page.locator("#Button2").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-initial reorder
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('291-initializing splitter', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/splitter');
    await page.waitForTimeout(1000);
    // Screenshot validation- initializing splitter
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Perform splitter resize
    await page.locator("(//div[contains(@class,'e-resizable-split-bar')])[1]").hover();
    await page.mouse.down();
    await page.mouse.move(390, 10);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(1500);
    // Screenshot validation- splitter resize
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('292-taskid resize', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/splitter');
    await page.waitForTimeout(500);
    // Perform taskid resize
    await page.locator("(//div[contains(@class,'e-rcursor')])[1]").hover();
    await page.mouse.down();
    await page.mouse.move(20, 10);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation- taskid resize
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('294-name resize', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/splitter');
    await page.waitForTimeout(500);
    // Perform name resize
    await page.locator("(//div[contains(@class,'e-rcursor')])[2]").hover();
    await page.mouse.down();
    await page.mouse.move(40, 10);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation- name resize
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('295-startdate resize', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/splitter');
    await page.waitForTimeout(500);
    // Perform startdate resize
    await page.locator("(//div[contains(@class,'e-rhandler e-rcursor')])[3]").hover();
    await page.mouse.down();
    await page.mouse.move(-20, 10);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation- startdate resize
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('296-enddate resize', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/splitter');
    await page.waitForTimeout(500);
    // Perform enddate resize
    await page.locator("(//div[contains(@class,'e-rhandler e-rcursor')])[4]").hover();
    await page.mouse.down();
    await page.mouse.move(-30, 10);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation- enddate resize
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('297-duration resize', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/splitter');
    await page.waitForTimeout(500);
    // Perform duration resize
    await page.locator("(//div[contains(@class,'e-rcursor')])[5]").hover();
    await page.mouse.down();
    await page.mouse.move(20, 10);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation- duration resize
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
// Dynamic splitter positions
test('298-Splitter Position ChartView', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/splitter');
    await page.waitForTimeout(500);
    // Click ChartView button
    await page.locator("(//button[text()='ChartView'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation-chart view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click GridView button
    await page.locator("(//button[text()='GridView'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation-Grid view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click DefaultView button
    await page.locator("(//button[text()='DefaultView'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation-Default view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click SplitterPosition button
    await page.locator("(//button[text()='SplitterPosition'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation- Splitter Position ChartView
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
// Collapsible
test('299-Callapsible Splitter icon check', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/splitter');
    await page.waitForTimeout(500);
    // Perform collapsible splitter icon check
    await page.locator("//*[@id='Ganttsplitter_Gantt_Splitter']/div[3]").hover();
    await page.mouse.down();
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation- Callapsible Splitter icon check
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(1000);
    // Click to collapse Gantt side view
    await page.locator("//button[@class='e-navigate-arrow e-arrow-right']").click();
    await page.waitForTimeout(1000);
    // Screenshot validation- Callapsible Splitter icon check
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(1000);
    // Click to expand Gantt side view
    await page.locator("//button[@class='e-navigate-arrow e-arrow-left']").click();
    await page.waitForTimeout(1000);
    // Screenshot validation- Callapsible Splitter icon check
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('300-Splitter after window resize', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/splitter');
    await page.waitForTimeout(500);
    // Perform window resize actions
    await page.locator("//*[@id='Ganttsplitter_Gantt_Splitter']/div[3]").click();
    await page.waitForTimeout(500);
    await page.setViewportSize({ width: 800, height: 600 });
    await page.waitForTimeout(1000);
    await page.setViewportSize({ width: 1600, height: 1200 });
    await page.locator("//*[@id='Ganttsplitter_Gantt_Splitter']/div[3]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation- Splitter after window resize
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('301-Changing splitter dynamically using pixel', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/splitter');
    await page.waitForTimeout(500);
    // Click SplitterPixel button
    await page.locator("(//button[text()='SplitterPixel'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation- Changing splitter dynamically using pixel
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('307-Splitter resizing after chart view', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/splitter');
    await page.waitForTimeout(500);
    // Click ChartView button
    await page.locator("(//button[text()='ChartView'])").click();
    await page.waitForTimeout(500);
    // Click SplitterPixel button
    await page.locator("(//button[text()='SplitterPixel'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation- Splitter resizing after chart view
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('308-Splitter resizing after grid view', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/splitter');
    await page.waitForTimeout(500);
    // Click GridView button
    await page.locator("(//button[text()='GridView'])").click();
    await page.waitForTimeout(500);
    // Click SplitterPixel button
    await page.locator("(//button[text()='SplitterPixel'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation- Splitter resizing after grid view
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('309-initial resource', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Resources');
    await page.waitForTimeout(500);
    // Locator for the Gantt chart element
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click the add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dependency tab
    await page.locator("(//div[@class='e-tab-text'])[2]").click();
    await page.waitForTimeout(600);
    // Click the second presentation
    await page.locator("(//div[@role='presentation'])[2]").click();
    await page.waitForTimeout(400);
    // Press Tab key twice
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Space');
    await page.waitForTimeout(300);
    // Press Arrow Down key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Space');
    await page.waitForTimeout(200);
    // Click the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation - resource Adding
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('310-resource adding Cell Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Resources');
    await page.waitForTimeout(500);
    // Locator for the cell to double-click
    await page.locator("(//td[contains(@class,'rowcell')])[16]").dblclick();
    await page.waitForTimeout(300);
    // Click the multi-select wrapper
    await page.locator("(//span[contains(@class,'e-input-group-icon')])[1]").click();
    await page.waitForTimeout(500);
    // Click the first list item
    await page.locator("(//li[@class='e-list-item'])[1]").click();
    await page.waitForTimeout(500);
    // Click the cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(500);
    // Screen validation- resource adding Cell Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('311-resource Work Edit Cell', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/Resources');
    await page.waitForTimeout(500);
    // Locator for the cell to double-click
    await page.locator("(//td[contains(@class,'rowcell')])[23]").dblclick();
    await page.waitForTimeout(300);
    // Click the Work input field
    await page.locator('#DataItem___Work').click();
    await page.waitForTimeout(500);
    // Press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    // Press Backspace to delete the text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    // Type '76' into the Work input field
    await page.locator('#DataItem___Work').fill('76');
    await page.waitForTimeout(300);
    // Click the update button
    await page.locator("(//span[contains(@class,'update')])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation- resource Work Edit Cell
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('312-Passing Null Resource Cell edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Resources');
    await page.waitForTimeout(500);
    // Locator for the cell to double-click
    await page.locator("(//td[contains(@class,'rowcell')])[16]").dblclick();
    await page.waitForTimeout(300);
    // Click the update button
    await page.locator("(//span[contains(@class,'update')])[1]").click();
    await page.waitForTimeout(500);
    // Screen validation - Passing Null Resource Cell edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('313-Change in Work Fixed Work', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Resources');
    await page.waitForTimeout(500);
    // Locator for the cell to double-click
    await page.locator("(//td[contains(@class,'rowcell')])[31]").dblclick();
    await page.waitForTimeout(300);
    // Type '26' into the Work input field
    await page.locator('#DataItem___Work').fill('26');
    await page.waitForTimeout(300);
    // Click the update button
    await page.locator("(//span[contains(@class,'update')])[1]").click();
    await page.waitForTimeout(500);
    // Screen validation - Change in Work Fixed Work
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('314-Change in Resource Unit Fixed Work', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/Resources');
    await page.waitForTimeout(500);
    // Locator for the cell to double-click
    await page.locator('//*[@id="GanttResources_chartContentBody"]/tr[2]/td/div[2]/div[3]/div').dblclick();
    await page.waitForTimeout(500);
    // Click the second tab
    await page.locator("(//div[@class='e-toolbar-item e-template e-ileft e-active'])[1]").click();
    await page.waitForTimeout(500);
    // Screen validation - Change in Resource Unit Fixed Work
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('315-Changes in work Fixed Duration', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/Resources');
    await page.waitForTimeout(500);
    // Locator for the cell to double-click
    await page.locator("(//td[contains(@class,'rowcell')])[31]").dblclick();
    await page.waitForTimeout(300);
    // Type '76' into the Work input field
    await page.locator('#DataItem___Work').fill('76');
    await page.waitForTimeout(300);
    // Click the update button
    await page.locator("(//span[contains(@class,'update')])[1]").click();
    await page.waitForTimeout(500);
    // Click the duration field to update
    await page.locator("(//td[contains(@class,'rowcell')])[28]").click();
    await page.waitForTimeout(300);
    // Screen validation - Changes in work Fixed Duration
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('316-Changes in work Fixed Work', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/Resources');
    await page.waitForTimeout(500);
    // Locator for the cell to double-click
    await page.locator("(//div[contains(@class,'gantt-child')])[9]").dblclick();
    await page.waitForTimeout(500);
    // Click the Work input field
    await page.locator('#Work').click();
    await page.waitForTimeout(100);
    // Press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(300);
    // Press Backspace to delete the text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(200);
    // Type '70' into the Work input field
    await page.locator('#Work').fill('70');
    await page.waitForTimeout(400);
    // Click the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screen validation - Changes in work Fixed Work
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('317-Change in Duration Fixed Unit', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/Resources');
    await page.waitForTimeout(500);
    // Locator for the cell to double-click
    await page.locator("(//div[contains(@class,'gantt-child')])[11]").dblclick();
    await page.waitForTimeout(1000);
    // Click the Duration field
    await page.locator("(//span[contains(@class,'e-input-group')])[9]").click();
    await page.waitForTimeout(300);
    // Press Arrow Down and Enter keys
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    // Double-click the Duration input field
    await page.locator('#Duration').dblclick();
    await page.waitForTimeout(300);
    // Click the Duration input field
    await page.locator('#Duration').click();
    await page.waitForTimeout(200);
    // Clear the Duration input field
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    // Press Backspace to delete the text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(300);
    // Type '10 Days' into the Duration input field
    await page.locator('#Duration').fill('10 Days');
    await page.waitForTimeout(400);
    // Click the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screen validation - Change in Duration Fixed Unit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('318-Changes in work Fixed Unit', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/Resources');
    await page.waitForTimeout(500);
    // Locator for the cell to double-click
    await page.locator("(//div[contains(@class,'gantt-child')])[11]").dblclick();
    await page.waitForTimeout(1000);
    // Type '70' into the Work input field
    await page.locator('#Work').fill('70');
    await page.waitForTimeout(400);
    // Click the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screen validation - Changes in work Fixed Unit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('320-Adding Task Fixed Duration', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/Resources');
    await page.waitForTimeout(500);
    // Click the add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    // Click the Duration field
    await page.locator("(//span[contains(@class,'e-input-group')])[9]").click();
    await page.waitForTimeout(300);
    // Press Arrow Down and Enter keys
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(200);
    // Click the task name field
    await page.locator("//*[@id='GanttResourcesGeneralTabContainer']/div[2]/div").click();
    await page.waitForTimeout(200);
    // Double-click the Task Name input field
    await page.locator('#TaskName').dblclick();
    await page.waitForTimeout(200);
    // Clear the Task Name input field
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    // Press Backspace to delete the text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(300);
    // Type 'Fixed Duration' into the Task Name input field
    await page.locator('#TaskName').fill('Fixed Duration');
    await page.waitForTimeout(300);
    // Click the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screen validation - Adding Task Fixed Duration
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('321-Adding Task Fixed Unit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/Resources');
    await page.waitForTimeout(500);
    // Click the add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    // Click the Duration field
    await page.locator("(//span[contains(@class,'e-input-group')])[9]").click();
    await page.waitForTimeout(300);
    // Click the task name field
    await page.locator("//*[@id='GanttResourcesGeneralTabContainer']/div[2]/div").click();
    await page.waitForTimeout(200);
    // Double-click the Task Name input field
    await page.locator('#TaskName').dblclick();
    await page.waitForTimeout(200);
    // Click the Task Name input field
    await page.locator('#TaskName').click();
    await page.waitForTimeout(500);
    // Clear the Task Name input field
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    // Press Backspace to delete the text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(300);
    // Type 'Fixed Unit' into the Task Name input field
    await page.locator('#TaskName').fill('Fixed Unit');
    await page.waitForTimeout(300);
    // Click the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screen validation - Adding Task Fixed Unit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('322-Adding Task Fixed Work', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/Resources');
    await page.waitForTimeout(500);
    // Click the add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    // Click the Duration field
    await page.locator("(//span[contains(@class,'e-input-group')])[9]").click();
    await page.waitForTimeout(500);
    // Press Arrow Up and Enter keys
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Click the task name field
    await page.locator("//*[@id='GanttResourcesGeneralTabContainer']/div[2]/div").click();
    await page.waitForTimeout(500);
    // Type 'Fixed Work' into the Task Name input field
    await page.locator('#TaskName').fill('Fixed Work');
    await page.waitForTimeout(300);
    // Click the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screen validation - Adding Task Fixed Work
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('323-Dialog-edit resources for newly added record', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/Resources');
    await page.waitForTimeout(500);
    // Click the add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    // Click the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Locator for the cell to double-click
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").dblclick();
    await page.waitForTimeout(100);
    // Click the second tab
    await page.locator("(//div[@class='e-tab-text'])[2]").click();
    await page.waitForTimeout(600);
    // Click the second presentation div
    await page.locator("(//div[@role='presentation'])[2]").click();
    await page.waitForTimeout(400);
    // Press Tab key twice and Space key
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    await page.keyboard.press('Space');
    await page.waitForTimeout(500);
    // Press Arrow Down key and Space key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Space');
    await page.waitForTimeout(200);
    // Click the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screen validation - dialog edit resources for newly added record
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('324-Editing unit cell', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/Resources');
    await page.waitForTimeout(500);
    // Click the add button
    await page.locator("(//span[contains(@class,'add')])[1]").click();
    await page.waitForTimeout(1000);
    // Click the second tab
    await page.locator("(//div[@class='e-tab-text'])[2]").click();
    await page.waitForTimeout(500);
    // Click the Save button in the dialog
    await page.locator("//*[@id='GanttResources_dialog']/div[4]/button[1]").click();
    await page.waitForTimeout(1000);
    // Screen validation - Editing unit cell
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('325-Editing unit cell through key navigation', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/Resources');
    await page.waitForTimeout(500);
    // Click the add button
    await page.locator("(//span[contains(@class,'add')])[1]").click();
    await page.waitForTimeout(1000);
    // Click the second tab
    await page.locator("(//div[@class='e-tab-text'])[2]").click();
    await page.waitForTimeout(800);
    // Press Tab key
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    // Click the Save button in the dialog
    await page.locator("//*[@id='GanttResources_dialog']/div[4]/button[1]").click();
    await page.waitForTimeout(1000);
    // Screen validation - Editing unit cell through key navigation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('326-initial load RTL', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Click the add button
    await page.locator('#GanttSelfdata_add').click();
    await page.waitForTimeout(500);
    // Click the second tab
    await page.locator("(//div[@class='e-tab-text'])[2]").click();
    await page.waitForTimeout(500);
    // Click the third tab
    await page.locator("(//div[@class='e-tab-text'])[3]").click();
    await page.waitForTimeout(500);
    // Click the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Mouse down on the taskbar
    await page.mouse.down
    await page.locator("//*[@id='GanttSelfdata_chartContentBody']/tr[1]/td/div[2]/div[3]/div").click();
    await page.waitForTimeout(2000);
    // Screen validation - Add new record and checking tooltip
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('327-Editing record through dialog edit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Locator for the cell to double-click
    await page.locator("//*[@id='GanttSelfdata_chartContentBody']/tr[3]/td/div[2]/div[3]/div").dblclick();
    await page.waitForTimeout(1000);
    // Type 'Edited' into the Task Name input field
    await page.locator('#TaskName').fill('Edited');
    await page.waitForTimeout(300);
    // Click the Start Date input field
    await page.locator('#StartDate').click();
    await page.waitForTimeout(300);
    // Clear the Start Date input field
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    // Press Backspace to delete the text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    // Type '4/5/2019' into the Start Date input field
    await page.locator('#StartDate').fill('4/5/2019');
    await page.waitForTimeout(300);
    // Click the Progress input field
    await page.locator('#Progress').click();
    await page.waitForTimeout(300);
    // Clear the Progress input field
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    // Press Backspace to delete the text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(300);
    // Type '60' into the Progress input field
    await page.locator('#Progress').fill('60');
    await page.waitForTimeout(300);
    // Click the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    // Screen validation - Editing taskname through cell-edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('328-Editing dependency dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Locator for the cell to double-click
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[3]").dblclick();
    await page.waitForTimeout(1000);
    // Click the second tab
    await page.locator("(//div[@class='e-tab-text'])[2]").click();
    await page.waitForTimeout(500);
    // Double-click the dependency cell
    await page.locator("(//td[text()='2-Defining the product usage'])[1]").dblclick();
    await page.waitForTimeout(1000);
    // Click the dependency dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    // Press Arrow Down and Enter keys
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation- Editing dependency dialog
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('329-changing duration using edit action', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Click the cell to edit
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(500);
    // Click the edit button
    await page.locator('#GanttSelfdata_edit').click();
    await page.waitForTimeout(500);
    // Click the Duration input field
    await page.locator('#Duration').click();
    await page.waitForTimeout(500);
    // Clear the Duration input field
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    // Press Backspace to delete the text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    // Type '2 days' into the Duration input field
    await page.locator('#Duration').fill('2 days');
    await page.waitForTimeout(300);
    // Click the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screen validation - changing duration using edit action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('330-Changing child Taskname Using Cell Edit', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Double-click the cell to edit
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[8]/td[2]").dblclick();
    await page.waitForTimeout(300);
    // Click the Task Name input field
    await page.locator('#DataItem___TaskName').click();
    // Clear the Task Name input field
    await page.locator('#DataItem___TaskName').fill('');
    await page.waitForTimeout(300);
    // Type 'New Value' into the Task Name input field
    await page.locator('#DataItem___TaskName').fill('New Value');
    await page.waitForTimeout(300);
    // Click the update button
    await page.locator('#GanttSelfdata_update').click();
    await page.waitForTimeout(500);
    // Screen validation - Changing child Taskname Using Cell Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('331-Changing child Startdate Using Cell Edit', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Double-click the cell to edit
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[2]/td[3]").dblclick();
    await page.waitForTimeout(300);
    // Click the Start Date input field
    await page.locator('#DataItem___StartDate').click();
    await page.waitForTimeout(300);
    // Press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(300);
    // Press Backspace to delete the text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    // Type '4/8/2019' into the Start Date input field
    await page.locator('#DataItem___StartDate').fill('4/8/2019');
    await page.waitForTimeout(300);
    // Click the update button
    await page.locator('#GanttSelfdata_update').click();
    await page.waitForTimeout(500);
    // Screen validation - Changing child Startdate Using Cell Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('332-Changing child EndDate Using Cell Edit', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Double-click the cell to edit
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[3]/td[4]").dblclick();
    await page.waitForTimeout(300);
    // Click the End Date input field
    await page.locator('#DataItem___EndDate').click();
    // Clear the End Date input field
    await page.locator('#DataItem___EndDate').fill('');
    await page.waitForTimeout(300);
    // Type '4/10/2019' into the End Date input field
    await page.locator('#DataItem___EndDate').fill('4/10/2019');
    await page.waitForTimeout(300);
    // Press Enter to save the changes
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screen validation - Changing child EndDate Using Cell Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('333-Changing child Progress Using Cell Edit', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Double-click the cell to edit
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[2]/td[6]").dblclick();
    await page.waitForTimeout(300);
    // Click the Progress input field
    await page.locator('#DataItem___Progress').click();
    // Clear the Progress input field
    await page.locator('#DataItem___Progress').fill('');
    await page.waitForTimeout(300);
    // Type '100' into the Progress input field
    await page.locator('#DataItem___Progress').fill('100');
    await page.waitForTimeout(300);
    // Press Enter to save the changes
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screen validation - Changing child Progress Using Cell Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('334-Changing child dependency Using Cell Edit', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Double-click the cell to edit
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[4]/td[7]").dblclick();
    await page.waitForTimeout(300);
    // Click the Predecessor input field
    await page.locator('#DataItem___Predecessor').click();
    // Clear the Predecessor input field
    await page.locator('#DataItem___Predecessor').fill('');
    await page.waitForTimeout(300);
    // Type '2FF' into the Predecessor input field
    await page.locator('#DataItem___Predecessor').fill('2FF');
    await page.waitForTimeout(300);
    // Click the update button
    await page.locator('#GanttSelfdata_update').click();
    await page.waitForTimeout(500);
    // Screen validation - Changing child dependency Using Cell Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('335-Editing notes column Using Cell Edit', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Double-click the cell to edit
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[1]/td[8]").dblclick();
    await page.waitForTimeout(300);
    // Press Tab key  and type 'Updated notes'
    await page.waitForTimeout(300);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    await page.keyboard.type('Updated notes');
    await page.waitForTimeout(500);
    // Click the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screen validation - Editing notes column Using Cell Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('336-Changing Taskname Using Cell Edit of Parent Tasks', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Double-click the cell to edit
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[1]/td[2]").dblclick();
    await page.waitForTimeout(300);
    // Click the Task Name input field
    await page.locator('#DataItem___TaskName').click();
    // Clear the Task Name input field
    await page.locator('#DataItem___TaskName').fill('');
    await page.waitForTimeout(300);
    // Type 'Edited parent task name' into the Task Name input field
    await page.locator('#DataItem___TaskName').fill('Edited parent task name');
    await page.waitForTimeout(300);
    // Click the update button
    await page.locator('#GanttSelfdata_update').click();
    await page.waitForTimeout(500);
    // Screen validation - Changing Taskname Using Cell Edit of Parent Tasks
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('337-Changing Startdate Using Cell Edit of Parent Tasks', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Double-click the cell to edit
    await page.locator("(//td[contains(@class,'rowcell')])[3]").dblclick();
    await page.waitForTimeout(300);
    // Type '4/9/2019' into the Start Date input field
    await page.locator('#DataItem___StartDate').fill('4/9/2019');
    await page.waitForTimeout(200);
    // Click the update button
    await page.locator('#GanttSelfdata_update').click();
    await page.waitForTimeout(500);
    // Screen validation - Changing Startdate Using Cell Edit of Parent Tasks
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('338-Changing Progress Using Cell Edit of Parent Tasks', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Double-click the cell to edit
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[1]/td[6]").dblclick();
    await page.waitForTimeout(300);
    // Screen validation - Changing Progress Using Cell Edit of Parent Tasks
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('339-Cancel Taskname Using Cell Edit Keyboard Interactions', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Double-click the cell to edit
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[2]/td[2]").dblclick();
    await page.waitForTimeout(300);
    // Click the Task Name input field
    await page.locator('#DataItem___TaskName').click();
    // Clear the Task Name input field
    await page.locator('#DataItem___TaskName').fill('');
    await page.waitForTimeout(300);
    // Type 'New Value' into the Task Name input field
    await page.locator('#DataItem___TaskName').fill('New Value');
    await page.waitForTimeout(300);
    // Press Escape to cancel the edit
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
    // Screen validation - Cancel Taskname Using Cell Edit Keyboard Interactions
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('340-Insert Add Action', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Click the cell to select it
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[1]/td[2]").click();
    await page.waitForTimeout(300);
    // Press Insert to add a new record
    await page.keyboard.press('Insert');
    await page.waitForTimeout(1000);
    // Screen validation - Insert Add Action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('341-Delete child record through keyboard', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Click the cell to select it
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(300);
    // Press Delete to delete the record
    await page.keyboard.press('Delete');
    await page.waitForTimeout(300);
    // Confirm the deletion
    await page.locator("(//button[text()='OK'])[1]").click();
    await page.waitForTimeout(500);
    // Screen validation - Delete child record
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('342-Delete parent record through keyboard', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Click the cell to select it
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[1]/td[2]").click();
    await page.waitForTimeout(200);
    // Press Delete to delete the record
    await page.keyboard.press('Delete');
    await page.waitForTimeout(300);
    // Confirm the deletion
    await page.locator("(//button[text()='OK'])[1]").click();
    await page.waitForTimeout(500);
    // Screen validation - Delete parent record
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('343-Close after Open Edit Dialog', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Double-click the cell to open the edit dialog
    await page.locator("//*[@id='GanttSelfdata_chartContentBody']/tr[2]/td/div[2]/div[3]/div").dblclick();
    await page.waitForTimeout(300);
    // Click the Close button in the dialog
    await page.locator("(//button[contains(@aria-label,'Close')])[1]").click();
    await page.waitForTimeout(500);
    // Click the cell to select it
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[2]/td[1]").click();
    await page.waitForTimeout(1000);
    // Screen validation - Close after Open Edit Dialog
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('344-Cancel after Open Edit Dialog', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Double-click the cell to open the edit dialog
    await page.locator("//*[@id='GanttSelfdata_chartContentBody']/tr[2]/td/div[2]/div[3]/div").dblclick();
    await page.waitForTimeout(300);
    // Click the Cancel button in the dialog
    await page.locator("(//button[text()='Cancel'])[1]").click();
    await page.waitForTimeout(500);
    // Screen validation - Cancel after Open Edit Dialog
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('345-Delete confirmation dialog', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Click the cell to select it
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(300);
    // Click the delete button
    await page.locator('#GanttSelfdata_delete').click();
    // Screen validation - Delete confirmation dialog
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click the Cancel button in the confirmation dialog
    await page.locator("(//button[text()='Cancel'])[1]").click();
    await page.waitForTimeout(500);
    // Screen validation - Delete confirmation dialog cancel
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('346-Dragging parent task right', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Drag and drop the parent task
    await page.locator("//*[@id='GanttSelfdata_chartContentBody']/tr[1]/td/div[2]/div[2]/div").click();
    await page.mouse.down();
    await page.mouse.move(100, 0);
    await page.waitForTimeout(1000);
    // Mouse up to complete the drag
    await page.mouse.up();
    await page.waitForTimeout(300);
    // Click the cell to select it
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[2]/td[2]").click();
    await page.waitForTimeout(300);
    // Screen validation - Dragging parent task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('347-Dragging child task right', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Drag and drop the child task
    await page.locator("//*[@id='GanttSelfdata_chartContentBody']/tr[4]/td/div[2]/div[3]/div").click();
    await page.mouse.move(100, 0);
    await page.waitForTimeout(1000);
    // Mouse up to complete the drag
    await page.mouse.up();
    await page.waitForTimeout(300);
    // Click the cell to select it
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[2]/td[2]").click();
    await page.waitForTimeout(300);
    // Screen validation - Dragging child task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('348-Dragging milestone', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Drag and drop the milestone
    await page.locator("//*[@id='GanttSelfdata_chartContentBody']/tr[5]/td/div[2]/div[2]/div").click();
    await page.mouse.move(50, 0);
    await page.waitForTimeout(1000);
    // Mouse up to complete the drag
    await page.mouse.up();
    await page.waitForTimeout(300);
    // Click the cell to select it
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[2]/td[2]").click();
    await page.waitForTimeout(300);
    // Screen validation - Dragging milestone
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('349-rightside-taskbar editing', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Mouse down on the taskbar
    await page.locator("//*[@id='GanttSelfdata_chartContentBody']/tr[2]/td/div[2]/div[5]").click();
    await page.mouse.down();
    await page.waitForTimeout(300);
    // Move the mouse to edit the taskbar
    await page.mouse.move(50, 0);
    await page.waitForTimeout(1000);
    // Mouse up to complete the edit
    await page.mouse.up();
    await page.waitForTimeout(300);
    // Click the cell to select it
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(300);
    // Screen validation - rightside-taskbar editing
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('350-leftside-taskbar editing', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Mouse down on the taskbar
    await page.mouse.down
    await page.locator("//*[@id='GanttSelfdata_chartContentBody']/tr[8]/td/div[2]/div[2]").click();
    await page.waitForTimeout(300);
    // Move the mouse to edit the taskbar
    await page.mouse.move(-40, 0);
    await page.waitForTimeout(1000);
    // Mouse up to complete the edit
    await page.mouse.up();
    await page.waitForTimeout(300);
    // Click the cell to select it
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(300);
    // Screen validation - leftside-taskbar editing
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('351-Left Dragging parent task', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Drag and drop the parent task
    await page.locator("//*[@id='GanttSelfdata_chartContentBody']/tr[7]/td/div[2]/div[2]/div").click();
    await page.mouse.move(-60, 0);
    await page.waitForTimeout(1000);
    // Click the cell to select it
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(300);
    // Screen validation - Left Dragging parent task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('352-Left Dragging Child task', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Drag and drop the child task
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").click();
    await page.mouse.move(-70, 0);
    await page.waitForTimeout(1000);
    // Click the cell to select it
    await page.locator("//*[@id='treeGridGanttSelfdata_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(300);
    // Screen validation - Left Dragging Child task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('353-Progress Resize Left', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Mouse down on the progress bar
    await page.mouse.down
    await page.locator("//*[@id='GanttSelfdata_chartContentBody']/tr[4]/td/div[2]/div[4]").click();
    await page.waitForTimeout(300);
    // Move the mouse to resize the progress bar
    await page.mouse.move(-50, 0);
    await page.waitForTimeout(1000);
    // Mouse up to complete the resize
    await page.mouse.up();
    await page.waitForTimeout(700);
    // Click the cell to select it
    await page.locator("//*[@id='GanttSelfdata_chartContentBody']/tr[2]").click();
    await page.waitForTimeout(500);
    // Screen validation - Progress Resize Left
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('354-Progress Resize Right', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Mouse down on the progress bar
    await page.mouse.down
    await page.locator("//*[@id='GanttSelfdata_chartContentBody']/tr[4]/td/div[2]/div[4]").click();
    await page.waitForTimeout(300);
    // Move the mouse to resize the progress bar
    await page.mouse.move(50, 0);
    await page.waitForTimeout(1000);
    // Mouse up to complete the resize
    await page.mouse.up();
    await page.waitForTimeout(700);
    // Click the cell to select it
    await page.locator("//*[@id='GanttSelfdata_chartContentBody']/tr[2]").click();
    await page.waitForTimeout(500);
    // Screen validation - Progress Resize Right
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('355-Dynamically change holidays', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Click the holidays button
    await page.locator('#holidays').click();
    await page.waitForTimeout(500);
    // Screen validation - Dynamically change holidays
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('357-Next timespan', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    // Click the next timespan button
    await page.locator('#GanttSelfdata_nexttimespan').click();
    await page.waitForTimeout(600);
    // Screen validation - Next timespan
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click the previous timespan button
    await page.locator('#GanttSelfdata_prevtimespan').click();
    await page.waitForTimeout(600);
    // Screen validation - Previous timespan
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('358-Top to bottom', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(1000);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left ')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left ')])[6]");
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
    await page.waitForTimeout(1200);
    //Screenshot validation-top to bottom the connector point is moved
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('359-Bottom to top', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(1000);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[8]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[1]");
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
    await page.waitForTimeout(1500);
    //Screenshot validation-Bottom to top the connector point is moved
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('360-Adding Connectors Finish to start', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left ')])[6]");
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
    //Screenshot validation-Adding Connectors Finish to start
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('361-Adding Connectors start to Finish', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left ')])[6]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[1]");
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
    //Screenshot validation-Adding Connectors start to Finish
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('362-Adding Milestone Predecessor End To End', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL');
    await page.waitForTimeout(500);
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[5]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[1]");
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
    //Screenshot validation-Adding Milestone Predecessor End To End
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('363-initial Timeline Load with RTL', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    //Screensot validation-Initial Timeline Load with RTL
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('364-Ensuring Unit Width with Low Value', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Unit Width input field
    await page.locator("(//span[contains(@class,'e-numeric')])[1]").click();
    await page.waitForTimeout(300);
    //double click the Unit Width input field
    await page.locator("#Unitwidht").dblclick();
    await page.waitForTimeout(400);
    //Type '02' into the Unit Width input field
    await page.locator("#Unitwidht").fill("02");
    await page.waitForTimeout(400);
    //Screenshot validtion-Ensuring Unit Width with Low Value
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('365-Ensuring Unit Width with Big Value', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Unit Width input field
    await page.locator("(//span[contains(@class,'e-numeric')])[1]").click();
    await page.waitForTimeout(300);
    //double click the Unit Width input field
    await page.locator("#Unitwidht").dblclick();
    await page.waitForTimeout(500);
    //Type '80' into the Unit Width input field
    await page.locator("#Unitwidht").fill("80");
    await page.waitForTimeout(500);
    //Screenshot validation-Ensuring Unit Width with Big Value
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('366-Ensuring Top Tier Unit year', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Top Tier Unit input field
    await page.locator("//*[@id='property']/tbody/tr[4]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowDown and Enter to select the year option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensuring Top Tier Unit year
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('367-Ensuring Top Tier Formt yyyy', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Top Tier Format input field
    await page.locator("//*[@id='property']/tbody/tr[5]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowDown and Enter keys
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensuring Top Tier Formt yyyy
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('368-Ensuring Bottom unit year', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Bottom unit year input field
    await page.locator("//*[@id='property']/tbody/tr[8]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowDown and Enter to select the year option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensuring Bottom unit year
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('369-Ensuring bottom tier format Jan\'18', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(1000);
    // Click the Bottom tier format input field
    await page.locator("//*[@id='property']/tbody/tr[9]/td[2]/div/span").click();
    await page.waitForTimeout(1000);
    // Press ArrowUp and Enter to select the Jan'18 option
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensuring bottom tier format Jan'18
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('370-Ensuring Top Tier Month With Format Jan 01, 2018', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Top Tier Unit input field
    await page.locator("//*[@id='property']/tbody/tr[4]/td[2]/div/span").click();
    await page.waitForTimeout(1000);
    // Press ArrowDown and Enter to select the month option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Click the Top Tier Format input field
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('371-initial Timeline Load with RTL', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    //Screenshot validation-Initial Timeline Load with RTL
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('372-Ensuring Unit Width with Low Value', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Unit Width input field
    await page.locator("(//span[contains(@class,'e-numeric')])[1]").click();
    await page.waitForTimeout(300);
    // Double-click the Unit Width input field
    await page.locator("#Unitwidht").dblclick();
    await page.waitForTimeout(1000);
    // Type '02' into the Unit Width input field
    await page.locator("#Unitwidht").fill("02");
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensuring Unit Width with Low Value
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('373-Ensuring Unit Width with Big Value', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Unit Width input field
    await page.locator("(//span[contains(@class,'e-numeric')])[1]").click();
    await page.waitForTimeout(300);
    // Double-click the Unit Width input field
    await page.locator("#Unitwidht").dblclick();
    await page.waitForTimeout(1000);
    // Type '80' into the Unit Width input field
    await page.locator("#Unitwidht").fill("80");
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensuring Unit Width with Big Value
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('374-Ensuring Top Tier Unit year', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Top Tier Unit input
    await page.locator("//*[@id='property']/tbody/tr[4]/td[2]/div/span").click();
    await page.waitForTimeout(1000);
    // Press ArrowDown and Enter to select the year option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensuring Top Tier Unit year
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('375-Ensuring Top Tier Formt yyyy', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Top Tier Format input field
    await page.locator("//*[@id='property']/tbody/tr[5]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowDown and Enter to select the yyyy option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensuring Top Tier Formt yyyy
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('376-Ensuring Bottom unit year', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Bottom unit year input field
    await page.locator("//*[@id='property']/tbody/tr[8]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowDown and Enter to select the year option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensuring Bottom unit year
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('377-Ensuring bottom tier format Jan\'18', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Bottom tier format input field
    await page.locator("//*[@id='property']/tbody/tr[9]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowUp and Enter to select the Jan'18 option
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensuring bottom tier format Jan'18
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('378-Ensuring Top Tier Month With Format Jan 01, 2018', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Top Tier Unit input field
    await page.locator("//*[@id='property']/tbody/tr[4]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowDown and Enter to select the month option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensuring Top Tier Month With Format Jan 01, 2018
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('379-Ensuring Top Tier Month With Format January', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Top Tier Format input field
    await page.locator("//*[@id='property']/tbody/tr[5]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowDown and Enter to select the January option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensuring Top Tier Month With Format January
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('380-Ensuring Bottom tier Month With format Jan', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Bottom tier format input field
    await page.locator("//*[@id='property']/tbody/tr[8]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowDown three times and Enter to select the Jan option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensuring Bottom tier Month With format Jan
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('381-Ensuring Bottom tier Month With format January', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Bottom tier format input field
    await page.locator("//*[@id='property']/tbody/tr[9]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowUp and Enter to select the January option
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Ensuring Bottom tier Month With format January
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('382-Ensuring top Tier Week With Format Jan 01, 2018', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Top Tier Format input field
    await page.locator("//*[@id='property']/tbody/tr[9]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowUp and Enter to select the Jan 01, 2018 option
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation-Ensuring top Tier Week With Format Jan 01, 2018
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('383-Ensuring top Tier week with Format Mon Jan 01, 19', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Top Tier Format input field
    await page.locator("//*[@id='property']/tbody/tr[4]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowDown three times and Enter to select the Mon Jan 01, 19 option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation-Ensuring top Tier week with Format Mon Jan 01, 19
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('384-Ensuring Bottom tier week', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Bottom tier format input field
    await page.locator("//*[@id='property']/tbody/tr[8]/td[2]/div/span").click();
    await page.waitForTimeout(1000);
    // Press ArrowDown three times and Enter to select the Mon Jan 01, 19 option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation-Ensuring Bottom tier week
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('386-Ensuring Bottom tier week with Format Jan 01, 2019', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Bottom tier format
    await page.locator("//*[@id='property']/tbody/tr[9]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowDown three times and Enter to select the Jan 01, 2019 option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation-Ensuring Bottom tier week with Format Jan 01, 2019
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('387-Ensuring Bottom tier week with Format Mon Jan 01, 19', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Bottom tier format input field
    await page.locator("//*[@id='property']/tbody/tr[9]/td[2]/div/span").click();
    await page.waitForTimeout(1000);
    // Press ArrowDown three times and Enter to select the Mon Jan 01, 19 option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation-Ensuring Bottom tier week with Format Mon Jan 01, 19
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('388-Ensuring Bottom tier week with Format Mon Jan 01', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Bottom tier format input field
    await page.locator("//*[@id='property']/tbody/tr[9]/td[2]/div/span").click();
    await page.waitForTimeout(1000);
    //Press ArrowDown three times and Enter to select the Mon Jan 01 option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation-Ensuring Bottom tier week with Format Mon Jan 01
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('389-Ensuring Top Tier Day with Format Mon', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Top Tier Format input field
    await page.locator("//*[@id='property']/tbody/tr[4]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowDown three times and Enter to select the Mon option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation-Ensuring Top Tier Day with Format Mon
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('390-Ensuring top Tier Day with Format M', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the top Tier Day format input field
    await page.locator("//*[@id='property']/tbody/tr[5]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowUp and Enter to select the M option
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring top Tier Day with Format M
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('391-Ensuring Top tier Day with Format 01', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(600);
    // Click the top Tier Day format input field
    await page.locator("//*[@id='property']/tbody/tr[5]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowDown twice and Enter to select the 01 option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Top tier Day with Format 01
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('392-Ensuring Bottom tier Day with Format Mon', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Bottom tier Day format input field
    await page.locator("//*[@id='property']/tbody/tr[9]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowDown and Enter to select the Mon option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Bottom tier Day with Format Mon
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('393-Ensuring Bottom tier Day with Format 01', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/RTL-Timeline');
    await page.waitForTimeout(500);
    // Click the Bottom tier Day format input field
    await page.locator("//*[@id='property']/tbody/tr[5]/td[2]/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowDown twice and Enter to select the 01 option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Bottom tier Day with Format 01
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('394-initializing search', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/search');
    await page.waitForTimeout(500);
    // Screenshot validation - Initial search
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('395-Searching text test', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/search');
    await page.waitForTimeout(500);
    // Enter text "test" in the search input field
    await page.locator("//input[contains(@class,'e-control e-textbox e-lib e-input')]").fill("test");
    await page.waitForTimeout(400);
    // Press Enter to search
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Searching text test
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('396-Searching text project', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/search');
    await page.waitForTimeout(500);
    // Enter text "project" in the search input field
    await page.locator("//input[contains(@class,'e-control e-textbox e-lib e-input')]").fill("project");
    await page.waitForTimeout(400);
    // Press Enter to search
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Searching text project
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('397-clear searching', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/search');
    await page.waitForTimeout(500);
    // Clear the search input field
    await page.locator("//input[contains(@class,'e-control e-textbox e-lib e-input')]").fill("");
    await page.waitForTimeout(400);
    // Press Enter to clear search
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Clear search
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('398-initializing selection', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Screenshot validation - Initial selection
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('399-Toggle as True', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Click the toggle selection input field
    await page.locator("//*[@id='property']/tbody/tr[1]/td[2]/td/div/span").click();
    await page.waitForTimeout(800);
    // Press ArrowUp and Enter to toggle selection as true
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Toggle as True
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('400-Toggle as True Select Row', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Click the row to select it
    await page.locator("//*[@id='treeGridGanttSelection_gridcontrol_content_table']/tbody/tr[2]/td[2]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Toggle as True Select Row
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('401-Toggle as True Un-Select Row', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Click the row to unselect it
    await page.locator("//*[@id='treeGridGanttSelection_gridcontrol_content_table']/tbody/tr[2]/td[2]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Toggle as True Un-Select Row
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('402-Select Row Dynamic Method', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Click the SelectRow button to select the row
    await page.locator("#SelectRow").click();
    await page.waitForTimeout(300);
    // Screenshot validation - Select Row Dynamic Method
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('403-Clear Selection Dynamic', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Click the ClearSelection button to clear the selection
    await page.locator("#ClearSelection").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Clear Selection Dynamic
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('404-Selection By clicking on from Gantt side', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Click the Gantt chart to select the row
    await page.locator("//*[@id='GanttSelection_chartContentBody']/tr[4]/td").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Selection By clicking on from Gantt side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('405-Row Multiselection dropdown select', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Click the Row Multiselection dropdown
    await page.locator("//*[@id='property']/tbody/tr[3]/td[2]/td/div/span").click();
    await page.waitForTimeout(500);
    // Press ArrowDown and Enter to select the option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Row Multiselection dropdown select
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('406-Tree Grid side Multiselection', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Hold down the Control key
    await page.keyboard.down('Control');
    await page.waitForTimeout(1000);
    // Click the rows to select them
    await page.locator("//*[@id='treeGridGanttSelection_gridcontrol_content_table']/tbody/tr[6]/td[2]").click();
    await page.locator("//*[@id='treeGridGanttSelection_gridcontrol_content_table']/tbody/tr[7]/td[2]").click();
    await page.waitForTimeout(1000);
    // Release the Control key
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    // Screenshot validation - Tree Grid side Multiselection
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('407-Toggle Row after Multiselection', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Hold down the Control key
    await page.keyboard.down('Control');
    await page.waitForTimeout(1000);
    // Click the row to toggle selection
    await page.locator("//*[@id='treeGridGanttSelection_gridcontrol_content_table']/tbody/tr[7]/td[2]").click();
    await page.waitForTimeout(300);
    // Release the Control key
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    // Screenshot validation - Toggle Row after Multiselection
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(400);
    // Clear selection
    await page.locator("#ClearSelection").click();
    await page.waitForTimeout(400);
});

test('408-Row Multiselection Dynamic', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Click the SelectRows button to select the rows
    await page.locator("#SelectRows").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Row Multiselection Dynamic
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('409-Cell selection Dropdown', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Click the Cell selection dropdown
    await page.locator("//*[@id='property']/tbody/tr[2]/td[2]/td/div/span").click();
    await page.waitForTimeout(400);
    // Press ArrowDown and Enter to select the option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(400);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Cell selection Dropdown
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('410-Cell selection', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Click the cell to select it
    await page.locator("//*[@id='treeGridGanttSelection_gridcontrol_content_table']/tbody/tr[4]/td[2]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Cell selection
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('411-Cell selection Dynamic', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Click the SelectCell button to select the cell
    await page.locator("#SelectCell").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Cell selection Dynamic
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('412-Multiple cell selection', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Hold down the Control key
    await page.keyboard.down('Control');
    await page.waitForTimeout(1000);
    // Click multiple cells to select them
    await page.locator('(//td[contains(@class,"rowcell")])[14]').click();
    await page.locator('(//td[contains(@class,"rowcell")])[21]').click();
    await page.locator('(//td[contains(@class,"rowcell")])[28]').click();
    await page.locator('(//td[contains(@class,"rowcell")])[33]').click();
    await page.locator('(//td[contains(@class,"rowcell")])[38]').click();
    await page.waitForTimeout(1000);
    // Release the Control key
    await page.keyboard.up('Control');
    await page.waitForTimeout(1000);
    // Screenshot validation - Multiple cell selection
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('414-Toggle Multiple cell selection', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Hold down the Control key
    await page.keyboard.down('Control');
    await page.waitForTimeout(1000);
    // Click the toggle selection input field
    await page.locator("//*[@id='property']/tbody/tr[1]/td[2]/td/div/span").click();
    await page.waitForTimeout(800);
    // Press ArrowUp and Enter to toggle selection
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Click multiple cells to select them
    await page.locator("//*[@id='treeGridGanttSelection_gridcontrol_content_table']/tbody/tr[5]/td[4]").click();
    await page.waitForTimeout(500);
    // Press ArrowUp and Enter to toggle selection
    await page.locator("//*[@id='treeGridGanttSelection_gridcontrol_content_table']/tbody/tr[6]/td[3]").click();
    await page.waitForTimeout(500);
    // Press ArrowUp and Enter to toggle selection
    await page.locator("//*[@id='treeGridGanttSelection_gridcontrol_content_table']/tbody/tr[7]/td[2]").click();
    await page.waitForTimeout(500);
    // Release the Control key
    await page.keyboard.up('Control');
    await page.waitForTimeout(400);
    // Clear selection
    await page.locator("#ClearSelection").click();
    await page.waitForTimeout(500);
    //Screenshot validation - Toggle Multiple cell selection
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('415-Cell Clear Selection', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Click the ClearSelection button to clear the selection
    await page.locator("#ClearSelection").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Cell Clear Selection
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('416-Allow Selection false dynamic', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Click the AllowSelection button to disable selection
    await page.locator("#AllowSelection").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Allow Selection false dynamic
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('417-Row selection in Allowselection false', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Click the row to attempt selection
    await page.locator("//*[@id='treeGridGanttSelection_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Row selection in Allowselection false
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('418-Disable two rows using toggle selection', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Click the toggle selection input field
    await page.locator("//*[@id='property']/tbody/tr[1]/td[2]/td/div/span").click();
    await page.waitForTimeout(800);
    // Press ArrowUp and Enter to toggle selection
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Disable two rows using toggle selection
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('419-Double click action when toggle as true', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/selection');
    await page.waitForTimeout(500);
    // Click the toggle selection input field
    await page.locator("(//span[contains(@class,' e-control-wrapper e-valid-input')])[1]").click();
    await page.waitForTimeout(500);
    // Press ArrowUp and Enter to toggle selection as true
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Double click on the Gantt chart content
    await page.locator("//*[@id='GanttSelection_chartContentBody']/tr[3]/td").dblclick();
    await page.waitForTimeout(500);
    // Screenshot validation - Double click action when toggle as true
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('420-Initial sorting', async ({ page }) => {
    await test.step('420-Initial sorting', async () => {
        await page.goto(baseUrl + '/E2EMigration/sorting');
        await page.waitForTimeout(500);
        // Screenshot validation - Initial sorting
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });

    await test.step('421-Sorting taskid column ascending', async () => {
        await page.waitForTimeout(500);
        // Click the taskid column header to sort ascending
        await page.locator("(//th[contains(@class,'e-headercell e-leftalign e-mousepointer  ')])[1]").click();
        await page.waitForTimeout(500);
        // Click again to ensure ascending order
        await page.locator("(//th[contains(@class,'e-headercell e-leftalign e-mousepointer  ')])[1]").click();
        await page.waitForTimeout(500);
        // Screenshot validation - Sorting taskid column ascending
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });

    await test.step('422-Sorting taskid column descending', async () => {
        await page.waitForTimeout(500);
        // Click the taskid column header to sort descending
        await page.locator("(//th[contains(@class,'e-headercell e-leftalign e-mousepointer  ')])[1]").click();
        await page.waitForTimeout(500);
        // Screenshot validation - Sorting taskid column descending
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
});
test('423-Sorting taskname column ascending', async ({ page }) => {
    await test.step('423-Sorting taskname column ascending', async () => {
        await page.goto(baseUrl + '/E2EMigration/sorting');
        await page.waitForTimeout(500);
        // Click the taskname column header to sort ascending
        await page.locator("(//th[contains(@class,'e-headercell e-leftalign e-mousepointer  ')])[2]").click();
        await page.waitForTimeout(500);
        // Screenshot validation - Sorting taskname column ascending
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
    await test.step('424-Sorting taskname column descending', async () => {
        // Click the taskname column header to sort descending
        await page.locator("(//th[contains(@class,'e-headercell e-leftalign e-mousepointer  ')])[2]").click();
        await page.waitForTimeout(500);
        // Screenshot validation - Sorting taskname column descending
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
});
test('425-Sorting startdate column ascending', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/sorting');
    await page.waitForTimeout(500);
    // Click the startdate column header to sort ascending
    await page.locator("(//th[contains(@class,'e-headercell e-leftalign e-mousepointer  ')])[3]").click();
    await page.waitForTimeout(500);
    // Click again to ensure ascending order
    await page.locator("(//th[contains(@class,'e-headercell e-leftalign e-mousepointer  ')])[3]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Sorting startdate column ascending
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('426-Sorting startdate column descending', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/sorting');
    await page.waitForTimeout(500);
    // Click the startdate column header to sort descending
    await page.locator("(//th[contains(@class,'e-headercell e-leftalign e-mousepointer  ')])[3]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Sorting startdate column descending
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('427-Sorting enddate column ascending', async ({ page }) => {
    await test.step('427-Sorting enddate column ascending', async () => {
        await page.goto(baseUrl + '/E2EMigration/sorting');
        await page.waitForTimeout(500);
        // Click the enddate column header to sort ascending
        await page.locator("(//th[contains(@class,'e-headercell e-leftalign e-mousepointer  ')])[4]").click();
        await page.waitForTimeout(300);
        // Click again to ensure ascending order
        await page.locator("(//th[contains(@class,'e-headercell e-leftalign e-mousepointer  ')])[4]").click();
        await page.waitForTimeout(300);
        // Screenshot validation - Sorting enddate column ascending
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
    await test.step('428-Sorting enddate column descending', async () => {
        // Click the enddate column header to sort descending
        await page.locator("(//th[contains(@class,'e-headercell e-leftalign e-mousepointer  ')])[4]").click();
        await page.waitForTimeout(300);
        // Screenshot validation - Sorting enddate column descending
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
});

test('429-Sorting duration column ascending', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/sorting');
    await page.waitForTimeout(1000);
    // Resize the column (if needed)
    await page.locator("(//div[contains(@class,'e-resizable-split-bar')])[1]").click();
    await page.mouse.down();

    await page.mouse.move(390, 10);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    // Click the duration column header to sort ascending
    await page.locator("(//th[contains(@class,'e-headercell e-leftalign e-mousepointer  ')])[5]").click();
    await page.waitForTimeout(1000);
    // Click again to ensure ascending order
    await page.locator("(//th[contains(@class,'e-headercell e-leftalign e-mousepointer  ')])[5]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Sorting duration column ascending
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('430-Sorting duration column descending', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/sorting');
    await page.waitForTimeout(500);
    // Click the duration column header to sort descending
    await page.locator("(//th[contains(@class,'e-headercell e-leftalign e-mousepointer  ')])[5]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Sorting duration column descending
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('431-Taskmode onload', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Taskmode');
    await page.waitForTimeout(500);
    // Screenshot validation - Taskmode onload
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('432-Converting Auto task to Manual Cell editing', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Taskmode');
    await page.waitForTimeout(500);
    // Double click to edit the cell
    await page.locator("(//td[contains(@class,'rowcell')])[15]").dblclick();
    await page.waitForTimeout(300);
    // Click to change task mode
    await page.locator("(//span[contains(@class,'input-group')])[1]").click();
    await page.waitForTimeout(500);
    // Press ArrowUp and Enter to select Manual mode
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(100);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Focus on Manual task
    await page.mouse.move(0, 0, { steps: 10 });
    await page.waitForTimeout(1000);
    // Screenshot validation - Converting Auto task to Manual Cell editing
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('433-Converting Manual task to Auto Cell editing', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Taskmode');
    await page.waitForTimeout(500);
    // Double click to edit the cell
    await page.locator("(//td[contains(@class,'rowcell')])[23]").dblclick();
    await page.waitForTimeout(300);
    // Press ArrowDown and Enter to select Auto mode
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);
    // Focus on Auto task
    await page.mouse.move(0, 0, { steps: 10 });
    await page.waitForTimeout(1000);
    // Screenshot validation - Converting Manual task to Auto Cell editing
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('434-Focus on parent Manual tasks', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Taskmode');
    await page.waitForTimeout(500);
    // Focus on parent Manual tasks
    await page.mouse.move(0, 0, { steps: 10 });
    await page.waitForTimeout(1000);
    // Screenshot validation - Focus on parent Manual tasks
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('435-Converting Parent Manual task to Auto Cell editing', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Taskmode');
    await page.waitForTimeout(500);
    // Double click to edit the cell
    await page.locator("(//td[contains(@class,'rowcell')])[7]").dblclick();
    await page.waitForTimeout(300);
    // Press ArrowDown and Enter to select Auto mode
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Focus on Parent task
    await page.mouse.move(0, 0, { steps: 10 });
    await page.waitForTimeout(1000);
    // Screenshot validation - Converting Parent Manual task to Auto Cell editing
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('436-Add new Auto task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Taskmode');
    await page.waitForTimeout(500);
    // Click the Add button to add a new task
    await page.locator("#Gantttaskmode_add").click();
    await page.waitForTimeout(1000);
    // Click to change task mode
    await page.locator("//*[@id='GantttaskmodeGeneralTabContainer']/div[7]/div").click();
    await page.waitForTimeout(500);
    // Press ArrowDown and Enter to select Auto mode
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Click the Save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Add new Auto task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('437-Dragging Manual task to Weekends', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Taskmode');
    await page.waitForTimeout(500);
    // Drag and drop the Manual task to Weekends
    await page.locator("//*[@id='Gantttaskmode_chartContentBody']/tr[3]/td/div[2]/div[3]/div").click();
    await page.waitForTimeout(1000);
    await page.mouse.move(20, 50);
    // Release the mouse button
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation - Dragging Manual task to Weekends
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('438-Dragging Auto task to Weekends', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Taskmode');
    await page.waitForTimeout(500);
    // Drag and drop the Auto task to Weekends
    await page.locator("//*[@id='Gantttaskmode_chartContentBody']/tr[2]/td/div[2]/div[3]/div").click();
    await page.mouse.move(20, 50);
    await page.waitForTimeout(1000);
    // Release the mouse button
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation - Dragging Auto task to Weekends
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('439-initializing taskbar editing', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the Gantt chart element
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Locator for the parent task element
    await page.locator("(//div[contains(@class,'e-connectorpoint-left  ')])[1]").dragTo(page.locator('body'), { targetPosition: { x: 100, y: 0 } });
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(300);
    // Locator for the chart element
    await page.locator("(//div[contains(@class,'e-content')])[2]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation- initializing taskbar editing
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('440-Dragging child task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the child task element
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").dragTo(page.locator('body'), { targetPosition: { x: 100, y: 0 } });
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(300);
    // Locator for the grid control element
    await page.locator("(//div[contains(@class,'e-headercontent')])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation- initializing taskbar editing
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('441-Dragging milestone', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the milestone element
    await page.locator("(//div[contains(@class,'e-connectorpoint-left')])[2]").dragTo(page.locator('body'), { targetPosition: { x: 50, y: 0 } });
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(300);
    // Locator for the grid control element
    await page.locator("(//div[contains(@class,'e-headercontent')])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation- Dragging milestone
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('442-rightside-taskbar editing', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the rightside taskbar element
    await page.locator("(//div[contains(@class,'e-child-progress-resizer')])[1]").hover();
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(50, 0);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(300);
    // Locator for the chart element
    await page.locator("(//div[contains(@class,'e-content')])[2]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation- rightside-taskbar editing
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('443-leftside-taskbar editing', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the leftside taskbar element
    await page.locator("(//div[contains(@class,'e-connectorpoint-left ')])[3]").hover();
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(-20, 0);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(300);
    // Locator for the chart element
    await page.locator("(//div[contains(@class,'e-content')])[2]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation- leftside-taskbar editing
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('444-right resize after enddate', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the right resize handle
    await page.locator("(//div[contains(@class,'e-child-progress-resizer')])[2]").hover();
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(50, 0);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(300);
    // Locator for the chart element
    await page.locator("(//div[contains(@class,'e-content')])[2]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - right resize after enddate
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('445-left resize after startdate', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the left resize handle
    await page.locator("(//div[contains(@class,'e-taskbar-left-resizer e-icon')])[1]").hover();
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(-50, 0);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(300);
    // Locator for the chart element
    await page.locator("(//div[contains(@class,'e-content')])[2]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - left resize after startdate
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('446-Resizing out of control', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the resize handle
    await page.locator("(//div[contains(@class,'e-child-progress-resizer')])[3]").hover();
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(-500, 0);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(300);
    // Locator for the chart element
    await page.locator("(//div[contains(@class,'e-content')])[2]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Resizing out of control
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('447-Left Dragging parent task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the parent task element
    const dragElement = await page.locator("(//div[contains(@class,'e-connectorpoint-left')])[1]");
    await dragElement.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    // Locator for the chart element
    await page.locator("(//div[contains(@class,'e-content')])[2]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Left Dragging parent task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('448-Left Dragging Child task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the child task element
    const dragElement = await page.locator("(//div[contains(@class,'gantt-child')])[1]");
    await dragElement.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    // Locator for the chart element
    await page.locator("(//div[contains(@class,'e-content')])[2]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Left Dragging Child task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('449-Progress Resize Left', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the progress resize handle
    await page.locator("(//div[contains(@class,'e-child-progress-resizer')])[1]").hover();
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(-50, 0);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(300);
    // Locator for the chart element
    await page.locator("(//div[contains(@class,'e-content')])[2]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Progress Resize Left
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('450-Progress Resize Right', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the progress resize handle
    await page.locator("(//div[contains(@class,'e-child-progress-resizer')])[1]").hover();
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(50, 0);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(300);
    // Locator for the chart element
    await page.locator("(//div[contains(@class,'e-content')])[2]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Progress Resize Right
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('451-Dependency Dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the child taskbar element
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    // Dependency tab
    await page.locator("(//div[@role='presentation'])[2]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Dependency Dialog Open
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Dependency Dialog
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('452-Dependency Dialog Add Predecessor', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the child taskbar element
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").dblclick();
    await page.waitForTimeout(1000);
    // Dependency tab
    await page.locator("(//div[@role='presentation'])[3]").click();
    await page.waitForTimeout(700);
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Dependency Dialog Add Predecessor
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('453-Dependency Delete', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the child taskbar element
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").dblclick();
    await page.waitForTimeout(1000);
    // Dependency tab
    await page.locator("(//div[@role='presentation'])[3]").click();
    await page.waitForTimeout(700);
    // Locator for the dependency table row
    await page.locator("(//td[contains(@class,'lastrowcell')])[8]").click();
    await page.waitForTimeout(300);
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Dependency Delete
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('454-Dependency Increment Offset Values', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the child taskbar element
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(1000);
    // Dependency tab
    await page.locator("(//div[@role='presentation'])[3]").click();
    await page.waitForTimeout(700);
    // Locator for the offset value cell
    await page.locator("(//td[contains(@class,'lastrowcell')])[11]").dblclick();
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+a');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    // Increment the offset value
    await page.locator("#Offset").fill("6 Days");
    await page.waitForTimeout(300);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Dependency Increment Offset Values
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('455-Dependency Decrement Offset Values', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the child taskbar element
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(1000);
    // Dependency tab
    await page.locator("(//div[@role='presentation'])[3]").click();
    await page.waitForTimeout(700);
    // Locator for the offset value cell
    await page.locator("(//td[contains(@class,'lastrowcell')])[11]").dblclick();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+a');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.locator("#Offset").fill("-1 Days");
    await page.waitForTimeout(200)
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Dependency Decrement Offset Values
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('456-Dragging task near the Weekend', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Move the task near Sunday
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dragTo(page.locator('body'), { targetPosition: { x: 0, y: 30 } });
    await page.waitForTimeout(1000);
    // Screenshot validation - Dragging task near the Weekend
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('457-Resizing task near the Weekend', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Move the task near Sunday
    await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[1]").hover();
    await page.mouse.down();
    await page.waitForTimeout(1000);
    // Screenshot validation - Resizing task near the Weekend
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('458-Resizing task near the Splitter', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Move the task near Sunday
    await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[1]").hover();
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(-130, 0);
    await page.waitForTimeout(1000);
    // Screenshot validation - Resizing task near the Splitter
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('459-Progress Resize 100%', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/taskbar');
    await page.waitForTimeout(500);
    // Locator for the progress resize handle
    await page.locator("(//div[contains(@class,'e-child-progress-resizer')])[1]").hover();
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(100, 0);
    await page.waitForTimeout(1000);
    // Screenshot validation - Progress Resize 100%
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('460-drag taskbar after indent task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Selfdata');
    await page.waitForTimeout(500);
    // Click on the task row
    await page.locator("//*[@id='GanttSelfdata_chartContentBody']/tr[3]").click();
    await page.waitForTimeout(300);
    // Click on the indent button
    await page.locator("(//span[contains(@class,'indent')])[1]").click();
    await page.waitForTimeout(500);
    // Drag and drop the taskbar
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").hover();
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(200, 0);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(500);
    // Click on the grid control element
    await page.locator("(//td[contains(@class,'rowcell')])[18]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - drag taskbar after indent
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('461-drag taskbar after outdent task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Selfdata');
    await page.waitForTimeout(500);
    // Click on the grid control element
    await page.locator("(//td[contains(@class,'rowcell')])[18]").click();
    await page.waitForTimeout(300);
    // Click on the outdent button
    await page.locator("(//span[contains(@class,'outdent')])[1]").click();
    await page.waitForTimeout(500);
    // Drag and drop the taskbar
    await page.locator("(//div[contains(@class,'gantt-child')])[5]").hover();
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(250, 0);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(500);
    // Click on the grid control element
    await page.locator("(//td[contains(@class,'rowcell')])[18]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - drag taskbar after outdent task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('462-Initializing TaskbarTemplate', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/TaskbarTemplate');
    await page.waitForTimeout(500);
    // Screenshot validation - Initializing TaskbarTemplate
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('463-Selection TaskbarTemplate', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/TaskbarTemplate');
    await page.waitForTimeout(500);
    // Locator for the task row
    await page.locator("(//td[contains(@class,'rowcell')])[10]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Selection TaskbarTemplate
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('464-TaskbarTemplate Parent Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/TaskbarTemplate');
    await page.waitForTimeout(500);
    // Cell Edit On Changing The Taskfield Name
    await page.locator("(//td[contains(@class,'rowcell')])[2]").dblclick();
    await page.waitForTimeout(300);
    // Enter the new parent name
    await page.waitForTimeout(300);
    await page.locator("//*[@id='DataItem___FieldName']").fill("New Parent Name");
    await page.waitForTimeout(300);
    // Click the update button
    await page.locator("#GanttTaskbartemplate_update").click();
    await page.waitForTimeout(500);
    // Screenshot validation - TaskbarTemplate Parent Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('465-TaskbarTemplate Parent Startdate Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/TaskbarTemplate');
    await page.waitForTimeout(500);
    // Cell Edit On Changing The Taskfield Name
    await page.locator("(//td[contains(@class,'rowcell')])[4]").dblclick();
    await page.waitForTimeout(300);
    // Enter the new start date
    await page.locator("//*[@id='DataItem___Begining']").fill("4/12/2019");
    await page.waitForTimeout(300);
    // Click the update button
    await page.locator("#GanttTaskbartemplate_update").click();
    await page.waitForTimeout(500);
    // Screenshot validation - TaskbarTemplate Parent Startdate Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('466-TaskbarTemplate Child Taskname Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/TaskbarTemplate');
    await page.waitForTimeout(500);
    // Cell Edit On Changing The Taskfield Name
    await page.locator("(//td[contains(@class,'rowcell')])[10]").dblclick();
    await page.waitForTimeout(300);
    // Enter the new task name
    await page.locator("//*[@id='DataItem___FieldName']").fill("Child Task Name");
    await page.waitForTimeout(300);
    // Click the update button
    await page.locator("#GanttTaskbartemplate_update").click();
    await page.waitForTimeout(500);
    // Screenshot validation - TaskbarTemplate Child Taskname Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('467-TaskbarTemplate Child EndDate Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/TaskbarTemplate');
    await page.waitForTimeout(500);
    // Cell Edit On Changing The Taskfield Name
    await page.locator("(//td[contains(@class,'rowcell')])[21]").dblclick();
    await page.waitForTimeout(300);
    // Enter the new end date
    await page.locator("//*[@id='DataItem___Ending']").fill("4/6/2019");
    await page.waitForTimeout(300);
    // Click the update button
    await page.locator("#GanttTaskbartemplate_update").click();
    await page.waitForTimeout(500);
    // Screenshot validation - TaskbarTemplate Child EndDate Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('468-TaskbarTemplate Parent Task Name Dialog', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/TaskbarTemplate');
    await page.waitForTimeout(500);
    // Double click on the parent taskbar
    await page.locator("(//div[contains(@class,'gantt-parent')])[1]").dblclick();
    await page.waitForTimeout(1000);
    // Click on the edit button
    await page.locator("#FieldName").fill("Parent 1");
    await page.waitForTimeout(300);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - TaskbarTemplate Parent Task Name Dialog
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('469-TaskbarTemplate Child Task Name Dialog', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/TaskbarTemplate');
    await page.waitForTimeout(500);
    // Click on the child task row
    await page.locator("(//td[contains(@class,'rowcell')])[18]").click();
    await page.waitForTimeout(200);
    // Click on the edit button
    await page.locator("#GanttTaskbartemplate_edit").click();
    await page.waitForTimeout(1000);
    // Enter the new task name
    await page.waitForTimeout(300);
    await page.locator("#FieldName").fill("Child 1");
    await page.waitForTimeout(300);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - TaskbarTemplate Child Task Name Dialog
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('470-TaskbarTemplate Parent Template Taskbar', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/TaskbarTemplate');
    await page.waitForTimeout(500);
    // Click on the parent taskbar
    await page.locator("(//div[contains(@class,'gantt-parent')])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - TaskbarTemplate Parent Template Taskbar
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('471-TaskbarTemplate Child Template Taskbar', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/TaskbarTemplate');
    await page.waitForTimeout(500);
    // Click on the child taskbar
    await page.locator("(//div[contains(@class,'e-custom-moments')])[2]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - TaskbarTemplate Child Template Taskbar
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('472-TaskbarTemplate Custom Column Dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/TaskbarTemplate');
    await page.waitForTimeout(500);
    // Ensuring if the Custom is shown in the taskbar
    await page.locator("(//div[contains(@class,'e-custom-moments')])[1]").dblclick();
    await page.waitForTimeout(1000);
    // Opening Custom Column Dialog
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(800);
    // Screenshot validation - TaskbarTemplate Custom Column Dialog
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(1000);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
});

test('473-initial Timeline Load', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Screenshot validation - initial Timeline Load
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('474-Ensuring Unit Width with Low Value', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Click on the unit width property
    await page.locator("(//span[contains(@class,'e-numeric e-valid-input e-input-group')])[1]").click();
    await page.waitForTimeout(1000);
    // Enter the unit width value
    await page.locator("#Unitwidht").fill("02");
    await page.waitForTimeout(300);
    // Press the enter key
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Unit Width with Low Value
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('475-Ensuring Unit Width with Big Value', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Click on the unit width property
    await page.locator("(//span[contains(@class,'e-numeric e-valid-input e-input-group')])[1]").click();
    await page.waitForTimeout(1000);
    // Enter the unit width value
    await page.locator("#Unitwidht").fill("80");
    await page.waitForTimeout(300);
    // Press the enter key
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Unit Width with Big Value
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('476-Ensuring Top Tier Year With Format MM\'YY', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Click on the top tier year format property
    await page.locator('//*[@id="property"]/tbody/tr[4]/td[2]/div/span/span').click();
    await page.waitForTimeout(1000);
    //Press the down arrow key and Enter button key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Top Tier Year With Format MM'YY
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('477-Ensuring Top Tier Year With Format YYY', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Click on the top tier year format property
    await page.locator('//*[@id="property"]/tbody/tr[4]/td[2]/div/span/span').click();
    await page.waitForTimeout(1000);
    //Press the down arrow key and Enter button key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[1]").click();
    await page.waitForTimeout(1000);
    //Press the down arrow key and Enter button key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Ensuring Top Tier Year With Format YYY
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('478-Ensuring Top Tier Year With Format MMM\'DD', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Click on the top tier year format property
    await page.locator('//*[@id="property"]/tbody/tr[4]/td[2]/div/span/span').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[1]").click();
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Ensuring Top Tier Year With Format MMM'DD
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('479-Ensuring Top Tier Month With Format MMM\'DD YYY', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Click on the top tier month format property
    await page.locator('//*[@id="property"]/tbody/tr[4]/td[2]/div/span/span').click();
    await page.waitForTimeout(400);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Ensuring Top Tier Month With Format MMM'DD YYY
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('480-Ensuring Top Tier Month With Format Month', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Click on the top tier month format property
    await page.locator('//*[@id="property"]/tbody/tr[4]/td[2]/div/span/span').click();
    await page.waitForTimeout(500);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[1]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Top Tier Month With Format Month
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('481-Ensuring Top Tier Month With Format Month Short Form', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Click on the top tier month format property
    await page.locator('//*[@id="property"]/tbody/tr[4]/td[2]/div/span/span').click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[1]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Top Tier Month With Format Month Short Form
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('482-Ensuring Top Tier Week With Format DD MM DD\'YYYY', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[1]").click();
    await page.waitForTimeout(1000);
    //Press the down arrow key and Enter button key
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Top Tier Week With Format DD MM DD'YYYY
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('483-Ensuring Top Tier Week With Format DD MM YY', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[1]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Top Tier Week With Format DD MM YY
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('484-Ensuring Top Tier Day With Format Month', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[1]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Top Tier Day With Format Month
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('485-Ensuring Top Tier Day With Format Day', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(600);
    // Format Change
    await page.locator('//*[@id="property"]/tbody/tr[4]/td[2]/div/span/span').click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Top Tier Day With Format Day
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('486-Ensuring Top Tier Day With Format Date', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(600);
    // Format Change
    await page.locator('//*[@id="property"]/tbody/tr[4]/td[2]/div/span/span').click();
    await page.waitForTimeout(1000);
    //Press the down arrow key and Enter button key
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Top Tier Day With Format Date
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('487-Ensuring Top Tier Hour With Format Hour 00:00 AM', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Click on the top tier hour format property
    await page.locator('//*[@id="property"]/tbody/tr[4]/td[2]/div/span/span').click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[1]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Top Tier Hour With Format Hour 00:00 AM
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('488-Ensuring Top Tier Hour With Format Hour 00', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[1]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Top Tier Hour With Format Hour 00
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('489-Ensuring Top Tier Hour With Format Hour 0:00 AM', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[1]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Ensuring Top Tier Hour With Format Hour 0:00 AM
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('490-Ensuring Bottom Tier Year With Format MMM;YY', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Click on the bottom tier year format property
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[2]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[2]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - Ensuring Bottom Tier Year With Format MMM;YY
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('491-Ensuring Bottom Tier Year With Format YY', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[2]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Bottom Tier Year With Format YY
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('492-Ensuring Bottom Tier Year With Format MMM YY', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[2]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Bottom Tier Year With Format MMM YY
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('493-Ensuring Down Tier Month With Format MMM\'DD YYY', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Click on the bottom tier month format property
    await page.locator('//*[@id="property"]/tbody/tr[8]/td[2]/div/span/span').click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[2]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Down Tier Month With Format MMM'DD YYY
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('494-Ensuring Down Tier Month With Format Month', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[2]").click();
    await page.waitForTimeout(600);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Down Tier Month With Format Month
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('495-Ensuring Down Tier Month With Format Month Short Form', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[2]").click();
    await page.waitForTimeout(600);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Down Tier Month With Format Month Short Form
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('496-Ensuring Down Tier Week With Format MM\'DD YYYY', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Click on the bottom tier week format property
    await page.locator('//*[@id="property"]/tbody/tr[8]/td[2]/div/span/span').click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(600);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[2]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Down Tier Week With Format MM'DD YYYY
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('497-Ensuring Down Tier Week With Format DD MM DD\'YYYY', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[2]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Down Tier Week With Format DD MM DD'YYYY
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('498-Ensuring Down Tier Week With Format DD MM YY', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[2]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Down Tier Week With Format DD MM YY
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('499-Ensuring Down Tier Day With Format Day', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[2]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Down Tier Day With Format Day
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('500-Ensuring Down Tier Day With Format Date', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[2]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Down Tier Day With Format Date
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('501-Ensuring Down Tier Hour With Format Hour', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Click on the bottom tier hour format property
    await page.locator('//*[@id="property"]/tbody/tr[8]/td[2]/div/span/span').click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Down Tier Hour With Format Hour
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('502-Ensuring Down Tier Hour With Format Hour Format', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[2]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Down Tier Hour With Format Hour Format
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('503-Ensuring Down Tier Hour With Format Hour 0:00 AM', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Format Change
    await page.locator("(//span[contains(@class,'e-control-wrapper e-valid-input')])[2]").click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Screenshot validation - Ensuring Down Tier Hour With Format Hour 0:00 AM
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('504-Ensuring Down Tier Zoom_Fit Settings', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Click on the Zoom to Fit button
    await page.locator("#GanttTimeline_zoomtofit").click();
    await page.waitForTimeout(600);
    // Screenshot validation - Ensuring Down Tier Zoom_Fit Settings
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('505-Ensuring Down Tier Zoom_In Settings', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Click on the Zoom In button
    await page.locator("#GanttTimeline_zoomin").click();
    await page.waitForTimeout(600);
    // Screenshot validation - Ensuring Down Tier Zoom_In Settings
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('506-Ensuring Down Tier Zoom_Out Settings', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/CustomHolidays');
    await page.waitForTimeout(500);
    // Click on the Zoom Out button
    await page.locator("#GanttTimeline_zoomout").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Ensuring Down Tier Zoom_Out Settings
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('507-initializing Timespan', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/prevandnexttimespan');
    await page.waitForTimeout(500);
    // Screenshot validation - initializing Timespan
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    // Click on the next timespan button
    await page.locator("#GanttTimespan_nexttimespan").click();
    await page.waitForTimeout(500);
    // Screenshot validation - nexttimespan
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    // Click on the previous timespan button
    await page.locator("#GanttTimespan_prevtimespan").click();
    await page.waitForTimeout(500);
    // Screenshot validation - prevtimespan
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('508-Scroll To Timeline Toolbar', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/prevandnexttimespan');
    await page.waitForTimeout(500);
    // Click on the Scroll To Timeline button
    await page.locator("#ScrollToTimeline").click();
    // The date in timeline given will be focused on click
    await page.waitForTimeout(1000);
    // Screenshot validation - Scroll To Timeline Toolbar
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click on the Scroll To Taskbar button
    await page.locator("#ScrollToTaskbar").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Scroll To Taskbar Toolbar
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click on the Scroll to Taskbar On Click button
    await page.locator("//*[@id='ScrolltoTaskbarOnClick']/span[2]").click();
    await page.waitForTimeout(500);
    // This enables the user to view the taskbar when the task is clicked from the Tree grid side
    await page.locator("//*[@id='treeGridGanttTimespan_gridcontrol_content_table']/tbody/tr[9]/td[2]").click();
    await page.waitForTimeout(500);
    // Now see on the Gantt side, the task will be focused
    // Screenshot validation - Scroll to Taskbar On Click Toolbar
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('509-Initial preview of default toolbar', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/toolbar');
    await page.waitForTimeout(500);
    // Screenshot validation - Initial preview of default toolbar
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click on the Add button
    await page.locator("#GanttToolbar_add").click();
    await page.waitForTimeout(600);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Toolbars Add
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('510-Toolbars Delete', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/toolbar');
    await page.waitForTimeout(500);
    // Select the task row to delete
    await page.locator("//*[@id='treeGridGanttToolbar_gridcontrol_content_table']/tbody/tr[5]/td[2]").click();
    await page.waitForTimeout(500);
    // Click on the Delete button
    await page.locator("#GanttToolbar_delete").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Toolbars Delete
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('511-Toolbars Edit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/toolbar');
    await page.waitForTimeout(500);
    // Select the task row to edit
    await page.locator("//*[@id='treeGridGanttToolbar_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(300);
    // Click on the Edit button
    await page.locator("#GanttToolbar_edit").click();
    await page.waitForTimeout(1000);
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Toolbars Edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('512-Toolbars Collapse All', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/toolbar');
    await page.waitForTimeout(500);
    // Click on the Collapse All button
    await page.locator("#GanttToolbar_collapseall").click();
    await page.waitForTimeout(600);
    // Screenshot validation - Toolbars Collapse All
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(300);
    // Click on the Expand All button
    await page.locator("#GanttToolbar_expandall").click();
    await page.waitForTimeout(600);
    // Screenshot validation - Toolbars Expand All
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('513-Choosing the next toolbar button', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/toolbar');
    await page.waitForTimeout(500);
    // Click on the next toolbar button
    await page.locator("#Toolbar2").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Choosing the next toolbar button
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(300);
    // Click on the Zoom to fit button
    await page.locator("#GanttToolbar_zoomtofit").click();
    await page.waitForTimeout(600);
    // Screenshot validation - Toolbar Zoom to fit
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(300);
    // Click on the Zoom In button
    await page.locator("#GanttToolbar_zoomin").click();
    await page.waitForTimeout(600);
    // Screenshot validation - Toolbar Zoom In
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(300);
    // Click on the Zoom Out button
    await page.locator("#GanttToolbar_zoomout").click();
    await page.waitForTimeout(600);
    // Screenshot validation - Toolbar Zoom Out
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(300);
    // Click on the Previous Timespan button
    await page.locator("#GanttToolbar_prevtimespan").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Toolbar Previous Timespan
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(300);
    // Click on the Next Timespan button
    await page.locator("#GanttToolbar_nexttimespan").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Toolbar Next Timespan
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(300);
    // Click on the Hide Chart button
    await page.locator("#hideChart").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Toolbar Hide Chart
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(300);
    // Click on the Show Chart button
    await page.locator("#showChart").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Toolbar Show Chart
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(300);
    // Click on the Taskbar size small button
    await page.locator("#small").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Toolbar Taskbar size small
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(300);
    // Click on the Taskbar size medium button
    await page.locator("#medium").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Toolbar Taskbar size medium
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(300);
    // Click on the Taskbar size big button
    await page.locator("#big").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Toolbar Taskbar size big
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('514-Toolbar right navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl + '/E2EMigration/Virtual ');
    await page.waitForTimeout(1000);
    // Click on the specific cell
    await page.locator("//*[@id='treeGridGantt_gridcontrol_content_table']/tbody/tr[4]/td[2]").click();
    await page.waitForTimeout(300);
    // Click on the right navigation button
    await page.locator("#hscroll_0_nav_right").click();
    await page.waitForTimeout(800);
    // Screenshot validation - Toolbar right navigation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click on the left navigation button
    await page.locator("#hscroll_0_nav_left").click();
    await page.waitForTimeout(600);
    // Screenshot validation - Toolbar left navigation
    // expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('515-Initializing Tooltip', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Virtual ');
    await page.waitForTimeout(1000);
    // Screenshot validation - Initial tooltip
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click on the first header cell
    await page.locator("(//div[contains(@class,'e-header-cell-label e-gantt-top-cell-text')])[1]").click({ button: 'left' });
    await page.waitForTimeout(500);
    // Release the mouse button
    await page.mouse.up();
    await page.waitForTimeout(2000);
    // Screenshot validation - Timeline cell tooltip
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('516-baseline tooltip', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/tooltip');
    await page.waitForTimeout(500);
    // Perform mouse up action
    await page.mouse.move(657, 332);
    await page.waitForTimeout(3000);
    // Screenshot validation - Baseline tooltip shown
    expect(await page.locator('#GanttTooltip').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('517-Unscedhuled Duration only task Tooltip', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").click();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('518-Unscedhuled End date only task Tooltip', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.locator("(//div[contains(@class,'e-left-connectorpoint-outer-div')])[6]").click();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('519-Unscedhuled Start date only task Tooltip', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.mouse.move(860, 264);
    await page.waitForTimeout(1000);
    // Screenshot validation - Unscedhuled Start date only task Tooltip
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('520-Task Null Unscedhuled', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Perform actions to delete the task
    await page.locator("(//div[contains(@class,'gantt-parent')])[1]").click();
    await page.waitForTimeout(200);
    // Perform delete action
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(500);
    // Press the Ok button
    await page.locator("(//button[text()='OK'])[1]").click();
    await page.waitForTimeout(500);
    //click on the unscheduled task
    await page.locator("(//div[contains(@class,'gantt-parent')])[1]").click();
    await page.waitForTimeout(300);
    // Perform delete action
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(500);
    // Press the Ok button
    await page.locator("(//button[text()='OK'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Task Null Unscedhuled
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('521-Event Markers tooltip Initial', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/tooltip');
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.locator("(//div[@class='e-span-label'])[1]").click();
    await page.waitForTimeout(1000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(500);
    // Compare the screenshot with the baseline
    expect(await page.locator('#GanttTooltip').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('522-Event Markers tooltip Second Next Timeline', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/tooltip');
    await page.waitForTimeout(500);
    // Perform mouse up action
    await page.mouse.move(923, 191);
    await page.waitForTimeout(2000);
    // Compare the screenshot with the baseline
    expect(await page.locator('#GanttTooltip').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('523-Indicator tooltip', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/tooltip');
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.locator("(//label[@class='e-label e-indicator-span'])").click();
    await page.waitForTimeout(1000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('#GanttTooltip').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('524-Cell tooltip', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/tooltip');
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.locator("//*[@id='treeGridGanttTooltip_gridcontrol_content_table']/tbody/tr[5]/td[2]").click();
    await page.waitForTimeout(1000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('#GanttTooltip').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('525-Disable Timeline tooltip', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/tooltip');
    await page.waitForTimeout(500);
    // Click to disable timeline tooltip
    await page.locator("#TimelineTooltip").click();
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.locator("(//div[contains(@class, 'e-header-cell-label e-gantt-top-cell-text')])[1]").click();
    await page.waitForTimeout(1000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('#GanttTooltip').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('526-Disable Gantt tooltip', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/tooltip');
    await page.waitForTimeout(500);
    // Click to disable Gantt tooltip
    await page.locator("#LocalTooltip").click();
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.locator("//*[@id='GanttTooltip_chartContentBody']/tr[4]/td/div[2]/div/div/div").click();
    await page.waitForTimeout(1000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('#GanttTooltip').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('527-Parent taskbar tooltip', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.locator("//*[@id='GanttEditing_chartContentBody']/tr[1]/td/div[2]/div[2]/div").click();
    await page.waitForTimeout(1000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('528-Taskbar editing tooltip after dragging', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Perform drag and drop action on the specified element
    await page.locator("//*[@id='GanttEditing_chartContentBody']/tr[3]/td/div[2]/div[3]/div").click();
    await page.waitForTimeout(1000);
    await page.mouse.move(100, 0);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.locator("//*[@id='GanttEditing_chartContentBody']/tr[3]/td/div[2]/div[3]/div").click();
    await page.waitForTimeout(1000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('529-Taskbar editing tooltip after left resizing', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.locator("//*[@id='GanttEditing_chartContentBody']/tr[3]/td/div[2]/div[2]").click();
    await page.mouse.move(-20, 0);
    await page.waitForTimeout(3000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Perform mouse down action on the specified element
    await page.locator("//*[@id='GanttEditing_chartContentBody']/tr[3]/td/div[2]/div[3]/div").click();
    await page.mouse.up();
    await page.waitForTimeout(3000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('530-Taskbar editing tooltip after right resizing', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.locator("//*[@id='GanttEditing_chartContentBody']/tr[3]/td/div[2]/div[5]").click();
    await page.waitForTimeout(300);
    await page.mouse.move(50, 0);
    await page.waitForTimeout(1000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.locator("//*[@id='GanttEditing_chartContentBody']/tr[3]/td/div[2]/div[3]/div").click();
    await page.waitForTimeout(1000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('531-Checking notes tooltip with html tag', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Perform double click action on the specified element
    await page.locator("//*[@id='treeGridGanttEditing_gridcontrol_content_table']/tbody/tr[2]/td[7]").dblclick();
    await page.waitForTimeout(1000);
    // Send keys to the input field
    await page.locator("(//div[contains(@class,'e-content')])[5]").click();
    await page.keyboard.type('Notes with html tag');
    await page.waitForTimeout(1000);
    // Click on the save button
    await page.locator("//*[@id='GanttEditing_dialog']/div[4]/button[1]").click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('532-DiableHMTLEncode set as true', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/editing');
    await page.waitForTimeout(500);
    // Click to disable HTML encoding
    await page.locator("#DisableHTML").click();
    await page.waitForTimeout(500);
    // Perform double click action on the specified element
    await page.locator("(//td[contains(@class,'e-rowcell')])[14]").dblclick();
    await page.waitForTimeout(600);
    // Send keys to the input field
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(400);
    await page.keyboard.type('Notes without html tag');
    await page.waitForTimeout(500);
    // Click on the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Perform mouse down action on the specified element
    await page.locator("(//td[contains(@class,'e-rowcell')])[14]").click();
    await page.waitForTimeout(300);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('533-Timeline cell tooltip template - top tier', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/TimelineCellTooltip');
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.locator("(//div[contains(@class, 'e-gantt-top-cell-text')])[2]").click();
    await page.waitForTimeout(1000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(1000);
    //Screenshot validation-Top tier indicated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('534-Timeline cell tooltip template - bottom tier', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/TimelineCellTooltip');
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.locator("(//td[contains(@class, 'e-timeline-top-header-cell e-weekend-header-cell')])[1]").hover({ force: true });
    await page.waitForTimeout(1000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(1000);
    //Screenshot validation-tooltip indicated at bottom tier
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('535-Indicator tooltip template 1', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/IndicatorTooltip');
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.locator("//*[@id='Indicator_chartContentBody']/tr[1]/td/label").click();
    await page.waitForTimeout(1000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(1000);
    //Screenshot validation-tooltip for template updated
    expect(await page.locator('#Indicator').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('536-Indicator tooltip template 2', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/IndicatorTooltip');
    await page.waitForTimeout(500);
    // Perform mouse down action on the specified element
    await page.locator("//*[@id='Indicator_chartContentBody']/tr[5]/td/label").click();
    await page.waitForTimeout(1000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Screenshot validation-tooltip for template updated
    expect(await page.locator('#Indicator').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('537-initializing UnSchedule task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('538-Ensuring the Start date only task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Perform click action on the specified element
    await page.locator("(//div[contains(@class,'e-left-connectorpoint-outer-div')])[7]").click();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('539-Ensuring the end date task is rendered', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Perform click action on the specified element
    await page.locator("(//div[contains(@class,'e-left-connectorpoint-outer-div')])[7]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-end date is rendered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('540-Cell edit Start date of Duration task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Perform double click action on the specified element
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[2]/td[3]").dblclick();
    await page.waitForTimeout(1000);
    // Click on the start date input field
    await page.locator("//*[@id='DataItem___StartDate']").click();
    await page.waitForTimeout(300);
    // Type the new start date
    await page.locator("//*[@id='DataItem___StartDate']").type("3/27/2019");
    await page.waitForTimeout(300);
    // Press Enter to save the date
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Perform click action on another element to trigger the update
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(400);
    //Screenshot validation-duration is edited
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('541-Cell edit End date of Start date only task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Perform double click action on the specified element
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[6]/td[4]").dblclick();
    await page.waitForTimeout(300);
    // Click on the end date input field
    await page.locator("//*[@id='DataItem___EndDate']").click();
    await page.waitForTimeout(300);
    // Type the new end date
    await page.locator("//*[@id='DataItem___EndDate']").type("4/5/2019");
    await page.waitForTimeout(300);
    // Press Enter to save the date
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Perform click action on another element to trigger the update
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(500);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('542-Cell edit Start date of End date only task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Perform double click action on the specified element
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[8]/td[3]").dblclick();
    await page.waitForTimeout(300);
    // Click on the start date input field
    await page.locator("//*[@id='DataItem___StartDate']").click();
    await page.waitForTimeout(300);
    // Type the new start date
    await page.locator("//*[@id='DataItem___StartDate']").type("4/5/2019");
    await page.waitForTimeout(300);
    // Press Enter to save the date
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Perform click action on another element to trigger the update
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(300);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('543-Removing the duration of duration only task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Perform double click action on the specified element
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[2]/td[5]").dblclick();
    await page.waitForTimeout(300);
    // Click on the duration input field
    await page.locator("//input[@class='e-control e-textbox e-lib e-input']").click();
    await page.waitForTimeout(300);
    // Clear the input field
    await page.locator("//input[@class='e-control e-textbox e-lib e-input']").fill('');
    await page.waitForTimeout(300);
    // Type a space to remove the duration
    await page.locator("//input[@class='e-control e-textbox e-lib e-input']").fill(' ');
    await page.waitForTimeout(300);
    // Press Enter to save the change
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Perform click action on another element to trigger the update
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(300);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('544-Removing the Start date of Startdate only task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Perform double click action on the specified element
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[6]/td[3]").dblclick();
    await page.waitForTimeout(300);
    // Click on the start date input field
    await page.locator("//*[@id='DataItem___StartDate']").click();
    await page.waitForTimeout(200);
    // Select all text and delete it
    await page.keyboard.press('Control+a');
    await page.waitForTimeout(200);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(200);
    // Type a space to remove the start date
    await page.locator("//*[@id='DataItem___StartDate']").fill(' ');
    await page.waitForTimeout(300);
    // Press Enter to save the change
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Perform click action on another element to trigger the update
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(300);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('545-Add a new Duration only', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Click to add a new unscheduled task
    await page.locator("#Unscheduled_add").click();
    await page.waitForTimeout(1000);
    // Click on the General tab
    await page.locator("//*[@id='UnscheduledGeneralTabContainer']/div[3]").click();
    await page.waitForTimeout(500);
    // Perform double click action on the start date input field
    await page.locator("//*[@id='StartDate']").dblclick();
    await page.waitForTimeout(1000);
    // Clear the start date input field
    await page.locator("//*[@id='StartDate']").click();
    await page.waitForTimeout(200);
    await page.locator("//*[@id='StartDate']").fill('');
    await page.waitForTimeout(200);
    // Type a space to remove the start date
    await page.locator("//*[@id='StartDate']").type(' ');
    await page.waitForTimeout(300);
    // Press Enter to save the change
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);
    // Click on another element to trigger the update
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[1]/td[2]").click();
    await page.waitForTimeout(200);
    // Click to edit the task
    await page.locator("#Unscheduled_edit").click();
    await page.waitForTimeout(1000);
    // Click on the General tab
    await page.locator("//*[@id='UnscheduledGeneralTabContainer']/div[4]").click();
    await page.waitForTimeout(200);
    // Perform double click action on the end date input field
    await page.locator("//*[@id='EndDate']").dblclick();
    await page.waitForTimeout(300);
    // Clear the end date input field
    await page.locator("//*[@id='EndDate']").click();
    await page.waitForTimeout(200);
    await page.locator("//*[@id='EndDate']").fill('');
    await page.waitForTimeout(200);
    // Type a space to remove the end date
    await page.locator("//*[@id='EndDate']").type(' ');
    await page.waitForTimeout(300);
    // Press Enter to save the change
    await page.keyboard.press('Enter');
    await page.waitForTimeout(200);
    // Click on another element to trigger the update
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[1]/td[2]").click();
    await page.waitForTimeout(200);
    // Click to edit the task
    await page.locator("#Unscheduled_edit").click();
    await page.waitForTimeout(1000);
    // Perform double click action on the duration input field
    await page.locator("//*[@id='Duration']").dblclick();
    await page.waitForTimeout(300);
    // Type the new duration
    await page.locator("//*[@id='Duration']").fill('4 days');
    await page.waitForTimeout(300);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('546-Add a new Start date only task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Click to add a new unscheduled task
    await page.locator("#Unscheduled_add").click();
    await page.waitForTimeout(1000);
    // Click on the General tab
    await page.locator("//*[@id='UnscheduledGeneralTabContainer']/div[4]").click();
    await page.waitForTimeout(200);
    // Perform double click action on the end date input field
    await page.locator("//*[@id='EndDate']").dblclick();
    await page.waitForTimeout(300);
    // Clear the end date input field
    await page.locator("//*[@id='EndDate']").click();
    await page.waitForTimeout(200);
    await page.locator("//*[@id='EndDate']").fill('');
    await page.waitForTimeout(300);
    // Type a space to remove the end date
    await page.locator("//*[@id='EndDate']").fill(' ');
    await page.waitForTimeout(300);
    // Press Enter to save the change
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('547-Add a new Start date only task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Click to add a new unscheduled task
    await page.locator("#Unscheduled_add").click();
    await page.waitForTimeout(1000);
    // Click on the General tab
    await page.locator("//*[@id='UnscheduledGeneralTabContainer']/div[4]").click();
    await page.waitForTimeout(200);
    // Perform double click action on the end date input field
    await page.locator("//*[@id='EndDate']").dblclick();
    await page.waitForTimeout(300);
    // Clear the end date input field
    await page.locator("//*[@id='EndDate']").click();
    await page.waitForTimeout(200);
    await page.locator("//*[@id='EndDate']").fill('');
    await page.waitForTimeout(300);
    // Type a space to remove the end date
    // Press Enter to save the change
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('548-Add a new End date only task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Click to add a new unscheduled task
    await page.locator("#Unscheduled_add").click();
    await page.waitForTimeout(1000);
    // Click on the General tab
    await page.locator("//*[@id='UnscheduledGeneralTabContainer']/div[3]").click();
    await page.waitForTimeout(200);
    // Perform double click action on the start date input field
    await page.locator("//*[@id='StartDate']").dblclick();
    await page.waitForTimeout(300);
    // Clear the start date input field
    await page.locator("//*[@id='StartDate']").click();
    await page.waitForTimeout(200);
    await page.locator("//*[@id='StartDate']").fill('');
    await page.waitForTimeout(300);
    // Type a space to remove the start date
    await page.locator("//*[@id='StartDate']").fill(' ');
    await page.waitForTimeout(300);
    // Press Enter to save the change
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('549-Dragging End Only task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Perform drag and drop action on the specified element
    await page.mouse.click(826, 383);
    await page.waitForTimeout(1000);
    await page.mouse.move(100, 0);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(500);
    // Perform click action on another element to trigger the update
    await page.locator("(//td[contains(@class,'rowcell')])[14]").click();
    await page.waitForTimeout(300);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('550-Dragging Start date Only task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Perform drag and drop action on the specified element
    await page.mouse.click(793, 315);
    await page.waitForTimeout(1000);
    await page.mouse.move(100, 0);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(500);
    // Perform click action on another element to trigger the update
    await page.locator("(//td[contains(@class,'rowcell')])[14]").click();
    await page.waitForTimeout(300);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('551-Dialog Duration Dates Null', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Click to add a new unscheduled task
    await page.locator("#Unscheduled_add").click();
    await page.waitForTimeout(1000);
    // Clear the start date input field
    await page.locator("#StartDate").click();
    await page.waitForTimeout(200);
    await page.locator("#StartDate").fill('');
    await page.waitForTimeout(300);
    // Clear the end date input field
    await page.locator("#EndDate").click();
    await page.waitForTimeout(200);
    await page.locator("#EndDate").fill('');
    await page.waitForTimeout(300);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('552-Edit duration value for empty row', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Perform double click action on the specified element
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[3]/td[5]").dblclick();
    await page.waitForTimeout(500);
    // Click on the duration input field
    await page.locator(".e-control.e-textbox.e-lib.e-input").click();
    await page.waitForTimeout(500);
    // Type the new duration value
    await page.locator(".e-control.e-textbox.e-lib.e-input").type("0");
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Perform click action on another element to trigger the update
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Perform double click action on the specified element
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[3]/td[4]").dblclick();
    await page.waitForTimeout(500);
    // Click on the end date input field
    await page.locator("#DataItem___EndDate").click();
    await page.waitForTimeout(300);
    // Type the new end date
    await page.locator("#DataItem___EndDate").fill("4/3/2019");
    await page.waitForTimeout(300);
    // Press Enter to save the date
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Perform click action on another element to trigger the update
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(500);
    // Compare the screenshot with the baseline
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('553-Drag duration alone task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/UnScheduleEdit');
    await page.waitForTimeout(500);
    // Perform double click action on the specified element
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[3]/td[5]").dblclick();
    await page.waitForTimeout(300);
    // Click on the duration input field
    await page.locator(".e-control.e-textbox.e-lib.e-input").click();
    await page.waitForTimeout(300);
    // Type the new duration value
    await page.locator(".e-control.e-textbox.e-lib.e-input").type("4 days");
    await page.waitForTimeout(300);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Perform drag and drop action on the specified element
    await page.locator("//*[@id='Unscheduled_chartContentBody']/tr[3]/td/div[2]/div[2]").click();
    await page.waitForTimeout(500);
    await page.mouse.move(100, 0);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(500);
    // Perform click action on another element to trigger the update
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[1]/td[3]").click();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Perform double click action on the specified element
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[3]/td[3]").dblclick();
    await page.waitForTimeout(300);
    // Click on the start date input field
    await page.locator("#DataItem___StartDate").click();
    await page.waitForTimeout(200);
    // Clear the start date input field
    await page.locator("#DataItem___StartDate").fill('');
    await page.waitForTimeout(300);
    // Press Enter to save the change
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Perform click action on another element to trigger the update
    await page.locator("//*[@id='treeGridUnscheduled_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(500);
    // Compare the screenshot with the baseline
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('554-Column virtualization Initial load', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnVirtual');
    await page.waitForTimeout(2000);
    // Compare the screenshot with the baseline
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(500);
    // Click to add a column dynamically
    await page.locator("#Add_column").click();
    await page.waitForTimeout(500);
    // Click to scroll the column dynamically
    await page.locator("#Scroll_column").click();
    await page.waitForTimeout(2000);
    // Compare the screenshot with the baseline
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('555-Reorder columns dynamically', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnVirtual');
    await page.waitForTimeout(2000);
    // Click to reorder columns dynamically
    await page.locator("#Reorder_column").click();
    await page.waitForTimeout(2000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('556-Hide columns dynamically', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnVirtual');
    await page.waitForTimeout(2000);
    // Click to hide columns dynamically
    await page.locator("#Hide_column").click();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    await page.waitForTimeout(600);
    // Click to show columns dynamically
    await page.locator("#Show_column").click();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('557-Column menu - Auto fit this column', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnVirtual');
    await page.waitForTimeout(2000);
    // Click on the column menu
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu")])[1]').click();
    await page.waitForTimeout(300);
    // Click to autofit this column
    await page.locator("(//li[text()='Autofit this column'])[1]").click();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('558-Column menu - Autofit all columns', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnVirtual');
    await page.waitForTimeout(2000);
    // Click on the column menu
    await page.locator('(//div[contains(@class,"e-icons e-columnmenu")])[1]').click();
    await page.waitForTimeout(300);
    // Click to autofit all columns
    await page.locator("#treeGridColumnVirtual_gridcontrol_colmenu_AutoFitAll").click();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('559-Column menu - column resize', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnVirtual');
    await page.waitForTimeout(2000);
    // Perform mouse down action on the specified element
    await page.locator("(//div[contains(@class,'e-rcursor')])[2]").click();
    await page.waitForTimeout(300);
    // Perform mouse move action to resize the column
    await page.mouse.move(40, 10);
    await page.waitForTimeout(1000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('560-Column menu - column chooser', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnVirtual');
    await page.waitForTimeout(2000);
    // Click on the column menu
    await page.locator("(//div[contains(@class,'e-icons e-columnmenu')])[1]").click();
    await page.waitForTimeout(1000);
    // Navigate through the column menu and select column chooser
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    await page.locator('(//li[text()="Columns"])[1]').hover();
    await page.waitForTimeout(2000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('561-Cell-editing: child startdate editing', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnVirtual');
    await page.waitForTimeout(2000);
    // Perform double click action on the specified element
    await page.locator("(//td[contains(@class,'e-rowcell')])[33]").dblclick();
    await page.waitForTimeout(500);
    // Click on the start date input field
    await page.locator("#DataItem___ProjectStartDate").click();
    await page.waitForTimeout(200);
    // Select all text and delete it
    await page.keyboard.press('Control+a')
    await page.waitForTimeout(200);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(200);
    // Type the new start date
    await page.locator("#DataItem___ProjectStartDate").fill("01/11/2017");
    await page.waitForTimeout(300);
    // Press Enter to save the date
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('562-Cell-editing: custom columns', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnVirtual');
    await page.waitForTimeout(2000);
    // Perform double click action on the specified element
    await page.locator("(//td[text()='Field4'])[1]").dblclick();
    await page.waitForTimeout(500);
    // Click on the custom column input field
    await page.locator("#DataItem___Field1").click();
    await page.waitForTimeout(200);
    // Select all text and delete it
    await page.keyboard.press('Control+a');
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(200);
    // Type the new custom column value
    await page.locator("#DataItem___Field1").fill("DATA");
    await page.waitForTimeout(1000);
    // Press Enter to save the change
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    //Screenshot 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

// test('563-Splitter resizing', async ({ page }) => {
//     await page.goto(baseUrl + '/E2EMigration/ColumnVirtual');
//     await page.waitForTimeout(2000);
//     // Perform mouse down action on the splitter
//     await page.locator("(//div[contains(@class,'e-split-bar ')])[1]").click();
//     await page.waitForTimeout(1000);
//     // Perform mouse move action to resize the splitter
//     await page.mouse.down();
//     await page.mouse.move(10, 390);
//     await page.waitForTimeout(3000);
//     // Perform mouse up action
//     await page.mouse.up();
//     await page.waitForTimeout(2000);
//     // Compare the screenshot with the baseline
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
// });

test('564-Dragging parent task', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnVirtual');
    await page.waitForTimeout(2000);
    // Perform drag and drop action on the parent task
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").click();
    await page.waitForTimeout(3000);
    await page.mouse.click(100, 0);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(3000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('565-Rightside-taskbar editing', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnVirtual');
    await page.waitForTimeout(2000);
    // Perform mouse down action on the right side of the taskbar
    await page.locator("(//div[contains(@class,'e-right-connectorpoint-outer-div')])[4]").click();
    await page.waitForTimeout(200);
    // Perform mouse move action to resize the taskbar
    await page.mouse.move(50, 0);
    await page.waitForTimeout(3000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(3000);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('566-Leftside-taskbar editing', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/ColumnVirtual');
    await page.waitForTimeout(2000);
    // Perform mouse down action on the left side of the taskbar
    await page.locator("//*[@id='ColumnVirtual_chartContentBody']/tr[3]/td/div[2]/div[2]").click();
    await page.waitForTimeout(200);
    // Perform mouse move action to resize the taskbar
    await page.mouse.move(-20, 0);
    await page.waitForTimeout(3000);
    // Perform mouse up action
    await page.mouse.up();
    await page.waitForTimeout(300);
    // Compare the screenshot with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('567-Column virtualization Initial load', async ({ page }) => {
    const ganttLocator = page.locator('.e-gantt');
    // Navigate to the Column Virtual page
    await test.step('Navigate to Column Virtual page', async () => {
        await page.goto(baseUrl + '/E2EMigration/Virtual');
        await page.waitForTimeout(1000); // Initial load wait
    });
    // Validate initial load with screenshot
    await test.step('Validate initial load', async () => {
        expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
    // Add a new record using dialog
    await test.step('Add a new record using dialog', async () => {
        await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
        await page.locator("(//button[text()='Save'])[1]").click();
        await page.waitForTimeout(1000); // Wait for save action
        expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
    // Add a record using Insert key
    await test.step('Add a record using Insert key', async () => {
        await page.keyboard.press('Insert');
        await page.waitForTimeout(1000); // Wait for insert action
        expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
    // Delete a record
    await test.step('Delete a record', async () => {
        await page.locator("(//span[text()='Delete'])[1]").click();
        await page.locator("(//button[text()='OK'])[1]").click();
        await page.waitForTimeout(500); // Wait for deletion
        expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
    // Edit TaskName
    await test.step('Edit TaskName', async () => {
        await page.locator("(//td[contains(@class,'rowcell')])[2]").dblclick();
        await page.locator("#DataItem___TaskName").fill('Updated');
        await page.locator("(//span[contains(@class,'update')])[1]").click();
        await page.waitForTimeout(500); // Wait for update
        expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
    // Edit Duration and cancel
    await test.step('Edit Duration and cancel', async () => {
        await page.locator("(//td[contains(@class,'rowcell')])[5]").dblclick();
        await page.locator("//*[@id='Gantt_cancel']/button/span[2]").click();
        await page.waitForTimeout(500); // Wait for cancel action
        expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
    // Edit TaskName, StartDate, and Duration
    await test.step('Edit Task details', async () => {
        await page.locator("//*[@id='Gantt_chartContentBody']/tr[1]/td/div[2]/div[3]/div").dblclick();
        await page.locator("#TaskName").fill('New data');
        await page.locator("#StartDate").fill('13/01/2017');
        await page.locator("#Duration").fill('3 days');
        await page.locator("//*[@id='Gantt_dialog']/div[4]/button[1]").click();
        await page.waitForTimeout(1000); // Wait for save action
        expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
    // Drag and drop a task
    await test.step('Drag and drop a task', async () => {
        await page.locator("//*[@id='Gantt_chartContentBody']/tr[2]/td/div[2]/div[2]/div/div").click();
        await page.mouse.move(100, 0);
        await page.mouse.up();
        await page.waitForTimeout(3000); // Wait for drag action
        expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
    // Edit taskbar
    await test.step('Edit taskbar', async () => {
        await page.locator("//*[@id='Gantt_chartContentBody']/tr[1]/td/div[2]/div[6]").click();
        await page.mouse.move(50, 0);
        await page.mouse.up();
        await page.waitForTimeout(3000); // Wait for edit action
        expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
    // Edit left side taskbar
    await test.step('Edit left side taskbar', async () => {
        await page.locator("//*[@id='Gantt_chartContentBody']/tr[4]/td/div[2]/div[1]").click();
        await page.mouse.move(-20, 0);
        await page.mouse.up();
        await page.waitForTimeout(3000); // Wait for update
        expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
});

test('578-Treegrid collapse action', async ({ page }) => {
    const ganttLocator = page.locator('.e-gantt');
    // Navigate to the Virtual page
    await page.goto(baseUrl + '/E2EMigration/Virtual');
    await page.waitForTimeout(1000); // Initial load wait
    // Collapse the treegrid
    await page.locator("//*[@id='treeGridGantt_gridcontrol_content_table']/tbody/tr[1]/td[1]/div/span[1]").click();
    await page.waitForTimeout(300); // Wait for collapse action
    expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    // Expand the treegrid
    await page.locator("//*[@id='treeGridGantt_gridcontrol_content_table']/tbody/tr[1]/td[1]/div/span[1]").click();
    await page.waitForTimeout(1000); // Wait for expand action
    expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('580-BLAZ-24433 Toolbar add after scroll', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Virtual ');
    await page.waitForTimeout(1000);
    // Click on the scroll rows button
    await page.locator("//*[@id='Scroll_Rows']").click();
    await page.waitForTimeout(600);
    // Click on the Gantt add button
    await page.locator("//*[@id='Gantt_add']").click();
    await page.waitForTimeout(800);
    // Click on the dialog button
    await page.locator("//*[@id='Gantt_dialog']/div[4]/button[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Toolbar add after scroll
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('581-BLAZ-24433 Add above through context menu after scroll', async ({ page }) => {
    const ganttLocator = page.locator('.e-gantt');
    // Navigate to the Virtual page
    await page.goto(baseUrl + '/E2EMigration/Virtual');
    await page.waitForTimeout(1000); // Wait for the page to load
    // Enable scrolling by clicking the scroll rows button
    await page.locator("//*[@id='Scroll_Rows']").click();
    await page.waitForTimeout(600); // Wait for the scroll action to complete
    // Helper function to right-click and interact with the context menu
    const interactWithContextMenu = async (rowSelector, menuActions) => {
        await page.locator(rowSelector).click({ button: 'right' }); // Right-click on the record
        await page.waitForTimeout(300); // Wait for the context menu to appear
        for (const action of menuActions) {
            await page.keyboard.press(action); // Navigate through the context menu
            await page.waitForTimeout(300); // Short wait between actions
        }
        await page.waitForTimeout(1000); // Wait for the action to complete
    };
    // Add Above
    await interactWithContextMenu("//*[@id='treeGridGantt_gridcontrol_content_table']/tbody/tr[7]/td[2]", [
        'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowDown','ArrowRight', 'Enter'
    ]);
    await page.waitForTimeout(1000);
    expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    // Add Below
    await interactWithContextMenu("//*[@id='treeGridGantt_gridcontrol_content_table']/tbody/tr[7]/td[2]", [
        'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowRight', 'ArrowDown', 'Enter'
    ]);
    await page.waitForTimeout(1000);
    expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    // Add Child
    await interactWithContextMenu("//*[@id='treeGridGantt_gridcontrol_content_table']/tbody/tr[7]/td[2]", [
        'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowRight', 'ArrowDown', 'ArrowDown', 'Enter'
    ]);
    await page.waitForTimeout(1000);
    expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    // Add Milestone
    await interactWithContextMenu("//*[@id='treeGridGantt_gridcontrol_content_table']/tbody/tr[7]/td[2]", [
        'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'Enter'
    ]);
    expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('589-Collapse all records and 590-Expand all records', async ({ page }) => {
    const ganttLocator = page.locator('.e-gantt');
    // Navigate to the Virtual page
    await page.goto(baseUrl + '/E2EMigration/Virtual');
    await page.waitForTimeout(1000); // Wait for the page to load
    // Collapse all records
    await page.locator("//*[@id='Gantt_collapseall']").click();
    await page.waitForTimeout(1500); // Wait for the collapse action
    expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    // Expand all records
    await page.locator("//*[@id='Gantt_expandall']").click();
    await page.waitForTimeout(1500); // Wait for the expand action
    expect.soft(await ganttLocator.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('591-Add record after zoom-in and 592-Add record after zoom-out', async ({ page }) => {
    // Navigate to Virtual page
    await test.step('Navigate to Virtual page', async () => {
        await page.goto(`${baseUrl}/E2EMigration/Virtual`);
        await page.waitForTimeout(1000); // Consider replacing with a more reliable wait condition
    });
    // Test 591: Add record after zoom-in
    await test.step('Add record after zoom-in', async () => {
        await page.locator("#Gantt_zoomin").click();
        await page.locator("#Gantt_add").click();
        await page.waitForTimeout(1500);
        await page.locator('//*[@id="Gantt_dialog"]/div[4]/button[1]').click(); // Simplified selector
        await page.waitForTimeout(1000); // Consider replacing with a more reliable wait condition
        // Screenshot validation
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
    // Test 592: Add record after zoom-out
    await test.step('Add record after zoom-out', async () => {
        await page.locator("#Gantt_zoomout").click();
        await page.locator("#Gantt_add").click();
        await page.locator('//*[@id="Gantt_dialog"]/div[4]/button[1]').click(); // Simplified selector
        await page.waitForTimeout(1000); // Consider replacing with a more reliable wait condition
        // Click on the first row
        await page.locator('#treeGridGantt_gridcontrol_content_table tbody tr:first-child td:first-child').click();
        await page.waitForTimeout(1000); // Consider replacing with a more reliable wait condition
        // Screenshot validation
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
});

test('593-Next timespan more than two times and 594-Previous timespan', async ({ page }) => {
    const navigateToVirtualPage = async () => {
        await page.goto(`${baseUrl}/E2EMigration/Virtual`);
        await page.waitForTimeout(1000); // Consider replacing with a more reliable wait condition
    };
    const clickNextTimespan = async () => {
        await page.locator("#Gantt_nexttimespan").click();
        await page.waitForTimeout(1500); // Consider replacing with a more reliable wait condition
    };
    const clickPreviousTimespan = async () => {
        await page.locator("#Gantt_prevtimespan").click();
        await page.waitForTimeout(1500); // Consider replacing with a more reliable wait condition
    };
    // Navigate to Virtual page and click Next Timespan three times
    await test.step('Navigate and click Next Timespan three times', async () => {
        for (let i = 0; i < 3; i++) {
            await navigateToVirtualPage();
            await clickNextTimespan();
        }
        // Screenshot validation after Next Timespan clicks
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
    // Click Previous Timespan and validate
    await test.step('Click Previous Timespan and validate', async () => {
        await clickPreviousTimespan();
        // Screenshot validation after Previous Timespan click
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
});

test('595-Zoom-to-fit', async ({ page }) => {
    await page.goto(baseUrl + '/E2EMigration/Virtual');
    await page.waitForTimeout(1000);
    //Click Zoom to fit button
    await page.locator("(//span[text()='Zoom to fit'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-Zoom to fit 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('596-Zoom-out to view Q1, Q2', async ({ page }) => {
    // Navigate to the Virtual page
    await page.goto(baseUrl + '/E2EMigration/Virtual');
    await page.waitForTimeout(1000);
    // Click on the Zoom Out button multiple times
    for (let i = 0; i < 10; i++) {
        await page.locator("(//span[text()='Zoom out'])[1]").click();
        if (i === 2 || i === 5 || i === 7) await page.waitForTimeout(300);
    }
    // Validate the screenshot after zooming out
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    // Click on the Zoom to Fit button
    await page.waitForTimeout(600);
    await page.locator("(//span[text()='Zoom to fit'])[1]").click();
    await page.waitForTimeout(1000);
    // Validate the screenshot after zooming to fit
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('597-Scroll vertically after zoom-to-fit', async ({ page }) => {
    // Navigate to the VirtualWithoutPredecessor page
    await page.goto(baseUrl + '/E2EMigration/VirtualWithoutPredecessor');
    await page.waitForTimeout(1000);
    // Click on the Zoom to Fit button
    await page.locator("(//span[text()='Zoom to fit'])[1]").click();
    await page.waitForTimeout(1000);
    // Click on the Scroll Rows button
    await page.locator("(//button[text()='Scroll'])[1]").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Scroll vertically after zoom-to-fit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('598-Zoom out action', async ({ page }) => {
    // Navigate to the VirtualWithoutPredecessor page
    await page.goto(baseUrl + '/E2EMigration/VirtualWithoutPredecessor');
    await page.waitForTimeout(1000);
    // Click on the Zoom Out btton multiple times
    for (let i = 0; i < 4; i++) {
        await page.locator("(//span[text()='Zoom out'])[1]").click();
        await page.waitForTimeout(1000);
    }
    // Screenshot validation - Zoom out action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('599-Zoom In action', async ({ page }) => {
    // Navigate to the VirtualWithoutPredecessor page
    await page.goto(baseUrl + '/E2EMigration/VirtualWithoutPredecessor');
    await page.waitForTimeout(1000);
    // Click on the Zoom In button multiple times
    for (let i = 0; i < 4; i++) {
        await page.locator("(//span[text()='Zoom in'])[1]").click();
        await page.waitForTimeout(1000);
    }
    // Screenshot validation - Zoom In action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('600-NextTimeSpan', async ({ page }) => {
    // Navigate to the VirtualWithoutPredecessor page
    await page.goto(baseUrl + '/E2EMigration/VirtualWithoutPredecessor');
    await page.waitForTimeout(1000);
    // Click on the Next Timespan button
    await page.locator("(//span[text()='Next timespan'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - NextTimeSpan
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('601-PreviousTimeSpan', async ({ page }) => {
    // Navigate to the VirtualWithoutPredecessor page
    await page.goto(baseUrl + '/E2EMigration/VirtualWithoutPredecessor');
    await page.waitForTimeout(1000);
    // Click on the Previous Timespan button
    await page.locator("(//span[text()='Previous timespan'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - PreviousTimeSpan
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('602-initializing-zooming', async ({ page }) => {
    // Navigate to the zooming page and wait for the Gantt chart to be visible
    await page.goto(baseUrl + '/E2EMigration/zooming');
    await page.waitForTimeout(500);
    //await page.locator('.e-gantt').waitFor({ state: 'visible' });
    // Initialize data asynchronously
    await page.locator("button:has-text('InitDataAsync')").click();
    await page.locator('.e-gantt').waitFor({ state: 'visible' });
    await page.waitForTimeout(1000);
    // Validate initial zoom state with a screenshot
    await expect.soft(page.locator('.e-gantt')).toHaveScreenshot('initial-zoom.png', { maxDiffPixelRatio: 0.01 });
    // Perform zoom in and validate
    await page.locator("span:has-text('Zoom in')").click();
    await page.locator('.e-gantt').waitFor({ state: 'visible' });
    await expect(page.locator('.e-gantt')).toHaveScreenshot('zoom-in.png', { maxDiffPixelRatio: 0.01 });
    // Perform zoom out and validate
    await page.waitForTimeout(1000);
    await page.locator("span:has-text('Zoom out')").click();
    await page.locator('.e-gantt').waitFor({ state: 'visible' });
    await expect.soft(page.locator('.e-gantt')).toHaveScreenshot('zoom-out.png', { maxDiffPixelRatio: 0.01 });
    // Perform zoom to fit and validate
    await page.waitForTimeout(1000);
    await page.locator("span:has-text('Zoom to fit')").click();
    await page.locator('.e-gantt').waitFor({ state: 'visible' });
    await expect.soft(page.locator('.e-gantt')).toHaveScreenshot('zoom-to-fit.png', { maxDiffPixelRatio: 0.01 });
});

test('606-initializing Custom Zooming', async ({ page }) => {
    // Navigate to the Customzooming page
    await page.goto(baseUrl + '/E2EMigration/Customzooming');
    await page.waitForTimeout(500);
    // Screenshot validation - initializing Custom Zooming
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('607-Zoom_In Disable', async ({ page }) => {
    // Navigate to the Customzooming page
    await page.goto(baseUrl + '/E2EMigration/Customzooming');
    await page.waitForTimeout(500);
    // Click on the Zoom In button twice
    await page.locator("(//span[text()='Zoom in'])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[text()='Zoom in'])[1]").click();
    await page.waitForTimeout(600);
    // Screenshot validation - Zoom In Disable
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('608-Zoom_Out Disable', async ({ page }) => {
    // Navigate to the Customzooming page
    await page.goto(baseUrl + '/E2EMigration/Customzooming');
    await page.waitForTimeout(500);
    // Click on the Zoom Out button
    await page.locator("(//span[text()='Zoom out'])[1]").click();
    await page.waitForTimeout(600);
    // Screenshot validation - Zoom Out Disable
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('609-Zoom_In Methods Button', async ({ page }) => {
    // Navigate to the Customzooming page
    await page.goto(baseUrl + '/E2EMigration/Customzooming');
    await page.waitForTimeout(500);
    // Click on the Zoom In Methods Button
    await page.locator("(//button[text()='Zoom In'])[1]").click();
    await page.waitForTimeout(600);
    // Screenshot validation - Zoom In Methods Button
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('610-Zoom_Out Methods Button', async ({ page }) => {
    // Navigate to the Customzooming page
    await page.goto(baseUrl + '/E2EMigration/Customzooming');
    await page.waitForTimeout(500);
    // Click on the Zoom Out Methods Button
    await page.locator("(//button[text()='Zoom Out'])[1]").click();
    await page.waitForTimeout(600);
    // Screenshot validation - Zoom Out Methods Button
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('611-Zoom_Fit Methods Button', async ({ page }) => {
    // Navigate to the Customzooming page
    await page.goto(baseUrl + '/E2EMigration/Customzooming');
    await page.waitForTimeout(500);
    // Click on the Zoom To Fit Methods Button
    await page.locator("(//button[text()='ZoomToFit'])[1]").click();
    await page.waitForTimeout(600);
    // Screenshot validation - Zoom Fit Methods Button
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('612-Splitter resize after Zoom In', async ({ page }) => {
    // Navigate to the Customzooming page
    await page.goto(baseUrl + '/E2EMigration/Customzooming');
    await page.waitForTimeout(500);
    // Click on the Zoom In button
    await page.locator("(//span[text()='Zoom in'])[1]").click();
    await page.waitForTimeout(500);
    // Click the splitter
    await page.locator("(//div[contains(@class,' e-resizable-split-bar e-last-bar')])[1]").click();
    // Perform splitter resize
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(-70, 10);
    await page.waitForTimeout(600);
    await page.mouse.up();
    await page.waitForTimeout(1000);

    // Screenshot validation - Splitter resize after Zoom In
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('613-Splitter resize after Zoom Out', async ({ page }) => {
    // Navigate to the Customzooming page
    await page.goto(baseUrl + '/E2EMigration/Customzooming');
    await page.waitForTimeout(500);
    // Click on the Zoom Out button
    await page.locator("(//span[text()='Zoom out'])[1]").click();
    await page.waitForTimeout(500);
    // Click custom zooming
    await page.locator("//div[@role='separator']").click();
    // Perform splitter resize
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(-70, 10);
    await page.waitForTimeout(600);
    await page.mouse.up();
    // Screenshot validation - Splitter resize after Zoom Out
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('614-Baseline on load', async ({ page }) => {
    // Navigate to the Baseline page
    await page.goto(baseUrl + '/E2EMigration/Baseline1');
    await page.waitForTimeout(500);
    // Screenshot validation - Baseline on load
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('615-Changing to German Culture', async ({ page }) => {
    await test.step('620-Changing to German Culture', async () => {
        // Navigate to the contextmenu page
        await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
        await page.waitForTimeout(500);
        // Select the German option from the dropdown
        // await page.keyboard.press('Tab');
        // await page.keyboard.press('Tab');
        // await page.keyboard.press('Enter');
        // await page.waitForTimeout(500);
        // //select option
        // await page.keyboard.press('ArrowDown');
        // await page.keyboard.press('Enter');
        await page.locator("#ContextMenu_add").click();
        await page.waitForTimeout(500);
        await page.locator('//*[@id="ContextMenu_dialog"]/div[4]/button[1]').click();
        await page.waitForTimeout(500);
        // Click on the specific cell
        await page.locator("//*[@id='treeGridContextMenu_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
        await page.waitForTimeout(600);
        // Screenshot validation - Changing to German Culture
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
    await test.step('621-Opening task information', async () => {
        await page.locator("//*[@id='ContextMenu_chartContentBody']/tr[3]/td/div[2]/div/div").click();
        await page.waitForTimeout(500);
        // Right-click on the specific record
        await page.waitForTimeout(600);
        const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[3]/td/div[2]/div/div");
        await record1.click({ button: 'right' });
        await page.waitForTimeout(300);
        // Click on the Task Information option
        await page.locator("#ContextMenu_cmenu_TaskInformation").click();
        await page.waitForTimeout(500);
        // Close the task information dialog
        await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])").click();
        await page.waitForTimeout(1000);
        // Screenshot validation - Opening task information Close Dialog
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
});

test('622-Deleting selected task', async ({ page }) => {
    // Navigate to the contextmenu page
    await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
    await page.waitForTimeout(500);
    await page.locator("//*[@id='ContextMenu_chartContentBody']/tr[3]/td/div[2]/div/div").click();
    await page.waitForTimeout(500);
    // Right-click on the specific record
    const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[3]/td/div[2]/div/div");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click on the Delete Task option
    await page.locator("#ContextMenu_cmenu_DeleteTask").click();
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("//*[@id='treeGridContextMenu_gridcontrol_content_table']/tbody/tr[3]/td[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Deleting selected task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('623-Adding a task above', async ({ page }) => {
    // Navigate to the contextmenu page
    await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
    await page.waitForTimeout(500);
    await page.locator("//*[@id='ContextMenu_chartContentBody']/tr[5]/td/div[2]/div/div").click();
    await page.waitForTimeout(500);
    // Right-click on the specific record
    const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[5]/td/div[2]/div/div");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click on the Add option and then the Above option
    await page.locator("#ContextMenu_cmenu_Add").click();
    await page.waitForTimeout(500);
    await page.locator("#ContextMenu_cmenu_Above").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Adding a task above
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('624-Adding a task below', async ({ page }) => {
    // Navigate to the contextmenu page
    await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
    await page.waitForTimeout(500);
    // Right-click on the specific record
    const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[6]/td/div[2]/div/div");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click on the Add option and then the Below option
    await page.locator("#ContextMenu_cmenu_Add").click();
    await page.waitForTimeout(500);
    await page.locator("#ContextMenu_cmenu_Below").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Adding a task below
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('625-Adding a child', async ({ page }) => {
    // Navigate to the contextmenu page
    await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
    await page.waitForTimeout(500);
    // Right-click on the specific record
    const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[7]/td/div[2]/div/div");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click on the Add option and then the Child option
    await page.locator("#ContextMenu_cmenu_Add").click();
    await page.waitForTimeout(500);
    await page.locator("#ContextMenu_cmenu_Child").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Adding a child
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('626-Adding a milestone', async ({ page }) => {
    // Navigate to the contextmenu page
    await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
    await page.waitForTimeout(500);
    // Right-click on the specific record
    const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[8]/td/div[2]/div/div");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click on the Add option and then the Milestone option
    await page.locator("#ContextMenu_cmenu_Add").click();
    await page.waitForTimeout(500);
    await page.locator("#ContextMenu_cmenu_Milestone").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Adding a milestone
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('627-Converting task to milestone', async ({ page }) => {
    // Navigate to the contextmenu page
    await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
    await page.waitForTimeout(500);
    await page.locator("//*[@id='ContextMenu_chartContentBody']/tr[3]/td/div[2]/div/div").click();
    await page.waitForTimeout(500);
    // Right-click on the specific record
    const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[3]/td/div[2]/div/div");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click on the Convert option and then the To Milestone option
    await page.locator("#ContextMenu_cmenu_Convert").click();
    await page.waitForTimeout(500);
    await page.locator("#ContextMenu_cmenu_ToMilestone").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Converting task to milestone
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('628-Converting milestone to task', async ({ page }) => {
    // Navigate to the contextmenu page
    await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
    await page.waitForTimeout(500);
    // Right-click on the specific record
    const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[8]/td/div[2]/div/div");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click on the Convert option and then the To Task option
    await page.locator("#ContextMenu_cmenu_Convert").click();
    await page.waitForTimeout(200);
    await page.locator("#ContextMenu_cmenu_ToTask").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Converting milestone to task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('629-delete parent task', async ({ page }) => {
    // Navigate to the contextmenu page
    await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
    await page.waitForTimeout(500);
    await page.locator("//*[@id='ContextMenu_chartContentBody']/tr[1]/td/div[2]/div/div").click();
    await page.waitForTimeout(300);
    // Right-click on the specific record
    const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[1]/td/div[2]/div/div");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click on the Delete Task option
    await page.locator("#ContextMenu_cmenu_DeleteTask").click();
    await page.waitForTimeout(500);
    // Screenshot validation - delete parent task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('630-Changing to Chinese Culture', async ({ page }) => {
    await test.step('630-Changing to Chinese Culture', async () => {
        // Navigate to the contextmenu page
        await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
        await page.waitForTimeout(500);
        // Select the Chinese option from the dropdown
        //await page.locator("#locale").click();
        await page.waitForTimeout(200);
        await page.keyboard.press('ArrowDown');
        await page.waitForTimeout(200);
        await page.keyboard.press('ArrowDown');
        await page.waitForTimeout(200);
        await page.keyboard.press('ArrowDown');
        await page.waitForTimeout(200);
        await page.keyboard.press('Enter');
        await page.waitForTimeout(500);
        // Screenshot validation - Changing to Chinese Culture
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
    await test.step('631-Opening task information Chinese Culture', async () => {
        // Right-click on the specific record
        await page.locator("//*[@id='ContextMenu_chartContentBody']/tr[3]/td/div[2]/div/div").click();
        await page.waitForTimeout(600);
        const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[3]/td/div[2]/div/div");
        await record1.click({ button: 'right' });
        await page.waitForTimeout(300);
        // Click on the Task Information option
        await page.locator("#ContextMenu_cmenu_TaskInformation").click();
        await page.waitForTimeout(1000);
        // Screenshot validation - Opening task information Chinese Culture
        expect.soft(await page.locator('.content.px-4').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
        // Close the task information dialog
        await page.waitForTimeout(500);
        await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])").click();
        await page.waitForTimeout(1000);
        // Screenshot validation - Opening task information Chinese Culture Close Dialog
        expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    });
});

test('632-Deleting selected task Chinese Culture', async ({ page }) => {
    // Navigate to the contextmenu page
    await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
    await page.waitForTimeout(500);
    await page.locator("//*[@id='ContextMenu_chartContentBody']/tr[3]/td/div[2]/div/div").click();
    await page.waitForTimeout(300);
    // Right-click on the specific record
    const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[3]/td/div[2]/div/div");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click on the Delete Task option
    await page.locator("#ContextMenu_cmenu_DeleteTask").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Deleting selected task Chinese Culture
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('633-Adding a task above Chinese Culture', async ({ page }) => {
    // Navigate to the contextmenu page
    await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
    await page.waitForTimeout(500);
    await page.locator("//*[@id='ContextMenu_chartContentBody']/tr[5]/td/div[2]/div/div").click();
    await page.waitForTimeout(200);
    // Right-click on the specific record
    const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[5]/td/div[2]/div/div");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click on the Add option and then the Above option
    await page.locator("#ContextMenu_cmenu_Add").click();
    await page.waitForTimeout(200);
    await page.locator("#ContextMenu_cmenu_Above").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Adding a task above Chinese Culture
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('634-Adding a task below Chinese Culture', async ({ page }) => {
    // Navigate to the contextmenu page
    await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
    await page.waitForTimeout(500);
    // Right-click on the specific record
    const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[6]/td/div[2]/div/div");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click on the Add option and then the Below option
    await page.locator("#ContextMenu_cmenu_Add").click();
    await page.waitForTimeout(200);
    await page.locator("#ContextMenu_cmenu_Below").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Adding a task below Chinese Culture
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('635-Adding a milestone Chinese Culture', async ({ page }) => {
    // Navigate to the contextmenu page
    await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
    await page.waitForTimeout(500);
    // Right-click on the specific record
    const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[8]/td/div[2]/div/div");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click on the Add option and then the Milestone option
    await page.locator("#ContextMenu_cmenu_Add").click();
    await page.waitForTimeout(200);
    await page.locator("#ContextMenu_cmenu_Milestone").click();
    await page.waitForTimeout(500);
    // Click on the specific cell
    await page.locator("//*[@id='treeGridContextMenu_gridcontrol_content_table']/tbody/tr[9]/td[1]").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Adding a milestone Chinese Culture
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('636-Converting task to milestone Chinese Culture', async ({ page }) => {
    // Navigate to the contextmenu page
    await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
    await page.waitForTimeout(500);
    await page.locator("//*[@id='ContextMenu_chartContentBody']/tr[6]/td/div[2]/div/div").click();
    await page.waitForTimeout(200);
    // Right-click on the specific record
    const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[6]/td/div[2]/div/div");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click on the Convert option and then the To Milestone option
    await page.locator("#ContextMenu_cmenu_Convert").click();
    await page.waitForTimeout(200);
    await page.locator("#ContextMenu_cmenu_ToMilestone").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Converting task to milestone Chinese Culture
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('637-Converting milestone to task Chinese Culture', async ({ page }) => {
    // Navigate to the contextmenu page
    await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
    await page.waitForTimeout(500);
    // Right-click on the specific record
    const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[8]/td/div[2]/div/div");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click on the Convert option and then the To Task option
    await page.locator("#ContextMenu_cmenu_Convert").click();
    await page.waitForTimeout(200);
    await page.locator("#ContextMenu_cmenu_ToTask").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Converting milestone to task Chinese Culture
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('638-delete parent task Chinese Culture', async ({ page }) => {
    // Navigate to the contextmenu page
    await page.goto('http://localhost:5004/E2EMigration/contextmenu1');
    await page.waitForTimeout(500);
    //
    await page.locator("//*[@id='ContextMenu_chartContentBody']/tr[1]/td/div[2]/div/div").click();
    await page.waitForTimeout(300);
    // Right-click on the specific record
    const record1 = page.locator("//*[@id='ContextMenu_chartContentBody']/tr[1]/td/div[2]/div/div");
    await record1.click({ button: 'right' });
    await page.waitForTimeout(300);
    // Click on the Delete Task option
    await page.locator("#ContextMenu_cmenu_DeleteTask").click();
    // Reset to default culture
    await page.waitForTimeout(300);
    //await page.locator('#locale').click();
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Screenshot validation - delete parent task Chinese Culture
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('639-Taskbar On Timeline Unit size 20', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/Event1');
    await page.waitForTimeout(500);
    // await page.locator('#locale').click(); // Select the dropdown
    await page.waitForTimeout(300);
    // Select the first option
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Click on the taskbar element
    await page.locator('//*[@id="treeGridEventmarkers_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
    await page.waitForTimeout(500);
    //Screenshot validation-Timeline updated
    expect(await page.locator('#Eventmarkers').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});
test('640-Taskbar On Timeline Unit size 20 Tooltip taskbar', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/Event1');
    await page.waitForTimeout(500);
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").click(); // Click on the taskbar
    await page.waitForTimeout(2000);
    //Screenshot validation-Timeline Unit updated
    expect(await page.locator('#Eventmarkers').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('641-Gantt Localization Taskbar Resizers', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/Event1');
    await page.waitForTimeout(500);
    await page.locator('//div[@role="separator"]').click(); // Click on the taskbar resizer
    await page.mouse.move(100, 0); // Move the mouse
    await page.waitForTimeout(1000);
    await page.mouse.up(); // Release the mouse
    await page.waitForTimeout(1000);
    //await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[1]').click(); // Click on the taskbar element
    await page.waitForTimeout(1000);
    //Screenshot validation-Taskbars resized
    expect(await page.locator('#Eventmarkers').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('642-Event Markers In German Culture', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/Event1');
    await page.waitForTimeout(500);
    //await page.locator('#locale').click(); // Focus on the Tooltip
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown'); // Press Arrow Down
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter'); // Press Enter
    await page.waitForTimeout(500);
    await page.locator('//*[@id="Eventmarkers_chart"]/div[2]/div[1]/div/div[1]/div[1]/div[1]').click(); // Click on the event marker
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('#Eventmarkers').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
    //await page.locator('#locale').click(); // Focus on the Tooltip
    await page.waitForTimeout(500);
    await page.keyboard.press('ArrowUp'); // Press Arrow Up
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter'); // Press Enter
    await page.waitForTimeout(500);
    expect.soft(await page.locator('#Eventmarkers').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('643-Editing Load and setting German culture', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    //await page.locator('#locale').click(); // Select the dropdown
    await page.waitForTimeout(300);
    // Select the second option
    await page.keyboard.press('ArrowDown'); // Press Arrow Down
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter'); // Press Enter
    await page.waitForTimeout(500);
    await page.locator('//*[@id="treeGridEditing_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click(); // Click on the taskbar element
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});
test('644-perform delete action', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator('//*[@id="treeGridEditing_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click(); // Click on the taskbar element
    await page.waitForTimeout(200);
    await page.locator('#Editing_delete').click(); // Click the delete button
    await page.waitForTimeout(500);
    //Screenshot validation-Record is deleted
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('645-perform cancel action', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.dblclick('//*[@id="treeGridEditing_gridcontrol_content_table"]/tbody/tr[3]/td[2]'); // Double-click on the taskbar element
    await page.waitForTimeout(1000);
    await page.locator('#Editing_cancel').click(); // Click the cancel button
    await page.waitForTimeout(1000);
    //Screenshot validation-record is canceled and not added.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('646-changing child task name using edit action', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator('//*[@id="treeGridEditing_gridcontrol_content_table"]/tbody/tr[2]/td[2]').click(); // Click on the taskbar element
    await page.waitForTimeout(200);
    await page.locator('#Editing_edit').click(); // Click the edit button
    await page.waitForTimeout(1000);
    await page.locator('#TaskName').click(); // Click on the task name field
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(300);
    // Press Backspace to clear the input
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(200);
    await page.locator('#TaskName').type('Identify Site area'); // Type the new task name
    await page.waitForTimeout(200);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    //Screenshot validation-Child taskname updated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('647-changing child start date using edit action', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator('//*[@id="treeGridEditing_gridcontrol_content_table"]/tbody/tr[2]/td[2]').click(); // Click on the taskbar element
    await page.waitForTimeout(200);
    await page.locator('#Editing_edit').click(); // Click the edit button
    await page.waitForTimeout(1000);
    await page.locator('#StartDate').click(); // Click on the start date field
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(300);
    // Press Backspace to clear the input
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(200);
    await page.locator('#StartDate').type('4/5/2019'); // Type the new start date
    await page.waitForTimeout(200);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    //Screenshot validation-start date is edited.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
test('648-changing child end date using edit action', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator('//*[@id="treeGridEditing_gridcontrol_content_table"]/tbody/tr[2]/td[4]').click(); // Click on the taskbar element
    await page.waitForTimeout(300);
    await page.locator('#Editing_edit').click();
    await page.waitForTimeout(500);// Click the edit button
    await page.locator('#EndDate').click();
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(300);
    // Press Backspace to clear the input
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(200);
    // Clear the end date field
    await page.locator('#EndDate').type('4/8/2019'); // Type the new end date
    await page.waitForTimeout(300);
    await page.locator('//*[@id="Editing_dialog"]/div[4]/button[1]').click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 }); // Compare the screen
});
test('649-changing duration using edit action', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator('//*[@id="treeGridEditing_gridcontrol_content_table"]/tbody/tr[2]/td[4]').click(); // Click on the taskbar element
    await page.waitForTimeout(200);
    await page.locator('#Editing_edit').click(); // Click the edit button
    await page.waitForTimeout(1000);
    await page.locator('#Duration').click(); // Click on the duration field
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(300);
    // Press Backspace to clear the input
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(200);
    await page.locator('#Duration').type('2 days'); // Type the new duration
    await page.waitForTimeout(200);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});
test('650-changing child progress using edit action', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator('//*[@id="treeGridEditing_gridcontrol_content_table"]/tbody/tr[2]/td[2]').click(); // Click on the taskbar element
    await page.waitForTimeout(200);
    await page.locator('#Editing_edit').click(); // Click the edit button
    await page.waitForTimeout(1000);
    await page.locator('#Progress').click(); // Click on the progress field
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(300);
    // Press Backspace to clear the input
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(200);
    await page.locator('#Progress').type('40'); // Type the new progress
    await page.waitForTimeout(200);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});
test('651-changing parent task name using edit action', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator('//*[@id="treeGridEditing_gridcontrol_content_table"]/tbody/tr[1]/td[2]').click(); // Click on the taskbar element
    await page.waitForTimeout(500);
    await page.locator('#Editing_edit').click(); // Click the edit button
    await page.waitForTimeout(500);
    await page.locator('#TaskName').type('Start project'); // Type the new task name
    await page.waitForTimeout(500);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 }); // Compare the screen
});
test('652-changing parent start date using edit action', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator('//*[@id="treeGridEditing_gridcontrol_content_table"]/tbody/tr[1]/td[2]').click(); // Click on the taskbar element
    await page.waitForTimeout(200);
    await page.locator('#Editing_edit').click(); // Click the edit button
    await page.waitForTimeout(1000);
    await page.locator('#StartDate').type('4/5/2019'); // Type the new start date
    await page.waitForTimeout(500);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('653-open edit dialog using double click action', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.dblclick('//*[@id="Editing_chartContentBody"]/tr[3]/td/div[2]/div/div'); // Double-click on the taskbar element
    await page.waitForTimeout(1000);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    //Screenshot validation-Record is saved
    expect(await page.locator('.content.px-4').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('654-changing child progress using double click action', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.dblclick('//*[@id="Editing_chartContentBody"]/tr[3]/td/div[2]/div/div'); // Double-click on the taskbar element
    await page.waitForTimeout(1000);
    await page.locator('#Progress').click(); // Click on the progress field
    await page.waitForTimeout(200);
    await page.locator('#Progress').type('45'); // Type the new progress
    await page.waitForTimeout(200);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 }); // Compare the screen
});

test('655-changing child end date using double click action', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.dblclick('//*[@id="Editing_chartContentBody"]/tr[3]/td/div[2]/div/div'); // Double-click on the taskbar element
    await page.waitForTimeout(1000);
    await page.locator('#EndDate').click(); // Click on the end date field
    await page.waitForTimeout(300);
    await page.locator('#EndDate').type('06.04.2019'); // Type the new end date
    await page.waitForTimeout(300);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 }); // Compare the screen
});

test('656-changing child task name using double click action', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.dblclick('//*[@id="Editing_chartContentBody"]/tr[3]/td/div[2]/div/div'); // Double-click on the taskbar element
    await page.waitForTimeout(1000);
    // Clear the task name field
    await page.locator('#TaskName').fill('Identify Site place'); // Type the new task name
    await page.waitForTimeout(300);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('657-changing child start date using double click action', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.dblclick("//*[@id='Editing_chartContentBody']/tr[3]/td/div[2]/div/div"); // Double-click on the taskbar element
    await page.waitForTimeout(1000);
    await page.locator('#StartDate').click(); // Click on the start date field
    await page.locator('#StartDate').click(); // Click again to ensure focus
    await page.locator('#StartDate').type('4/6/2019'); // Type the new start date
    await page.waitForTimeout(300);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('658-changing duration using double click action', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.dblclick("//*[@id='Editing_chartContentBody']/tr[3]/td/div[2]/div/div"); // Double-click on the taskbar element
    await page.waitForTimeout(1000);
    // Clear the duration field
    await page.locator('#Duration').type('2 days'); // Type the new duration
    await page.waitForTimeout(300);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('659-Cell edit Task name', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.dblclick("//*[@id='treeGridEditing_gridcontrol_content_table']/tbody/tr[2]/td[2]"); // Double-click on the task name cell
    await page.waitForTimeout(1000);
    await page.locator('#DataItem___TaskName').click(); // Click on the task name field
    await page.locator('#DataItem___TaskName').clear(); // Clear the task name field
    await page.locator('#DataItem___TaskName').fill('TaskNew'); // Type the new task name
    await page.waitForTimeout(300);
    await page.locator('body').press('Enter'); // Press Enter to save
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('660-Cell edit Start date name', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.dblclick("//*[@id='treeGridEditing_gridcontrol_content_table']/tbody/tr[2]/td[3]"); // Double-click on the start date cell
    await page.waitForTimeout(1000);
    await page.locator('#DataItem___StartDate').click(); // Click on the start date field
    await page.locator('#DataItem___StartDate').fill(''); // Clear the start date field
    await page.locator('#DataItem___StartDate').fill('04.04.2019'); // Type the new start date
    await page.waitForTimeout(200);
    await page.locator('body').press('Enter'); // Press Enter to save
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('661-Cell edit end date', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.dblclick("//*[@id='treeGridEditing_gridcontrol_content_table']/tbody/tr[2]/td[4]"); // Double-click on the end date cell
    await page.waitForTimeout(1000);
    await page.locator('#DataItem___EndDate').click(); // Click on the end date field
    await page.locator('#DataItem___EndDate').clear(); // Clear the end date field
    await page.locator('#DataItem___EndDate').type('08.04.2019'); // Type the new end date
    await page.waitForTimeout(300);
    await page.locator('body').press('Enter'); // Press Enter to save
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('662-Cell edit Progress', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.dblclick("//*[@id='treeGridEditing_gridcontrol_content_table']/tbody/tr[2]/td[6]"); // Double-click on the progress cell
    await page.waitForTimeout(300);
    await page.locator('#DataItem___Progress').click(); // Click on the progress field
    await page.locator('#DataItem___Progress').clear(); // Clear the progress field
    await page.locator('#DataItem___Progress').fill('70'); // Type the new progress
    await page.waitForTimeout(300);
    await page.locator('body').press('Enter'); // Press Enter to save
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('663-Editing Load and setting Chinese culture', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    //await page.locator("#locale").click(); // Open the culture select dropdown
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    //  // Select the Chinese culture
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('664-perform add action Chinese culture', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator('#Editing_add').click(); // Click the add button
    await page.waitForTimeout(1000);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('665-perform delete action Chinese culture', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator('//*[@id="treeGridEditing_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click(); // Click on the taskbar element
    await page.waitForTimeout(500);
    await page.locator('#Editing_delete').click(); // Click the delete button
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('666-perform cancel action Chinese culture', async ({ page }) => {
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.dblclick('//*[@id="treeGridEditing_gridcontrol_content_table"]/tbody/tr[3]/td[2]'); // Double-click on the taskbar element
    await page.waitForTimeout(1000);
    await page.locator('#Editing_cancel').click(); // Click the cancel button
    await page.waitForTimeout(1000);
    //Screenshot validation-Cancel the record
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('667-changing child task name using edit action Chinese culture', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator('//*[@id="treeGridEditing_gridcontrol_content_table"]/tbody/tr[2]/td[2]').click(); // Click on the taskbar element
    await page.waitForTimeout(200);
    await page.locator('#Editing_edit').click(); // Click the edit button
    await page.waitForTimeout(1000);
    await page.locator('#TaskName').fill('Identify Site area'); // Type the new task name
    await page.waitForTimeout(300);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    //Screenshot validation-child task is updated.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('668-changing child start date using edit action Chinese culture', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator('//*[@id="treeGridEditing_gridcontrol_content_table"]/tbody/tr[2]/td[2]').click(); // Click on the taskbar element
    await page.waitForTimeout(200);
    await page.locator('#Editing_edit').click(); // Click the edit button
    await page.waitForTimeout(1000);
    await page.locator('#StartDate').fill('4/5/2019'); // Type the new start date
    await page.waitForTimeout(300);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('669-changing child end date using edit action Chinese culture', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator("//*[@id='treeGridEditing_gridcontrol_content_table']/tbody/tr[2]/td[4]").click(); // Click on the end date cell
    await page.waitForTimeout(200);
    await page.locator('#Editing_edit').click(); // Click the edit button
    await page.waitForTimeout(1000);
    await page.locator('#EndDate').fill('4/8/2019'); // Type the new end date
    await page.waitForTimeout(200);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('670-changing duration using edit action Chinese culture', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator("//*[@id='treeGridEditing_gridcontrol_content_table']/tbody/tr[2]/td[4]").click(); // Click on the duration cell
    await page.waitForTimeout(200);
    await page.locator('#Editing_edit').click(); // Click the edit button
    await page.waitForTimeout(1000);
    await page.locator('#Duration').fill('2 days'); // Type the new duration
    await page.waitForTimeout(300);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 }); // Compare the screen
});

test('671-changing child progress using edit action Chinese culture', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator("//*[@id='treeGridEditing_gridcontrol_content_table']/tbody/tr[2]/td[2]").click(); // Click on the progress cell
    await page.waitForTimeout(500);
    await page.locator('#Editing_edit').click(); // Click the edit button
    await page.waitForTimeout(1000); // Clear the progress field
    await page.locator('#Progress').fill('40'); // Type the new progress
    await page.waitForTimeout(300);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('672-changing parent task name using edit action Chinese culture', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator("//*[@id='treeGridEditing_gridcontrol_content_table']/tbody/tr[1]/td[2]").click(); // Click on the parent task name cell
    await page.waitForTimeout(500);
    await page.locator('#Editing_edit').click(); // Click the edit button
    await page.waitForTimeout(1000); // Clear the task name field
    await page.locator('#TaskName').fill('Start project'); // Type the new task name
    await page.waitForTimeout(300);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 }); // Compare the screen
});

test('673-changing parent start date using edit action Chinese culture', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    await page.locator("//*[@id='treeGridEditing_gridcontrol_content_table']/tbody/tr[1]/td[2]").click(); // Click on the parent start date cell
    await page.waitForTimeout(100);
    await page.locator('#Editing_edit').click(); // Click the edit button
    await page.waitForTimeout(1000);
    await page.locator('#StartDate').type('4/5/2019'); // Type the new start date
    await page.waitForTimeout(200);
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click(); // Click the save button
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 }); // Compare the screen
});

test('674-open edit dialog using double click action Chinese culture', async ({ page }) => {
    // Navigate to the editing page
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    // Perform double click on the target element to open the edit dialog
    await page.locator("//*[@id='Editing_chartContentBody']/tr[3]/td/div[2]/div/div").dblclick();
    await page.waitForTimeout(1000);
    // Click on the close button to close the dialog
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click();
    await page.waitForTimeout(1000);
    // Take a screenshot of the opened edit dialog and compare it with the baseline
    expect(await page.locator('.content.px-4').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('675-changing child progress using double click action Chinese culture', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    // Navigate to the editing page
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    // Perform double click on the target element to open the edit dialog
    await page.locator("//*[@id='Editing_chartContentBody']/tr[3]/td/div[2]/div/div").dblclick();
    await page.waitForTimeout(1000);
    // Edit the progress field by clearing and updating the value
    await page.locator('#Progress').fill('45');
    await page.waitForTimeout(200);
    // Close the dialog and take a screenshot of the updated element
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Progress is updated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('676-changing child end date using double click action Chinese culture', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    // Navigate to the editing page
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    // Perform double click on the target element to open the edit dialog
    await page.locator("//*[@id='Editing_chartContentBody']/tr[3]/td/div[2]/div/div").dblclick();
    await page.waitForTimeout(1000);
    // Edit the end date by clearing and entering the new value
    await page.locator('#EndDate').fill('06.04.2019');
    await page.waitForTimeout(200);
    // Close the dialog and take a screenshot of the updated element
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('678-changing child task name using double click action Chinese culture', async ({ page }) => {
    // Navigate to the editing page
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    // Perform double click on the target element to open the edit dialog
    await page.locator("//*[@id='Editing_chartContentBody']/tr[3]/td/div[2]/div/div").dblclick();
    await page.waitForTimeout(1000);
    // Edit the task name field by clearing and updating the value
    await page.locator('#TaskName').fill('Identify Site place');
    await page.waitForTimeout(200);
    // Close the dialog and take a screenshot of the updated element
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-taskname changed 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('679-changing child start date using double click action Chinese culture', async ({ page }) => {
    // Navigate to the editing page
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    // Perform double click on the target element to open the edit dialog
    await page.locator("//*[@id='Editing_chartContentBody']/tr[3]/td/div[2]/div/div").dblclick();
    await page.waitForTimeout(1000);
    // Edit the start date field by clicking and entering a new value
    await page.locator('#StartDate').fill('4/6/2019');
    await page.waitForTimeout(200);
    // Close the dialog and take a screenshot of the updated element
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-start date changed
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('680-changing duration using double click action Chinese culture', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    // Navigate to the editing page
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    // Perform double click on the target element to open the edit dialog
    await page.locator("//*[@id='Editing_chartContentBody']/tr[3]/td/div[2]/div/div").dblclick();
    await page.waitForTimeout(1000);
    // Edit the duration field by clearing and updating the value
    await page.locator('#Duration').fill('2 Tage');
    await page.waitForTimeout(200);
    // Close the dialog and take a screenshot of the updated element
    await page.locator("(//button[@type='button' and contains(@class,'e-control e-btn e-lib e-flat ')])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-duration changed
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('681-Cell edit Task name Chinese culture', async ({ page }) => {
    // Navigate to the editing page
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    // Perform double click on the task name cell to edit the task name
    await page.locator("//*[@id='treeGridEditing_gridcontrol_content_table']/tbody/tr[2]/td[2]").dblclick();
    await page.waitForTimeout(1000);
    // Edit the task name by clearing and updating the value
    await page.locator('#DataItem___TaskName').click();
    await page.locator('#DataItem___TaskName').clear();
    await page.locator('#DataItem___TaskName').fill('TaskNew');
    // Simulate pressing Enter to save the change
    await page.locator('body').press('Enter');
    await page.waitForTimeout(1000);
    // Take a screenshot of the updated element
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('682-Cell edit Start date name Chinese culture', async ({ page }) => {
    // Navigate to the editing page
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    // Double click on the Start Date cell to enable editing
    await page.locator("//*[@id='treeGridEditing_gridcontrol_content_table']/tbody/tr[2]/td[3]").dblclick();
    await page.waitForTimeout(300);
    // Click on the Start Date field and clear its contents
    await page.locator('#DataItem___StartDate').click();
    await page.waitForTimeout(200);
    // Enter the new start date
    await page.locator('#DataItem___StartDate').type('04.04.2019');
    await page.waitForTimeout(200);
    // Press Enter to confirm the change
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Take a screenshot of the updated grid and compare it with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('683-Cell edit end date Chinese culture', async ({ page }) => {
    // Navigate to the editing page
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    // Double click on the End Date cell to enable editing
    await page.locator("//*[@id='treeGridEditing_gridcontrol_content_table']/tbody/tr[2]/td[4]").dblclick();
    await page.waitForTimeout(300);
    // Click on the End Date field, clear the current value, and enter the new end date
    await page.locator('#DataItem___EndDate').click();
    await page.waitForTimeout(200);
    await page.locator('#DataItem___EndDate').clear();
    await page.waitForTimeout(200);
    await page.locator('#DataItem___EndDate').type('08.04.2019');
    await page.waitForTimeout(200);
    // Press Enter to confirm the change
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Take a screenshot of the updated grid and compare it with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('684-Cell edit Progress Chinese culture', async ({ page }) => {
    // Navigate to the editing page
    await page.goto('http://localhost:5004/E2EMigration/editing1');
    await page.waitForTimeout(500);
    // Double click on the Progress cell to enable editing
    await page.locator("//*[@id='treeGridEditing_gridcontrol_content_table']/tbody/tr[2]/td[6]").dblclick();
    await page.waitForTimeout(300);
    // Clear the existing progress value and update it
    await page.locator('#DataItem___Progress').click();
    await page.locator('#DataItem___Progress').clear();
    await page.waitForTimeout(200);
    await page.locator('#DataItem___Progress').fill('70');
    await page.waitForTimeout(200);
    // Press Enter to confirm the change
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Open a dropdown to select a new value (Simulate Arrow key press for navigating the dropdown)
    //await page.locator("#locale").click();
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Take a screenshot of the updated grid and compare it with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('685-Taskmode on load', async ({ page }) => {
    // Navigate to the Taskmode page
    await page.goto('http://localhost:5004/E2EMigration/Taskmode1');
    await page.waitForTimeout(500);
    // Open the task mode dropdown menu and select the first option
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Enter');
    // //select the first option
    // await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('Enter');
    // await page.waitForTimeout(500);
    // Click on the task row to enable editing or view its details
    await page.locator("//*[@id='treeGridTaskmode_gridcontrol_content_table']/tbody/tr[3]/td[2]").click();
    await page.waitForTimeout(500);
    // Take a screenshot of the task grid and compare it with the baseline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('686-Taskmode on German culture', async ({ page }) => {
    // Navigate to the Taskmode page
    await page.goto('http://localhost:5004/E2EMigration/Taskmode1');
    await page.waitForTimeout(500);
    // Open the task mode dropdown and select the German culture
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Enter');
    //Select the German culture
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(600);
    // Click and hold the task's right handle to drag
    await page.locator("(//div[contains(@class, 'e-gantt-manualparenttaskbar-right')])[1]").click({ button: 'left' });
    await page.waitForTimeout(1000);
    // Take a screenshot and compare it with the baseline for German culture
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('687-Taskmode on Chinese culture', async ({ page }) => {
    // Navigate to the Taskmode page
    await page.goto('http://localhost:5004/E2EMigration/Taskmode1');
    await page.waitForTimeout(500);
    // Open the task mode dropdown and select the Chinese culture
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Enter');
    // await page.waitForTimeout(400);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Click and hold the task's right handle to drag
    await page.locator("(//div[contains(@class, 'e-gantt-manualparenttaskbar-right')])[1]").click({ button: 'left' });
    await page.waitForTimeout(1000);
    // Take a screenshot and compare it with the baseline for Chinese culture
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('688-Taskmode on French culture', async ({ page }) => {
    // Navigate to the Taskmode page
    await page.goto('http://localhost:5004/E2EMigration/Taskmode1');
    await page.waitForTimeout(500);
    // Open the task mode dropdown and select the French culture
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Enter');
    //Select the French culture
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Take a screenshot and compare it with the baseline for French culture
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});



test('689-Taskmode on Frenchculture', async ({ page }) => {
    // Navigate to the Taskmode page
    await page.goto('http://localhost:5004/E2EMigration/Taskmode1');
    await page.waitForTimeout(500);
    // Open the task mode dropdown and select the French culture
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Enter');
    //Select the French culture
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Take a screenshot and compare it with the baseline for French culture
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});
