import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
        ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
});

// Initial load of the keyboard navigation
test('1-Keyboard Navigation initial load', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(5000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Focus
test('2-Focuses on row of the first component', async ({ page }) => {
    //Click on the row on Grid side
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[1]').click();
    await page.waitForTimeout(500);
    //Press the keyboard
    await page.keyboard.press('Alt+j');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/859346
test('3-Focus to the first cell of the focused row ', async ({ page }) => {
    //Click on the cell on the Grid side
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[16]').click();
    await page.waitForTimeout(500);
    //Press the keyboard
    await page.keyboard.press('Home');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/859346
// Bug task created for this issue.
test('4-Moves the focus to the last cell of the focused row.', async ({ page }) => {
    //Click on the cell on the grid side
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[30]').click();
    await page.waitForTimeout(500);
    //Press the keyboard End to move focus to last cell of focused row.
    await page.keyboard.press('End');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Moves the focus to the first Cell of the first row', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    //Click the cell and the focus to be on the first cell of the Ganttchart on grid side.
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[2]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to move the focus to the first cell on row side.
    await page.keyboard.press('Control+Home');
    await page.waitForTimeout(1000);
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('6-Moves the focus to the last cell of the last row', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    //Click to focus on the last cell that is on the Ganttchart component on the grid side.
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[51]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to move the cell last on the last row
    await page.keyboard.press('Control+End');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Moves the cell focus downward from the focused cell', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    //The focus of the cell on the row is downward
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[100]').click();
    await page.waitForTimeout(500);
    //Press the keyboard for the cell to be moved downward.
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('8- Moves the cell to focus upward from the focused cell', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    //The focus of the cell on the row is upward 
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[100]').click();
    await page.waitForTimeout(500);
    //Press the keyboard for the cell to be moved upward.
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(1000);
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('9- Moves the cell to focus on left side from the focused cell.', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    //Move the cell on left side that is focused on
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[@class="e-rowcell e-templatecell  e-leftalign"])[3]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to move the cell focus on left side from the focused cell.
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Moves the cell focus right side from the focused cell.', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    //Move the cell to focus on right side of the focused cell
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[@class="e-rowcell e-templatecell  e-leftalign"])[4]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to move the cell focus on left side from the focused cell.
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//selection
test('11-Extends the row/cell selection downwards', async ({ page }) => {
    //Extend the row/cell selection down from the selected row click.
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[100]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to move selection downwards
    await page.keyboard.press('Shift+ArrowDown');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Extends the row/cell selection upwards', async ({ page }) => {
    //Extend the row/cell selection up from the selected row click
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[114]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to move selection Upwards
    await page.keyboard.press('Shift+ArrowUp');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Extends the cell selection to the left', async ({ page }) => {
    //Extend the row/cell selection left from the selected row click
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[149]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to move selection left side from selected cell
    await page.keyboard.press('Shift+ArrowLeft');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Extends the cell selection to the right', async ({ page }) => {
    //Extend the row/cell selection left from the selected row 
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[128]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to move selection right side from selected cell
    await page.keyboard.press('Shift+ArrowRight');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Moves the cell focus/row or cell selection upward.', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    //Extend the row/cell selection upward from the selected row 
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[163]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to move selection up side from selected cell
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('16-Moves the cell focus/row or cell selection downward', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    //Extend the row/cell selection downward from the selected row 
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[163]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to move selection down from selected cell
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('17-Moves the cell focus/row or cell selection right side', async ({ page }) => {
    //Extend the row/cell selection rightside from the selected row 
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[268]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to move selection right from selected cell
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18- Moves the cell focus/row or cell selection left side.', async ({ page }) => {
    //Extend the row/cell selection leftside from the selected row 
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[128]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to move selection left from selected cell
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Editing
test('19-Open add RowDialog using keyboard', async ({ page }) => {
    //Add open dialog 
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[37]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to open the open dialog
    await page.keyboard.press('Control+Insert');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/890247
test('20-Opens edit RowDialog using keyboard', async ({ page }) => {
    //Open edit row Rowdialog
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the child record
    await page.locator("(//span[text()='Finalize the design'])[1]").click();
    await page.waitForTimeout(500);
    //Press the keyboard to open the edit row dialog
    await page.keyboard.press('Control+F2');
    await page.waitForTimeout(1000);
    //Screenshot validation-Row dialog is opened and can be edited
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/testing/_workitems/edit/890183
test('21-Delete selected record using keyboard', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the taskname to open row dialog for it
    await page.locator("(//span[text()='Develop designs to meet industry'])[1]").click();
    await page.waitForTimeout(500);
    //Press the keyboard to delete the selected keyboard
    await page.keyboard.press('Delete');
    await page.waitForTimeout(1000);
    //Screenshot validation-the row is enabled for editing 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Insert a record using keyboard', async ({ page }) => {
    //Insert record
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[37]').click();
    await page.waitForTimeout(500);
    //Press keyboard to insert record
    await page.keyboard.press('Insert');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Enter record added by dialog using keyboard', async ({ page }) => {
    //The enter record added
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[254]').click();
    await page.waitForTimeout(500);
    //Press keyboard to insert the record
    await page.keyboard.press('Control+Insert');
    await page.waitForTimeout(1000);
    //Press keyboard to Enter the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Expand and collapse
test('24-Expand all the records using keyboard', async ({ page }) => {
    //Expand all the records for the component
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[1]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to Expand all the records
    await page.keyboard.press('Control+ArrowDown');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('25-Collapse all the records using keyboard', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    //Collapse all the records for the component
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[261]').click();
    await page.waitForTimeout(1000);
    //Press the keyboard to Collapse all the records
    await page.keyboard.press('Control+ArrowUp');
    await page.waitForTimeout(2500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Collapse the selected row  using keyboard', async ({ page }) => {
    //Collapse selected the records on the row for the component
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[2]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to Collapse for selected record on the row the records
    await page.keyboard.press('Control+Shift+ArrowUp');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Expand the selected row  using keyboard', async ({ page }) => {
    //Expand selected the records on the row for the component
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[142]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to Expand for selected record on the row the records
    await page.keyboard.press('Control+Shift+ArrowUp');
    await page.waitForTimeout(300);
    await page.keyboard.press('Control+Shift+ArrowDown');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Use Tab key to move the content', async ({ page }) => {
    //Move the Shift + tab key by press to move the content
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[261]').click;
    await page.waitForTimeout(500);
    await page.keyboard.press('Shift+Tab');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Negative scenarios
//Wrong date format to the startdate using invalid characters
test('29-Editing startdate to have invalid characters', async ({ page }) => {
    //Edit startdate with invalid inputs
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[10]').dblclick();
    await page.waitForTimeout(1000);
    //To fill invalid input
    await page.locator('//*[@id="DataItem___StartDate"]').fill('*&^%$#@!');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Edit Progress as a double
//Negative scenarios
test('30-Editing progress value as a Double using keyboard ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    //Edit the progress value as a double
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[153]').dblclick();
    await page.waitForTimeout(500);
    //Fill the data
    await page.locator('#DataItem___Progress').fill('30.5');
    //Press the keyboard to Enter
    await page.locator('#DataItem___Progress').press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Click on Esc to cancel the tooltip after selection', async ({ page }) => {
    //Click on taskbar to highlight the tooltip
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar  ")])[6]').click();
    await page.waitForTimeout(500);
    //Press the keyboard Esc to cancel the tooltip 
    await page.keyboard.press('Escape');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Edit dependency on grid side to check on negative scenario
test('32-Edit Dependency on the grid side of the component. ', async ({ page }) => {
    //Double click on dependency to edit 
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[28]').dblclick();
    await page.waitForTimeout(500);
    //Click to fill the data
    await page.locator('#DataItem___Predecessor').fill('One');
    //Press the keyboard to Enter
    await page.locator('#DataItem___Predecessor').press('Enter');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Click tab to move from the selected cells on the row', async ({ page }) => {
    //Press the tab button on the keyboard to move the selected cells
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[51]').dblclick();
    await page.waitForTimeout(500);
    //Press Tab to move to next cell
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    //Press to select the cell
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300);
    //Press to select the cell
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Edit child record and Insert new task record', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the child record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[9]').dblclick();
    await page.waitForTimeout(1000);
    //Edit the taskname
    await page.locator('#DataItem___TaskName').fill('Define the product');
    await page.waitForTimeout(500);
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Press to select the cell for start date.
    await page.locator('(//td[contains(@class,"e-rowcell ")])[16]').click();
    await page.waitForTimeout(500);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[16]').press('Tab');
    await page.waitForTimeout(800);
    //Press Insert key on the keyboard to add new task
    await page.keyboard.press('Insert');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Add new task record and dependency data record', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the parent record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[2]').click();
    await page.waitForTimeout(500);
    //Press Ctrl+Insert to open the rowdialog on the keyboard
    await page.keyboard.press('Control+Insert');
    await page.waitForTimeout(200);
    //Edit the Taskname when dialog tab for General task open
    await page.locator('#TaskName').fill('New');
    await page.waitForTimeout(200);
    //Click the dependency to open the dialog
    await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
    await page.waitForTimeout(800);
    //Click the add button to add new dependency
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(200);
    //Click the drop down for the dependency records
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[7]').click();
    await page.waitForTimeout(200);
    //select the dependency
    await page.locator('(//li[contains(@class,"e-list-item")])[1]').click();
    await page.waitForTimeout(200);
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(600);
    //Press ArrowDown key to select another row
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Cancel the records after collapse all and Expand all', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the parent record to collapse
    await page.locator('(//td[contains(@class,"e-rowcell ")])[2]').click();
    await page.waitForTimeout(800);
    //Press the keyboard Ctrl+ArrowUp to collapse all the records
    await page.keyboard.press('Control+ArrowUp');
    await page.waitForTimeout(200);
    //Click the parent record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[16]').click();
    await page.waitForTimeout(200);
    //Press to insert a new task 
    await page.keyboard.press('Control+Insert');
    await page.waitForTimeout(800);
    //Click the cancel button to cancel the record.
    await page.locator('(//button[contains(@class,"e-control")])[5]').click();
    await page.waitForTimeout(500);
    //Click the parent record
    await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
    await page.waitForTimeout(500);
    //Click to Expand all the records
    await page.keyboard.press('Control+ArrowDown');
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Delete the child record after collapse a selected row', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the parent record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[37]').click();
    await page.waitForTimeout(200);
    //Press the keyboard Ctrl+Shift+ArrowUp to collapse the row
    await page.keyboard.press('Control+Shift+ArrowUp');
    await page.waitForTimeout(500);
    //Press the Enter key on the keyboard
    //await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Click the taskbar on the chart side of the component
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[3]').dblclick();
    await page.waitForTimeout(800);
    await page.locator('#TaskName').click();
    await page.waitForTimeout(800);
    //Edit the Taskname
    await page.locator('#TaskName').fill('Prepare product Notes');
    await page.waitForTimeout(800);
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(800);
    //Click the record to be deleted
    await page.locator('(//td[contains(@class,"e-rowcell ")])[16]').click();
    await page.waitForTimeout(800);
    //Press the Delete key on the keyboard 
    await page.keyboard.press('Delete');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Expand the selected record and focus on the row', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the parent record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[2]').click();
    await page.waitForTimeout(200);
    //Press the keyboard Ctrl+Shift+ArrowUp to collapse the row
    await page.keyboard.press('Control+Shift+ArrowUp');
    await page.waitForTimeout(500);
    //Press the keyboard Ctrl+Shift+ArrowDown to Expand  the row
    await page.keyboard.press('Control+Shift+ArrowDown');
    await page.waitForTimeout(500);
    //Press Alt+J to focus on the selected row
    await page.keyboard.press('Alt+J');
    await page.waitForTimeout(500);
    //Click the Dependency 
    await page.locator('(//td[contains(@class,"e-rowcell")])[7]').click();
    await page.waitForTimeout(500);
    //Press the Tab key on the keyboard to select the parent taskbar
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Press the Tab key on the keyboard to select the parent taskbar
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Edit the start date and cancel the record after ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the child record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[9]').click();
    await page.waitForTimeout(500);
    //Press the keyboard Ctrl+F2 to open rowdialog to edit
    await page.keyboard.press('Control+F2');
    await page.waitForTimeout(500);
    //Press the keyboard Tab to move to start date to be selected
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Edit the start date
    await page.locator('(//input[contains(@class,"e-control")])[2]').fill('4/1/2021');
    await page.waitForTimeout(500);
    //Press the keyboard Escape,ESC to Cancel 
    await page.keyboard.press('Escape');
    await page.waitForTimeout(3000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Add new data and collapse the record after selection', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the child record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[23]').click();
    await page.waitForTimeout(500);
    //Press the keyboard Ctrl+Insert to Add new data record
    await page.keyboard.press('Control+Insert');
    await page.waitForTimeout(500);
    //Edit the Taskname of the new task
    await page.locator('#TaskName').fill('New Task Record');
    await page.waitForTimeout(500);
    //Press the Enter key to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Selected the selected rows upwards
    await page.locator('(//td[contains(@class,"e-rowcell ")])[37]').click();
    //Press the keyboard Shift+ArrowUp
    await page.keyboard.press('Shift+ArrowUp');
    await page.waitForTimeout(500);
    await page.keyboard.press('Shift+ArrowUp');
    await page.waitForTimeout(500);
    //Collapse the parent record
    await page.locator('(//td[contains(@class,"e-rowcell e-selectionbackground")])[2]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Select the records after edit dependency data', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the child record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[23]').click();
    await page.waitForTimeout(500);
    //Press the keyboard Insert to Add new record
    await page.keyboard.press('Insert');
    await page.waitForTimeout(500);
    //Click the dependency of the added record to edit
    await page.locator('(//td[contains(@class,"e-rowcell ")])[7]').dblclick();
    await page.waitForTimeout(1000);
    //Edit the Dependency of the new task
    await page.locator('#DataItem___Predecessor').fill('3SF');
    await page.waitForTimeout(500);
    //Press the Enter key to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //select the rows
    await page.locator('(//td[contains(@class,"e-rowcell ")])[2]').click();
    await page.waitForTimeout(500);
    //Press the keyboard Shift+ArrowDown
    await page.keyboard.press('Shift+ArrowDown');
    await page.waitForTimeout(500);
    await page.keyboard.press('Shift+ArrowDown');
    await page.waitForTimeout(500);
    //Press Shift+Tab to focus on the previous cell
    await page.keyboard.press('Shift+Tab');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('42-The last cell selection of the component', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the child record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[2]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to select the last cell of the Gantt Component
    await page.keyboard.press('Control+End');
    await page.waitForTimeout(500);
    //Click the dependency to edit
    await page.locator('(//td[contains(@class,"e-rowcell ")])[280]').dblclick();
    await page.waitForTimeout(1000);
    //Edit the Dependency of the new task
    await page.locator('#DataItem___Predecessor').fill('9SF');
    await page.waitForTimeout(500);
    //Press the Enter key to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //select the parent record to collapse
    await page.locator('(//td[contains(@class,"e-rowcell ")])[261]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to collapse the selected parent record
    await page.keyboard.press('Control+Shift+ArrowUp');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-Extend the cell selection ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the duration
    await page.locator('(//td[contains(@class,"e-rowcell ")])[26]').click();
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
    await page.locator('(//input[contains(@class,"e-control")])[2]').fill('Product');
    await page.waitForTimeout(500);
    //Press the Enter button
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(800);
    //Click the child record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[9]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to Extends the cell selection to the Left side from the selected cell.
    await page.keyboard.press('Shift+ArrowLeft');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('44-The selection is made and new record inserted', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the parent record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[37]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to Delete the parent record
    await page.keyboard.press('Delete');
    await page.waitForTimeout(500);
    //Click the parent record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[37]').click();
    await page.waitForTimeout(500);
    //Press the keyboard Insert to Insert new data record
    await page.keyboard.press('Insert');
    await page.waitForTimeout(500);
    //Click the added record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[2]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to Extends the cell selection to the Right side from the selected cell.
    await page.keyboard.press('Shift+ArrowRight');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('45-Cancel the task to be added', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the child record
    await page.locator('(//td[contains(@class,"rowcell ")])[9]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to Add new record through dialog
    await page.keyboard.press('Control+Insert');
    await page.waitForTimeout(800);
    //Press the keyboard to Cancel the record through Escape
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
    //Click the child record
    await page.locator('(//td[contains(@class,"rowcell ")])[9]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to select the cell Downwards.
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('46-Open the dialog tab Task Information', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the parent record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[2]').click();
    await page.waitForTimeout(200);
    //Press the keyboard to collapse
    await page.keyboard.press('Control+Shift+ArrowUp');
    await page.waitForTimeout(200);
    //Press the Home key on the keyboard
    await page.keyboard.press('Home');
    await page.waitForTimeout(200);
    //Click the parent taskbar on the chat side of the component to open the dialog tab
    await page.locator('(//div[contains(@class,"e-gantt-parent-taskbar")])[1]').dblclick();
    await page.waitForTimeout(1000);
    //Press the Tab key
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('47-Edit a record with special characters', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the child record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[65]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to select the edit rowdialog
    await page.keyboard.press('Control+F2');
    await page.waitForTimeout(800);
    //Fill the record with Null value
    await page.locator('#TaskName').click();
    await page.waitForTimeout(500);
    await page.locator('#TaskName').fill('*&^%%^kjh');
    await page.waitForTimeout(800);
    //Press the Enter button
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(800);
    //Select the record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[72]').click();
    await page.waitForTimeout(800);
    //Press the keyboard to make the selection
    await page.keyboard.press('Shift+ArrowDown');
    await page.waitForTimeout(800);
    await page.keyboard.press('Shift+ArrowDown');
    await page.waitForTimeout(800);
    //Press the delete button
    await page.keyboard.press('Delete');
    await page.waitForTimeout(800);
    await page.locator('(//td[contains(@class,"e-rowcell ")])[65]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('48-Add a new record,and edit the record', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the parent record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[2]').click();
    await page.waitForTimeout(200);
    //Press the keyboard to Insert record
    await page.keyboard.press('Control+Insert');
    await page.waitForTimeout(200);
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(200);
    //Click the record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[2]').dblclick();
    await page.waitForTimeout(2000);
    //Press Control+A to select the text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(200);
    //Press Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(200);
    //Update the record
    await page.keyboard.type('Updated Record');
    await page.waitForTimeout(500);
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(200);
    //Click the record
    await page.locator('(//td[contains(@class,"e-rowcell ")])[9]').click();
    await page.waitForTimeout(200);
    //Press to collapse all
    await page.keyboard.press('Control+ArrowUp');
    await page.waitForTimeout(200);
    //Expand all 
    await page.keyboard.press('Control+ArrowDown');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('49-Edit the End date through dialog', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the child taskbar on the chart side of the component
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[3]').dblclick();
    await page.waitForTimeout(1000);
    //Click the end date
    await page.locator('(//input[contains(@class,"e-control")])[4]').click();
    await page.waitForTimeout(800);
    //Press Control+A to select the text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(200);
    //Press Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Update the End date record
    await page.keyboard.type('4/13/2021');
    await page.waitForTimeout(500);
    //Press Enter on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Select the end date
    await page.locator('(//td[contains(@class,"e-rowcell")])[25]').click();
    await page.waitForTimeout(500);
    //Click for cell to focus on the first cell on the row
    await page.keyboard.press('Home');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('50-Delete all the parent record', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the parent record on the grid side of the component
    await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
    await page.waitForTimeout(500);
    //Delete button
    await page.keyboard.press('Delete');
    await page.waitForTimeout(800);
    //Select the parent record
    await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
    await page.waitForTimeout(200);
    //Press Delete button
    await page.keyboard.press('Delete');
    await page.waitForTimeout(500);
    //Select the parent record
    await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
    await page.waitForTimeout(500);
    //Press Delete on the keyboard
    await page.keyboard.press('Delete');
    await page.waitForTimeout(500);
    //Select  the parent record to collapse
    await page.locator('(//td[contains(@class,"e-rowcell")])[51]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to collapse
    await page.keyboard.press('Control+ArrowUp');
    await page.waitForTimeout(500);
    //Press the keyboard to focus on the last cell
    await page.keyboard.press('End');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('51-Move the cell to focus on the left side', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the start date to edit 
    await page.locator('(//td[contains(@class,"e-rowcell")])[17]').dblclick();
    await page.waitForTimeout(1000);
    //Control+A to select all
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Backspace to clear the record
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(200);
    //Press to edit the record
    await page.keyboard.type('4/1/2021');
    await page.waitForTimeout(500);
    //Press Enter key
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Press Shift+Tab to select.
    await page.keyboard.press('Shift+Tab');
    await page.waitForTimeout(500);
    //Moves the cell focus left side from the focused cell.
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('52-Moves the cell focus/row or cell selection', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the start date to edit 
    await page.locator('(//td[contains(@class,"e-rowcell")])[261]').click();
    await page.waitForTimeout(500);
    //Press Delete button
    await page.keyboard.press('Delete');
    await page.waitForTimeout(500);
    //Select the parent record
    await page.locator('(//td[contains(@class,"e-rowcell")])[240]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to make the selection
    await page.keyboard.press('Shift+ArrowUp');
    await page.waitForTimeout(500);
    await page.keyboard.press('Shift+ArrowUp');
    await page.waitForTimeout(500);
    await page.keyboard.press('Shift+ArrowUp');
    await page.waitForTimeout(500);
    //Click the record ,parent record
    await page.locator('(//td[contains(@class,"e-rowcell")])[219]').click();
    await page.waitForTimeout(500);
    //Moves the cell focus Right side from the focused cell.
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('53-Cell edit the records by use of Tab key', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the records
    await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
    await page.waitForTimeout(500);
    //Press Insert button
    await page.keyboard.press('Insert');
    await page.waitForTimeout(500);
    //Select the  record
    await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to insert a new task
    await page.keyboard.press('Insert');
    await page.waitForTimeout(500);
    //Click the data record to edit 
    await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
    await page.waitForTimeout(500);
    //Press the task
    await page.keyboard.press('Control+F2');
    await page.waitForTimeout(500);
    //Press thes Tab key
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('54-Rows are selected ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the second row
    await page.locator("(//span[text()='Product concept'])[1]").click();
    await page.waitForTimeout(500);
    //Press shift down
    await page.keyboard.down('Shift');
    await page.waitForTimeout(500);
    //End point
    await page.locator("(//span[text()='Market research'])[1]").click();
    await page.waitForTimeout(500);
    //Press shift up
    await page.keyboard.up('Shift');
    await page.waitForTimeout(2000);
    //Screenshot validation- Rows are selected
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/887741
test('55-Console error when cell edit', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=fluent');
    await page.waitForTimeout(1000);
    //Double click the taskname to cell edit 
    await page.locator('(//td[contains(@class,"e-rowcell ")])[16]').dblclick();
    await page.waitForTimeout(1000);
    //Press Tab to move to next cell
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Press to select the cell
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click taskname
    await page.locator('(//td[contains(@class,"e-rowcell ")])[16]').click();
    await page.waitForTimeout(1000);
    //Screenshot validation-No console error is thrown after edit the cell .
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
