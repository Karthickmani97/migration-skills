import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
  launchOptions: {
    ignoreDefaultArgs: [], // Disable the scrollbar argument
  },
});


test('1-Scheduling mode sample', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'scheduling-mode?theme=fluent');
  await page.waitForTimeout(1000);
  // Click on a specific cell to focus
  await page.locator('(//td[contains(@class,"e-rowcell")])[15]').click();
  await page.waitForTimeout(1000);
  // Validate the screenshot- Scheduling mode is displayed on the chart side of the component.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Work week sample', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'work-week?theme=fluent');
  await page.waitForTimeout(1000);
  // Click on a specific cell to focus
  await page.locator('(//td[contains(@class, "e-rowcell")])[30]').click();
  await page.waitForTimeout(1000);
  // Validate the screenshot- Work week is displayed on the chart side of the component.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Working time range sample', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent');
  await page.waitForTimeout(1000);
  // Click on a specific cell to focus
  await page.locator('(//td[contains(@class, "e-rowcell")])[18]').click();
  await page.waitForTimeout(1000);
  // Validate the screenshot- Working time range is displayed on the chart side of the component.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Holidays sample', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'holidays?theme=fluent');
  await page.waitForTimeout(1000);
  // Click on a specific icon
  await page.locator('(//span[contains(@class, "e-treegridexpand")])[1]').click();
  await page.waitForTimeout(500);
  // Click the expand icon the 2nd tree grid node
  await page.locator('(//span[contains(@class, "e-treegridexpand")])[1]').click();
  await page.waitForTimeout(1500);
  //Click the expand icon the 3rd tree grid node
  await page.locator('(//span[contains(@class, "e-treegridexpand")])[1]').click();
  await page.waitForTimeout(1000);
  // Validate the screenshot-Record is expanded and the holidays are displayed on the chart side of the component.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Unscheduled task sample', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'unscheduled-task?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class, "e-rowcell")])[17]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Baseline initial load', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'baseline?theme=fluent');
  await page.waitForTimeout(4000);
  // Validate the screenshot- Baseline is displayed on the chart side of the component.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Disable baseline', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'baseline?theme=fluent');
  await page.waitForTimeout(4000);
  //Click to select
  await page.locator('(//td[contains(@class, "e-rowcell")])[14]').click();
  await page.waitForTimeout(300);
  //Disable baseline
  await page.locator('(//span[contains(@class, "e-frame e-check")])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Eventmarkers sample', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'eventmarkers?theme=fluent');
  await page.waitForTimeout(4000);
  // Click on a specific cell to focus
  await page.locator('(//td[contains(@class, "e-rowcell")])[30]').click();
  await page.waitForTimeout(2000);
  // Validate the screenshot- Event markers are displayed on the chart side of the component.
  expect(await page.locator("xpath=(//div[contains(@class,'sf-gantt')])[1]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Critical path inital load', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'criticalpath?theme=fluent');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Disable critical path', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'criticalpath?theme=fluent');
  await page.waitForTimeout(4000);
  //Select record
  await page.locator('(//td[contains(@class, "e-rowcell")])[16]').click();
  await page.waitForTimeout(500);
  //Disable critical path
  await page.locator('(//span[contains(@class, "e-frame e-check")])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Work time range customize Duration the hours', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent');
  await page.waitForTimeout(1000);
  //Click the duration on child record
  await page.locator('(//td[contains(@class, "e-rowcell")])[13]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('(//input[contains(@class, "e-control")])[1]').click();
  await page.waitForTimeout(500);
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.locator('(//input[contains(@class, "e-control")])[1]').fill('2 Days');
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('12-Work time range edit duration to have negative value', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent');
  await page.waitForTimeout(1000);
  //Click the duration on child record
  await page.locator('(//td[contains(@class, "e-rowcell")])[13]').dblclick();
  await page.waitForTimeout(500);
  //Negative value added
  await page.locator('(//input[contains(@class, "e-control")])[1]').fill('-4');
  await page.waitForTimeout(500);
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('13-Work time range edit duration to have null value', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the duration on child record
  await page.locator('(//td[contains(@class, "e-rowcell")])[13]').dblclick();
  await page.waitForTimeout(500);
  //Null value added
  await page.locator('(//input[contains(@class, "e-control")])[1]').fill('');
  await page.waitForTimeout(200);
  //Press the Enter key on the keyboard
  const input = await page.locator('(//input[contains(@class, "e-control")])[1]');
  await input.click();
  await input.press('Control+A');
  await input.press('Backspace');
  await page.waitForTimeout(600);
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('14-Work time range edit start date to have null value', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the start date on child record
  await page.locator('(//td[contains(@class, "e-rowcell")])[11]').dblclick();
  await page.waitForTimeout(500);
  //Null value
  const input = await page.locator('#DataItem___StartDate');
  await input.click();
  await input.press('Control+A');
  await input.press('Backspace');
  await page.waitForTimeout(600);
  await page.waitForTimeout(200);
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Work time range edit start date to have wrong date format', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the start date on child record
  await page.locator('(//td[contains(@class, "e-rowcell")])[11]').dblclick();
  await page.waitForTimeout(500);
  //wrong date format added
  await page.locator('#DataItem___StartDate').fill('2021/4/14');
  await page.waitForTimeout(200);
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Work time range edit End date to have wrong date format', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the End date on child record
  await page.locator('(//td[contains(@class, "e-rowcell")])[12]').dblclick();
  await page.waitForTimeout(500);
  //Wrong date format added
  await page.locator('#DataItem___EndDate').fill('2021/4/14');
  await page.waitForTimeout(200);
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('17-Work time range edit End date to have null value', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent');
  await page.waitForTimeout(1000);
  //Click the End date on child record
  await page.locator('(//td[contains(@class, "e-rowcell")])[12]').dblclick();
  await page.waitForTimeout(500);
  //Enter Null value
  const input = await page.locator('#DataItem___EndDate');
  await input.click();
  await input.press('Control+A');
  await input.press('Backspace');
  await page.waitForTimeout(600);
  await page.waitForTimeout(200);
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

test('18-Work time range edit Progress to have null value', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent');
  await page.waitForTimeout(1000);
  // Click the Progress on child record
  await page.locator('(//td[contains(@class, "e-rowcell")])[14]').dblclick();
  await page.waitForTimeout(500);
  // Enter Null value
  await page.locator('#DataItem___Progress').click();
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  // Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  // Validate the screenshot- Progress should be null
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//https://tcms.syncfusion.com/case/90151/
test('19-TC-90151: BLAZ-27446-Notes Icon Issue In SB Sample', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'working-time-range?theme=highcontrast');
  await page.waitForTimeout(1000);
  //Click to show Notes
  await page.locator("(//span[contains(@class,'notes')])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation - when click notes icon should be visible and work fine
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//https://tcms.syncfusion.com/case/85026/
test('20-TC-85026: Empty space issue in Baseline sample', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'baseline?theme=fluent');
  await page.waitForTimeout(1000);
  //Click the child record , last on chart side
  await page.locator('(//div[contains(@class,"child")])[12]').click();
  await page.waitForTimeout(1000);
  //Sreenshot validation- there should be no empty space at chart side when click the last child record on chart side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/890070
test('21-Collapse the parent records using the icons', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent');
  await page.waitForTimeout(1000);
  //Click the icon for the 1st parent record to collapse it 
  await page.locator("(//span[contains(@class,' e-treegridexpand')])[1]").click();
  await page.waitForTimeout(500);
  //Click the icon for the 2 nd parent record to collapse it
  await page.locator("(//span[contains(@class,' e-treegridexpand')])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Grid lines are on both the grid and chart side of the component.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/875610/
test('22-875610: Issue with the Cancel Button', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent')
  await page.waitForTimeout(1000);
  //Double click the 1st child taskbar on chart side
  await page.locator('(//div[contains(@class,"child")])[1]').dblclick();
  await page.waitForTimeout(1000);
  //Click on the opened dialog tab,select Notes
  await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click();
  await page.waitForTimeout(800);
  //Click the insert image icon to open its dialog
  await page.locator('(//span[contains(@class,"image")])').click();
  await page.waitForTimeout(1200);
  //Press the Tab 
  await page.keyboard.press('Tab');
  await page.waitForTimeout(1000);
  //Press the Tab 
  await page.keyboard.press('Tab');
  await page.waitForTimeout(1000);
  //Screenshot validation -The Cancel button is displayed properly
  expect(await page.locator('.e-gantt').screenshot({ mask: [page.locator("(//div[contains(@class,'e-toolbar-items e-lib e-hscroll')])[1]")], maskColor: "#C0C0C0" })).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/883389

test('23-883389-Check browser pop-up issue', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent')
  await page.waitForTimeout(2000);
  //Double click on the notes icon
  await page.locator('(//span[contains(@class,"e-icons e-notes-info")])[2]').dblclick();
  await page.waitForTimeout(2000);
  //Screenshot validation -The browser pop up is showing or not
  expect(await page.locator("(//div[contains(@class,'sample-browser e-view sf-new')])[1]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/835470/

test('24-Holidays - scroll to center', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'holidays?theme=fluent2');
  await page.waitForTimeout(2000);
  await page.locator('(//div[contains(@class,"e-chart-scroll-container e-content")])[1]').click();
  await page.waitForTimeout(200);
  await page.mouse.wheel(0, 600);
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903070/
test('25-BUG-903070-Console error when click on the link', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent')
  await page.waitForTimeout(2000);
  //Double click Notes 
  await page.locator('(//span[contains(@class,"e-notes-info")])[2]').dblclick();
  await page.waitForTimeout(1000);
  //Click the link
  await page.locator('(//span[contains(@class,"e-create-link e-icons e-btn-icon")])[1]').click();
  await page.waitForTimeout(500);
  //Click to enter the record
  await page.locator('(//input[contains(@class,"e-input e-rte-linkurl")])[1]').fill('syncfusion.com');
  await page.waitForTimeout(500);
  //Click the insert 
  await page.locator('(//button[contains(@class," e-insertLink e-rte-link")])[1]').click();
  await page.waitForTimeout(1000);
  //Click the save button
  await page.locator('(//button[contains(@class,"e-btn e-lib e-flat e-primary ")])[1]').click();
  await page.waitForTimeout(1000);
  //Double click Notes 
  await page.locator('(//span[contains(@class,"e-notes-info")])[2]').dblclick();
  await page.waitForTimeout(2000);
  //Screenshot validation-The inserted 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/905573
// test('26-Console error is thrown when Insert Image  ', async ({ page, context }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent')
//   await page.waitForTimeout(2000);
//   //Double click the notes to open the dialog tab
//   await page.locator('(//span[contains(@class, "e-icons e-notes")])[2]').dblclick();
//   await page.waitForTimeout(1000);
//   //Click the image icon
//   await page.locator('(//span[contains(@class, "e-image e-icons e-btn-icon")])[1]').click();
//   await page.waitForTimeout(1000);
//   //Insert image
//   await page.locator("(//input[contains(@class, 'e-input e-img-url')])[1]").fill('https://sfblazor.azurewebsites.net/staging/documentation/document-editor/images/blazor-document-editor-image-resizing.jpeg');
//   await page.waitForTimeout(2000);
//   //Click Insert button
//   await page.locator("(//button[text()='Insert'])[1]").click();
//   await page.waitForTimeout(3000);
//   //Image inserted
//   expect(await page.locator('.e-dlg-overlay').screenshot()).toMatchSnapshot('ImageInsert.png', { maxDiffPixels: 100 });
//   await page.waitForTimeout(2000);
//   //Click the save button
//   await page.locator("(//button[text()='Save'])[1]").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-The image is saved and no console error is thrown.
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/902259
test('27-Two Vertical scrollbar rendered ', async ({ page, context }, testInfo) => {
  await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent')
  await page.waitForTimeout(2000);
  //Double click the notes to open the dialog tab
  await page.locator('(//span[contains(@class, "e-icons e-notes")])[2]').dblclick();
  await page.waitForTimeout(1200);
  //Click the selection to write notes
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(800);
  //Enter the record
  await page.keyboard.type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum');
  await page.waitForTimeout(2000);
  //Screenshot validation-Two vertical scrollbar is not rendered.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903488
test('28-Duration showing in days', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the duration record to show it is highlighted in Hours
  await page.locator('(//td[contains(@class, "e-rowcell")])[5]').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The duration should be in Hours
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/935212
test('29-Focus navigation issue on manual taskbars', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'scheduling-mode?theme=fluent2');
  await page.waitForTimeout(2000);
  //Click the duration record to show it is highlighted in Hours
  await page.locator("(//td[contains(@class,'rowcell')])[7]").click();
  await page.waitForTimeout(300);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(300);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(300);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(300);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  //Screenshot validation-The navigation should be focused on the manual taskbars
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 0.01 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/935408
test('29-Tab key navigation', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'unscheduled-task?theme=fluent2');
  await page.waitForTimeout(1000);
  //Click the duration on child record
  await page.locator("(//td[contains(@class,'rowcell')])[10]").click();
  await page.waitForTimeout(1000);
  //Press the Tab key on the keyboard
  await page.keyboard.press('Tab');
  await page.waitForTimeout(600);
  //Press the Tab key on the keyboard
  await page.keyboard.press('Tab');
  await page.waitForTimeout(600);
  //Press the Tab key on the keyboard
  await page.keyboard.press('Tab');
  await page.waitForTimeout(1000);
  //Screenshot validation-Tab key navigation is working fine
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });

});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/901709
test('30-901709-Console error high value ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'working-time-range?theme=fluent');
  test.info().annotations.push({ type: 'Sample link', description: 'working-time-range?theme=fluent' });
  await page.waitForTimeout(3000);
  //Double click to cell edit the Duration of child record
  await page.locator("(//td[contains(@class,'rowcell')])[13]").dblclick();
  await page.waitForTimeout(1000);
  //Enter the high value 
  await page.locator("#DataItem___Duration").fill('30000000000 Hours');
  //Press Enter
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  //Screenshotvalidation- The duration is reverted to its value
  expect(await page.locator(".e-gantt").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/924656
test('31-924656-Notes Icon Issue', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'working-time-range?theme=tailwind3');
  test.info().annotations.push({ type: 'Sample link', description: 'working-time-range?theme=tailwind3' });
  await page.waitForTimeout(2000);
  //Click to show Notes
  await page.locator("(//span[contains(@class,'notes')])[1]").dblclick();
  await page.waitForTimeout(2500);
  //Screenshot validation - when click notes icon should be visible and work fine
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/924763
test('32-924763-Component Height Increasing', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'unscheduled-task?theme=tailwind3');
  test.info().annotations.push({ type: 'Sample link', description: 'unscheduled-task?theme=tailwind3' });
  await page.waitForTimeout(2000);
  //Click the icon to collapse all records
  await page.locator("(//span[contains(@class,'e-icons e-treegridexpand')])[1]").click();
  await page.waitForTimeout(2500);
  //Screenshot validation-The records do not increase in height
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/925126
test('33-925126-Console error thrown when enter text', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'working-time-range?theme=tailwind3');
  test.info().annotations.push({ type: 'Sample link', description: 'working-time-range?theme=tailwind3' });
  await page.waitForTimeout(1000);
  //Double click Notes 
  await page.locator('(//span[contains(@class,"e-notes-info")])[2]').dblclick();
  await page.waitForTimeout(1000);
  //Click the selection to write notes
  await page.locator("(//div[contains(@class,'e-content')])[6]").click();
  await page.waitForTimeout(500);
  //Enter the text write notes 
  await page.keyboard.type('Write Notes');
  await page.waitForTimeout(500);
  //Select the notes
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //select from the paragragh the Heading 1
  await page.locator("(//span[contains(@class,'e-rte-dropdown-btn-text')])[5]").click();
  await page.waitForTimeout(500);
  //select Heading 1
  await page.locator("(//li[text()='Heading 1'])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Console error is not thrown when enter text under notes
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Critical path
test('34-Add dependency records', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'criticalpath?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'criticalpath?theme=fluent2' });
  await page.waitForTimeout(1000);
  //Double click the 1 child taskbar
  await page.locator('(//div[contains(@class,"e-gantt-child")])[2]').dblclick();
  await page.waitForTimeout(1000);
  //Click the duration to edit it 
  await page.locator('(//input[contains(@class,"control")])[6]').fill('4 days');
  await page.waitForTimeout(500);
  //Select dependency to open the dialog tab
  await page.locator('(//div[contains(@class,"e-tab-wrap")])[4]').click();
  await page.waitForTimeout(500);
  //Click the Add button on the dependency tab
  await page.locator('(//span[contains(@class,"e-add")])[1]').click();
  await page.waitForTimeout(500);
  //Click to show the dropdown list
  await page.locator('(//span[contains(@class,"e-input")])[9]').click();
  await page.waitForTimeout(500);
  //select the dependency
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(200);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(200);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(200);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-New dependency record is added and the critical path is displayed on the chart side of the component.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Disable critical path after add dependency ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'criticalpath?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'criticalpath?theme=fluent2' });
  await page.waitForTimeout(1000);
  //Double click the 1 child taskbar
  await page.locator('(//div[contains(@class,"e-gantt-child")])[2]').dblclick();
  await page.waitForTimeout(1000);
  //Click the duration to edit it 
  await page.locator('(//input[contains(@class,"control")])[6]').fill('4 days');
  await page.waitForTimeout(500);
  //Select dependency to open the dialog tab
  await page.locator('(//div[contains(@class,"e-tab-wrap")])[4]').click();
  await page.waitForTimeout(500);
  //Click the Add button on the dependency tab
  await page.locator('(//span[contains(@class,"e-add")])[1]').click();
  await page.waitForTimeout(500);
  //Click to show the dropdown list
  await page.locator('(//span[contains(@class,"e-input")])[9]').click();
  await page.waitForTimeout(500);
  //select the dependency
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(200);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(200);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(200);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the critical path icon to disable it
  await page.locator('(//span[contains(@class,"e-icons e-frame e-check")])[1]').click();
  await page.waitForTimeout(1000);
  //Screenshot validation-New dependency record is added and the critical path  is displayed on the chart side of the component.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Edit progress through dialog ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'criticalpath?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'criticalpath?theme=fluent2' });
  await page.waitForTimeout(1000);
  //Double click the 1 child taskbar
  await page.locator('(//div[contains(@class,"e-gantt-child")])[2]').dblclick();
  await page.waitForTimeout(1000);
  //Click the progres to edit it 
  await page.locator('(//input[contains(@class,"control")])[7]').fill('0');
  await page.waitForTimeout(500);
  //Select dependency to open the dialog tab
  await page.locator('(//div[contains(@class,"e-tab-wrap")])[4]').click();
  await page.waitForTimeout(500);
  //Click the Add button on the dependency tab
  await page.locator('(//span[contains(@class,"e-add")])[1]').click();
  await page.waitForTimeout(500);
  //Click to show the dropdown list
  await page.locator('(//span[contains(@class,"e-input")])[9]').click();
  await page.waitForTimeout(500);
  //select the dependency
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(200);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(200);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(200);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the critical path icon to disable it
  await page.locator('(//span[contains(@class,"e-icons e-frame e-check")])[1]').click();
  await page.waitForTimeout(1000);
  //Screenshot validation-New dependency record is added and the critical path  is displayed on the chart side of the component and progress updated
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Edit Job name through dialog ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'criticalpath?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'criticalpath?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Double click the 1 child taskbar
  await page.locator('(//div[contains(@class,"e-gantt-child")])[3]').dblclick();
  await page.waitForTimeout(1000);
  //Click the Job Name 
  await page.locator('(//input[contains(@class,"control")])[3]').fill('Obtain');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Job name edited through dialog tab
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Edit parent start date through cell edit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'criticalpath?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'criticalpath?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Double click the start date 
  await page.locator('(//td[contains(@class,"e-rowcell")])[3]').dblclick();
  await page.waitForTimeout(1000);
  //Click the Job Name 
  await page.locator('#DataItem___StartDate').fill('4/1/2025');
  await page.waitForTimeout(500);
  //Press the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  //Screenshot validation-Start date edited through cell edit
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('39-Edit child End date through cell edit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'criticalpath?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'criticalpath?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Double click the child end date for 2 record 
  await page.locator('(//td[contains(@class,"e-rowcell")])[11]').dblclick();
  await page.waitForTimeout(1000);
  //Click the Job Name 
  await page.locator('#DataItem___EndDate').fill('4/2/2025');
  await page.waitForTimeout(500);
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  //Screenshot validation-End date edited through cell edit
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Edit child End date through cell edit hover', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'criticalpath?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'criticalpath?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Double click the child end date for 2 record 
  await page.locator('(//td[contains(@class,"e-rowcell")])[11]').dblclick();
  await page.waitForTimeout(1000);
  //Click the Job Name 
  await page.locator('#DataItem___EndDate').fill('4/2/2025');
  await page.waitForTimeout(500);;
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  //Hover the 1st child record on the chart side
  await page.locator('(//div[contains(@class,"e-gantt-child")])[3]').hover({ force: true });
  await page.waitForTimeout(2000);
  //Screenshot validation-End date edited through cell edit
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/972075
test('41-972075', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'criticalpath?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'criticalpath?theme=fluent2' });
  await page.waitForTimeout(5000);
  // Click the 1st child taskbar to focus the chart area
  const taskbar = page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]");
  await taskbar.waitFor({ state: 'visible' });
  await taskbar.click();
  await page.waitForTimeout(500);
  // Click and focus the chart scroll container, then scroll horizontally via mouse wheel
  const chartContainer = page.locator("(//div[contains(@class,'e-chart-scroll-container e-content')])[1]");
  await chartContainer.waitFor({ state: 'visible' });
  const containerBox = await chartContainer.boundingBox();
  if (!containerBox) throw new Error('Chart scroll container not visible');
  // Move mouse to the center of the chart scroll container
  await page.mouse.move(containerBox.x + containerBox.width / 2, containerBox.y + containerBox.height / 2);
  // Scroll horizontally to the right using the mouse wheel (deltaX > 0 scrolls right)
  await page.mouse.wheel(200, 0);
  await page.waitForTimeout(3000);
  // Screenshot validation - The taskbar is scrolled and the vertical gridlines are still visible
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
