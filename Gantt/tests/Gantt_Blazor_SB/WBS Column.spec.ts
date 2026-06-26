import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
import { pdf } from 'pdf-to-img';

test.use({
    launchOptions: {
        ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
});

test('1-WBS Column  Initial', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Deselect Auto Generate WBS', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the checkbox for the selection
    await page.locator("(//span[contains(@class,'e-frame')])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Record is deselected for Auto Generate WBS
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Add new record', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button.
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Edit the record through dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the record on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Edit the Task Name
    await page.locator("(//input[contains(@class,'e-control')])[2]");
    await page.waitForTimeout(500);
    //Press the keys
    await page.keyboard.press("Control+A");
    await page.waitForTimeout(500);
    //Press Backspace
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.type("Concept");
    await page.waitForTimeout(500);
    //Click the save button.
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Delete Records', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the record on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button.
    await page.locator("(//button[text()='OK'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Record has been deleted
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Cell edit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the taskname
    await page.locator("(//td[contains(@class,'e-rowcell')])[3]").dblclick();
    await page.waitForTimeout(1000);
    await page.keyboard.press("Control+A");
    await page.waitForTimeout(500);
    //Press Backspace
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.type("1");
    await page.waitForTimeout(500);
    //Click the save button.
    await page.keyboard.press("Enter");
    await page.waitForTimeout(1000);
    //Screenshot validation-The taskname has been cell edited
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Context menu
test('7-Indent the records', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click();
    await page.waitForTimeout(500);
    //Right click the record on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click the Indent 
    await page.locator("(//li[text()='Indent'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Record has been indented
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Filter the WBS Code Starts with', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for WBS Code
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //Enter the value
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.type("1.3");
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    //Click the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The taskname has been cell edited
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Delete Tasks', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click();
    await page.waitForTimeout(500);
    //Click the record on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click the Delete Task 
    await page.locator("(//li[text()='Delete Task'])[1]").click();
    await page.waitForTimeout(500);
    //Click the OK button.
    await page.locator("(//button[text()='OK'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Record has been deleted
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Task Information dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click();
    await page.waitForTimeout(500);
    //Right click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Select TaskI Information
    await page.locator("(//li[text()='Task Information'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The dialog for Task Information is opened
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Convert To Milestone', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").click();
    await page.waitForTimeout(500);
    //Right click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[18]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Select Convert
    await page.locator("(//li[text()='Convert'])[1]").hover();
    await page.waitForTimeout(2000);
    //Select Convert To Milestone
    await page.locator("(//li[text()='To Milestone'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task Converted to Milestone
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Add Task Above', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click();
    await page.waitForTimeout(500);
    //Right click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Select Add
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Add Above 
    await page.locator("(//li[text()='Above'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task is Added Above
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Add Task Below', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click();
    await page.waitForTimeout(500);
    //Right click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Select Add
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Add Below 
    await page.locator("(//li[text()='Below'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task is added Below
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Add Task Child', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click();
    await page.waitForTimeout(500);
    //Right click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Select Add
    await page.locator("(//li[text()='Add'])[1]").hover({ force: true });
    await page.waitForTimeout(1000);
    //Add Child record 
    await page.locator("(//li[text()='Child'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task is added is Child Record
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Add Task Milestone', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click();
    await page.waitForTimeout(500);
    //Right click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Select Add
    await page.locator("(//li[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Add Milestone 
    await page.locator("(//li[text()='Milestone'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Task is added Milestone
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Add dependency 
test('17-Add dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the record on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency to open the dialog tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[4]").click();
    await page.waitForTimeout(500);
    //Click the Add button to add new dependency record
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(500);
    //Click the input to select dependency records
    await page.locator("(//span[contains(@class,'e-input')])[6]").click();
    await page.waitForTimeout(500);
    //Add dependency
    await page.locator("(//li[text()='3-Defining target audience'])[1]").click();
    await page.waitForTimeout(500);
    //Click the save button.
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Dependency record is added
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//delete dependency record
test('18-Delete dependency', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the record on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to dependency to open the dialog tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[4]").click();
    await page.waitForTimeout(500);
    //Click the Dependency record to delete
    await page.locator("(//td[text()='2-Defining the product and its usage'])[1]").click();
    await page.waitForTimeout(500);
    //Click delete
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click the save button.
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Dependency record is deleted
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Collapse all records
test('19-Collapse all record', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the collapse all button on the toolbar
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are in collapsed state
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Expand all
test('20-Expand all record', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the collapse all button on the toolbar
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(500);
    //Click Expand all button on the toolbar
    await page.locator("(//span[text()='Expand all'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are in Expanded state
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Sort Ascending WBS Code', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click to sort Ascending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records for WBS Code are sorted in Ascending state
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Sort Descending WBS Code', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click to select Ascending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select descending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The records are in descending for WBS Code
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Sort Ascending Taskname', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click to sort Ascending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[2]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records for Taskname are sorted in Ascending state
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Sort Descending Taskname', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click to select Ascending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[2]').click();
    await page.waitForTimeout(500);
    //Click to select descending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[2]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The records are in descending for Task name
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Sort Ascending start date', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click to sort Ascending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records for Taskname are sorted in Ascending state for start date
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Sort Descending start date', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click to select Ascending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[3]').click();
    await page.waitForTimeout(500);
    //Click to select descending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The records are in descending for start date
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Sort Ascending WBS Predecessor', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click to sort Ascending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[4]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records for Taskname are sorted in Ascending state for WBS Predecessor
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Sort Descending WBS Predecessor', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click to select Ascending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[4]').click();
    await page.waitForTimeout(500);
    //Click to select descending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[4]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The records are in descending for WBS Predecessor
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('29-Sort Ascending Duration', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click to sort Ascending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[5]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records for Taskname are sorted in Ascending state for Duration
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Sort Descending Duration', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click to select Ascending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[5]').click();
    await page.waitForTimeout(500);
    //Click to select descending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[5]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The records are in descending for Duration
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Sort Ascending Progress', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click to sort Ascending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-lastcell e-fltr-icon")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records for Taskname are sorted in Ascending state for Progress
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Sort Descending Progress', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click to select Ascending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-lastcell e-fltr-icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select descending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-lastcell e-fltr-icon")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The records are in descending for Progress
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Multisort ascending
test('33-Multi sort ascending the columns', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Press the keyboard Control button down
    await page.keyboard.down("Control");
    //Sort ascend 1st column
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[1]').click();
    await page.waitForTimeout(100);
    //Sort ascend 2nd column
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[2]').click();
    await page.waitForTimeout(100);
    //Sort ascend 3rd column
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[3]').click();
    await page.waitForTimeout(100);
    //Press the keyboard Control button down
    await page.keyboard.up("Control");
    await page.waitForTimeout(2000)
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//multisort descending  each column
test('34-Multisort descending', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click on the control button to allow for selection of each column
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[1]').click({
        modifiers: ['Control']
    });
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[2]').click({
        modifiers: ['Control']
    });
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[3]').click({
        modifiers: ['Control']
    });
    //Select a record for the columns
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[4]').click({
        modifiers: ['Control']
    });
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[5]').click({
        modifiers: ['Control']
    });
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-lastcell e-fltr-icon")])[1]').click({
        modifiers: ['Control']
    });
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Deselect Auto Generate WBS Indent', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the checkbox for the selection
    await page.locator("(//span[contains(@class,'e-frame')])[1]").click();
    await page.waitForTimeout(500);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click();
    await page.waitForTimeout(500);
    //Right click the record on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click the Indent 
    await page.locator("(//li[text()='Indent'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Record is indented but the WBS Code is maintained
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Deselect Auto Generate WBS Outdent', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the checkbox for the selection
    await page.locator("(//span[contains(@class,'e-frame')])[1]").click();
    await page.waitForTimeout(500);
    //Click the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click();
    await page.waitForTimeout(500);
    //Right click the record on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[24]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click the Outdent 
    await page.locator("(//li[text()='Outdent'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Record is indented but the WBS Code is maintained
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Filter the WBS Code Does Not Start With ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for WBS Code
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select Does not start with
    await page.locator("(//li[text()='Does Not Start With'])[1]").click();
    await page.waitForTimeout(2000);
    //Enter the value
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.type("2");
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    //Click the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Filter the WBS Code Ends With ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for WBS Code
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select Ends with
    await page.locator("(//li[text()='Ends With'])[1]").click();
    await page.waitForTimeout(2000);
    //Enter the value
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.type(".2");
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    //Click the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-End with is filtered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Filter the WBS Code Does Not Ends With ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for WBS Code
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //select  from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select Does Not End with
    await page.locator("(//li[text()='Does Not End With'])[1]").click();
    await page.waitForTimeout(2000);
    //Enter the value
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.type("3.1");
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    //Click the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Record is filtered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Filter the WBS Code contains', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for WBS Code
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select Contains
    await page.locator("(//li[text()='Contains'])[1]").click();
    await page.waitForTimeout(2000);
    //Enter the value
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.type("3.1");
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    //Click the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records is filtered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Filter the WBS Code Does Not contain', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for WBS Code
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select Does Not Contain
    await page.locator("(//li[text()='Does Not Contain'])[1]").click();
    await page.waitForTimeout(2000);
    //Enter the value
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.type("1");
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    //Click the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records is filtered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('42-Filter the WBS Code Equal', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for WBS Code
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select Equal
    await page.locator("(//li[text()='Equal'])[1]").click();
    await page.waitForTimeout(2000);
    //Enter the value
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.type("1.3.1");
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    //Click the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records is filtered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-Filter the WBS Code Empty', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for WBS Code
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select Empty
    await page.locator("(//li[text()='Empty'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-No records are displayed
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('44-Filter the WBS Code Not Empty', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the filter icon for WBS Code
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select Not Empty
    await page.locator("(//li[text()='Not Empty'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records is filtered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('45-Filter the WBS Code Like', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for WBS Code
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select Like
    await page.locator("(//li[text()='Like'])[1]").click();
    await page.waitForTimeout(2000);
    //Enter the value
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.type("7");
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    //Click the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records is filtered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Filter the progress
test('46-Filter the WBS Code Equal', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for Progress
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[7]").click();
    await page.waitForTimeout(500);
    //Enter the value
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.type("47");
    await page.waitForTimeout(500);
    //Click the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records is filtered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('47-Filter the WBS Code Not Equal', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for progress
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[7]").click();
    await page.waitForTimeout(500);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select Not Equal
    await page.locator("(//li[text()='Not Equal'])[1]").click();
    await page.waitForTimeout(2000);
    //Enter the value
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.type("47");
    await page.waitForTimeout(500);
    //Click the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records is filtered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('48-Filter the WBS Code Greater Than ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for progress
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[7]").click();
    await page.waitForTimeout(500);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select Greater Than
    await page.locator("(//li[text()='Greater Than'])[1]").click();
    await page.waitForTimeout(2000);
    //Enter the value
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.type("30");
    await page.waitForTimeout(500);
    //Click the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records is filtered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('49-Filter the WBS Code Greater Than Or Equal', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for progress
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[7]").click();
    await page.waitForTimeout(500);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select Greater Than Or Equal
    await page.locator("(//li[text()='Greater Than Or Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Enter the value
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.type("30");
    await page.waitForTimeout(500);
    //Click the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records is filtered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('50-Filter the WBS Code Less Than', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for progress
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[7]").click();
    await page.waitForTimeout(500);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select Less Than
    await page.locator("(//li[text()='Less Than'])[1]").click();
    await page.waitForTimeout(500);
    //Enter the value
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.type("30");
    await page.waitForTimeout(500);
    //Click the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records is filtered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('51-Filter the WBS Code Less Than Or Equal', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for progress
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[7]").click();
    await page.waitForTimeout(500);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select Less Than Or Equal
    await page.locator("(//li[text()='Less Than Or Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Enter the value
    await page.locator("(//input[contains(@class,'e-control')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the record
    await page.keyboard.type("30");
    await page.waitForTimeout(500);
    //Click the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records is filtered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('52-Filter the WBS Code Null', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for progress
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[7]").click();
    await page.waitForTimeout(500);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select Null
    await page.locator("(//li[text()='Null'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records is filtered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('53-Filter the WBS Code Not Null', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the filter icon for progress
    await page.locator("(//div[contains(@class,'e-filtermenudiv')])[7]").click();
    await page.waitForTimeout(500);
    //select from the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select Null
    await page.locator("(//li[text()='Not Null'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records is filtered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('54-Sort Descending and collapse all', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click to select Ascending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select descending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[1]').click();
    await page.waitForTimeout(500);
    //Collapse all records
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are collapsed all after sorting WBS Code 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('55-Sort Descending,Add new task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click to select Ascending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select descending
    await page.locator('(//th[contains(@class,"e-headercell e-leftalign e-mousepointer e-fltr-icon ")])[1]').click();
    await page.waitForTimeout(500);
    //Collapse all records
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Click save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-New Record is added
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('56-Deselect Auto Generate Add new task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the checkbox for the selection
    await page.locator("(//span[contains(@class,'e-frame')])[1]").click();
    await page.waitForTimeout(500);
    //Collapse all records
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Click save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-New Record is added after task collapsed all 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
