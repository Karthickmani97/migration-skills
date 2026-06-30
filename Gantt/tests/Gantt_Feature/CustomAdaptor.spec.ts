import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Autofit-this-column-and-edit-resources', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/CustomAdaptor');
    await page.waitForTimeout(1000);
    //Click the column menu
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[3]').click();
    await page.waitForTimeout(800);
    //Autofit this column
    await page.locator('(//li[contains(@class, "e-menu-item")])[2]').click();
    await page.waitForTimeout(200);
    //Click on the resources
    await page.locator('(//td[contains(@class, "e-rowcell")])[17]').click();
    await page.mouse.move(649, 234);
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Autofit-all-columns-and-zoom-to-fit', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/CustomAdaptor');
    await page.waitForTimeout(1000);
    //Click the column menu
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[3]').click();
    await page.waitForTimeout(800);
    //Autofit all column
    await page.locator('(//li[contains(@class, "e-menu-item")])[1]').click();
    await page.waitForTimeout(200);
    //Zoom to Fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[12]').click();
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Autofit-start-date-column-using-hearder-contextmenu', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/CustomAdaptor');
    await page.waitForTimeout(1000);
    //Click the column menu on start date
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[4]').click();
    await page.waitForTimeout(800);
    //Autofit this column
    await page.locator('(//li[contains(@class, "e-menu-item")])[2]').click();
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Autoft-all-columns-using-header-contextmenu', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/CustomAdaptor');
    await page.waitForTimeout(1000);
    //Click the column menu
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[3]').click();
    await page.waitForTimeout(800);
    //Autofit all column
    await page.locator('(//li[contains(@class, "e-menu-item")])[1]').click();
    await page.waitForTimeout(200);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Delete the parent record and Indent the record', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/CustomAdaptor');
    await page.waitForTimeout(1000);
    //Click the parent record
    await page.locator('(//td[contains(@class, "e-rowcell")])[2]').click();
    await page.waitForTimeout(800);
    //Delete button 
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(200);
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[12]').click();
    await page.waitForTimeout(200);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Search the parent record and zoom out the record', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/CustomAdaptor');
    await page.waitForTimeout(1000);
    //Click search
    await page.locator('(//input[contains(@class, "e-control")])[1]').click();
    await page.waitForTimeout(800);
    //Enter the record
    await page.locator('(//input[contains(@class, "e-control")])[1]').fill('Parent Task 9');
    //click Enter
    await page.keyboard.press('Enter');
    //Zoom Out
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[11]').click();
    await page.waitForTimeout(200);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Drag and Drop new added record and then Zoom In', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/CustomAdaptor');
    await page.waitForTimeout(1000);
    //Add new task
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(2000);
   await page.locator('//button[text()="Save"]').click();
   await page.waitForTimeout(1200);

    //Drag and drop the record
    const src = page.locator('(//div[contains(@class,"e-rowcelldrag")])[1]');
    const dst = page.locator('(//div[contains(@class,"e-rowcelldrag")])[6]');
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
    //Zoom in the records
    await page.locator('#CustomAdaptor_zoomin').click();
    await page.waitForTimeout(1000);
  //  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/924565
test('8-924565-Console error loading custom', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/CustomAdaptor');
    await page.waitForTimeout(2000);
    //Screenshot validation-Console error not thrown on initial load
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});