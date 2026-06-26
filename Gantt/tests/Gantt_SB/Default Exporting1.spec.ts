import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
import { pdf } from 'pdf-to-img';

test.use({
    launchOptions: {
        ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
});

test('1-Default Exporting initial load', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'exporting?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'exporting?theme=fluent2' });
    await page.waitForTimeout(5000);
    //Screenshot validation-On initial load the records are all updated.
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//PDF Exporting
test('2-PDF Export', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'exporting?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'exporting?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[6]').click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_SB/Default Exporting1/PDFExport/PDF/" + download.suggestedFilename();
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
        //Screenshot validation-The PDF Image the records on chart side are in ZoomFit state
        expect(page).toMatchSnapshot('PDFExport.png', { maxDiffPixels: 100 });
    }
});

test('3-ExcelFileUpload', async ({ page, context }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'exporting?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'exporting?theme=fluent2' });
    await page.waitForTimeout(4000);
    //  Press the button to download the Excel files 
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        await page.locator("(//span[text()='Excel export'])[1]").click()
    ]);
    await page.waitForTimeout(500);
    // Define where the downloaded excel file will go and get saved 
    const path = "./tests/Gantt_SB/Default Exporting1/ExcelExport/ActualExport/Excel1/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report 
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(500);
    // Define the Expected Export File's Path which I want to upload 
    const ExpectedExportFile = "./tests/Gantt_SB/Default Exporting1/ExcelExport/ExpectedExport/Excel1/Export1.xlsx";
    await page.waitForTimeout(500);
    //Now navigate to spreadsheet component 
    await page.goto("https://document.syncfusion.com/demos/spreadsheet-editor/javascript-es5/#/tailwind3/spreadsheet/default.html");
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(2000);
    //Click on File 
    await page.locator("(//li[contains(@aria-label, 'File')])[1]").click();
    await page.waitForTimeout(2000);
    //Listen for the File Chooser dialog Event 
    page.on("filechooser", async (fileChooser) => {
        ////using .setFiles() to upload the desired files - Here, [ExpectedExportFile] is the const where I have designated the path of the Export File I want to upload 
        await fileChooser.setFiles([ExpectedExportFile])
    });
    //Now click the Open option which will open the file chooser dialog and wait for the upload to be done 
    await page.locator("(//li[contains(@aria-label, 'Open')])[1]").click({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-Excel file is uploaded and the records are all updated.
    expect(await page.locator("(//div[contains(@class,'e-sheet')])[1]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-CVSExportFile', async ({ page, context }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'exporting?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'exporting?theme=fluent2' });
    //  Press the button to download the CSV Excel files 
     await page.waitForTimeout(2000);
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        await page.locator("(//span[text()='CSV export'])[1]").click()
    ]);
    await page.waitForTimeout(500);
    // Define where the downloaded excel file will go and get saved 
    const path = "./tests/Gantt_SB/Default Exporting1/Converts/ActualExport/CSV1/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report 
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(500);
    // Define the Expected Export File's Path which I want to upload 
    const ExpectedExportFile = "./tests/Gantt_SB/Default Exporting1/CSV/Expected/CSV1.csv";
    await page.waitForTimeout(500);
    //Now navigate to spreadsheet component 
    await page.goto("https://document.syncfusion.com/demos/spreadsheet-editor/javascript-es5/#/tailwind3/spreadsheet/default.html");
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(2000);
    //Click on File 
    await page.locator("(//li[contains(@aria-label, 'File')])[1]").click();
    await page.waitForTimeout(2000);
    //Listen for the File Chooser dialog Event 
    page.on("filechooser", async (fileChooser) => {
        ////using .setFiles() to upload the desired files - Here, [ExpectedExportFile] is the const where I have designated the path of the Export File I want to upload 
        await fileChooser.setFiles([ExpectedExportFile])
    });
    //Now click the Open option which will open the file chooser dialog and wait for the upload to be done 
    await page.locator("(//li[contains(@aria-label, 'Open')])[1]").click({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-Excel file is uploaded and the records are all updated.
    expect(await page.locator("(//div[contains(@class,'e-sheet')])[1]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
}); 

test('5-Zoom In Zoom Fit and click PDF Export', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'exporting?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click Zoom In button
    await page.locator('(//span[contains(@class, "zoomin")])[1]').click();
    await page.waitForTimeout(600);
    //Click Zoom Fit button on the toolbar
    await page.locator('(//span[contains(@class, "zoomtofit")])[1]').click();
    await page.waitForTimeout(600);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[6]').click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_SB/ZoomFitFiles/PDF/" + download.suggestedFilename();
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
    //Screenshot validation-The PDF Image the records on chart side are in ZoomFit state
    expect(page).toMatchSnapshot('ZoomFit.png', { maxDiffPixels: 100 });
    }
}); 

test('6-Zoom Out and click PDF Export', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'exporting?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click Zoom Out button on the toolbar
    await page.locator('(//span[contains(@class, "zoomout")])[1]').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[6]').click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_SB/ZoomoutFiles/PDF/" + download.suggestedFilename();
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
    //Screenshot validation-PDF Image is in ZoomOut on the chart side
    expect(page).toMatchSnapshot('Zoomout.png', { maxDiffPixels: 100 });
    }
}); 

test('7-Zoom In and click PDF Export', async ({ page }, testInfo) => {
    await page.goto(Helper.baseUrl + 'exporting?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click Zoom In button on the toolbar
    await page.locator('(//span[contains(@class, "zoomin")])[1]').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[6]').click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_SB/ZoominFiles/PDF/" + download.suggestedFilename();
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
    //Screenshot validation-PDF Image is in Zoomin on the chart side
    expect(page).toMatchSnapshot('Zoomin.png', { maxDiffPixels: 100 });
    }
}); 

test('8-Zoom Out Zoom In and click PDF Export', async ({ page }, testInfo) => {
    await page.goto(Helper.baseUrl + 'exporting?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click Zoom Out button on the toolbar
    await page.locator('(//span[contains(@class, "zoomout")])[1]').click();
    await page.waitForTimeout(500);
    //Click Zoom In button on the toolbar
    await page.locator('(//span[contains(@class, "zoomin")])[1]').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[6]').click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_SB/ZoomOutZoomInFiles/PDF/" + download.suggestedFilename();
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
    //Screenshot validation-PDF Image is in Zoomin on the chart side
    expect(page).toMatchSnapshot('ZoomoutZoomin.png', { maxDiffPixels: 100 });
    }
}); 
