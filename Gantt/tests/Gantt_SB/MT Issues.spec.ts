import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
import { pdf } from '../Helper/pdfStub';
//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/924770
test('1-924770-Connector Lines Misaligned ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'row-height?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'row-height?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Select small icon for row height
    await page.locator('(//span[contains(@class,"e-small-icon")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-TheConnector Lines are not Misaligned and the milestone is placed properly
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/925604
test('2-925604-Icon issue in clipboard sample', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'clipboard?theme=tailwind3');
    test.info().annotations.push({ type: 'Sample link', description: 'clipboard?theme=tailwind3' });
    await page.waitForTimeout(2000);
    //Screenshot validation-Icon issue in clipboard sample theme Tailwind 3 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/926260
test('4-926260-Alignment Issue in Keyboard navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'keyboard-navigation?theme=material3');
    test.info().annotations.push({ type: 'Sample link', description: 'keyboard-navigation?theme=material3' });
    await page.waitForTimeout(2000);
    //Double click the child record on the grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[9]').dblclick();
    await page.waitForTimeout(2000);
    //Screenshot validation-There is no alignment issue when double click the record to cell edit.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/926067
test('5-926067-Manual Parent taskbar misalignment Issue', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'scheduling-mode?theme=tailwind3');
    test.info().annotations.push({ type: 'Sample link', description: 'scheduling-mode?theme=tailwind3' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.getByLabel('toggle settings menu').click();
    await page.waitForTimeout(500);
    //Click to switch to Touch Mode
    await page.getByRole('button', { name: 'Touch' }).click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Manual Parent taskbar misalignment Issue does not occur when change to Touch Mode
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/926473
test('6-926473-Connector line tooltip not render properly.', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Drag and drop the connector line
    const src = page.locator('(//div[contains(@class, "e-connectorpoint-left ")])[2]');
    const dst = page.locator('(//div[contains(@class, "e-connectorpoint-left ")])[7]');
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
    await page.waitForTimeout(2000);
    //Screenshot validation-Connector line tooltip render properly.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/926368
test('7-926368-Parent Record in Expanded State', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'advanced-filtering?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])[1]').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[2]').click();
    await page.waitForTimeout(500);
    //Click the Taskname
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Click to Add the Taskname
    await page.locator('(//input[contains(@class,"control")])[3]').fill('P');
    await page.waitForTimeout(500);
    //Click the add Group button
    await page.locator('(//button[contains(@class,"control")])[3]').click();
    await page.waitForTimeout(500);
    //Add Group button
    await page.locator("(//li[text()='Add Group'])").click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[6]').click();
    await page.waitForTimeout(500);
    //Click the Duration
    await page.locator("(//li[text()='Duration'])").click();
    await page.waitForTimeout(500);
    //Click to Edit the Duration
    await page.locator('(//input[contains(@class,"e-control")])[3]').fill('5 days');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Parent Record in Expanded State with No Child Records When Filtering
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/927022
test('8-927022-Hover Effect Hiding Text', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=material3-dark');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=material3-dark' });
    await page.waitForTimeout(2000);
    //Hover on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[20]").hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-The text is visible when hover on the records still in dark theme
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/927028
test('9-927028-Misaligned Project Dates', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'working-time-range?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Scroll down
    await page.evaluate("document.querySelectorAll('.e-content')[1].scrollTop=100");
    await page.waitForTimeout(2000);
    //Screenshot validation-Tasks are rendered between the timeline
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/927034
test('10-927034-Selection Issue Pressing Tab Key  ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click to select the row
    await page.locator("(//td[contains(@class,'rowcell')])[14]").dblclick();
    await page.waitForTimeout(1000);
    //Press the Tab key to move to the next row
    await page.keyboard.press('Tab');
    await page.waitForTimeout(2000);
    //Screenshot validation-The selection is made proper on the next row when press the Tab key
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/926293
test('11-926293-The selected value in the view type', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.locator("(//span[contains(@class,'e-settings-icon e-icons e-btn-icon e-icon-left')])[1]").click();
    await page.waitForTimeout(800);
    //Click the View type to select resource view
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(3000);
    //Screenshot validation-Project view is maintained as the default selection
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/940552
test('12-940552-ID column in missing', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-template?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-template?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Screenshot validation-The ID has been disabled in the Gantt chart component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942578
test('13-942578-New Task Insertion', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the 1st parent record
    await page.locator('(//td[contains(@class, "rowcell")])[2]').click();
    await page.waitForTimeout(500);
    //Press the Insert key to add a new task
    await page.keyboard.press('Insert');
    await page.waitForTimeout(2000);
    //Screenshot validation- When a new task is inserted, it should be reflected both in the grid and on the chart side with a corresponding task bar.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942582
test('14-942582-Misalignment Issue in Touch Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.getByLabel('toggle settings menu').click();
    await page.waitForTimeout(500);
    //Click to switch to Touch Mode
    await page.getByRole('button', { name: 'Touch' }).click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The taskbar is aligned properly in Touch Mode
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942587
test('15-942587-Fix Console Error on Double Click', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the 1st parent record
    await page.locator('(//td[contains(@class, "rowcell")])[2]').click();
    await page.waitForTimeout(500);
    //Press the Insert button
    await page.keyboard.press('Insert');
    await page.waitForTimeout(500);
    //Double Click the 4 th record End date to cell edit it
    await page.locator('(//td[contains(@class, "rowcell")])[32]').dblclick();
    await page.waitForTimeout(1000);
    //Screenshot validation-Console error not thrown.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/946018
test('16-946018-Console Error Thrown When Bolding Text ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'working-time-range?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Double click the child taskbar
    await page.locator('(//div[contains(@class, "gantt-child")])[2]').dblclick();
    await page.waitForTimeout(500);
    //Select Notes
    await page.locator('(//div[contains(@class, "e-tab-wrap")])[5]').click();
    await page.waitForTimeout(500);
    //Enter notes
    await page.locator('(//div[contains(@class, "e-content")])[6]').click();
    await page.keyboard.type('B');
    await page.waitForTimeout(500);
    //Press Control+A
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Control+B
    await page.keyboard.press('Control+B');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-No console error is thrown
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/945773
test('17-945773-Fix Console Error When Dynamically ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'remote-data?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'remote-data?theme=fluent2' });
    await page.waitForTimeout(1000);
    //Scroll down
    await page.evaluate("document.querySelectorAll('.e-content')[1].scrollTop=100");
    await page.waitForTimeout(5000);
    //Click the input button to choose records from the dropdown
    await page.locator("(//span[contains(@class,'input')])[2]").click();
    await page.waitForTimeout(1000);
    //Press the ArrowDown key to select the record
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press the Enter key to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Console error not thrown when scroll down and change the records
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/945557
test('18-945557-Row Hover Functionality', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'selection?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'selection?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click tthe toggle to enable hover functionality
    await page.locator("(//span[contains(@class,'e-switch-handle')])[3]").click();
    await page.waitForTimeout(1000);
    //Hover on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[20]").hover({ force: true });
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Hover on the chart side
    await page.locator("(//div[contains(@class,'e-taskbar')])[2]").hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-Console error not thrown when scroll down and change the records
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/945101
test('19-945101-Filter the ID Field to be Greater than ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'advanced-filtering?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select ID
    await page.locator("(//li[text()='ID'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Greater than
    await page.locator("(//li[text()='Greater Than'])").click();
    await page.waitForTimeout(500);
    //Click to enter start date
    await page.locator('(//input[contains(@class,"e-control")])[3]').fill('6');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Filtered ID greater than record should be visible on Grid and chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/945052
test('20-945052-Alignment Issue When Editing Collapsed ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'resource-allocation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'resource-allocation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the collapse all button
    await page.locator('(//span[contains(@class,"collapse")])[1]').click();
    await page.waitForTimeout(500);
    //Double click the last child record on the grid
    await page.locator('(//td[contains(@class,"e-rowcell")])[18]').dblclick();
    await page.waitForTimeout(2000);
    //Screenshot validation-There is no alignnment issue
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/944923
test('21-944923-Holiday issue ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'holidays?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'holidays?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Screenshot validation-Holiday is visible on the chart side of the component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/944923
test('22-944923-selection issue ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'selection?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'selection?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the 1st parent record
    await page.locator('(//td[contains(@class, "rowcell")])[2]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The selection is made properly on the grid side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/944800
test('23-944800-Flickering Occurs When Resizing', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'frozen-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'frozen-column?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the resizer to move the records
    await page.mouse.move(1701, 409, { steps: 10 });
    await page.mouse.down();
    await page.mouse.move(1511, 398, { steps: 10 });
    await page.mouse.up();
    await page.waitForTimeout(2000);
    //Screenshot validation-Flickering does not  Occurs When Resizing the 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/945082
test('24-945082-Cell Outer Border Not Focused', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'selection?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'selection?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Select Mode to select Cell
    await page.locator('(//span[contains(@class,"input")])[2]').click();
    await page.waitForTimeout(500);
    //Press ArrowDown key to select the record
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press the Enter key to select Cell mode
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Press Tab key to move Type to select
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Press the ArrowDown key to select the record
    await page.keyboard.press('ArrowDown');
    //Select the cells to select multiple records
    await page.locator("(//td[contains(@class,'rowcell')])[2]").click({ modifiers: ['Control'] }); // Select first parent record
    await page.locator("(//td[contains(@class,'rowcell')])[9]").click({ modifiers: ['Control'] }); // Select second child record taskname
    await page.locator("(//td[contains(@class,'rowcell')])[16]").click({ modifiers: ['Control'] }); // Select third record taskname
    await page.waitForTimeout(2000);
    //Screenshot validation-The cell outer border is still focused after prform multiple selection
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/940358
test('25-940358-Resource unit saved', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'resource-view?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'resource-view?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click record on the grid side
    await page.locator('(//td[contains(@class,"e-rowcell")])[8]').click();
    await page.waitForTimeout(500);
    //Click the Edit buton
    await page.locator('(//span[contains(@class,"e-edit")])[1]').click();
    await page.waitForTimeout(500);
    //Navigate to Resources Tab
    await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click();
    await page.waitForTimeout(500);
    //Press Tab key to move Type to select
    await page.locator('(//td[contains(@class,"e-rowcell")])[178]').dblclick();
    await page.waitForTimeout(1000);
    //Press the ArrowDown key to select the record
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Click the to select the resources Tab
    await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
    await page.waitForTimeout(500);
    //Navigate to Resources Tab
    await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The resource unit is saved properly
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/929311
test('26-929311-Misaligned column', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'context-menu?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'context-menu?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Double click the child taskbar
    await page.locator('(//div[contains(@class,"e-gantt-child")])[1]').dblclick();
    await page.waitForTimeout(2500);
    //Screnshot validation-The sub context menu is not misaligned in Fluent 2 theme
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/927531
test('27-927531-Console error thrown', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'context-menu?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'context-menu?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Right click 2 nd child record on the chart side of the component
    await page.locator('(//div[contains(@class,"e-gantt-child")])[3]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Hover over Convert
    await page.locator('(//li[contains(@aria-label,"Convert")])').hover({ force: true });
    await page.waitForTimeout(500);
    //Click to convert to milestone
    await page.locator('(//li[contains(@aria-label,"To Milestone")])').click();
    await page.waitForTimeout(500);
    //Right click  milestone record on the chart side of the component
    await page.locator('(//div[contains(@class,"e-gantt-child")])[3]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Hover over the Add button
    await page.locator('(//li[contains(@aria-label,"Add")])[1]').hover({ force: true });
    await page.waitForTimeout(500);
    //Click Child record
    await page.locator("(//li[text()='Child'])").click();
    await page.waitForTimeout(500);
    //Click the 1 st milestone to delete
    await page.locator("(//div[contains(@class,'milestone')])[1]").click();
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator("(//span[text()='Delete'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Ok
    await page.locator("(//button[text()='OK'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Console error is not thrown.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949047
test('28-949047-Fix Lag Value Update for Child Task Predecessors', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the 8 th Task
    await page.locator('(//td[contains(@class,"e-rowcell")])[56]').dblclick();
    await page.waitForTimeout(1000);
    //select Control+A
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(1000);
    //Select Backspace
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);
    //Tpe the predecessor
    await page.keyboard.type('3FF');
    await page.waitForTimeout(500);
    //Press the Enter button to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-lag value is  reflected in the displayed dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949041
test('29-949041-Fix Gantt Chart Parent Taskbar Update', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Try a different approach to resize the splitter
    const splitter = page.locator("//div[contains(@class, 'e-resize-handler e-icons')]");
    await splitter.waitFor({ state: 'visible', timeout: 1000 });

    await splitter.click({ force: true });
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(425, 460);
    await page.mouse.up();
    await page.waitForTimeout(2000);

    // Continue with connector drawing
    // Get source and destination connector points
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])").first();
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])").nth(4);
    // Verify if connector points are visible
    await src.waitFor({ state: 'visible', timeout: 1000 });
    await dst.waitFor({ state: 'visible', timeout: 1000 });
    const src_bound = await src.boundingBox();
    const dst_bound = await dst.boundingBox();
    if (src_bound && dst_bound) {
        // Move to source position and start dragging
        await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2, { steps: 30 });
        await page.waitForTimeout(300);
        await page.mouse.down();
        await page.waitForTimeout(300);
        // Carefully move to destination in steps
        await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
        await page.waitForTimeout(300);
        await page.mouse.up();
        // Wait for the connector line to appear and render
        await page.waitForTimeout(2000);
    }
    expect(await page.locator('.e-row').nth(4).locator('.e-rowcell').nth(6).textContent()).toContain('1FF');
    // Final wait for UI stabilization
    await page.waitForTimeout(1500);
    //Screenshot validation-Parent taskbar is updated properly when drag and drop the connector line the dependency for FF 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/935640

test('30-935640-Misaligned column', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'exporting?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'exporting?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click Zoom to Fit button
    await page.locator('(//span[contains(@class,"zoomtofit")])[1]').click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDF-935640/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await test.info().attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-Weekend Highlights Misaligned 
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});
//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949079
test('31-949079-Console Error with Large Lag Value in Offset Field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    //await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
    await page.goto('https://sfblazor.azurewebsites.net/hotfix/net10/demos/gantt-chart/editing?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Doble click the taskbar
    await page.locator('(//div[contains(@class,"e-gantt-child")])[2]').dblclick();
    await page.waitForTimeout(1000);
    //Select dependency tab
    await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator('(//span[contains(@class,"add")])[2]').click();
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    await page.keyboard.type("999999 Days");
    await page.waitForTimeout(1000);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-lag value is reflected in the displayed dependency.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/963527
test('32-963527-Misaligned Text', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click collapse all 
    await page.locator('(//span[contains(@class,"collapseall")])[1]').click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_SB/PdfExportFiles/PDF-963527/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await test.info().attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-Text is not misaligned in the PDF export
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/963742
test('33-963742-Split Taskbars Not Rendered', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'education-scheduler?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Switch to Touch Mode
    await page.locator('(//div[contains(@class,"sf-preferences-button")])[1]').click();
    await page.waitForTimeout(500);
    // Click the Touch button
    await page.getByRole('button', { name: 'Touch' }).click();
    await page.waitForTimeout(500);
    //Click the settings
    await page.locator('(//div[contains(@class,"sf-preferences-button")])[1]').click();
    await page.waitForTimeout(500);
    //Click the localization dropdown
    await page.mouse.click(1443, 223);
    await page.waitForTimeout(1000);
    //Select Locale French - Switzerland
    await page.mouse.click(1446, 335);
    await page.waitForTimeout(2000);
    // Screenshot validation -The taskbars are rendered properly in the Gantt chart
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/964314
test('34-964314-Fix Currency Formatting', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2500);
    // Switch to Touch Mode
    await page.getByLabel('toggle settings menu').click();
    await page.waitForTimeout(2000);
    //Click the localization dropdown
    await page.locator('.sf-preferences-item > div:nth-child(2) > .sf-dropdown-container > .sf-dropdown-input-container > .sb-icons').click();
    await page.waitForTimeout(3000);
    //Select Locale French - Switzerland
    await page.locator("(//span[text()='French - Switzerland*'])[1]").click();
    await page.waitForTimeout(3500);
    // Screenshot validation -The taskbars are rendered properly in the Gantt chart
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/963062
test('35-963062-Console Error on Dialog Close in Notes', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'context-menu?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'context-menu?theme=fluent2' });
    await page.waitForTimeout(1000);
    //Double click taskbar
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').dblclick();
    await page.waitForTimeout(1000);
    //Navigate to notes tab
    await page.locator("(//div[contains(@class,'e-tab-text')])[5]").click();
    await page.waitForTimeout(500);
    //Click the selection to write notes
    await page.locator("(//div[contains(@class,'e-content')])[6]").click();
    await page.waitForTimeout(500);
    //Select the notes
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Click the  button
    await page.locator("(//span[contains(@class,'e-icon-dlg-close e-icons e-btn-icon')])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
    await page.waitForTimeout(500);
    //Screenshot validation-Console error is not thrown when enter text under notes
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/945077
test('36-963062-Right Frozen Column and Left Frozen ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'frozen-column?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'frozen-column?theme=fluent2' });
    await page.waitForTimeout(1000);
    //Click the Left Frozen column to select the start date
    await page.locator('(//span[contains(@class,"e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(500);
    //Press Arrow Down on the keyboard
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press the Enter Button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Click the right Frozen column to select the dependency
    await page.locator('(//span[contains(@class,"e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(500);
    //Press Arrow Down on the keyboard
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press the Enter Button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Right Frozen Column and Left Frozen Column are working properly
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/965752
test('37-965752-Fix Connector Point Visibility', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
    test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=bootstrap5' });
    await page.waitForTimeout(1000);
    //Hover over the connector point 
    await page.locator('(//div[contains(@class,"e-right-connectorpoint")])[2]').hover({ force: true });
    await page.waitForTimeout(1000);
    //Screenshot validation-The connector point is visible when hovered on the taskbar
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/965670
test('38-965670-Filtering action is not cleared', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select ID
    await page.locator("(//li[text()='ID'])[1]").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Equal 
    await page.locator("(//li[text()='Equal'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('1');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/962568
test('39-962568-Responsive Width Issue in Advanced Filter Sidebar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('#Advanced_Filters').click();
    //Screenshot validation-Responsive Width Issue in Advanced Filter Sidebar
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/962564
test('40-962564-Close icon not visible in Advanced Filtering', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=bootstrap5-dark');
    await page.waitForTimeout(2000);
    //Click the filter icon
    await page.locator("(//span[text()='Advanced Filters'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The filter icon is not visible 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/963128
test('41-963128-Select the CustomScheduling', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent');
    await page.waitForTimeout(1000);
    //Click the settings
    await page.locator('(//div[contains(@id,"Settings")])[1]').click();
    await page.waitForTimeout(500);
    //Select Custom scheduling
    await page.locator('(//span[contains(@class,"handle")])[6]').click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The custom scheduling recordsn are visible on the chart side of the component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/963501
test('42-963501-Calendar Not Visible', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'human-resource-management?theme=fluent2');
    await page.waitForTimeout(1000);
    //Click the dropdown to show the calendar
    await page.locator('(//span[contains(@class,"e-icon-down-arrow e-icons e-btn-icon e-icon-right")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The calender is visible on the chart side of the component
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/957190
test('43-957190-Fix Holiday Label Overlap', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent');

    // Wait for the Gantt chart to ensure DOM is loaded
    await page.waitForSelector('.e-gantt-chart', { state: 'visible', timeout: 10000 });

    // Validate the second .e-content element exists
    const contentLocator = page.locator('.e-content').nth(1);
    const elementCount = await page.locator('.e-content').count();
    if (elementCount < 2) {
        throw new Error(`Expected at least 2 .e-content elements, found ${elementCount}`);
    }

    // Scroll down the Gantt chart by 200 pixels
    await contentLocator.evaluate((element) => {
        element.scrollTop = 200;
    });

    // Wait for rendering after scroll
    await page.waitForTimeout(2000);

    // Screenshot validation - The holiday label should not overlap with the taskbar
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/966228
test('44-966228-Resize Cursor Not Displayed', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    //Hover over the taskbar
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[2]').hover({ force: true });
    await page.waitForTimeout(1000);
    //move the mouse to the right side of the taskbar
    await page.mouse.click(1700, 400);
    await page.waitForTimeout(500);
    //move the mouse to the right side of the taskbar
    await page.mouse.move(1700, 400, { steps: 10 });
    await page.mouse.down();
    //Hover over the taskbar
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[8]').hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-The resize cursor is displayed when hovering over the taskbar
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/965961
test('45-965961-Context Menu Issues in Split Task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class,"e-gantt-child")])[2]').click({
        button: 'right'
    });
    await page.waitForTimeout(300);
    //Screenshot validation-Context menu is not misaligned in the Split Task
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/965961
test('46-965961-Context Menu Issues in Split Task', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'split-tasks?theme=fluent');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class,"e-gantt-parent")])[1]').click({
        button: 'right'
    });
    await page.waitForTimeout(200);
    //Screenshot validation-Split task does not appear at the very begining of the taskbar
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/965750
test('47-965750-Selection Mode Doesnt Switch to Cell', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'selection?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the Selection Mode dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(500);
    //Press arrow Down key to select Cell
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press the Enter key to select Cell mode
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.down("Control");
    await page.waitForTimeout(500);
    //Select 1st task name 
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(500);
    //Select the 2 nd task name
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(500);
    //Select the 3rd task name
    await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.up("Control");
    await page.waitForTimeout(2000);
    //Click to select the type 
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(500);
    //Press arrow Down key to select Cell
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press the Enter key to select Cell mode
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Click the cell to select the record
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Selectiion is made
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/960684
test('48-960684-Right click the column header', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'context-menu?theme=fluent');
    await page.waitForTimeout(1000);
    //Right click the column header
    await page.locator('(//th[contains(@class,"e-headercell")])[2]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Screenshot validation-The columns header the context menu is displayed
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/961425
test('49-961425-Show Critical Path and Zoom Fit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(500);
    //Select to show Critical path
    await page.locator('(//span[contains(@class,"handle")])[5]').click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Critical path is shown properly 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/963242
test('50-963242-Calendar Not Visible', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'human-resource-management?theme=material3');
    await page.waitForTimeout(2000);
    //Click the dropdown to show the calendar
    await page.locator('(//span[contains(@class,"e-icon-down-arrow e-icons e-btn-icon e-icon-right")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The calender is visible on the chart side of the component in material 3 theme
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/960420
test('51-BUG-960420-Advanced Filters Panel Remained Open', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=bootstrap5');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//button[contains(@class,"e-control e-btn e-lib")])[3]').click();
    await page.waitForTimeout(500);
    //Click the Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The advanced filter panel is closed properly
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/929536
test('52-929536-Toggle button visibility ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the settings button
    await page.locator('(//span[contains(@class,"e-settings-icon e-icons e-btn-icon e-icon-left")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are indicated on the dialog
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});