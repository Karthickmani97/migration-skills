import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Binding segments data source initial load', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Binding-segments-data-source');
    await page.waitForTimeout(500);
    //Screenshot validation - On initial load it should work fine and all the records should be displayed
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Split the taskbar ', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Segment-customization-with-template');
    await page.waitForTimeout(1000);
    //Click the child record taskbar
    await page.locator("(//div[contains(@class,'child')])[8]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click to split task
    await page.locator("(//li[text()='Split Task'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation -When click to split task the child taskbar should be split
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Merge the taskbar to Left', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Segment-customization-with-template');
    await page.waitForTimeout(1000);
    //Click the child record taskbar
    await page.locator("(//div[contains(@class,'child')])[23]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click to Merge task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Merge Left
    await page.locator("(//li[text()='Left'])").click();
    await page.waitForTimeout(1000);
    //Screenshot calidation - When click merge and click to merge left the child taskbar should be merged left
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Outdent the record and Split the task', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Segment-customization-with-template');
    await page.waitForTimeout(1000);
    //Click the child record taskbar
    await page.locator("(//div[contains(@class,'child')])[23]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click to outdent task
    await page.locator("(//li[text()='Outdent'])").click();
    await page.waitForTimeout(500);
    //Click the child record taskbar
    await page.locator("(//div[contains(@class,'child')])[8]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Split Task
    await page.locator("(//li[text()='Split Task'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation -The task should appear oudented and child record is split after perform split task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Convert to Milestone the record and Merge', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Segment-customization-with-template');
    await page.waitForTimeout(1000);
    //Click the child record taskbar
    await page.locator("(//div[contains(@class,'child')])[4]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click to Convert task to Milestone
    await page.locator("(//li[text()='Convert'])").click();
    await page.waitForTimeout(500);
    //Milestone
    await page.locator("(//li[text()='To Milestone'])").click();
    await page.waitForTimeout(500);
    //Click the child record taskbar
    await page.locator("(//div[contains(@class,'child')])[8]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Merge Task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Right
    await page.locator("(//li[text()='Right'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation -child record should be  converted to milestone and the child taskbar merged to Right after click merge task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Edit the child record , Zoom In and Split', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Segment-customization-with-template');
    await page.waitForTimeout(1000);
    //Click the child record taskbar
    await page.locator("(//td[contains(@class,'rowcell')])[9]").dblclick();
    await page.waitForTimeout(1000);
    //Click to edit the record
    await page.locator("(//input[contains(@class,'control')])[1]").fill('Site Location');
    await page.waitForTimeout(500);
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Click the Zoom in on the toolbar
    await page.locator("(//span[contains(@class,'zoomin')])").click();
    await page.waitForTimeout(500);
    //Click the taskbar on the chart side
    await page.locator("(//div[contains(@class,'child')])[2]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click to Split Task
    await page.locator("(//li[text()='Split Task'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The chart side when click Zoom in on toolbar should be zoomed in and record edited should be visible on the grid side of the component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Collapse all the Parent Records and Expand', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Segment-customization-with-template');
    await page.waitForTimeout(1000);
    //Click to collapse all records
    await page.locator("(//span[contains(@class,'collapseall')])").click();
    await page.waitForTimeout(1000);
    //Click to expand last parent record
    await page.locator("(//span[contains(@class,'treegrid')])[3]").click();
    await page.waitForTimeout(500);
    //Click the Zoom Fit on the toolbar
    await page.locator("(//span[contains(@class,'zoomtofit')])").click();
    await page.waitForTimeout(500);
    //Click the taskbar on the chart side
    await page.locator("(//div[contains(@class,'child')])[4]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click to Merge Task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Merge Task Left
    await page.locator("(//li[text()='Left'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Collapsed record visible and one expanded record visible to mege task left for its child taskbar record and chart side appear Zoom Fit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Delete the parent record,Add Above and Split', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Segment-customization-with-template');
    await page.waitForTimeout(1000);
    //Click to delete the Parent record
    await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
    await page.waitForTimeout(700);
    //Press the Delete button
    await page.keyboard.press('Delete');
    await page.waitForTimeout(500);
    //Click to delete second Parent Record
    await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
    await page.waitForTimeout(500);
    //Press the Delete button
    await page.keyboard.press('Delete');
    await page.waitForTimeout(500);
    //Click the child record on chart side taskbar
    await page.locator("(//div[contains(@class,'child')])[12]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click to Add 
    await page.locator("(//li[text()='Add'])").click();
    await page.waitForTimeout(500);
    //Add Above
    await page.locator("(//li[text()='Above'])").click();
    await page.waitForTimeout(500);
    //Click the child taskbar
    await page.locator("(//div[contains(@class,'child')])[4]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click to Split Task
    await page.locator("(//li[text()='Split Task'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Added record should appear above the child taskbar and also split after perform the split task action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Merge the task Left and to show the segment', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Segment-event');
    await page.waitForTimeout(1000);
    //Click the child record taskbar
    await page.locator("(//div[contains(@class,'child')])[4]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click to Merge task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click Left
    await page.locator("(//li[text()='Left'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The child taskbar on chart side should be merged left after perform the action and should indicate details cancelled on toolbar
    expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Merge the task Right', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Segment-event');
    await page.waitForTimeout(1000);
    //Click the child record taskbar
    await page.locator("(//div[contains(@class,'child')])[7]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click to Merge task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click Right
    await page.locator("(//li[text()='Right'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The child taskbar on chart side should be merged Right after perform the action
    expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Merge the task Left', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Segment-event');
    await page.waitForTimeout(1000);
    //Click the child record taskbar
    await page.locator("(//div[contains(@class,'child')])[23]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click to Merge task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click left
    await page.locator("(//li[text()='Left'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Merged taskbar for child record Left and should appear details updated after perform the action
    expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Collapse record and Add below and Split Task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Segment-event');
    await page.waitForTimeout(1000);
    //Click the parent record to delete
    await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
    await page.waitForTimeout(500);
    //Press the delete button on the keyboard
    await page.keyboard.press('Delete');
    await page.waitForTimeout(500);
    //Click the parent record to delete
    await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
    await page.waitForTimeout(500);
    //Press the delete button on the keyboard
    await page.keyboard.press('Delete');
    await page.waitForTimeout(500);
    //Collapse the parent record
    await page.locator("(//span[contains(@class,'collapseall')])").click();
    await page.waitForTimeout(500);
    //Click the parent record
    await page.locator("(//div[contains(@class,'parent')])[1]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Add
    await page.locator("(//li[text()='Add'])").click();
    await page.waitForTimeout(500);
    //Click Below
    await page.locator("(//li[text()='Below'])").click();
    await page.waitForTimeout(500);
    //Click the child record
    await page.locator("(//div[contains(@class,'child')])[1]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Split Task
    await page.locator("(//li[text()='Split Task'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-After delete of parent records and collapse records, records should appear added below and the child taskbar split after perform the action
    expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('13-Split the Tasks and Indent the Record', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Segment-event');
    await page.waitForTimeout(500);
    //Click the child record taskbar
    await page.locator("(//div[contains(@class,'child')])[3]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click to split Task
    await page.locator("(//li[text()='Split Task'])").click();
    await page.waitForTimeout(200);
    //Click the child record taskbar
    await page.locator("(//div[contains(@class,'child')])[10]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click to split Task
    await page.locator("(//li[text()='Split Task'])").click();
    await page.waitForTimeout(200);
    //Click the child record taskbar
    await page.locator("(//div[contains(@class,'child')])[18]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Indent
    await page.locator("(//li[text()='Indent'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-Records should appear indented on the chart side after split the child taskbar
    expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Add new task and edit the duration', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Segment-event');
    await page.waitForTimeout(1000);
    //Click the Add button
    await page.locator("(//span[contains(@class,'add')])").click();
    await page.waitForTimeout(1000);
    //Edit the Duration
    await page.locator("(//input[contains(@class,'control')])[4]").fill('6 Days');
    await page.waitForTimeout(500);
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Click the child record taskbar
    await page.locator("(//div[contains(@class,'child')])[10]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click to Merge the record
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click Right
    await page.locator("(//li[text()='Right'])").click();
    await page.waitForTimeout(500);
    //Click the child record on chart side to show Task information
    await page.locator("(//div[contains(@class,'child')])[10]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Task Information
    await page.locator("(//li[text()='Task Information'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The task information information dialog tab should be visible when clicked
    expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Convert Task to Milestone and Merge', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Segment-event');
    await page.waitForTimeout(1000);
    //Click the child task to delete
    await page.locator("(//div[contains(@class,'child')])[10]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click to Delete Taskto delete the record
    await page.locator("(//li[text()='Delete Task'])").click();
    await page.waitForTimeout(500);
    //Click the child taskbar , to convert it to Milestone
    await page.locator("(//div[contains(@class,'child')])[6]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Convert
    await page.locator("(//li[text()='Convert'])").click();
    await page.waitForTimeout(500);
    //Click To MIlestone
    await page.locator("(//li[text()='To Milestone'])").click();
    await page.waitForTimeout(500);
    //Click the child record to split Task
    await page.locator("(//div[contains(@class,'child')])[12]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Merge Task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click Right
    await page.locator("(//li[text()='Left'])").click();
    await page.waitForTimeout(500);
    //Zoom Fit 
    await page.locator("(//span[contains(@class,'zoomtofit')])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Records on chart side should appear Zoom Fit after perform the actions and child taskbar converted to milestone on the chart side.
    expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Split Task ', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Split-and-merge-tasks-dynamically');
    await page.waitForTimeout(1000);
    //Click the child record to split the task
    await page.locator("(//div[contains(@class,'child')])[3]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click split task 
    await page.locator("(//li[text()='Split Task'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The records for child taskbar should be split after perform the action split task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Merge the task Right', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Split-and-merge-tasks-dynamically');
    await page.waitForTimeout(1000);
    //Click the child record to merge the task
    await page.locator("(//div[contains(@class,'child')])[6]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Merge Task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click Right
    await page.locator("(//li[text()='Right'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The child taskbar should be Merged Right after perform the action Merge task and click Right on the chart side of component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Merge the task to Left', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Split-and-merge-tasks-dynamically');
    await page.waitForTimeout(1000);
    //Click the child record to merge the task
    await page.locator("(//div[contains(@class,'child')])[23]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Merge Task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click Left
    await page.locator("(//li[text()='Left'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The child taskbar should be Merged Left after perform the action Merge task and click Left on the chart side of component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Split Task and after which merge the record', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Split-and-merge-tasks-dynamically');
    await page.waitForTimeout(1000);
    //Click the child record to split the task
    await page.locator("(//div[contains(@class,'child')])[24]").click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click split task 
    await page.locator("(//li[text()='Split Task'])").click();
    await page.waitForTimeout(800);
    //Click the taskbar to merge 
    await page.locator("(//div[contains(@class,'child')])[9]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Merge the Task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click Left
    await page.locator("(//li[text()='Left'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Split task for a child record on chart side and merge task Left for another child taskbar should be visible on the chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Split the task and merge the same Task', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Split-and-merge-tasks-dynamically');
    await page.waitForTimeout(1000);
    //Click the child record to split the task
    await page.locator("(//div[contains(@class,'child')])[24]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click split task 
    await page.locator("(//li[text()='Split Task'])").click();
    await page.waitForTimeout(800);
    //Click the taskbar to merge 
    await page.locator("(//div[contains(@class,'child')])[22]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Merge the Task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click Left
    await page.locator("(//li[text()='Right'])").click();
    await page.waitForTimeout(500);
    //Zoom Fit
    await page.locator("(//span[contains(@class,'zoomtofit')])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Zoom Fit should and visible on chart and child taskbar split and merged after performing the action on the child taskbar split task and merge task ,Right
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Edit the Child record task name with Null Value', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Split-and-merge-tasks-dynamically');
    await page.waitForTimeout(1000);
    //Click the child record to Edit 
    await page.locator("(//td[contains(@class,'rowcell')])[9]").dblclick();
    await page.waitForTimeout(1000);
    //Edit with null value
    await page.locator("(//input[contains(@class,'control')])[1]").fill('');
    await page.waitForTimeout(500);
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Click the taskbar on chart side to split task
    await page.locator("(//div[contains(@class,'child')])[8]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click split task 
    await page.locator("(//li[text()='Split Task'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The child record on the grid side should have null value after enter and chart side the child taskbar should be split after perform action split task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Add child after split task of child record', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Split-and-merge-tasks-dynamically');
    await page.waitForTimeout(1000);
    //Click the taskbar on chart side to split task
    await page.locator("(//div[contains(@class,'child')])[8]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click split task 
    await page.locator("(//li[text()='Split Task'])").click();
    await page.waitForTimeout(500);
    //Click the taskbar to select Add child
    await page.locator("(//div[contains(@class,'child')])[14]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Add
    await page.locator("(//li[text()='Add'])").click();
    await page.waitForTimeout(500);
    //Click to Add Child
    await page.locator("(//li[text()='Child'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-New child added to be visible on the chart side after perform split task action on the child taskbar
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Merge the Task for child Taskbar after Add Milestone', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Split-and-merge-tasks-dynamically');
    await page.waitForTimeout(1000);
    //Click the taskbar on chart side to split task
    await page.locator("(//div[contains(@class,'child')])[8]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click to Merge Task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click Add
    await page.locator("(//li[text()='Right'])").click();
    await page.waitForTimeout(500);
    //Click the taskbar to Add Milestone
    await page.locator("(//div[contains(@class,'child')])[4]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click the Taskbar to Add Milestone
    await page.locator("(//li[text()='Add'])").click();
    await page.waitForTimeout(500);
    //Milestone
    await page.locator("(//li[text()='Milestone'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Added milestone should be visible on the chart side of the component  after merge task Right on the child taskbars
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Split Task and Add Above  Record and Merge the task ', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Split-and-merge-tasks-dynamically');
    await page.waitForTimeout(1000);
    //Click the child record to split the task
    await page.locator("(//div[contains(@class,'child')])[8]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click the Taskbar to Add Above
    await page.locator("(//li[text()='Add'])").click();
    await page.waitForTimeout(500);
    //Above
    await page.locator("(//li[text()='Above'])").click();
    await page.waitForTimeout(500);
    //Click the child record to Merge the task
    await page.locator("(//div[contains(@class,'child')])[16]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Merge task 
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click Left
    await page.locator("(//li[text()='Left'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Recorded should appear added above the child taskbar on the chart side and record merged task left for the child taskbar
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Add Below Record and Split Task for the child Taskbar ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/Split-and-merge-tasks-dynamically');
    await page.waitForTimeout(500);
    //Click the child record to split the task
    await page.locator("(//div[contains(@class,'child')])[40]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click the Taskbar to Add Above
    await page.locator("(//li[text()='Add'])").click();
    await page.waitForTimeout(200);
    //Below
    await page.locator("(//li[text()='Below'])").click();
    await page.waitForTimeout(400);
    //Click the child record to Merge the task
    await page.locator("(//div[contains(@class,'child')])[43]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Split task 
    await page.locator("(//li[text()='Split Task'])[1]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-Task on grid side should appear added below and child taskbar split after perform split task action 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Split the task through context menu ', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-context-menu');
    await page.waitForTimeout(1000);
    //Click the child record to split the task
    await page.locator("(//div[contains(@class,'child')])[9]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click split task 
    await page.locator("(//li[text()='Split Task'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The child taskbar on chart side should be split after perform the action split task 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Merge the task through context menu, Right ', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-context-menu');
    await page.waitForTimeout(1000);
    //Click the child record to split the task
    await page.locator("(//div[contains(@class,'child')])[9]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Merge Task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click Right
    await page.locator("(//li[text()='Right'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The child taskbar selected should appear merged Right after performing the action merge task and click Right
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Merge the task through context menu,Left ', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-context-menu');
    await page.waitForTimeout(1000);
    //Click the child record to split the task
    await page.locator("(//div[contains(@class,'child')])[4]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Merge Task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(800);
    //Click Left
    await page.locator("(//li[text()='Left'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The child taskbar selected should appear merged left after performing the action merge task and click Left
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Merge the taskbar for the child record ', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-context-menu');
    await page.waitForTimeout(1000);
    //Click the child record to split the task
    await page.locator("(//div[contains(@class,'child')])[9]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Merge Task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click Left
    await page.locator("(//li[text()='Left'])").click();
    await page.waitForTimeout(500);
    //Click the child record to merge it Right
    await page.locator("(//div[contains(@class,'child')])[7]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Merge Task
    await page.locator("(//li[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click Right
    await page.locator("(//li[text()='Right'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The taskbar for the child taskbar should be visible after merge task Left and right for the different child taskbars
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Oudent the child Record and Split Task  ', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-context-menu');
    await page.waitForTimeout(1000);
    //Click the child record to outdent 
    await page.locator("(//div[contains(@class,'child')])[4]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Outdent
    await page.locator("(//li[text()='Outdent'])").click();
    await page.waitForTimeout(500);
    //Click the child record to Split Task
    await page.locator("(//div[contains(@class,'child')])[10]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Split Task
    await page.locator("(//li[text()='Split Task'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The records should appear outdented and child task split after performing the action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Delete the taskbar through context menu', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-context-menu');
    await page.waitForTimeout(1000);
    //Click the child record to outdent 
    await page.locator("(//div[contains(@class,'child')])[4]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click delete Task
    await page.locator("(//li[text()='Delete Task'])").click();
    await page.waitForTimeout(500);
    //Click the child to delete
    await page.locator("(//div[contains(@class,'child')])[4]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click delete Task
    await page.locator("(//li[text()='Delete Task'])").click();
    await page.waitForTimeout(500);
    //Click Zoom Fit Task
    await page.locator("(//span[contains(@class,'zoomtofit')])").click();
    await page.waitForTimeout(500);
    //Click the record to split task
    await page.locator("(//div[contains(@class,'child')])[11]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click Split Task
    await page.locator("(//li[text()='Split Task'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Zoom Fit for the records on chart side should be visible and records deleted through coontext menu
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Delete the segments through dialog to merge the Record ', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-dialog-box');
    await page.waitForTimeout(1000);
    //Click the child record the taskname
    await page.locator("(//td[contains(@class,'rowcell')])[9]").click();
    await page.waitForTimeout(500);
    //Click the edit button on toolbatr to open the dialog 
    await page.locator("(//span[contains(@class,'edit')])").click();
    await page.waitForTimeout(500);
    //Select segment to open the dialog
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Select the segment to delete
    await page.locator("(//td[text()='03/30/2022'])[1]").click();
    await page.waitForTimeout(500);
    //Delete button
    await page.locator("(//span[contains(@class,'delete')])[2]").click();
    await page.waitForTimeout(500);
    //Second segment to be deleted
    await page.locator("(//td[text()='04/08/2022'])[1]").click();
    await page.waitForTimeout(500);
    //Delete button
    await page.locator("(//span[contains(@class,'delete')])[2]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation- The records on the chart side should be merged after deleting the segments.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Split the task by adding segment through the dialog', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-dialog-box');
    await page.waitForTimeout(1000);
    //Click the child record the taskname
    await page.locator("(//td[contains(@class,'rowcell')])[9]").click();
    await page.waitForTimeout(500);
    //Click the edit button on toolbar to open the dialog 
    await page.locator("(//span[contains(@class,'edit')])").click();
    await page.waitForTimeout(800);
    //Select segment to open the dialog
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //Click the add button
    await page.locator("(//span[contains(@class,'add')])[2]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(1200);
    //Screenshot validation-The records on chart side should be split after adding new segments
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Collapse all the Records', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-dialog-box');
    await page.waitForTimeout(1000);
    //Click to collapse all the record
    await page.locator("(//span[contains(@class,'collapseall')])").click();
    await page.waitForTimeout(500);
    //Click the parent record to expand 
    await page.locator("(//span[contains(@class,'e-treegrid')])[1]").click();
    await page.waitForTimeout(500);
    //Select the child record to edit
    await page.locator("(//span[text()='Identify site location'])[1]").click();
    await page.waitForTimeout(500);
    //Click the edit button
    await page.locator("(//span[contains(@class,'edit')])").click();
    await page.waitForTimeout(500);
    //Click the segment to open its dialog
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    //select the segment to delete
    await page.locator("(//td[text()='2'])[2]").click();
    await page.waitForTimeout(500);
    //click the delete button
    await page.locator("(//span[contains(@class,'delete')])[2]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(500);
    //Zoom Fit
    await page.locator("(//span[contains(@class,'zoomtofit')])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Zoom Fit should be visible on the chart side for the records and task merged after deletion of the segments and records appear collapsed
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Merge the Task through the method', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-method');
    await page.waitForTimeout(1000);
    //Click the child record taskbar
    await page.locator("(//div[contains(@class,'child')])[1]").click();
    await page.waitForTimeout(500);
    //Click  Merge task button  on the toolbar
    await page.locator("(//button[text()='Merge Task'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation- the child taskbar on chart side be mereged after perform the action merge task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Split Task through the method', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-method');
    await page.waitForTimeout(1000);
    //Click the child record taskbar
    await page.locator("(//div[contains(@class,'child')])[8]").click();
    await page.waitForTimeout(500);
    //Click Split task button  on the toolbar
    await page.locator("(//button[text()='Split Task'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-the child taskbar should be split after click split task to perform the action
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Zoom Out ,click to delete dependency, Merge Task', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-method');
    await page.waitForTimeout(1000);
    //Click zoom out button on the toolbar
    await page.locator("(//span[contains(@class,'zoomout')])").click();
    await page.waitForTimeout(500);
    //Click the Milestone record to delete dependency
    await page.locator("(//div[contains(@class,'milestone')])[1]").click({
        button: 'right'
    });
   await page.waitForTimeout(300);
    //Click delete dependency
    await page.locator("(//li[text()='Delete Dependency'])").click();
    await page.waitForTimeout(500);
    //select the dependency record to delete
    await page.locator("(//li[text()='4 - Perform soil test'])").click();
    await page.waitForTimeout(500);
    //Click Merge task button on the toolbar
    await page.locator("(//button[text()='Merge Task'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation- The records on the chart side should be Zoomed Out and child taskbar merged.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Expand Parent record and Zoom In ', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-method');
    await page.waitForTimeout(1000);
    //Click the child record to split task
    await page.locator("(//div[contains(@class,'child')])[10]").click();
    await page.waitForTimeout(1000);
    //Click split task button on the toolbar
    await page.locator("(//button[text()='Split Task'])").click();
    await page.waitForTimeout(500);
    //Click collapse all the records
    await page.locator("(//span[contains(@class,'collapseall')])").click();
    await page.waitForTimeout(500);
    //Click to Expand the first parent record
    await page.locator("(//span[contains(@class,'e-treegrid')])[1]").click();
    await page.waitForTimeout(500);
    //Click zoom in button on the toolbar
    await page.locator("(//span[contains(@class,'zoomin')])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Zoom in the record should be visible on the chart side of the component and the split task for child taskbar after collapse all records.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Add New Record Split Task and Zoom Fit ', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-method');
    await page.waitForTimeout(1000);
    //Click Add button on the toolbar
    await page.locator("(//span[contains(@class,'add')])").click();
    await page.waitForTimeout(500);
    //Press the Enter key on the keyboard
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(800);
    //Click the record to delete
    await page.locator("(//span[text()='Soil test approval'])[1]").click();
    await page.waitForTimeout(500);
    //Press the Delete key on the keyboard
    await page.keyboard.press('Delete');
    await page.waitForTimeout(500);
    //Click split task button on the toolbar
    await page.locator("(//button[text()='Split Task'])").click();
    await page.waitForTimeout(500);
    //Click zoom Fit
    await page.locator("(//span[contains(@class,'zoomtofit')])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Zoom to fit the records on the chart side to be visible and added record visible on the grid side of the component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Edit the Parent record with Null Value', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-method');
    await page.waitForTimeout(1000);
    //Click the parent record to edit
    await page.locator("(//span[text()='Project initiation'])[1]").dblclick();
    await page.waitForTimeout(1000);
    //Enter Null Value
    await page.locator("(//input[contains(@class,'control')])[1]").fill('');
    await page.waitForTimeout(500);
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Click split task button on the toolbar
    await page.locator("(//button[text()='Merge Task'])").click();
    await page.waitForTimeout(500);
    //Click zoom Fit
    await page.locator("(//span[contains(@class,'zoomout')])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation- Zoom out the records to be visible on the chart side and task merged and Grid side parent recorded edited with Null value
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Delete dependency for Task', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-method');
    await page.waitForTimeout(1000);
    //Click the Milestone record to delete the dependency
    await page.locator("(//div[contains(@class,'milestone')])[1]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Delete dependency 
    await page.locator("(//li[text()='Delete Dependency'])").click();
    await page.waitForTimeout(500);
    //select the dependeny
    await page.locator("(//li[text()='4 - Perform soil test'])").click();
    await page.waitForTimeout(500);
    //Click the child taskbar task to Milestone
    await page.locator("(//div[contains(@class,'child')])[2]").click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Click convert
    await page.locator("(//li[text()='Convert'])").click();
    await page.waitForTimeout(500);
    //Click To Milestone
    await page.locator("(//li[text()='To Milestone'])").click();
    await page.waitForTimeout(500);
    //Click split task button on the toolbar
    await page.locator("(//button[text()='Split Task'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Converted the child taskbar to milestone should be  visible on the chart side and split task performed to be shown on chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/881443

test('42-881443 - annotation for segment tab', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Through-dialog-box');
    await page.waitForTimeout(600);
    //Click the child record the taskname
    await page.locator("(//td[contains(@class,'rowcell')])[9]").click();
    await page.waitForTimeout(500);
    //Click the edit button on toolbar to open the dialog 
    await page.locator("(//span[contains(@class,'edit')])").click();
    await page.waitForTimeout(500);
    //Select segment to open the dialog
    await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
    await page.waitForTimeout(500);
    // check annotation text
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});