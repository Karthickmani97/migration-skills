// import { test, expect } from '../Helper/ScriptErrorFinder';
// import { Helper } from '../Helper/helper';

// test('1-Add record and edit', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('#Gantt_add').click();
//   await page.waitForTimeout(1000);
//   await page.locator('#TaskName').click();
//   await page.locator('#TaskName').fill('');
//   await page.waitForTimeout(200);
//   await page.locator('#Duration').fill('10 days');
//   await page.waitForTimeout(200);
//   await page.locator('(//button[text()="Save"])[1]').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('2-Delete the parent and zoom to fit', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[2]').click();
//   await page.waitForTimeout(200);
//   await page.locator('#Gantt_delete').click();
//   await page.waitForTimeout(600);
//   await page.keyboard.press("Tab");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(600);
//   await page.locator('#Gantt_zoomtofit').click();
//   await page.waitForTimeout(800);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('3-Delet child record and zoom out', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[2]').click();
//   await page.waitForTimeout(200);
//   await page.locator('#Gantt_delete').click();
//   await page.waitForTimeout(600);
//   await page.keyboard.press("Tab");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(600);
//   await page.locator('#Gantt_zoomout').click();
//   await page.waitForTimeout(800);
//   await page.locator('#Gantt_zoomout').click();
//   await page.waitForTimeout(800);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('4-Drag parent taskbar', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('(//div[contains(@class, "e-gantt-parent-taskbar")])[1]').click();
//   await page.waitForTimeout(200);
//   await page.mouse.down();
//   await page.waitForTimeout(300);
//   await page.mouse.move(1143, 139);
//   await page.waitForTimeout(1000);
//   await page.mouse.up();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('5-Drag child taskbar', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[2]').click();
//   await page.waitForTimeout(200);
//   await page.mouse.down();
//   await page.waitForTimeout(300);
//   await page.mouse.move(995, 215);
//   await page.waitForTimeout(1000);
//   await page.mouse.up();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('6-Edit start date and zoom in', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').dblclick();
//   await page.waitForTimeout(300);
//   await page.locator('#DataItem___StartDate').click();
//   await page.locator('#DataItem___StartDate').fill('1/17/2000');
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   await page.locator('#Gantt_zoomin').click();
//   await page.waitForTimeout(800);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('7-Open contexmenu task information', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('(//td[contains(@class,"e-rowcell ")])[20]').click({
//     button: 'right'
//   });
//   await page.waitForTimeout(1000);
//   await page.locator('#Gantt_cmenu_TaskInformation').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('8-Delete record using contextmenu and indent', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('(//td[contains(@class,"e-rowcell ")])[20]').click({
//     button: 'right'
//   });
//   await page.waitForTimeout(1000);
//   await page.locator('#Gantt_cmenu_DeleteTask').click();
//   await page.waitForTimeout(1000);
//   await page.keyboard.press("Tab");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(600);
//   await page.locator('(//td[contains(@class,"e-rowcell ")])[20]').click({
//     button: 'right'
//   });
//   await page.waitForTimeout(1000);
//   await page.locator('#Gantt_cmenu_Indent').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('9-Convert to milestone and convert to task', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('(//td[contains(@class,"e-rowcell ")])[20]').click({
//     button: 'right'
//   });
//   await page.waitForTimeout(1000);
//   await page.locator('#Gantt_cmenu_Convert').click();
//   await page.waitForTimeout(500);
//   await page.locator('#Gantt_cmenu_ToMilestone').click();
//   await page.waitForTimeout(800);
//   await page.locator('(//td[contains(@class,"e-rowcell ")])[14]').click({
//     button: 'right'
//   });
//   await page.waitForTimeout(1000);
//   await page.locator('#Gantt_cmenu_Convert').click();
//   await page.waitForTimeout(500);
//   await page.locator('#Gantt_cmenu_ToMilestone').click();
//   await page.waitForTimeout(800);
//   await page.locator('(//td[contains(@class,"e-rowcell ")])[14]').click({
//     button: 'right'
//   });
//   await page.waitForTimeout(1000);
//   await page.locator('#Gantt_cmenu_Convert').click();
//   await page.waitForTimeout(500);
//   await page.locator('#Gantt_cmenu_ToTask').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('10-Filtering task name column', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('(//div[contains(@class,"e-icon-filter")])[2]').click();
//   await page.waitForTimeout(300);
//   await page.locator('(//input[contains(@class,"e-lib e-input")])[2]').click();
//   await page.locator('(//input[contains(@class,"e-lib e-input")])[2]').fill('Task 0');
//   await page.waitForTimeout(300);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('11-Collapse all using keyboard', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('(//td[contains(@class, "e-rowcell")])[2]').click();
//   await page.waitForTimeout(300);
//   await page.keyboard.press('Control+ArrowUp');
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('12-Collapse all and insert record', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('(//td[contains(@class, "e-rowcell")])[2]').click();
//   await page.waitForTimeout(300);
//   await page.keyboard.press('Control+ArrowUp');
//   await page.waitForTimeout(1000);
//   // await page.keyboard.press("Insert");
//   // await page.waitForTimeout(500);
//   // await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[2]').dblclick();
//   // await page.waitForTimeout(300);

//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('13-Navigating to chart side using tab key', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('(//td[contains(@class, "e-rowcell")])[16]').click();
//   await page.waitForTimeout(600);
//   await page.keyboard.press("Tab");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Tab");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Tab");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Tab");
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('14-Control + F2 and cancel edit', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('(//td[contains(@class, "e-rowcell")])[16]').click();
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Control+F2");
//   await page.waitForTimeout(600);
//   await page.keyboard.press("Escape");
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('15-Guid: add record using method and zoom out', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(300);
//   //add record using
//   await page.keyboard.type("AddGuid");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   await page.locator('#Gantt_zoomout').click();
//   await page.waitForTimeout(400);
//   await page.locator('#Gantt_zoomout').click();
//   await page.waitForTimeout(400);
//   await page.locator('#Gantt_zoomout').click();
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('16-Guid: delete record using method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //delete record using
//   await page.keyboard.type("DeleteGuid");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(400);
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib e-flat ")])[3]').click();
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('17-Guid: Delete record and collapse at level', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //collapse level
//   await page.keyboard.type("CollapseLevel");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(600);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //delete record using
//   await page.keyboard.type("DeleteGuid");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(400);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('18-Guid: Collapse all and add new record', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //collapseall
//   await page.keyboard.type("CollapseAll");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(800);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //add record using
//   await page.keyboard.type("AddGuid");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('19-Guid: zoom to fit and show sipper', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('#Gantt_zoomtofit').click();
//   await page.waitForTimeout(300);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //show spinner using method
//   await page.keyboard.type("ShowSpinner");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('20-Guid: Open add dialog method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //open add dialog using method
//   await page.keyboard.type("OpenAddDialog");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(800);
//   await page.locator('#TaskName').click();
//   await page.locator('#TaskName').fill(' ');
//   await page.waitForTimeout(200);
//   await page.locator('#Duration').click();
//   await page.locator('#Duration').fill('4 days');
//   await page.waitForTimeout(200);
//   await page.locator('(//button[text()="Save"])[1]').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('21-Guid: Open column chooser', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //open column chooser
//   await page.keyboard.type("OpenColumnChooser");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('22-Guid: search column chooser', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //open column chooser
//   await page.keyboard.type("OpenColumnChooser");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   await page.locator('(//input[contains(@class, "e-ccsearch e-cc e-input")])').click();
//   await page.locator('(//input[contains(@class, "e-ccsearch e-cc e-input")])').fill('id');
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('23-Guid: select columns using column chooser', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //open column chooser
//   await page.keyboard.type("OpenColumnChooser");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(400);
//   await page.locator('(//span[contains(@class, "e-frame e-icons e-check e-choosercheck")])[1]').click();
//   await page.waitForTimeout(200);
//   await page.locator('(//span[contains(@class, "e-frame e-icons e-check e-choosercheck")])[2]').click();
//   await page.waitForTimeout(300);
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib e-flat e-cc e-cc_okbtn e-ccdlg e-primary")])[1]').click();
//   await page.waitForTimeout(800);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('24-Guid: reorder column', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //reorder column
//   await page.keyboard.type("ReOrderColumn");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('25-Guid: Previous timespan', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //previous timespan
//   await page.keyboard.type("PreviousTimeSpan");
//   await page.waitForTimeout(100);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(800);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('26-Guid: Edit record using edit dialog', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Open edit dialog 
//   await page.keyboard.type("OpenEditDialog");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(1000);
//   await page.locator('#EndDate').click();
//   await page.waitForTimeout(200);
//   await page.locator('#EndDate').fill('4/12/2021');
//   await page.waitForTimeout(200);
//   await page.locator('(//button[text()="Save"])[1]').click();
//   await page.waitForTimeout(1200);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('27-Guid: scroll to taskbar and delete record', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Scroll to taskbar
//   await page.keyboard.type("ScrollToTaskbar");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(1000);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[2]').click();
//   await page.waitForTimeout(200);
//   await page.locator('#Gantt_delete').click();
//   await page.waitForTimeout(400);
//   await page.keyboard.press("Tab");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(800);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('28-Guid: Scroll to timeline', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Scroll to timeline
//   await page.keyboard.type("ScrollToTimeline");
//   await page.waitForTimeout(100);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('29-Guid: Set splitter position dynamically', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Set splitter position
//   await page.keyboard.type("SetSplitter");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(400);
//   //zoom to fit
//   await page.locator('#Gantt_zoomtofit').click();
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('30-Guid: Update project dates', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GuidVirtual');
//   await page.waitForTimeout(1500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //updare project dates
//   await page.keyboard.type("UpdateProjectDates");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

