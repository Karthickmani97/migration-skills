import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
import { pdf } from '../Helper/pdfStub';

async function clearPdfFooter(page: any) {
  const footerInput = page.locator("input[placeholder='Footer']").or(page.locator("input[name='footer']")).or(page.locator(".e-footer input")).first();
  if (await footerInput.count() > 0) {
    await footerInput.fill('');
    await page.waitForTimeout(250);
  }
}

//https://tcms.syncfusion.com/case/77763/
test('1-BLAZ-24953-Chart Side Virtual Scroll Empty', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-24953');
  await page.waitForTimeout(2500);
  //Click scroll button
  await page.locator("(//button[text()='Scroll'])").click();
  await page.waitForTimeout(1000);
  //Reload the page
  await page.reload();
  await page.waitForTimeout(1500);
  //Click the scroll button
  await page.locator("(//button[text()='Scroll'])").click();
  await page.waitForTimeout(800);
  //Reload the page
  await page.reload();
  await page.waitForTimeout(1500);
  //Click the scroll button
  await page.locator("(//button[text()='Scroll'])").click();
  await page.waitForTimeout(800);
  //Reload the page
  await page.reload();
  await page.waitForTimeout(3000);
  //Screenshot validation- so that when click the scroll button and reload page on chart side their is data shown
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://tcms.syncfusion.com/case/77024/
test('2-BLAZ-25264-virtualization chart width not updated', async ({ page }) => {
  //Initial load of the sample
  await page.goto(Helper.baseUrlserver + '/BLAZ-25264')
  await page.waitForTimeout(2000);
  //Screenshot validation -On initial load of sample chart side updated properly with all the records visible
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://tcms.syncfusion.com/case/75251/
test('3-BLAZ-25045-Console throws on scroll action', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-24953')
  await page.waitForTimeout(3000);
  //Scroll horizontal scrollbar on chart side
  //Mouse click
  await page.mouse.click(1183, 575);
  await page.waitForTimeout(100);
  //Mouse down
  await page.mouse.down();
  await page.waitForTimeout(100);
  //Mouse move
  await page.mouse.move(1183, 575);
  await page.waitForTimeout(100);
  //Mouse move
  await page.mouse.move(1225, 574);
  await page.waitForTimeout(100);
  //Mouse up
  await page.mouse.up();
  await page.waitForTimeout(1000);
  //Screenshot validation -when scroll the horizontal scrollbar no console is thrown
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://tcms.syncfusion.com/case/91708/
test('4-BLAZ-27918-Issues in taskbar', async ({ page }) => {
  //Initial load of the sample
  await page.goto(Helper.baseUrlserver + '/BLAZ-27918')
  await page.waitForTimeout(1000);
  //Screenshot validation- Taskbar border should not visible for both parent and child task when the themes bootstrap are selected
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://tcms.syncfusion.com/case/103643/
test('5-BLAZ-30099-Chart side rows are not deselected', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-29615')
  await page.waitForTimeout(1000);
  //Click the second row
  await page.locator('(//td[contains(@class,"rowcell")])[8]').click();
  await page.waitForTimeout(500);
  //Press shift down
  await page.keyboard.down('Shift');
  await page.waitForTimeout(500);
  //End point
  await page.locator('(//td[contains(@class,"rowcell")])[26]').click();
  await page.waitForTimeout(500);
  //Press shift up
  await page.keyboard.up('Shift');
  await page.waitForTimeout(500);
  //Click to deselect 
  await page.locator('(//td[contains(@class,"lastrowcell")])[3]').click();
  await page.waitForTimeout(1000);
  //Screenshot validation- chart side rows should be deselected and should work fine after select. and click on last cell to allow for deselection of the records
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://tcms.syncfusion.com/case/99717/
test('6-BLAZ-29615-Exception occurs when selecting multiple rows', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-29615')
  await page.waitForTimeout(1000);
  //Click the second row
  await page.locator('(//td[contains(@class,"rowcell")])[8]').click();
  await page.waitForTimeout(500);
  //Press shift down
  await page.keyboard.down('Shift');
  await page.waitForTimeout(500);
  //End point
  await page.locator('(//td[contains(@class,"rowcell")])[20]').click();
  await page.waitForTimeout(500);
  //Press shift up
  await page.keyboard.up('Shift');
  await page.waitForTimeout(1000);
  //Screenshot validation - when select multiple rows console error should not be thrown
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/869871/
test('7-Spinner keeps on loading while zoom out action', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-869871');
  await page.waitForTimeout(600);
  //Click the dropdown to show the format
  await page.locator('(//span[contains(@class,"input")])[10]').click();
  await page.waitForTimeout(500);
  //Click to select the Format
  await page.locator("(//li[text()='Mon Jan 01'])").click();
  await page.waitForTimeout(500);
  //Click the Zoom Out button on the toolbar
  await page.locator('(//span[contains(@class,"zoomout")])').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The spinner works fine when the data is loaded.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/886847
test('8-BUG-886847-The selection issue after deletion of record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-886847');
  await page.waitForTimeout(1000);
  //Click the 2nd child record
  await page.locator('(//td[contains(@class,"rowcell")])[9]').click();
  await page.waitForTimeout(500);
  //Click the delete button on the tolbar
  await page.locator('(//span[contains(@class,"delete")])').click();
  await page.waitForTimeout(600);
  //Click ok button
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-There is no selection issue as the record selected is on both grid and chart side
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/889435
test('9-BUG-889435-Issue on resource tab edit state', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-889435');
  await page.waitForTimeout(2000);
  //Click the second child 
  await page.locator('(//td[contains(@class,"rowcell")])[8]').click();
  await page.waitForTimeout(1000);
  //Click the edit button on the toolbar
  await page.locator('(//span[contains(@class,"edit")])').click();
  await page.waitForTimeout(500);
  //Click Resources to show its dialog tab
  await page.locator('(//div[contains(@class,"e-tab-text")])[2]').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The resources dialog tab is shown.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/887262
test('10-BUG-887262-Dialog tab opened when click resources tab', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-887262');
  await page.waitForTimeout(2000);
  //Click to drag and drop the records
  const src = page.locator("(//div[contains(@class,'rowcelldrag')])[3]");
  const dst = page.locator("(//div[contains(@class,'rowcelldrag')])[7]");
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
  //Click the record to open resources for it dialog tab
  await page.locator('(//td[contains(@class,"rowcell")])[12]').click();
  await page.waitForTimeout(500);
  //Click the edit button on the toolbar
  await page.locator('(//span[contains(@class,"edit")])').click();
  await page.waitForTimeout(500);
  //Click the resources to open its dialog tab
  await page.locator('(//div[contains(@class,"e-tab-text")])[2]').click();
  await page.waitForTimeout(600);
  //Screenshot validation-Resources tab is opened
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/857752/
test('11-Console error when navigating to notes tab', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-857752');
  await page.waitForTimeout(500);
  //Select the child taskbar
  await page.locator('(//div[contains(@class,"child")])[1]').dblclick();
  await page.waitForTimeout(1000);
  //Click Notes
  await page.locator('(//div[contains(@class,"e-tab-text")])[2]').click();
  await page.waitForTimeout(800);
  //Screenshot validation-The notes dialog tab should be visible when clicked 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/892181
test('12-892178 Editing resources and show the resources dialog tab', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-892181');
  await page.waitForTimeout(500);
  //open dialog tab for child task
  await page.locator('(//div[contains(@class,"child")])[1]').dblclick();
  await page.waitForTimeout(1000);
  //Click resources tab
  await page.locator('(//div[contains(@class,"e-tab-text")])[2]').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Resources dialog Tab is shown
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-892178 Editing resources through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-892181');
  await page.waitForTimeout(500);
  //open dialog tab for child task
  await page.locator('(//div[contains(@class,"child")])[1]').dblclick();
  await page.waitForTimeout(1000);
  //Click resources tab
  await page.locator('(//div[contains(@class,"e-tab-text")])[2]').click();
  await page.waitForTimeout(500);
  //Click to Filter the resource name
  await page.locator('(//div[contains(@class,"filtermenudiv")])[2]').click();
  await page.waitForTimeout(500);
  //Enter the resources name 
  await page.locator('(//input[contains(@class,"control")])[7]').fill('Fuller Buchanan');
  await page.waitForTimeout(500);
  //Click the Filter  button
  await page.locator("(//button[text()='Filter'])").click();
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Filtered record is saved.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-892178 Editing resources through cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-892181');
  await page.waitForTimeout(500);
  //Double click on resource column
  await page.locator('(//td[contains(@class,"rowcell ")])[14]').dblclick();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/893917/
test('15-BUG-893917-SplitterPosition is not Properly updated', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-893917');
  await page.waitForTimeout(1000);
  //Click the button Update Splitter Position
  await page.locator("(//button[text()='Update Splitter Position'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Splitter position is updated properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/843811
test('16-BUG-843811-Console error occurs when expand parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-843811');
  await page.waitForTimeout(1000);
  //Click the icon for the record to expand
  await page.locator('(//span[contains(@class,"e-treegridcollapse")])[1]').click();
  await page.waitForTimeout(2500);
  //Screenshot validation-The parent record is expanded.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/843811
test('17-BUG-853464-Misalignment issues', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-853464');
  await page.waitForTimeout(2000);
  //Screenshot validation-There is no miaslignment of the scrollbars on either grid or chat side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/887260
test('18-BUG-887260-Resources get unchecked after filtering', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-887260');
  await page.waitForTimeout(800);
  //Click the record
  await page.locator('(//td[contains(@class, "e-rowcell")])[2]').click();
  await page.waitForTimeout(200);
  //Click the edit button
  await page.locator('(//span[contains(@class, "e-edit e-icons e-btn-icon e-icon-left")])[1]').click();
  await page.waitForTimeout(200);
  //Click the resources tab
  await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
  await page.waitForTimeout(200);
  //Click the filter
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter ")])[7]').click();
  await page.waitForTimeout(200);
  //Enter the value
  await page.locator('(//input[contains(@class,"e-control e-autocomplete e-lib e-input")])[1]').fill('2');
  await page.waitForTimeout(200);
  //Click the Filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(500);
  //Uncheck the box
  await page.locator('(//span[contains(@class,"e-frame e-icons e-check ")])[2]').click();
  await page.waitForTimeout(200);
  //Click the clear button
  await page.locator("(//button[text()='Cancel'])[1]").click();
  await page.waitForTimeout(500);
  //Screenshot validation-Records updated
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/868063
test('19-Duration not updated properly', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-868063');
  await page.waitForTimeout(1000);
  //Double click the taskname to cell edit it
  await page.locator("(//td[contains(@class,'rowcell')])[9]").dblclick();
  await page.waitForTimeout(1000);
  //Press the tab
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  //Press the tab 
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  //Press the tab
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.locator("(//td[contains(@class,'rowcell')])[9]").click();
  await page.waitForTimeout(500);
  //Screenshot validation-The duration field is updated properly after cell navigation
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/887264
test('20-Console error occurs when editing resources', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-887264');
  await page.waitForTimeout(500);
  //Double click the Event resources to cell edit it
  await page.locator("(//td[contains(@class,'rowcell')])[9]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Event Resources
  await page.locator("(//div[contains(@class,'e-multi-select-wrapper')])[1]").click();
  await page.waitForTimeout(500);
  //Press the ArrowDown
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(500);
  //Press the ArrowDown
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(500);
  //Press the ArrowDown
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(500);
  //Press the ArrowDown
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(1000);
  //Press the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  await page.waitForTimeout(500);
  //Screenshot validation-Console error is not thrown when click another cell after edit resources
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/900660
test('21-Console when Press Control+C ', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-868063');
  await page.waitForTimeout(1000);
  //click the taskname to cell edit it
  await page.locator("(//td[contains(@class,'rowcell')])[2]").click();
  await page.waitForTimeout(500);
  //Press the tab
  await page.keyboard.press('Control+C');
  await page.waitForTimeout(500);
  //Screenshot validation-Console error not thrown when press Control+C
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/935796
test('22-Holiday label indicated', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/resource-virtual');
  await page.waitForTimeout(1000);
  //click the filter icon for End date
  await page.locator("(//div[contains(@class,'filtermenudiv')])[4]").click();
  await page.waitForTimeout(500);
  //Click to select Greater Than
  await page.locator("(//span[contains(@class,'e-control')])[2]").click();
  await page.waitForTimeout(500);
  //Select Greater Than
  await page.locator("(//li[text()='Greater Than'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the value
  await page.locator("(//input[contains(@class,'e-control ')])[3]").fill('5/17/2022');
  await page.waitForTimeout(500);
  //Click the Filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Holiday label is indicated
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/935232
test('23-Index value updated', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-935232');
  await page.waitForTimeout(2000);
  await page.locator("(//div[contains(@class, 'e-gantt-child-taskbar-inner-div e-gantt-child-taskbar   ')])[2]").click();
  await page.waitForTimeout(1000);
  await page.mouse.down();
  await page.mouse.move(1080, 160);
  await page.mouse.up();
  await page.waitForTimeout(10000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});


//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/851685
test('24-Duration showing in days', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/working-time-range?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the duration record to show it is highlighted in Hours
  await page.locator('(//td[contains(@class, "e-rowcell")])[5]').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The duration should be in Hours
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/851685
test('25-Tab navigation not working ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-851685');
  await page.waitForTimeout(2000);
  //Click the duration record to show it is highlighted in Hours
  await page.locator("(//td[contains(@class,'rowcell')])[8]").click();
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(2000);
  //Screenshot validation-The navigation should be focused on the manual taskbars
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 0.01 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/867113
test('26-Drag and drop not working', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-867113');
  await page.waitForTimeout(2000);
  // Locator for resizing the split bar
  await page.locator("(//div[contains(@class,'e-resizable-split-bar')])[1]").click();
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(611, 332);
  await page.waitForTimeout(1000);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  //Click to drag and drop
  const src = page.locator("(//td[contains(@class,'e-rowdragdrop')])[3]");
  const dst = page.locator("(//td[contains(@class,'e-rowdragdrop')])[4]");
  if (src && dst) {
    const src_bound = await src.boundingBox();
    const dst_bound = await dst.boundingBox();
    if (src_bound && dst_bound) {
      await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
      await page.mouse.down();
      await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
      await page.waitForTimeout(1000);
      await page.mouse.up();
      await page.waitForTimeout(2000);
    }
  }
  await page.waitForTimeout(1000);
  //Screenshot validation-The drag and drop working fine
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/935616
test('22-Progress Edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/rtlsample');
  await page.waitForTimeout(1000);
  //click the taskname to cell edit it
  await page.locator("(//td[contains(@class,'rowcell')])[14]").dblclick();
  await page.waitForTimeout(1000);
  //Press the tab
  await page.locator("(//input[contains(@class,'control')])[1]").fill('50');
  await page.waitForTimeout(500);
  //Click the uodate button
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Progress edited through cell edit
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/935616
test('23-Resize the taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/rtlsample');
  await page.waitForTimeout(1000);
  //Resize the taskbar
  await page.locator("(//div[contains(@class,'e-taskbar-left-resizer e-icon')])[1]").hover();
  await page.waitForTimeout(1000);
  await page.mouse.down();
  await page.waitForTimeout(500);
  await page.mouse.move(883, 166);
  await page.mouse.move(920, 167);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  //Screenshot validation-Taskbar resized
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/939203
test('24-Fix Console Error During Collapse All Action', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-sb');
  await page.waitForTimeout(1000);
  //Click the collapse all button
  await page.locator("(//span[text()='Collapse all'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-No console error is thrown when collapse all records.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/912028
test('25-Two vertical scrollbar render', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/864306-FrozenColumn');
  await page.waitForTimeout(1000);
  //Screenshot validation-Two vertical scrollbar does not render on initial load
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/914551
test('26-Console error when collapse all', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Virtual');
  await page.waitForTimeout(1000);
  //Click the 1st cell 
  await page.locator("(//td[contains(@class,'rowcell')])[1]").click();
  //Press Control+Arrowup 
  await page.keyboard.press('Control+ArrowUp');
  await page.waitForTimeout(1000);
  //Screenshot validation-No console error is thrown when collapse all records using keyboard action
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/919343
test('27-Resolve console error on view type change Gantt chart', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-919343');
  await page.waitForTimeout(1000);
  //Click the duration cell
  await page.locator("(//td[contains(@class,'rowcell')])[16]").dblclick();
  await page.waitForTimeout(1000);
  //Click the duration
  await page.locator('#DataItem___Duration').fill('5 days');
  await page.waitForTimeout(1000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  await page.locator("(//td[contains(@class,'rowcell')])[17]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-No console error is thrown when change the view type of the Gantt chart
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/936473
test('28-Truetype font style not updated in the footer', async ({ page }, testInfo) => {
  // Navigate to the URL with the specified theme
  await page.goto(Helper.baseUrlserver + '/BLAZ-906778');
  await page.waitForTimeout(2000);

  // Press the button to download the PDF files
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator("(//button[text()='PDF Export'])[1]").click()
  ]);
  await page.waitForTimeout(500);

  // Define the Actual Export File Path with proper name
  const path = "./tests/Gantt_Feature/ManualTesting/BLAZ-906778/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);

  // Attach the downloaded file to the report
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);

  // Convert the PDF to PNG format
  const doc = await pdf(path);
  await page.waitForTimeout(500);

  // Ensure the PDF has exactly one page
  expect(doc.length).toBe(1);

  // Convert the page to image format and take a snapshot
  for await (const page of doc) {
    expect(page).toMatchSnapshot('PDF Export1.png', { maxDiffPixelRatio: 0.01 });
  }
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/936473
test('29-Progress size is not updated', async ({ page }, testInfo) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-932380');
  // Simulate resizing action from (1244, 285) to (1085, 285)
  await page.mouse.move(1244, 285); // Move to start position
  await page.mouse.down();
  await page.waitForTimeout(200); // Brief pause to mimic real user behavior  
  await page.mouse.move(1085, 285, { steps: 10 }); // Smooth horizontal drag  
  await page.waitForTimeout(300);
  await page.mouse.up();
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/933019
test('30-Console error when double click custom columns', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/E2EMigration/customcolumn');
  await page.waitForTimeout(1000);
  //Double click the custom columns
  await page.locator('(//td[contains(@class,"rowcell ")])[11]').dblclick();
  await page.waitForTimeout(1000);
  //Screenshot validation-No console error is thrown when double click the custom columns 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/919351
test('31-Negative value in progess column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/methods');
  await page.waitForTimeout(1000);
  //Double click the progress
  await page.locator('(//td[contains(@class,"rowcell ")])[14]').dblclick();
  await page.waitForTimeout(1000);
  //Enter the negative value
  await page.locator('#DataItem___Progress').fill('-10');
  //Press the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  //Screenshot validation-Progress column should not accept negative value
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/920868
test('32-Console error collapse record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Virtual');
  await page.waitForTimeout(1000);
  //Click the row
  await page.locator('(//td[contains(@class,"rowcell")])[1]').click();
  await page.waitForTimeout(500);
  //Click the icon to collapse the 1 st record
  await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-No console error is thrown 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/921347
// test('33-Progress Div Issue', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'default-functionalities?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Screenshot validation-Progress Div is straight 
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/923804
test('34-Console error when performing toggle selection', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-923804');
  await page.waitForTimeout(2000);
  //Click to select the row
  await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
  await page.waitForTimeout(500);
  //Click the same row
  await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Console error not thrown
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/926327
test('35-926327-Selection not restricted ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-926327');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-926327' });
  await page.waitForTimeout(2000);
  //Click second row on the chart side of the component
  await page.locator('(//tr[contains(@class,"e-chart-row")])[2]').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-selection is not made on the chart side on the row
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/926329
test('36-926329-Next timespan not working', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/Resource-sb');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Resource-sb' });
  await page.waitForTimeout(2000);
  //Click Next Timespan button
  await page.locator("(//span[text()='Next timespan'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Horizontal scrollbar is moved to end when next timespan is clicked
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/927689
test('37-927689-ShiftTab key issue in drag and drop', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-927689');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-927689' });
  await page.waitForTimeout(2000);
  //Click second row on the chart side of the component
  await page.locator('(//td[contains(@class,"e-rowcell")])[11]').click();
  await page.waitForTimeout(2000);
  //Simulate Shift + Tab key press continuously
  for (let i = 0; i < 5; i++) {  // Adjust the loop count as needed
    await page.keyboard.press('Shift+Tab');
    await page.waitForTimeout(500); // Small delay for visibility
  }
  //Screenshot validation-Records are updated properly.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/929981
test('39-929981-RowSelected event triggers in cell edit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-929981');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-929981' });
  await page.waitForTimeout(1000);
  //Double click the cell to edit 
  await page.locator('(//td[contains(@class,"rowcell")])[9]').dblclick();
  await page.waitForTimeout(1000);
  //Type the record using keyboard
  await page.keyboard.type('Task 1');
  await page.waitForTimeout(500);
  //Press the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  //Screenshot validation-Records are selected on the chart side
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/939399
test('40-939399-Fix Scrolling Glitch in Large Dataset', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-939399');
  await page.waitForLoadState('load');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-939399' });
  await page.waitForTimeout(4000);
  //Scroll down

  await page.evaluate(() => {
    document.querySelectorAll('.e-content')[1].scrollTop = 100;
  });

  await page.waitForTimeout(2000);
  //Screenshot validation-Records updated properly 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/939763
test('41-939763-Issue with CollapseAll Toolbar', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-939763');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-939763' });
  await page.waitForTimeout(5000);
  //Scroll down
  await page.locator("(//button[text()='CollapsebyKey'])[1]").click();
  await page.waitForTimeout(5000);
  //Screenshot validation-No issue when click the collapse all button
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/939767
test('42-939767-Task Name and Resources Not Updated', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-939767');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-939767' });
  await page.waitForTimeout(2000);
  //Click the Add button on the toolbar
  await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
  await page.waitForTimeout(500);
  //Click the Save button 
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(5000);
  //Screenshot validation-Records are updated properly for the Taskname and resources
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/908220
test('43-908220-The zoom level resets', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-908220');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-908220' });
  await page.waitForTimeout(2000);
  //Click the Zoom in button
  await page.locator("(//span[text()='Zoom in'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Zoom in button
  await page.locator("(//span[text()='Zoom in'])[1]").click();
  await page.waitForTimeout(500);
  //PDF Export
  await page.locator("(//button[text()='PDF Export'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-No issue when click the collapse all button
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942562 
test('44-942562-Column header alignment', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/837290');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/837290' });
  await page.waitForTimeout(2000);
  //Screenshot validation-Column header alignment is proper
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942568
test('45-942568-Exception occurs after editing status', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/844446-custom-column');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/844446-custom-column' });
  await page.waitForTimeout(2000);
  //Double click the status column
  await page.locator('(//td[contains(@class,"rowcell")])[27]').dblclick();
  await page.waitForTimeout(2000);
  //Screenshot validation-No exception is thrown after editing the status column
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942589
test('46-942589-Resolve Enter Key Functionality ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/Resourcemultitaskbar');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Resourcemultitaskbar' });
  await page.waitForTimeout(2000);
  //Click the Add button on the toolbar
  await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
  await page.waitForTimeout(500);
  //Press the Enter button 
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Record is added.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942593
// test('47-942593-Fix Exception on Column Menu ', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/CustomAdaptor');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CustomAdaptor' });
//   await page.waitForTimeout(2000);
//   //Click the column menu
//   await page.locator("(//div[contains(@class,'e-icons e-columnmenu')])[2]").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-No console error is thrown
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
// });

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942597
test('48-942597-Console Error on Cell Edit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/CustomAdaptor');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CustomAdaptor' });
  await page.waitForTimeout(2000);
  //Click collapse all button
  await page.locator("(//span[text()='Collapse all'])[1]").click();
  await page.waitForTimeout(500);
  //Double click 3rd parent record
  await page.locator('(//td[contains(@class,"rowcell")])[16]').dblclick();
  await page.waitForTimeout(1000);
  //Enter the Null value record
  await page.locator('(//input[contains(@class,"control")])[1]').fill('');
  await page.waitForTimeout(500);
  //Press the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  //Double click the start date
  await page.locator('(//td[contains(@class,"rowcell")])[17]').dblclick();
  await page.waitForTimeout(2000);
  //Screenshot validation-Console error is not thrown
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/945103
test('49-945103-Selection Made is Not Proper', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/Multitaskbar-rtl');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Multitaskbar-rtlr' });
  await page.waitForTimeout(2000);
  //Click collapse all button on toolbar
  await page.locator("(//span[text()='Collapse all'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Add button on the toolbar
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
  await page.waitForTimeout(500);
  //Click the resources to select it
  await page.locator('(//div[contains(@class,"e-tab-text")])[3]').click();
  await page.waitForTimeout(500);
  //Click the checkbox to select Rose Fuller
  await page.locator('(//span[contains(@class,"e-uncheck")])[2]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Selection is made properly.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/945092
test('50-945092-Console Error Add Columns', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/E2EMigration/ColumnVirtual');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/E2EMigration/ColumnVirtual' });
  await page.waitForTimeout(2000);
  //Click Add Columns button on the toolbar
  await page.locator("(//button[text()='Add Columns'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Console error is not thrown when click the Add Columns.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/935226
test('51-935226-Offset value not updated', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-935226');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-935226' });
  await page.waitForTimeout(1000);
  //Click the Add button on the toolbar
  await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
  await page.waitForTimeout(500);
  //Click the Duration to enter the records
  await page.locator("(//input[contains(@class,'control')])[5]").fill('3 days');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Add button to add task 2
  await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
  await page.waitForTimeout(500);
  //Click the Duration to enter the records
  await page.locator("(//input[contains(@class,'control')])[5]").fill('2 days');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Double click the 1 st child taskbar to open the dialog tab
  await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Duration to edit the record
  await page.locator("(//input[contains(@class,'control')])[5]").fill('3 days');
  await page.waitForTimeout(500);
  //Select the Dependency tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Click the Add button under dependency
  await page.locator("(//span[contains(@class,'e-add')])[2]").click();
  await page.waitForTimeout(500);
  //Press the tab key
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  //Press Arrow down 2 times to select the dependency
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(500);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(500);
  //To move the selection away press the Tab key
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click the dependency to check if offset value has been updated.
  await page.locator("(//td[contains(@class,'e-rowcell')])[7]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Offset value is updated in dependency field
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/939774
test('52-939774-Timeline Not Exported ', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-939774');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-939774' });
  await page.waitForTimeout(1000);
  //Click Zoom to Fit button on the toolbar
  await page.locator("(//span[text()='Zoom to fit'])[1]").click();
  await page.waitForTimeout(1000);
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//span[text()='PDF Export'])[1]").click()]);
  await page.waitForTimeout(1000);
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/Overview1/PDF15/" + download.suggestedFilename();
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
    //expect(page).toMatchSnapshot('ExportPdf15.png', { maxDiffPixels: 100 });
  }
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941086
test('53-941086-Console Error Dynamically Changing Record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941086');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941086' });
  await page.waitForTimeout(2000);
  //Click the record to switch
  await page.locator("(//span[contains(@class,'e-input')])[2]").click();
  await page.waitForTimeout(500);
  //Press Arrow Down to select records ,5,000
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(500);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(500);
  //Press the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2500);
  //Screenshot validation-No console error is thrown when change the records.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942846
// test('54-942846-Consoe error thrown,', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ_942846');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ_942846' });
//   await page.waitForTimeout(2000);
//   //Click Add button
//   await page.locator("(//span[contains(@class,'e-add')])[1]").click();
//   await page.waitForTimeout(500);
//   //Click the save button
//   await page.locator("(//button[text()='Save'])").click();
//   await page.waitForTimeout(500);
//   //Click Add button
//   await page.locator("(//span[contains(@class,'e-add')])[1]").click();
//   await page.waitForTimeout(500);
//   //Click the save button
//   await page.locator("(//button[text()='Save'])").click();
//   await page.waitForTimeout(500);
//   //Press the Control + A 
//   await page.keyboard.press('Control+A');
//   await page.waitForTimeout(2500);
//   //Click the Indent button
//   await page.locator("(//span[contains(@class,'e-indent')])[1]").click();
//   await page.waitForTimeout(500);
//   //Screenshot validation-No console error is thrown when indent the records
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
// });

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/847194
test('55-847194-cancel cell edit action', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-847194');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-847194' });
  await page.waitForTimeout(2000);
  //Double click the taskname to cell edit it 
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").dblclick();
  await page.waitForTimeout(500);
  //Click the record to edit it
  await page.locator("(//input[contains(@class,'e-control')])[7]").click();
  await page.waitForTimeout(500);
  //Enter the records
  await page.locator("(//input[contains(@class,'e-control')])[7]").fill('Parent');
  await page.waitForTimeout(500);
  //Press ESC button
  await page.keyboard.press('Escape');
  await page.waitForTimeout(2500);
  //Screenshot validation-Record is cleared and not edited and reverted 
  expect(await page.locator('.e-grid').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/867456
test('56-867456-Exception Thrown', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-867456');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-867456' });
  await page.waitForTimeout(2000);
  //Double click the taskname to cell edit it 
  await page.locator("(//button[text()='Reorder Row'])[1]").click();
  await page.waitForTimeout(2500);
  //Screenshot validation-Rows are reordered 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/873679
test('57-873679-Start date and end date is not updated', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-873679');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-873679' });
  await page.waitForTimeout(2500);
  //Screenshot validation-The start date and the End date are now in proper state
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/952313
test('58-952313-Console Error on Save Action ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-952313');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-952313' });
  await page.waitForTimeout(2000);
  //Click the Add button on the toolbar
  await page.locator("(//span[text()='Add'])[1]").click();
  await page.waitForTimeout(1000);
  //Enter the duration record
  await page.locator("(//input[contains(@class,'textbox')])[4]").fill('3 days');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-No console error is thrown and the record is added.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949027
test('59-949027', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949027');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949027' });
  await page.waitForTimeout(2000);
  //Hover over the cursor
  await page.mouse.move(944, 196); // Adjust the coordinates as needed
  await page.waitForTimeout(2000);
  //Screenshot validation-Console error is not thrown when hovering over the connector line and record shown when hover.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/945759
test('60-945759-Milestone end date validation', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-945759');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-945759' });
  await page.waitForTimeout(2000);
  //Double click the End Date to cell edit it 
  await page.locator("(//td[contains(@class,'rowcell')])[14]").dblclick();
  await page.waitForTimeout(1000);
  //Enter the duration record
  await page.keyboard.type('1/4/2019');
  await page.waitForTimeout(500);
  //Press the Enter button on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  //Right click to open the context menu
  await page.click("(//td[contains(@class,'rowcell')])[12]", { button: 'right' });
  await page.waitForTimeout(1000);
  //Click Convert to Milestone option
  await page.locator("(//li[text()='Convert'])[1]").click();
  await page.waitForTimeout(500);
  //To Milestone option
  await page.locator("(//li[text()='To Milestone'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The End date is updated properly without issue
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/940362
test('61-940362', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-940362');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-940362' });
  await page.waitForTimeout(2000);
  //Click Zoom To Fit button on the toolbar
  await page.locator("(//span[text()='Zoom to fit'])[1]").click();
  await page.waitForTimeout(500);
  //Click Timeline Change button on the toolbar
  await page.locator("(//button[text()='Timeline Change'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The records are updated properly after changing the timeline
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/940309
test('62-940309-Connecting Tasks with Decimal', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-940309');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-940309' });
  await page.waitForTimeout(2000);
  // Click the taskbar 
  await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").click();
  await page.waitForTimeout(1000);
  const src = page.locator("(//div[contains(@class,'e-connectorpoint-left ')])[3]");
  const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left ')])[2]");
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
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});


//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/939864
test('63-99864-Taskbar Not Rendered', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-99864');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-99864' });
  await page.waitForTimeout(2000);
  // Press the button to download the PDF files    
  const [download] = await Promise.all([page.waitForEvent('download'),
  await page.locator("(//span[text()='PDF Export'])[1]").click()]);
  await page.waitForTimeout(500);
  // Define the Actual Export File Path with proper name           
  const path = "./tests/Gantt_SB/PDFExport16/PDF16/" + download.suggestedFilename();
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
    //Screenshot validation-The PDF image the taskbar is rendered properly.
    expect(page).toMatchSnapshot('PDFExport16.png', { maxDiffPixels: 100 });
  }
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/938321
test('64-938321-Zoom To Fit After Search', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-938321');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-938321' });
  await page.waitForTimeout(2000);
  //Enter New Task 5 in to the search bar
  await page.locator('//input[@aria-label="textbox"]').click();
  await page.waitForTimeout(500);
  //Enter the task 5 record in the search bar
  await page.keyboard.type('New Task 5');
  await page.waitForTimeout(500);
  //Click Zoom to Fit button on the toolbar
  await page.locator("(//span[contains(@class,'zoomtofit')])[1]").click();
  await page.waitForTimeout(2000);
  //Click the search bar to clear the records
  await page.locator('//input[@aria-label="textbox"]').click();
  await page.waitForTimeout(500);
  //Clear the records on the search bar
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Press the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  //Screenshot validation-The horizontal scrollbar is still vsible and all the other tasks are rendered both on the grid and chart side of the component.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/938315
test('65-938315-Resolve Persistent Tooltip', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-938315');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-938315' });
  await page.waitForTimeout(2000);
  // Screenshot validation - The tooltip does not remain persistent 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});


//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/939758
test('66-939758-Splitter Position Not Updated', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-939758');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-939758' });
  await page.waitForTimeout(2000);
  //Click on the "SplitterIndex" button to move the splitter to a predefined position.
  await page.locator("(//button[text()='SplitterIndex'])[1]").click();
  await page.waitForTimeout(500);
  //Click the "SplitterIndex" button again to attempt moving the splitte
  await page.locator("(//button[text()='SplitterIndex'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Splitter position is updated properly 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949116
test('67-949116-Context Menu Not Showing Split Task ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949116');
  await page.waitForTimeout(1000);
  //Right click the child taskbar to show context menu
  await page.locator("(//div[contains(@class,'e-gantt-child-progressbar')])[1]").click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  const splitItem = page.locator("(//li[text()='Split Task'])[1]");
  await expect(splitItem).toHaveText('Split Task');
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949089

test('68-949089-Segment indicated', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949089');
  await page.waitForTimeout(2500);
  // Right click the child taskbar
  const childTask = page.locator("(//div[contains(@class,'e-gantt-child')])[1]");
  await childTask.click({ button: 'right' });
  await page.waitForTimeout(200);
  // Click Split Task
  await page.locator("(//li[text()='Split Task'])[1]").click();
  await page.waitForTimeout(200);
  //Wait for segments to appear (auto-wait instead of timeout)
  const segments = page.locator(".e-segmented-taskbar, .e-taskbar");
  await expect(segments.first()).toBeVisible();
  //Get count manually
  const count = await segments.count();
  //Assertion
  expect(count).toBeGreaterThan(1);
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/940360
test('69-940360-Baseline Not Visible', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-940360');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-940360' });
  await page.waitForTimeout(2000);
  //Click the icon for Martin Tamer to Expand the records.
  await page.locator("(//span[contains(@class,'e-treegridcollapse')])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Baseline is visible
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949114
test('70-949114-Exception Thrown When Changing Resource Unit ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949114');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949114' });
  await page.waitForTimeout(2000);
  //Click the 4 record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[25]").click();
  await page.waitForTimeout(500);
  //Click the Edit button to open the dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //Click to select the resources tab to open the dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Double click the resources to edit it of 1 st resource
  await page.locator("(//td[contains(@class,'e-rowcell')])[68]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('400');
  await page.waitForTimeout(500);
  //Press Tab key
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The duration should be updated correctly based on the work formula and no exception should be thrown.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949113
test('71-949113-Exception Thrown When Changing Work Value ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949113');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949113' });
  await page.waitForTimeout(2000);
  //Click the 4 record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[25]").click();
  await page.waitForTimeout(500);
  //Click the Edit button to open the dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //click the Work Unit to edit it
  await page.locator("(//input[contains(@class,'e-control')])[7]").click();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('32');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click to check the work hours for the 4 task on the grid side 
  await page.locator("(//td[contains(@class,'e-rowcell')])[31]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation- work value updated the duration or resource unit correctly without throwing exceptions
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949109
test('72-949109-Incorrect Resource Unit Update in Fixed Work ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949109');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949109' });
  await page.waitForTimeout(2000);
  //Click the 4 record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[25]").click();
  await page.waitForTimeout(500);
  //Click the Edit button to open the dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //click the Duration Unit to edit it
  await page.locator("(//input[contains(@class,'e-control')])[5]").click();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('2 minutes');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation- he resource unit should update correctly 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949107
test('73-949107-Incorrect Resource Unit Update in Fixed Work ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949107');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949107' });
  await page.waitForTimeout(2000);
  //Click the 4 record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[25]").click();
  await page.waitForTimeout(500);
  //Click the Edit button to open the dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //click the Duration Unit to edit it
  await page.locator("(//input[contains(@class,'e-control')])[5]").click();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('2 hours');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation- The resource unit should update correctly 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949105
test('74-949105-Incorrect Duration Update in Fixed Work Task Type', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949105');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949105' });
  await page.waitForTimeout(2000);
  //Click the 4 record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[25]").click();
  await page.waitForTimeout(500);
  //Click the Edit button to open the dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //Click to select the resources tab to open the dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Double click the resources to edit it of 1 st resource
  await page.locator("(//td[contains(@class,'e-rowcell')])[68]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('100');
  await page.waitForTimeout(500);
  //Press Tab key
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Duration should be recalculated correctly based on the Fixed Work formula
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949104
test('75-949104-Incorrect Duration Update in Fixed Work Task Type', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949104');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949104' });
  await page.waitForTimeout(2000);
  //Click the 4 record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[25]").click();
  await page.waitForTimeout(500);
  //Click the Edit button to open the dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //click the work  to edit it 
  await page.locator("(//input[contains(@class,'e-control')])[7]").click();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('32');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Incorrect Duration Update in Fixed Work Task Type
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949094
test('76-949094-Incorrect Work Value Update in Fixed Duration ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949094');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949094' });
  await page.waitForTimeout(2000);
  //Click the 4 record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[41]").click();
  await page.waitForTimeout(500);
  //Click the Edit button to open the dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //click the Duration to edit it 
  await page.locator("(//input[contains(@class,'e-control')])[5]").click();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('6 Minutes');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click work to show the work value
  await page.locator("(//td[contains(@class,'e-rowcell')])[47]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Incorrect Duration Update in Fixed Work Task Type
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949092
test('77-949092-Incorrect Work Value Update in Fixed Duration ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949092');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949092' });
  await page.waitForTimeout(2000);
  //Click the 4 record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[41]").click();
  await page.waitForTimeout(500);
  //Click the Edit button to open the dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //click the Duration to edit it 
  await page.locator("(//input[contains(@class,'e-control')])[5]").click();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('6 hours');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click work to show the work value
  await page.locator("(//td[contains(@class,'e-rowcell')])[47]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The work hours are updatd properly as 6 hours according to the calculation
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949087
test('78-949087-Incorrect Duration Update When Changing Resource Unit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949087');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949087' });
  await page.waitForTimeout(2000);
  //Click the 2nd record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
  await page.waitForTimeout(500);
  //Click the Edit button to open the dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //Click to select the resources tab to open the dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Double click the resources to edit it of 1 st resource
  await page.locator("(//td[contains(@class,'e-rowcell')])[68]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('200');
  await page.waitForTimeout(500);
  //Press Tab key
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The duration is adjusted properly based on the resource unit and no exception is thrown.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949085
test('79-949085-Incorrect Duration Update in Fixed Work Task Type', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949085');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/949085' });
  await page.waitForTimeout(2000);
  //Click the 4 record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[25]").click();
  await page.waitForTimeout(500);
  //Click the Edit button to open the dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //click the work  to edit it 
  await page.locator("(//input[contains(@class,'e-control')])[7]").click();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('48');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Check the duration to show the duration value
  await page.locator("(//td[contains(@class,'e-rowcell')])[13]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Incorrect Duration Update in Fixed Work Task Type
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949078
test('80-949078-Invalid Work Value Updated', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949078');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949078' });
  await page.waitForTimeout(2000);
  //Double click the 2nd record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[9]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Edit button to open the dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Duration to edit it 
  await page.locator("(//input[contains(@class,'e-control')])[5]").click();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('200');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Select work to show the work value
  await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation- work value should be correctly updated based on the duration change.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949075
test('81-949075-Incorrect Duration Calculation When Work Unit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949075');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949075' });
  await page.waitForTimeout(2000);
  //Select work to show the work value
  await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation- work value should be correctly updated based on the duration change.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949072
test('82-949072-Duration Value Not Updated Correctly  ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949072');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949072' });
  await page.waitForTimeout(2000);
  //Click the 4 record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
  await page.waitForTimeout(500);
  //Click the Edit button to open the dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //Click to select the resources tab to open the dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Double click the resources to edit it of 1 st resource
  await page.locator("(//td[contains(@class,'e-rowcell')])[68]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('200');
  await page.waitForTimeout(500);
  //Press Tab key
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The duration should be recalculated correctly based on the Fixed Unit task type formula.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949071
test('83-949071-Duration Value Not Updated Correctly  ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949071');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949071' });
  await page.waitForTimeout(2000);
  //Double click the work value  to edit it
  await page.locator("(//td[contains(@class,'e-rowcell')])[15]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('48');
  await page.waitForTimeout(500);
  //Click the Update button on the toolbar
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(2000);
  //Check the duration to show the duration value
  await page.locator("(//td[contains(@class,'e-rowcell')])[13]").click();
  //Screenshot validation-When the work value is changed to 48, the duration should be calculated correctly based on the selected task type and unit.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949069
test('84-949069-Work Value Not Updated Correctly', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949069');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949069' });
  await page.waitForTimeout(2000);
  //Double click the 2nd record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[9]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Edit button to open the dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Duration to edit it 
  await page.locator("(//input[contains(@class,'e-control')])[5]").click();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('3 hours');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Select work to show the work value
  await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-When the duration is changed to 3 hours, the work value should update correctly based on the selected task type and unit.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949065
test('85-949065-Incorrect Duration Calculation in Hour Mode ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949065');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949065' });
  await page.waitForTimeout(2000);
  //Select Duration 
  await page.locator("(//td[contains(@class,'e-rowcell')])[13]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-When the duration unit is in hours, the duration calculation should be based on hour mode, not day mode.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949061
test('86-949061-Fix Taskbar Update Issues', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949061');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949061' });
  await page.waitForTimeout(2000);
  //Double click the 5 th row record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
  await page.waitForTimeout(1000);
  //Type the record to enter
  await page.keyboard.type('1FS');
  await page.waitForTimeout(500);
  //Click the Update button on the toolbar
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Predecessor is updatd properly and the taskbar is updated correctly.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949058
test('87-949058-Fix Connector Line Visibility Issue', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949058');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949058' });
  await page.waitForTimeout(2000);
  //Click the Add processor button on the toolbar
  await page.locator("(//button[text()='Add Predecessor'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Dependency lines are rendered between the tasks even when taskbars are placed correctly.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949051

test('88-949051-Confirm UpdateResource and AddResource', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949051');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949051' });
  await page.waitForTimeout(2000);
  //Click the Add processor button on the toolbar
  await page.locator("(//button[text()='Update Assignment'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Add btton on the toolbar
  await page.locator("(//span[text()='Add'])[1]").click();
  await page.waitForTimeout(500);
  //Select the Task Type Fixed Work
  await page.locator("(//span[contains(@class,'e-input')])[9]").click();
  await page.waitForTimeout(500);
  //Select Fixed Work
  await page.locator("(//li[text()='FixedWork'])[1]").click();
  await page.waitForTimeout(500);
  //select work 
  await page.locator("(//input[contains(@class,'e-control')])[7]").click();
  await page.waitForTimeout(500);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('24');
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Add Assignment button on the toolbar
  await page.locator("(//button[text()='Add Assignment'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Resource is updated properly and the taskbar is updated correctly.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/951240
test('89-951240-Validate Resource Unit Update ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-951240');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-951240' });
  await page.waitForTimeout(2000);
  //Screenshot validation-Resource unit  is updated properly and the taskbar is updated correctly.
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949038
test('90-949038-Update Offset Value on Cell/Dialog Edit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949038');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949038' });
  await page.waitForTimeout(2000);
  //Double click the 4 th row record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[38]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('2SF');
  await page.waitForTimeout(500);
  //Click the Update button on the toolbar
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Check the UI
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949033
test('91-949033-Update Offset Value on Cell/Dialog Edit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949033');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949033' });
  await page.waitForTimeout(2000);
  //Click the  processor
  await page.locator("(//td[contains(@class,'e-rowcell')])[27]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Offset values should be displayed correctly in the grid for predecessors.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949030
test('92-949030-Display Offset Value for Predecessors with Hour Duration Units', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949030');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949030' });
  await page.waitForTimeout(2000);
  //Click the  predecessor
  await page.locator("(//td[contains(@class,'e-rowcell')])[27]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Offset values should be displayed correctly in the grid for predecessors.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949029
test('93-949029-Drag the taskbar ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949029');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949029' });
  await page.waitForTimeout(600);
  const taskbarSelector = '.e-gantt-parent-taskbar';
  const taskbar = await page.locator(taskbarSelector).first();
  const box = await taskbar.boundingBox();
  if (!box) throw new Error('Failed to locate the taskbar element')
  // Drag operation - 33px left (one cell)
  await page.mouse.move(box.x + 10, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + 10 - 33, box.y + box.height / 2, { steps: 5 });
  await page.mouse.up();
  await page.waitForTimeout(2000);
  await page.locator("//span[@class='e-label' and text()='Martin Tamer [0%], Van Jack']").click();
  await page.waitForTimeout(300);
  //Screenshot validation-Work Value updated
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949029
test('94-949029-Updating End Date via Dialog', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949029');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949029' });
  await page.waitForTimeout(2000);
  //Select the 2nd record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
  await page.waitForTimeout(500);
  //Select Edit button to open dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //select End date to edit it
  await page.locator("(//input[contains(@class,'e-control')])[4]").click();
  await page.waitForTimeout(500);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('3/31/2022');
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click to observe if work value is updated
  await page.locator("(//td[contains(@class,'e-rowcell')])[13]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Work Value is updated properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949029
test('95-949029-Direct Duration Editing', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949030');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949029' });
  await page.waitForTimeout(2000);
  //Double click the duration to edit it
  await page.locator("(//td[contains(@class,'e-rowcell')])[14]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('2 days');
  await page.waitForTimeout(500);
  //Click the Update button on the toolbar
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Duration is editted properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941850
test('96-941850-Resolve Incorrect Update on Work ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941850');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941850' });
  await page.waitForTimeout(2000);
  //Select the 2nd record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
  await page.waitForTimeout(500);
  //Select Edit button to open dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //select Work  to edit it
  await page.locator("(//input[contains(@class,'e-control')])[7]").click();
  await page.waitForTimeout(500);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('0');
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-When work is set to 0, it should not affect duration; resource units should also reflect this change accurately per documentation.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941841
test('97-941841-Correct Update Behavior for Resource Unit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941841');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941841' });
  await page.waitForTimeout(2000);
  //Select the 2nd record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[10]").click();
  await page.waitForTimeout(500);
  //Select Edit button to open dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //Click to select the resources tab to open the dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Double click the resources to edit it of 1 st resource
  await page.locator("(//td[contains(@class,'e-rowcell')])[68]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('50');
  await page.waitForTimeout(500);
  //Press Tab key
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Select work to show the work value
  await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The work field, not the duration, should update when the Resource Unit is changed.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941820
test('98-941820-Resolve Resource Unit Update Error', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941820');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941820' });
  await page.waitForTimeout(2000);
  //Double click the work to edit it
  await page.locator("(//td[contains(@class,'e-rowcell')])[47]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('0 days');
  await page.waitForTimeout(500);
  //Click the Update button on the toolbar
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The resource unit should remain 0 when work is set to 0.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941815
test('99-941815-Fix Incorrect Resource Unit Update ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941815');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941815' });
  await page.waitForTimeout(2000);
  //Click the Add button on the toolbar
  await page.locator("(//span[text()='Add'])[1]").click();
  await page.waitForTimeout(500);
  //Select the Task Type Fixed Duration
  await page.locator("(//span[contains(@class,'e-input')])[9]").click();
  await page.waitForTimeout(500);
  //Select Fixed Duration
  await page.locator("(//li[text()='FixedDuration'])[1]").click();
  await page.waitForTimeout(500);
  //Click to select the resources tab to open the dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Double click the resources to edit it of 1 st resource
  await page.locator("(//td[contains(@class,'e-rowcell')])[68]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('50');
  await page.waitForTimeout(500);
  //Press Tab key
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //select work to show the work value
  await page.locator("(//td[contains(@class,'e-rowcell')])[7]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The work should be updated, not the unit, when resources are modified.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941810
test('100-941810-Fix Resource Unit Update Issue', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941810');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941810' });
  await page.waitForTimeout(2000);
  //Click the Add button on the toolbar
  await page.locator("(//span[text()='Add'])[1]").click();
  await page.waitForTimeout(500);
  //Select the Task Type Fixed Duration
  await page.locator("(//span[contains(@class,'e-input')])[9]").click();
  await page.waitForTimeout(500);
  //Select Fixed Duration
  await page.locator("(//li[text()='FixedDuration'])[1]").click();
  await page.waitForTimeout(500);
  //Click to select the resources tab to open the dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Double click the resources to edit it of 1 st resource
  await page.locator("(//td[contains(@class,'e-rowcell')])[68]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('50');
  await page.waitForTimeout(500);
  //Press Tab key
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //select Edit button to open dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //Click to select the resources tab to open the dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Select the 3rd resource to edit it
  await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck ')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The resource unit should update correctly when modified through the dialog tab.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941682
test('101-941682-Handle Zero Resource Unit Update ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941682');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941682' });
  await page.waitForTimeout(2000);
  //Click record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
  await page.waitForTimeout(500);
  //Click the Edit button on the toolbar
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //Click to select the resources tab to open the dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Double click the resources to edit it of 1 st resource
  await page.locator("(//td[contains(@class,'e-rowcell')])[68]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('0');
  await page.waitForTimeout(500);
  //Press Tab key
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-When the resource unit is set to 0, appropriate changes or validations should occur, rather than retaining previous values.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941667
test('102-941667-Resolve Taskbar Width Update Issue', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941667');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941667' });
  await page.waitForTimeout(2000);
  //Click record on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
  await page.waitForTimeout(500);
  //Click the Edit button on the toolbar
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //click the Work Unit to edit it
  await page.locator("(//input[contains(@class,'e-control')])[7]").click();
  await page.waitForTimeout(500);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('8');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The taskbar width should adjust to match the updated duration value when the work value changes.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/940361
test('103-940361-Font Family for Header and Footer ', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-940361');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-940361' });
  await page.waitForTimeout(2000);
  // Press the button to download the PDF files
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()
  ]);
  await page.waitForTimeout(500);
  {
    // ensure footer cleared for PDF
    await clearPdfFooter(page);
  }
  // Define the Actual Export File Path with proper name
  const path = "./tests/Gantt_SB/PDFExportFiles/PDF-940361/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // Attach the downloaded file to the report
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  // Convert the PDF to PNG format
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  // Ensure the PDF has exactly one page
  expect(doc.length).toBe(1);
  // Convert the page to image format and take a snapshot
  for await (const page of doc) {
    //Screenshot validation-The header and footer should be displayed correctly in the exported PDF file.
    expect(page).toMatchSnapshot('Font.png', { maxDiffPixels: 100 });
  }
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941817
test('104-941817-Fix Unit Value Update Issue ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941817');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941817' });
  await page.waitForTimeout(2000);
  //Click the Update Assignment
  await page.locator("(//button[text()='Update Assignment'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Add button on the toolbar
  await page.locator("(//td[contains(@class,'e-rowcell')])[47]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The work should be updated, not the unit, when resources are modified using the method.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/940359
test('105-940359-Resource Allocation Differs from Initial Rendering', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-940359');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-940359' });
  await page.waitForTimeout(2000);
  //Screenshot validation-he new values 50 and 70 are displayed correctly for the resource units on the chart side.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/940357
test('106-940357-Work Field Not Updating When Resource Unit ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-940357');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-940357' });
  await page.waitForTimeout(2000);
  //Click the Estimation approval  on the grid side
  await page.locator("(//td[contains(@class,'e-rowcell')])[64]").click();
  await page.waitForTimeout(500);
  //Click the Edit button to open the dialog tab
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //Click to select the resources tab to open the dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
  await page.waitForTimeout(500);
  //Double click the resources to edit it of 1 st resource
  await page.locator("(//td[contains(@class,'e-rowcell')])[164]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('200');
  await page.waitForTimeout(500);
  //Press Tab key
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Work field should update automatically when the Resource Unit is modified.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/940355
test('107-940355-Work Calculation Not Working Properly', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-940355');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-940355' });
  await page.waitForTimeout(2000);
  //Click the Add button on the toolbar
  await page.locator("(//span[text()='Add'])[1]").click();
  await page.waitForTimeout(500);
  //Click to select work hours to edit it 
  await page.locator("(//input[contains(@class,'e-control')])[3]").click();
  await page.waitForTimeout(500);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('8');
  await page.waitForTimeout(500);
  //Click to select the resources tab to open the dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
  await page.waitForTimeout(500);
  //Select  the 3 rd resource to cclick
  await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck ')])[4]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Double click the End date to cell edit it to have 5 days
  await page.locator("(//td[contains(@class,'e-rowcell')])[6]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('4/1/2022');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Work field should update automatically when the Resource Unit is modified.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/940353
test('108-940353-Pdf export issue with baselines', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-940353');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-940353' });
  await page.waitForTimeout(2000);
  // Press the button to download the PDF files
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator("(//span[contains(@class,'e-pdfexport')])[1]").click()
  ]);
  await page.waitForTimeout(500);
  // Define the Actual Export File Path with proper name
  const path = "./tests/Gantt_SB/PDFExportFiles/PDF-940353/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // Attach the downloaded file to the report
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  // Convert the PDF to PNG format
  const doc = await pdf(path);
  await page.waitForTimeout(500);
  // Ensure the PDF has exactly one page
  expect(doc.length).toBe(1);
  // Convert the page to image format and take a snapshot
  for await (const page of doc) {
    //Screenshot validation-The baseline should be properly rendered in the chart section only and should not appear on the grid side in the exported PDF.
    await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/952989
test('109-952989-Fix Gantt Chart End Date', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-952989');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-952989' });
  await page.waitForTimeout(2000);
  //Click the updaterecordById
  await page.locator("(//button[text()='Update Record'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Gantt chart should accurately display the end date changes after the updateRecordById function is executed reflecting in both the UI and underlying data.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949057
test('110-949057-Fix Predecessor Value Saving', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949057');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949057' });
  await page.waitForTimeout(2000);
  //Double Click to cell edit 
  await page.locator("(//td[contains(@class,'e-rowcell')])[20]").dblclick();
  await page.waitForTimeout(1000);
  //Type Record to Enter in dependency
  await page.keyboard.type('2SF');
  await page.waitForTimeout(500);
  //Press the Enter key
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  //Screenshot validation-The value is not updated 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949032
test('111-949032-Duration Value Not Updated Addig Records', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949032');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949032' });
  await page.waitForTimeout(2000);
  //Click Add Record Button on the toolbar 
  await page.locator("(//button[text()='Add Record'])[1]").click();
  await page.waitForTimeout(1000);
  //Click dependency record on grid side of the added record to check on it
  await page.locator("(//td[contains(@class,'e-rowcell')])[14]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Duration value should be set correctly as per the provided input ("3") when adding the task.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949000
test('112-949000-Error When Adding a Task with a Resource', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949000');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949000' });
  await page.waitForTimeout(2000);
  //Click Add Record Button on the toolbar 
  await page.locator("(//button[text()='Add Record'])[1]").click();
  await page.waitForTimeout(500);
  //Click fixed type record on grid side of the added record to check on it
  await page.locator("(//td[contains(@class,'e-rowcell')])[14]").click();
  await page.waitForTimeout(500);
  //Click Edit button to open dialog
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //Click to select the resources tab to open the dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //select resources to add 
  await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck ')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  await page.locator('(//td[contains(@class, "e-rowcell")])[2]').click();
  await page.waitForTimeout(200);
  //Screenshot validation-No console error thrown when add new resources
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/943453
test('113-943453-Investigate Exception in ExpandByKey Method', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-943453');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-943453' });
  await page.waitForTimeout(2000);
  //Click collapse button on the toolbar
  await page.locator("(//span[text()='Collapse all'])[1]").click();
  await page.waitForTimeout(500);
  //Click ExpandByKey on the toolbar 
  await page.locator("(//button[text()='ExpandKey'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The ExpandKey method should execute without exceptions, successfully expanding the specified node
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/943294   
test('114-93294-Fix Gantt Chart expandState Update Issue', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-93294');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-93294' });
  await page.waitForTimeout(2000);
  //Click updaterecordById button 
  await page.locator("(//button[text()='Update Record'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The record is in collapsed state
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942003
test('115-942003-Fix Work Value Update Bug in Unscheduled Mode', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-942003');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-942003' });
  await page.waitForTimeout(2000);
  //click the duration of fixed duration task
  await page.locator("(//td[contains(@class,'e-rowcell')])[14]").click();
  await page.waitForTimeout(500);
  //Click the edit button
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //Click to edit the duration value
  await page.locator("(//input[contains(@class,'e-control')])[5]").click();
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('2 days');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //click the duration of fixed duration task
  await page.locator("(//td[contains(@class,'e-rowcell')])[14]").click();
  await page.waitForTimeout(500);
  //Click the edit button
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The work value record is indicated
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942002
test('116-942002-Correct Work Value Update in Fixed Duration Task Type', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-942002');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-942002' });
  await page.waitForTimeout(2000);
  //Click updaterecordById button 
  await page.locator("(//button[text()='Update Record By ID'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The work value should update as per documentation without affecting the resource units when the task type is fixed duration.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942001
test('117-942001-Fix Incorrect Unit Update in Auto Task Mode', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-942001');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-942001' });
  await page.waitForTimeout(2000);
  //Click updaterecordById button 
  await page.locator("(//button[text()='Update Record By ID'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The work value should update as per documentation without affecting the resource units when the task type is fixed duration.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942000
test('118-942000-Resolve Work Value Update Issue', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-942000');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-942000' });
  await page.waitForTimeout(2000);
  //Click updaterecordById button 
  await page.locator("(//button[text()='Update Record By ID'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The work value should update as per documentation without affecting the resource units when the task type is fixed duration.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941981
test('119-941981-Fix Work Value Update Issue Using UpdateRecordsByID', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941981');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941981' });
  await page.waitForTimeout(2000);
  //Click updaterecordById button 
  await page.locator("(//button[text()='Update Record By ID'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Both the work value and resource unit should update in accordance with documentation when the duration is changed.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941979
test('120-941979-Correct Resource Unit Update', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941979');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941979' });
  await page.waitForTimeout(2000);
  //Click record on grid side of the added record to check on it
  await page.locator("(//td[contains(@class,'e-rowcell')])[32]").click();
  await page.waitForTimeout(500);
  //Click Edit button to open dialog
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //Click to select the resources tab to open the dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //select resources to add 
  await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck ')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-he saved record should update the resource unit according to the documentation when the work value is changed.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941978
test('121-941978-Correct Resource Unit Update', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941978');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941978' });
  await page.waitForTimeout(2000);
  //Click Add button 
  await page.locator("(//span[text()='Add'])[1]").click();
  await page.waitForTimeout(500);
  //Click to select the duration to enter the value
  await page.locator("(//input[contains(@class,'e-control')])[5]").click();
  await page.waitForTimeout(500);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  //click backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('40 days');
  await page.waitForTimeout(500);
  //Click work value to update
  await page.locator("(//input[contains(@class,'e-control')])[7]").click();
  await page.waitForTimeout(500);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  //click backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('1');
  await page.waitForTimeout(500);
  //select the task type to edit it
  await page.locator("(//span[contains(@class,'e-input')])[9]").click();
  //select the task type Fixed Unit
  await page.locator("(//li[text()='FixedUnit'])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The values are updated and the resources are added correctly when the task type is fixed unit.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941846
test('122-941846-Fix Resource Unit Update Issue in Manual Task Mode', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941846');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941846' });
  await page.waitForTimeout(2000);
  //Click updaterecordById button 
  await page.locator("(//button[text()='Update Record By ID'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-When modifying the resource unit, the work field should update, not the duration, in line with the documentation.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941829
test('123-941829-Fix Duration Update Issue in Fixed Unit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941829');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941829' });
  await page.waitForTimeout(2000);
  //Click updaterecordById button 
  await page.locator("(//button[text()='Update Record By ID'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-It is a behaviour and updated it.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941802
test('124-941802-Work value Update Behavior', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941802');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941802' });
  await page.waitForTimeout(2000);
  //Click Add button 
  await page.locator("(//span[text()='Add'])[1]").click();
  await page.waitForTimeout(500);
  //select the task type to edit it
  await page.locator("(//span[contains(@class,'e-input')])[9]").click();
  await page.waitForTimeout(500);
  //select the task type Fixed Work
  await page.locator("(//li[text()='FixedWork'])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click duration record on grid side of the added record to check on it
  await page.locator("(//td[contains(@class,'e-rowcell')])[5]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The duration is updated
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941675
test('125-941675-Unnecessary Work Value Updates ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941675');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941675' });
  await page.waitForTimeout(2000);
  //Click Add button 
  await page.locator("(//span[text()='Add'])[1]").click();
  await page.waitForTimeout(500);
  //select the task type to edit it
  await page.locator("(//span[contains(@class,'e-input')])[9]").click();
  await page.waitForTimeout(500);
  //select the task type Fixed Unit
  await page.locator("(//li[text()='FixedUnit'])[1]").click();
  await page.waitForTimeout(500);
  //Click on resources tab to open the dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //select resources to add
  await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck ')])[3]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click duration record on grid side of the added record to check on it
  await page.locator("(//td[contains(@class,'e-rowcell')])[5]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The work value  remained consistent and not update unnecessarily when adding a resource.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941669
test('126-941669-Fix Dialog Field Update Issue for FixedUnit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941669');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941669' });
  await page.waitForTimeout(2000);
  //Click the task with Fixed Unit Type
  await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
  await page.waitForTimeout(500);
  //Click Add button 
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //select the duration to edit it
  await page.locator("(//input[contains(@class,'e-control')])[5]").click();
  await page.waitForTimeout(500);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('8 days');
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click work  record on grid side of the added record to check on it
  await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The work value is updated and the duration is not updated when the task type is fixed unit.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941669
test('127-941669-Fix Dialog Field Update Issue duration', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941669');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941669' });
  await page.waitForTimeout(2000);
  //Click the task with Fixed Unit Type
  await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
  await page.waitForTimeout(500);
  //Click Add button 
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(500);
  //select the work value to edit it
  await page.locator("(//input[contains(@class,'e-control')])[7]").click();
  await page.waitForTimeout(500);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('32');
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click work  record on grid side of the added record to check on it
  await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The duration is updated and the duration is not updated when the task type is fixed unit.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/940356
test('128-940356-When use work and taskType column', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-940356');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-940356' });
  await page.waitForTimeout(2000);
  //Click Add button 
  await page.locator("(//span[text()='Add'])[1]").click();
  await page.waitForTimeout(500);
  //select the work value to edit it
  await page.locator("(//input[contains(@class,'e-control')])[3]").click();
  await page.waitForTimeout(500);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('32');
  await page.waitForTimeout(500);
  //select the duration to edit it
  await page.locator("(//input[contains(@class,'e-control')])[7]").click();
  await page.waitForTimeout(500);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('8 days');
  await page.waitForTimeout(500);
  //Click on resources tab to open the dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
  await page.waitForTimeout(500);
  //select resources to add
  await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck')])[3]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click work  record on grid side of the added record to check on it
  await page.locator("(//td[contains(@class,'e-rowcell')])[3]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Work and Duration values should be calculated correctly based on the selected TaskType (FixedWork).
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/940354
test('129-940354-Validation for TaskType as FixedDuration', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-940354');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-940354' });
  await page.waitForTimeout(2000);
  //Click Add button 
  await page.locator("(//span[text()='Add'])[1]").click();
  await page.waitForTimeout(500);
  //select the work value to edit it
  await page.locator("(//input[contains(@class,'e-control')])[3]").click();
  await page.waitForTimeout(500);
  //Click the Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('12');
  await page.waitForTimeout(500);
  //select the Task Type to edit it
  await page.locator("(//span[contains(@class,'e-input')])[7]").click();
  await page.waitForTimeout(500);
  //select Fixed Duration
  await page.locator("(//li[text()='FixedDuration'])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click work  record on grid side of the added record to check on it
  await page.locator("(//td[contains(@class,'e-rowcell')])[3]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation- work value should be set to zero for tasks with FixedDuration type.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/954718
test('130-954718-Scrollbar Position Changes Incorrectly', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-954718');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-954718' });
  await page.waitForTimeout(2000);
  //Click Next timespan button on the toolbar
  await page.locator("(//span[text()='Next timespan'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-scrollbar moved to the left side of the Gantt chart when clicking the Next timespan button.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949091
// test('131-949091-Parent Record Misalignment', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-949091');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949091' });
//   await page.waitForTimeout(2000);
//   //Click the record to indent 3nd child (3nd record)
//   await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
//   await page.waitForTimeout(500);
//   //Click the Indent button on the toolbar
//   await page.locator("(//span[text()='Indent'])[1]").click();
//   await page.waitForTimeout(500);
//   //Outdent the first child (2nd record)
//   await page.locator("(//td[contains(@class,'e-rowcell')])[8]").click();
//   await page.waitForTimeout(500);
//   //Click the Outdent button on the toolbar
//   await page.locator("(//span[text()='Outdent'])[1]").click();
//   await page.waitForTimeout(500);
//   //Outdent the second child
//   await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
//   await page.waitForTimeout(500);
//   //Click the Indent button on the toolbar
//   await page.locator("(//span[text()='Outdent'])[1]").click();
//   await page.waitForTimeout(500);
//   //second child 2nd record again 
//   await page.locator("(//td[contains(@class,'e-rowcell')])[8]").click();
//   await page.waitForTimeout(500);
//   //Click the Indent button on the toolbar
//   await page.locator("(//span[text()='Indent'])[1]").click();
//   await page.waitForTimeout(500);
//   //third
//   await page.locator("(//td[contains(@class,'e-rowcell')])[15]").click();
//   await page.waitForTimeout(500);
//   //Indent
//   await page.locator("(//span[text()='Indent'])[1]").click();
//   await page.waitForTimeout(500);
//   //click the record.
//   const taskbarSelector = '.e-gantt-child-taskbar';
//   const taskbar = await page.locator(taskbarSelector).first();
//   const box = await taskbar.boundingBox();
//   if (!box) throw new Error('Failed to locate the taskbar element');
//   // Drag operation - 33px left (one cell)
//   await page.mouse.move(box.x + 10, box.y + box.height / 2);
//   await page.mouse.down();
//   await page.mouse.move(box.x + 10 + 50, box.y + box.height / 2, { steps: 5 });
//   await page.mouse.up();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-scrollbar moved to the left side of the Gantt chart when clicking the Next timespan button.
//   // expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
// });

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/940352
test('132-940352-Milestone End Date Not Properly', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-940352');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-940352' });
  await page.waitForTimeout(2000);
  //Double click the end date to show of the 1 st row
  await page.locator("(//td[contains(@class,'e-rowcell')])[6]").dblclick();
  await page.waitForTimeout(1000);
  //Click the update button on the dialog
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Record is updated and the end date is not updated when the task type is milestone.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/938329
test('133-938329-Milestone Not Converting Back to Taskbar', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-938329');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-938329' });
  await page.waitForTimeout(2000);
  //Click the update button on the dialog
  await page.locator("(//button[text()='Update Record'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Record mileston is converted
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/939858
test('134-939858-Toolbar Items Not Updating ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-939858');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-939858' });
  await page.waitForTimeout(2000);
  //Click the record on the grid side of the component
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
  await page.waitForTimeout(500);
  //Scrolld down
  await page.evaluate("document.querySelectorAll('.e-content')[1].scrollTop=100");
  await page.waitForTimeout(2000);
  //Screenshot validation-Toolbar items are updated
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/928777
test('135-928777-AddPredecessorAsync method ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-928777');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-928777' });
  await page.waitForTimeout(2000);
  //Click Add process button on the toolbar
  await page.locator("(//button[text()='AddPredecessor'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-AddPredecessorAsync method
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/963820
test('136-963820-Sorting Not Working Properly', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/SplitTask-rtl');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/SplitTask-rtl' });
  await page.waitForTimeout(1000);
  //Click the column header for taskname
  await page.locator("(//th[contains(@class,'e-headercell')])[2]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Sorting should work properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/941793
test('137-941793-Resource unit is not updated', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-941793');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-941793' });
  await page.waitForTimeout(1000);
  //Screenshot validation-Sorting should work properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/948213
test('138-948213-RowSelecting event returning null', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-948213');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-948213' });
  await page.waitForTimeout(1000);
  await page.locator("(//span[contains(@class,'e-frame e-icons e-uncheck ')])[2]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-The selection is properly working and the rowSelecting event is not returning null.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949081
test('139-949081-Editing Tooltip Does Not Update', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-949081');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949081' });
  await page.waitForTimeout(1000);
  //Click the progress
  await page.locator("(//td[contains(@class,'e-rowcell')])[13]").dblclick();
  await page.waitForTimeout(1000);
  //press Control+A to select all record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  //Backspace to clear the records
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Type the record to enter
  await page.keyboard.type('40');
  await page.waitForTimeout(500);
  //Update button
  await page.locator("(//span[text()='Update'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Record updated properly
  // expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/953040
test('140-953040-Timeline Format Not Updated', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-953040');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-953040' });
  await page.waitForTimeout(1000);
  //Click zoom to fit button on the toolbar
  await page.locator("(//span[text()='Zoom to fit'])[1]").click();
  await page.waitForTimeout(1000);
  //Click timelime format button on the toolbar
  await page.locator("(//button[text()='Timeline Change'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Record updated properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/943456
test('141-943456-Investigate Exception in CollapseAtLevel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-943456');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-943456' });
  await page.waitForTimeout(1000);
  //Click CollapseLevel button on the toolbar
  await page.locator("(//button[text()='CollapseLevel'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Record updated properly and collapsed at level 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/958067
test('142-958067-Timeline Format Not Updated', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-958067');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-958067' });
  await page.waitForTimeout(1000);
  //Click  button on the toolbar
  await page.locator("(//button[text()='Render BaseLine'])[1]").click();
  await page.waitForTimeout(1000);
  //Click timelime format button on the toolbar
  await page.locator("(//div[contains(@class,'e-baseline-gantt-milestone')])[1]").hover({ force: true });
  await page.waitForTimeout(1000);
  //Screenshot validation-Record updated properly
  expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/959094
test('143-959094-Overallocation Lines Not Rendered', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/resourceallocation');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
  await page.waitForTimeout(1000);
  //Click the dropdown to select virtual
  await page.locator("(//span[contains(@class,'e-input')])[25]").click();
  await page.waitForTimeout(500);
  //Click the virtual option
  await page.locator("(//li[text()='Virtual'])[1]").click();
  await page.waitForTimeout(1000);
  //Click to Enable Resource Allocation toggle
  await page.locator("(//span[contains(@class,'e-switch-handle')])[3]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Record updated properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('144-959094-Console error thrown', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/resourceallocation');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
  await page.waitForTimeout(1200);
  //Click the dropdown to select UnScheduled
  await page.locator("(//span[contains(@class,'e-input')])[25]").click();
  await page.waitForTimeout(1000);
  //Click the Unscheduled option
  await page.locator("(//li[text()='UnScheduled'])[1]").click();
  await page.waitForTimeout(1200);
  //Click to Enable Resource Allocation toggle
  await page.locator("(//span[contains(@class,'e-switch-handle')])[3]").click();
  await page.waitForTimeout(1500);
  //Screenshot validation-No console error is thrown
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/959084
// test('145-Ensure Resource View Sample-Ensure Resource View Sample', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/resourceallocation');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
//   await page.waitForTimeout(1000);
//   //Click the dropdown to select Expando
//   await page.locator("(//span[contains(@class,'e-input')])[25]").click();
//   await page.waitForTimeout(500);
//   //Click the Unscheduled option
//   await page.locator("(//li[text()='Expando'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click to Enable Resource Allocation toggle
//   await page.locator("(//span[contains(@class,'e-switch-handle')])[3]").click();
//   await page.waitForTimeout(1000);
//   //Screenshot validation-No console error is thrown
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/958070
test('146-958070-Fix Tooltip Visibility Issue taskbar', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-958070');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-958070' });
  await page.waitForTimeout(1000);
  //Click  button on the toolbar
  await page.locator("(//button[text()='Render BaseLine'])[1]").click();
  await page.waitForTimeout(500);
  //Click timelime format button on the toolbar
  await page.locator("(//div[contains(@class,'gantt-milestone')])[1]").hover({ force: true });
  await page.waitForTimeout(1000);
  //Screenshot validation-Record updated properly for milestone taskbar tooltip showing
  expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/958070
test('147-958070-Fix Tooltip Visibility Issue baseline', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-958070');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-958070' });
  await page.waitForTimeout(1000);
  //Click  button on the toolbar
  await page.locator("(//button[text()='Render BaseLine'])[1]").click();
  await page.waitForTimeout(500);
  //Click timelime format button on the toolbar
  await page.locator("(//div[contains(@class,'e-baseline-gantt-milestone')])[1]").hover({ force: true });
  await page.waitForTimeout(1000);
  //Screenshot validation-Record updated properly for baseline milestone tooltip
  expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/958070
test('148-958070-Fix Tooltip Visibility Issue taskbar', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-958070');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-958070' });
  await page.waitForTimeout(1000);
  //Click  button on the toolbar
  await page.locator("(//button[text()='Render BaseLine'])[1]").click();
  await page.waitForTimeout(500);
  //Click timelime format button on the toolbar
  await page.locator("(//div[contains(@class,'e-baseline-gantt-milestone')])[1]").hover({ force: true });
  await page.waitForTimeout(1000);
  //Screenshot validation-Record updated properly for baseline milestone tooltip
  expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/957259
test('149-957259-Fix Tooltip Visibility Issue taskbar', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/split-task-method');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/split-task-method' });
  await page.waitForTimeout(1000);
  //Click the dropdown
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
  await page.waitForTimeout(500);
  //Click timelime format button on the toolbar
  await page.locator("(//li[text()='guid'])[1]").click()
  await page.waitForTimeout(1000);
  //Screenshot validation-Record updated properly for baseline milestone tooltip
  expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/960558
test('150-960558-Timeline and Taskbar Misalignment', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-960558');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-960558' });
  await page.waitForTimeout(1000);
  //Click the dropdown
  await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[8]").click();
  await page.waitForTimeout(500);
  //select RTL from the dropdown
  await page.locator("(//li[text()='RTL'])[1]").click();
  await page.waitForTimeout(1000);
  //Scroll horizontal
  await page.evaluate("document.querySelectorAll('.e-content')[1].scrollLeft=100");
  await page.waitForTimeout(1000);
  //Screenshot validation-Tasks are rendered between the timeline
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/962007
test('151-962007-Resolve Empty Space Issue', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/resourceallocation');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/resourceallocation' });
  await page.waitForTimeout(1000);
  //Click the dropdown to select virtual
  await page.locator("(//span[contains(@class,'e-input')])[25]").click();
  await page.waitForTimeout(500);
  //Click the virtual option
  await page.locator("(//li[text()='Virtual'])[1]").click();
  await page.waitForTimeout(1000);
  //Scroll horizontal
  await page.evaluate("document.querySelectorAll('.e-content')[1].scrollLeft=100");
  await page.waitForTimeout(1000);
  //Screenshot validation-No console error is thrown
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/960201
test('152-960201-Header text not visible', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/Template/template');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/Template/template' });
  await page.waitForTimeout(1000);
  //Click the 2 nd tasks
  await page.locator('(//td[contains(@class,"rowcell")])[13]').click();
  await page.waitForTimeout(1000);
  //Click the edit button on the toolbar
  await page.locator("(//span[text()='Edit'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation -Progress value is visible
  expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.waitForTimeout(500);
  //Click the custom columns to navigate and open the dialog tab
  await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Progress and status indicated
  expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/959498
// test('153-PDFET-959498', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/pdf/data-binding');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/data-binding' });
//   await page.waitForTimeout(2000);
//   //Click the dropdown
//   await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//   await page.waitForTimeout(500);
//   //select from the dropdown expando
//   await page.locator("(//li[text()='expando'])[1]").click();
//   await page.waitForTimeout(500);
//   const [download] = await Promise.all([page.waitForEvent('download'),
//   await page.locator("(//button[text()='Pdf Export'])[1]").click()]);
//   await page.waitForTimeout(1000);
//   // Define the Actual Export File Path with proper name
//   const path = "./tests/ManualTesting/PdfExportFiles/PDF-959498/" + download.suggestedFilename();
//   await download.saveAs(path);
//   await page.waitForTimeout(500);
//   // attach the downloaded file to the report ( This is the playwright event to download the File)
//   await testInfo.attach('downloaded', { path: path });
//   await page.waitForTimeout(1500);
//   //The "pdf" here is the package that converts the file to PNG format
//   const doc = await pdf(path);
//   await page.waitForTimeout(500);
//   expect(doc.length).toBe(1);
//   //Converts the 1 pages to image format and takes snapshot
//   for await (const page of doc) {
//     //Screenshot validation-pdf exported record should be in collapsed state
//     await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
//   }
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/959499
// test('154-PDF-959499', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/pdf/data-binding');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/pdf/data-binding' });
//   await page.waitForTimeout(2000);
//   //Click the dropdown
//   await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[1]").click();
//   await page.waitForTimeout(500);
//   //select from the dropdown object
//   await page.locator("(//li[text()='object'])[1]").click();
//   await page.waitForTimeout(500);
//   const [download] = await Promise.all([page.waitForEvent('download'),
//   await page.locator("(//button[text()='Pdf Export'])[1]").click()]);
//   await page.waitForTimeout(1000);
//   // Define the Actual Export File Path with proper name
//   const path = "./tests/ManualTesting/PdfExportFiles/PDF-959499/" + download.suggestedFilename();
//   await download.saveAs(path);
//   await page.waitForTimeout(500);
//   // attach the downloaded file to the report ( This is the playwright event to download the File)
//   await testInfo.attach('downloaded', { path: path });
//   await page.waitForTimeout(1500);
//   //The "pdf" here is the package that converts the file to PNG format
//   const doc = await pdf(path);
//   await page.waitForTimeout(500);
//   expect(doc.length).toBe(1);
//   //Converts the 1 pages to image format and takes snapshot
//   for await (const page of doc) {
//     //Screenshot validation-pdf exported record should be in collapsed state
//     await expect.soft(page).toMatchSnapshot({ maxDiffPixels: 100 });
//   }
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/960008
// test('155-BUG-960008', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-960008');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-960008' });
//   await page.waitForTimeout(2000);
//   //screenshot validation-No console error is thrown on initial render
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/975073
// test('156-Validate Filter dialog box', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
//   await page.waitForTimeout(2000);
//   //Click the filter on the TaskId
//   await page.locator('(//div[contains(@class, "e-icon-filter")])[1]').click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-Filter dialog box is not hidden behind the splitter
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/960150
// test('157-BUG-960150', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-960150');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-960150' });
//   await page.waitForTimeout(2000);
//   //Click the dropdown to select TopTierOnly
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
//   await page.waitForTimeout(500);
//   //select TopTierOnly
//   await page.locator("(//li[text()='TopTierOnly'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click Zoom Out
//   await page.locator("(//span[text()='Zoom out'])[1]").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/960150
// test('158-BUG-960150-Issue2', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-960150');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-960150' });
//   await page.waitForTimeout(2000);
//   //Click the dropdown to select TopTierOnly
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
//   await page.waitForTimeout(500);
//   //select TopTierOnly
//   await page.locator("(//li[text()='TopTierOnly'])[1]").click();
//   await page.waitForTimeout(500);
//   //select Month
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   //select Month
//   await page.locator("(//li[text()='Month'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click Zoom Out
//   await page.locator("(//span[text()='Zoom out'])[1]").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/960150
// test('159-BUG-960150-Issue3', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-960150');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-960150' });
//   await page.waitForTimeout(2000);
//   //Click the dropdown to select TopTierOnly
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
//   await page.waitForTimeout(500);
//   //select TopTierOnly
//   await page.locator("(//li[text()='TopTierOnly'])[1]").click();
//   await page.waitForTimeout(500);
//   //select Year
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   //select Year
//   await page.locator("(//li[text()='Year'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click Zoom Out
//   await page.locator("(//span[text()='Zoom out'])[1]").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/960150
// test('160-BUG-960150-Issue4', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-960150');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-960150' });
//   await page.waitForTimeout(2000);
//   //Click the dropdown to select TopTierOnly
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
//   await page.waitForTimeout(500);
//   //select TopTierOnly
//   await page.locator("(//li[text()='TopTierOnly'])[1]").click();
//   await page.waitForTimeout(500);
//   //select Day
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   //select Day
//   await page.locator("(//li[text()='Day'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click Zoom Out
//   await page.locator("(//span[text()='Zoom out'])[1]").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/960150
// test('161-BUG-960150-Issue5', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-960150');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-960150' });
//   await page.waitForTimeout(2000);
//   //Click the dropdown to select TopTierOnly
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
//   await page.waitForTimeout(500);
//   //select TopTierOnly
//   await page.locator("(//li[text()='TopTierOnly'])[1]").click();
//   await page.waitForTimeout(500);
//   //select Hour
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   //select Hour
//   await page.locator("(//li[text()='Hour'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click Zoom Out
//   await page.locator("(//span[text()='Zoom out'])[1]").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/960150
// test('162-BUG-960150-Issue7', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-960150');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-960150' });
//   await page.waitForTimeout(2000);
//   //Click the dropdown to select TopTierOnly
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
//   await page.waitForTimeout(500);
//   //select TopTierOnly
//   await page.locator("(//li[text()='TopTierOnly'])[1]").click();
//   await page.waitForTimeout(500);
//   //select Hour
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   //select Hour
//   await page.locator("(//li[text()='Hour'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click Zoom Out
//   await page.locator("(//span[text()='Zoom out'])[1]").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/967098
// test('163-967098-Connector line issue', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
//   await page.waitForTimeout(2000);
//   //Click the settings
//   await page.locator('(//div[contains(@id,"Settings")])[1]').click();
//   await page.waitForTimeout(2000);
//   //Click custom scheduling
//   await page.locator('(//span[contains(@class, "e-switch-handle")])[6]').click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-The connector lines for 2nd and 6th are properly displayed.
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/977816
// test('164-977816-Deleted record', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-977816');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-977816' });
//   await page.waitForTimeout(2000);
//   //Click the record
//   await page.locator('(//td[contains(@class, "e-rowcell")])[13]').click();
//   await page.waitForTimeout(2000);
//   //Click the delete button on the toolbar
//   await page.locator("(//span[text()='Delete'])[1]").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-Records are removed
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/960160
// test('165-BUG-960160', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-960160');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-960160' });
//   await page.waitForTimeout(2000);
//   //Click the dropdown to select TopTierOnly
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
//   await page.waitForTimeout(500);
//   //select BottomTierOnly
//   await page.locator("(//li[text()='BottomTierOnly'])[1]").click();
//   await page.waitForTimeout(500);
//   //select Hour
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   //select Hour
//   await page.locator("(//li[text()='Hour'])[1]").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-Timeline rendering
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('166-BUG-960165', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-960160');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-960160' });
//   await page.waitForTimeout(2000);
//   //Click the dropdown to select TopTierOnly
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
//   await page.waitForTimeout(500);
//   //select BottomTierOnly
//   await page.locator("(//li[text()='TopTierOnly'])[1]").click();
//   await page.waitForTimeout(500);
//   //select Hour
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   //select Hour
//   await page.locator("(//li[text()='Hour'])[1]").click();
//   await page.waitForTimeout(2000);
//   //select Day
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   //select Day
//   await page.locator("(//li[text()='Hour'])[1]").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-Timeline rendering
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/975569
// test('167-975569-AM/PM Indicators Missing', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
//   await page.waitForTimeout(2000);
//   //Click the start date of the 1st record
//   await page.locator('(//td[contains(@class, "rowcell")])[3]').click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-The timezone start date on the grid and the chart side is indicated properly
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/977562
// test('168-977562-Tooltip for Timezone', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
//   await page.waitForTimeout(2000);
//   //Hover the Next
//   await page.mouse.move(1671, 264)
//   await page.waitForTimeout(2000);
//   //Screenshot validation-The timezone start date on the grid and the chart side is indicated properly
//   expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/974113
// test('169-974113-selected work', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'overview?theme=fluent2');
//   test.info().annotations.push({ type: 'Sample link', description: 'overview?theme=fluent2' });
//   await page.waitForTimeout(2000);
//   // Click on the settings icon
//   await page.locator('(//span[contains(@class, "settings")])[3]').click();
//   await page.waitForTimeout(1000);
//   // Click on the dropdown to change the view to chart
//   await page.locator('(//div[contains(@class,"e-multi-select-wrapper")])[1]').click();
//   await page.waitForTimeout(500);
//   // Press the ArrowDown key on the keyboard
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(300);
//   // Press the ArrowDown key again
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("Space");
//   await page.waitForTimeout(300);
//   // Press the Enter key to confirm the selection
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   //Click the close button
//   await page.locator('(//span[contains(@class,"close")])[3]').click();
//   await page.waitForTimeout(2000);
//   // Click on the settings icon to re open the sidebar
//   await page.locator('(//span[contains(@class, "settings")])[3]').click();
//   await page.waitForTimeout(1000);
//   // Screenshot validation - The view should be changed to chart view
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/975015
// test('170-975015-TAB Key Navigation', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'sorting?theme=fluent2');
//   await page.waitForTimeout(4000);
//   //click the second cell on first row
//   await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
//   await page.waitForTimeout(500);
//   //press the tab key on the keyboard
//   await page.keyboard.press('Tab');
//   await page.waitForTimeout(3000);
//   //screenshot validation-tab key moving to the next cell
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/967152
// test('171-967152-Console error', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-967152');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-967152' });
//   await page.waitForTimeout(1000);
//   //click the toggle
//   await page.locator("(//span[contains(@class,'e-switch-handle')])[1]").click();
//   await page.waitForTimeout(1000);
//   //Screenshot validation-console error not thrown when enable RTL
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/959988
// test('172-959988-Zoom Out', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-959988');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-959988' });
//   await page.waitForTimeout(1000);
//   //click the Zoom Out
//   await page.locator("(//span[text()='Zoom out'])[1]").click();
//   await page.waitForTimeout(1000);
//   //Screenshot validation-Records are updated properly
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/974137
// test('173-974137-Cell focus', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
//   await page.waitForTimeout(4000);
//   //Double click the cell
//   await page.locator('(//td[contains(@class,"e-rowcell")])[2]').dblclick();
//   await page.waitForTimeout(1000);
//   //press the tab key on the keyboard
//   await page.keyboard.press('Tab');
//   await page.waitForTimeout(3000);
//   //screenshot validation-tab key moving to the next cell
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/976726
// test('174-976726', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'working-time-range?theme=tailwind3');
//   test.info().annotations.push({ type: 'Sample link', description: 'working-time-range?theme=tailwind3' });
//   await page.waitForTimeout(1000);
//   //Double click Notes
//   await page.locator('(//span[contains(@class,"e-notes-info")])[2]').dblclick();
//   await page.waitForTimeout(1000);
//   //Click the selection to write notes
//   await page.locator("(//div[contains(@class,'e-content')])[6]").click();
//   await page.waitForTimeout(1000);
//   //Screenshot validation-Cursor is now well positioned in Write Notes
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/975329
// test('175-975329', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
//   test.info().annotations.push({ type: 'Sample link', description: 'excel-filtering?theme=fluent2' });
//   await page.waitForTimeout(1000);
//   //click order id filter icon
//   await page.locator("(//div[contains(@class,'e-icon-filter')])[2]").click();
//   await page.waitForTimeout(3000);
//   //Number filters
//   await page.locator("(//li[contains(@class,'e-menu-caret-icon')])").hover();
//   await page.waitForTimeout(1000);
//   //filter equal
//   await page.locator("(//li[text()='Equal'])[1]").click();
//   await page.waitForTimeout(1000);
//   //fill
//   await page.locator("(//input[contains(@class,'e-control')])[3]").fill('Product concept');
//   await page.waitForTimeout(1000);
//   //Click the OK button
//   await page.locator("(//button[text()='OK'])[2]").click();
//   await page.waitForTimeout(1000);
//   //click order id filter icon
//   await page.locator("(//div[contains(@class,'e-icon-filter')])[2]").click();
//   await page.waitForTimeout(3000);
//   //Number filters
//   await page.locator("(//li[contains(@class,'e-menu-caret-icon')])").hover();
//   await page.waitForTimeout(1000);
//   //filter equal
//   await page.locator("(//li[text()='Equal'])[1]").click();
//   await page.waitForTimeout(1000);
//   //Screenshot validation-
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/958646
// test('176-958646-Drag', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
//   await page.waitForTimeout(1000);;
//   //Click the duration dropdown
//   await page.locator("(//span[contains(@class,'e-input-group-icon e-ddl-icon e-icons')])[3]").click();
//   await page.waitForTimeout(500);
//   //select Hour from the dropdown
//   await page.locator("(//li[text()='Hour'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click the taskbar to drag the 10th
//   await page.locator("(//div[contains(@class,'e-child-progress-resizer')])[6]").click();
//   await page.waitForTimeout(1000);
//   await page.mouse.down();
//   await page.mouse.move(1380, 425, { steps: 10 });
//   await page.mouse.up();
//   await page.waitForTimeout(1000);
//   //Screenshot validation-The  task should be rendered as a critical taskbar.
//   expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('177-958646-Resize', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/CriticalPath/CriticalPath');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/CriticalPath/CriticalPath' });
//   await page.waitForTimeout(1000);
//   //Select the 3rd taskbar
//   await page.locator('(//div[contains(@class, "e-taskbar-left-resizer e-icon")])[15]').click();
//   await page.waitForTimeout(500);
//   await page.mouse.down();
//   await page.mouse.move(1355, 397);
//   await page.mouse.move(1355, 397);
//   await page.mouse.up();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-The 19t task should be rendered as a critical taskbar.
//   expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/978459
// test('178-978459', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
//   await page.waitForTimeout(2000);
//   //click the child 8 rd record
//   await page.locator('(//div[contains(@class,"gantt-child")])[9]').dblclick();
//   await page.waitForTimeout(1000);
//   //Click the dependency
//   await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
//   await page.waitForTimeout(500);
//   //Click the Add button
//   await page.locator('(//span[contains(@class,"e-add")])[2]').click();
//   await page.waitForTimeout(500);
//   //select from the dropdown
//   await page.locator('//*[@id="GanttDependencyTabContainer_content_table"]/tbody/tr/td/form/table/tbody/tr/td[2]/span/span[2]').click();
//   await page.waitForTimeout(500);
//   //select the dependency
//   await page.locator("(//li[text()='3-Obtain Permits'])").click();
//   await page.waitForTimeout(500);
//   //Click the save button
//   await page.locator("(//button[text()='Save'])").click();
//   await page.waitForTimeout(500);
//   //Click the 8 rd child record
//   await page.locator("(//div[contains(@class,'gantt-child')])[9]").click();
//   await page.waitForTimeout(500);
//   //Click delete button
//   await page.keyboard.press('Delete');
//   await page.waitForTimeout(500);
//   //Click the ok button
//   await page.locator("(//button[text()='OK'])[1]").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-Record has been deleted properly
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/975019
// test('179-975019', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
//   test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
//   await page.waitForTimeout(2000);
//   //To double click
//   await page.locator('(//div[contains(@class,"e-gantt-parent")])[2]').dblclick();
//   await page.waitForTimeout(2000);
//   // Screenshot validation-general tab is rendered
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/960170
// test('180-960170-Issue1', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-960170');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-960170' });
//   await page.waitForTimeout(2000);
//   //Select the duration
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[3]').click();
//   await page.waitForTimeout(500);
//   //select Duration
//   await page.locator("(//li[text()='Hour'])[1]").click();
//   await page.waitForTimeout(500);
//   //select Top Tier Day
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   //select Day
//   await page.locator("(//li[text()='Day'])[1]").click();
//   await page.waitForTimeout(500);
//   //Select Day from Bottom Tier
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[6]').click();
//   await page.waitForTimeout(500);
//   //select Day
//   await page.locator("(//li[text()='Day'])[1]").click();
//   await page.waitForTimeout(500);
//   //Screenshot validation-Timeline rendering
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('181-960170-Issue2', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-960170');;
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-960170' });
//   await page.waitForTimeout(2000);
//   //Select the duration
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[3]').click();
//   await page.waitForTimeout(500);
//   //select Duration
//   await page.locator("(//li[text()='Hour'])[1]").click();
//   await page.waitForTimeout(500);
//   //select Top Tier Day
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   //select Day
//   await page.locator("(//li[text()='Day'])[1]").click();
//   await page.waitForTimeout(500);
//   //Select Hour from Bottom Tier
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[6]').click();
//   await page.waitForTimeout(500);
//   //select Hour
//   await page.locator("(//li[text()='Hour'])[1]").click();
//   await page.waitForTimeout(500);
//   //Screenshot validation-Timeline rendering
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('182-960170-Issue3', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-960170');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-960170' });
//   await page.waitForTimeout(2000);
//   //Select the duration
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[3]').click();
//   await page.waitForTimeout(500);
//   //select Duration
//   await page.locator("(//li[text()='Hour'])[1]").click();
//   await page.waitForTimeout(500);
//   //select Top Tier Day
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   //select Hour
//   await page.locator("(//li[text()='Hour'])[1]").click();
//   await page.waitForTimeout(500);
//   //Select Hour from Bottom Tier
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[6]').click();
//   await page.waitForTimeout(500);
//   //select Year
//   await page.locator("(//li[text()='Year'])[1]").click();
//   await page.waitForTimeout(500);
//   //Screenshot validation-Timeline rendering
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('183-960170-Issue4', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-960170');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-960170' });
//   await page.waitForTimeout(2000);
//   //Select the duration
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[3]').click();
//   await page.waitForTimeout(500);
//   //select Duration
//   await page.locator("(//li[text()='Hour'])[1]").click();
//   await page.waitForTimeout(500);
//   //select Top Tier Day
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   //select Hour
//   await page.locator("(//li[text()='Hour'])[1]").click();
//   await page.waitForTimeout(500);
//   //Select Hour from Bottom Tier
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[6]').click();
//   await page.waitForTimeout(500);
//   //select Month
//   await page.locator("(//li[text()='Month'])[1]").click();
//   await page.waitForTimeout(500);
//   //Screenshot validation-Timeline rendering
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('184-960170-Issue3', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-960170');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-960170' });
//   await page.waitForTimeout(2000);
//   //Select the duration
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[3]').click();
//   await page.waitForTimeout(500);
//   //select Duration
//   await page.locator("(//li[text()='Hour'])[1]").click();
//   await page.waitForTimeout(500);
//   //select Top Tier Day
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[4]').click();
//   await page.waitForTimeout(500);
//   //select Hour
//   await page.locator("(//li[text()='Hour'])[1]").click();
//   await page.waitForTimeout(500);
//   //Select Hour from Bottom Tier
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[6]').click();
//   await page.waitForTimeout(500);
//   //select Week
//   await page.locator("(//li[text()='Week'])[1]").click();
//   await page.waitForTimeout(500);
//   //Screenshot validation-Timeline rendering
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/959977
// test('185-959977-Toolbar zoom', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-959977');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-959977' });
//   await page.waitForTimeout(2000);
//   //Click the Zoom in button on the toolbar
//   await page.locator("(//span[text()='Zoom in'])[1]").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-Zoom In Action
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/977695
// test('186-977385-Taskbars Not Rendered', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-977695');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-977695' });
//   await page.waitForTimeout(2000);
//   //Right click the 5th task on the grid side.
//   await page.locator('(//td[contains(@class, "e-rowcell")])[37]').click({ button: 'right' });
//   await page.waitForTimeout(1000);
//   //Hover over convert
//   await page.locator('(//li[contains(@class, "e-menu-item e-menu-caret-icon")])[2]').hover();
//   await page.waitForTimeout(1000);
//   //select Milestone
//   await page.locator("(//li[text()='To Milestone'])[1]").click();
//   await page.waitForTimeout(500);
//   //Right click the 5th task
//   await page.locator('(//td[contains(@class, "e-rowcell")])[37]').click({ button: 'right' });
//   await page.waitForTimeout(1000);
//   //Hover over
//   await page.locator('(//li[contains(@class, "e-menu-item e-menu-caret-icon")])[2]').hover();
//   await page.waitForTimeout(1000);
//   //select Task
//   await page.locator("(//li[text()='To Task'])[1]").click();
//   await page.waitForTimeout(1000);
//   //Screenshot validation-Task converted
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/958127
// test('187-958127', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-958127');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-958127' });
//   await page.waitForTimeout(2000);
//   //Right click the mileston eon the chart side
//   await page.locator('(//div[contains(@class, "e-gantt-milestone e-unscheduled-milestone-top ")])[1]').click({ button: 'right' });
//   await page.waitForTimeout(1000);
//   //Hover over convert
//   await page.locator('(//li[contains(@class, "e-menu-item e-menu-caret-icon")])[1]').hover();
//   await page.waitForTimeout(1000);
//   //select Milestone
//   await page.locator("(//li[text()='To Task'])[1]").click();
//   await page.waitForTimeout(1000);
//   //Screenshot validation-Task converted
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/975927
// test('188-975927-Baseline dates', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-975927');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-975927' });
//   await page.waitForTimeout(2000);
//   //Click to select records from the dropdown
//   await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
//   await page.waitForTimeout(1000);
//   //Select the timezone
//   await page.locator("(//li[text()='America/Los_Angeles'])[1]").click();
//   await page.waitForTimeout(1000);
//   //Right click the 3rd record
//   await page.locator('(//td[contains(@class, "e-rowcell ")])[19]').click({ button: 'right' });
//   await page.waitForTimeout(1000);
//   //Hover over Add
//   await page.locator('(//li[contains(@class, "e-menu-item e-menu-caret-icon")])[2]').hover();
//   await page.waitForTimeout(500);
//   //Add Above
//   await page.locator("(//li[text()='Above'])[1]").click();
//   await page.waitForTimeout(1000);
//   //Screenshot validation-Baseline dates rendered
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/975514
// test('189-BUG-975514-Drag', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
//   await page.waitForTimeout(2000);
//   const src = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[2]");
//   const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[3]");
//   if (src && dst) {
//     const src_bound = await src.boundingBox();
//     const dst_bound = await dst.boundingBox();
//     if (src_bound && dst_bound) {
//       await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//       await page.mouse.down();
//       await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
//       await page.mouse.up();
//       await page.waitForTimeout(2000);
//     }
//   }
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/959990
// test('190-959990', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/zoom-settings');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/zoom-settings' });
//   await page.waitForTimeout(2000);
//   //Click the zoom in button on the toolbar
//   await page.locator("(//button[text()='ZoomIn'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click Reset Zoom
//   await page.locator("(//button[text()='Reset Zoom'])[1]").click();
//   await page.waitForTimeout(1000);
//   //Screenshot validation-
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/977833
// test('191-977833', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-977833');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-977833' });
//   await page.waitForTimeout(2000);
//   //Double click the cell on the status column
//   await page.locator("(//td[contains(@class,'e-rowcell')])[7]").dblclick();
//   await page.waitForTimeout(1000);
//   //Press the Escape key
//   await page.keyboard.press('Escape');
//   await page.waitForTimeout(1000);
//   //Screenshot validation-It cancels the cell edited
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/936504
// test('192-936504', async ({ page }, testInfo) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-936504');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-936504' });
//   await page.waitForTimeout(2000);
//   //Hover over the timeline to display the tooltip
//   await page.locator('(//td[contains(@class, "e-timeline-top-header-cell")])[2]').hover();
//   await page.waitForTimeout(1000);
//   //Click the Zoom Out
//   await page.locator("(//span[text()='Zoom out'])[1]").click();
//   await page.waitForTimeout(1000);
//   //Hover
//   await page.locator('(//td[contains(@class, "e-timeline-top-header-cell")])[2]').hover();
//   await page.waitForTimeout(1000);
//   //Screenshot validation-
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/977826
// test('193-977826', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'load-on-demand?theme=fluent2');
//   test.info().annotations.push({ type: 'Sample link', description: 'load-on-demand?theme=fluent2' });
//   await page.waitForTimeout(2000);
//   // Click the first parent id cell
//   await page.locator("(//td[contains(@class,'e-rowcell')])[1]").click();
//   await page.waitForTimeout(800);
//   //press the ctrl+arrow down on the keyboard
//   await page.keyboard.press('Control+ArrowDown');
//   await page.waitForTimeout(1500);
//   // Screenshot validation-Is not expanded
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrl + 'load-on-demand?theme=fluent2');
//     test.info().annotations.push({ type: 'Sample link', description: 'load-on-demand?theme=fluent2' });
//     await page.waitForTimeout(2000);
//     // Click the first parent id cell
//     await page.locator("(//td[contains(@class,'e-rowcell')])[1]").click();
//     await page.waitForTimeout(800);
//     //press the ctrl+arrow down on the keyboard
//     await page.keyboard.press('Control+ArrowDown');
//     await page.waitForTimeout(1500);
//     // Screenshot validation-Is not expanded
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// >>>>>>> 0fed73f91686a1a3a04b3714201847e0b5a9025b
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/975673
// test('194-975673', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
//   test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
//   await page.waitForTimeout(2000);
//   // Click to select a record//
//   await page.locator('(//td[contains(@class,"e-chart-row-cell e-chart-row-border")])[1]').click();
//   await page.waitForTimeout(800);
//   //click to disable the auto generate WBS toggle
//   await page.locator("(//span[contains(@class,'e-icons e-frame e-check')])").click();
//   await page.waitForTimeout(800);
//   // Screenshot validation-rendering well
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrl + 'wbs-column?theme=fluent2');
//     test.info().annotations.push({ type: 'Sample link', description: 'wbs-column?theme=fluent2' });
//     await page.waitForTimeout(2000);
//     // Click to select a record//
//     await page.locator('(//td[contains(@class,"e-chart-row-cell e-chart-row-border")])[1]').click();
//     await page.waitForTimeout(800);
//     //click to disable the auto generate WBS toggle
//     await page.locator("(//span[contains(@class,'e-icons e-frame e-check')])").click();
//     await page.waitForTimeout(800);
//     // Screenshot validation-rendering well
//     expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// >>>>>>> 0fed73f91686a1a3a04b3714201847e0b5a9025b
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/976944
// test('195-976944', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto(Helper.baseUrl + 'editing?theme=fluent');
//   test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent' });
//   await page.waitForTimeout(2000);
//   // Click to select a row//
//   await page.locator('(//tr[contains(@class,"e-row e-altrow")])[1]').click();
//   await page.waitForTimeout(2000);
//   // Screenshot validation-the cells are highlighted when selecting a row
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949096
// test('196-949096-Taskbar Drag Editing', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-949096');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949096' });
//   await page.waitForTimeout(2000);
//   //Click the Add button
//   await page.locator("(//span[text()='Add'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click the save button
//     await page.locator("(//button[text()='Save'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click the added 1 st taskbar on the chart side
//   await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").click();
//   await page.waitForTimeout(1000);
//   await page.mouse.down();
//   await page.mouse.move(662, 161);
//   await page.mouse.up();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/949101
// test('197-949101-Incorrect Duration', async ({ page }) => {
//   await page.setViewportSize({ width: 1920, height: 1080 });
//   await page.goto('http://localhost:5004/BLAZ-949101');
//   test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-949101' });
//   await page.waitForTimeout(2000);
//   //Click the added 8th taskbar on the chart side
//   await page.mouse.move(954, 413);
//   await page.waitForTimeout(500);
//   await page.mouse.down();
//   await page.mouse.move(954, 413);
//   await page.mouse.move(1231, 414);
//   await page.mouse.up();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/959912

test('198-959912', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-959912');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-959912' });
  await page.waitForTimeout(2000);
  //Click the filter icon to open the dialog
  await page.locator('(//div[@title="Filter Icon"])[1]').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-No script error is thrown after click the filter  icon to open dialog
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/960168
test('199-959912', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-960168');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-959912' });
  await page.waitForTimeout(2000);
  //Screenshot validation-No console error is thrown and 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ISSUE CONSOLE ERROR THROWN AFTER CLICK CUSTOM SCHEDULING BUTTON
//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/958069
test('200-958069', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-958069');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-958069' });
  await page.waitForTimeout(2000);
  //Click the filter icon to open the dialog
  await page.locator("(//button[text()='Custom Scheduling'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-No script error is thrown after click the filter  icon to open dialog
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/971890
test('201-971890', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-971890');
  await page.waitForTimeout(2000);
  // Get the right resize handler and its bounding box
  const resizeHandler = page.locator("(//div[contains(@class,'e-resize-handler e-icons ')])[1]");
  await resizeHandler.waitFor({ state: 'visible' });
  const box = await resizeHandler.boundingBox();
  if (!box) throw new Error('Resize handler not visible');
  // Hover over the resize handler to activate it
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.waitForTimeout(300);
  // Press mouse down on the resize handler
  await page.mouse.down();
  await page.waitForTimeout(300);
  // Small resize to the right (move ~30px right from current position)
  await page.mouse.move(box.x + box.width / 2 + 30, box.y + box.height / 2, { steps: 10 });
  await page.waitForTimeout(500);
  // Release the mouse
  await page.mouse.up();
  await page.waitForTimeout(2000);
  // Screenshot validation-The taskbar is not merged with the left taskbar after resize
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/980353
test('202-980353', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-980353');
  await page.waitForTimeout(2000);
  // Screenshot validation-The connectot line applies consistently 
  expect(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/980541

test('203-980541', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-940357');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-940357' });
  await page.waitForTimeout(2000);
  //Click the 1st child record
  await page.locator("(//td[contains(@class,'e-rowcell')])[12]").click();
  await page.waitForTimeout(500);
  //Click the delete button 
  await page.locator("(//span[text()='Delete'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Console error is not thrown after click the delete button
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/983304
test('204-983304', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-983304');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-983304' });
  await page.waitForTimeout(2000);
  //Screenshot validation-Critical path customization is working properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/1008922

test('205-1008922', async ({ page },) => {
  const testInfo = test.info();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/multipage-predecessor');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/multipage-predecessor' });
  await page.waitForTimeout(2000);
  //Click select the Parent record
  await page.locator('(//span[text()="Parent - FS Group"])').click();
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
  const path = "./tests/Gantt_Feature/MultiPDFExport/214-1008922/" + download.suggestedFilename();
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

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/1001283
test('206-942003', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-942003');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-942003' });
  await page.waitForTimeout(2000);
  //Screenshot validation-Taskbars renders properly at the edges of the timeline
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});