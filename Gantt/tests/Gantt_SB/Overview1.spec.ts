import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
import { pdf } from 'pdf-to-img';

test.use({
    launchOptions: {
        ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
});
//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/924664
test('1-924664-Chart side blur ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=tailwind3');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=tailwind3' });
    await page.waitForTimeout(2000);
    //Click to select the row
    await page.locator("(//td[contains(@class,'rowcell')])[8]").click();
    await page.waitForTimeout(500);
    //Hovver on the chart side
    await page.locator("(//tr[contains(@class,'e-chart-row')])[2]").hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-The chart side is blurred proper in tailwind theme
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/913059
test('2-913059-Hover and selection color are not same', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=tailwind3');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=tailwind3' });
    await page.waitForTimeout(2000);
    //Click to select the row
    await page.locator("(//td[contains(@class,'rowcell')])[8]").click();
    await page.waitForTimeout(500);
    //Hovver on the chart side
    await page.locator("(//tr[contains(@class,'e-chart-row')])[2]").hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-The chart side is blurred proper in tailwind theme
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/927022
test('3-927022-Hover Effect Hiding Text in Grid Side', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=material3');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=material3' });
    await page.waitForTimeout(2000);
    //Hover on the grid side
    await page.locator("(//td[contains(@class,'e-rowcell')])[20]").hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-The grid side records can be viewed properly
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/926630
test('4-926630-predecessor misalignment issue occurs', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.locator('(//div[contains(@id,"Settings")])[1]').click();
    await page.waitForTimeout(500);
    //Click to change the Work week
    await page.locator('(//input[contains(@class,"multiselect")])[1]').click();
    await page.waitForTimeout(500);
    //Select work week Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The predecessor aligns properly and the taskbar is displayed properly
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/926675
test('5-926675-Text for Status not visible ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=tailwind3');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=tailwind3' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.getByLabel('toggle settings menu').click();
    await page.waitForTimeout(1000);
    //Click to switch to Touch Mode
    await page.getByRole('button', { name: 'Touch' }).click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Taskbar resizers are visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941723
test('6-941723-Fix PDF Export Handling', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_SB/Overview1/PDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-The PDF Image for the record has been updated.
        expect(page).toMatchSnapshot('ExportPdf12.png', { maxDiffPixels: 100 });
    }
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942588
test('7-942588-Issue with Task Visibility', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the Related Task 27 FS 
    await page.locator("(//div[text()='27FS'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Viibility of the related task is proper.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942594
// test('8-942594-Localization issue', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrl + 'overview?theme=tailwind3');
//     test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=tailwind3' });
//     await page.waitForTimeout(3000);
//     //Click the settings
//     await page.getByRole('button', { name: 'toggle settings menu' }).click();
//     await page.waitForTimeout(1000);
//     //Click to switch Localization
//     await page.getByRole('textbox', { name: 'Culture Switcher' }).nth(2).click();
//     await page.waitForTimeout(500);
//     //Select Locale German-Germany
//     await page.locator("(//span[text()='German - Germany*'])[1]").click();
//     await page.waitForTimeout(3000);
//     //Screenshot validation-The locale is changed to German-Germany and has no issues
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942839
test('9-942839- Row Selection Mismatch', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=highcontrast');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=highcontrast' });
    await page.waitForTimeout(2000);
    // Select a row 
    await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
    await page.waitForTimeout(2000);
    // Move mouse to a neutral position (top-left corner of the viewport)
    await page.mouse.move(0, 0);
    // Wait for any animations to complete
    await page.waitForLoadState('networkidle');
    // Screenshot validation - The selection on the row is visible both grid and chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942840
test('10-942840-Fix Column Header Text Visibility', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Switch to Touch Mode
    await page.getByLabel('toggle settings menu').click();
    await page.waitForTimeout(500);
    // Click the Touch button
    await page.getByRole('button', { name: 'Touch' }).click();
    await page.waitForTimeout(1000);
    // Hover and screenshot
    await page.locator("(//th[contains(@class,'e-headercell')])[3]").hover({ force: true });
    await page.waitForTimeout(2000);
    // Screenshot validation - The column header should be visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942841
test('11-942841-Fix Console Error Exporting PDF', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the icon to collapse all records
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(2000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_SB/Overview1/PDF13/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-The PDF Image for the record has been updated.
        expect(page).toMatchSnapshot('ExportPdf13.png', { maxDiffPixels: 100 });
    }
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942859
test('12-942859-Missing Vertical Scrollbar in Settings', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.locator('(//div[contains(@id,"Settings")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The setings Duration Unit, Timeline Width, and View Type are visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/944679
test('13-944679-Fix PDF Export Issue', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_SB/Overview1/PDF14/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-TNo console error is displayed while exporting the PDF
        expect(page).toMatchSnapshot('ExportPdf14.png', { maxDiffPixels: 100 });
    }
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/945739
test('14-945739-Fix Console Error in Filter Dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(1200);
    //Click the collapse icon to collapse all records
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(2000);
    //Select the column header spent budget filter icon
    await page.locator('(//div[contains(@class,"e-filtermenudiv")])[8]').click();
    await page.waitForTimeout(500);
    //Press the Tab key to move to the next record
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Press to type the record
    await page.keyboard.type('11');
    await page.waitForTimeout(1000);
    //Press Tab key to move to the next record
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    // Screenshot validation - The console error is not thrown 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/944922
test('15-944922-Chart Side Image Issue', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the collapse icon to collapse all records
    await page.locator('(//span[contains(@class,"e-zoomtofit")])[1]').click();
    await page.waitForTimeout(2000);
    // Screenshot validation - The console error is not thrown 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Overview initial load', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(5000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Change default view to grid view', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click on the settings icon
    await page.locator('(//span[contains(@class, "e-settings-icon e-icons e-btn-icon e-icon-left")])[1]').click();
    await page.waitForTimeout(1000);
    // Click on the dropdown to change the view to grid
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[3]').click();
    await page.waitForTimeout(500);
    // Navigate through the dropdown options
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(300);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(200);
    // Click on the first cell in the grid
    await page.locator('(//td[contains(@class,"e-rowcell ")])[2]').click();
    await page.waitForTimeout(2000);
    // Screenshot validation - The view should be changed to grid view
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Change grid view to chart view', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click on the settings icon
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(1000);
    // Click on the dropdown to change the view to chart
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[3]').click();
    await page.waitForTimeout(500);
    // Press the ArrowDown key on the keyboard
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(300);
    // Press the ArrowDown key again
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(300);
    // Press the Enter key to confirm the selection
    await page.keyboard.press("Enter");
    await page.waitForTimeout(500);
    //Click the close button
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    // Screenshot validation - The view should be changed to chart view
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Navigate to chart side through tab key', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the record on the chart side 
    await page.locator('(//td[contains(@class,"e-rowcell ")])[18]').click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(2000);
    //Screenshot validation-The record is navigated to the chart side using Tab key
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Expand all the records', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Collapse all
    await page.locator('#GanttOverview_collapseall').click();
    await page.waitForTimeout(500);
    //Expand all
    await page.locator('#GanttOverview_expandall').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are in expanded state
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Contextmenu removed in overview sample
// test('21-Autofit all columns', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//     test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
//     await page.waitForTimeout(2000);
//     //Click to select the header
//     await page.locator("(//th[contains(@class,'headercell')])[2]").click();
//     await page.waitForTimeout(500);
//     //Right click the Taskname to show context menu to Auto fit all 
//     await page.locator("(//th[contains(@class,'headercell')])[2]").click({
//         button: 'right'
//     });
//     await page.waitForTimeout(1000);
//     //Select AutoFit all columns
//     await page.locator('#GanttOverview_cmenu_AutoFitAll').click();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-All the columns are in Autofit state
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('22-Autofit this columns', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//     test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
//     await page.waitForTimeout(2000);
//     //Click to select the header
//     await page.locator("(//th[contains(@class,'headercell')])[2]").click();
//     await page.waitForTimeout(500);
//     //Right click the Taskname to show context menu to Auto fit all 
//     await page.locator("(//th[contains(@class,'headercell')])[2]").click({
//         button: 'right'
//     });
//     await page.waitForTimeout(1000);
//     // Click Autofit all columns
//     await page.locator('#GanttOverview_cmenu_AutoFit').click();
//     await page.waitForTimeout(2000);
//     // Screenshot validation - The columns should be autofitted
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('23-Sort ascending of the column', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//     test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
//     await page.waitForTimeout(2000);
//     //Click to select the header to sort it in ascending
//     await page.locator("(//th[contains(@class,'headercell')])[2]").click();
//     await page.waitForTimeout(2000);
//     // Screenshot validation - The column should be sorted in ascending order
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('24-Sort descending of the column', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//     test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
//     await page.waitForTimeout(2000);
//     //Click to select the header
//     await page.locator("(//th[contains(@class,'headercell')])[2]").click();
//     await page.waitForTimeout(500);
//     //Right click the Taskname to show context menu to Auto fit all 
//     await page.locator("(//th[contains(@class,'headercell')])[2]").click({
//         button: 'right'
//     });
//     await page.waitForTimeout(1000);
//     // Descend the column
//     await page.locator('#GanttOverview_cmenu_SortDescending').click();
//     await page.waitForTimeout(2000);
//     // Screenshot validation - The column should be sorted in descending order
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('25-Filtering with starts with operator', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the Filter icon for Taskname
    await page.locator('(//div[contains(@class, "e-filtermenudiv")])[2]').click();
    await page.waitForTimeout(1000);
    //Enter the record to be filtered 
    await page.locator('(//input[contains(@class, "e-control e-autocomplete e-lib e-input")])[1]').fill('Design Phase');
    //Click to Filter button
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records filtered starts with design
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Show the Grid lines', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the settings
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(500);
    // Click to show the Grid lines
    await page.locator('(//span[contains(@class,"switch")])[4]').click();
    await page.waitForTimeout(500);
    // Click to Close the settings
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    // Screenshot validation - The grid lines should be shown
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Show Critical Path and Zoom Fit', async ({ page }) => {
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
    await page.waitForTimeout(500);
    //Zoom Fit
    await page.locator('(//span[contains(@class,"zoomtofit")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Event markers are indiated and 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Change the Work Week Remove the Taskbar labels', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(200);
    //Click to change the Work week
    await page.locator('(//input[contains(@class,"multiselect")])[1]').click();
    await page.waitForTimeout(1000);
    //Select the day
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //To select the work week day
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //To remove the selection
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click to remove taskbar labels
    await page.locator('(//span[contains(@class,"switch")])[16]').click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Taskbar labels not visible on chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Change the Duration to Minutes', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2500);
    //Click the settings
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(500);
    //Click to change Duration
    await page.locator('(//span[contains(@class,"input")])[2]').click();
    await page.waitForTimeout(500);
    //Select the Minutes
    await page.locator("(//li[text()='Minute'])[1]").click();
    await page.waitForTimeout(500);
    //Click to disable the dependency 
    await page.locator('(//span[contains(@class,"switch")])[12]').click();
    await page.waitForTimeout(500);
    //Change view mode to chart
    await page.locator('(//span[contains(@class,"input")])[9]').click();
    await page.waitForTimeout(500);
    //Change chart
    await page.locator("(//li[text()='Chart'])[1]").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(500);
    //Select first record
    await page.locator('(//div[contains(@class,"e-left-label-container")])[1]').hover();
    await page.waitForTimeout(2000);
    //Screenshot validation-dpendencies not indicated 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Change the Timeline width', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(200);
    //Click to change Timeline width
    await page.locator('(//span[contains(@class,"e-spin-up")])[1]').click();
    await page.waitForTimeout(200);
    //Select to show Grid Lines
    await page.locator('(//span[contains(@class,"switch")])[4]').click();
    await page.waitForTimeout(200);
    //Click to show Event Makers 
    await page.locator('(//span[contains(@class,"switch")])[8]').click();
    await page.waitForTimeout(200);
    //Click to show Task Labels
    await page.locator('(//span[contains(@class,"switch")])[16]').click();
    await page.waitForTimeout(200);
    //Change view mode to chart
    await page.locator('(//span[contains(@class,"input")])[8]').click();
    await page.waitForTimeout(200);
    //Change chart
    await page.locator("(//li[text()='Chart'])[1]").click();
    await page.waitForTimeout(200);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Timeline width is updated and grid line indicated
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Increase the Row Height after Zoom Fit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Zoom Fit
    await page.locator('(//span[contains(@class,"zoomtofit")])[1]').click();
    await page.waitForTimeout(500);
    //Click the settings
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(1000);
    //Move the Rowheight to 60
    await page.locator('(//div[contains(@class, "e-handle e-handle-first")])').click();
    await page.waitForTimeout(500);
    await page.mouse.down();
    await page.mouse.move(1625, 393);
    await page.mouse.move(1804, 393);
    await page.mouse.up();
    await page.waitForTimeout(800);
    // Click on the dropdown to change the view to chart
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[3]').click();
    await page.waitForTimeout(500);
    // Press the ArrowDown key on the keyboard
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(300);
    // Press the ArrowDown key again
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(300);
    // Press the Enter key to confirm the selection
    await page.keyboard.press("Enter");
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Row height should be increased after Zoom Fit
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Zoom Out and change view to chart side.', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(1000);
    //Change view mode to chart
    await page.locator('(//span[contains(@class,"input")])[8]').click();
    await page.waitForTimeout(200);
    //Change chart
    await page.locator("(//li[text()='Chart'])[1]").click();
    await page.waitForTimeout(200);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(500);
    //Zoom Out
    await page.locator('(//span[contains(@class,"zoomout")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records zoomed out and view changed to chart mode.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Zoom In and change view to chart side.', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(800);
    //Change view mode to chart
    await page.locator('(//span[contains(@class,"input")])[8]').click();
    await page.waitForTimeout(500);
    //Change chart
    await page.locator("(//li[text()='Chart'])[1]").click();
    await page.waitForTimeout(200);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(200);
    //Zoom In
    await page.locator('(//span[contains(@class,"zoomin")])[1]').click();
    await page.waitForTimeout(2000);
    //Records are zoomed In and mode switched to chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Timeline Width and Change of the Duration', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(200);
    //Change view mode to chart
    await page.locator('(//span[contains(@class,"input")])[8]').click();
    await page.waitForTimeout(500);
    //Change chart
    await page.locator("(//li[text()='Chart'])[1]").click();
    await page.waitForTimeout(600);
    //Zoom In
    await page.locator('(//span[contains(@class,"zoomin")])[1]').click();
    await page.waitForTimeout(500);
    //Click to Edit the Timeline Width
    await page.locator('(//input[contains(@class,"e-control e-numerictextbox e-lib e-input")])[1]').fill('50');
    await page.waitForTimeout(500);
    //Duration to Edit
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Enter the Duration
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Duration changed to day , records changed to chart side and records zoomed in
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Change the View type to Resource view', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(200);
    //Click the View type to select resource view
    await page.locator('(//span[contains(@class,"input")])[7]').click();
    await page.waitForTimeout(500);
    //Select Resource view
    await page.locator("(//li[text()='Resource view'])").click();
    await page.waitForTimeout(500);
    //Zoom In
    await page.locator('(//span[contains(@class,"zoomin")])').click();
    await page.waitForTimeout(200);
    //Show Grid lines
    await page.locator('(//span[contains(@class,"switch-handle")])[1]').click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-view should be changed to Resource view and chart side taskbars zoomed in and Grid lines shown.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Select the Grid Lines,Event Makers', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(200);
    //Select to show Grid Lines
    await page.locator('(//span[contains(@class,"handle")])[1]').click();
    await page.waitForTimeout(200);
    //Click to show Event Makers 
    await page.locator('(//span[contains(@class,"handle")])[2]').click();
    await page.waitForTimeout(200);
    //Click to show Task Labels
    await page.locator('(//span[contains(@class,"handle")])[4]').click();
    await page.waitForTimeout(200);
    //Click to change the Work week
    await page.locator('(//div[contains(@class,"multiselect")])[1]').click();
    await page.waitForTimeout(200);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(200);
    //Press Enter
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Grid Lines,Event Markers,Show Task Labels and Work Week updated.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Collapse the Records, switch to Resource view ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);;
    //Click the settings
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(200);
    //Click the View type to select resource view
    await page.locator('(//span[contains(@class,"input")])[7]').click();
    await page.waitForTimeout(800);
    //Select Resource view
    await page.locator("(//li[text()='Resource view'])[1]").click();
    await page.waitForTimeout(800);
    //Change view mode to Grid
    await page.locator('(//span[contains(@class,"input")])[8]').click();
    await page.waitForTimeout(200);
    //Change Grid
    await page.locator("(//li[text()='Grid'])[1]").click();
    await page.waitForTimeout(200);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(200);
    //Collapse all
    await page.locator('(//span[contains(@class,"collapseall")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are collapsed all after change to grid mode 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Resource view Zoom Fit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(200);
    //Click the View type to select resource view
    await page.locator('(//span[contains(@class,"input")])[7]').click();
    await page.waitForTimeout(500);
    //Select Resource view
    await page.locator("(//li[text()='Resource view'])[1]").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(500);
    //Zoom Fit
    await page.locator('(//span[contains(@class,"zoomtofit")])[1]').click();
    await page.waitForTimeout(500);
    //Collapse all
    await page.locator('(//span[contains(@class,"collapseall")])[1]').click();
    await page.waitForTimeout(500);
    //Expand all
    await page.locator('(//span[contains(@class,"expandall")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records zoom to fit and expanded after changed to resource view
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Change to Resource view and Zoom Fit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(200);
    //Click the View type to select resource view
    await page.locator('(//span[contains(@class,"input")])[7]').click();
    await page.waitForTimeout(800);
    //Select Resource view
    await page.locator("(//li[text()='Resource view'])[1]").click();
    await page.waitForTimeout(800);
    //Select to show Grid Lines
    await page.locator('(//span[contains(@class,"handle")])[1]').click();
    await page.waitForTimeout(200);
    //Click to show Event Makers 
    await page.locator('(//span[contains(@class,"handle")])[2]').click();
    await page.waitForTimeout(200);
    //Click to show Task Labels
    await page.locator('(//span[contains(@class,"handle")])[4]').click();
    await page.waitForTimeout(200);
    //Dependency uncheck
    await page.locator('(//span[contains(@class,"handle")])[3]').click();
    await page.waitForTimeout(200);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(500);
    //Zoom Fit
    await page.locator('(//span[contains(@class,"zoomtofit")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Dependency records unchecked, task labels shown , Event Markers, Grid Lines, Resource view 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/962774
test('40-962774-Column Header Text Misalignment', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //select the settings button
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(500);
    //Clicck the 65 
    await page.mouse.click(1798, 392);
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_SB/PdfExportFiles15/962774/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-TNo console error is displayed while exporting the PDF
        expect(page).toMatchSnapshot('ExportPdf15.png', { maxDiffPixels: 100 });
    }
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/998317
test('41-998317', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=highcontrast');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=highcontrast' });
    await page.waitForTimeout(5000);
    //Hover over 
    await page.locator('(//span[contains(@class, "e-zoomtofit e-icons e-btn-icon e-icon-left")])[1]').hover();
    await page.waitForTimeout(2000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/986142
test('42-986142', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //select the settings button
    await page.locator('(//span[contains(@class, "settings")])[3]').click();
    await page.waitForTimeout(500);
    // Click the slider track to focus it, then use ArrowRight to move from 45 → 65 (4 steps of 5)
    const sliderTrack = page.locator('(//div[contains(@class,"e-slider-track")])[1]');
    await sliderTrack.waitFor({ state: 'visible' });
    await sliderTrack.click();
    await page.waitForTimeout(300);
    // Press ArrowRight 4 times: 45 -> 50 -> 55 -> 60 -> 65
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(100);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(100);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(100);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(2000);
    //Screenshot validation-Row height slider moved to 65, no alignment issue on right-side labels relative to taskbars
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/980198
test('43-980198', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.locator('(//div[contains(@id,"Settings")])[1]').click();
    await page.waitForTimeout(500);
    //Click to change the Work week
    await page.locator('(//div[contains(@class,"multiselect")])[1]').click();
    await page.waitForTimeout(500);
    //Select work week Monday
    await page.locator("(//li[text()='Monday'])[1]").click();
    await page.waitForTimeout(500);
    //Select work week Tuesday
    await page.locator("(//li[text()='Tuesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select work week Wednesday
    await page.locator("(//li[text()='Wednesday'])[1]").click();
    await page.waitForTimeout(500);
    //Select work week Thursday
    await page.locator("(//li[text()='Thursday'])[1]").click();
    await page.waitForTimeout(500);
    //Select work week Friday
    await page.locator("(//li[text()='Friday'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Console error does not occur after deselect all the work weeks
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
