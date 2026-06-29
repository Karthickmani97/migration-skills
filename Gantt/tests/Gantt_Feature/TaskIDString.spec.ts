// import { test, expect } from '@playwright/test';
// import { Helper } from '../Helper/helper';

// test('1-String: Edit taskname using cell edit', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('(//td[contains(@class, "e-rowcell")])[2]').dblclick();
//   await page.waitForTimeout(300);
//   await page.locator('#DataItem___TaskName').click();
//   await page.locator('#DataItem___TaskName').fill('Updated');
//   await page.waitForTimeout(300);
//   await page.keyboard.press('Enter');
//   await page.locator('(//td[contains(@class, "e-rowcell")])[2]').dblclick();
//   await page.waitForTimeout(300);
//   await page.keyboard.press("Escape");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('2-String: Add record through dialog', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('#GanttEditing_add').click();
//   await page.waitForTimeout(800);
//   await page.locator('#EndDate').click();
//   await page.locator('#EndDate').fill('04/11/2019');
//   await page.waitForTimeout(200);
//   await page.locator('(//button[text()="Save"])[1]').click();
//   await page.waitForTimeout(800);
//   await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[1]').click({force: true});
//   await page.mouse.down();
//   await page.waitForTimeout(800);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('3-String: Insert record and drag the taskbar', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('(//td[contains(@class, "e-rowcell")])[2]').click();
//   await page.waitForTimeout(100);
//   await page.keyboard.press("Insert");
//   await page.waitForTimeout(200);
//   await page.locator('(//div[contains(@class, "e-taskbar-right-resizer e-icon")])[1]').click();
//   await page.waitForTimeout(200);
//   await page.mouse.down();
//   await page.waitForTimeout(300);
//   await page.mouse.move(1026, 136);
//   await page.waitForTimeout(1000);
//   await page.mouse.up();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('4-String: Delete parent record and child record', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[1]').click();
//   await page.waitForTimeout(100);
//   await page.locator('#GanttEditing_delete').click();
//   await page.waitForTimeout(300);
//   await page.keyboard.press("Tab");
//   await page.waitForTimeout(100);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(300);
//   await page.locator('(//td[contains(@class, "e-rowcell")])[2]').click();
//   await page.keyboard.press("Delete");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("Tab");
//   await page.waitForTimeout(100);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('5-String: zoom to fit', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('#GanttEditing_zoomtofit').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('6-String: autofit all columns and sorting column', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[1]').click();
//   await page.waitForTimeout(300);
//   await page.locator('#treeGridGanttEditing_gridcontrol_colmenu_AutoFitAll').click();
//   await page.waitForTimeout(300);
//   await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[1]').click();
//   await page.waitForTimeout(300);
//   await page.locator('#treeGridGanttEditing_gridcontrol_colmenu_SortDescending').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('7-String: Edit dependency and notes', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[1]').dblclick();
//   await page.waitForTimeout(800);
//   await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
//   await page.waitForTimeout(600);
//   await page.locator('#GanttDependencyTabContainer_add').click();
//   await page.waitForTimeout(300);
//   await page.keyboard.press("Tab");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(200);
//   await page.locator('(//div[contains(@class, "e-gridcontent")])[2]').click();
//   await page.waitForTimeout(200);
//   await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
//   await page.waitForTimeout(500);
//   await page.keyboard.press("Tab");
//   await page.keyboard.type('Notes dialog');
//   await page.waitForTimeout(200);
//   await page.locator('(//button[text()="Save"])[1]').click();
//   await page.waitForTimeout(800);
//   await page.locator('(//span[contains(@class, "e-icons e-notes-info")])[3]').click();
//   await page.waitForTimeout(200);
//   await page.mouse.down();
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('8-String: add record using add string method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //add record using
//   await page.keyboard.type("AddString");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(300);
//   await page.locator('(//td[contains(@class, "rowcell ")])[22]').click();
//   await page.waitForTimeout(300);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('9-String: add predecessor using method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //add predecessor using method
//   await page.keyboard.type("AddPredecessor");
//   await page.waitForTimeout(100);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('10-String: delete record using method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //delete record using
//   await page.keyboard.type("DeleteString");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(200);
//   await page.locator('(//button[text()="Ok"])[1]').click();
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('11-String: Delete record and collapse at level', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //collapse level
//   await page.keyboard.type("CollapseLevel");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(300);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //delete record using
//   await page.keyboard.type("DeleteString");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(200);
//   await page.locator('(//button[text()="Ok"])[1]').click();
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('12-String: Collapse all and add new record', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //collapseall
//   await page.keyboard.type("CollapseAll");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //add record using
//   await page.keyboard.type("AddString");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(300);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('13-String: Collapse by key and add record', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //collapse key using method
//   await page.keyboard.type("CollapseKey");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('14-String: Convert to milestone', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //convert to milestone
//   await page.keyboard.type("ConvertToMilestone");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('15-String: zoom to fit and show sipper', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('#GanttEditing_zoomtofit').click();
//   await page.waitForTimeout(300);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //show spinner using method
//   await page.keyboard.type("ShowSpinner");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(300);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('16-String: Open add dialog method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //open add dialog using method
//   await page.keyboard.type("OpenAddDialog");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(800);
//   await page.locator('#Duration').click();
//   await page.locator('#Duration').fill('3 days');
//   await page.locator('(//button[text()="Save"])[1]').click();
//   await page.waitForTimeout(1000);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //next timespan method
//   await page.keyboard.type("NextTimeSpan");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(300);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('17-String: Open column chooser', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //open column chooser
//   await page.keyboard.type("OpenColumnChooser");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('18-String: search column chooser', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //open column chooser
//   await page.keyboard.type("OpenColumnChooser");
//   await page.waitForTimeout(800);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(600);
//   await page.locator('(//input[contains(@class, "e-ccsearch e-cc e-input")])').click();
//   await page.locator('(//input[contains(@class, "e-ccsearch e-cc e-input")])').fill('id');
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('19-String: select columns using column chooser', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //open column chooser
//   await page.keyboard.type("OpenColumnChooser");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(300);
//   await page.locator('(//span[contains(@class, "e-frame e-icons e-check e-choosercheck")])[1]').click();
//   await page.waitForTimeout(100);
//   await page.locator('(//span[contains(@class, "e-frame e-icons e-check e-choosercheck")])[2]').click();
//   await page.waitForTimeout(300);
//   await page.locator('(//button[text()="OK"])[1]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('20-String: reorder column', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //reorder column using method
//   await page.keyboard.type("ReOrderColumn");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('21-String: Previous timespan', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //previous timespan
//   await page.keyboard.type("PreviousTimeSpan");
//   await page.waitForTimeout(100);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(800);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('22-String: Edit record using edit dialog', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Open edit dialog 
//   await page.keyboard.type("OpenEditDialog");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(800);
//   await page.locator('#EndDate').click();
//   await page.locator('#EndDate').fill('4/12/2019');
//   await page.locator('(//button[text()="Save"])[1]').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('23-String: scroll to taskbar', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Scroll to taskbar
//   await page.keyboard.type("ScrollToTaskbar");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(800);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('24-String: Scroll to timeline', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Scroll to timeline
//   await page.keyboard.type("ScrollToTimeline");
//   await page.waitForTimeout(100);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('25-String: Set splitter position dynamically', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Set splitter position
//   await page.keyboard.type("SetSplitter");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('26-String: single sorting', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Sorting
//   await page.keyboard.type("SingleSort");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(200);
//   //zoom to fit
//   await page.locator('#GanttEditing_zoomtofit').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('27-String: Multi sorting', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Sorting
//   await page.keyboard.type("MultiSort");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(200);
//   //zoom to fit
//   await page.locator('#GanttEditing_zoomtofit').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('28-String: Update project dates', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //update predecessor
//   await page.keyboard.type("UpdatePredecessor");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('29-String: Collapse all and expand key', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
//   await page.waitForTimeout(200);
//   await page.keyboard.press('Control+ArrowUp');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //expand all
//   await page.keyboard.type("ExpandAll");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('30-String: Add record, predecessor', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/TaskIDString');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //expand all
//   await page.keyboard.type("AddString");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //expand all
//   await page.keyboard.type("AddPredecessor");
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });




