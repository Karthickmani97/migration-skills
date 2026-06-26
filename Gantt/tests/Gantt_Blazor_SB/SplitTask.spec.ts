import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
        ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
});

test('1-Split task initial', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Context menu options for segment task', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class,"e-gantt-child")])[7]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Split a task into multiple segments and drag taskbar', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class,"e-gantt-child")])[7]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    await page.locator('(//li[contains(@class,"e-menu-item")])[12]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Contextmenu options on chart row', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class,"e-left-label-inner-div")])[2]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Merge task left through contextmenu', async ({ page }) => {
    // Navigate to the split tasks page with the fluent theme
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(1000);
    // Right-click on the seventh child task
    await page.locator('(//div[contains(@class,"e-gantt-child")])[7]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    // Click on the context menu item to merge task left
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    // Click on the context menu item to confirm the merge
    await page.locator("(//li[text()='Left'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation-The task should be merged to the left
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Merge task right through contextmenu', async ({ page }) => {
    // Navigate to the split tasks page with the fluent theme
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(1000);
    // Right-click on the seventh child task
    await page.locator('(//div[contains(@class,"e-gantt-child")])[7]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    // Click on the context menu item to merge task right
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    // Click on the context menu item to confirm the merge
    await page.locator("(//li[text()='Right'])[1]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - The task should be merged to the right
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Zoom to fit', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[10]').click();
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Add above through contextmenu', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell")])[23]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    await page.locator('(//li[contains(@class,"e-menu-item")])[14]').click();
    await page.waitForTimeout(200);
    await page.locator('(//li[contains(@class,"e-menu-item")])[16]').click();
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Add below through contextmenu', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell")])[23]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    await page.locator('(//li[contains(@class,"e-menu-item")])[14]').click();
    await page.waitForTimeout(200);
    await page.locator('(//li[contains(@class,"e-menu-item")])[17]').click();
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Add child through contextmenu', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell")])[23]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    await page.locator('(//li[contains(@class,"e-menu-item")])[14]').click();
    await page.waitForTimeout(200);
    await page.locator('(//li[contains(@class,"e-menu-item")])[18]').click();
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Add milestone through contextmenu', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell")])[23]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    await page.locator('(//li[contains(@class,"e-menu-item")])[14]').click();
    await page.waitForTimeout(200);
    await page.locator('(//li[contains(@class,"e-menu-item")])[19]').click();
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Convert task to milestone', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell")])[23]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    await page.locator('(//li[contains(@class,"e-menu-item")])[13]').click();
    await page.waitForTimeout(200);
    await page.locator('(//li[contains(@class,"e-menu-item")])[17]').click();
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Delete parent record', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
    await page.waitForTimeout(200);
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Edit start date through cell edit', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell")])[10]').dblclick();
    await page.waitForTimeout(800);
    await page.locator('#DataItem___StartDate').click();
    await page.waitForTimeout(600);
    await page.locator('#DataItem___StartDate').fill("3/31/2022");
    await page.waitForTimeout(100);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Indent record', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell")])[23]').click({
        button: 'right'
    });
    await page.waitForTimeout(1200);
    await page.locator('(//li[text()="Indent"])[1]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Indent and outdent record', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell")])[23]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    await page.locator('(//li[contains(@class,"e-menu-item")])[7]').click();
    await page.waitForTimeout(600);
    await page.locator('(//td[contains(@class,"e-rowcell")])[23]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    await page.locator('(//li[contains(@class,"e-menu-item")])[8]').click();
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Zoom out 3 times', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[9]').click();
    await page.waitForTimeout(200);
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[9]').click();
    await page.waitForTimeout(200);
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[9]').click();
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Merge task Right through contextmenu', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the child taskbar
    await page.locator('(//div[contains(@class,"child")])[2]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click to select Merge task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(200);
    //Select Merge Right
    await page.locator("(//li[text()='Right'])").click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Convert milestone to Task', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    //Click to select Milestone on chart side.
    await page.locator('(//div[contains(@class,"milestone")])[1]').click({
        button: 'right'
    });
    //Click convert
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Convert'])").click();
    await page.waitForTimeout(200);
    //Click Task
    await page.locator("(//li[text()='To Task'])").click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Edit End date through cell edit', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    //Select the end date to edit through cell edit
    await page.locator('(//td[contains(@class,"rowcell")])[18]').dblclick();
    await page.waitForTimeout(1000);
    //Click Endate
    await page.locator('#DataItem___EndDate').click();
    await page.waitForTimeout(600);
    //Click to Fill the records
    await page.locator('#DataItem___EndDate').fill("4/12/2022");
    await page.waitForTimeout(500);
    //Press theEnter key on the Keynboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Collapse all Records and Add Task Above', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    //Click to collapse all records
    await page.locator('(//span[contains(@class,"collapseall")])').click();
    await page.waitForTimeout(1000);
    //Click the parent taskbar on the chart side of the component
    await page.locator('(//div[contains(@class,"parent")])[1]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Add 
    await page.locator("(//li[text()='Add'])").click();
    await page.waitForTimeout(500);
    //Click to select Above
    await page.locator("(//li[text()='Above'])").click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Collapse all Records, Add Task Below and Zoom In ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    //Click to collapse all records
    await page.locator('(//span[contains(@class,"collapseall")])').click();
    await page.waitForTimeout(1000);
    //Click the parent taskbar on the chart side of the component
    await page.locator('(//div[contains(@class,"parent")])[1]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Add 
    await page.locator("(//li[text()='Add'])").click();
    await page.waitForTimeout(500);
    //Click to select Below
    await page.locator("(//li[text()='Below'])").click();
    await page.waitForTimeout(500);
    //Click the Zoom In button
    await page.locator('(//span[contains(@class,"zoomin")])').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Delete the child record through context menu', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the child taskbar on the chart side of the component
    await page.locator('(//div[contains(@class,"child")])[4]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Delete Task
    await page.locator("(//li[text()='Delete Task'])").click();
    await page.waitForTimeout(500);
    //Click to select the child record
    await page.locator('(//td[contains(@class,"rowcell")])[16]').dblclick();
    await page.waitForTimeout(1000);
    //Click to Edit the Name
    await page.locator('(//input[contains(@class,"control")])').fill('Site');
    await page.waitForTimeout(500);
    //Press the Enter key on the keyboard.
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    //Screenshot validation-On grid side of the component the child record should appear edited after press on Enter button.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Edit the dependency data though cell edit', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the dependency to cell edit
    await page.locator('(//td[contains(@class,"rowcell")])[14]').dblclick();
    await page.waitForTimeout(1000);
    //Edit the dependency record for the child record.
    await page.locator('#DataItem___Predecessor').fill('3FS');
    await page.waitForTimeout(500);
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(200);
    //Click the child taskbar on the chart side to show context menu
    await page.locator('(//div[contains(@class,"child")])[1]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click the Task Information to open dialog tab
    await page.locator("(//li[text()='Task Information'])").click();
    await page.waitForTimeout(200);
    //Click to Open the Dependency to show its dialog tab
    await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Cancel the record after Add and Edit the New Record', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    //Click to Add to Add New Record
    await page.locator('(//span[contains(@class,"add")])').click();
    await page.waitForTimeout(1000);
    //Edit the Task Name
    await page.locator('#TaskName').fill('Task');
    await page.waitForTimeout(500);
    //Click the Cancel button
    await page.locator("(//button[text()='Cancel'])").click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Edit the parent record to have Null Value', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(1000);
    //Click to collapse all
    await page.locator('(//span[contains(@class,"collapseall")])').click();
    await page.waitForTimeout(200);
    //Click to cell edit the Parent record Name to have Null value
    await page.locator('(//td[contains(@class,"rowcell")])[2]').dblclick();
    await page.waitForTimeout(1000);
    //Edit the Record name to have Null value
    await page.locator('(//input[contains(@class,"control")])[1]').fill('');
    await page.waitForTimeout(200);
    //Click the update button on the toolbar
    await page.locator('(//span[contains(@class,"e-update")])').click();
    await page.waitForTimeout(200);
    //Zoom Fit
    await page.locator('(//span[contains(@class,"zoomtofit")])').click();
    await page.waitForTimeout(200);
    //Delete the third parent taskbar
    await page.locator('(//div[contains(@class,"parent")])[3]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Delete task
    await page.locator("(//li[text()='Delete Task'])").click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Merge the child taskbar after collapse all', async ({ page }) => {
    // Navigate to the split tasks page with the fluent theme
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    // Click to Collapse all
    await page.locator('(//span[contains(@class,"collapseall")])').click();
    await page.waitForTimeout(500);
    // Click the icon on the parent record to Expand it
    await page.locator('(//span[contains(@class,"e-icons")])[17]').click();
    await page.waitForTimeout(500);
    // Right-click the child taskbar to Merge
    await page.locator('(//div[contains(@class,"child")])[1]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    // Click Merge Task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    // Click Right to confirm the merge
    await page.locator("(//li[text()='Right'])").click();
    await page.waitForTimeout(500);
    // Right-click the Child taskbar again
    await page.locator('(//div[contains(@class,"child")])[4]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    // Click Merge Task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    // Click Right to confirm the merge
    await page.locator("(//li[text()='Right'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - The task should be merged to the right
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Zoom Out and Outdent the child Record', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    //Click Zoom Out 
    await page.locator('(//span[contains(@class,"zoomout")])').click();
    await page.waitForTimeout(1000);
    //Click the child record to Indent
    await page.locator('(//td[contains(@class,"rowcell")])[9]').click({
        button: 'right'
    });
    await page.waitForTimeout(500);
    //Click the Outdent 
    await page.locator("(//li[text()='Outdent'])").click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/887023
test('29-BUG-887023-The icons for Below and Above', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent2');
    await page.waitForTimeout(2000);
    //Select the 1st child taskbar on chart side, by Right click
    await page.locator('(//div[contains(@class,"child")])[2]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click Add to show the context menu for Above and Below 
    await page.locator("(//li[text()='Add'])").hover();
    await page.waitForTimeout(2000);
    //Screenshot validation-The icons for Add, avove and Below are visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/890567
test('30-Console error click save button', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent2');
    await page.waitForTimeout(1000);
    //Select the 1st child taskbar on chart side, by Right click
    await page.locator('(//div[contains(@class,"child-taskbar")])[3]').click();
    await page.waitForTimeout(500);
    //Click the edit button
    await page.locator('(//span[contains(@class,"e-edit")])[1]').click();
    await page.waitForTimeout(500);
    //Navigate to segments to open the dialog tab
    await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click();
    await page.waitForTimeout(500);
    //Select the segment to delete
    await page.locator("(//td[text()='2'])[2]").click();
    await page.waitForTimeout(500);
    //Click Delete button
    await page.locator("(//span[text()='Delete'])[2]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    //Screenshot validation-Consolerror is not thrown when click save button
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/887432
test('31-Console error when add record', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent2');
    await page.waitForTimeout(1000);
    //Select the 1 st parent record to delete
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar-inner-div e-row-expand e-gantt-parent-taskbar')])[1]").click();
    await page.waitForTimeout(200);
    //Click the delete button on the toolbar
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(200);
    //Click the 2nd parent record to delete
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar-inner-div e-row-expand e-gantt-parent-taskbar')])[1]").click();
    await page.waitForTimeout(200);
    //Click the delete button on the toolbar
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(200);
    //Click 3rd parent record
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar-inner-div e-row-expand e-gantt-parent-taskbar')])[1]").click();
    await page.waitForTimeout(200);
    //Click delete button on the tooolbar
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(200);
    //Click the Add button on the toolbar
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(200);
    //Click the save button to save the record added.
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-New task record is added.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903091
test('32-Multiple selection on gridside', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent2');
    await page.waitForTimeout(2000);
    //Select the 1st child taskbar on chart side, by Right click
    await page.locator('(//div[contains(@class,"child")])[2]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click Add to show the context menu for Above and Below 
    await page.locator("(//li[text()='Add'])").hover();
    await page.waitForTimeout(500);
    //Select child record
    await page.locator("(//li[text()='Child'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-There is no mutlple selection 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/937078
// test('33-Convert to milestone', async ({ page }) => {
//     await page.goto(Helper.baseUrlserver+ '/Resource-Splittask');
//     await page.waitForTimeout(2000);
//     //Select the 1st child taskbar on chart side, by Right click
//     await page.locator("(//td[contains(@class,'rowcell')])[29]").click({
//         button: 'right'
//     });
//     await page.waitForTimeout(1000);
//     //Select Milestone
//     await page.keyboard.press('ArrowDown');
//     await page.keyboard.press('ArrowDown');
//     await page.keyboard.press('ArrowDown');
//     await page.keyboard.press('ArrowDown');
//     await page.keyboard.press('ArrowRight');
//     await page.keyboard.press('ArrowDown');
//     await page.keyboard.press('ArrowDown');
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(500);
//     //Delete project Estimation
//     await page.locator('(//td[contains(@class,"rowcell")])[29]').click();
//     await page.waitForTimeout(200);
//     //Click the delete button on the toolbar
//     await page.locator('(//span[contains(@class,"e-delete")])[1]').click();
//     await page.waitForTimeout(200);
//     //Click the record to delete
//     await page.locator('(//td[contains(@class,"rowcell")])[38]').click();
//     await page.waitForTimeout(200);
//     //Click the delete button on the toolbar
//     await page.locator('(//span[contains(@class,"e-delete")])[1]').click();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-The icons for Add, avove and Below are visible
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 0.01 });
// });

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/936640
test('34-936640-Edited Duration Not Updating', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent2');
    await page.waitForTimeout(1000);
    //Select the 1st  child taskbar on chart side
    await page.locator('(//div[contains(@class,"child-taskbar")])[2]').dblclick();
    await page.waitForTimeout(500);
    //Navigate to segments to open the dialog tab
    await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click();
    await page.waitForTimeout(500);
    //Select the segment to edit
    await page.locator("(//td[text()='6'])[2]").dblclick();
    await page.waitForTimeout(1000);
    //Click duration
    await page.locator("(//input[contains(@class,'control')])[8]").click();
    await page.waitForTimeout(500);
    //Press the keyboard to select 
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('9');
    await page.waitForTimeout(500);
    //Click the save button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    //Screenshot validation-Record is saved with the edited duration
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});