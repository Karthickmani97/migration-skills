// import { test, expect } from '../Helper/ScriptErrorFinder';
// import { Helper } from '../Helper/helper';

// test('1-GetRowTaskModel - checking parent record at grid side', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GetRowTaskModel');
//   await page.waitForTimeout(500);
//   await page.getByRole('gridcell', { name: 'Project initiation Column Header Name' }).click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('2-GetRowTaskModel - checking parent record at chart side', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GetRowTaskModel');
//   await page.waitForTimeout(500);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[2]').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('3-GetRowTaskModel - checking milstone task', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GetRowTaskModel');
//   await page.waitForTimeout(500);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[2]').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('4-GetRowTaskModel - Checking critical taskbar', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GetRowTaskModel');
//   await page.waitForTimeout(500);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[6]/td[2]').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('5-GetRowTaskModel - Collapse record and check parent task state', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GetRowTaskModel');
//   await page.waitForTimeout(500);
//   await page.getByRole('gridcell', { name: 'Project initiation Column Header Name' }).locator('span').first().click();
//   await page.waitForTimeout(200);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[2]').click();
//   await page.waitForTimeout(300);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('6-GetRowTaskModel - collapse and expand parent and check status', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/GetRowTaskModel');
//   await page.waitForTimeout(500);
//   await page.getByRole('gridcell', { name: 'Project estimation Column Header Name' }).locator('span').first().click();
//   await page.waitForTimeout(200);
//   await page.getByRole('gridcell', { name: 'Project estimation Column Header Name' }).locator('span').first().click();
//   await page.waitForTimeout(200);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[2]').click();
//   await page.waitForTimeout(300);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('7-Refresh async initial load', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('8-Refresh after delete and add record', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(1000);
//   await page.getByLabel('Prepare product sketch and notes Column Header Job Name').getByText('Prepare product sketch and notes').click();
//   await page.getByLabel('Delete').click();
//   await page.waitForTimeout(300);
//   await page.getByRole('button', { name: 'Ok' }).click();
//   await page.waitForTimeout(300);
//   await page.getByLabel('Add', { exact: true }).click();
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForTimeout(1000);
//   await page.getByRole('button', { name: 'Refresh' }).click();
//   await page.waitForTimeout(1500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('9-Refresh after indent and outdent', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(1000);
//   await page.locator('div').filter({ hasText: /^Prepare product sketch and notes$/ }).nth(2).click();
//   await page.waitForTimeout(200);
//   await page.getByLabel('Indent').click();
//   await page.waitForTimeout(300);
//   await page.getByRole('button', { name: 'Refresh' }).click();
//   await page.waitForTimeout(1200);
//   await page.getByLabel('Demand analysis Column Header Job Name').click();
//   await page.waitForTimeout(300);
//   await page.getByLabel('Outdent').click();
//   await page.waitForTimeout(600);
//   await page.getByRole('button', { name: 'Refresh' }).click();
//   await page.waitForTimeout(1500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('10-Refresh after collpaseall', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(1000);
//   await page.getByLabel('Prepare product sketch and notes Column Header Job Name').getByText('Prepare product sketch and notes').click();
//   await page.getByLabel('Collapse all').click();
//   await page.waitForTimeout(300);
//   await page.getByRole('button', { name: 'Refresh' }).click();
//   await page.waitForTimeout(1500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('11-Refresh after filtering', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(1000);
//   await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter")])[1]').click();
//   await page.waitForTimeout(100);
//   await page.getByPlaceholder('Enter the value').click();
//   await page.waitForTimeout(100);
//   await page.getByPlaceholder('Enter the value').fill('6');
//   await page.waitForTimeout(100);
//   await page.getByRole('button', { name: 'Filter', exact: true }).click();
//   await page.waitForTimeout(300);
//   await page.getByRole('button', { name: 'Refresh' }).click();
//   await page.waitForTimeout(1500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('12-Refresh after editing startdate', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(1000);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[4]').dblclick();
//   await page.waitForTimeout(200);
//   await page.locator('#DataItem___StartDate').fill('4/12/2021');
//   await page.waitForTimeout(100);
//   await page.getByLabel('Update').click();
//   await page.waitForTimeout(300);
//   await page.getByRole('button', { name: 'Refresh' }).click();
//   await page.waitForTimeout(1500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('13-Filter record using methods', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[2]').click();
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('14-Clear filtering', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[2]').click();
//   await page.waitForTimeout(300);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_header_table"]/thead/tr/th[2]/div[3]').click();
//   await page.waitForTimeout(300);
//   await page.locator('(//button[text()="Clear"])[1]').click();
//   await page.waitForTimeout(800);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('15-Int: add record using int method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //add record using
//   await page.keyboard.type("AddInt");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(300);
//   await page.locator('(//td[contains(@class, "rowcell ")])[26]').click();
//   await page.waitForTimeout(300);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('16-Int: add predecessor using method and edit the record', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //add predecessor using method
//   await page.keyboard.type("AddPredecessor");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(1000);
//   await page.locator('(//td[contains(@class, "e-rowcell")])[39]').dblclick();
//   await page.waitForTimeout(300);
//   //clear predecessor
//   const input = await page.locator('#DataItem___Predecessor');
//   await input.press('Control+A');  
//   await input.press('Backspace'); 
//   await page.waitForTimeout(300);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(2000);
//   //refresh
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[1]').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('17-Int: delete record using method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(2000);
//   //Click the dropdown
//   await page.locator('(//span[contains(@class, "input")])[3]').click();
//   await page.waitForTimeout(500);
//   //delete record using
//   await page.keyboard.type("DeleteInt");
//   await page.waitForTimeout(500);
//   //Press the Enter key 
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   //Click the ok button
//   await page.locator("(//button[text()='Ok'])").click();
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('18-Int: Delete record and collapse at level', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //collapse level
//   await page.keyboard.type("CollapseLevel");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(600);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(300);
//   //delete record using
//   await page.keyboard.type("DeleteInt");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(200);
//   await page.locator('(//button[text()="Ok"])[1]').click();
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('19-Int: Collapse all and add new record', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //collapseall
//   await page.keyboard.type("CollapseAll");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(200);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //add record using
//   await page.keyboard.type("AddInt");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(300);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('20-Int: Collapse by key', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(300);
//   //collapse key using method
//   await page.keyboard.type("CollapseKey");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(300);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('21-Int: Convert to milestone', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   //Click the dropdown
//   await page.locator('(//span[contains(@class, "input")])[3]').click();
//   await page.waitForTimeout(300);
//   //convert to milestone
//   await page.keyboard.type("ConvertToMilestone");
//   await page.waitForTimeout(300);
//   //Press the Enter button on the keyboard
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[2]').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('22-Int: Collape all and expand all using method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //collapse all using method
//   await page.keyboard.type("CollapseAll");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('23-Int: zoom to fit and show sipper', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('#Gantt_zoomtofit').click();
//   await page.waitForTimeout(300);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //show spinner using method
//   await page.keyboard.type("ShowSpinner");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(300);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('24-Int: hide spinner', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(300);
//   //hide spinner using method
//   await page.keyboard.type("HideSpinner");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('25-Int: Open add dialog method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //open add dialog using method
//   await page.keyboard.type("OpenAddDialog");
//   await page.waitForTimeout(50);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(800);
//   await page.locator('#Duration').click();
//   await page.locator('#Duration').fill('3 days');
//   await page.locator('(//button[text()="Save"])[1]').click();
//   await page.waitForTimeout(1200);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(300);
//   //next timespan method
//   await page.keyboard.type("NextTimeSpan");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(300);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('26-Int: Open column chooser', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //open column chooser
//   await page.keyboard.type("OpenColumnChooser");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(300);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('27-Int: search column chooser', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //open column chooser
//   await page.keyboard.type("OpenColumnChooser");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(400);
//   await page.locator('(//input[contains(@class, "e-ccsearch e-cc e-input")])').click();
//   await page.waitForTimeout(100);
//   await page.locator('(//input[contains(@class, "e-ccsearch e-cc e-input")])').fill('id');
//   await page.waitForTimeout(300);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('28-Int: select columns using column chooser', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //open column chooser
//   await page.keyboard.type("OpenColumnChooser");
//   await page.waitForTimeout(200);
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

// test('29-Int: Remove predecessor and reorder column', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(300);
//   //remove predecessor using method
//   await page.keyboard.type("RemovePredecessor");
//   await page.waitForTimeout(100);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('30-Int: Reorder row and drag the taskbar', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //reorder row above position
//   await page.keyboard.type("ReorderRow");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(300);
//   await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[1]').click();
//   await page.waitForTimeout(200);
//   await page.mouse.down();
//   await page.waitForTimeout(300);
//   await page.mouse.move(1226, 232);
//   await page.waitForTimeout(1000);
//   await page.mouse.up();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('31-Int: Reorder row and filter record', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(300);
//   //reorder row above position
//   await page.keyboard.type("ReorderRow");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(800);
//    //filter record
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[2]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('32-Int: Reorder row and reorder column', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(300);
//   //reorder row above position
//   await page.keyboard.type("ReorderRow");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //reorder column
//   await page.keyboard.type("ReOrderColumn");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('33-Int: Previous timespan', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //previous timespan
//   await page.keyboard.type("PreviousTimeSpan");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(800);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('34-Int: Edit record using edit dialog', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Open edit dialog 
//   await page.keyboard.type("OpenEditDialog");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(800);
//   await page.locator('#EndDate').click();
//   await page.locator('#EndDate').fill('4/12/2021');
//   await page.waitForTimeout(200);
//   await page.locator('(//button[text()="Save"])[1]').click();
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('35-Int: Select record using method and scroll to taskbar', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[4]').click();
//   await page.waitForTimeout(200);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Scroll to taskbar
//   await page.keyboard.type("ScrollToTaskbar");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(800);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('36-Int: Toggle selection using method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   //select record 
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[4]').click();
//   await page.waitForTimeout(200);
//   //deselect record
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[4]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('37-Int: Toggle selection set as false', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   //select record 
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[5]').click();
//   await page.waitForTimeout(200);
//   //deselect record
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[5]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('38-Int: select row and multi sort', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   //select record 
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[5]').click();
//   await page.waitForTimeout(200);
//   //multi sort
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[6]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('39-Int: Scroll to timeline', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Scroll to timeline
//   await page.keyboard.type("ScrollToTimeline");
//   await page.waitForTimeout(100);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('40-Int: Set splitter position dynamically', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(300);
//   //Set splitter position
//   await page.keyboard.type("SetSplitter");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('41-Int: single sorting', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Sorting
//   await page.keyboard.type("SingleSort");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(200);
//   //zoom to fit
//   await page.locator('#Gantt_zoomtofit').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('42-Int: Multi sorting', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Sorting
//   await page.keyboard.type("MultiSort");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(200);
//   //zoom to fit
//   await page.locator('#Gantt_zoomtofit').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('43-Int: Update project dates and update predecessor', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('(//span[contains(@class, "input")])[3]').click();
//   await page.waitForTimeout(200);
//   //updare project dates
//   await page.keyboard.type("UpdateProjectDates");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(1500);
//   await page.locator('(//span[contains(@class, "input")])[3]').click();
//   await page.waitForTimeout(200);
//   //update predecessor
//   await page.keyboard.type("UpdatePredecessor");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('44-Int: Update project dates and refresh', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //updare project dates
//   await page.keyboard.type("UpdateProjectDates");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(200);
//   //refresh
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[1]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('45-Int: Select rows by range', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //select rows
//   await page.keyboard.type("SelectRowByRange");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(800);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('46-Filter Taskname column by FilterByColumn method and refresh', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //filter taskname column - contains operator
//   await page.keyboard.type("FilterByColumn");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   //Refresh gantt using method
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[1]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('47-Filter TaskID column by FilterByColumn method and refresh', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //filter taskID column - equal operator
//   await page.keyboard.type("FilterByColumnID");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//    //Refresh gantt using method
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[1]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('48-Zoom in and ResetZoomAsync by method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('#Gantt_zoomin').click();
//   await page.waitForTimeout(300);
//   await page.locator('#Gantt_zoomin').click();
//   await page.waitForTimeout(300);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(300);
//   //Reset zoom
//   await page.keyboard.type("ResetZoomAsync");
//   await page.waitForTimeout(300);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//    //Refresh gantt using method
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[1]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('49-Zoom out and ResetZoomAsync by method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('#Gantt_zoomout').click();
//   await page.waitForTimeout(100);
//   await page.locator('#Gantt_zoomout').click();
//   await page.waitForTimeout(100);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Reset zoom
//   await page.keyboard.type("ResetZoomAsync");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//    //Refresh gantt using method
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[1]').click();
//   await page.waitForTimeout(1200);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('50-Zoom to fit and ResetZoomAsync by method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('#Gantt_zoomout').click();
//   await page.waitForTimeout(100);
//   await page.locator('#Gantt_zoomtofit').click();
//   await page.waitForTimeout(100);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Reset zoom
//   await page.keyboard.type("ResetZoomAsync");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//    //Refresh gantt using method
//   await page.locator('(//button[contains(@class, "e-control e-btn e-lib")])[1]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('51-Update projectdates and ResetZoomAsync by method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Update project start and enddates 
//   await page.keyboard.type("UpdateProjectDates");
//   await page.waitForTimeout(200);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(800);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('52-CURD operation and ResetZoomAsync by method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('#Gantt_add').click();
//   await page.waitForTimeout(800);
//   // add record
//   await page.locator('(//button[text()="Save"])[1]').click();
//   await page.waitForTimeout(1000);
//   await page.locator('(//td[contains(@class, "e-rowcell")])[18]').click();
//   await page.waitForTimeout(100);
//   // deleted record
//   await page.locator('#Gantt_delete').click();
//   await page.waitForTimeout(100);
//   await page.locator('(//button[text()="Ok"])[1]').click();
//   await page.waitForTimeout(300);
//   // edit enddate
//   await page.locator('(//td[contains(@class, "e-rowcell")])[20]').dblclick();
//   await page.waitForTimeout(300);
//   await page.locator('#DataItem___EndDate').fill('4/8/2021');
//   await page.waitForTimeout(50);
//   await page.locator('#Gantt_update').click();
//   await page.waitForTimeout(300);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Reset zoom
//   await page.keyboard.type("ResetZoomAsync");
//   await page.waitForTimeout(50);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('53-Drag taskbar and ResetZoomAsync by method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/methods');
//   await page.waitForTimeout(500);
//   await page.locator('(//div[contains(@class, "e-gantt-child-taskbar")])[2]').click();
//   await page.waitForTimeout(300);
//   await page.mouse.down();
//   await page.waitForTimeout(300);
//   //taskbar dragging
//   await page.mouse.move(1224, 258);
//   await page.waitForTimeout(1000);
//   await page.mouse.up();
//   await page.waitForTimeout(1000);
//   await page.locator('//span[contains(@class, "e-ddl-disable-icon")]').click();
//   await page.waitForTimeout(200);
//   //Reset zoom
//   await page.keyboard.type("ResetZoomAsync");
//   await page.waitForTimeout(50);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });



