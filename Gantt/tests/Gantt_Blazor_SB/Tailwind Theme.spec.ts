import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
//Overview
// test('1-Overview sample - tailwind theme', async ({ page }) => {
//     await page.goto(Helper.baseUrl + 'overview?theme=tailwind');
//     await page.waitForTimeout(2000);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//Editing
test('2-Editing sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Add the diaolg for dependency - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click add
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(500);
    //Click the dependency to open the dialog
    await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Add the diaolg for General - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click Add to open general dialog
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Dependency Add tab  dialog- tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click add
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(500);
    //Click Dependency to open dialog
    await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
    await page.waitForTimeout(300);
    //Click Add to open the dialog under dependency
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[10]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Delete dialog for the data - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click the child record
    await page.locator('(//td[contains(@class,"e-rowcell")])[12]').click();
    await page.waitForTimeout(500);
    //Click delete button
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Focus on the cell edit - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click the record
    await page.locator('(//td[contains(@class,"e-rowcell")])[16]').dblclick();
    await page.waitForTimeout(1500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Filtering
test('8-Open the filter menu option - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'filtering?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click the record to open filter menu
    await page.locator('(//div[contains(@class,"e-icons")])[6]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Opening the menu option for filtering- tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'filtering?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click the record to open filter menu
    await page.locator('(//div[contains(@class,"e-icons")])[8]').click();
    await page.waitForTimeout(500);
    //Click to open the menu option for filtering
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])[2]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Selection
test('10-Cell selection- tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'selection?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click to select the modes
    await page.locator('(//span[contains(@class,"e-ddl-icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select cell
    await page.locator('(//li[contains(@class,"e-list-item")])[2]').click();
    await page.waitForTimeout(500);
    //select the taskname single cell
    await page.locator('(//td[contains(@class,"e-rowcell")])[23]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Row selection- tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'selection?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click to select the modes
    await page.locator('(//span[contains(@class,"e-ddl-icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Row
    await page.locator('(//li[contains(@class,"e-list-item")])[1]').click();
    await page.waitForTimeout(500);
    //select the taskname single row
    await page.locator('(//td[contains(@class,"e-rowcell")])[16]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Dynamic Object Binding
test('12-Dynamic Object Binding sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'dynamic-data?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ExpandoObject Binding
test('13-ExpandoObject Binding sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'expando-data?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Observable collection
test('14-Add Data in observable collection - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'observable-collection?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click Add Data
    await page.locator('(//button[contains(@class,"e-control")])[3]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Delete Data in observable collection - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'observable-collection?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click Delete Data
    await page.locator('(//button[contains(@class,"e-btn")])[4]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Update Data in observable collection - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'observable-collection?theme=tailwind');
    await page.waitForTimeout(2100);
    //Click to Update Data
    await page.locator('(//button[contains(@class,"e-control")])[5]').click();
    await page.waitForTimeout(1500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Edit button to open dialog in observable collection', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'observable-collection?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click to child record
    await page.locator('(//td[contains(@class,"e-rowcell")])[8]').click();
    await page.waitForTimeout(800);
    //Click Edit button to open the dialog tab
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Scheduling Mode
test('18-Scheduling Mode sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'scheduling-mode?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Work week
test('19-Work week sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'work-week?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Work Time Range
test('20-Work Time Range sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'working-time-range?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Holidays
test('21-Holidays sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'holidays?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Unscheduled Tasks
test('22-Unscheduled Tasks sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'unscheduled-task?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Baseline
test('23-Baseline sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'baseline?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Event Makers
test('24-Event markers sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'eventmarkers?theme=tailwind');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell")])[8]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('(//div[contains(@class,"e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Critical Path
test('25-Critical Path sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'criticalpath?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Timeline API
test('26-Timeline API sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'timeline?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Edit the timeline to visualize the time modes', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'timeline?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click the settings icon
    await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
    await page.waitForTimeout(500);
    //Unit width increase
    await page.locator('(//span[contains(@class,"e-spin-up")])[1]').click();
    await page.waitForTimeout(800);
    //Top tier count
    await page.locator('(//span[contains(@class,"e-spin-up")])[2]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//zooming
test('28-Zoom in the records - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'zooming?theme=tailwind');
    await page.waitForTimeout(2000);
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Zoom out the records - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'zooming?theme=tailwind');
    await page.waitForTimeout(2000);
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[2]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Zoom to fit the records - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'zooming?theme=tailwind');
    await page.waitForTimeout(2100);
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Column Template
test('31-Column Template sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-template?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Reorder
test('32-Reorder sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-reordering?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Resizing
test('33-Resizing sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-resizing?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Column menu
test('34-Column menu sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-menu?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Open column menu - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-menu?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click to open the column menu
    await page.locator('(//div[contains(@class,"e-icons")])[6]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Resource Allocation
// test('36-Resource Allocation General tab dialog - tailwind theme', async ({ page }) => {
//     await page.goto(Helper.baseUrl + 'resource-allocation?theme=tailwind');
//     await page.waitForTimeout(4000);
//     //Doubles click on taskbar on chart side.
//     await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[2]').dblclick();
//     await page.waitForTimeout(500);
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('37-Resource Allocation Resources tab dialog', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-allocation?theme=tailwind');
    await page.waitForTimeout(2000);
    //Doubles click on taskbar on chart side.
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[3]').dblclick();
    await page.waitForTimeout(500);
    //Click Resources to open it
    await page.locator('(//div[contains(@class,"e-tab-text")])[3]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Resource view
test('38-Resource view change to Project view', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-view?theme=tailwind');
    await page.waitForTimeout(3000);
    //Click on the toggle to switch it to project view
    await page.locator('(//span[contains(@class,"e-switch-active")])[2]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Resource view overallocation - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-view?theme=tailwind');
    await page.waitForTimeout(3000);
    //Click hide overallocation
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[8]').click();
    await page.waitForTimeout(1500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Resource Multi Taskbar
test('40-Resource Multi Taskabr sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Resource Multi Taskabr Expand all the records', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=tailwind');
    //Click to Expand all the records
    await page.waitForTimeout(2000);
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(1500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Header Template
test('42-Header Template sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'header-template?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Taskbar Template
test('43-Taskbar Template sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'taskbar-template?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Tooltip Template
test('44-Tooltip Template sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'tooltip-template?theme=tailwind');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[2]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Virtual scrolling
test('45-Virtual scrolling Add record - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click Add
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('46-Virtual scrolling Zoom in - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=tailwind');
    await page.waitForTimeout(2100);
    //Zoom in
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('47-Virtual scrolling Zoom out - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=tailwind');
    await page.waitForTimeout(2000);
    //Zoom out
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Frozen Column
test('48-Frozen Column sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'frozen-column?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Row Drag And Drop
test('49-Row Drag and Drop sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'row-drag-and-drop?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Row Height 
test('50-Selection of the big row height - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'row-height?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click big row height
    await page.locator('(//span[contains(@class,"e-big-icon")])[1]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('51-Selection of the medium row height - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'row-height?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click medium row height
    await page.locator('(//span[contains(@class,"e-medium-icon")])[1]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('52-Selection of the small row height - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'row-height?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click medium row height
    await page.locator('(//span[contains(@class,"e-small-icon")])[1]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Persist State
test('53-Persist State sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'persistence?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Context menu
test('54-Grid header context menu - tailwind theme', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'context-menu?theme=tailwind');
    await page.waitForTimeout(2000);
    //Right click the grid header
    await page.locator('(//th[contains(@class,"e-headercell")])[2]').click({
        button: 'right'
    });
    await page.waitForTimeout(1500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('55-Child record  context menu - tailwind theme', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'context-menu?theme=tailwind');
    await page.waitForTimeout(2000);
    //Right click task to show context menu
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[2]').click({
        button: 'right'
    });
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Clipboard
test('56-Clipboard sample - tailwind theme', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'clipboard?theme=tailwind');
    await page.waitForTimeout(2100);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Exporting
test('57-Exporting  sample - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'exporting?theme=tailwind');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Keyboard Navigation
test('58-Collapse selected record - tailwind theme', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click to select record
    await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
    await page.waitForTimeout(800);
    //Click to collapse
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(800);
    //Press the keys to Collapse the records
    await page.keyboard.press('Control+Shift+ArrowDown');
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('59-TC-79576: BLAZ-25856-Editing Dialog box', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind');
    await page.waitForTimeout(2000);
    //Click the child taskbar to open the diaolg tab
    await page.locator('(//div[contains(@class,"child")])[1]').dblclick();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/907792
test('60-BUG-907792-Vertical scrollbar rendered on tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'airline-tracker?theme=tailwind');
    await page.waitForTimeout(2000);
    //Hover over child taskbar
    await page.locator('(//div[contains(@class, "gantt-child")])[1]').click();
    await page.waitForTimeout(3500);
    //Screenshot validation-vertical scrollbar is not rendered whe the toooltip is shown on the taskbar
    expect(await page.locator('.sb-content-section').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
