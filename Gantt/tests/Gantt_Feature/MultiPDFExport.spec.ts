import { test, expect } from '@playwright/test';
import { Helper } from '../Helper/helper';
import { pdf } from 'pdf-to-img';

//Intiall load of Multipdf-page-size
test('1-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Perform pdf export 
test('2-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/2-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform collapse all and click pdfexport
test('3-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/3-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform expand all,collapse all and click pdfexport
test('4-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    //Click Expand all
    await page.locator('(//span[text()="Expand all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/4-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom in and click pdfexport
test('5-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/5-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom out and click pdfexport
test('6-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/6-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom to fit and click pdfexport
test('7-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/7-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Previous timespan  and click pdfexport
test('8-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Previous timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/8-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Next timespan  and click pdfexport
test('9-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Next timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/9-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform search  and click pdfexport
test('10-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Search Prepare
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').fill('Prepare');
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/10-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Ascending in header and click pdfexport
test('11-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Perform Ascending in ID header
    await page.locator('(//span[text()="Task ID"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/11-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Descending in header and click pdfexport
test('12-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Perform Ascending in ID header
    await page.locator('(//span[text()="Task ID"])').click();
    await page.waitForTimeout(500);
    //Perform Descending in ID header
    await page.locator('(//span[text()="Task ID"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/12-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Ascending in column menu and click pdfexport
test('13-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Sort Ascending"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/13-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform collpase and click pdfexport
test('14-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/14-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform collapse & Expand in arrow and click pdfexport
test('15-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Perform collapse in arrow
    await page.locator('(//span[contains(@class,"e-treegridexpand")])').click();
    await page.waitForTimeout(500);
    //Perform Expand in arrow
    await page.locator('(//span[contains(@class," e-treegridcollapse")])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/15-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//performed  Taskname column hide and click pdfexport
test('16-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[3]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Columns"])').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class," e-frame e-check")])[2]').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/16-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//performed  Taskname column uncheck and click pdfexport
test('17-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[3]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Columns"])').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class," e-frame e-check")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-frame")])[2]').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/17-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//performed  Taskname Filter and click pdfexport
test('18-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Filter"])').click();
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Filter"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/18-MPDF/" + download.suggestedFilename();
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
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('19-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[2]').click();
    await page.waitForTimeout(600);
    await page.locator('(//li[text()="Filter"])').click();
    await page.waitForTimeout(600);
    await page.getByRole('combobox', { name: 'Filter Value' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('combobox', { name: 'Filter Value' }).type('Defining target audience');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/19-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('20-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Filter"])').click();
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Clear"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/19-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// //In custom data source select PdfExport Data 
// test('21-MPDF', async ({ page },) => {
//     const testInfo = test.info();
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
//     await page.waitForTimeout(2000);
//     //Click Custom data dropdown
//     await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
//     await page.waitForTimeout(500);
//     //select PdfExport Data
//     await page.getByRole('option', { name: 'PdfExportData' }).click();
//     await page.waitForTimeout(500);
//     // Press the button to download the PDF files    
//     const [download] = await Promise.all([page.waitForEvent('download'),
//     await page.locator("(//span[text()='PdfExport'])[1]").click()]);
//     await page.waitForTimeout(500);
//     // Define the Actual Export File Path with proper name           
//     const path = "./tests/Gantt_Feature/MultiPDFExport/21-MPDF/" + download.suggestedFilename();
//     await download.saveAs(path);
//     await page.waitForTimeout(500);
//     // attach the downloaded file to the report ( This is the playwright event to download the File)       
//     await testInfo.attach('downloaded', { path: path });
//     await page.waitForTimeout(1500);
//     //The "pdf" here is the package that converts the file to PNG format 
//     const doc = await pdf(path);
//     await page.waitForTimeout(500);
//     expect(doc.length).toBe(1);
//     //Converts the 1 pages to image format and takes snapshot     
//     for await (const page of doc) {
//         await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
//     }
// });

// //In custom data source select EventMarkersData 
// test('22-MPDF', async ({ page },) => {
//     const testInfo = test.info();
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
//     await page.waitForTimeout(2000);
//     //Click Custom data dropdown
//     await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
//     await page.waitForTimeout(500);
//     //select EventMarkersData
//     await page.getByRole('option', { name: 'EventMarkersData' }).click();
//     await page.waitForTimeout(500);
//     // Press the button to download the PDF files    
//     const [download] = await Promise.all([page.waitForEvent('download'),
//     await page.locator("(//span[text()='PdfExport'])[1]").click()]);
//     await page.waitForTimeout(500);
//     // Define the Actual Export File Path with proper name           
//     const path = "./tests/Gantt_Feature/MultiPDFExport/22-MPDF/" + download.suggestedFilename();
//     await download.saveAs(path);
//     await page.waitForTimeout(500);
//     // attach the downloaded file to the report ( This is the playwright event to download the File)       
//     await testInfo.attach('downloaded', { path: path });
//     await page.waitForTimeout(1500);
//     //The "pdf" here is the package that converts the file to PNG format 
//     const doc = await pdf(path);
//     await page.waitForTimeout(500);
//     expect(doc.length).toBe(1);
//     //Converts the 1 pages to image format and takes snapshot     
//     for await (const page of doc) {
//         await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
//     }
// });

//In custom data source select TaskIndicatorsData
test('23-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select TaskIndicatorsData
    await page.getByRole('option', { name: 'TaskIndicatorsData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/23-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select TaskIndicatorsWithHtmlName
test('24-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select TaskIndicatorsWithHtmlName
    await page.getByRole('option', { name: 'TaskIndicatorsWithHtmlName' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/24-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select TaskIndicatorsWithDifferentDate
test('25-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select TaskIndicatorsWithDifferentDate
    await page.getByRole('option', { name: 'TaskIndicatorsWithDifferentDate' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/25-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select TaskAndProjectIndicatorsData
test('26-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(800);
    //select TaskAndProjectIndicatorsData
    await page.getByRole('option', { name: 'TaskAndProjectIndicatorsData' }).click();
    await page.waitForTimeout(800);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(800);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/26-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select NewProjectTaskData
test('27-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select NewProjectTaskData
    await page.getByRole('option', { name: 'NewProjectTaskData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/26-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pageOrientation-Portrait
test('28-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select  pageOrientation-Portrait
    await page.getByRole('option', { name: ' pageOrientation-Portrait' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/28-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select  pagesize-Letter
test('29-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-Letter
    await page.getByRole('option', { name: 'pagesize-Letter', exact: true }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/29-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-Note
test('30-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-Note
    await page.getByRole('option', { name: 'pagesize-Note' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/30-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-Legal
test('31-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-Legal
    await page.getByRole('option', { name: 'pagesize-Legal' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/31-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select  pagesize-A0
test('32-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select  pagesize-A0
    await page.getByRole('option', { name: ' pagesize-A0' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/32-MPDF/" + download.suggestedFilename();
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
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-A1
test('33-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select  pagesize-A1
    await page.getByRole('option', { name: ' pagesize-A1' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/33-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(2);
    //Converts the 2 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-A2
test('34-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select  pagesize-A2
    await page.getByRole('option', { name: 'pagesize-A2' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/34-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(2);
    //Converts the 2 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


//In Export Properties select  pagesize-A3
test('35-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select   pagesize-A3
    await page.getByRole('option', { name: 'pagesize-A3' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/35-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select  pagesize-A4
test('36-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-A4
    await page.getByRole('option', { name: 'pagesize-A4' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/36-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select  pagesize-A5
test('37-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-A5
    await page.getByRole('option', { name: 'pagesize-A5' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/37-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(6);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-A6
test('38-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-A6
    await page.getByRole('option', { name: 'pagesize-A6' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/38-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(10);
    //Converts the 10 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-A7
test('39-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-A7
    await page.getByRole('option', { name: 'pagesize-A7' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/39-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(5);
    //Converts the 5 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-A8
test('40-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //selectpagesize-A8
    await page.getByRole('option', { name: 'pagesize-A8' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/40-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(10);
    //Converts the 10 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-A9
test('41-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-A9
    await page.getByRole('option', { name: 'pagesize-A9' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/41-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(25);
    //Converts the 25 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-B0
test('42-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-B0
    await page.getByRole('option', { name: 'pagesize-B0' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/42-MPDF/" + download.suggestedFilename();
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
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-B1
test('43-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-B1
    await page.getByRole('option', { name: 'pagesize-B1' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/43-MPDF/" + download.suggestedFilename();
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
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-B2
test('44-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-B2
    await page.getByRole('option', { name: 'pagesize-B2' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/44-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(2);
    //Converts the 2 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-B3
test('45-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-B3
    await page.getByRole('option', { name: 'pagesize-B3' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/45-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(2);
    //Converts the 2 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-B4
test('46-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-B4
    await page.getByRole('option', { name: 'pagesize-B4' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/46-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-B5
test('47-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-B5
    await page.getByRole('option', { name: 'pagesize-B5' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/47-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(5);
    //Converts the 5 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select  pagesize-Archa
test('48-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select  pagesize-Archa
    await page.getByRole('option', { name: ' pagesize-Archa' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/48-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select  pagesize-Archb
test('49-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select  pagesize-Archb
    await page.getByRole('option', { name: 'pagesize-Archb' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/49-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select  pagesize-Archc
test('50-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select  pagesize-Archc
    await page.getByRole('option', { name: 'pagesize-Archc' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/50-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(2);
    //Converts the 2 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-Archd
test('51-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-Archd
    await page.getByRole('option', { name: 'pagesize-Archd' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/51-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(2);
    //Converts the 2 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-Arche
test('52-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-Arche
    await page.getByRole('option', { name: 'pagesize-Arche' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/52-MPDF/" + download.suggestedFilename();
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
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-Flsa
test('53-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-Flsa
    await page.getByRole('option', { name: 'pagesize-Flsa' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/53-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-HalfLetter
test('54-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-HalfLetter
    await page.getByRole('option', { name: 'pagesize-HalfLetter' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/54-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(6);
    //Converts the 6 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-Letter11x17
test('55-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-Letter11x17
    await page.getByRole('option', { name: 'pagesize-Letter11x17' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/55-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pagesize-Ledger
test('56-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pagesize-Ledger
    await page.getByRole('option', { name: 'pagesize-Ledger' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/56-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select  fontsize-fontfamily-fontBrush
test('57-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select  fontsize-fontfamily-fontBrush
    await page.getByRole('option', { name: 'fontsize-fontfamily-fontBrush', exact: true }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/57-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select fontsize-fontfamily-fontBrush-1
test('58-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipdf-page-size');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select fontsize-fontfamily-fontBrush-1
    await page.getByRole('option', { name: 'fontsize-fontfamily-fontBrush-1' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/58-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//............................................../multipage-holiday-pdfexport...................................................

//Intiall load of multipage-holiday-pdfexport
test('59-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-holiday-pdfexport');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Click pdf export 
test('60-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-holiday-pdfexport');
    await page.waitForTimeout(2000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/60-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(30);
    //Converts the 30 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// Perform collpase & Click pdf export 
test('61-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-holiday-pdfexport');
    await page.waitForTimeout(2000);
    //Perform the collapse of the first three parent records
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/61-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(20);
    //Converts the 20 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// Perform collpase & Click pdf export 
test('62-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-holiday-pdfexport');
    await page.waitForTimeout(2000);
    //Perform the collapse all the parent records
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/62-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(10);
    //Converts the 10 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//................................................................multipagepdf-header-footer.....................

//Intiall load of multipage-holiday-pdfexport
test('63-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Perform pdf export 
test('64-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/64-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform collapse all and click pdfexport
test('65-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/65-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform expand all,collapse all and click pdfexport
test('66-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    //Click Expand all
    await page.locator('(//span[text()="Expand all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/66-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom in and click pdfexport
test('67-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/67-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom out and click pdfexport
test('68-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/68-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(9);
    //Converts the 9 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom to fit and click pdfexport
test('69-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/69-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(9);
    //Converts the 9 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Previous timespan  and click pdfexport
test('70-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Previous timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/70-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Next timespan  and click pdfexport
test('71-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Next timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/71-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform search  and click pdfexport
test('72-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //Search Prepare
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').fill('Concept approval');
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/72-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Cell Edit the parent record and click PDf export
test('73-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //Search cell parent record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[1]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/73-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Cell Edit the child record and click PDf export
test('74-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //cell edit child record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[2]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(500);
    //cell edit child record start date
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[6]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('4/9/2019');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/74-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Dialog Edit the parent record and click PDf export
test('75-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //Search cell parent record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[1]').click();
    await page.waitForTimeout(500);
    //Click edit option
    await page.locator('(//span[text()="Edit"])').click();
    await page.waitForTimeout(500);
    await page.locator('#TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#StartDate').fill('4/4/2019');
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-tab-wrap")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[14]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[9]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '-Market Research' }).click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-content e-yscroll")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(800);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/75-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Dialog Edit the child record and click PDf export
test('76-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[2]').click();
    await page.waitForTimeout(500);
    //Click edit option
    await page.locator('(//span[text()="Edit"])').click();
    await page.waitForTimeout(500);
    await page.locator('#TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#StartDate').fill('4/4/2019');
    await page.waitForTimeout(500);
    await page.locator('#EndDate').fill('4/10/2019');
    await page.waitForTimeout(500);
    await page.locator('#Progress').fill('80');
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(800);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/76-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select left & Click pdf export 
test('77-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/77-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// From Dropdown select left Perform collapse all and click pdfexport
test('78-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/78-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select left Perform expand all,collapse all and click pdfexport
test('79-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    //Click Expand all
    await page.locator('(//span[text()="Expand all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/79-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// From Dropdown select left Perform Zoom in and click pdfexport
test('80-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/80-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// From Dropdown select left Perform Zoom out and click pdfexport
test('81-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/81-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(9);
    //Converts the 9 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// From Dropdown select left Perform Zoom to fit and click pdfexport
test('82-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/82-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(9);
    //Converts the 9 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select left Perform Previous timespan  and click pdfexport
test('83-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(600);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(600);
    //Click collapse All
    await page.locator('(//span[text()="Previous timespan"])').click();
    await page.waitForTimeout(600);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/83-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select left Perform Next timespan  and click pdfexport
test('84-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Next timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/84-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select left Perform search  and click pdfexport
test('85-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    //Search Prepare
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').fill('Concept approval');
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/85-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select left Cell Edit the parent record and click PDf export
test('86-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    //Search cell parent record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[1]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/86-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select left Cell Edit the child record and click PDf export
test('87-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    //cell edit child record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[2]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(500);
    //cell edit child record start date
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[6]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('4/9/2019');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/87-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select left Dialog Edit the parent record and click PDf export
test('88-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    //Search cell parent record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[1]').click();
    await page.waitForTimeout(500);
    //Click edit option
    await page.locator('(//span[text()="Edit"])').click();
    await page.waitForTimeout(500);
    await page.locator('#TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#StartDate').fill('4/4/2019');
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-tab-wrap")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[14]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[9]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '-Market Research' }).click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-content e-yscroll")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(800);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/88-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select left Dialog Edit the child record and click PDf export
test('89-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[2]').click();
    await page.waitForTimeout(500);
    //Click edit option
    await page.locator('(//span[text()="Edit"])').click();
    await page.waitForTimeout(500);
    await page.locator('#TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#StartDate').fill('4/4/2019');
    await page.waitForTimeout(500);
    await page.locator('#EndDate').fill('4/10/2019');
    await page.waitForTimeout(500);
    await page.locator('#Progress').fill('80');
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(800);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/89-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Drag Parent taskbar to right and click pdf
test('90-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    //Drag Parent taskbar to right
    await page.locator('(//div[contains(@class,"e-gantt-parent-taskbar-inner-div")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(901, 157);
    await page.mouse.move(1123, 163);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/90-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Drag Child taskbar to right and click pdf
test('91-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    // Drag Child taskbar to right
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(867, 195);
    await page.mouse.move(1084, 203);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/91-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Resize Child taskbar and click pdf
test('92-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    //Resize Child taskbar to right
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(879, 198);
    await page.mouse.move(1148, 204);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/92-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(15);
    //Converts the 15 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Connect Dependence for Parent taskbar and click pdf
test('93-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    // Click the taskbar 
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").click();
    await page.waitForTimeout(1000);
    // Draw a connector line from Task 1 to Task 2 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[2]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/93-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Connect Dependence for Child taskbar and click pdf
test('94-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Left' }).click();
    await page.waitForTimeout(500);
    // Click the taskbar 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").click();
    await page.waitForTimeout(1000);
    // Draw a connector line from Task 2 to Task 3 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[3]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/94-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


//From Dropdown select Right & Click pdf export 
test('95-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/95-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// From Dropdown select Right Perform collapse all and click pdfexport
test('96-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/96-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Right Perform expand all,collapse all and click pdfexport
test('97-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select left
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    //Click Expand all
    await page.locator('(//span[text()="Expand all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/97-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// From Dropdown select Right Perform Zoom in and click pdfexport
test('98-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/98-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// From Dropdown select Right Perform Zoom out and click pdfexport
test('99-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(600);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(600);
    //Click collapse All
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(600);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(600);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/99-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(600);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(9);
    //Converts the 9 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// From Dropdown select Right Perform Zoom to fit and click pdfexport
test('100-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/99-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(9);
    //Converts the 9 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Right Perform Previous timespan  and click pdfexport
test('101-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Previous timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/101-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Right Perform Next timespan  and click pdfexport
test('102-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Next timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/102-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Right Perform search  and click pdfexport
test('103-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    //Search Prepare
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').fill('Concept approval');
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/85-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Right Cell Edit the parent record and click PDf export
test('104-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    //Search cell parent record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[1]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/104-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Right Cell Edit the child record and click PDf export
test('105-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    //cell edit child record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[2]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(500);
    //cell edit child record start date
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[6]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('4/9/2019');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/87-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Right Dialog Edit the parent record and click PDf export
test('106-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    //Search cell parent record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[1]').click();
    await page.waitForTimeout(500);
    //Click edit option
    await page.locator('(//span[text()="Edit"])').click();
    await page.waitForTimeout(500);
    await page.locator('#TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#StartDate').fill('4/4/2019');
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-tab-wrap")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[14]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[9]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '-Market Research' }).click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-content e-yscroll")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(800);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/106-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Right Dialog Edit the child record and click PDf export
test('107-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[2]').click();
    await page.waitForTimeout(500);
    //Click edit option
    await page.locator('(//span[text()="Edit"])').click();
    await page.waitForTimeout(500);
    await page.locator('#TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#StartDate').fill('4/4/2019');
    await page.waitForTimeout(500);
    await page.locator('#EndDate').fill('4/10/2019');
    await page.waitForTimeout(500);
    await page.locator('#Progress').fill('80');
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(800);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/107-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Drag Parent taskbar to right and click pdf
test('108-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    //Drag Parent taskbar to right
    await page.locator('(//div[contains(@class,"e-gantt-parent-taskbar-inner-div")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(901, 157);
    await page.mouse.move(1123, 163);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/90-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Drag Child taskbar to right and click pdf
test('109-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    // Drag Child taskbar to right
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(867, 195);
    await page.mouse.move(1084, 203);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/109-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Resize Child taskbar and click pdf
test('110-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    //Resize Child taskbar to right
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(879, 198);
    await page.mouse.move(1148, 204);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/110-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(15);
    //Converts the 15 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Connect Dependence for Parent taskbar and click pdf
test('111-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    // Click the taskbar 
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").click();
    await page.waitForTimeout(1000);
    // Draw a connector line from Task 1 to Task 2 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[2]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/93-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Connect Dependence for Child taskbar and click pdf
test('112-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Right
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Right' }).click();
    await page.waitForTimeout(500);
    // Click the taskbar 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").click();
    await page.waitForTimeout(1000);
    // Draw a connector line from Task 2 to Task 3 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[3]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/94-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Justify & Click pdf export 
test('113-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/113-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// From Dropdown select Justify Perform collapse all and click pdfexport
test('114-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/114-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Justify Perform expand all,collapse all and click pdfexport
test('115-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    //Click Expand all
    await page.locator('(//span[text()="Expand all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/115-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// From Dropdown select Justify Perform Zoom in and click pdfexport
test('116-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/116-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// From Dropdown select Justify Perform Zoom out and click pdfexport
test('117-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/117-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(9);
    //Converts the 9 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// From Dropdown select Justify Perform Zoom to fit and click pdfexport
test('118-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/99-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(9);
    //Converts the 9 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Justify Perform Previous timespan  and click pdfexport
test('119-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Previous timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/101-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Justify Perform Next timespan  and click pdfexport
test('120-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    //Click collapse All
    await page.locator('(//span[text()="Next timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/120-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Justify Perform search  and click pdfexport
test('121-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    //Search Prepare
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').fill('Concept approval');
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/121-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Justify Cell Edit the parent record and click PDf export
test('122-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    //Search cell parent record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[1]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/122-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Justify Cell Edit the child record and click PDf export
test('123-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    //cell edit child record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[2]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(500);
    //cell edit child record start date
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[6]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('4/9/2019');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/87-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Justify Dialog Edit the parent record and click PDf export
test('124-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    //Search cell parent record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[1]').click();
    await page.waitForTimeout(500);
    //Click edit option
    await page.locator('(//span[text()="Edit"])').click();
    await page.waitForTimeout(500);
    await page.locator('#TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#StartDate').fill('4/4/2019');
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-tab-wrap")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[14]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[9]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '-Market Research' }).click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-content e-yscroll")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(800);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/106-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From Dropdown select Justify Dialog Edit the child record and click PDf export
test('125-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[2]').click();
    await page.waitForTimeout(500);
    //Click edit option
    await page.locator('(//span[text()="Edit"])').click();
    await page.waitForTimeout(500);
    await page.locator('#TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#StartDate').fill('4/4/2019');
    await page.waitForTimeout(500);
    await page.locator('#EndDate').fill('4/10/2019');
    await page.waitForTimeout(500);
    await page.locator('#Progress').fill('80');
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(800);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/125-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Drag Parent taskbar to right and click pdf
test('126-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    //Drag Parent taskbar to right
    await page.locator('(//div[contains(@class,"e-gantt-parent-taskbar-inner-div")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(901, 157);
    await page.mouse.move(1123, 163);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/126-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Drag Child taskbar to right and click pdf
test('127-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    // Drag Child taskbar to right
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(867, 195);
    await page.mouse.move(1084, 203);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/127-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Resize Child taskbar and click pdf
test('128-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    //Resize Child taskbar to right
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(879, 198);
    await page.mouse.move(1148, 204);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/128-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(15);
    //Converts the 15 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Connect Dependence for Parent taskbar and click pdf
test('129-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    // Click the taskbar 
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").click();
    await page.waitForTimeout(1000);
    // Draw a connector line from Task 1 to Task 2 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[2]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/93-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Connect Dependence for Child taskbar and click pdf
test('130-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-header-footer');
    await page.waitForTimeout(2000);
    //From Dropdown select Justify
    await page.locator('(//span[contains(@class,"e-ddl e-lib e-input-group")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Justify' }).click();
    await page.waitForTimeout(500);
    // Click the taskbar 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").click();
    await page.waitForTimeout(1000);
    // Draw a connector line from Task 2 to Task 3 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[3]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/130-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//........................................................./multipage-pdf-unscheduled...............................

//Intiall load of multipage-pdf-unscheduled
test('131-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-unscheduled');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Perform pdf export 
test('132-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-unscheduled');
    await page.waitForTimeout(2000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/132-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(5);
    //Converts the 5 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//...................................................../multipage-work-week......................................

//Intiall load of multipage-work-week
test('133-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-work-week');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Click pdf export 
test('134-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-work-week');
    await page.waitForTimeout(2000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/134-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(27);
    //Converts the 30 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// Perform collpase & Click pdf export 
test('135-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-work-week');
    await page.waitForTimeout(2000);
    //Perform the collapse of the first three parent records
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/135-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// Perform collpase & Click pdf export 
test('136-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-work-week');
    await page.waitForTimeout(2000);
    //Perform the collapse all the parent records
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/136-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(9);
    //Converts the 9 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//.............................................................../multipage-pdf-manual-taskmode.......................................

//Intiall load of multipage-work-week
test('137-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-manual-taskmode');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Click pdf export 
test('138-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-manual-taskmode');
    await page.waitForTimeout(2000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/134-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(9);
    //Converts the 9 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// Perform collpase & Click pdf export 
test('139-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-manual-taskmode');
    await page.waitForTimeout(2000);
    //Perform the collapse of the first parent records
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/135-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(9);
    //Converts the 9 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// Perform collpase & Click pdf export 
test('140-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-manual-taskmode');
    await page.waitForTimeout(2000);
    //Perform the collapse all the parent records
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/136-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(9);
    //Converts the 9 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//................................................................/multipage-predecessor.........................................

//Intiall load of Multipdf-page-size
test('141-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Perform pdf export 
test('142-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/142-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform collapse all and click pdfexport
test('143-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/143-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(9);
    //Converts the 9 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform expand all,collapse all and click pdfexport
test('144-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    //Click Expand all
    await page.locator('(//span[text()="Expand all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/144-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


//Perform indent click pdfexport
test('145-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    //Select the second record
    await page.locator('(//span[text()="FS type child 2"])').click();
    await page.waitForTimeout(500);
    //Click Indent
    await page.locator('(//span[text()="Indent"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/145-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Outdent click pdfexport
test('146-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    //Select the record
    await page.locator('(//span[text()="FS type child 2"])').click();
    await page.waitForTimeout(600);
    //Click Indent
    await page.locator('(//span[text()="Outdent"])').click();
    await page.waitForTimeout(600);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(600);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/145-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Add a new task click pdfexport
test('147-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    //Click add
    await page.locator('(//span[text()="Add"])').click();
    await page.waitForTimeout(800);
    //Click Save
    await page.locator('(//button[text()="Save"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/145-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(27);
    //Converts the 27 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Delete a Parent task click pdfexport
test('148-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    //Click select the parent record
    await page.locator('(//span[text()="Parent - FF Group"])').click();
    await page.waitForTimeout(800);
    //Click Delete
    await page.locator('(//span[text()="Delete"])').click();
    await page.waitForTimeout(500);
    //Click Ok
    await page.locator('(//button[text()="OK"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/145-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Delete a Child task click pdfexport
test('149-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    //Click select the Child record
    await page.locator('(//span[text()="FS type child 1"])').click();
    await page.waitForTimeout(800);
    //Click Delete
    await page.locator('(//span[text()="Delete"])').click();
    await page.waitForTimeout(500);
    //Click Ok
    await page.locator('(//button[text()="OK"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/149-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Cell Edit the parent record and click PDf export
test('150-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    //Search cell parent record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[1]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/150-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Cell Edit the child record and click PDf export
test('151-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    //cell edit child record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[2]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(500);
    //cell edit child record start date
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[5]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('6/9/2025');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/151-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Dialog Edit the parent record and click PDf export
test('152-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    //Search cell parent record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[1]').click();
    await page.waitForTimeout(500);
    //Click edit option
    await page.locator('(//span[text()="Edit"])').click();
    await page.waitForTimeout(500);
    await page.locator('#TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#StartDate').fill('6/9/2025');
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-tab-wrap")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[text()="Add"])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[5]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '-Parent - FF Group' }).click()
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-content e-yscroll")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(800);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/152-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Dialog Edit the child record and click PDf export
test('153-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[2]').click();
    await page.waitForTimeout(500);
    //Click edit option
    await page.locator('(//span[text()="Edit"])').click();
    await page.waitForTimeout(500);
    await page.locator('#TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#StartDate').fill('6/9/2025');
    await page.waitForTimeout(500);
    await page.locator('#EndDate').fill('6/13/2025');
    await page.waitForTimeout(500);
    await page.locator('#Duration').click();
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(800);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/153-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Drag Parent taskbar to right and click pdf
test('154-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    //Drag Parent taskbar to right
    await page.locator('(//div[contains(@class,"e-gantt-parent-taskbar-inner-div")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1538, 160);
    await page.mouse.move(1855, 167);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/154-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Drag Child taskbar to right and click pdf
test('155-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    // Drag Child taskbar to right
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1035, 191);
    await page.mouse.move(1320, 201);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/155-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Resize Child taskbar and click pdf
test('156-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    //Resize Child taskbar to right
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1061, 195);
    await page.mouse.move(1272, 206);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/156-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Connect Dependence for FF taskbar and click pdf
test('157-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    await page.waitForTimeout(2000);
    // Click the taskbar 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").click();
    await page.waitForTimeout(1000);
    // Draw a connector line from Task 3 to Task 5 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[3]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[5]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/157-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Connect Dependence for Child taskbar and click pdf
test('158-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-predecessor');
    // Click the taskbar 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").click();
    await page.waitForTimeout(1000);
    // Draw a connector line from Task 2 to Task 4 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[4]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/158-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//............................................................../multipagepdf-scaling................................

//Intiall load of multipagepdf-scaling
test('159-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Perform pdf export 
test('160-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/160-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform collapse all and click pdfexport
test('161-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/161-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform expand all,collapse all and click pdfexport
test('162-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    //Click Expand all
    await page.locator('(//span[text()="Expand all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/162-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom in and click pdfexport
test('163-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/163-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom out and click pdfexport
test('164-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/164-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(2);
    //Converts the 2 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom to fit and click pdfexport
test('165-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/165-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(2);
    //Converts the 2 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Previous timespan  and click pdfexport
test('166-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Previous timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/166-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Next timespan  and click pdfexport
test('167-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Next timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/167-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform search  and click pdfexport
test('168-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Search Prepare
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').fill('Prepare');
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/168-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


//Edit the parent record and click PDf export
test('169-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Search cell parent record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[1]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/169-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Cell Edit the child record and click PDf export
test('170-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //cell edit child record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[2]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(500);
    //cell edit child record start date
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[6]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('4/9/2019');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/170-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Dialog Edit the parent record and click PDf export
test('171-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Search cell parent record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[1]').click();
    await page.waitForTimeout(500);
    //Click edit option
    await page.locator('(//span[text()="Edit"])').click();
    await page.waitForTimeout(500);
    await page.locator('#TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#StartDate').fill('4/4/2019');
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-tab-wrap")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[14]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[8]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '6-Market Research' }).click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-content e-yscroll")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(800);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/171-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Dialog Edit the child record and click PDf export
test('172-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[2]').click();
    await page.waitForTimeout(500);
    //Click edit option
    await page.locator('(//span[text()="Edit"])').click();
    await page.waitForTimeout(500);
    await page.locator('#TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#StartDate').fill('4/4/2019');
    await page.waitForTimeout(500);
    await page.locator('#EndDate').fill('4/10/2019');
    await page.waitForTimeout(500);
    await page.locator('#Progress').fill('80');
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(800);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/172-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Drag Parent taskbar to right and click pdf
test('173-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Drag Parent taskbar to right
    await page.locator('(//div[contains(@class,"e-gantt-parent-taskbar-inner-div")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(901, 157);
    await page.mouse.move(1123, 163);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/173-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Drag Child taskbar to right and click pdf
test('174-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    // Drag Child taskbar to right
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(867, 195);
    await page.mouse.move(1084, 203);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/174-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Resize Child taskbar and click pdf
test('175-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Resize Child taskbar to right
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(879, 198);
    await page.mouse.move(1148, 204);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/175-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Connect Dependence for Parent taskbar and click pdf
test('176-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    // Click the taskbar 
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").click();
    await page.waitForTimeout(1000);
    // Draw a connector line from Task 1 to Task 2 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[5]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/176-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Connect Dependence for Child taskbar and click pdf
test('177-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    // Click the taskbar 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").click();
    await page.waitForTimeout(1000);
    // Draw a connector line from Task 2 to Task 3 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[3]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/177-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Progress Resize  Child taskbar and click pdf
test('178-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Resize Child taskbar to right
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[4]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1018, 413);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/178-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// Select PageTall Scaling Perform pdf export 
test('179-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/179-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform collapse all and click pdfexport
test('180-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/180-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Intiall load of /multipagepdf-scaling with PageTall Scaling 
test('181-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Perform expand all,collapse all and click pdfexport
test('182-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    //Click Expand all
    await page.locator('(//span[text()="Expand all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/182-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom in and click pdfexport
test('183-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    //Click collapse All
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/183-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom out and click pdfexport
test('184-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    //Click collapse All
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/184-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(2);
    //Converts the 2 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom to fit and click pdfexport
test('185-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    //Click collapse All
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/185-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(2);
    //Converts the 2 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Previous timespan  and click pdfexport
test('186-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    //Click collapse All
    await page.locator('(//span[text()="Previous timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/186-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Next timespan  and click pdfexport
test('187-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    //Click collapse All
    await page.locator('(//span[text()="Next timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/187-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform search  and click pdfexport
test('188-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    //Search Prepare
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').fill('Prepare');
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/188-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


//Edit the parent record and click PDf export
test('189-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    //Search cell parent record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[1]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/189-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Cell Edit the child record and click PDf export
test('190-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    //cell edit child record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[2]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___TaskName').press('Enter');
    await page.waitForTimeout(500);
    //cell edit child record start date
    await page.locator('(//td[contains(@class,"e-rowcell  e-leftalign")])[6]').dblclick();
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').fill('4/9/2019');
    await page.waitForTimeout(500);
    await page.locator('#DataItem___StartDate').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/190-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Dialog Edit the parent record and click PDf export
test('191-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    //Search cell parent record task name
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[1]').click();
    await page.waitForTimeout(500);
    //Click edit option
    await page.locator('(//span[text()="Edit"])').click();
    await page.waitForTimeout(500);
    await page.locator('#TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#StartDate').fill('4/4/2019');
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-tab-wrap")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[14]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[8]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '6-Market Research' }).click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-content e-yscroll")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(800);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/191-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Dialog Edit the child record and click PDf export
test('192-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell e-ellipsistooltip")])[2]').click();
    await page.waitForTimeout(500);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    //Click edit option
    await page.locator('(//span[text()="Edit"])').click();
    await page.waitForTimeout(500);
    await page.locator('#TaskName').fill('NewTask');
    await page.waitForTimeout(500);
    await page.locator('#StartDate').fill('4/4/2019');
    await page.waitForTimeout(500);
    await page.locator('#EndDate').fill('4/10/2019');
    await page.waitForTimeout(500);
    await page.locator('#Progress').fill('80');
    await page.waitForTimeout(500);
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(800);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/192-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Drag Parent taskbar to right and click pdf
test('193-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    //Drag Parent taskbar to right
    await page.locator('(//div[contains(@class,"e-gantt-parent-taskbar-inner-div")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(901, 157);
    await page.mouse.move(1123, 163);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/193-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Drag Child taskbar to right and click pdf
test('194-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    // Drag Child taskbar to right
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(867, 195);
    await page.mouse.move(1084, 203);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/194-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Resize Child taskbar and click pdf
test('195-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    //Resize Child taskbar to right
    await page.locator('(//div[contains(@class,"e-taskbar-right-resizer")])[1]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(879, 198);
    await page.mouse.move(1148, 204);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/195-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Connect Dependence for Parent taskbar and click pdf
test('196-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    // Click the taskbar 
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").click();
    await page.waitForTimeout(1000);
    // Draw a connector line from Task 1 to Task 2 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[1]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[5]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/196-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Connect Dependence for Child taskbar and click pdf
test('197-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    // Click the taskbar 
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").click();
    await page.waitForTimeout(1000);
    // Draw a connector line from Task 2 to Task 3 
    const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[2]");
    const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[3]");
    if (src && dst) {
        const src_bound = await src.boundingBox();
        const dst_bound = await dst.boundingBox();
        if (src_bound && dst_bound) {
            await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
            await page.mouse.down();
            await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
            await page.mouse.up();
            await page.waitForTimeout(1000);
        }
    }
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/177-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Progress Resize  Child taskbar and click pdf
test('198-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipagepdf-scaling');
    await page.waitForTimeout(2000);
    //Select PageTall Scaling 
    await page.locator("(//span[text()='PageTall Scaling'])").click();
    await page.waitForTimeout(500)
    //Resize Child taskbar to right
    await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[4]').click();
    await page.waitForTimeout(700);
    await page.mouse.down();
    await page.waitForTimeout(200);
    await page.mouse.move(1018, 413);
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/198-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//................................................................./multipage-pdf-customization....................................

//Intiall load of /multipage-pdf-customization
test('199-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Perform pdf export 
test('200-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/200-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform collapse all and click pdfexport
test('201-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/201-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform expand all,collapse all and click pdfexport
test('202-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    //Click Expand all
    await page.locator('(//span[text()="Expand all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/202-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom in and click pdfexport
test('203-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/203-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(5);
    //Converts the 5 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom out and click pdfexport
test('204-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/6-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom to fit and click pdfexport
test('205-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/7-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Previous timespan  and click pdfexport
test('206-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Previous timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/206-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Next timespan  and click pdfexport
test('207-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Next timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/207-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform search  and click pdfexport
test('208-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Search Prepare
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').fill('Prepare');
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/208-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Ascending in header and click pdfexport
test('209-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Perform Ascending in ID header
    await page.locator('(//span[text()="Task ID"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/209-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Descending in header and click pdfexport
test('210-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Perform Ascending in ID header
    await page.locator('(//span[text()="Task ID"])').click();
    await page.waitForTimeout(500);
    //Perform Descending in ID header
    await page.locator('(//span[text()="Task ID"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/210-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Ascending in column menu and click pdfexport
test('211-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Sort Ascending"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/211-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform collpase and click pdfexport
test('212-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/212-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform collapse & Expand in arrow and click pdfexport
test('213-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Perform collapse in arrow
    await page.locator('(//span[contains(@class,"e-treegridexpand")])[1]').click();
    await page.waitForTimeout(600);
    //Perform Expand in arrow
    await page.locator('(//span[contains(@class," e-treegridcollapse")])').click();
    await page.waitForTimeout(600);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(600);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/213-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//performed  Taskname column hide and click pdfexport
test('214-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[3]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Columns"])').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class," e-frame e-check")])[2]').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/214-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//performed  Taskname column uncheck and click pdfexport
test('215-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[3]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Columns"])').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class," e-frame e-check")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-frame")])[2]').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/215-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//performed  Taskname Filter and click pdfexport
test('216-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Filter"])').click();
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Filter"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/216-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('217-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Filter"])').click();
    await page.waitForTimeout(500);
    await page.getByRole('combobox', { name: 'Filter Value' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('combobox', { name: 'Filter Value' }).type('Defining target audience');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/217-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('218-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Filter"])').click();
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Clear"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/218-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Decending in column menu and click pdfexport
test('219-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Perform Descending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Sort Descending"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/211-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select InitialPlanningData
test('220-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select InitialPlanningData
    await page.getByRole('option', { name: 'InitialPlanningData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/220-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select ResourceAllocationData
test('221-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select ResourceAllocationData
    await page.getByRole('option', { name: 'ResourceAllocationData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/221-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select ZeroDurationTaskData
test('222-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select ZeroDurationTaskData
    await page.getByRole('option', { name: 'ZeroDurationTaskData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/222-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select PhaseOneData
test('223-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(600);
    //select PhaseOneData
    await page.getByRole('option', { name: 'PhaseOneData' }).click();
    await page.waitForTimeout(600);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(600);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/220-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(600);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(120);
    //Converts the 120 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select VehicleJobCardData
test('224-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select VehicleJobCardData
    await page.getByRole('option', { name: 'VehicleJobCardData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/220-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(20);
    //Converts the 20 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select ProjectInitiationData
test('225-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select ProjectInitiationData
    await page.getByRole('option', { name: 'ProjectInitiationData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/225-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select EnableCriticalPath
test('226-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select EnableCriticalPath
    await page.getByRole('option', { name: 'EnableCriticalPath' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/226-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select ProductConceptData
test('227-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select ProductConceptData
    await page.getByRole('option', { name: 'ProductConceptData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/227-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select UnscheduledTaskDataOne
test('228-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select UnscheduledTaskDataOne
    await page.getByRole('option', { name: 'UnscheduledTaskDataOne' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/228-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select GridLinesBoth
test('229-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select GridLinesBoth
    await page.getByRole('option', { name: 'GridLinesBoth' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/229-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select GridLinesNone
test('230-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select GridLinesNone
    await page.getByRole('option', { name: 'GridLinesNone' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/230-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select GridLinesHorizontal
test('231-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select GridLinesHorizontal
    await page.getByRole('option', { name: 'GridLinesHorizontal' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/231-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select GridLinesVertical
test('232-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select GridLinesVertical
    await page.getByRole('option', { name: 'GridLinesVertical' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/232-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select EventMarkerApproval
test('233-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select EventMarkerApproval
    await page.getByRole('option', { name: 'EventMarkerApproval' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/233-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select EventMarkerKickoff
test('234-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select EventMarkerKickoff
    await page.getByRole('option', { name: 'EventMarkerKickoff' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/234-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


//In custom data source select ChineseParenthesisData
test('235-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select ChineseParenthesisData
    await page.getByRole('option', { name: 'ChineseParenthesisData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/235-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select SplitTaskData
test('236-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select SplitTaskData
    await page.getByRole('option', { name: 'SplitTaskData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/236-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select TrueTypeData
test('237-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select TrueTypeData
    await page.getByRole('option', { name: 'TrueTypeData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/237-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select ManualTaskMode
test('238-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select ManualTaskMode
    await page.getByRole('option', { name: 'ManualTaskMode' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/238-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Property source select Disable Footer
test('239-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select Disable Footer
    await page.getByRole('option', { name: 'Disable Footer' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/239-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Property source select Export Type – Current View
test('240-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select Export Type – Current View
    await page.getByRole('option', { name: 'Export Type - Current View' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/240-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Property source select Export Type – All Data
test('241-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select Export Type – All Data
    await page.getByRole('option', { name: 'Export Type - All Data' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/241-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Property source select File Name
test('242-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select File Name
    await page.getByRole('option', { name: 'File Name' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/242-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Property source select Header
test('243-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select Header
    await page.getByRole('option', { name: 'Header', exact: true }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/243-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Property source select Column Header Style
test('244-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select Column Header Style
    await page.getByRole('option', { name: 'Column Header Style' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/244-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Property source select Cell Style
test('245-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select Cell Style
    await page.getByRole('option', { name: 'Cell Style' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/245-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Property source select Taskbar Style
test('246-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select Taskbar Style
    await page.getByRole('option', { name: 'Taskbar Style' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/246-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Property source select Label Style
test('247-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select Label Style
    await page.getByRole('option', { name: 'Label Style' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/247-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Property source select Timeline Style
test('248-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select Timeline Style
    await page.getByRole('option', { name: 'Timeline Style' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/248-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Property source select Connector Line Color
test('249-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select Connector Line Color
    await page.getByRole('option', { name: 'Connector Line Color', exact: true }).click()
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/249-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Property source select Critical Connector Line Color
test('250-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select Critical Connector Line Color
    await page.getByRole('option', { name: 'Critical Connector Line Color' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/250-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Property source select Event Marker Style
test('251-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select Event Marker Style
    await page.getByRole('option', { name: 'Event Marker Style' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/246-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Property source select Holiday Style
test('252-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-customization');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select Holiday Style
    await page.getByRole('option', { name: 'Holiday Style' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/247-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//........................................................../multipage-pdf-theme.............................................

//Intiall load of multipage-pdf-theme
test('253-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Perform pdf export 
test('254-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/254-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform collapse all and click pdfexport
test('255-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/255-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform expand all,collapse all and click pdfexport
test('256-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    //Click Expand all
    await page.locator('(//span[text()="Expand all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/256-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});
//Perform Zoom in and click pdfexport
test('257-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/257-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});
//Perform Zoom out and click pdfexport
test('258-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/258-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom to fit and click pdfexport
test('259-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/259-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Previous timespan  and click pdfexport
test('260-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Previous timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/260-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Next timespan  and click pdfexport
test('261-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Next timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/261-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform search  and click pdfexport
test('262-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Search Prepare
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').fill('Prepare');
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/262-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the  pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Ascending in header and click pdfexport
test('263-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Perform Ascending in ID header
    await page.locator('(//span[text()="Task ID"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/263-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Descending in header and click pdfexport
test('264-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Perform Ascending in ID header
    await page.locator('(//span[text()="Task ID"])').click();
    await page.waitForTimeout(500);
    //Perform Descending in ID header
    await page.locator('(//span[text()="Task ID"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/264-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Ascending in column menu and click pdfexport
test('265-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Sort Ascending"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/265-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform collpase and click pdfexport
test('266-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    await page.locator('(//span[contains(@class,"e-treegridexpand")])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/266-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform collapse & Expand in arrow and click pdfexport
test('267-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Perform collapse in arrow
    await page.locator('(//span[contains(@class,"e-treegridexpand")])').click();
    await page.waitForTimeout(500);
    //Perform Expand in arrow
    await page.locator('(//span[contains(@class," e-treegridcollapse")])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/267-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//performed  Taskname column hide and click pdfexport
test('268-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[3]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Columns"])').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class," e-frame e-check")])[2]').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/268-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//performed  Taskname column uncheck and click pdfexport
test('269-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[3]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Columns"])').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class," e-frame e-check")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-icons e-frame")])[2]').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/269-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//performed  Taskname Filter and click pdfexport
test('270-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Filter"])').click();
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Filter"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/270-MPDF/" + download.suggestedFilename();
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
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('271-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Filter"])').click();
    await page.waitForTimeout(500);
    await page.getByRole('combobox', { name: 'Filter Value' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('combobox', { name: 'Filter Value' }).type('Defining target audience');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/271-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('272-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Perform Ascending in column menu
    await page.locator('(//div[contains(@class,"e-columnmenu")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Filter"])').click();
    await page.waitForTimeout(500);
    await page.locator('(//button[text()="Clear"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/272-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select PdfExport Data 
test('273-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select PdfExport Data
    await page.getByRole('option', { name: 'PdfExportData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/273-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select EventMarkersData 
test('274-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select EventMarkersData
    await page.getByRole('option', { name: 'EventMarkersData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/274-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select TaskIndicatorsData
test('275-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select TaskIndicatorsData
    await page.getByRole('option', { name: 'TaskIndicatorsData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/275-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select TaskIndicatorsWithHtmlName
test('276-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select TaskIndicatorsWithHtmlName
    await page.getByRole('option', { name: 'TaskIndicatorsWithHtmlName' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/276-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select TaskIndicatorsWithDifferentDate
test('277-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select TaskIndicatorsWithDifferentDate
    await page.getByRole('option', { name: 'TaskIndicatorsWithDifferentDate' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/275-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select TaskAndProjectIndicatorsData
test('278-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select TaskAndProjectIndicatorsData
    await page.getByRole('option', { name: 'TaskAndProjectIndicatorsData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/276-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


//In custom data source select NewProjectTaskData
test('279-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select NewProjectTaskData
    await page.getByRole('option', { name: 'NewProjectTaskData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/279-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source select LoclizationData
test('280-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    //select LoclizationData
    await page.getByRole('option', { name: 'LoclizationData' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/280-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source and Export Properties select LoclizationData
test('281-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    // select LoclizationData
    await page.getByRole('option', { name: 'LoclizationData' }).click();
    await page.waitForTimeout(500);
    //Click Export Properties dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    // select LoclizationData
    await page.getByRole('option', { name: 'localization' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/280-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select customRangeExport
test('282-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select customRangeExport
    await page.getByRole('option', { name: 'customRangeExport' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/282-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select theme-Fluent
test('283-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select theme-Fluent
    await page.getByRole('option', { name: 'theme-Fluent' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/283-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select theme-Bootstrap
test('284-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select theme-Bootstrap
    await page.getByRole('option', { name: 'theme-Bootstrap', exact: true }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/284-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select theme-Material3
test('285-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select theme-Material3
    await page.getByRole('option', { name: 'theme-Material3' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/285-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select theme-Fabric
test('286-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select theme-Fabric
    await page.getByRole('option', { name: 'theme-Fabric' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/286-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select theme-Bootstrap4
test('287-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select theme-Bootstrap4
    await page.getByRole('option', { name: 'theme-Bootstrap4' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/287-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select label-Template
test('288-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select label-Template
    await page.getByRole('option', { name: 'label-Template' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/288-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select localization
test('289-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select localization
    await page.getByRole('option', { name: 'localization' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/289-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In Export Properties select pdf-cancel
test('290-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    //select pdf-cancel
    await page.getByRole('option', { name: 'pdf-cancel' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    await page.locator("(//span[text()='PdfExport'])[1]").click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//In custom data source PdfExportData and Export Properties theme-Material3
test('291-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    // select PdfExportData
    await page.getByRole('option', { name: 'PdfExportData' }).click();
    await page.waitForTimeout(500);
    //Click Export Properties dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    // select theme-Material3
    await page.getByRole('option', { name: 'theme-Material3' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/291-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source EventMarkersData and Export Properties theme-Material3
test('292-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    // select EventMarkersData
    await page.getByRole('option', { name: 'EventMarkersData' }).click();
    await page.waitForTimeout(500);
    //Click Export Properties dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    // select theme-Material3
    await page.getByRole('option', { name: 'theme-Material3' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/292-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source TaskIndicatorsData and Export Properties theme-Bootstrap4
test('293-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    // select TaskIndicatorsData
    await page.getByRole('option', { name: 'TaskIndicatorsData' }).click();
    await page.waitForTimeout(500);
    //Click Export Properties dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    // select theme-Bootstrap4
    await page.getByRole('option', { name: 'theme-Bootstrap4' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/293-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source TaskIndicatorsData and Export Properties label-Template
test('294-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    // select TaskIndicatorsData
    await page.getByRole('option', { name: 'TaskIndicatorsData' }).click();
    await page.waitForTimeout(500);
    //Click Export Properties dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    // select label-Template
    await page.getByRole('option', { name: 'label-Template' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/294-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source EventMarkersData and Export Properties label-Template
test('295-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    // select EventMarkersData
    await page.getByRole('option', { name: 'EventMarkersData' }).click();
    await page.waitForTimeout(500);
    //Click Export Properties dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    // select label-Template
    await page.getByRole('option', { name: 'label-Template' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/292-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source TaskIndicatorsWithHtmlName and Export Properties label-Template
test('296-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    // select EventMarkersData
    await page.getByRole('option', { name: 'TaskIndicatorsWithHtmlName' }).click();
    await page.waitForTimeout(500);
    //Click Export Properties dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    // select label-Template
    await page.getByRole('option', { name: 'label-Template' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/296-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source TaskIndicatorsWithDifferentDate and Export Properties theme-Fabric
test('297-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    // select TaskIndicatorsWithDifferentDate
    await page.getByRole('option', { name: 'TaskIndicatorsWithDifferentDate' }).click();
    await page.waitForTimeout(500);
    //Click Export Properties dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    // select theme-Fabric
    await page.getByRole('option', { name: 'theme-Fabric' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/297-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source TaskAndProjectIndicatorsData and Export Properties theme-Material3
test('298-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(600);
    // select TaskAndProjectIndicatorsData
    await page.getByRole('option', { name: 'TaskAndProjectIndicatorsData' }).click();
    await page.waitForTimeout(600);
    //Click Export Properties dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(600);
    // select theme-Material3
    await page.getByRole('option', { name: 'theme-Material3' }).click();
    await page.waitForTimeout(600);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(600);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/298-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source NewProjectTaskData and Export Properties customRangeExport
test('299-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    // select NewProjectTaskData
    await page.getByRole('option', { name: 'NewProjectTaskData' }).click();
    await page.waitForTimeout(500);
    //Click Export Properties dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    // select customRangeExport
    await page.getByRole('option', { name: 'customRangeExport' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/299-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In custom data source NewProjectTaskData and Export Properties theme-Material3
test('300-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-theme');
    await page.waitForTimeout(2000);
    //Click Custom data dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    // select NewProjectTaskData
    await page.getByRole('option', { name: 'NewProjectTaskData' }).click();
    await page.waitForTimeout(500);
    //Click Export Properties dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    // select theme-Material3
    await page.getByRole('option', { name: 'theme-Material3' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/300-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//............................................................/multipage-pdf-default..........................................

//Intiall load of multipage-pdf-default
test('301-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Perform pdf export 
test('302-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/302-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the multiple & pdf export 
test('303-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/303-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


//in single change Landscape Then Perform pdf export 
test('304-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Select the Landscape
    await page.locator("(//span[text()='Landscape'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/304-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In multiple change Landscape Then Perform pdf export 
test('305-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(600);
    //Select the Landscape
    await page.locator("(//span[text()='Landscape'])").click();
    await page.waitForTimeout(600);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(600);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(600);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/305-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(8);
    //Converts the 8 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single change Bootstrap Then Perform pdf export 
test('306-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to bootstrap
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Bootstrap', exact: true }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/306-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in multiple change Bootstrap Then Perform pdf export 
test('307-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to bootstrap
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Bootstrap', exact: true }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/307-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


//in single change Bootstrap Landscape Then Perform pdf export 
test('308-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to bootstrap
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Bootstrap', exact: true }).click();
    await page.waitForTimeout(500);
    //Select the Landscape
    await page.locator("(//span[text()='Landscape'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/304-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In multiple change Bootstrap Landscape Then Perform pdf export 
test('309-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to bootstrap
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Bootstrap', exact: true }).click();
    await page.waitForTimeout(500);
    //Select the Landscape
    await page.locator("(//span[text()='Landscape'])").click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/305-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(8);
    //Converts the 8 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In multiple change Bootstrap Landscape Scaling Then Perform pdf export 
test('310-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to bootstrap
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Bootstrap', exact: true }).click();
    await page.waitForTimeout(500);
    //Select the Landscape
    await page.locator("(//span[text()='Landscape'])").click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    //Select the Scaling
    await page.locator("(//span[text()='Scaling'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/310-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(8);
    //Converts the 8 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single change Material3 Then Perform pdf export 
test('311-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to Material3
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Material3' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/311-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in multiple change Material3 Then Perform pdf export 
test('312-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to Material3
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Material3' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/312-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


//in single change Material3 Landscape Then Perform pdf export 
test('313-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to Material3
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Material3' }).click();
    await page.waitForTimeout(500);
    //Select the Landscape
    await page.locator("(//span[text()='Landscape'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/313-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In multiple change Material3 Landscape Then Perform pdf export 
test('314-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to bootstrap
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Material3' }).click();
    await page.waitForTimeout(500);
    //Select the Landscape
    await page.locator("(//span[text()='Landscape'])").click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/314-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(8);
    //Converts the 8 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In multiple change Material3 Landscape Scaling Then Perform pdf export 
test('315-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to Material3
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Material3' }).click();
    await page.waitForTimeout(500);
    //Select the Landscape
    await page.locator("(//span[text()='Landscape'])").click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    //Select the Scaling
    await page.locator("(//span[text()='Scaling'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/315-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(8);
    //Converts the 8 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single change Fabric Then Perform pdf export 
test('316-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to Fabric
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Fabric' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/316-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in multiple change Fabric Then Perform pdf export 
test('317-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to Fabric
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Fabric' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/317-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


//in single change Fabric Landscape Then Perform pdf export 
test('318-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to Fabric
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Fabric' }).click();
    await page.waitForTimeout(500);
    //Select the Landscape
    await page.locator("(//span[text()='Landscape'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/318-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In multiple change Fabric Landscape Then Perform pdf export 
test('319-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to Fabric
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Fabric' }).click();
    await page.waitForTimeout(500);
    //Select the Landscape
    await page.locator("(//span[text()='Landscape'])").click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/319-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(8);
    //Converts the 8 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In multiple change Fabric Landscape Scaling Then Perform pdf export 
test('320-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to Fabric
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Fabric' }).click();
    await page.waitForTimeout(500);
    //Select the Landscape
    await page.locator("(//span[text()='Landscape'])").click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    //Select the Scaling
    await page.locator("(//span[text()='Scaling'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/320-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(8);
    //Converts the 8 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single change Bootstrap4 Then Perform pdf export 
test('321-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to Bootstrap4
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Bootstrap4' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/321-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in multiple change Bootstrap4 Then Perform pdf export 
test('322-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to Bootstrap4
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Bootstrap4' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/322-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


//in single change Bootstrap4 Landscape Then Perform pdf export 
test('323-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to Bootstrap4
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Bootstrap4' }).click();
    await page.waitForTimeout(500);
    //Select the Landscape
    await page.locator("(//span[text()='Landscape'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/323-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In multiple change Bootstrap4 Landscape Then Perform pdf export 
test('324-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to Bootstrap4
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Bootstrap4' }).click();
    await page.waitForTimeout(500);
    //Select the Landscape
    await page.locator("(//span[text()='Landscape'])").click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/324-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(8);
    //Converts the 8 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//In multiple change Bootstrap4 Landscape Scaling Then Perform pdf export 
test('325-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change the theme to Bootstrap4
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[1]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Bootstrap4' }).click();
    await page.waitForTimeout(500);
    //Select the Landscape
    await page.locator("(//span[text()='Landscape'])").click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    //Select the Scaling
    await page.locator("(//span[text()='Scaling'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/325-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(8);
    //Converts the 8 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to Letter pdf export 
test('326-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Letter
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Letter', exact: true }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/326-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to Letter pdf export 
test('327-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Letter
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Letter', exact: true }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/327-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(10);
    //Converts the 10 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change papersize to Note pdf export 
test('328-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Note
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Note' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/328-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to Note pdf export 
test('329-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Note
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Note' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/329-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to Legal pdf export 
test('330-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Legal
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Legal' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/330-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to Note pdf export 
test('331-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Legal
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Legal' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/331-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(5);
    //Converts the 5 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to A0 pdf export 
test('332-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A0
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A0' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/332-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to A0 pdf export 
test('333-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A0
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A0' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/333-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(2);
    //Converts the 2 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to A1 pdf export 
test('334-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A1
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A1' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/334-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to A1 pdf export 
test('335-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A1
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A1' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/335-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(2);
    //Converts the 2 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to A2 pdf export 
test('336-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A2
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A2' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/336-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to A2 pdf export 
test('337-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A2
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A2' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/337-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to A3 pdf export 
test('338-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A3
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A3' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/338-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to A3 pdf export 
test('339-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A3
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A3' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/339-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to A4 pdf export 
test('340-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A4
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A4' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/340-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to A4 pdf export 
test('341-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A4
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A4' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/341-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to A5 pdf export 
test('342-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A5
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A5' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/342-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to A5 pdf export 
test('343-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A5
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A5' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/343-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(16);
    //Converts the 16 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to A6 pdf export 
test('344-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A6
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A6' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/344-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to A6 pdf export 
test('345-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A6
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A6' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/345-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(39);
    //Converts the 39 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


//in single Change PaperSize to A7 pdf export 
test('346-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A7
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A7' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/346-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to A7 pdf export 
test('347-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A7
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A7' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/347-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(144);
    //Converts the 16 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to A8 pdf export 
test('348-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A8
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A8' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/348-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to A8 pdf export 
test('349-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A8
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A8' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/349-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(72);
    //Converts the 72 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to A9 pdf export 
test('350-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A9
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A9' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/350-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to A9 pdf export 
test('351-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to A9
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'A9' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/351-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(150);
    //Converts the 150 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to B0 pdf export 
test('352-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to B0
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'B0' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/352-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to B0 pdf export 
test('353-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to B0
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'B0' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/353-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to B1 pdf export 
test('354-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to B1
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'B1' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/354-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to B1 pdf export 
test('355-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to B1
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'B1' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/355-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(2);
    //Converts the 2 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to B2 pdf export 
test('356-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to B2
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'B2' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/356-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to B2 pdf export 
test('357-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to B2
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'B2' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/357-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(2);
    //Converts the 2 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to B3 pdf export 
test('358-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to B3
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'B3' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/358-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to B3 pdf export 
test('359-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to B3
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'B3' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/359-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to B4 pdf export 
test('360-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to B4
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'B4' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/360-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to B4 pdf export 
test('361-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to B4
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'B4' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/361-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(5);
    //Converts the 5 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to B5 pdf export 
test('362-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to B5
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'B5' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/358-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to B5 pdf export 
test('363-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to B5
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'B5' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/359-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(14);
    //Converts the 14 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to Archa pdf export 
test('364-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Archa
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Archa' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/364-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to Archa pdf export 
test('365-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Archa
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Archa' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/361-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(10);
    //Converts the 10 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to Archb pdf export 
test('366-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Archb
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Archb' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/356-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to Archb pdf export 
test('367-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Archb
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Archb' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/357-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to Archc pdf export 
test('368-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Archc
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Archc' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/368-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to Archc pdf export 
test('369-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Archc
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Archc' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/369-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to Archd pdf export 
test('370-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Archd
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Archd' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/370-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to Archd pdf export 
test('371-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Archd
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Archd' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/371-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(2);
    //Converts the 2 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to Arche pdf export 
test('372-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Arche
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Arche' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/372-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to Arche pdf export 
test('373-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Arche
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Arche' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/373-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(2);
    //Converts the 2 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to Flsa pdf export 
test('374-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Flsa
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Flsa' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/374-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to Flsa pdf export 
test('375-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Flsa
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Flsa' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/375-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(10);
    //Converts the 10 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to HalfLetter pdf export 
test('376-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to HalfLetter
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'HalfLetter' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/376-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to HalfLetter pdf export 
test('377-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to HalfLetter
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'HalfLetter' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/377-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(18);
    //Converts the 18 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to Letter11x17 pdf export 
test('378-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Letter11x17
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Letter11x17' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/378-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to Letter11x17 pdf export 
test('379-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Letter11x17
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Letter11x17' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/379-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Change PaperSize to Ledger pdf export 
test('380-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Ledger
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Ledger' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/380-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Change PaperSize to Ledger pdf export 
test('381-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Change PaperSize to Ledger
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[2]').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Ledger' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/381-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(4);
    //Converts the 4 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Remove all the columns pdf export 
test('382-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    // Remove all columns
    await page.locator('(//div[contains(@class,"e-multi-select-wrapper")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'clear' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/382-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Remove all columns pdf export 
test('383-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    // Remove all columns
    await page.locator('(//div[contains(@class,"e-multi-select-wrapper")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'clear' }).click();
    await page.waitForTimeout(500);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/383-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in single Remove Name pdf export 
test('384-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Remove Name
    await page.locator('(//div[contains(@class,"e-multi-select-wrapper")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'TaskName' }).click();
    await page.waitForTimeout(500);
    await page.locator("(//td[text()='Columns'])").click();
    await page.waitForTimeout(300);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/384-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//in Multiple Remove Name pdf export 
test('385-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-default');
    await page.waitForTimeout(2000);
    //Click pdf export 
    await page.locator("(//span[text()='PDF Export'])").click();
    await page.waitForTimeout(500);
    //Remove Name
    await page.locator('(//div[contains(@class,"e-multi-select-wrapper")])').click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'TaskName' }).click();
    await page.waitForTimeout(500);
    await page.locator("(//td[text()='Columns'])").click();
    await page.waitForTimeout(300);
    //Select the Multiple
    await page.locator("(//span[text()='Multiple'])").click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/385-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(10);
    //Converts the 10 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//...................................................../multipage-pdf-data-binding.......................

//Intiall load of multipage-pdf-data-binding
test('386-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Click pdf export 
test('387-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/387-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(10);
    //Converts the 10 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From dropdown change object 
test('388-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Click the dropdown and change to object
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    //Click object from dropdown
    await page.getByRole('option', { name: 'object', exact: true }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//From dropdown change object pdf export 
test('389-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Click the dropdown and change to object
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    //Click object from dropdown
    await page.getByRole('option', { name: 'object', exact: true }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/389-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(10);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From dropdown change string
test('390-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Click the dropdown 
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    //Click string from dropdown
    await page.getByRole('option', { name: 'string' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//From dropdown change string pdf export 
test('391-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Click the dropdown 
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    //Click string from dropdown
    await page.getByRole('option', { name: 'string' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/391-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(10);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From dropdown change guid 
test('392-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Click the dropdown 
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    //Click guid from dropdown
    await page.getByRole('option', { name: 'guid' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//From dropdown change guid pdf export 
test('393-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Click the dropdown 
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    //Click guid from dropdown
    await page.getByRole('option', { name: 'guid' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/393-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(10);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From dropdown change expando 
test('394-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Click the dropdown 
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    //Click expando from dropdown
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//From dropdown change expando pdf export 
test('395-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Click the dropdown 
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    //Click expando from dropdown
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/395-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(6);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From dropdown change expando 
test('396-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Click the dropdown 
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    //Click expando from dropdown
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//From dropdown change expando pdf export 
test('397-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Click the dropdown 
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    //Click expando from dropdown
    await page.getByRole('option', { name: 'expando' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/397-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(6);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From dropdown change dynamic object
test('398-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Click the dropdown 
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    //Click dynamic object from dropdown
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//From dropdown change dynamic object pdf export 
test('399-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Click the dropdown 
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    //Click dynamic object from dropdown
    await page.getByRole('option', { name: 'dynamic object' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/399-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(6);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From dropdown change custom adaptor
test('400-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Click the dropdown 
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    //Click custom adaptor from dropdown
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//From dropdown change custom adaptor pdf export 
test('401-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Click the dropdown 
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    //Click custom adaptor from dropdown
    await page.getByRole('option', { name: 'custom adaptor' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/401-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(5);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//From dropdown change rtl
test('402-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Click the dropdown 
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    //Click rtl from dropdown
    await page.getByRole('option', { name: 'rtl' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//From dropdown change rtl pdf export 
test('403-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Click the dropdown 
    await page.locator('(//span[contains(@class,"e-ddl e-lib")])').click();
    await page.waitForTimeout(500);
    //Click rtl from dropdown
    await page.getByRole('option', { name: 'rtl' }).click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/403-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(10);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Cell Edit Parent task name & Click pdf export 
test('404-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Cell edit the taskname
    await page.locator("(//span[text()='Project initiation'])[1]").dblclick();
    await page.waitForTimeout(500);
    await page.locator("#DataItem___TaskName").fill('New Project');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/404-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(10);
    //Converts the 10 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Cell Edit Child task name & Click pdf export 
test('405-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-pdf-data-binding');
    await page.waitForTimeout(2000);
    //Cell edit the taskname
    await page.locator("(//span[text()='Identify site location'])[1]").dblclick();
    await page.waitForTimeout(500);
    await page.locator("#DataItem___TaskName").fill('New Project');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/405-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(10);
    //Converts the 10 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//......................................................................./multipage-timeline.............

//Intiall load of multipage-timeline
test('406-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Perform pdf export 
test('407-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/407-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(1000);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform collapse all and click pdfexport
test('408-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/408-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform expand all,collapse all and click pdfexport
test('409-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Collapse all"])').click();
    await page.waitForTimeout(500);
    //Click Expand all
    await page.locator('(//span[text()="Expand all"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/409-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom in and click pdfexport
test('410-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom in"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/410-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom out and click pdfexport
test('411-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom out"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/411-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Zoom to fit and click pdfexport
test('412-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Zoom to fit"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/412-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Previous timespan  and click pdfexport
test('413-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Previous timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/414-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform Next timespan  and click pdfexport
test('414-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Click collapse All
    await page.locator('(//span[text()="Next timespan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/414-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform search  and click pdfexport
test('415-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Search Prepare
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').fill('Prepare');
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/415-MPDF/" + download.suggestedFilename();
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
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Perform search  and click pdfexport
test('416-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Search Perform soil test
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').fill('Perform soil test');
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-textbox e-lib e-input")])').press('Enter');
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/416-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the top tier year and format Jan 18 and click pdfexport
test('417-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the top tier year
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[6]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Year"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/417-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(19);
    //Converts the 19 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the top tier year and format 2018 and click pdfexport
test('418-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the top tier year
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[6]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Year"])').click();
    await page.waitForTimeout(500);
    //Change the format 2018
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[7]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="2018"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/418-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(19);
    //Converts the 19 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the top tier year and format January, 18 and click pdfexport
test('419-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the top tier year
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[6]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Year"])').click();
    await page.waitForTimeout(500);
    //Change the format January, 18
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[7]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="January, 18"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/419-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(19);
    //Converts the 19 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the top tier Month and format Jan01, 2018 and click pdfexport
test('420-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the top tier Month
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[6]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Month"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/420-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the top tier Month and format January and click pdfexport
test('421-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the top tier Month
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[6]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Month"])').click();
    await page.waitForTimeout(500);
    //Change the format January
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[7]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="January"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/421-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the top tier Month and format Jan and click pdfexport
test('422-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the top tier Month
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[6]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Month"])').click();
    await page.waitForTimeout(500);
    //Change the format Jan
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[7]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Jan"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/422-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the top tier Week and format Mon Jan 01, 19 and click pdfexport
test('423-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the top tier Week
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[6]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Week"])').click();
    await page.waitForTimeout(500);
    //Change the format Mon Jan 01, 19
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[7]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Mon Jan 01, 19"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/423-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the top tier Week and format Mon Jan 01 and click pdfexport
test('424-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the top tier Week
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[6]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Week"])').click();
    await page.waitForTimeout(500);
    //Change the format Mon Jan 01, 19
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[7]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Mon Jan 01"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/424-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the top tier Day and format Mon and click pdfexport
test('425-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the top tier Day
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[6]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Day"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/425-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the top tier Day and format M and click pdfexport
test('426-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the top tier Day
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[6]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Day"])').click();
    await page.waitForTimeout(500);
    //Change the format M
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[7]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="M"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/426-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the top tier Day and format 01 and click pdfexport
test('427-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the top tier Day
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[6]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Day"])').click();
    await page.waitForTimeout(500);
    //Change the format 01
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[7]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="01"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/427-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the top tier Hour and format 00 : 00 AM and click pdfexport
test('428-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the top tier  Hour
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[6]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Hour"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/428-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the top tier  Hour and format 00 and click pdfexport
test('429-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the top tier  Hour
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[6]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Hour"])').click();
    await page.waitForTimeout(500);
    //Change the format 00
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[7]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="00"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/429-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the top tier Hour and format 0 : 00 AM and click pdfexport
test('430-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the top tier Hour
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[6]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Hour"])').click();
    await page.waitForTimeout(500);
    //Change the format 0 : 00 AM
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[7]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="0 : 00 AM"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/430-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(12);
    //Converts the 12 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


//Change the Bottom tier Year and format 2018 and click pdfexport
test('431-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the Bottom tier Year
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[10]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Year"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/431-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the Bottom tier Year and format Jan 18 and click pdfexport
test('432-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the Bottom tier Year
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[10]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Year"])').click();
    await page.waitForTimeout(500);
    //Change the format Jan 18
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[11]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Jan 18"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/432-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the Bottom tier Year and format January, 18 and click pdfexport
test('433-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the Bottom tier Year
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[10]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Year"])').click();
    await page.waitForTimeout(500);
    //Change the format January, 18
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[11]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="January, 18"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/433-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the Bottom tier Month and format Jan and click pdfexport
test('434-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the Bottom tier Month
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[10]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Month"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/434-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the Bottom tier Month and format Jan 01, 2018 and click pdfexport
test('435-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the Bottom tier Month
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[10]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Month"])').click();
    await page.waitForTimeout(500);
    //Change the format Jan 01, 2018
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[11]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Jan 01, 2018"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/435-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the Bottom tier Month and format January and click pdfexport
test('436-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the Bottom tier Month
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[10]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Month"])').click();
    await page.waitForTimeout(500);
    //Change the format January
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[11]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="January"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/436-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the Bottom tier Week and format Jan 01, 2021 and click pdfexport
test('437-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the Bottom tier Week
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[10]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Week"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/437-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the Bottom tier Week and format Mon Jan 01, 19 and click pdfexport
test('438-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the Bottom tier Week
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[10]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Week"])').click();
    await page.waitForTimeout(500);
    //Change the format Mon Jan 01, 19
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[11]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Mon Jan 01, 19"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/438-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the Bottom tier Week and format Mon Jan 01 and click pdfexport
test('439-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the Bottom tier Week
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[10]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Week"])').click();
    await page.waitForTimeout(500);
    //Change the format Mon Jan 01
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[11]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Mon Jan 01"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/439-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


//Change the Bottom tier Day and format Mon and click pdfexport
test('440-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the format Mon
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[11]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Mon"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/440-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the Bottom tier Day and format 01 and click pdfexport
test('441-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the format 01
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[11]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="01"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/441-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the Bottom tier Hour and format 00 and click pdfexport
test('442-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the Bottom tier Hour
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[10]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Hour"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/442-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(14);
    //Converts the 14 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the Bottom tier Hour and format Mon 00 : 00 AM and click pdfexport
test('443-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the Bottom tier Hour
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[10]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Hour"])').click();
    await page.waitForTimeout(500);
    //Change the format 00 : 00 AM
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[11]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="00 : 00 AM"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/443-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(14);
    //Converts the 14 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change the Bottom tier Hour and format 0 : 00 AM and click pdfexport
test('444-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the Bottom tier Hour
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[10]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Hour"])').click();
    await page.waitForTimeout(500);
    //Change the format 0 : 00 AM
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[11]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="0 : 00 AM"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/444-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(14);
    //Converts the 14 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change  Top Tier Unit "Year" and Bottom Tier Unit "Day" and click pdfexport
test('445-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the Top Tier Unit "Year"
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[6]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Year"])').click();
    await page.waitForTimeout(500);
    //Change Bottom Tier Unit "Day"
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[10]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Day"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/445-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(19);
    //Converts the 19 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change  Top Tier Unit "Year" count 13 and Bottom Tier Unit "Month" count 6 and click pdfexport
test('446-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the Top Tier Unit "Year"
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[6]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Year"])').click();
    await page.waitForTimeout(500);
    //Change the top tier count to 13
    await page.locator('(//input[contains(@class,"e-numerictextbox")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-numerictextbox")])[2]').fill('13');
    await page.waitForTimeout(500);
     //Change the Bottom tier count to 6
    await page.locator('(//input[contains(@class,"e-numerictextbox")])[3]').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-numerictextbox")])[3]').fill('6');
    await page.waitForTimeout(500);
    //Change Bottom Tier Unit "Month"
    await page.locator('(//span[contains(@class,"e-input-group-icon")])[10]').click();
    await page.waitForTimeout(500);
    await page.locator('(//li[text()="Month"])').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/446-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change unit width to "300" and click pdfexport
test('447-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change Change the unit width to 300
    await page.locator('(//input[contains(@class,"e-numerictextbox")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-numerictextbox")])[1]').fill('300');
    await page.waitForTimeout(500);
    await page.locator('.content').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/446-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(9);
    //Converts the 9 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change unit width to "150" and click pdfexport
test('448-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the unit width to 300
    await page.locator('(//input[contains(@class,"e-numerictextbox")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-numerictextbox")])[1]').fill('150');
    await page.waitForTimeout(500);
    await page.locator('.content').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/448-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(5);
    //Converts the 5 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change unit width to "25" and click pdfexport
test('449-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the unit width to 25
    await page.locator('(//input[contains(@class,"e-numerictextbox")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-numerictextbox")])[1]').fill('25');
    await page.waitForTimeout(500);
    await page.locator('.content').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/449-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Change unit width to "50" and click pdfexport
test('450-MPDF', async ({ page },) => {
    const testInfo = test.info();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/multipage-timeline');
    await page.waitForTimeout(2000);
    //Change the unit width to 25
    await page.locator('(//input[contains(@class,"e-numerictextbox")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//input[contains(@class,"e-numerictextbox")])[1]').fill('50');
    await page.waitForTimeout(500);
    await page.locator('.content').click();
    await page.waitForTimeout(500);
    // Press the button to download the PDF files    
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(500);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/Gantt_Feature/MultiPDFExport/450-MPDF/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path);
    await page.waitForTimeout(500);
    expect(doc.length).toBe(3);
    //Converts the 3 pages to image format and takes snapshot     
    for await (const page of doc) {
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});
