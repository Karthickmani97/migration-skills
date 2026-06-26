import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
        ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
});

test('1-Resource view  initial load', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(5000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Add new task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    //Add new task record
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(1000);
    //Click Add button
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(1000);
    //Click save button
    await page.locator('(//button[contains(@class,"e-control")])[12]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Collapse all the record', async ({ page }) => {
    //Collapse all the records
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(4000);
    //Click collapse all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Expand all the record', async ({ page }) => {
    //Expand all the records
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Collapse all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Click Expand all 
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Issue bug task created.
test('5-Add Dependency to task ', async ({ page }) => {
    //Add dependency to child record
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(4000);
    //Click the child record
    await page.locator('(//td[contains(@class,"e-rowcell")])[10]').click();
    await page.waitForTimeout(500);
    //Click Edit to open the dialog
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(800);
    //Click Dependency 
    await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
    await page.waitForTimeout(500);
    //Click Add button
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[9]').click();
    await page.waitForTimeout(500);
    //Click the dropdown icon
    await page.locator('(//span[contains(@class,"e-ddl-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    await page.locator('(//button[contains(@class,"e-control")])[14]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Edit task name through cell edit', async ({ page }) => {
    //Edit record by double click
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(4000);
    //Double click task name
    await page.locator('(//td[contains(@class,"e-rowcell")])[8]').dblclick();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    //Edit the task
    await page.locator('(//input[contains(@class,"e-control")])[2]').fill('New Record');
    await page.waitForTimeout(800);
    //Update the record
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Delete the record', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    //Delete the selected record
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(4000);
    //click task name
    await page.locator('(//td[contains(@class,"e-rowcell")])[14]').click({ force: true });
    await page.waitForTimeout(2000);
    //Click the delete button
    await page.keyboard.press('Delete');
    //await page.locator("(//span[text()='Delete'])").click({force:true});
    await page.waitForTimeout(3500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Resource view show/Hide overallocation', async ({ page }) => {
    // To show overallocation
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(2000);
    // Click to Add
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(500);
    // Click to Save and chart side Overallocation
    await page.locator('(//button[contains(@class,"e-control")])[12]').click();
    await page.waitForTimeout(2000);
    // Validate the screenshot- Overallocation is shown
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Resource view Hide overallocation', async ({ page }) => {
    // Hide overallocation
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(1000);
    // Click on the toolbar header to hide resource overallocation
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[8]').click();
    await page.waitForTimeout(1000);
    // Validate the screenshot- Overallocation is hidden
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Add Resources to task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    // Add resource in resource view
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(1000);
    // Click the task
    await page.locator('(//td[contains(@class,"e-rowcell")])[10]').click();
    await page.waitForTimeout(500);
    // Click Edit to open the dialog
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(1000);
    // Click Resources
    await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click();
    await page.waitForTimeout(1000);
    // Click the selected resource
    await page.locator('(//span[contains(@class,"e-uncheck")])[8]').click();
    await page.waitForTimeout(1000);
    // Click to save
    await page.locator('(//button[contains(@class,"e-control")])[12]').click();
    await page.waitForTimeout(1000);
    // Validate the screenshot- Resource is added
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Switch from Project View to Resource view', async ({ page }) => {
    // Switch using the toggle to resource view from Project view
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(1000);
    // Click the toggle
    await page.locator('(//span[contains(@class,"e-switch-handle")])[1]').click();
    await page.waitForTimeout(500);
    // Click the toggle again
    await page.locator('(//span[contains(@class,"e-switch-handle")])[1]').click();
    await page.waitForTimeout(1000);
    // Validate the screenshot- Switch to Resource view
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Switch from Resource View to Project view', async ({ page }) => {
    // Switch using the toggle to project view from resource view
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(1000);
    // Click the toggle
    await page.locator('(//span[contains(@class,"e-switch-handle")])[1]').click();
    await page.waitForTimeout(1000);
    // Validate the screenshot- Switch to Project view
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Project View
test('13-Delete data in project view', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    // Delete task
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(4000);
    // Switch to Project view
    await page.locator('(//span[contains(@class,"e-switch-handle")])[1]').click();
    await page.waitForTimeout(1500);
    // Click to select the task
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').click();
    await page.waitForTimeout(1500);
    // Click to Delete
    await page.locator("(//span[text()='Delete'])").click({ force: true });
    await page.waitForTimeout(2000);
    // Validate the screenshot- Delete the record
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Row drag and drop the child record to parent record', async ({ page }) => {
    // Row drag and drop
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(4000);
    // Switch to Project view
    await page.locator('(//span[contains(@class,"e-switch-handle")])[1]').click();
    await page.waitForTimeout(800);
    // Click to drag
    const src = page.locator("(//td[contains(@class,'e-rowdragdrop')])[2]");
    const dst = page.locator("(//td[contains(@class,'e-rowdragdrop')])[5]");
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
    // Validate the screenshot- Drag and drop the record
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Open dialog for the task', async ({ page }) => {
    //Click edit to open the task dialog.
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(4000);
    //Project view
    await page.locator('(//span[contains(@class,"e-switch-handle")])[1]').click();
    await page.waitForTimeout(800);
    //click the record
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').click();
    await page.waitForTimeout(800);
    //Click the Edit button to open dialog
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Mapping the resources ', async ({ page }) => {
    //Click to edit the different resources
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(4000);
    //Project view
    await page.locator('(//span[contains(@class,"e-switch-handle")])[1]').click();
    await page.waitForTimeout(800);
    //click the the add button
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(800);
    //Click the Edit the task name
    await page.locator('(//input[contains(@class,"e-control")])[2]').click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(300);
    await page.locator('(//input[contains(@class,"e-control")])[2]').fill('NEW');
    await page.waitForTimeout(200);
    //Click to edit work 
    await page.locator('(//input[contains(@class,"e-control")])[3]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class,"e-spin-up")])[1]').click();
    await page.waitForTimeout(200);
    //Click to open resources
    await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class,"e-uncheck")])[1]').click();
    await page.waitForTimeout(300);
    //Click save
    await page.locator('(//button[text()="Save"])[1]').click();
    await page.waitForTimeout(1200);
    await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
    await page.waitForTimeout(200);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Drag and drop taskbar', async ({ page }) => {
    //Row drag and drop
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    //Resource view
    await page.waitForTimeout(4000);
    //click to drag the taskbar on chart side.
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').click();
    await page.waitForTimeout(800);
    await page.mouse.down();
    await page.mouse.move(641, 371);
    await page.waitForTimeout(800);
    await page.mouse.move(1043, 373);
    await page.mouse.up();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Collapse all and delete parent record', async ({ page }) => {
    //Delete parent record 
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(2000);
    //Project view
    await page.locator('(//span[contains(@class,"handle")])[1]').click();
    await page.waitForTimeout(800);
    //click to the task to collapse all
    await page.locator('(//span[contains(@class,"collapseall")])').click();
    await page.waitForTimeout(500);
    //Click to the Parent record
    await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
    await page.waitForTimeout(500);
    //Click delete
    await page.locator('(//span[contains(@class,"delete")])').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Collapse all and delete the child record', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(4000);
    //Click to collapse all
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(800);
    //Collapse the child records each
    await page.locator('(//span[contains(@class, "e-icons e-treegridcollapse")])[1]').click();
    await page.waitForTimeout(400);
    await page.locator('(//span[contains(@class, "e-icons e-treegridcollapse")])[2]').click();
    await page.waitForTimeout(800);
    //Click the child record
    await page.locator('(//td[contains(@class, "e-rowcell")])[8]').click();
    await page.waitForTimeout(400);
    //Click delete button
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(400);
    //Click the child record
    await page.locator('(//td[contains(@class, "e-rowcell")])[26]').click();
    await page.waitForTimeout(400);
    //Click delete button
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Edit the task record and Cancel the Record', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the child record
    await page.locator("(//span[text()='Identify Site location'])[1]").click();
    await page.waitForTimeout(500);
    //Click edit button to open dialog tab
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(500);
    //Edit the taskname
    await page.locator('(//input[contains(@class, "control")])[3]').fill('Site');
    await page.waitForTimeout(200);
    //Click Cancel button
    await page.locator("(//button[text()='Cancel'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation- Record is cancelled and it is not edited
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Add new record and Hide Resource overallocation', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click add button to open dialog tab
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(500);
    //Click Hide Resource overallocation button
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[8]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation- Resource ovallocation hidden and new task added
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/testing/_workitems/edit/902897
test('22-Visibility Issue on the Toggle Switch ', async ({ page }) => {
    //Switch using the toggle to resource view from Project view view
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent2-highcontrast');
    await page.waitForTimeout(2000);
    //Click the toggle
    await page.locator('(//span[contains(@class,"e-switch-handle")])[1]').click();
    await page.waitForTimeout(800);
    //Click the toggle
    await page.locator('(//span[contains(@class,"e-switch-handle")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The toggle the appearance is maintained when checked.
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/887433
test('23-Edit button persist in resourceview ', async ({ page }) => {
    //Switch using the toggle to resource view from Project view view
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the toggle
    await page.locator('(//span[contains(@class,"e-switch-handle")])[1]').click();
    await page.waitForTimeout(500);
    //Click the 1 st parent record
    await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
    await page.waitForTimeout(500);
    //Click delete button on the toolbar
    await page.locator('(//span[contains(@class,"delete")])[1]').click();
    await page.waitForTimeout(500);
    //Click the 2nd parent record
    await page.locator('(//td[contains(@class,"rowcell")])[3]').click();
    await page.waitForTimeout(500);
    //Click delete button on the toolbar
    await page.locator('(//span[contains(@class,"delete")])[1]').click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The edit button is not visible on the toolbar
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/901712
test('24-Visibility Issue on Toggle Switch', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-view?theme=bootstrap5');
    await page.waitForTimeout(1000);
    //Click the Edit button 
    await page.locator('(//span[contains(@class,"switch")])[4]').hover();
    await page.waitForTimeout(1000);
    //Screenshot validation-The switch is visible when select the theme Bootsrap 5 and no visibility issue.
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/901713
test('25-Console eeror when navigate to dependency', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(1000);
    //Switch using the toggle to project view from resource view
    await page.locator('(//span[contains(@class,"e-switch-handle")])').click();
    await page.waitForTimeout(500);
    //Click collapse all button 
    await page.locator('(//span[contains(@class,"collapseall")])[1]').click();
    await page.waitForTimeout(500);
    //Click the parent record
    await page.locator('(//td[contains(@class,"rowcell")])[3]').click();
    await page.waitForTimeout(500);
    //Click delete button on the toolbar
    await page.locator('(//span[contains(@class,"delete")])').click();
    await page.waitForTimeout(500);
    //Click the child record 
    await page.locator('(//td[contains(@class,"rowcell")])[3]').click();
    await page.waitForTimeout(500);
    //Click delete button on the toolbar
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The Edit button is not visible after delete the records and no console error is thrown.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/907162
test('26-Parent task not displayed', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(2000);
    // Double click on the child task to open the dialog
    await page.locator("(//div[contains(@class,'gantt-child')])[1]").dblclick();
    await page.waitForTimeout(1000);
    // Navigate to the dependency tab
    await page.locator("(//div[contains(@class,'e-tab-wrap')])[4]").click();
    await page.waitForTimeout(1000);
    // Click on Add icon
    await page.locator("(//span[contains(@class,'e-add')])[2]").click();
    await page.waitForTimeout(1000);
    // Click on Name field
    await page.locator("(//span[contains(@class,'e-input-group')])[10]").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - The parent task name is not  displayed from the dropdown
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/933531
test('27-Check duration value rendered', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    await page.waitForTimeout(2000);
    // Click the toggle
    await page.locator('(//span[contains(@class,"e-switch-handle")])[1]').click({ force: true });
    await page.waitForTimeout(2000);
    // Click the add button
    await page.locator("(//span[text()='Add'])[1]").click({ force: true });
    await page.waitForTimeout(2000);
    //Edit work
    await page.locator('#Work').click();
    await page.locator('#Work').clear();
    await page.waitForTimeout(1000);
    await page.locator('#Work').fill('1');
    await page.waitForTimeout(2000);
    // Click Resources
    await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click({ force: true });
    await page.waitForTimeout(2000);
    // Click to select all resources
    await page.locator('(//span[contains(@class,"e-frame")])[1]').click({ force: true });
    await page.waitForTimeout(2000);
    // Click to save
    await page.locator("(//button[text()='Save'])[1]").click({ force: true });
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[2]').click();
    await page.waitForTimeout(1000);
    // Validate the screenshot- Resource is added
    expect(await page.locator('#control-content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/927291
test('28-927291-Console error thrown', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    test.info().annotations.push({ type: 'Sample link', description: 'resource-view?theme=fluent' });
    await page.waitForTimeout(2000);
    //Double click 1 st parent record taskbar
    await page.locator('(//div[contains(@class,"e-gantt-parent-taskbar")])[1]').dblclick();
    await page.waitForTimeout(1000);
    //Change view to project view
    await page.locator('(//span[contains(@class, "e-switch-handle")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Console error is not thrown when switch to project view from resource view
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-The unit updated duration resources', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    test.info().annotations.push({ type: 'Sample link', description: 'resource-view?theme=fluent' });
    await page.waitForTimeout(2000);
    //Click Add button
    await page.locator('(//span[contains(@class,"e-add")])[1]').click();
    await page.waitForTimeout(500);
    //Select work hours
    await page.locator('(//input[contains(@class,"e-control")])[4]').fill('4');
    await page.waitForTimeout(500);
    //Edit the duration 
    await page.locator('(//input[contains(@class,"e-control")])[7]').fill('8 days');
    await page.waitForTimeout(500);
    //Click to select resource
    await page.locator('(//div[contains(@class,"e-tab-wrap")])[5]').click();
    await page.waitForTimeout(500);
    //Click the resources
    await page.locator('(//td[contains(@class,"e-rowcell")])[183]').dblclick();
    await page.waitForTimeout(1000);
    //select the unit to edit 
    await page.locator('(//input[contains(@class,"e-control e-numerictextbox e-lib e-input")])[1]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to clear the records.
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Fill it with 50%
    await page.locator('(//input[contains(@class,"e-control e-numerictextbox e-lib e-input")])[1]').fill('50');
    await page.waitForTimeout(500);
    //Select the resource
    await page.locator('(//span[contains(@class,"e-uncheck")])[2]').click();
    await page.waitForTimeout(500);
    //Click to save
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Unit is updated and resources added for new task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Dialog tab for resource', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    test.info().annotations.push({ type: 'Sample link', description: 'resource-view?theme=fluent' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator('(//span[contains(@class,"e-add")])[1]').click();
    await page.waitForTimeout(500);
    //Click the resources to open the dialog tab
    await page.locator('(//div[contains(@class,"e-tab-wrap")])[5]').click();
    await page.waitForTimeout(500);
    //Click the resources
    await page.locator('(//td[contains(@class,"e-rowcell")])[183]').dblclick();
    await page.waitForTimeout(1000);
    //select the unit to edit 
    await page.locator('(//input[contains(@class,"e-control e-numerictextbox e-lib e-input")])[1]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to clear the records.
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Fill it with 50%
    await page.locator('(//input[contains(@class,"e-control e-numerictextbox e-lib e-input")])[1]').fill('50');
    await page.waitForTimeout(500);
    //Select the resource
    await page.locator('(//span[contains(@class,"e-uncheck")])[2]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The dialog tab for edited resource is indicated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Cancel the resource edited', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    test.info().annotations.push({ type: 'Sample link', description: 'resource-view?theme=fluent' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator('(//span[contains(@class,"e-add")])[1]').click();
    await page.waitForTimeout(500);
    //Click the resources to open the dialog tab
    await page.locator('(//div[contains(@class,"e-tab-wrap")])[5]').click();
    await page.waitForTimeout(500);
    //Click the resources
    await page.locator('(//td[contains(@class,"e-rowcell")])[183]').dblclick();
    await page.waitForTimeout(1000);
    //select the unit to edit 
    await page.locator('(//input[contains(@class,"e-control e-numerictextbox e-lib e-input")])[1]').click();
    await page.waitForTimeout(500);
    //Press the keyboard to clear the records.
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Fill it with 50%
    await page.locator('(//input[contains(@class,"e-control e-numerictextbox e-lib e-input")])[1]').fill('50');
    await page.waitForTimeout(500);
    //Select the resource
    await page.locator('(//span[contains(@class,"e-uncheck")])[2]').click();
    await page.waitForTimeout(500);
    //Click to save
    await page.locator("(//button[text()='Cancel'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The cell edited resource is cancelled and not updated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Filter the resources name indicated dialog ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    test.info().annotations.push({ type: 'Sample link', description: 'resource-view?theme=fluent' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator('(//span[contains(@class,"e-add")])[1]').click();
    await page.waitForTimeout(500);
    //Click the resources to open the dialog tab
    await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click();
    await page.waitForTimeout(500);
    //Click to select the filter icon
    await page.locator('(//div[contains(@class,"e-filtermenudiv")])[2]').click();
    await page.waitForTimeout(500);
    //Select the input to enter the filtered record starts with
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Press the keyboard for the records 
    await page.keyboard.type('F');
    await page.waitForTimeout(500);
    //Select the resource
    await page.locator('(//span[contains(@class,"e-uncheck")])[1]').click();
    await page.waitForTimeout(500);
    //Click the filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The record is added and dialog tab for resource is filtered is indicated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Filter the resources ID', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    test.info().annotations.push({ type: 'Sample link', description: 'resource-view?theme=fluent' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator('(//span[contains(@class,"e-add")])[1]').click();
    await page.waitForTimeout(500);
    //Click the resources to open the dialog tab
    await page.locator('(//div[contains(@class,"e-tab-wrap")])[5]').click();
    await page.waitForTimeout(500);
    //Click to select the filter icon
    await page.locator('(//div[contains(@class,"e-filtermenudiv")])[1]').click();
    await page.waitForTimeout(500);
    //Select the input to enter the filtered record starts with
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Press the keyboard for the records 
    await page.keyboard.type('R');
    await page.waitForTimeout(500);
    //Select the resource
    await page.locator('(//span[contains(@class,"e-uncheck")])[1]').click();
    await page.waitForTimeout(500);
    //Click to save
    await page.locator("(//button[text()='Clear'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The record is cleared for the selected resource ID
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Cell edit
test('34-Cell edit the records.', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent');
    test.info().annotations.push({ type: 'Sample link', description: 'resource-view?theme=fluent' });
    await page.waitForTimeout(2000);
    //Double click the Work Hours
    await page.locator('(//td[contains(@class,"rowcell")])[15]').dblclick();
    await page.waitForTimeout(500);
    //Press the keyboard to clear the records.
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Fill it with 4 Hours
    await page.keyboard.type('4 Hours');
    await page.waitForTimeout(500);
    //Press the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Record is updated from cell edit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});