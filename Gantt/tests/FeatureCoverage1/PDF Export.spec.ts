import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
import { pdf } from 'pdf-to-img';

test('PDFET-001-Baseline in PDF Export', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown InitialPlanningData
    await page.locator("(//li[text()='InitialPlanningData'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-001/" + download.suggestedFilename();
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
        //Screenshot validation-exported pdf should contain baseline and taskbar with the timeline
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-002-Baseline in PDF Export', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ResourceAllocationData
    await page.locator("(//li[text()='ResourceAllocationData'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-002/" + download.suggestedFilename();
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
        //Screenshot validation-exported pdf should contain baseline and taskbar with proper timeline
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-003-Baseline in PDF Export', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ZeroDurationTaskData
    await page.locator("(//li[text()='ZeroDurationTaskData'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-003/" + download.suggestedFilename();
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
        //Screenshot validation-exported pdf should contain baseline and taskbar with proper timeline
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-004-baseline in pdf export with long duration', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown PhaseOneData
    await page.locator("(//li[text()='PhaseOneData'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-004/" + download.suggestedFilename();
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
        //Screenshot validation-exported pdf should contain baseline and taskbar with proper timeline
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-005-baseline in pdf export without taskbar', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown VehicleJobCardData
    await page.locator("(//li[text()='VehicleJobCardData'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-005/" + download.suggestedFilename();
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
        //Screenshot validation-exported pdf should contain baseline proper timeline
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-006-baseline in pdf export with zoomout action', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ProjectInitiationData
    await page.locator("(//li[text()='ProjectInitiationData'])[1] ").click();
    await page.waitForTimeout(500);
    //Zoom out till show quarterly Q1
    for (let i = 0; i < 5; i++) {
        await page.locator("(//span[text()='Zoom out'])[1]").click();
        await page.waitForTimeout(200); // optional: wait between clicks
    }
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-006/" + download.suggestedFilename();
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
        //Screenshot validation-exported pdf should contain baseline and taskbar with proper timeline
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-007-baseline in pdf export with zoomin action', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ProjectInitiationData
    await page.locator("(//li[text()='ProjectInitiationData'])[1] ").click();
    await page.waitForTimeout(500);
    //Zoom in till show quarterly Q1
    for (let i = 0; i < 5; i++) {
        await page.locator("(//span[text()='Zoom in'])[1]").click();
        await page.waitForTimeout(200); // optional: wait between clicks
    }
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-007/" + download.suggestedFilename();
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
        //Screenshot validation-exported pdf should contain baseline and taskbar with proper timeline
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-008', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ProjectInitiationData
    await page.locator("(//li[text()='ProjectInitiationData'])[1] ").click();
    await page.waitForTimeout(500);
    //Click the collapse button on the toolbar
    await page.locator("(//span[text()='Collapse all'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-008/" + download.suggestedFilename();
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
        //Screenshot validation-pdf exported record should be in collapsed state
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-009-pdf export with critical path', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EnableCriticalPath
    await page.locator("(//li[text()='EnableCriticalPath'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-009/" + download.suggestedFilename();
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
        //Screenshot validation-exported pdf contains taskbar as critical path, connector line color should change as cirtical path
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-010-pdf export with critical path - long duration', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ProductConceptData
    await page.locator("(//li[text()='ProductConceptData'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-010/" + download.suggestedFilename();
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
        //Screenshot validation-exported pdf contains taskbar as critical path, connector line color should change as cirtical path
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-011-manual task in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ManualParentTaskData
    await page.locator("(//li[text()='ManualParentTaskData'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-011/" + download.suggestedFilename();
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
        //Screenshot validation-exported pdf contains manual taskbar and milestone is indicated 
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-013-manual task in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ManualParentTaskData
    await page.locator("(//li[text()='ManualParentTaskData'])[1] ").click();
    await page.waitForTimeout(500);
    //Click Zoom In button
    await page.locator("(//span[text()='Zoom in'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-013/" + download.suggestedFilename();
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
        //Screenshot validation-exported pdf contains manual taskbar 
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-014-GridLinesBoth rendered', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesBoth
    await page.locator("(//li[text()='GridLinesBoth'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-014/" + download.suggestedFilename();
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
        //Screenshot validation-gridlines should rendered properly in both
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-015-GridLinesNone should render proper', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesNone
    await page.locator("(//li[text()='GridLinesNone'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-015/" + download.suggestedFilename();
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
        //Screenshot validation-gridlines should rendered properly
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-016-GridLinesHorizontal should render proper', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesHorizontal
    await page.locator("(//li[text()='GridLinesHorizontal'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-016/" + download.suggestedFilename();
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
        //Screenshot validation-gridlines should rendered properly in horizontal
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


test('PDFET-017-GridLinesVertical should render', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesVertical
    await page.locator("(//li[text()='GridLinesVertical'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-017/" + download.suggestedFilename();
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
        //Screenshot validation-gridlines should rendered properly in vertical
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-018-eventmarkers in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerApproval
    await page.locator("(//li[text()='EventMarkerApproval'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-018/" + download.suggestedFilename();
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
        //Screenshot validation-event marker should rendered properly 
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-019-eventmarkers in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerKickoff
    await page.locator("(//li[text()='EventMarkerKickoff'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-019/" + download.suggestedFilename();
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
        //Screenshot validation-event marker should rendered properly 
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-020-disable footer in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerKickoff
    await page.locator("(//li[text()='EventMarkerKickoff'])[1] ").click();
    await page.waitForTimeout(500);
    //Select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//li[text()='Disable Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-020/" + download.suggestedFilename();
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
        //Screenshot validation-footer should not render 
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-021', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerKickoff
    await page.locator("(//li[text()='EventMarkerKickoff'])[1] ").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Export Type - Current View from the dropdown
    await page.locator("(//li[text()='Export Type - Current View'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-021/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type 
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-022-exportType as alldata  in export properties', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerKickoff
    await page.locator("(//li[text()='EventMarkerKickoff'])[1] ").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Export Type - All Data from the dropdown
    await page.locator("(//li[text()='Export Type - All Data'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-022/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-023-header  in export propeties in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerKickoff
    await page.locator("(//li[text()='EventMarkerKickoff'])[1] ").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Header from the dropdown
    await page.locator("(//li[text()='Header'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-023/" + download.suggestedFilename();
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
        //Screenshot validation-header should customized in exported pdf
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-025-customizing cell in exported pdf ', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerKickoff
    await page.locator("(//li[text()='EventMarkerKickoff'])[1] ").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Cell Style from the dropdown
    await page.locator("(//li[text()='Cell Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-025/" + download.suggestedFilename();
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
        //Screenshot validation-Cell Style should customized in exported pdf
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-026-customizing taskbar in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerKickoff
    await page.locator("(//li[text()='EventMarkerKickoff'])[1] ").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Taskbar Style from the dropdown
    await page.locator("(//li[text()='Taskbar Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-026/" + download.suggestedFilename();
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
        //Screenshot validation-taskbar should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-027-customizing labels in exported pdf ', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerKickoff
    await page.locator("(//li[text()='EventMarkerKickoff'])[1] ").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Label Style from the dropdown
    await page.locator("(//li[text()='Label Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-027/" + download.suggestedFilename();
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
        //Screenshot validation-labels should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-028-customizing timeline in exported pdf  ', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerKickoff
    await page.locator("(//li[text()='EventMarkerKickoff'])[1] ").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Timeline Style from the dropdown
    await page.locator("(//li[text()='Timeline Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-028/" + download.suggestedFilename();
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
        //Screenshot validation-timeline should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-030-customizing holidays in exported pdf ', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(600);
    //select from the dropdown EventMarkerKickoff
    await page.locator("(//li[text()='EventMarkerKickoff'])[1] ").click();
    await page.waitForTimeout(600);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(600);
    //select Holiday Style from the dropdown
    await page.locator("(//li[text()='Holiday Style'])[1]").click();
    await page.waitForTimeout(600);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-030/" + download.suggestedFilename();
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
        //Screenshot validation-holidays should be cusotmized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-031-manual taskbar customization in expoted pdf ', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(600);
    //select from the dropdown ManualTaskMode
    await page.locator("(//li[text()='ManualTaskMode'])[1] ").click();
    await page.waitForTimeout(800);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-031/" + download.suggestedFilename();
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
        //Screenshot validation-manual taskbar should be cusotmized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-033-page orientation  with indicators', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskAndProjectIndicatorsData
    await page.locator("(//li[text()='TaskAndProjectIndicatorsData'])[1] ").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pageOrientation-Portrait
    await page.locator("(//li[text()='pageOrientation-Portrait'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-033/" + download.suggestedFilename();
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
        //Screenshot validation-inidcator should export as per in web gantt
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-034-page size as letter', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown NewProjectTaskData
    await page.locator("(//li[text()='NewProjectTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-Letter
    await page.locator("(//li[text()='pagesize-Letter'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-034/" + download.suggestedFilename();
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
        //Screenshot validation-NewProjectTaskData should change is indicated
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-035-Page Size Note', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-Note
    await page.locator("(//li[text()='pagesize-Note'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-035/" + download.suggestedFilename();
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
        //Screenshot validation-page size should change to note
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-036-pagesize-Legal', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-Legal
    await page.locator("(//li[text()='pagesize-Legal'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-036/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-Legal should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-037-Page Size A0', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-A0
    await page.locator("(//li[text()='pagesize-A0'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-037/" + download.suggestedFilename();
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
        //Screenshot validation-Page Size A0 should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-038-Page Size A1', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-A1
    await page.locator("(//li[text()='pagesize-A1'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-038/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-A1 should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-039-Page Size A2', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-A2
    await page.locator("(//li[text()='pagesize-A2'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-039/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-A2 should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-040-Page Size A3', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-A3
    await page.locator("(//li[text()='pagesize-A3'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-040/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-A3 should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-041-Page Size A4', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-A3
    await page.locator("(//li[text()='pagesize-A4'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-041/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-A4 should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-042-Page Size A5', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-A5
    await page.locator("(//li[text()='pagesize-A5'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-042/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-A5 should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-043-Page Size A6', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-A6
    await page.locator("(//li[text()='pagesize-A6'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-043/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-A6 should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-044-Page Size A7', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-A7
    await page.locator("(//li[text()='pagesize-A7'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-044/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-A7 should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-045-Page Size A8', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-A8
    await page.locator("(//li[text()='pagesize-A8'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-045/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-A8 should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-046-Page Size A9', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-A9
    await page.locator("(//li[text()='pagesize-A9'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-046/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-A9 should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-047-pagesize-B0', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-B0
    await page.locator("(//li[text()='pagesize-B0'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-047/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-B0 should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-048-pagesize-B1', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-B1
    await page.locator("(//li[text()='pagesize-B1'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-048/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-B1 should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-049-pagesize-B2', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-B2
    await page.locator("(//li[text()='pagesize-B2'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-049/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-B2 should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-050-pagesize-B3', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-B3
    await page.locator("(//li[text()='pagesize-B3'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-050/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-B3 should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-051-pagesize-B4', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-B4
    await page.locator("(//li[text()='pagesize-B4'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-051/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-B4 should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-052-pagesize-B5', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-B5
    await page.locator("(//li[text()='pagesize-B5'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-052/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-B5 should change
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-053-Page Size Archa', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Page Size Archa
    await page.locator("(//li[text()='pagesize-Archa'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-053/" + download.suggestedFilename();
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
        //Screenshot validation-Page Size Archa should change to that page size
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-054-pagesize-Archb', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-Archb
    await page.locator("(//li[text()='pagesize-Archb'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-054/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-Archb should change to that page size
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-055-pagesize-Archc', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-Archc
    await page.locator("(//li[text()='pagesize-Archc'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-055/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-Archc should change to that page size
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-056-pagesize-Archd', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-Archd
    await page.locator("(//li[text()='pagesize-Archd'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-056/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-Archd should change to that page size
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-057-pagesize-Arche', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-Arche
    await page.locator("(//li[text()='pagesize-Arche'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-057/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-Arche should change to that page size
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-058-pagesize-Flsa', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-Flsa
    await page.locator("(//li[text()='pagesize-Flsa'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-058/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-Flsa should change to that page size
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-059-pagesize-HalfLetter', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-HalfLetter
    await page.locator("(//li[text()='pagesize-HalfLetter'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-059/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-HalfLetter should change to that page size
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-060-pagesize-Letter11x17', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-Letter11x17
    await page.locator("(//li[text()='pagesize-Letter11x17'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-060/" + download.suggestedFilename();
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
        //Screenshot validation-pagesize-Letter11x17 should change to that page size
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-061-Page Size Ledger', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown pagesize-Letter11x17
    await page.locator("(//li[text()='pagesize-Ledger'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-061/" + download.suggestedFilename();
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
        //Screenshot validation-Page Size Ledger should change to that page size
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-062-Page Size Ledger', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Page Size Ledger
    await page.locator("(//li[text()='pagesize-Ledger'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-062/" + download.suggestedFilename();
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
        //Screenshot validation-Page Size Ledger should change to that page size
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-063-fontsize-fontfamily-fontBrush', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown NewProjectTaskData
    await page.locator("(//li[text()='NewProjectTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown fontsize-fontfamily-fontBrush
    await page.locator("(//li[text()='fontsize-fontfamily-fontBrush'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-063/" + download.suggestedFilename();
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
        //Screenshot validation-fontsize-fontfamily-fontBrush should change is indicated
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-064-fontsize-fontfamily-fontBrush-1', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown NewProjectTaskData
    await page.locator("(//li[text()='NewProjectTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown fontsize-fontfamily-fontBrush-1
    await page.locator("(//li[text()='fontsize-fontfamily-fontBrush-1'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-064/" + download.suggestedFilename();
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
        //Screenshot validation-fontsize-fontfamily-fontBrush-1 should change is indicated
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


test('PDFET-065-connecter line in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown NewProjectTaskData
    await page.locator("(//li[text()='NewProjectTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown fontsize-fontfamily-fontBrush-1
    await page.locator("(//li[text()='fontsize-fontfamily-fontBrush-1'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-065/" + download.suggestedFilename();
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
        //Screenshot validation-fontsize-fontfamily-fontBrush-1 should change is indicated
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-066-fontsize-fontfamily-fontBrush', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown NewProjectTaskData
    await page.locator("(//li[text()='NewProjectTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown fontsize-fontfamily-fontBrush-1
    await page.locator("(//li[text()='fontsize-fontfamily-fontBrush-1'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-066/" + download.suggestedFilename();
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
        //Screenshot validation-fontsize-fontfamily-fontBrush-1 should change is indicated
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-067', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown NewProjectTaskData
    await page.locator("(//li[text()='NewProjectTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown fontsize-fontfamily-fontBrush-1
    await page.locator("(//li[text()='fontsize-fontfamily-fontBrush-1'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-067/" + download.suggestedFilename();
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
        //Screenshot validation-NewProjectTaskData should change is indicated
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-068-fontsize-fontfamily-fontBrush', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/page-size');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/page-size' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown NewProjectTaskData
    await page.locator("(//li[text()='NewProjectTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown fontsize-fontfamily-fontBrush-1
    await page.locator("(//li[text()='fontsize-fontfamily-fontBrush-1'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-068/" + download.suggestedFilename();
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
        //Screenshot validation-NewProjectTaskData should change is indicated
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-069', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesNone
    await page.locator("(//li[text()='GridLinesNone'])[1]").click();
    await page.waitForTimeout(500);
    //Select exportType in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown CurrentViewData in Export Properties
    await page.locator("(//li[text()='Export Type - Current View'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-069/" + download.suggestedFilename();
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
        //Screenshot validation-The record is updated successfully should change is indicated
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-070-exportType as alldata in export properties', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesNone
    await page.locator("(//li[text()='GridLinesNone'])[1]").click();
    await page.waitForTimeout(500);
    //Select exportType in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown alldata in Export Properties
    await page.locator("(//li[text()='Export Type - All Data'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-070/" + download.suggestedFilename();
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
        //Screenshot validation-The record is updated successfully should change is indicated
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-071-header in export properties in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesNone
    await page.locator("(//li[text()='GridLinesNone'])[1]").click();
    await page.waitForTimeout(500);
    //Select Header in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Header in Export Properties
    await page.locator("(//li[text()='Header'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-071/" + download.suggestedFilename();
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
        //Screenshot validation-The record is updated successfully should change is indicated
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-072-Footer in export properties in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesNone
    await page.locator("(//li[text()='GridLinesNone'])[1]").click();
    await page.waitForTimeout(500);
    //Select Header in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Footer in Export Properties
    await page.locator("(//li[text()='Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-072/" + download.suggestedFilename();
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
        //Screenshot validation-The Header should be customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-073-customizing cell in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesNone
    await page.locator("(//li[text()='GridLinesNone'])[1]").click();
    await page.waitForTimeout(500);
    //Select Cell Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Cell Style in Export Properties
    await page.locator("(//li[text()='Cell Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-073/" + download.suggestedFilename();
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
        //Screenshot validation-Cell style should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-074-customizing taskbar in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesNone
    await page.locator("(//li[text()='GridLinesNone'])[1]").click();
    await page.waitForTimeout(500);
    //Select Taskbar Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Taskbar Style in Export Properties
    await page.locator("(//li[text()='Taskbar Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-074/" + download.suggestedFilename();
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
        //Screenshot validation-taskbar should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-075-customizing labels in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesNone
    await page.locator("(//li[text()='GridLinesNone'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Label Style in Export Properties
    await page.locator("(//li[text()='Label Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-075/" + download.suggestedFilename();
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
        //Screenshot validation-Labels should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-076-customizing timeline in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesNone
    await page.locator("(//li[text()='GridLinesNone'])[1]").click();
    await page.waitForTimeout(500);
    //Select Timeline Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Timeline Style in Export Properties
    await page.locator("(//li[text()='Timeline Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-076/" + download.suggestedFilename();
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
        //Screenshot validation-Timeline  should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-077-customizing footer in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesNone
    await page.locator("(//li[text()='GridLinesNone'])[1]").click();
    await page.waitForTimeout(500);
    //Select Footer in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown  Footer in Export Properties
    await page.locator("(//li[text()='Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-077/" + download.suggestedFilename();
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
        //Screenshot validation-Footer should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-078-customizing holidays in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesNone
    await page.locator("(//li[text()='GridLinesNone'])[1]").click();
    await page.waitForTimeout(500);
    //Select Footer in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown  Holiday Style in Export Properties
    await page.locator("(//li[text()='Holiday Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-078/" + download.suggestedFilename();
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
        //Screenshot validation-Holiday should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-079-customizing labels in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesHorizontal
    await page.locator("(//li[text()='GridLinesHorizontal'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-079/" + download.suggestedFilename();
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
        //Screenshot validation-Labels should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});


test('PDFET-081', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesHorizontal
    await page.locator("(//li[text()='GridLinesHorizontal'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Export Type - Current View in Export Properties
    await page.locator("(//li[text()='Export Type - Current View'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-081/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-082-exportType as alldata in export properties', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesHorizontal
    await page.locator("(//li[text()='GridLinesHorizontal'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Export Type - All Data in Export Properties
    await page.locator("(//li[text()='Export Type - All Data'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-082/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-083-exportType as alldata in export properties', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesHorizontal
    await page.locator("(//li[text()='GridLinesHorizontal'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Export Type - Current View in Export Properties
    await page.locator("(//li[text()='Header'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-083/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-084-footer in export properties in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesHorizontal
    await page.locator("(//li[text()='GridLinesHorizontal'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Footer in Export Properties
    await page.locator("(//li[text()='Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-084/" + download.suggestedFilename();
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
        //Screenshot validation-Footer should be customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-085-customizing cell in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesHorizontal
    await page.locator("(//li[text()='GridLinesHorizontal'])[1]").click();
    await page.waitForTimeout(500);
    //Select Cell Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Cell Style in Export Properties
    await page.locator("(//li[text()='Cell Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-085/" + download.suggestedFilename();
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
        //Screenshot validation-cell should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-086-customizing taskbar in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesHorizontal
    await page.locator("(//li[text()='GridLinesHorizontal'])[1]").click();
    await page.waitForTimeout(500);
    //Select Taskbar Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Taskbar Style in Export Properties
    await page.locator("(//li[text()='Taskbar Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-086/" + download.suggestedFilename();
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
        //Screenshot validation-taskbar should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-087-customizing labels in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesHorizontal
    await page.locator("(//li[text()='GridLinesHorizontal'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Label Style in Export Properties
    await page.locator("(//li[text()='Label Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-087/" + download.suggestedFilename();
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
        //Screenshot validation-Label should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-088-customizing timeline in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesHorizontal
    await page.locator("(//li[text()='GridLinesHorizontal'])[1]").click();
    await page.waitForTimeout(500);
    //Select Timeline Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Timeline Style in Export Properties
    await page.locator("(//li[text()='Timeline Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-088/" + download.suggestedFilename();
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
        //Screenshot validation-Timeline should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-089-customizing footer in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesHorizontal
    await page.locator("(//li[text()='GridLinesHorizontal'])[1]").click();
    await page.waitForTimeout(500);
    //Select Footer in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Footer in Export Properties
    await page.locator("(//li[text()='Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-089/" + download.suggestedFilename();
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
        //Screenshot validation-Footer should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-090-customizing holidays in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesHorizontal
    await page.locator("(//li[text()='GridLinesHorizontal'])[1]").click();
    await page.waitForTimeout(500);
    //Select Holiday Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Holiday  in Export Properties
    await page.locator("(//li[text()='Holiday Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-090/" + download.suggestedFilename();
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
        //Screenshot validation-holidays should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//GridLinesVertical
test('PDFET-091-customizing taskbar in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesVertical
    await page.locator("(//li[text()='GridLinesVertical'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-091/" + download.suggestedFilename();
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
        //Screenshot validation-event marker should rendered properly
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-092-disable footer in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesVertical
    await page.locator("(//li[text()='GridLinesVertical'])[1]").click();
    await page.waitForTimeout(500);
    //Select Disable Footer in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Disable Footer Export Properties
    await page.locator("(//li[text()='Disable Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-092/" + download.suggestedFilename();
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
        //Screenshot validation-footer should not render
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-093', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesVertical
    await page.locator("(//li[text()='GridLinesVertical'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Export Type - Current View in Export Properties
    await page.locator("(//li[text()='Export Type - Current View'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-093/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-094-exportType as alldata in export properties', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesVertical
    await page.locator("(//li[text()='GridLinesVertical'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Export Type - All Data in Export Properties
    await page.locator("(//li[text()='Export Type - All Data'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-094/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-095-exportType as alldata in export properties', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesVertical
    await page.locator("(//li[text()='GridLinesVertical'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Header in Export Properties
    await page.locator("(//li[text()='Header'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-095/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-096-footer in export properties in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesVertical
    await page.locator("(//li[text()='GridLinesVertical'])[1]").click();
    await page.waitForTimeout(500);
    //Select  Footer in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown  Footer Export Properties
    await page.locator("(//li[text()='Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-096/" + download.suggestedFilename();
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
        //Screenshot validation-footer should customized in exported pdfr
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-097-customizing cell in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesVertical
    await page.locator("(//li[text()='GridLinesVertical'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Cell Style in Export Properties
    await page.locator("(//li[text()='Cell Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-097/" + download.suggestedFilename();
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
        //Screenshot validation-Cell should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-098-customizing taskbar in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesVertical
    await page.locator("(//li[text()='GridLinesVertical'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Taskbar Style in Export Properties
    await page.locator("(//li[text()='Taskbar Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-098/" + download.suggestedFilename();
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
        //Screenshot validation-taskbar should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-099-customizing labels in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesVertical
    await page.locator("(//li[text()='GridLinesVertical'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Label Style in Export Properties
    await page.locator("(//li[text()='Label Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-099/" + download.suggestedFilename();
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
        //Screenshot validation-labels should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-100-customizing timeline in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesVertical
    await page.locator("(//li[text()='GridLinesVertical'])[1]").click();
    await page.waitForTimeout(500);
    //Select Timeline in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdownTimeline in Export Properties
    await page.locator("(//li[text()='Timeline Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-100/" + download.suggestedFilename();
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
        //Screenshot validation-Timeline should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-101-customizing footer in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesVertical
    await page.locator("(//li[text()='GridLinesVertical'])[1]").click();
    await page.waitForTimeout(500);
    //Select Timeline in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Footer in Export Properties
    await page.locator("(//li[text()='Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-101/" + download.suggestedFilename();
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
        //Screenshot validation-Footer should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-102-customizing holidays in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown GridLinesVertical
    await page.locator("(//li[text()='GridLinesVertical'])[1]").click();
    await page.waitForTimeout(500);
    //Select Holiday Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Holiday Style in Export Properties
    await page.locator("(//li[text()='Holiday Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-102/" + download.suggestedFilename();
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
        //Screenshot validation-holidays should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-103-eventmarkers in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerApproval
    await page.locator("(//li[text()='EventMarkerApproval'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-103/" + download.suggestedFilename();
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
        //Screenshot validation-event marker should rendered properly
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-104-disable footer in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerApproval
    await page.locator("(//li[text()='EventMarkerApproval'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Disable Footer in Export Properties
    await page.locator("(//li[text()='Disable Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-104/" + download.suggestedFilename();
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
        //Screenshot validation-footer should not render
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-105', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerApproval
    await page.locator("(//li[text()='EventMarkerApproval'])[1]").click();
    await page.waitForTimeout(500);
    //Select Export Type - Current View in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Export Type - Current View in Export Properties
    await page.locator("(//li[text()='Export Type - Current View'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-105/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-106-exportType as alldata in export properties', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerApproval
    await page.locator("(//li[text()='EventMarkerApproval'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Export Type - All Data in Export Properties
    await page.locator("(//li[text()='Export Type - All Data'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-106/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-107-header in export properties in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerApproval
    await page.locator("(//li[text()='EventMarkerApproval'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Header in Export Properties
    await page.locator("(//li[text()='Header'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-107/" + download.suggestedFilename();
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
        //Screenshot validation-header should customized in exported pdf
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-108-header in export properties in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerApproval
    await page.locator("(//li[text()='EventMarkerApproval'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Footer in Export Properties
    await page.locator("(//li[text()='Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-108/" + download.suggestedFilename();
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
        //Screenshot validation-Footer should customized in exported pdf
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-109-customizing cell in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerApproval
    await page.locator("(//li[text()='EventMarkerApproval'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Cell Style in Export Properties
    await page.locator("(//li[text()='Cell Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-109/" + download.suggestedFilename();
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
        //Screenshot validation-Cell should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-110-customizing taskbar in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerApproval
    await page.locator("(//li[text()='EventMarkerApproval'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Taskbar Style in Export Properties
    await page.locator("(//li[text()='Taskbar Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-110/" + download.suggestedFilename();
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
        //Screenshot validation-taskbar should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-111-customizing labels in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerApproval
    await page.locator("(//li[text()='EventMarkerApproval'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Label Style in Export Properties
    await page.locator("(//li[text()='Label Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-111/" + download.suggestedFilename();
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
        //Screenshot validation-labels should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-112-customizing timeline in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerApproval
    await page.locator("(//li[text()='EventMarkerApproval'])[1]").click();
    await page.waitForTimeout(500);
    //Select Timeline Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Timeline Style in Export Properties
    await page.locator("(//li[text()='Timeline Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-112/" + download.suggestedFilename();
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
        //Screenshot validation-Timeline should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-114-customizing holidays in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkerApproval
    await page.locator("(//li[text()='EventMarkerApproval'])[1]").click();
    await page.waitForTimeout(500);
    //Select Holiday Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select from the dropdown Holiday Style in Export Properties
    await page.locator("(//li[text()='Holiday Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-114/" + download.suggestedFilename();
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
        //Screenshot validation-Holiday should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//ChineseParenthesisData
test('PDFET-115-eventmarkers in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Click custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ChineseParenthesisData
    await page.locator("(//li[text()='ChineseParenthesisData'])[1]").click();
    await page.waitForTimeout(500);
    //Select Label Style in Export Properties dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-115/" + download.suggestedFilename();
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
        //Screenshot validation-
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-116-disable footer in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ChineseParenthesisData
    await page.locator("(//li[text()='ChineseParenthesisData'])[1]").click();
    await page.waitForTimeout(500);
    //Select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//li[text()='Disable Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-116/" + download.suggestedFilename();
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
        //Screenshot validation-footer should not render 
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-117', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ChineseParenthesisData
    await page.locator("(//li[text()='ChineseParenthesisData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Export Type - Current View from the dropdown
    await page.locator("(//li[text()='Export Type - Current View'])[1] ").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-117/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type 
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-118-exportType as alldata  in export properties', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ChineseParenthesisData
    await page.locator("(//li[text()='ChineseParenthesisData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Export Type - All Data from the dropdown
    await page.locator("(//li[text()='Export Type - All Data'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-118/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-119-header  in export propeties in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ChineseParenthesisData
    await page.locator("(//li[text()='ChineseParenthesisData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Header from the dropdown
    await page.locator("(//li[text()='Header'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-119/" + download.suggestedFilename();
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
        //Screenshot validation-header should customized in exported pdf
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-120-customizing cell in exported pdf ', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ChineseParenthesisData
    await page.locator("(//li[text()='ChineseParenthesisData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Cell Style from the dropdown
    await page.locator("(//li[text()='Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-120/" + download.suggestedFilename();
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
        //Screenshot validation-footer should customized in exported pdf
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-121-customizing cell in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ChineseParenthesisData
    await page.locator("(//li[text()='ChineseParenthesisData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Cell Style from the dropdown
    await page.locator("(//li[text()='Cell Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-121/" + download.suggestedFilename();
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
        //Screenshot validation-Cell should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-122-customizing labels in exported pdf ', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ChineseParenthesisData
    await page.locator("(//li[text()='ChineseParenthesisData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Taskbar Style from the dropdown
    await page.locator("(//li[text()='Taskbar Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-122/" + download.suggestedFilename();
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
        //Screenshot validation-labels should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-123-customizing labels in exported pdf ', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ChineseParenthesisData
    await page.locator("(//li[text()='ChineseParenthesisData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Labels Style from the dropdown
    await page.locator("(//li[text()='Label Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-123/" + download.suggestedFilename();
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
        //Screenshot validation-labels should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-124-customizing timeline in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ChineseParenthesisData
    await page.locator("(//li[text()='ChineseParenthesisData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Timeline Style from the dropdown
    await page.locator("(//li[text()='Timeline Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-124/" + download.suggestedFilename();
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
        //Screenshot validation-Timeline should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-125-customizing footer in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ChineseParenthesisData
    await page.locator("(//li[text()='ChineseParenthesisData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select  Footer from the dropdown
    await page.locator("(//li[text()='Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-125/" + download.suggestedFilename();
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
        //Screenshot validation-footer should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-126-customizing holidays in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ChineseParenthesisData
    await page.locator("(//li[text()='ChineseParenthesisData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select  Holiday Style from the dropdown
    await page.locator("(//li[text()='Holiday Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-126/" + download.suggestedFilename();
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
        //Screenshot validation-Holidays should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//SplitTaskData
test('PDFET-127-eventmarkers in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown SplitTaskData
    await page.locator("(//li[text()='SplitTaskData'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-127/" + download.suggestedFilename();
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
        //Screenshot validation-event marker should rendered properly
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-128-disable footer in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown SplitTaskData
    await page.locator("(//li[text()='SplitTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Disable Footer from the dropdown
    await page.locator("(//li[text()='Disable Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-128/" + download.suggestedFilename();
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
        //Screenshot validation-footer should not render
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-129', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown SplitTaskData
    await page.locator("(//li[text()='SplitTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select  Export Type - Current View from the dropdown
    await page.locator("(//li[text()='Export Type - Current View'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-129/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-130-exportType as alldata in export properties', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown SplitTaskData
    await page.locator("(//li[text()='SplitTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select  Export Type - All Data from the dropdown
    await page.locator("(//li[text()='Export Type - All Data'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-130/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-131-header in export properties in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown SplitTaskData
    await page.locator("(//li[text()='SplitTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Header from the dropdown
    await page.locator("(//li[text()='Header'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-131/" + download.suggestedFilename();
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
        //Screenshot validation-header should customized in exported pdf
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-132-footer in export properties in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown SplitTaskData
    await page.locator("(//li[text()='SplitTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Footer from the dropdown
    await page.locator("(//li[text()='Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-132/" + download.suggestedFilename();
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
        //Screenshot validation-Footer should customized in exported pdf
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-133-customizing cell in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown SplitTaskData
    await page.locator("(//li[text()='SplitTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Cell Style from the dropdown
    await page.locator("(//li[text()='Cell Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-133/" + download.suggestedFilename();
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
        //Screenshot validation-cell should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-134-customizing taskbar in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown SplitTaskData
    await page.locator("(//li[text()='SplitTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Taskbar Style from the dropdown
    await page.locator("(//li[text()='Taskbar Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-134/" + download.suggestedFilename();
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
        //Screenshot validation-taskbar should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-135-customizing labels in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown SplitTaskData
    await page.locator("(//li[text()='SplitTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Label Style from the dropdown
    await page.locator("(//li[text()='Label Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport ')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-135/" + download.suggestedFilename();
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
        //Screenshot validation-Label should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-136-customizing timeline in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown SplitTaskData
    await page.locator("(//li[text()='SplitTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Timeline Style from the dropdown
    await page.locator("(//li[text()='Timeline Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-136/" + download.suggestedFilename();
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
        //Screenshot validation-timeline should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-138-customizing holidays in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown SplitTaskData
    await page.locator("(//li[text()='SplitTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Holiday Style from the dropdown
    await page.locator("(//li[text()='Holiday Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-138/" + download.suggestedFilename();
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
        //Screenshot validation-Holiday should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//TrueTypeData
test('PDFET-139-eventmarkers in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TrueTypeData
    await page.locator("(//li[text()='TrueTypeData'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-139/" + download.suggestedFilename();
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
        //Screenshot validation-event marker should rendered properly
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-140-disable footer in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TrueTypeData
    await page.locator("(//li[text()='TrueTypeData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Disable Footer from the dropdown
    await page.locator("(//li[text()='Disable Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-140/" + download.suggestedFilename();
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
        //Screenshot validation-Footer should not render
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-141', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TrueTypeData
    await page.locator("(//li[text()='TrueTypeData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Export Type - Current View from the dropdown
    await page.locator("(//li[text()='Export Type - Current View'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-141/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-142-exportType as alldata in export properties', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TrueTypeData
    await page.locator("(//li[text()='TrueTypeData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Export Type - All Data from the dropdown
    await page.locator("(//li[text()='Export Type - All Data'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-142/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-143-header in export properties in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TrueTypeData
    await page.locator("(//li[text()='TrueTypeData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Header from the dropdown
    await page.locator("(//li[text()='Header'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-143/" + download.suggestedFilename();
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
        //Screenshot validation-header should customized in exported pdf
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-144-footer in export properties in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TrueTypeData
    await page.locator("(//li[text()='TrueTypeData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Footer from the dropdown
    await page.locator("(//li[text()='Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-144/" + download.suggestedFilename();
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
        //Screenshot validation-footer should customized in exported pdf
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-145-customizing cell in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TrueTypeData
    await page.locator("(//li[text()='TrueTypeData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Cell Style from the dropdown
    await page.locator("(//li[text()='Cell Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-145/" + download.suggestedFilename();
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
        //Screenshot validation-cell should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-146-customizing taskbar in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TrueTypeData
    await page.locator("(//li[text()='TrueTypeData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Taskbar Style from the dropdown
    await page.locator("(//li[text()='Taskbar Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-146/" + download.suggestedFilename();
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
        //Screenshot validation-taskbar should be customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-147-customizing labels in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TrueTypeData
    await page.locator("(//li[text()='TrueTypeData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Label Style from the dropdown
    await page.locator("(//li[text()='Label Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-147/" + download.suggestedFilename();
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
        //Screenshot validation-taskbar should be customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-148-customizing timeline in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TrueTypeData
    await page.locator("(//li[text()='TrueTypeData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Timeline Style from the dropdown
    await page.locator("(//li[text()='Timeline Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-148/" + download.suggestedFilename();
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
        //Screenshot validation-timeline should be customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-149-customizing footer in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TrueTypeData
    await page.locator("(//li[text()='TrueTypeData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Footer from the dropdown
    await page.locator("(//li[text()='Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-149/" + download.suggestedFilename();
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
        //Screenshot validation-footer should be customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-150-customizing holidays in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TrueTypeData
    await page.locator("(//li[text()='TrueTypeData'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Holiday Style from the dropdown
    await page.locator("(//li[text()='Holiday Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-150/" + download.suggestedFilename();
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
        //Screenshot validation-holidays should be customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//ManualTaskMode
test('PDFET-151-eventmarkers in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ManualTaskMode
    await page.locator("(//li[text()='ManualTaskMode'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-151/" + download.suggestedFilename();
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
        //Screenshot validation-event marker should rendered properly
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-152-disable footer in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ManualTaskMode
    await page.locator("(//li[text()='ManualTaskMode'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Disable Footer from the dropdown
    await page.locator("(//li[text()='Holiday Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-152/" + download.suggestedFilename();
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
        //Screenshot validation-footer should not render
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-153', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ManualTaskMode
    await page.locator("(//li[text()='ManualTaskMode'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Export Type - Current View from the dropdown
    await page.locator("(//li[text()='Export Type - Current View'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-153/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-154-exportType as alldata in export properties', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ManualTaskMode
    await page.locator("(//li[text()='ManualTaskMode'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Export Type - All Data from the dropdown
    await page.locator("(//li[text()='Export Type - All Data'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-154/" + download.suggestedFilename();
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
        //Screenshot validation-datas should export based on export type
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-155-header in export properties in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ManualTaskMode
    await page.locator("(//li[text()='ManualTaskMode'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Header from the dropdown
    await page.locator("(//li[text()='Header'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-155/" + download.suggestedFilename();
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
        //Screenshot validation-header should customized in exported pdf
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-156-footer in export properties in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ManualTaskMode
    await page.locator("(//li[text()='ManualTaskMode'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Footer from the dropdown
    await page.locator("(//li[text()='Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-156/" + download.suggestedFilename();
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
        //Screenshot validation-footer should customized in exported pdf
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-157-customizing cell in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ManualTaskMode
    await page.locator("(//li[text()='ManualTaskMode'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Cell Style from the dropdown
    await page.locator("(//li[text()='Cell Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-157/" + download.suggestedFilename();
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
        //Screenshot validation-cell should customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-158-customizing taskbar in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ManualTaskMode
    await page.locator("(//li[text()='ManualTaskMode'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Taskbar Style from the dropdown
    await page.locator("(//li[text()='Taskbar Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-158/" + download.suggestedFilename();
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
        //Screenshot validation-taskbar should be customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-159-customizing labels in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ManualTaskMode
    await page.locator("(//li[text()='ManualTaskMode'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Label Style from the dropdown
    await page.locator("(//li[text()='Label Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-159/" + download.suggestedFilename();
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
        //Screenshot validation-taskbar should be customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-160-customizing timeline in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ManualTaskMode
    await page.locator("(//li[text()='ManualTaskMode'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Timeline Style from the dropdown
    await page.locator("(//li[text()='Timeline Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-160/" + download.suggestedFilename();
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
        //Screenshot validation-timeline should be customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-161-customizing footer in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ManualTaskMode
    await page.locator("(//li[text()='ManualTaskMode'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Footer from the dropdown
    await page.locator("(//li[text()='Footer'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-161/" + download.suggestedFilename();
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
        //Screenshot validation-footer should be customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-162-customizing holidays in exported pdf', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/customization');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/customization' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown ManualTaskMode
    await page.locator("(//li[text()='ManualTaskMode'])[1]").click();
    await page.waitForTimeout(500);
    //Click to select the Export Type dropdown
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Holiday Style from the dropdown
    await page.locator("(//li[text()='Holiday Style'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-162/" + download.suggestedFilename();
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
        //Screenshot validation-holidays should be customized
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//pdf/theme
test('PDFET-163-custom range export in PdfExportData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown PdfExportData
    await page.locator("(//li[text()='PdfExportData'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-163/" + download.suggestedFilename();
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
        //Screenshot validation-exported range should be custom
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-164-theme - fluent in PdfExportData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown PdfExportData
    await page.locator("(//li[text()='PdfExportData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Theme Fluent from the dropdown
    await page.locator("(//li[text()='theme-Fluent'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-164/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be fluent
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-165-theme - fluent in PdfExportData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown PdfExportData
    await page.locator("(//li[text()='PdfExportData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Theme Bootstrap from the dropdown
    await page.locator("(//li[text()='theme-Bootstrap'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-165/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Bootstrap
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-166-theme - material3 in PdfExportData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown PdfExportData
    await page.locator("(//li[text()='PdfExportData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Theme Material3 from the dropdown
    await page.locator("(//li[text()='theme-Material3'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-166/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be material 3
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-167-theme - fabric in PdfExportData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown PdfExportData
    await page.locator("(//li[text()='PdfExportData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Theme Fabric from the dropdown
    await page.locator("(//li[text()='theme-Fabric'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-167/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be fabric
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-168-theme - bootstrap4 in PdfExportData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown PdfExportData
    await page.locator("(//li[text()='PdfExportData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select Theme Bootsrap4 from the dropdown
    await page.locator("(//li[text()='theme-Bootstrap4'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-168/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Bootstrap 4
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-169-label template in PdfExportData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown PdfExportData
    await page.locator("(//li[text()='PdfExportData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select label template from the dropdown
    await page.locator("(//li[text()='label-Template'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-169/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-labels should be exported using template
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//The button was not disabled when check the PDF Export

// test('PDFET-170-cancel export in PdfExportData', async ({ page }, testInfo) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/pdf/theme');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
//     await page.waitForTimeout(2000);
//     //Custom Data Source
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //select from the dropdown PdfExportData
//     await page.locator("(//li[text()='PdfExportData'])[1]").click();
//     await page.waitForTimeout(500);
//     //Custom Data Source
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //select Cancel pdf from the dropdown
//     await page.locator("(//li[text()='pdf-cancel'])[1]").click();
//     await page.waitForTimeout(500);
//         await page.locator("(//button[@aria-label='PDF Export'])").click()
//         //Screenshot validation-
//           expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//         });
        
test('PDFET-171-custom range export in EventMarkersData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkersData
    await page.locator("(//li[text()='EventMarkersData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select customRangeExport from the dropdown
    await page.locator("(//li[text()='customRangeExport'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-171/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-exported range should be custom
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-172-theme - fluent in EventMarkersData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkersData
    await page.locator("(//li[text()='EventMarkersData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme- fluent from the dropdown
    await page.locator("(//li[text()='theme-Fluent'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-172/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be fluent
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-173-theme - bootstrap in EventMarkersData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkersData
    await page.locator("(//li[text()='EventMarkersData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-Bootstrap from the dropdown
    await page.locator("(//li[text()='theme-Bootstrap'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-173/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be bootstrap
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-174-theme - material3 in EventMarkersData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkersData
    await page.locator("(//li[text()='EventMarkersData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-material 3 from the dropdown
    await page.locator("(//li[text()='theme-Material3'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-174/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be material 3
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-175-theme - Fabric in EventMarkersData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkersData
    await page.locator("(//li[text()='EventMarkersData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-material 3 from the dropdown
    await page.locator("(//li[text()='theme-Fabric'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-175/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Fabric
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-176-theme-Bootstrap4  in EventMarkersData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkersData
    await page.locator("(//li[text()='EventMarkersData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-Bootstrap4  from the dropdown
    await page.locator("(//li[text()='theme-Bootstrap4'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-176/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be theme-Bootstrap4 
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-177-theme - label-Template in EventMarkersData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkersData
    await page.locator("(//li[text()='EventMarkersData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select label-Template  from the dropdown
    await page.locator("(//li[text()='label-Template'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-177/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be label-Template 
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Cancel issue
// test('PDFET-178-cancel export in EventMarkersData', async ({ page }, testInfo) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/pdf/theme');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
//     await page.waitForTimeout(2000);
//     //Custom Data Source
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //select from the dropdown EventMarkersData
//     await page.locator("(//li[text()='EventMarkersData'])[1]").click();
//     await page.waitForTimeout(500);
//     //Custom Data Source
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //select pdf cancel  from the dropdown
//     await page.locator("(//li[text()='pdf-cancel'])[1]").click();
//     await page.waitForTimeout(500);
//     const [download] = await Promise.all([page.waitForEvent('download'),
//     await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
//     await page.waitForTimeout(1000);
//     // Define the Actual Export File Path with proper name           
//     const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-178/" + download.suggestedFilename();
//     await download.saveAs(path);
//     await page.waitForTimeout(500);
//     attach the downloaded file to the report ( This is the playwright event to download the File)       
//     await testInfo.attach('downloaded', { path: path });
//     await page.waitForTimeout(1500);
//     //The "pdf" here is the package that converts the file to PNG format 
//     const doc = await pdf(path)
//     await page.waitForTimeout(500);
//     expect(doc.length).toBe(1);
//     //Converts the 1 pages to image format and takes snapshot     
//     for await (const page of doc) {
//         //Screenshot validation-pdf export should be cancelled
//         await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
//     }
// });

//TaskIndicatorsData
test('PDFET-179-custom range export in TaskIndicatorsData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkersData
    await page.locator("(//li[text()='EventMarkersData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select custom range from the dropdown
    await page.locator("(//li[text()='customRangeExport'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-179/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-exported range should be custom 
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-180-theme - fluent in TaskIndicatorsData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkersData
    await page.locator("(//li[text()='EventMarkersData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-fluent from the dropdown
    await page.locator("(//li[text()='theme-Fluent'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-180/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be fluent
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-181-theme - bootstrap in TaskIndicatorsData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkersData
    await page.locator("(//li[text()='EventMarkersData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-Bootstrap from the dropdown
    await page.locator("(//li[text()='theme-Bootstrap'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-181/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Bootstrap
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-182-theme - material3 in TaskIndicatorsData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkersData
    await page.locator("(//li[text()='EventMarkersData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-material 3 from the dropdown
    await page.locator("(//li[text()='theme-Material3'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-182/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Material 3
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-183-theme - fabric in TaskIndicatorsData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkersData
    await page.locator("(//li[text()='EventMarkersData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-material 3 from the dropdown
    await page.locator("(//li[text()='theme-Fabric'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-183/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Fabric
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-184-theme - bootstrap4 in TaskIndicatorsData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkersData
    await page.locator("(//li[text()='EventMarkersData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme Bootstrap from the dropdown
    await page.locator("(//li[text()='theme-Bootstrap4'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-184/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Bootstrap4
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-185-label template in TaskIndicatorsData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkersData
    await page.locator("(//li[text()='EventMarkersData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select label template from the dropdown
    await page.locator("(//li[text()='label-Template'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-185/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-labels should be exported using template
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//The cancel has an issue 
// test('PDFET-186-cancel export in TaskIndicatorsData', async ({ page }, testInfo) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/pdf/theme');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
//     await page.waitForTimeout(2000);
//     //Custom Data Source
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //select from the dropdown EventMarkersData
//     await page.locator("(//li[text()='EventMarkersData'])[1]").click();
//     await page.waitForTimeout(500);
//     //Custom Data Source
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //select pdf-cancel from the dropdown
//     await page.locator("(//li[text()='pdf-cancel'])[1]").click();
//     await page.waitForTimeout(500);
//     const [download] = await Promise.all([page.waitForEvent('download'),
//     await page.locator("(//span[text()='PdfExport'])[1]").click()]);
//     await page.waitForTimeout(1000);
//     // Define the Actual Export File Path with proper name           
//     const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-186/" + download.suggestedFilename();
//     await download.saveAs(path);
//     await page.waitForTimeout(500);
//     // attach the downloaded file to the report ( This is the playwright event to download the File)       
//     await testInfo.attach('downloaded', { path: path });
//     await page.waitForTimeout(1500);
//     //The "pdf" here is the package that converts the file to PNG format 
//     const doc = await pdf(path)
//     await page.waitForTimeout(500);
//     expect(doc.length).toBe(1);
//     //Converts the 1 pages to image format and takes snapshot     
//     for await (const page of doc) {
//         //Screenshot validation-pdf export should be cancelled
//         await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
//     }
// });

//TaskIndicatorsWithHtmlName
test('PDFET-187', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskIndicatorsWithHtmlName
    await page.locator("(//li[text()='TaskIndicatorsWithHtmlName'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select custom range from the dropdown
    await page.locator("(//li[text()='customRangeExport'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-187/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-exported range should be custom 
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-188-theme - fluent in TaskIndicatorsWithHtmlName', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskIndicatorsWithHtmlName
    await page.locator("(//li[text()='TaskIndicatorsWithHtmlName'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-fluent from the dropdown
    await page.locator("(//li[text()='theme-Fluent'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-188/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be fluent
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-189-theme - bootstrap in TaskIndicatorsWithHtmlName', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskIndicatorsWithHtmlName
    await page.locator("(//li[text()='TaskIndicatorsWithHtmlName'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-Bootstrap from the dropdown
    await page.locator("(//li[text()='theme-Bootstrap'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-189/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Bootstrap
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-190-theme - material3 in TaskIndicatorsWithHtmlName', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown EventMarkersData
    await page.locator("(//li[text()='EventMarkersData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-material 3 from the dropdown
    await page.locator("(//li[text()='theme-Material3'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-190/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Material 3
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-191-theme - fabric in TaskIndicatorsWithHtmlName', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskIndicatorsWithHtmlName
    await page.locator("(//li[text()='TaskIndicatorsWithHtmlName'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-material 3 from the dropdown
    await page.locator("(//li[text()='theme-Fabric'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-191/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Fabric
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-192-theme - bootstrap4 in TaskIndicatorsWithHtmlName', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskIndicatorsWithHtmlName
    await page.locator("(//li[text()='TaskIndicatorsWithHtmlName'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme Bootstrap from the dropdown
    await page.locator("(//li[text()='theme-Bootstrap4'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-192/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Bootstrap4
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-193-label template in TaskIndicatorsWithHtmlName', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskIndicatorsWithHtmlName
    await page.locator("(//li[text()='TaskIndicatorsWithHtmlName'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select label template from the dropdown
    await page.locator("(//li[text()='label-Template'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-193/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-labels should be exported using template
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//The cancel has an issue 
// test('PDFET-194-cancel export in TaskIndicatorsWithHtmlName', async ({ page }, testInfo) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/pdf/theme');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
//     await page.waitForTimeout(2000);
//     //Custom Data Source
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //select from the dropdown TaskIndicatorsWithHtmlName
//     await page.locator("(//li[text()='TaskIndicatorsWithHtmlName'])[1]").click();
//     await page.waitForTimeout(500);
//     //Custom Data Source
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //select pdf-cancel from the dropdown
//     await page.locator("(//li[text()='pdf-cancel'])[1]").click();
//     await page.waitForTimeout(500);
//     const [download] = await Promise.all([page.waitForEvent('download'),
//     await page.locator("(//span[text()='PdfExport'])[1]").click()]);
//     await page.waitForTimeout(1000);
//     // Define the Actual Export File Path with proper name           
//     const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-194/" + download.suggestedFilename();
//     await download.saveAs(path);
//     await page.waitForTimeout(500);
//     // attach the downloaded file to the report ( This is the playwright event to download the File)       
//     await testInfo.attach('downloaded', { path: path });
//     await page.waitForTimeout(1500);
//     //The "pdf" here is the package that converts the file to PNG format 
//     const doc = await pdf(path)
//     await page.waitForTimeout(500);
//     expect(doc.length).toBe(1);
//     //Converts the 1 pages to image format and takes snapshot     
//     for await (const page of doc) {
//         //Screenshot validation-pdf export should be cancelled
//         await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
//     }
// });

//TaskIndicatorsWithDifferentDate
test('PDFET-195', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskIndicatorsWithDifferentDate
    await page.locator("(//li[text()='TaskIndicatorsWithDifferentDate'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select custom range from the dropdown
    await page.locator("(//li[text()='customRangeExport'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-195/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-exported range should be custom 
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-196', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskIndicatorsWithDifferentDate
    await page.locator("(//li[text()='TaskIndicatorsWithDifferentDate'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-fluent from the dropdown
    await page.locator("(//li[text()='theme-Fluent'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-196/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be fluent
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-197', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskIndicatorsWithDifferentDate
    await page.locator("(//li[text()='TaskIndicatorsWithDifferentDate'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-Bootstrap from the dropdown
    await page.locator("(//li[text()='theme-Bootstrap'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-197/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Bootstrap
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-198', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskIndicatorsWithDifferentDate
    await page.locator("(//li[text()='TaskIndicatorsWithDifferentDate'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-material 3 from the dropdown
    await page.locator("(//li[text()='theme-Material3'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-198/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Material 3
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-199', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskIndicatorsWithDifferentDate
    await page.locator("(//li[text()='TaskIndicatorsWithDifferentDate'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-material 3 from the dropdown
    await page.locator("(//li[text()='theme-Fabric'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-199/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Fabric
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-200', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskIndicatorsWithDifferentDate
    await page.locator("(//li[text()='TaskIndicatorsWithDifferentDate'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme Bootstrap from the dropdown
    await page.locator("(//li[text()='theme-Bootstrap4'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-200/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Bootstrap4
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-201', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskIndicatorsWithDifferentDate
    await page.locator("(//li[text()='TaskIndicatorsWithDifferentDate'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select label template from the dropdown
    await page.locator("(//li[text()='label-Template'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-201/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-labels should be exported using template
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//The cancel has an issue 
// test('PDFET-202-cancel export in TaskIndicatorsWithDifferentDate', async ({ page }, testInfo) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/pdf/theme');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
//     await page.waitForTimeout(2000);
//     //Custom Data Source
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //select from the dropdown TaskIndicatorsWithDifferentDate
//     await page.locator("(//li[text()='TaskIndicatorsWithDifferentDate'])[1]").click();
//     await page.waitForTimeout(500);
//     //Custom Data Source
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //select pdf-cancel from the dropdown
//     await page.locator("(//li[text()='pdf-cancel'])[1]").click();
//     await page.waitForTimeout(500);
//     const [download] = await Promise.all([page.waitForEvent('download'),
//     await page.locator("(//span[text()='PdfExport'])[1]").click()]);
//     await page.waitForTimeout(1000);
//     // Define the Actual Export File Path with proper name           
//     const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-202/" + download.suggestedFilename();
//     await download.saveAs(path);
//     await page.waitForTimeout(500);
//     // attach the downloaded file to the report ( This is the playwright event to download the File)       
//     await testInfo.attach('downloaded', { path: path });
//     await page.waitForTimeout(1500);
//     //The "pdf" here is the package that converts the file to PNG format 
//     const doc = await pdf(path)
//     await page.waitForTimeout(500);
//     expect(doc.length).toBe(1);
//     //Converts the 1 pages to image format and takes snapshot     
//     for await (const page of doc) {
//         //Screenshot validation-pdf export should be cancelled
//         await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
//     }
// });

//TaskAndProjectIndicatorsData
test('PDFET-203', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskAndProjectIndicatorsData
    await page.locator("(//li[text()='TaskAndProjectIndicatorsData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select custom range from the dropdown
    await page.locator("(//li[text()='customRangeExport'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-203/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-exported range should be custom 
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-204-theme - fluent in TaskAndProjectIndicatorsData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskAndProjectIndicatorsData
    await page.locator("(//li[text()='TaskAndProjectIndicatorsData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-fluent from the dropdown
    await page.locator("(//li[text()='theme-Fluent'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-204/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be fluent
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-205', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskAndProjectIndicatorsData
    await page.locator("(//li[text()='TaskAndProjectIndicatorsData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-Bootstrap from the dropdown
    await page.locator("(//li[text()='theme-Bootstrap'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-205/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Bootstrap
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-206', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskAndProjectIndicatorsData
    await page.locator("(//li[text()='TaskAndProjectIndicatorsData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-material 3 from the dropdown
    await page.locator("(//li[text()='theme-Material3'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-206/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Material 3
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-207', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskAndProjectIndicatorsData
    await page.locator("(//li[text()='TaskAndProjectIndicatorsData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-material 3 from the dropdown
    await page.locator("(//li[text()='theme-Fabric'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-207/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Fabric
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-208', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskAndProjectIndicatorsData
    await page.locator("(//li[text()='TaskAndProjectIndicatorsData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme Bootstrap from the dropdown
    await page.locator("(//li[text()='theme-Bootstrap4'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-208/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Bootstrap4
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-209-label template in TaskAndProjectIndicatorsData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown TaskAndProjectIndicatorsData
    await page.locator("(//li[text()='TaskAndProjectIndicatorsData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select label template from the dropdown
    await page.locator("(//li[text()='label-Template'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-209/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-labels should be exported using template
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//The cancel has an issue 
// test('PDFET-210-cancel export in TaskAndProjectIndicatorsData', async ({ page }, testInfo) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/pdf/theme');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
//     await page.waitForTimeout(2000);
//     //Custom Data Source
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //select from the dropdown TaskAndProjectIndicatorsData
//     await page.locator("(//li[text()='TaskAndProjectIndicatorsData'])[1]").click();
//     await page.waitForTimeout(500);
//     //Custom Data Source
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
//     await page.waitForTimeout(500);
//     //select pdf-cancel from the dropdown
//     await page.locator("(//li[text()='pdf-cancel'])[1]").click();
//     await page.waitForTimeout(500);
//     const [download] = await Promise.all([page.waitForEvent('download'),
//     await page.locator("(//span[text()='PdfExport'])[1]").click()]);
//     await page.waitForTimeout(1000);
//     // Define the Actual Export File Path with proper name           
//     const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-210/" + download.suggestedFilename();
//     await download.saveAs(path);
//     await page.waitForTimeout(500);
//     // attach the downloaded file to the report ( This is the playwright event to download the File)       
//     await testInfo.attach('downloaded', { path: path });
//     await page.waitForTimeout(1500);
//     //The "pdf" here is the package that converts the file to PNG format 
//     const doc = await pdf(path)
//     await page.waitForTimeout(500);
//     expect(doc.length).toBe(1);
//     //Converts the 1 pages to image format and takes snapshot     
//     for await (const page of doc) {
//         //Screenshot validation-pdf export should be cancelled
//         await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
//     }
// });

//NewProjectTaskData
test('PDFET-211-custom range export in NewProjectTaskData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown NewProjectTaskData
    await page.locator("(//li[text()='NewProjectTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select custom range from the dropdown
    await page.locator("(//li[text()='customRangeExport'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-211/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-exported range should be custom 
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-212-theme - fluent in NewProjectTaskData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown NewProjectTaskData
    await page.locator("(//li[text()='NewProjectTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-fluent from the dropdown
    await page.locator("(//li[text()='theme-Fluent'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-212/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be fluent
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-213-theme - bootstrap in NewProjectTaskData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown NewProjectTaskData
    await page.locator("(//li[text()='NewProjectTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-Bootstrap from the dropdown
    await page.locator("(//li[text()='theme-Bootstrap'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-213/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Bootstrap
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-214-theme - material3 in NewProjectTaskData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown NewProjectTaskData
    await page.locator("(//li[text()='NewProjectTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-material 3 from the dropdown
    await page.locator("(//li[text()='theme-Material3'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-215/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Material 3
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-215-theme - fabric in NewProjectTaskData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown NewProjectTaskData
    await page.locator("(//li[text()='NewProjectTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme-material 3 from the dropdown
    await page.locator("(//li[text()='theme-Fabric'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-215/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Fabric
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-216-theme - bootstrap4 in NewProjectTaskData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown NewProjectTaskData
    await page.locator("(//li[text()='NewProjectTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select theme Bootstrap from the dropdown
    await page.locator("(//li[text()='theme-Bootstrap4'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-216/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-theme should be Bootstrap4
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-217-label template in NewProjectTaskData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown NewProjectTaskData
    await page.locator("(//li[text()='NewProjectTaskData'])[1]").click();
    await page.waitForTimeout(500);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[2]").click();
    await page.waitForTimeout(500);
    //select label template from the dropdown
    await page.locator("(//li[text()='label-Template'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-217/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-labels should be exported using template
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

// test('PDFET-218-cancel export in NewProjectTaskData', async ({ page }, testInfo) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto('http://localhost:5004/pdf/theme');
//     test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
//     await page.waitForTimeout(2000);
//     //Custom Data Source
//     await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//     await page.waitForTimeout(500);
//     //select from the dropdown NewProjectTaskData
//     await page.locator("(//li[text()='NewProjectTaskData'])[1]").click();
//     await page.waitForTimeout(500);
//     const [download] = await Promise.all([page.waitForEvent('download'),
//     await page.locator("(//span[text()='PdfExport'])[1]").click()]);
//     await page.waitForTimeout(1000);
//     // Define the Actual Export File Path with proper name           
//     const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-218/" + download.suggestedFilename();
//     await download.saveAs(path);
//     await page.waitForTimeout(500);
//     // attach the downloaded file to the report ( This is the playwright event to download the File)       
//     await testInfo.attach('downloaded', { path: path });
//     await page.waitForTimeout(1500);
//     //The "pdf" here is the package that converts the file to PNG format 
//     const doc = await pdf(path)
//     await page.waitForTimeout(500);
//     expect(doc.length).toBe(1);
//     //Converts the 1 pages to image format and takes snapshot     
//     for await (const page of doc) {
//         //Screenshot validation-pdf export should export localization text.
//         await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
//     }
// });

test('PDFET-219-localization export in LoclizationData', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/theme');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/theme' });
    await page.waitForTimeout(2000);
    //Custom Data Source
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select from the dropdown LoclizationData
    await page.locator("(//li[text()='LoclizationData'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//span[text()='PdfExport'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-219/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-pdf export should export localization text.
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

//Pdf-data-binding
test('PDFET-220', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/data-binding');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/data-binding' });
    await page.waitForTimeout(2000);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-220/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-Verify that PDF export is successful and contains correct 'int' data
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-221', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/data-binding');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/data-binding' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select Object
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select Object
    await page.locator("(//li[text()='object'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-221/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-Verify that PDF export is successful and contains correct 'object' data
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-222', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/data-binding');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/data-binding' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select Object
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select string
    await page.locator("(//li[text()='string'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-222/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-Verify that PDF export is successful and contains correct 'string' data
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-223', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/data-binding');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/data-binding' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select Object
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select guid
    await page.locator("(//li[text()='guid'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-223/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-Verify that PDF export is successful and contains correct 'guid' data
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-224', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/data-binding');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/data-binding' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select Object
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select expando
    await page.locator("(//li[text()='expando'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-224/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-Verify that PDF export is successful and contains correct 'expando' data
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-225', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/data-binding');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/data-binding' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select Object
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select dynamic object
    await page.locator("(//li[text()='dynamic object'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-225/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-Verify that PDF export is successful and contains correct 'dynamic object' data
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-226', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/data-binding');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/data-binding' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select Object
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select custom adaptor
    await page.locator("(//li[text()='custom adaptor'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-226/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-Verify that PDF export is successful and contains correct 'custom adaptor' data
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});

test('PDFET-227', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/pdf/data-binding');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/data-binding' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select Object
    await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
    await page.waitForTimeout(500);
    //select rtl
    await page.locator("(//li[text()='rtl'])[1]").click();
    await page.waitForTimeout(500);
    const [download] = await Promise.all([page.waitForEvent('download'),
    await page.locator("(//button[text()='Pdf Export'])[1]").click()]);
    await page.waitForTimeout(1000);
    // Define the Actual Export File Path with proper name           
    const path = "./tests/FeatureCoverage/PdfExportFiles/PDFET-227/" + download.suggestedFilename();
    await download.saveAs(path);
    await page.waitForTimeout(500);
    // attach the downloaded file to the report ( This is the playwright event to download the File)       
    await testInfo.attach('downloaded', { path: path });
    await page.waitForTimeout(1500);
    //The "pdf" here is the package that converts the file to PNG format 
    const doc = await pdf(path)
    await page.waitForTimeout(500);
    expect(doc.length).toBe(1);
    //Converts the 1 pages to image format and takes snapshot     
    for await (const page of doc) {
        //Screenshot validation-Verify that PDF export is successful and contains correct 'rtl' data
        await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
    }
});