import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
      ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
  });

//Fluent 2 themes 
// test('1-Overview sample - fluent2', async ({ page }) => {
//     await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//     await page.waitForTimeout(2000);
//     //Screenshot validation-On intial load overview sample has fluent 2 theme
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('2-Editing sample - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
    await page.waitForTimeout(2000);
    //Screenshot validation-On intial load Editing sample has fluent 2 theme
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Add dialog tab general - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the Add button on toolbar to open the dialog tab
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-General tab is opened
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Add dialog tab dependency - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the Add button on toolbar to open the dialog tab
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dependency tab to open
    await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The dependency dialog tab is opened.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Dependency add tab- fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the Add button on toolbar to open the dialog tab
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Click the dependency tab to open
    await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
    await page.waitForTimeout(500);
    //Click the Add button in dependency.
    await page.locator("(//span[text()='Add'])[2]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The add dialog tab for dependency is opened
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Delete dialog dependency - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the child record on grid side to delete.
    await page.locator("(//span[text()='Obtain permits'])[1]").click();
    await page.waitForTimeout(500);
    //Click the delete button on the toolbar.
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Dialog for delete button is shown.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Focusing on cell-edit - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
    await page.waitForTimeout(2000);
    //Double click the cell to idicate it is editable
    await page.locator("(//span[text()='Obtain permits'])[1]").dblclick();
    await page.waitForTimeout(2000);
    //Screenshot validation-The cell should be in editable state
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Open filter menu - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'filtering?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the filter icon on Service Name to open filter menu
    await page.locator('(//div[contains(@class,"e-filtermenudiv")])[2]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Filter menu for Service Name is opened.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Open filter menu options - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'filtering?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the filter icon on Task ID to open filter menu
    await page.locator('(//div[contains(@class,"e-filtermenudiv")])[1]').click();
    await page.waitForTimeout(500);
    //Click the dropdown for the options
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])[2]').click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Filter menu is opened from the dropdown
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Check filter icon after filtering - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'filtering?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the filter icon on Task ID to open filter menu
    await page.locator('(//div[contains(@class,"e-filtermenudiv")])[1]').click();
    await page.waitForTimeout(500);
    //Click to Fill the value
     await page.locator('(//span[contains(@class,"e-numeric e-input-group")])[1]').click();
     await page.keyboard.type('7');
    await page.waitForTimeout(500);
    //Click the Filter button
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    //Screenshot validation-Selected value filtered is shown
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Row selection - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'selection?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click to select the row
    await page.locator("(//span[text()='Defining the target audience'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The selected row should be highlighted
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Cell selection - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'selection?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the dropdown on Mode to select
    await page.locator('(//span[contains(@class, "input")])[2]').click();
    await page.waitForTimeout(500);
    //Click to select mode , Cell
    await page.locator("(//li[text()='Cell'])").click();
    await page.waitForTimeout(300);
    //Click the cell to select
    await page.locator("(//span[text()='Defining the target audience'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-Cell is selected on the grid side of the component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Scheduling concept sample - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'scheduling-mode?theme=fluent2');
    await page.waitForTimeout(2000);
    //Screenshot validation-initial load of sample is visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Scheduling concept sample - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'holidays?theme=fluent2');
    await page.waitForTimeout(2000);
    //Screenshot validation-initial load of sample is visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-unscheduled sample - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'unscheduled-task?theme=fluent2');
    await page.waitForTimeout(2000);
    //Screenshot validation-initial load of sample is visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Baseline sample - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'baseline?theme=fluent2');
    await page.waitForTimeout(2000);
    //Screenshot validation-initial load of sample is visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-eventmarkers sample - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'eventmarkers?theme=fluent2');
    await page.waitForTimeout(2000);
    //Screenshot validation-initial load of sample is visible
    expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-critical path sample - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'criticalpath?theme=fluent2');
    await page.waitForTimeout(2000);
    //Screenshot validation-initial load of sample is visible
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-column template sample - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-template?theme=fluent2');
    await page.waitForTimeout(2000);
    //Screenshot validation-initial load of sample is visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Column menu options', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-menu?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click to open the column menu 
    await page.locator('(//div[contains(@class, "columnmenu ")])[1]').click();
    await page.waitForTimeout(500);
    //Click columns to show options
    await page.locator("(//li[text()='Columns'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Column menu options is visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Resourceview sample - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent2');
    await page.waitForTimeout(2000);
    //Screenshot validation-Initial load of the sample it is visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Resources tab - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the record on the grid side of the component
    await page.locator("(//span[text()='Site analyze'])").click();
    await page.waitForTimeout(500);
    //Click the edit button on the toolbar
    await page.locator("(//span[contains(@class, 'edit')])").click();
    await page.waitForTimeout(1000);
    //Click the resources to open its tab
    await page.locator("(//div[contains(@class, 'e-tab-text')])[5]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Resources dialog tab is opened and visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Header template - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'header-template?theme=fluent2');
    await page.waitForTimeout(2000);
    //Screenshot validation-On Initial load of the sample it should be visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Taskbar template - fluent2', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'taskbar-template?theme=fluent2');
    await page.waitForTimeout(2000);
    //Screenshot validation-On Initial load of the sample it should be visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Taskbar resizer icon does not appear', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the settings 
    await page.locator("(//span[contains(@class, 'settings')])[2]").click();
    await page.waitForTimeout(1000);
    //Click the button to switch to Touch
    await page.locator("(//div[text()='Touch'])").click();
    await page.waitForTimeout(3000);
    //Click the child taskbar on chart side of the component
    await page.locator("(//div[contains(@class, 'child')])[4]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation- Taskbar resizer icon should be visible when taskbar is clicked
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('26-Zoom Out and change view to chart side.', async ({ page }) => {
//     await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//     await page.waitForTimeout(1000);
//     //Click the settings
//     await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//     await page.waitForTimeout(500);
//     //Change view mode to change to chart
//     await page.locator('(//span[contains(@class,"input")])[8]').click();
//     await page.waitForTimeout(500);
//     //Change to Chart Mode
//     await page.locator("(//li[text()='Chart'])[1]").click();
//     await page.waitForTimeout(500);
//     //Click to Close icon
//     await page.locator('(//span[contains(@class,"close")])[3]').click();
//     await page.waitForTimeout(500);
//     //Click Zoom Out button on the toolbar
//     await page.locator('(//span[contains(@class,"zoomout")])[1]').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation-The taskbars on chart side should be in Zoomed Out State
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('27-Zoom In and change view to chart side.', async ({ page }) => {
//     await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//     await page.waitForTimeout(2000);
//     //Click the settings
//     await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//     await page.waitForTimeout(200);
//     //Change view mode to change to chart
//     await page.locator('(//span[contains(@class,"input")])[8]').click();
//     await page.waitForTimeout(200);
//     //Change to Chart Mode
//     await page.locator("(//li[text()='Chart'])[1]").click();
//     await page.waitForTimeout(200);
//     //Click to Close icon
//     await page.locator('(//span[contains(@class,"close")])[3]').click();
//     await page.waitForTimeout(200);
//     //Click the Zoom In button on the toolbar
//     await page.locator('(//span[contains(@class,"zoomin")])[1]').click();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-taskbars on the chart side should be in Zoomed In state
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('28-Switch to Resource view ,change Mode to Grid', async ({ page }) => {
//     await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//     await page.waitForTimeout(1000);
//     //Click the settings
//     await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//     await page.waitForTimeout(200);
//     //Click the View type to select resource view
//     await page.locator('(//span[contains(@class,"input")])[7]').click();
//     await page.waitForTimeout(200);
//     //Select Resource view
//     await page.locator("(//li[text()='Resource view'])[1]").click();
//     await page.waitForTimeout(200);
//     //Change view mode to Grid
//     await page.locator('(//span[contains(@class,"input")])[8]').click();
//     await page.waitForTimeout(200);
//     //Change to Grid
//     await page.locator("(//li[text()='Grid'])[1]").click();
//     await page.waitForTimeout(200);
//     //Click to Close
//     await page.locator('(//span[contains(@class,"close")])[3]').click();
//     await page.waitForTimeout(200);
//     //Click collapse all button on the toolbar
//     await page.locator('(//span[contains(@class,"collapseall")])[1]').click();
//     await page.waitForTimeout(1000);
//     //Screenshot validation-The view should be switched to resource view and all the record should be in collapse state.
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('29-Change View type to Resource view ,Zoom Fit', async ({ page }) => {
//     await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//     await page.waitForTimeout(2000);
//     //Click the settings
//     await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//     await page.waitForTimeout(200);
//     //Click the View type to select resource view
//     await page.locator('(//span[contains(@class,"input")])[7]').click();
//     await page.waitForTimeout(800);
//     //Select Resource view from View type 
//     await page.locator("(//li[text()='Resource view'])[1]").click();
//     await page.waitForTimeout(800);
//     //Click to Close
//     await page.locator('(//span[contains(@class,"close")])[3]').click();
//     await page.waitForTimeout(200);
//     //Click Zoom Fit button on the toolbar
//     await page.locator('(//span[contains(@class,"zoomtofit")])[1]').click();
//     await page.waitForTimeout(200);
//     //Click collapse all button on the toolbar
//     await page.locator('(//span[contains(@class,"collapseall")])[1]').click();
//     await page.waitForTimeout(200);
//     //Click Expand all button on the toolbar
//     await page.locator('(//span[contains(@class,"expandall")])[1]').click();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-The collapse all records on both Grid and Chart side should all be in Expand all state
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('30-Edit the Parent taskbar and add dependency data', async ({ page }) => {
//     await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//     await page.waitForTimeout(2000);
//     //Double click the parent taskbar on the chart side
//     await page.locator('(//div[contains(@class,"parent")])[1]').dblclick();
//     await page.waitForTimeout(500);
//     //Click the Dependency to open the dialog tab and edit
//     await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
//     await page.waitForTimeout(200);
//     //Click the Add button
//     await page.locator('(//span[contains(@class,"add")])[1]').click();
//     await page.waitForTimeout(200);
//     //Click the dropdown button to show the dependency to select
//     await page.locator('(//span[contains(@class,"input")])[3]').click();
//     await page.waitForTimeout(200);
//     //Select the dependency
//     await page.keyboard.press("ArrowDown");
//     await page.keyboard.press("ArrowDown");
//     await page.waitForTimeout(200);
//     //Click the save button
//     await page.locator("(//button[text()='Save'])").click();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-The parent taskbar should have dependency data added on the chart side of the component
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('31-Hover enabled on the Grid side of overview sample', async ({ page }) => {
//     await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//     await page.waitForTimeout(2000);
//     //Hover over the child record on Grid side of the component
//     await page.locator("(//span[text()='Batch Editing'])[1]").hover();
//     await page.waitForTimeout(1000);
//     //Screenshot validation-The grid side of the component selected child record when hovered on it is shown
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('32-Hover enabled on the Chart side of overview sample', async ({ page }) => {
//     await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//     await page.waitForTimeout(2000);
//     //Hover over the child record on Chart side of the component
//     await page.locator('(//div[contains(@class,"child")])[4]').hover();
//     await page.waitForTimeout(1000);
//     //Screenshot validation-The Chart side of the component selected child record when hovered on it is shown
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('33-Enable Row Hover in selection', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'selection?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click to enable hover togghle  on the toolbar
    await page.locator('(//span[contains(@class,"switch-handle")])[3]').click();
    await page.waitForTimeout(500);
    //Hover over the child record on Chart side of the component
    await page.locator('(//div[contains(@class,"child")])[1]').hover();
    await page.waitForTimeout(1000);
    //Screenshot validation-Row of child taskbar is hovered on.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Collapse all Records and Add Task Above', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click to collapse all records
    await page.locator('(//span[contains(@class,"collapseall")])').click();
    await page.waitForTimeout(1000);
    //Right click the parent taskbar on the chart side of the component
    await page.locator('(//div[contains(@class,"parent")])[1]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Add button
    await page.locator("(//li[text()='Add'])").click();
    await page.waitForTimeout(500);
    //Click to select Above
    await page.locator("(//li[text()='Above'])").click();
    await page.waitForTimeout(2000);
    //screenshot validation-Record is added above the parent taskbar on chart side
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Collapse all Records, Add Task Below and Zoom In', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click to collapse all records button on the toolbar
    await page.locator('(//span[contains(@class,"collapseall")])').click();
    await page.waitForTimeout(1000);
    //Right click the parent taskbar on the chart side of the component
    await page.locator('(//div[contains(@class,"parent")])[1]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Add button
    await page.locator("(//li[text()='Add'])").click();
    await page.waitForTimeout(500);
    //Click to select Below
    await page.locator("(//li[text()='Below'])").click();
    await page.waitForTimeout(500);
    //Click the Zoom In button on the toolbar
    await page.locator('(//span[contains(@class,"zoomin")])').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Chart side records are zoomed in and parent taskbar record is added below it.
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Delete the child record through Context Menu', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent2');
    await page.waitForTimeout(2000);
    //Right click the child taskbar on the chart side of the component
    await page.locator('(//div[contains(@class,"child")])[4]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Delete Task button
    await page.locator("(//li[text()='Delete Task'])").click();
    await page.waitForTimeout(500);
    //Double click to select the child to cell edit 
    await page.locator('(//td[contains(@class,"rowcell")])[16]').dblclick();
    await page.waitForTimeout(1000);
    //Click to Edit the Name
    await page.locator('(//input[contains(@class,"control")])').fill('Site');
    await page.waitForTimeout(500);
    //Press the Enter key on the keyboard.
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    //Screenshot validation-Child record selected should be edited and shows on the grid side of the component
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Edit the dependency data though cell edit ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the dependency to cell edit
    await page.locator('(//td[contains(@class,"rowcell")])[14]').dblclick();
    await page.waitForTimeout(1000);
    //Edit the dependency data
    await page.locator('(//input[contains(@class,"control")])[1]').fill('3FS');
    await page.waitForTimeout(500);
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(200);
    //Right click the child taskbar on the chart side to show context menu
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
    //Screenshot validation-Dependency dialog tab is opened
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Cancel the record after Add and Edit the  Record', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click to Add to Add New Record
    await page.locator('(//span[contains(@class,"add")])').click();
    await page.waitForTimeout(1000);
    //Edit the Task Name
    await page.locator('(//input[contains(@class,"control")])[1]').fill('Task');
    await page.waitForTimeout(500);
    //Click the Cancel button
    await page.locator("(//button[text()='Cancel'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The record added when cancelled should be back to its normal state
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Edit the parent record and collapse records.', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click to collapse all
    await page.locator('(//span[contains(@class,"collapseall")])').click();
    await page.waitForTimeout(200);
    //Double click to cell edit the Parent record 
    await page.locator('(//td[contains(@class,"rowcell")])[2]').dblclick();
    await page.waitForTimeout(1000);
    //Edit the Record name to have Null value
    await page.locator('(//input[contains(@class,"control")])[1]').fill('');
    await page.waitForTimeout(200);
    //Click the update button on the toolbar
    await page.locator('(//span[contains(@class,"e-update")])').click();
    await page.waitForTimeout(200);
    //Click Zoom Fit button on the toolbar
    await page.locator('(//span[contains(@class,"zoomtofit")])').click();
    await page.waitForTimeout(200);
    //Right click the third parent taskbar 
    await page.locator('(//div[contains(@class,"parent")])[3]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Delete task button
    await page.locator("(//li[text()='Delete Task'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Parent record name on the Grid side to have Null value and records collapsed
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Merge the child taskbar after collapse all', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click to Collapse all
    await page.locator('(//span[contains(@class,"collapseall")])').click();
    await page.waitForTimeout(1000);
    //Click the icon on the parent record to Expand it
    await page.locator('(//span[contains(@class,"e-treegridcollapse")])[2]').click();
    await page.waitForTimeout(500);
    //Right click the child taskbar to show context menu
    await page.locator('(//div[contains(@class,"child")])[1]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click Merge Task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click Right
    await page.locator("(//li[text()='Right'])").click();
    await page.waitForTimeout(500);
    //Right click the Child taskbar 
    await page.locator('(//div[contains(@class,"child")])[4]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click Merge Task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click Right to select 
    await page.locator("(//li[text()='Right'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The child taskbar is Merged Right
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Zoom Out and Outdent the child Record', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click Zoom Out 
    await page.locator('(//span[contains(@class,"zoomout")])').click();
    await page.waitForTimeout(500);
    //Right click the child record to Indent
    await page.locator('(//td[contains(@class,"rowcell")])[9]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click the Outdent 
    await page.locator("(//li[text()='Outdent'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The child record on grid side is outdented
    expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('42-Work time range customized Duration the hours', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent2');
    await page.waitForTimeout(2000);
    //Double click the duration on child record
    await page.locator('(//td[contains(@class, "e-rowcell")])[13]').dblclick();
    await page.waitForTimeout(1000);
    //Enter the number of hours
    await page.locator('(//input[contains(@class, "control")])[1]').fill('2 Hours');
    await page.waitForTimeout(500);
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The duration of is editable and seen
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-Work time range edited the start date to have null value', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent2');
    await page.waitForTimeout(2000);
    //Double click the start date on child record
    await page.locator('(//td[contains(@class, "e-rowcell")])[11]').dblclick();
    await page.waitForTimeout(1000);
    //Enter the Null value
    const input = await page.locator('#DataItem___StartDate');
    await input.click();
    await input.press('Control+A');
    await input.press('Backspace');
    await page.waitForTimeout(600);
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-The edited start date with Null value is reverted to its normal form
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('44-Collapse all records ,Expand the parent records', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click to collapse all
    await page.locator('(//span[contains(@class, "collapseall")])').click();
    await page.waitForTimeout(500);
    //Click to expand the parent 1st record
    await page.locator('(//span[contains(@class, "e-treegridcollapse")])[1]').click();
    await page.waitForTimeout(500);
    //Click to expand the parent record
    await page.locator('(//span[contains(@class, " e-treegridcollapse")])[2]').click();
    await page.waitForTimeout(500);
    //Click the child record
    await page.locator('(//td[contains(@class, "e-rowcell")])[8]').click();
    await page.waitForTimeout(500);
    //Click delete button on the toolbar
    await page.locator('(//span[contains(@class, "delete")])').click();
    await page.waitForTimeout(500);
    //Click the child record to delete
    await page.locator(" (//span[text()='Perform soil test'])[1]").click();
    await page.waitForTimeout(200);
    //Click delete button
    await page.locator('(//span[contains(@class, "delete")])').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records selected should be deleted and it shows on the grid and chart side of the component.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('45-Edit the record when open the dialog', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click Expand all to show the records
    await page.locator('(//span[contains(@class,"expandall")])').click();
    await page.waitForTimeout(500);
    //Click the progress record
    await page.locator('(//td[contains(@class,"rowcell")])[10]').click();
    await page.waitForTimeout(500);
    //Click the edit button
    await page.locator('(//span[contains(@class,"edit")])').click();
    await page.waitForTimeout(500);
    //Click the taskname to edit
    await page.locator('(//input[contains(@class,"e-control")])[3]').fill('Location');
    await page.waitForTimeout(500);
    //Click save button
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(2000);
     await page.locator('(//td[contains(@class,"rowcell")])[10]').click();
    await page.waitForTimeout(500);
    //Screenshot validation-The edited taskname can be seen on the taskbar on the chart side of the component.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('46-Fixed duration: Add new task record with resources', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the Add button on the toolbar
    await page.locator('(//span[contains(@class,"add")])').click();
    await page.waitForTimeout(1000);
    //Click to select checkbox for the resource to add
    await page.locator('(//span[contains(@class, "e-uncheck")])[3]').click();
    await page.waitForTimeout(500);
    //Click the Save button
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Added resources is shown and new task added also visible on the grid side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('47-Reset state, perform zoom Fit and Reload the page', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'persistence?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click Reset state button on the toolbar
    await page.locator('(//span[contains(@class, "resetstate")])').click();
    await page.waitForTimeout(100);
    //Click Zoom Fit button on the toolbar
    await page.locator('(//span[contains(@class, "zoomtofit")])').click();
    await page.waitForTimeout(500);
    //Click Reload page button on the toolbar
    await page.locator('(//span[contains(@class, "reloadpage")])').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-when page is reloaded the chart side is still in Zoom Fit state
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('48-Select the records after edit dependency data', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent2');
    await page.waitForTimeout(1000);
    //Click the child record
    await page.locator("(//span[text()='Prepare product sketch and notes'])[1]").click();
    await page.waitForTimeout(500);
    //Press the keyboard Insert to Add new record
    await page.keyboard.press('Insert');
    await page.waitForTimeout(500);
    //Click the dependency of the added record to edit
    await page.locator('(//td[contains(@class,"rowcell ")])[7]').dblclick();
    await page.waitForTimeout(1000);
    //Edit the Dependency of the new task
    await page.locator('(//input[contains(@class,"control")])[1]').fill('3SF');
    await page.waitForTimeout(500);
    //Press the Enter key to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //select the rows
    await page.locator('(//td[contains(@class,"rowcell ")])[2]').click();
    await page.waitForTimeout(500);
    //Press the keyboard Shift+ArrowDown
    await page.keyboard.press('Shift+ArrowDown');
    await page.waitForTimeout(500);
    //Press the keyboard Shift+ArrowDown
    await page.keyboard.press('Shift+ArrowDown');
    await page.waitForTimeout(500);
    //Press Shift+Tab to focus on the previous cell
    await page.keyboard.press('Shift+Tab');
    await page.waitForTimeout(1000);
    //Screenshot validation-selection is made on the grid side of the component on the cell and focused on.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('49-Extend the cell selection ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the duration
    await page.locator('(//td[contains(@class,"rowcell ")])[26]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to select the first cell of the Gantt Component on Grid side
    await page.keyboard.press('Control+Home');
    await page.waitForTimeout(500);
    //Click the parent record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[2]').click();
    await page.waitForTimeout(500);
    //Press the keyboard keys Ctrl+F2 to select the row to edit
    await page.keyboard.press('Control+F2');
    await page.waitForTimeout(500);
    //Edit the parent record
    await page.locator('(//input[contains(@class,"control")])[2]').fill('Concept');
    await page.waitForTimeout(500);
    //Press the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Click the child record
    await page.locator('(//td[contains(@class,"rowcell ")])[9]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to extends the cell selection to the Left side from the selected cell.
    await page.keyboard.press('Shift+ArrowLeft');
    await page.waitForTimeout(1000);
    //Screenshot validation-the cell selection is extended to the left on the grid side of the component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('50-Cell edit the records by use of Tab key', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the child record
    await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
    await page.waitForTimeout(500);
    //Press Insert button
    await page.keyboard.press('Insert');
    await page.waitForTimeout(500);
    //Select the child record
    await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to insert a new task
    await page.keyboard.press('Insert');
    await page.waitForTimeout(500);
    //Click the data that is editable
    await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
    await page.waitForTimeout(500);
    //Press the keyboard keys ,Control+F2 to edit rowdialog
    await page.keyboard.press('Control+F2');
    await page.waitForTimeout(500);
    //Press the Tab key
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1500);
    //Screenshoot validation-Selection is made on the editable cell when Tab button is pressed and moves to it and focused on.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/887316
test('51-BUG-887316-Filter Icon Not visible', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent2');
    await page.waitForTimeout(2000);
    //Screenshot validation-Initial load of the sample to show the Filter icon to be visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/887052
test('52-BUG-887052-Icons on the toolbar for the sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'persistence?theme=fluent2');
    await page.waitForTimeout(2000);
    //Screenshot validation-The icons on the toolbar for the buttons are visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('53-Autofit this column and Filter End date', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-menu?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the column menu for End date
    await page.locator('(//div[contains(@class,"columnmenu")])[4]').click();
    await page.waitForTimeout(500);
    //Click to select Autofit this column
    await page.locator('(//li[contains(@class,"menu")])[2]').click();
    await page.waitForTimeout(500);
    //Click to select column menu for start date
    await page.locator('(//div[contains(@class,"columnmenu")])[4]').click();
    await page.waitForTimeout(500);
    //Click the Filter to show column 
    await page.locator('(//li[contains(@class,"menu")])[6]').click();
    await page.waitForTimeout(500);
    //Click to select to show the dropdown 
    await page.locator('(//span[contains(@class,"e-input")])[2]').click();
    await page.waitForTimeout(500);
    //Click to select Null
    await page.locator("(//li[text()='Null'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-End date Column is autofited and filtered to have Null value.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('54-Autofill all columns and Filter startdate', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-menu?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the column menu for progress
    await page.locator('(//div[contains(@class,"columnmenu")])[6]').click();
    await page.waitForTimeout(500);
    //Click to select Autofit all columns
    await page.locator('(//li[contains(@class,"menu")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select column menu for start date
    await page.locator('(//div[contains(@class,"columnmenu")])[3]').click();
    await page.waitForTimeout(500);
    //Click the Filter to show column 
    await page.locator('(//li[contains(@class,"menu")])[6]').click();
    await page.waitForTimeout(500);
    //Click to Enter the input for start date
    await page.locator('(//input[contains(@class,"control")])[2]').fill('4/19/2021');
    await page.waitForTimeout(500);
    //Click Filter button
    await page.locator("(//button[text()='Filter'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-All columns are Autofited and Startdate Filtered.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('55-Freeze Start date and Dependency column', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'frozen-column?theme=fluent2')
    await page.waitForTimeout(2000);
    //Click the Left Frozen column to select the start date
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //Press Arrow Down on the keyboard
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press the Enter Button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Click the Right Frozen column to select the Duration
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //Press Arrow Down on the keyboard
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press the Enter Button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Double click the parent record to cell edit it , Job Name
    await page.locator("(//span[text()='Planning and permits'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation -Parent record is edited and start date and dependency selected from Frozen column. 
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/902393
test('56-Visibility issue Cancel button', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'expando-data?theme=bootstrap5');
    await page.waitForTimeout(2000);
    //Click the Add button on the toolbar
    await page.locator('(//span[contains(@class,"add")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-There is no visibility issue on the Cancel button
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});