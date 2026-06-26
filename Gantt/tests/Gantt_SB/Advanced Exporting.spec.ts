import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
import { pdf } from 'pdf-to-img';

test.use({
  launchOptions: {
    ignoreDefaultArgs: [], // Disable the scrollbar argument
  },
});

async function clearPdfFooter(page: any) {
  const footerInput = page.locator("input[placeholder='Footer']").or(page.locator("input[name='footer']")).or(page.locator(".e-footer input")).first();
  if (await footerInput.count() > 0) {
    await footerInput.fill('');
    await page.waitForTimeout(250);
  }
}

// test('1- Pdf Export', async ({ page }, testInfo) => {
//     await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
//     await page.waitForTimeout(2000);
//     // Press the button to download the PDF files    
//     const [download] = await Promise.all([page.waitForEvent('download'),
//     await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click()]);
//     await page.waitForTimeout(500);
//     // Define the Actual Export File Path with proper name           
//     const path = "./tests/Gantt_SB/Advanced Exporting/PDFExportFiles/PDF/" + download.suggestedFilename();
//     await download.saveAs(path);
//     await page.waitForTimeout(500);
//     // attach the downloaded file to the report ( This is the playwright event to download the File)       
//     await testInfo.attach('downloaded', { path: path });
//     await page.waitForTimeout(1500);
//     //The "pdf" here is the package that converts the file to PNG format 
//     const doc = await pdf(path);
//     await page.waitForTimeout(500);
//     expect(doc.length).toBe(1);
//     //Converts pages to image format and takes snapshot     
//     for await (const page of doc) {
//     expect(page).toMatchSnapshot('ProductDevelopmentReport.png', { maxDiffPixels: 100 });
//     }
// }); 

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903955
test('1-Console error on initial load', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  await page.waitForTimeout(2500);
  //Screenshot validation-Console error is not thrown and sample loads proper
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test.fixme('2-Pdf Export', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//    await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
//    await page.waitForTimeout(3000);
//     // Press the button to download the PDF files    
//     const [download] = await Promise.all([page.waitForEvent('download'),
//     await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click()]);
//     await page.waitForTimeout(500);
//     // Define the Actual Export File Path with proper name           
//     const path = "./tests/Gantt_SB/Advanced Exporting/PDFExportFiles5/PDF5/" + download.suggestedFilename();
//     await download.saveAs(path);
//     await page.waitForTimeout(500);
//     // attach the downloaded file to the report ( This is the playwright event to download the File)       
//     await testInfo.attach('downloaded', { path: path });
//     await page.waitForTimeout(1500);
//     //The "pdf" here is the package that converts the file to PNG format 
//     const doc = await pdf(path);
//     await page.waitForTimeout(500);
//     expect(doc.length).toBe(1);
//     //Converts pages to image format and takes snapshot     
//     for await (const page of doc) {
//     expect(page).toMatchSnapshot('PdfExportImage.png', { maxDiffPixels: 100 });
//     }
// }); 

test('2-Load the sample', async ({ page },) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  // Clear the footer field to remove the date from PDF export
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()]);
  await page.waitForTimeout(1000);
  // Define the Actual Export File Path with proper name         
  const path = "./tests/Gantt_SB/Advanced Exporting/2-Load/PDF/" + download.suggestedFilename();
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

test('3-Add Range under columns', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the Timeline Range
  await page.locator("(//span[contains(@class,'input')])[1]").click();
  await page.waitForTimeout(500);
  // select Range from the dropdown
  await page.locator("(//li[text()='Range'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/3-RangeExport/" + download.suggestedFilename();
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

test('4-Single Page', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the Export Time to Single Page
  await page.locator("(//span[contains(@class,'input')])[2]").click();
  await page.waitForTimeout(1000);
  // select Single Page from the dropdown
  await page.locator("(//li[text()='Single Page'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/4-SinglePage/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(1);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('5-Adjust To decremnent', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the Timeline Range
  await page.locator("(//span[contains(@class,'input')])[3]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/5-AdjustToDecrement/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(10);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('6-Adjust To Incremnent', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the Adjust To
  await page.locator("(//span[contains(@class,'input')])[4]").click();
  await page.waitForTimeout(2000);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(2000);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/6-AdjustToIncrement/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(12);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('7-Orientation Landscape', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the Orientation to select Landscape
  await page.locator("(//span[contains(@class,'input')])[5]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/7-Orientation Landscape/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(16);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('8-Letter Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select Letter from the dropdown
  await page.locator("(//li[text()='Letter'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/8-Letter Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(10);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('9-Note Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size Note
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select Note from the dropdown
  await page.locator("(//li[text()='Note'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/9-Note Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(18);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('10-Legal Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size Legal
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select Legal from the dropdown
  await page.locator("(//li[text()='Legal'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/10-Legal Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(10);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('11-A0 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size A0
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select A1 from the dropdown
  await page.locator("(//li[text()='A0'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/11-A0 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(2);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('12-A1 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size A1
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select A1 from the dropdown
  await page.locator("(//li[text()='A1'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/12-A1 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(2);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('13-A2 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size A2
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select AO from the dropdown
  await page.locator("(//li[text()='A2'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/13-A2 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(3);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('14-A3 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size A3
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select AO from the dropdown
  await page.locator("(//li[text()='A3'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/14-A3 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(4);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('15-A4 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size A4
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select AO from the dropdown
  await page.locator("(//li[text()='A4'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/15-A4 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(10);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('16-A5 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size A5
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select A5 from the dropdown
  await page.locator("(//li[text()='A5'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/16-A5 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(32);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('17-A6 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size A6
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select A6 from the dropdown
  await page.locator("(//li[text()='A6'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/17-A6 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(144);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('18-A7 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size A7
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select A7 from the dropdown
  await page.locator("(//li[text()='A7'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/18-A7 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(550);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('19-A8 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size A8
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select A8 from the dropdown
  await page.locator("(//li[text()='A8'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/19-A8 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(100);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('20-A9 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size A9
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select AO from the dropdown
  await page.locator("(//li[text()='A9'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/20-A9 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(100);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('21-B0 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size B0
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select AO from the dropdown
  await page.locator("(//li[text()='B0'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/21-B0 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(1);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('22-B1 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size B1
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select AO from the dropdown
  await page.locator("(//li[text()='B1'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/22-B1 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(2);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('23-B2 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size B2
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select AO from the dropdown
  await page.locator("(//li[text()='B2'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/23-B2 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(2);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('24-B3 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size B3
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select AO from the dropdown
  await page.locator("(//li[text()='B3'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/24-B3 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(3);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('25-B4 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size B4
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select B4 from the dropdown
  await page.locator("(//li[text()='B4'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/25-B4 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(8);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('27-B5 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size B5
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select AO from the dropdown
  await page.locator("(//li[text()='B5'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/27-B5 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(18);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('28-Archa Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size Archa
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select Archa from the dropdown
  await page.locator("(//li[text()='Archa'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/28-Archa Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(10);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('29-Archb Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size B5
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select Archb from the dropdown
  await page.locator("(//li[text()='Archb'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/29-Archb Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(4);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('30-Archc Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size Archc
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select AO from the dropdown
  await page.locator("(//li[text()='Archc'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/30-Archc Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(2);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('31-Archd Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size Archd
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select AO from the dropdown
  await page.locator("(//li[text()='Archd'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/31-Archd Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(2);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('32-Flsa Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size Flsa
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select Flsa from the dropdown
  await page.locator("(//li[text()='Flsa'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/32-Flsa Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(10);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('33-HalfLetter Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size HalfLetter
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select HalfLetter from the dropdown
  await page.locator("(//li[text()='HalfLetter'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/33-HalfLetter Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(24);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test("34-Letter11x17 Page Size", async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + "advanced-exporting?theme=fluent2");
  testInfo.annotations.push({
    type: "Sample link",
    description: "advanced-exporting?theme=fluent2",
  });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  // Click the page size dropdown (Letter11x17)
  await page
    .locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]")
    .click();
  await page.waitForTimeout(500);
  // Select Letter11x17 from dropdown
  await page.locator("(//li[text()='Letter11x17'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Download the PDF
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.locator("(//button[text()='Export'])[1]").click(),
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  const pdfPath =
    "./tests/Gantt_SB/Advanced Exporting/34-Letter11x17 Page Size/PDF/" +
    download.suggestedFilename();
  await download.saveAs(pdfPath);
  await page.waitForTimeout(500);
  // Attach the downloaded PDF to the report
  await testInfo.attach("downloaded-pdf", { path: pdfPath });
  await page.waitForTimeout(1500);
  // Convert PDF pages to PNG images
  const doc = await pdf(pdfPath);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(4);
  // Convert EACH page to snapshot with UNIQUE filename
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('35-Ledger Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the page size Ledger
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select Ledger from the dropdown
  await page.locator("(//li[text()='Ledger'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/35-Ledger Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(4);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('36-AO Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size AO
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select AO from the dropdown
  await page.locator("(//li[text()='A0'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/36-AO Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(1);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});


test('37-Landscape AO Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size AO
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select AO from the dropdown
  await page.locator("(//li[text()='A0'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/37-Landscape AO Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(1);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('38-Landscape A1 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size A1
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select A1/PDF/ from the dropdown
  await page.locator("(//li[text()='A1'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/38-Landscape A1 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(2);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('39-Landscape A2 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size A2
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select AO from the dropdown
  await page.locator("(//li[text()='A2'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/39-Landscape A2 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(2);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('40-Landscape A3 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size A3
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select A3from the dropdown
  await page.locator("(//li[text()='A3'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/40-Landscape A3 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(6);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('41-Landscape A4 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size A4
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select A4 from the dropdown
  await page.locator("(//li[text()='A4'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/41-Landscape A4 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(16);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('42-Landscape A5 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size A5
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select A4 from the dropdown
  await page.locator("(//li[text()='A5'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/42-Landscape A5 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(60);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('43-Landscape A6 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size A6
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select A6 from the dropdown
  await page.locator("(//li[text()='A6'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/43-Landscape A6 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(200);
  expect(doc.length).toBe(200);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('44-Landscape A7 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size A7
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select A7 from the dropdown
  await page.locator("(//li[text()='A7'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/44-Landscape A7 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(300);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('45-Landscape A8 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size A8
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select A8 from the dropdown
  await page.locator("(//li[text()='A8'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/45-Landscape A8 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(550);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('46-Landscape A9 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size A9
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select A9 from the dropdown
  await page.locator("(//li[text()='A9'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/46-Landscape A9 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(100);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('47-Landscape B0 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size B0
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select B0 from the dropdown
  await page.locator("(//li[text()='B0'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/47-Landscape B0 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(1);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('48-Landscape B1 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size B1
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select B1 from the dropdown
  await page.locator("(//li[text()='B1'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/48-Landscape B1 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(1);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('49-Landscape B2 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size B2
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select B2 from the dropdown
  await page.locator("(//li[text()='B2'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/49-Landscape B2 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(2);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('50-Landscape B3 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size B3
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select B3 from the dropdown
  await page.locator("(//li[text()='B3'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/50-Landscape B3 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(4);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('51-Landscape B4 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size B4
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select B4 from the dropdown
  await page.locator("(//li[text()='B4'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/51-Landscape B4 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(9);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('52-Landscape B5 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size B5
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select B5 from the dropdown
  await page.locator("(//li[text()='B5'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/52-Landscape B5 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(24);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('53-Landscape Archa Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size Archa
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select Archa from the dropdown
  await page.locator("(//li[text()='Archa'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/53-Landscape Archa Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(12);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('54-Landscape Archb Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size Archb
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select Archb from the dropdown
  await page.locator("(//li[text()='Archb'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/54-Landscape Archb Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(4);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('55-Landscape Archc Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size Archc
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  //select Archc from the dropdown
  await page.locator("(//li[text()='Archc'])[1]").click();
  await page.waitForTimeout(500);
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/55-Landscape Archc Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(2);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('56-Landscape Archd Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size Archd
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select Archc from the dropdown
  await page.locator("(//li[text()='Archd'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/56-Landscape Archd Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(1);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('57-Landscape Arche Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size Arche
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select Archc from the dropdown
  await page.locator("(//li[text()='Arche'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/57-Landscape Arche Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(1);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('58-Landscape Flsa Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size Flsa
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select Flsa from the dropdown
  await page.locator("(//li[text()='Flsa'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/58-Landscape Flsa Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(9);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('59-Landscape HalfLetter Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size HalfLetter
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select HalfLetter from the dropdown
  await page.locator("(//li[text()='HalfLetter'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/59-Landscape HalfLetter Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(60);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('60-Landscape Letter11x17 Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size Letter11x17
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select Archc from the dropdown
  await page.locator("(//li[text()='Letter11x17'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/60-Landscape Letter11x17 Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(6);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('61-Landscape Ledger Page Size', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the orientation to select Landscape
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
  await page.waitForTimeout(500);
  //select Landscape from the dropdown
  await page.locator("(//li[text()='Landscape'])[1]").click();
  await page.waitForTimeout(500);
  //Click the page size Ledger
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[4]").click();
  await page.waitForTimeout(500);
  //select Archc from the dropdown
  await page.locator("(//li[text()='Ledger'])[1]").click();
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//button[text()='Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Save downloaded file
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Advanced Exporting/61-Landscape Ledger Page Size/PDF/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  expect(doc.length).toBe(6);
  //Converts pages to image format and takes snapshot     
  for await (const page of doc) {
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

test('62-Cancel pdf Export', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //Click Cancel button in the Export dialog
  await page.locator("(//button[text()='Cancel'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Cancel pdf Export
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('63-Columns Indicated', async ({ page }) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'advanced-exporting?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'advanced-exporting?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Click the PDF Export button
  await page.locator("(//span[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(1000);
  //press ArrowDown to show the records in the dropdown
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(2000);
  //Screenshot validation-Columns Indicated
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

