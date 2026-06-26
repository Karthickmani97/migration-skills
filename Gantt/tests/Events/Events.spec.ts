import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Events initial load- created event', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Row selecting event at grid side and chart side', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
  await page.waitForTimeout(300);
  await page.locator("(//div[contains(@class,'e-left-label-container')])[7]").click();
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Cell edit save - update toolbar', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___TaskName').fill('events');
  await page.waitForTimeout(300);
  await page.locator('#DataItem___TaskName').press('Enter');
  await page.waitForTimeout(800);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Cell edit save - Enter key', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___TaskName').fill('Product');
  await page.waitForTimeout(200);
  await page.locator('#DataItem___TaskName').press('Enter');
  await page.waitForTimeout(800);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Delte toolbar and delete key', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(400);
  await page.locator("(//div[contains(@class,'e-left-label-container')])[6]").click();
  await page.waitForTimeout(300);
  await page.locator("(//div[contains(@class,'e-left-label-container')])[6]").press('Delete');
  await page.waitForTimeout(1000);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Edit child through dialog', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(800);
  await page.getByLabel('Duration', { exact: true }).click();
  await page.waitForTimeout(200);
  await page.getByLabel('Duration', { exact: true }).fill('5 days');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Toolbar click for next and previous timespan', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Next timespan' }).click();
  await page.waitForTimeout(600);
  await page.getByRole('button', { name: 'Previous timespan' }).click();
  await page.waitForTimeout(600);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Collapse and expand - Querychartinfo event', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//span[contains(@class,'e-icons e-treegridexpand')])[1]").click();
  await page.waitForTimeout(300);
  await page.locator("(//span[contains(@class,'e-icons e-treegridcollapse')])[1]").click();
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Indent record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
  await page.waitForTimeout(300);
  await page.locator("(//span[text()='Indent'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Outdent record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
  await page.waitForTimeout(300);
  await page.locator("(//span[text()='Outdent'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Autofit columns - columnmenuclick', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[1]').click();
  await page.waitForTimeout(300);
  await page.locator("(//li[text()='Autofit all columns'])[1]").click();
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[2]').click();
  await page.waitForTimeout(300);
  await page.locator("(//li[text()='Autofit this column'])[1]").click();
  await page.waitForTimeout(800);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Sort ascending - columnmenuclick', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[1]').click();
  await page.waitForTimeout(300);
  await page.locator("(//li[text()='Sort Ascending'])[1]").click();
  await page.waitForTimeout(800);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Sort descending - columnmenuclick', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[1]').click();
  await page.waitForTimeout(300);
  await page.locator("(//li[text()='Sort Descending'])[1]").click();
  await page.waitForTimeout(800);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Columnmenu enable', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[1]').click();
  await page.waitForTimeout(300);
  await page.locator("(//li[text()='Columns'])[1]").click();
  await page.waitForTimeout(300);
  await page.locator('//li[@aria-label="ID"]').click();
  await page.waitForTimeout(300);
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('15-Columnmenu filter click', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/events');
//   await page.waitForTimeout(1000);
//   await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[1]').click();
//   await page.waitForTimeout(300);
//   await page.getByRole('menuitem', { name: 'Filter' }).click({force: true});
//   await page.waitForTimeout(2000);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('16-Sort ascending - actionBegin', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//div[contains(@class,'e-headercell')])[1]").click();
  await page.waitForTimeout(800);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Sort descending', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//div[contains(@class,'e-headercell')])[1]").click();
  await page.waitForTimeout(300);
  await page.locator("(//div[contains(@class,'e-headercell')])[4]").click();
  await page.waitForTimeout(800);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-search record - toolbarclick', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//input[contains(@class,'e-control')])[1]").click();
  await page.waitForTimeout(800);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-search record - chartinfo', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//input[contains(@class,'e-control')])[1]").click();
  await page.waitForTimeout(200);
  await page.locator("(//input[contains(@class,'e-control')])[1]").fill('Market opportunity');
  await page.waitForTimeout(300);
  await page.locator("(//span[contains(@class,'e-search')])[2]").click();
  await page.waitForTimeout(800);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Contextmenu open and click at grid side', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  await page.locator("(//li[text()='Task Information'])[1]").click();
  await page.waitForTimeout(1000);
  await page.locator("(//button[text()='Cancel'])[1]").click();
  await page.waitForTimeout(600);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Contextmenu open for parent - grid side', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Context menu open for child - chart side', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
  await page.waitForTimeout(100);
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Contextmenu delete - grid side', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  await page.locator("(//li[text()='Delete Task'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Contextmenu delete - chart side - parent', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  await page.locator("(//li[text()='Delete Task'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Contextmenu delete dependency - grid side', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  //Click the child record on grid side
  await page.locator('(//td[contains(@class, "rowcell")])[23]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  //click the dependency
  await page.locator("(//li[text()='Delete Dependency'])").hover({force: true});
  await page.waitForTimeout(500);
  //Click the dependency to select it 
  await page.locator("(//li[text()='2 - Defining the product usage'])").click();
  await page.waitForTimeout(2000);
  await page.locator("(//td[contains(@class,'e-rowcell')])[30]").click();
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Contextmenu convert to milestone - grid side', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  //Click the child record
  await page.locator('(//td[contains(@class, "rowcell")])[16]').click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  //Click the button convert
  await page.locator("(//li[text()='Convert'])").click({force: true});
  await page.waitForTimeout(600);
  //To Milestone , select the record
  await page.locator("(//li[text()='To Milestone'])").click();
  await page.waitForTimeout(2500);
  await page.locator("(//td[contains(@class,'e-rowcell')])[30]").click();
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Contextmenu add - chart side', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//td[contains(@class,'e-rowcell')])[22]").click({
    button: 'right'
  });
  await page.waitForTimeout(300);
  await page.locator("(//li[text()='Add'])[1]").click();
  await page.waitForTimeout(400);
  await page.locator("(//li[text()='Above'])").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('28-Splitter resize', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/events');
//   await page.waitForTimeout(1500);
//   await page.locator('(//div[contains(@class, "e-resize-handler e-icons")])[1]').click();
//   await page.waitForTimeout(500);
//   await page.mouse.down();
//   await page.waitForTimeout(300);
//   await page.mouse.move(911, 346);
//   await page.waitForTimeout(1000);
//   await page.mouse.up();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('29-Column resize', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator('(//div[contains(@class, "e-rhandler e-rcursor")])[3]').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(506, 105);
  await page.waitForTimeout(600);
  await page.mouse.up();
  await page.waitForTimeout(600);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Child taskbar drag', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(1000);
  await page.locator("(//div[contains(@class,'e-left-label-container')])[3]").click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(1242, 243);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(600);
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
  await page.waitForTimeout(600);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Parent taskbar drag', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(500);
  await page.locator("(//div[contains(@class,'e-left-label-container')])[1]").click();
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(1270, 167);
  await page.waitForTimeout(600);
  await page.mouse.up();
  await page.waitForTimeout(600);
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Copy the row at grid sie using keyboard action', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(500);
  await page.locator("(//td[contains(@class,'e-rowcell')])[16]").click();
  await page.keyboard.press('Control+c');
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Copy the row at chart side using keyboard', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events');
  await page.waitForTimeout(500);
  await page.locator("(//div[contains(@class,'e-left-label-container')])[8]").click();
  await page.locator("(//td[contains(@class,'e-rowcell')])[50]").press('Control+c');
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Query chart row info event', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events-virtual');
  await page.waitForTimeout(3500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Query chart row info after collapse all', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events-virtual');
  await page.waitForTimeout(3000);
  await page.locator("(//span[contains(@class,'e-collapseall')])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Query chart row info after collapse and expand all', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/events-virtual');
  await page.waitForTimeout(3000);
  await page.locator("(//span[contains(@class,'e-collapseall')])[1]").click();
  await page.waitForTimeout(1000);
  await page.locator("(//span[contains(@class,'e-expandall')])[1]").click();
  await page.waitForTimeout(2500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Cancel collapse acttion', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/selfdata-virtual');
  await page.waitForTimeout(1000);
  //await page.getByLabel('1 Column Header ID', { exact: true }).locator('span').first().click();
  await page.waitForTimeout(300);
  await page.locator("(//td[contains(@class,'e-rowcell')])[49]").click();
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Collapse row using key', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/selfdata-virtual');
  await page.waitForTimeout(1000);
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
  await page.waitForTimeout(200);
  await page.keyboard.press('Control+Shift+ArrowUp');
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Add dialog opening event', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/event');
  await page.waitForTimeout(1000);
  await page.locator("(//span[contains(@class,'e-add')])[1]").click();
  await page.waitForTimeout(800);
  await page.locator("(//input[contains(@class,'e-control')])[6]").click();
  await page.locator("(//input[contains(@class,'e-control')])[6]").fill('3 days');
  await page.waitForTimeout(200);
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(1000);
  await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
  await page.waitForTimeout(200);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Zoom to fit and zoom-out', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/event');
  await page.waitForTimeout(1000);
  await page.locator("(//span[text()='Zoom to fit'])[1]").click();
  await page.waitForTimeout(300);
  await page.locator("(//span[text()='Zoom out'])[1]").click();
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Zooming event', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/event');
  await page.waitForTimeout(1000);
  await page.locator("(//span[text()='Zoom in'])[1]").click();
  await page.waitForTimeout(300);
  await page.locator("(//span[text()='Zoom in'])[1]").click();
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('42-Sort descending - sorting event', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/event');
  await page.waitForTimeout(1000);
  await page.locator('//th[contains(@class, "e-headercell")][2]').click();
  await page.waitForTimeout(300);
  await page.locator('//th[contains(@class, "e-headercell")][2]').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-Searchind parent record - searching event', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/event');
  await page.waitForTimeout(1000);
  await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').click();
  await page.waitForTimeout(200);
  await page.locator('//input[contains(@class, "e-control e-textbox e-lib e-input")]').fill('Demand analysis');
  await page.waitForTimeout(100);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('44-Filtering task name column', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/event');
  await page.waitForTimeout(1000);
  await page.locator('(//div[contains(@class, "e-icon-filter")])[2]').click();
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(400);
  await page.locator('(//input[contains(@role, "combobox")])[1]').fill("Customer strength");
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('45-Filtering ID column using filter method', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/event');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/887268/

test('46-887268 Segment cancel event', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-887268');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').first().click({force: true});
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(1212, 175);
  await page.waitForTimeout(600);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  expect(await page.locator("xpath=(//div[contains(@class,'Event')])[1]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://syncfusion.atlassian.net/browse/BLAZ-25411

test('47-BLAZ-25411 cell deselect event trigger', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-25411')
  await page.waitForTimeout(500);
  //Select cell 
  await page.locator('(//td[contains(@class,"rowcell")])[10]').click();
  await page.waitForTimeout(500);
  //select another cell
  await page.locator('(//td[contains(@class,"rowcell")])[11]').click();
  await page.waitForTimeout(500);
  expect(await page.locator("xpath=(//div[contains(@class,'Event')])[1]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

