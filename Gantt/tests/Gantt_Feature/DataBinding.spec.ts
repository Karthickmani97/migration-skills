import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Delete using toolbar', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/criticalPath');
    await page.waitForTimeout(1000);
    //Click the record
    await page.locator('(//td[contains(@class, "e-rowcell")])[16]').click();
    await page.waitForTimeout(500);
    //Click the delete button
    await page.locator('(//span[contains(@class, "e-delete e-icons e-btn-icon e-icon-left")])[1]').click();
    await page.waitForTimeout(500);
    //Click the Ok button
    await page.locator("(//button[text()='OK'])[1]").click();
    await page.waitForTimeout(500);
    //Click the record
    await page.locator('(//td[contains(@class, "e-rowcell")])[12]').click();
    await page.waitForTimeout(500);
    //Screenshot validation-Record is deleted
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});