import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
test('1-Excel Filtering initial load', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Click the Hierarchy mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Change to parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Change to Child mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to child mode
    await page.getByRole('option', { name: 'Child' }).click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Change to Both mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Both mode
    await page.getByRole('option', { name: 'Both' }).click();
    await page.waitForTimeout(3000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Change to none mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to none mode
    await page.getByRole('option', { name: 'None' }).click();
    await page.waitForTimeout(3000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-parent mode select filter in Id', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-parent mode  filter in Id', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    //Click select all 
    await page.locator('(//span[contains(@class," e-fltrcheck")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the 2 and 3 in the checkbox
    await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('9-Parent Mode: Clear Id Filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    //Click select all 
    await page.locator('(//span[contains(@class," e-fltrcheck")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the 2 and 3 in the checkbox
    await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1200);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Child mode  filter in Id', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Child mode
    await page.getByRole('option', { name: 'Child' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    //Click select all 
    await page.locator('(//span[contains(@class," e-fltrcheck")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the 2 and 3 in the checkbox
    await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Child mode:Clear Id Filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Child mode
    await page.getByRole('option', { name: 'Child' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    //Click select all 
    await page.locator('(//span[contains(@class," e-fltrcheck")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the 2 and 3 in the checkbox
    await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12- Both filter in Id', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to both mode
    await page.getByRole('option', { name: 'Both' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    //Click select all 
    await page.locator('(//span[contains(@class," e-fltrcheck")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the 2 and 3 in the checkbox
    await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Both mode:Clear Id Filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Both mode
    await page.getByRole('option', { name: 'Both' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    //Click select all 
    await page.locator('(//span[contains(@class," e-fltrcheck")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the 2 and 3 in the checkbox
    await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14- None filter in Id', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to None mode
    await page.getByRole('option', { name: 'None' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    //Click select all 
    await page.locator('(//span[contains(@class," e-fltrcheck")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the 2 and 3 in the checkbox
    await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-None mode:Clear Id Filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to None mode
    await page.getByRole('option', { name: 'None' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    //Click select all 
    await page.locator('(//span[contains(@class," e-fltrcheck")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the 2 and 3 in the checkbox
    await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Click decending order in Id', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click Task Id header
    await page.getByText('Task ID').click();
    await page.waitForTimeout(300);
    //Click decending order in Id
    await page.locator('.e-sortfilterdiv.e-ascending').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Click ascending order in Id', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click Task Id header for ascending
    await page.getByText('Task ID').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-parent mode filter in Id ascending ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    //Click select all 
    await page.locator('(//span[contains(@class," e-fltrcheck")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the 2 and 3 in the checkbox
    await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click Task Id header
    await page.getByText('Task ID').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-parent mode filter in Id decending ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    //Click select all 
    await page.locator('(//span[contains(@class," e-fltrcheck")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the 2 and 3 in the checkbox
    await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click Task Id header
    await page.getByText('Task ID').click();
    await page.waitForTimeout(300);
    //Click decending order in Id
    await page.locator('.e-sortfilterdiv.e-ascending').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('20-Child mode filter in Id ascending ', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//      await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
//        await page.waitForTimeout(3000);
//     //Click the Hierarchy mode 
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(300);
//     //Change to Child mode
//     await page.getByRole('option', { name:'Child' }).click();
//     await page.waitForTimeout(500);
//     //click filter icon
//     await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
//     //Click select all 
//     await page.locator('(//span[contains(@class," e-fltrcheck")])[1]').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Click the 2 and 3 in the checkbox
//     await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
//     await page.waitForTimeout(300);
//     await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.getByRole('button', { name: 'OK' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //click Task Id header
//     await page.getByText('Task ID').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('21-Child mode filter in Id decending ', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
//     await page.waitForTimeout(3000);  
//     //Click the Hierarchy mode 
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(300);
//     //Change to Child mode
//     await page.getByRole('option', { name: 'Child' }).click();
//     await page.waitForTimeout(500);
//     //click filter icon
//     await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
//     //Click select all 
//     await page.locator('(//span[contains(@class," e-fltrcheck")])[1]').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Click the 2 and 3 in the checkbox
//     await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
//     await page.waitForTimeout(300);
//     await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.getByRole('button', { name: 'OK' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //click Task Id header
//     await page.getByText('Task ID').click();
//     await page.waitForTimeout(300);
//     //Click decending order in Id
//     await page.locator('.e-sortfilterdiv.e-ascending').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('22-Both mode filter in Id ascending ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Both mode
    await page.getByRole('option', { name: 'Both' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    //Click select all 
    await page.locator('(//span[contains(@class," e-fltrcheck")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the 2 and 3 in the checkbox
    await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click Task Id header
    await page.getByText('Task ID').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-None mode filter in Id decending ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Both mode
    await page.getByRole('option', { name: 'Both' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    //Click select all 
    await page.locator('(//span[contains(@class," e-fltrcheck")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the 2 and 3 in the checkbox
    await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click Task Id header
    await page.getByText('Task ID').click();
    await page.waitForTimeout(300);
    //Click decending order in Id
    await page.locator('.e-sortfilterdiv.e-ascending').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('24-Both mode filter in Id ascending ', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
//     await page.waitForTimeout(3000);
//     //Click the Hierarchy mode 
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(300);
//     //Change to None mode
//     await page.getByRole('option', { name: 'None' }).click();
//     await page.waitForTimeout(500);
//     //click filter icon
//     await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
//     //Click select all 
//     await page.locator('(//span[contains(@class," e-fltrcheck")])[1]').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Click the 2 and 3 in the checkbox
//     await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
//     await page.waitForTimeout(300);
//     await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.getByRole('button', { name: 'OK' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //click Task Id header
//     await page.getByText('Task ID').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('25-Both mode filter in Id decending ', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
//     await page.waitForTimeout(3000);
//     //Click the Hierarchy mode 
//     await page.getByRole('combobox').click();
//     await page.waitForTimeout(300);
//     //Change to None mode
//     await page.getByRole('option', { name: 'None' }).click();
//     await page.waitForTimeout(500);
//     //click filter icon
//     await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
//     //Click select all 
//     await page.locator('(//span[contains(@class," e-fltrcheck")])[1]').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //Click the 2 and 3 in the checkbox
//     await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
//     await page.waitForTimeout(300);
//     await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.getByRole('button', { name: 'OK' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //click Task Id header
//     await page.getByText('Task ID').click();
//     await page.waitForTimeout(300);
//     //Click decending order in Id
//     await page.locator('.e-sortfilterdiv.e-ascending').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('26-Parent mode Applying filter in Id', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the 1,2 and 3 in the checkbox
    await page.locator('(//span[contains(@class," e-fltrcheck")])[3]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Child mode Applying filter in Id', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Child mode
    await page.getByRole('option', { name: 'Child' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the 1,2 and 3 in the checkbox
    await page.locator('(//span[contains(@class," e-fltrcheck")])[3]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('28-Both mode Applying filter in Id', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Both mode
    await page.getByRole('option', { name: 'Both' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the 1,2 and 3 in the checkbox
    await page.locator('(//span[contains(@class," e-fltrcheck")])[3]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('29-None mode Applying filter in Id', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to None mode
    await page.getByRole('option', { name: 'None' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the 1,2 and 3 in the checkbox
    await page.locator('(//span[contains(@class," e-fltrcheck")])[3]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[5]').click();
    await page.waitForTimeout(300);
    await page.locator('(//span[contains(@class," e-fltrcheck")])[7]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Scrolling the checkbox in middle', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    // Scroll the checkbox list using mouse wheel
    await page.locator("(//div[contains(@class,'e-checkboxlist')])").hover();
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll down
    await page.mouse.wheel(0, 600);
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Scrolling the checkbox to last', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    // Scroll the checkbox list using mouse wheel
    await page.locator("(//div[contains(@class,'e-checkboxlist')])").hover();
    await page.waitForTimeout(200);
    // Use mouse wheel to scroll down
    await page.mouse.wheel(0, 2000);
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Exclude tasks with IDs containing digit "8"', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 8
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('8');
    await page.waitForTimeout(1000);
    //Click ok
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Exclude tasks with IDs containing digit "10"', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('10');
    await page.waitForTimeout(1000);
    //Click ok
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Add current selection filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('10');
    await page.waitForTimeout(1000);
    //Click ok
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 5
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('5');
    await page.waitForTimeout(200);
    await page.locator('.e-frame.e-icons.e-uncheck').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click ok
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Negative case in both mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill -10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('-10');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-To check Negative case in both mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill -
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('-');
    await page.waitForTimeout(200);
    //click the search and fill +
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('+');
    //click the search and fill *
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('*');
    //click the search and fill /
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('/');
    //click the search and fill @#$%
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('@#$%');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('37-IDs containing digit "8" press enter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 8
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('8');
    await page.waitForTimeout(1000);
    //Click Enter in keyboard
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-IDs containing digit "10" press enter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('10');
    await page.waitForTimeout(1000);
    //Press enter in keyboard
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Add current selection filter press Enter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('10');
    await page.waitForTimeout(1000);
    //Press Enter in Keyboard
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 5
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('5');
    await page.waitForTimeout(200);
    await page.locator('.e-frame.e-icons.e-uncheck').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Press Enter in Keyboard
    await page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Negative case Click cancle in both mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill -10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('-10');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Cancel
    await page.getByRole('button', { name: 'Cancel' }).click();
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Parent Mode-IDs containing digit "8"', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 8
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('8');
    await page.waitForTimeout(1000);
    //Click ok
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('42-Parent Mode-IDs containing digit "10"', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('10');
    await page.waitForTimeout(1000);
    //Click ok
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-Parent Mode-Add current selection filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('10');
    await page.waitForTimeout(1000);
    //Click ok
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 5
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('5');
    await page.waitForTimeout(200);
    await page.locator('.e-frame.e-icons.e-uncheck').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click ok
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('44-Parent Mode-Negative case in both mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill -10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('-10');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('45-Parent Mode-To check Negative case', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill -
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('-');
    await page.waitForTimeout(200);
    //click the search and fill +
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('+');
    //click the search and fill *
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('*');
    //click the search and fill /
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('/');
    //click the search and fill @#$%
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('@#$%');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('46-Parent Mode-IDs containing digit "8" press enter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 8
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('8');
    await page.waitForTimeout(1000);
    //Click Enter in keyboard
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('47-Parent Mode-IDs containing digit "10" press enter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('10');
    await page.waitForTimeout(1000);
    //Press enter in keyboard
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('48-Parent Mode-Add current selection filter press Enter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('10');
    await page.waitForTimeout(1000);
    //Press Enter in Keyboard
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 5
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('5');
    await page.waitForTimeout(200);
    await page.locator('.e-frame.e-icons.e-uncheck').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Press Enter in Keyboard
    await page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('49-Negative case Click cancle in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill -10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('-10');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Cancel
    await page.getByRole('button', { name: 'Cancel' }).click();
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('50-Parent Mode-To check Negative case', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill -
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('-');
    await page.waitForTimeout(200);
    //click the search and fill +
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('+');
    //click the search and fill *
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('*');
    //click the search and fill /
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('/');
    //click the search and fill @#$%
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('@#$%');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Cancel
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('51-Child Mode-IDs containing digit "8"', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Child Mode
    await page.getByRole('option', { name: 'Child' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 8
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('8');
    await page.waitForTimeout(1000);
    //Click ok
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('52-Child Mode-IDs containing digit "10"', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Child Mode
    await page.getByRole('option', { name: 'Child' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('10');
    await page.waitForTimeout(1000);
    //Click ok
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('53-Child Mode-Add current selection filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Child Mode
    await page.getByRole('option', { name: 'Child' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('10');
    await page.waitForTimeout(1000);
    //Click ok
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 5
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('5');
    await page.waitForTimeout(200);
    await page.locator('.e-frame.e-icons.e-uncheck').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click ok
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('54-Child Mode-Negative case in both mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Child Mode
    await page.getByRole('option', { name: 'Child' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill -10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('-10');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('55-Parent Mode-To check Negative case in both mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Child mode
    await page.getByRole('option', { name: 'Child' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill -
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('-');
    await page.waitForTimeout(200);
    //click the search and fill +
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('+');
    //click the search and fill *
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('*');
    //click the search and fill /
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('/');
    //click the search and fill @#$%
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('@#$%');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('56-Child Mode-IDs containing digit "8" press enter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Child Mode
    await page.getByRole('option', { name: 'Child' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 8
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('8');
    await page.waitForTimeout(1000);
    //Click Enter in keyboard
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('57-Child Mode-IDs containing digit "10" press enter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Child Mode
    await page.getByRole('option', { name: 'Child' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('10');
    await page.waitForTimeout(1000);
    //Press enter in keyboard
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('58-Child Mode-Add current selection filter press Enter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Child Mode
    await page.getByRole('option', { name: 'Child' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('10');
    await page.waitForTimeout(1000);
    //Press Enter in Keyboard
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 5
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('5');
    await page.waitForTimeout(200);
    await page.locator('.e-frame.e-icons.e-uncheck').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Press Enter in Keyboard
    await page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('59-Negative case Click cancle in Child Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Child mode
    await page.getByRole('option', { name: 'Child' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill -10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('-10');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Cancel
    await page.getByRole('button', { name: 'Cancel' }).click();
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('60-To check Negative case in Child Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Child mode
    await page.getByRole('option', { name: 'Child' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill -
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('-');
    await page.waitForTimeout(200);
    //click the search and fill +
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('+');
    //click the search and fill *
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('*');
    //click the search and fill /
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('/');
    //click the search and fill @#$%
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('@#$%');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Cancel
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('61-None Mode-IDs containing digit "8"', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to None Mode
    await page.getByRole('option', { name: 'None' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 8
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('8');
    await page.waitForTimeout(1000);
    //Click ok
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('62-None Mode-IDs containing digit "10"', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to None Mode
    await page.getByRole('option', { name: 'None' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('10');
    await page.waitForTimeout(1000);
    //Click ok
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('63-None Mode-Add current selection filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to None Mode
    await page.getByRole('option', { name: 'None' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('10');
    await page.waitForTimeout(1000);
    //Click ok
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 5
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('5');
    await page.waitForTimeout(200);
    await page.locator('.e-frame.e-icons.e-uncheck').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click ok
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('64-None Mode-Negative case in both mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to None Mode
    await page.getByRole('option', { name: 'None' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill -10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('-10');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('65-None Mode-To check Negative case', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to None Mode
    await page.getByRole('option', { name: 'None' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill -
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('-');
    await page.waitForTimeout(200);
    //click the search and fill +
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('+');
    //click the search and fill *
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('*');
    //click the search and fill /
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('/');
    //click the search and fill @#$%
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('@#$%');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('66-None Mode-IDs containing digit "8" press enter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to None Mode
    await page.getByRole('option', { name: 'None' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 8
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('8');
    await page.waitForTimeout(1000);
    //Click Enter in keyboard
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('67-None Mode-IDs containing digit "10" press enter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to None Mode
    await page.getByRole('option', { name: 'None' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('10');
    await page.waitForTimeout(1000);
    //Press enter in keyboard
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('68-None Mode-Add current selection filter press Enter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to None Mode
    await page.getByRole('option', { name: 'None' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('10');
    await page.waitForTimeout(1000);
    //Press Enter in Keyboard
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill 5
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('5');
    await page.waitForTimeout(200);
    await page.locator('.e-frame.e-icons.e-uncheck').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Press Enter in Keyboard
    await page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('69-Negative case Click cancle in None Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to None Mode
    await page.getByRole('option', { name: 'None' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill -10
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('-10');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Cancel
    await page.getByRole('button', { name: 'Cancel' }).click();
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('70-To check Negative case in None Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to None Mode
    await page.getByRole('option', { name: 'None' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //click the search and fill -
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('-');
    await page.waitForTimeout(200);
    //click the search and fill +
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('+');
    //click the search and fill *
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('*');
    //click the search and fill /
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('/');
    //click the search and fill @#$%
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(200);
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('@#$%');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click Cancel
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('71-Hover the number filter in ID', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Hover the number filter
    await page.locator('[aria-label="Number Filters"]').hover();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('72-Click the number filter in ID', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Hover the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test.('73-IDs containing digit "8" in ascending', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
//     await page.waitForTimeout(3000);
//    // click filter icon
//     await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
//     await page.waitForTimeout(200);
//     //click the search and fill 8
//     await page.getByRole('textbox', { name: 'Search', exact: true }).click();
//     await page.waitForTimeout(200);
//     await page.getByRole('textbox', { name: 'Search', exact: true }).fill('8');
//     await page.waitForTimeout(1000);
//     //Click ok
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.getByRole('button', { name: 'OK' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //click Task Id header for ascending
//     await page.getByText('Task ID').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('74-IDs containing digit "8" in Decending', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
//     await page.waitForTimeout(3000);
//     // click filter icon
//     await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
//     await page.waitForTimeout(200);
//     //click the search and fill 8
//     await page.getByRole('textbox', { name: 'Search', exact: true }).click();
//     await page.waitForTimeout(200);
//     await page.getByRole('textbox', { name: 'Search', exact: true }).fill('8');
//     await page.waitForTimeout(1000);
//     //Click ok
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     await page.getByRole('button', { name: 'OK' }).click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
//     //click Task Id header for ascending
//     await page.getByText('Task ID').click();
//     await page.waitForTimeout(200);
//     //Click decending order in Id
//     await page.locator('.e-sortfilterdiv.e-ascending').click();
//     await page.waitForTimeout(1000);
//     expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('75-Open Equal To filter dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Equal to" option
    await page.getByRole('menuitem', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('76-Apply Equal To filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('(//li[text()="Number Filters"])[1]').click();
    await page.waitForTimeout(200);
    // Click on "Equal to" option
    await page.getByRole('menuitem', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 5 in the input field
    await page.locator('input.e-numerictextbox').first().fill('5');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('77-Apply Equal To filter id 10', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Equal to" option
    await page.getByRole('menuitem', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('78-Clear Equal To filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Equal to" option
    await page.getByRole('menuitem', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('79-Apply filter with invalid input', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Equal to" option
    await page.getByRole('menuitem', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value abc#@ in the input field
    await page.locator('input.e-numerictextbox').first().fill('abc#@');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('80-Apply filter withoth input', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Equal to" option
    await page.getByRole('menuitem', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Without any input in the input field
    await page.locator('input.e-numerictextbox').first().fill('');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('81-Open Not Equal To filter dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Not Equal" option
    await page.getByRole('menuitem', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('82-Apply Not Equal filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Not Equal" option
    await page.getByRole('menuitem', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 5 in the input field
    await page.locator('input.e-numerictextbox').first().fill('5');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('83-Apply Not Equal filter id 10', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Not Equal" option
    await page.getByRole('menuitem', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('84-Clear Not Equal filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Not Equal" option
    await page.getByRole('menuitem', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('85-Apply filter with invalid input', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Not Equal" option
    await page.getByRole('menuitem', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value abc#@ in the input field
    await page.locator('input.e-numerictextbox').first().fill('abc#@');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('86-Apply filter withoth input', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Not Equal" option
    await page.getByRole('menuitem', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Without any input in the input field
    await page.locator('input.e-numerictextbox').first().fill('');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('87-Open Less Than To filter dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Less Than" option
    await page.getByRole('menuitem', { name: 'Less Than', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('88-Apply Less Than filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Less Than" option
    await page.getByRole('menuitem', { name: 'Less Than', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 5 in the input field
    await page.locator('input.e-numerictextbox').first().fill('5');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('89-Apply Less Than filter id 10', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Less Than" option
    await page.getByRole('menuitem', { name: 'Less Than', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('90-Clear Not Equal filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Less Than" option
    await page.getByRole('menuitem', { name: 'Less Than', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('91-Apply filter with invalid input', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Less Than" option
    await page.getByRole('menuitem', { name: 'Less Than', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value abc#@ in the input field
    await page.locator('input.e-numerictextbox').first().fill('abc#@');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('92-Apply filter withoth input', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Less Than" option
    await page.getByRole('menuitem', { name: 'Less Than', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Without any input in the input field
    await page.locator('input.e-numerictextbox').first().fill('');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Less Than Or Equal
test('93-Open Less Than Or Equal To filter dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Less Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Less Than Or Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('94-Apply Less Than Or Equal filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Less Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Less Than Or Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 5 in the input field
    await page.locator('input.e-numerictextbox').first().fill('5');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('95-Apply Less Than Or Equal filter id 10', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Less Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Less Than Or Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('96-Clear Less Than Or Equal filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Less Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Less Than Or Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('97-Apply filter with invalid input', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Less Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Less Than Or Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value abc#@ in the input field
    await page.locator('input.e-numerictextbox').first().fill('abc#@');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('98-Apply filter withoth input', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Less Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Less Than Or Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Without any input in the input field
    await page.locator('input.e-numerictextbox').first().fill('');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Greater Than
test('99-Open Greater Than To filter dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Greater Than" option
    await page.getByRole('menuitem', { name: 'Greater Than', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('100-Apply Greater Than filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Greater Than" option
    await page.getByRole('menuitem', { name: 'Greater Than', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 5 in the input field
    await page.locator('input.e-numerictextbox').first().fill('5');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('101-Apply Greater Than filter id 10', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Greater Than" option
    await page.getByRole('menuitem', { name: 'Greater Than', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('102-Clear Greater Than filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Greater Than" option
    await page.getByRole('menuitem', { name: 'Greater Than', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('103-Apply filter with invalid input', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Greater Than" option
    await page.getByRole('menuitem', { name: 'Greater Than', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value abc#@ in the input field
    await page.locator('input.e-numerictextbox').first().fill('abc#@');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('104-Apply filter withoth input', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Greater Than" option
    await page.getByRole('menuitem', { name: 'Greater Than', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Without any input in the input field
    await page.locator('input.e-numerictextbox').first().fill('');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Greater Than Or Equal
test('105-Open Greater Than Or Equal To filter dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Greater Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Greater Than Or Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('106-Apply Greater Than Or Equal filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Greater Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Greater Than Or Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 5 in the input field
    await page.locator('input.e-numerictextbox').first().fill('5');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('107-Apply Greater Than Or Equal filter id 10', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Greater Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Greater Than Or Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('108-Clear Greater Than Or Equal filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Greater Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Greater Than Or Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('109-Apply filter with invalid input', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Greater Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Greater Than Or Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value abc#@ in the input field
    await page.locator('input.e-numerictextbox').first().fill('abc#@');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('110-Apply filter withoth input', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Greater Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Greater Than Or Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Without any input in the input field
    await page.locator('input.e-numerictextbox').first().fill('');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Between

test('111-Open Between filter dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Between" option
    await page.getByRole('menuitem', { name: ' Between ', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('112-Apply Between filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Between" option
    await page.getByRole('menuitem', { name: ' Between ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 3 in the input field
    await page.locator('input.e-numerictextbox').first().fill('3');
    await page.waitForTimeout(500);
    // Enter value 7 in the input field
    await page.locator('input.e-numerictextbox').last().fill('7');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('113-Apply Between filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Between" option
    await page.getByRole('menuitem', { name: ' Between ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 25 in the input field
    await page.locator('input.e-numerictextbox').first().fill('25');
    await page.waitForTimeout(500);
    // Enter value 39 in the input field
    await page.locator('input.e-numerictextbox').last().fill('39');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('114-Clear Between filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Between" option
    await page.getByRole('menuitem', { name: 'Between', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 3 in the input field
    await page.locator('input.e-numerictextbox').first().fill('3');
    await page.waitForTimeout(500);
    // Enter value 7 in the input field
    await page.locator('input.e-numerictextbox').last().fill('7');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('115-Apply filter with invalid input', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Between" option
    await page.getByRole('menuitem', { name: 'Between', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 })
    // Enter value abc#@ in the input field
    await page.locator('input.e-numerictextbox').first().fill('abc#@');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('116-Apply filter with invalid input', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Between" option
    await page.getByRole('menuitem', { name: 'Between', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value abc#@ in the input field
    await page.locator('input.e-numerictextbox').first().fill('12');
    await page.waitForTimeout(200);
    // Enter value 12 in the input field
    await page.locator('input.e-numerictextbox').last().fill('2');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('117-Apply filter with in one field', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Between" option
    await page.getByRole('menuitem', { name: 'Between', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 12 in the input field
    await page.locator('input.e-numerictextbox').first().fill('12');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('118-Apply filter withoth input', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Between" option
    await page.getByRole('menuitem', { name: 'Between', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Without any input in the input field
    await page.locator('input.e-numerictextbox').first().fill('');
    await page.waitForTimeout(500);
    // Without any input in the input field
    await page.locator('input.e-numerictextbox').first().fill('');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Custom filter
test('119-Open Custom filter dialog', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('120-Complex filtering-(Greater than AND Less than)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Greater Than" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Greater Than', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 5 in the input field
    await page.locator('input.e-numerictextbox').first().fill('5');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 })
    // Click on "Less Than" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Less Than', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').last().fill('10');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('121-Complex filtering-(Equal AND Equal)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 1 in the input field
    await page.locator('input.e-numerictextbox').first().fill('2');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 1 in the input field
    await page.locator('input.e-numerictextbox').last().fill('2');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('122-Complex filtering-(Equal AND Equal)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 1 in the input field
    await page.locator('input.e-numerictextbox').first().fill('2');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 9 in the input field
    await page.locator('input.e-numerictextbox').last().fill('9');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('123-Complex filtering-(GTE AND LTE)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Greater Than Or Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Greater Than Or Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 3 in the input field
    await page.locator('input.e-numerictextbox').first().fill('3');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Less Than Or Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Less Than Or Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 9 in the input field
    await page.locator('input.e-numerictextbox').last().fill('9');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('124-Complex filtering-(Not Equal AND Not Equal)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Not Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 1 in the input field
    await page.locator('input.e-numerictextbox').first().fill('1');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Not Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 2 in the input field
    await page.locator('input.e-numerictextbox').last().fill('2');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('125-Complex filtering-(Greater than OR Less than)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click OR 
    await page.locator('label').filter({ hasText: 'OR' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Greater Than" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Greater Than', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 5 in the input field
    await page.locator('input.e-numerictextbox').first().fill('5');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Less Than" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Less Than', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').last().fill('10');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('126-Complex filtering-(Equal OR Equal)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click OR 
    await page.locator('label').filter({ hasText: 'OR' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 1 in the input field
    await page.locator('input.e-numerictextbox').first().fill('2');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 1 in the input field
    await page.locator('input.e-numerictextbox').last().fill('2');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('127-Complex filtering-(Equal OR Equal)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click OR 
    await page.locator('label').filter({ hasText: 'OR' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 1 in the input field
    await page.locator('input.e-numerictextbox').first().fill('2');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 9 in the input field
    await page.locator('input.e-numerictextbox').last().fill('9');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('128-Complex filtering-(GTE OR LTE)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click OR 
    await page.locator('label').filter({ hasText: 'OR' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Greater Than Or Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Greater Than Or Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 3 in the input field
    await page.locator('input.e-numerictextbox').first().fill('3');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Less Than Or Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Less Than Or Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 9 in the input field
    await page.locator('input.e-numerictextbox').last().fill('9');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('129-Complex filtering-(Not Equal OR Not Equal)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click OR 
    await page.locator('label').filter({ hasText: 'OR' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Not Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 1 in the input field
    await page.locator('input.e-numerictextbox').first().fill('1');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Not Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 2 in the input field
    await page.locator('input.e-numerictextbox').last().fill('2');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('130-Complex filtering-(Null)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Null" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Null', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('131-Complex filtering-(Not Null)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Not Null" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Not Null', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('132-Complex filtering-(Null) in OR', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click OR 
    await page.locator('label').filter({ hasText: 'OR' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Null" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Null', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('133-Complex filtering-(Not Null)in OR', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click OR 
    await page.locator('label').filter({ hasText: 'OR' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Not Null" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Not Null', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Parent mode
test('134-Open Equal To dialog in parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Equal to" option
    await page.getByRole('menuitem', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('135-Apply Equal To filter in parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Equal to" option
    await page.getByRole('menuitem', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 5 in the input field
    await page.locator('input.e-numerictextbox').first().fill('5');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('136-Apply Equal To filter id 10 in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Equal to" option
    await page.getByRole('menuitem', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('137-Clear Equal To filter in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Equal to" option
    await page.getByRole('menuitem', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('138-Apply filter with invalid input in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Equal to" option
    await page.getByRole('menuitem', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value abc#@ in the input field
    await page.locator('input.e-numerictextbox').first().fill('abc#@');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('139-Apply filter withoth input in parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Equal to" option
    await page.getByRole('menuitem', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Without any input in the input field
    await page.locator('input.e-numerictextbox').first().fill('');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('140-Open Not Equal To dialog in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Not Equal" option
    await page.getByRole('menuitem', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('141-Apply Not Equal filter in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Not Equal" option
    await page.getByRole('menuitem', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 5 in the input field
    await page.locator('input.e-numerictextbox').first().fill('5');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('142-Apply Not Equal filter id 10 in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Not Equal" option
    await page.getByRole('menuitem', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('143-Clear Not Equal filter in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Not Equal" option
    await page.getByRole('menuitem', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('144-Apply filter with invalid input in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Not Equal" option
    await page.getByRole('menuitem', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value abc#@ in the input field
    await page.locator('input.e-numerictextbox').first().fill('abc#@');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('145-Apply filter withoth input in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Not Equal" option
    await page.getByRole('menuitem', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Without any input in the input field
    await page.locator('input.e-numerictextbox').first().fill('');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('146-Open Less Than To filter dialog in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Less Than" option
    await page.getByRole('menuitem', { name: 'Less Than', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('147-Apply Less Than filter in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Less Than" option
    await page.getByRole('menuitem', { name: 'Less Than', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 5 in the input field
    await page.locator('input.e-numerictextbox').first().fill('5');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('148-Apply Less Than filter id 10 in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Less Than" option
    await page.getByRole('menuitem', { name: 'Less Than', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('149-Clear Not Equal filter in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Less Than" option
    await page.getByRole('menuitem', { name: 'Less Than', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('150-Apply filter with invalid input in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Less Than" option
    await page.getByRole('menuitem', { name: 'Less Than', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value abc#@ in the input field
    await page.locator('input.e-numerictextbox').first().fill('abc#@');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('151-Apply filter withoth input in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(300);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Less Than" option
    await page.getByRole('menuitem', { name: 'Less Than', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Without any input in the input field
    await page.locator('input.e-numerictextbox').first().fill('');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Less Than Or Equal
test('152-Open Less Than Or Equal dialog in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(300);
    // Click on "Less Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Less Than Or Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('153-Apply Less Than Or Equal filter in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Less Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Less Than Or Equal', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 5 in the input field
    await page.locator('input.e-numerictextbox').first().fill('5');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('154-Apply Less Than Or Equal filter id 10 Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(300);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Less Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Less Than Or Equal', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('155-Clear Less Than Or Equal filter in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(300);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Less Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Less Than Or Equal', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('156-Apply filter with invalid input in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(300);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Less Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Less Than Or Equal', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value abc#@ in the input field
    await page.locator('input.e-numerictextbox').first().fill('abc#@');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('157-Apply filter withoth input in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(300);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Less Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Less Than Or Equal', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Without any input in the input field
    await page.locator('input.e-numerictextbox').first().fill('');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Greater Than
test('158-Open Greater Than dialog in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Greater Than" option
    await page.getByRole('menuitem', { name: 'Greater Than', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('159-Apply Greater Than filter in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(300);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Greater Than" option
    await page.getByRole('menuitem', { name: 'Greater Than', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 5 in the input field
    await page.locator('input.e-numerictextbox').first().fill('5');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('160-Apply Greater Than filter id 10 in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(300);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Greater Than" option
    await page.getByRole('menuitem', { name: 'Greater Than', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('161-Clear Greater Than filter in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(300);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Greater Than" option
    await page.getByRole('menuitem', { name: 'Greater Than', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('162-Apply filter with invalid input in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(300);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Greater Than" option
    await page.getByRole('menuitem', { name: 'Greater Than', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value abc#@ in the input field
    await page.locator('input.e-numerictextbox').first().fill('abc#@');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('163-Apply filter withoth input in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(300);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Greater Than" option
    await page.getByRole('menuitem', { name: 'Greater Than', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Without any input in the input field
    await page.locator('input.e-numerictextbox').first().fill('');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


//Greater Than Or Equal
test('164-Open Greater Than Or Equal dialog in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Greater Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Greater Than Or Equal', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('165-Apply Greater Than Or Equal filter in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(300);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Greater Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Greater Than Or Equal', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 5 in the input field
    await page.locator('input.e-numerictextbox').first().fill('5');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('166-Apply Greater Than Or Equal filter', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(300);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Greater Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Greater Than Or Equal', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('167-Clear Greater Than Or Equal filter in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(300);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Greater Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Greater Than Or Equal', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').first().fill('10');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('168-Apply filter with invalid input in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(300);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Greater Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Greater Than Or Equal', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value abc#@ in the input field
    await page.locator('input.e-numerictextbox').first().fill('abc#@');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('169-Apply filter withoth input in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(300);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Greater Than Or Equal" option
    await page.getByRole('menuitem', { name: 'Greater Than Or Equal', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Without any input in the input field
    await page.locator('input.e-numerictextbox').first().fill('');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Between

test('170-Open Between filter dialog in parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Between" option
    await page.getByRole('menuitem', { name: ' Between ', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('171-Apply Between filter in parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(300);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Between" option
    await page.getByRole('menuitem', { name: ' Between ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 3 in the input field
    await page.locator('input.e-numerictextbox').first().fill('3');
    await page.waitForTimeout(500);
    // Enter value 7 in the input field
    await page.locator('input.e-numerictextbox').last().fill('7');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('172-Apply Between filter in parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Between" option
    await page.getByRole('menuitem', { name: ' Between ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 25 in the input field
    await page.locator('input.e-numerictextbox').first().fill('25');
    await page.waitForTimeout(500);
    // Enter value 39 in the input field
    await page.locator('input.e-numerictextbox').last().fill('39');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('173-Clear Between filter in parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Between" option
    await page.getByRole('menuitem', { name: 'Between', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 3 in the input field
    await page.locator('input.e-numerictextbox').first().fill('3');
    await page.waitForTimeout(500);
    // Enter value 7 in the input field
    await page.locator('input.e-numerictextbox').last().fill('7');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: 'Clear Filter' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('174-Apply filter with invalid input in parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Between" option
    await page.getByRole('menuitem', { name: 'Between', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 })
    // Enter value abc#@ in the input field
    await page.locator('input.e-numerictextbox').first().fill('abc#@');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('175-Apply filter with invalid input in parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Between" option
    await page.getByRole('menuitem', { name: 'Between', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value abc#@ in the input field
    await page.locator('(//input[contains(@class,"e-numerictextbox")])[1]').fill('abc#@');
    await page.waitForTimeout(800);
    // Enter value 12 in the input field
    await page.locator('(//input[contains(@class,"e-numerictextbox")])[2]').click();
    await page.waitForTimeout(100);
    await page.locator('(//input[contains(@class,"e-numerictextbox")])[2]').fill('12');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('176-Apply filter with in one field in parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Between" option
    await page.getByRole('menuitem', { name: 'Between', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Enter value 12 in the input field
    await page.locator('input.e-numerictextbox').first().fill('12');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('177-Apply filter withoth input in parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(500);
    // Click on "Between" option
    await page.getByRole('menuitem', { name: 'Between', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Without any input in the input field
    await page.locator('input.e-numerictextbox').first().fill('');
    await page.waitForTimeout(500);
    // Without any input in the input field
    await page.locator('input.e-numerictextbox').first().fill('');
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Custom filter
test('178-Open Custom filter dialog in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(300);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('179-(Greater than AND Less than) in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(300);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Greater Than" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Greater Than', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 5 in the input field
    await page.locator('input.e-numerictextbox').first().fill('5');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 })
    // Click on "Less Than" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Less Than', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').last().fill('10');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('180-Custom filtering-(Equal AND Equal) in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(300);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 1 in the input field
    await page.locator('input.e-numerictextbox').first().fill('2');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 1 in the input field
    await page.locator('input.e-numerictextbox').last().fill('2');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('181-Custom filtering-(Equal AND Equal) in Parent Mode ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 1 in the input field
    await page.locator('input.e-numerictextbox').first().fill('2');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 9 in the input field
    await page.locator('input.e-numerictextbox').last().fill('9');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('182-Custom filtering-(GTE AND LTE) in parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(300);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Greater Than Or Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Greater Than Or Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 3 in the input field
    await page.locator('input.e-numerictextbox').first().fill('3');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Less Than Or Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Less Than Or Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 9 in the input field
    await page.locator('input.e-numerictextbox').last().fill('9');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('183-Custom(Not Equal AND Not Equal) in Parent Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(300);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Not Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 1 in the input field
    await page.locator('input.e-numerictextbox').first().fill('1');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Not Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 2 in the input field
    await page.locator('input.e-numerictextbox').last().fill('2');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('184-Custom(Greater than OR Less than) in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(300);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click OR 
    await page.locator('label').filter({ hasText: 'OR' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Greater Than" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Greater Than', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 5 in the input field
    await page.locator('input.e-numerictextbox').first().fill('5');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Less Than" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Less Than', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 10 in the input field
    await page.locator('input.e-numerictextbox').last().fill('10');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('185-Custom(Equal OR Equal) In Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(300);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click OR 
    await page.locator('label').filter({ hasText: 'OR' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 1 in the input field
    await page.locator('input.e-numerictextbox').first().fill('2');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 1 in the input field
    await page.locator('input.e-numerictextbox').last().fill('2');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('186-Custom-(Equal OR Equal) In Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(300);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click OR 
    await page.locator('label').filter({ hasText: 'OR' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 1 in the input field
    await page.locator('input.e-numerictextbox').first().fill('2');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 9 in the input field
    await page.locator('input.e-numerictextbox').last().fill('9');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('187-Custom filtering-(GTE OR LTE) in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(300);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click OR 
    await page.locator('label').filter({ hasText: 'OR' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Greater Than Or Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Greater Than Or Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 3 in the input field
    await page.locator('input.e-numerictextbox').first().fill('3');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Less Than Or Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Less Than Or Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 9 in the input field
    await page.locator('input.e-numerictextbox').last().fill('9');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('188-Custom-(Not Equal OR Not Equal) in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(500);
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click OR 
    await page.locator('label').filter({ hasText: 'OR' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Not Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 1 in the input field
    await page.locator('input.e-numerictextbox').first().fill('1');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Not Equal" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[6]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Not Equal', exact: true }).click();
    await page.waitForTimeout(200);
    // Enter value 2 in the input field
    await page.locator('input.e-numerictextbox').last().fill('2');
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click OK to apply the filter
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('189-Custom filtering-(Null) in parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(300);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Null" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Null', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('190-Custom filtering-(Not Null) in parent mode ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(300);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(300);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Not Null" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Not Null', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('191-Custom filtering-(Null) in OR Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click OR 
    await page.locator('label').filter({ hasText: 'OR' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Null" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Null', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('192-Custom-(Not Null)in OR in Parent mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=fluent2');
    await page.waitForTimeout(3000);
    //Click the Hierarchy mode 
    await page.getByRole('combobox').click();
    await page.waitForTimeout(300);
    //Change to Parent mode
    await page.getByRole('option', { name: 'Parent' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click filter icon
    await page.locator('(//div[contains(@title,"Filter Icon")])[1]').click();
    await page.waitForTimeout(200);
    //Click the number filter
    await page.locator('[aria-label="Number Filters"]').click();
    await page.waitForTimeout(200);
    // Click on "Custom Filter" option
    await page.getByRole('menuitem', { name: ' Custom Filter ', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click OR 
    await page.locator('label').filter({ hasText: 'OR' }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click on "Not Null" option
    await page.locator('(//span[contains(@class, "e-input-group-icon")])[3]').click()
    await page.waitForTimeout(200);
    await page.getByRole('option', { name: 'Not Null', exact: true }).click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
