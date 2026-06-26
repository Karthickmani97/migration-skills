import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
        ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
});

test('1-Resource Multitaskbar  initial load', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(5000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Add to show the dialog tab', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(1000);
    // Click Expand all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(500);
    // Click to Add
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(500);
    // Click save
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(1000);
    // Validate the screenshot-dialog tab is shown
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Collapse all the records', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Expand all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(500);
    //Click Collapse all 
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Expand all the records', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Expand all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Edit the record when open the dialog', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Expand all to show the records
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(800);
    //Click the record
    await page.locator('(//td[contains(@class,"e-rowcell")])[10]').click();
    await page.waitForTimeout(1000);
    //Click the edit button
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(1000);
    //Click the taskname to edit
    await page.locator('(//input[contains(@class,"e-control")])[3]').click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.locator('(//input[contains(@class,"e-control")])[3]').fill('Site location');
    await page.waitForTimeout(500);
    //Click save button
    await page.locator('(//button[contains(@class,"e-control")])[11]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Delete a record', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(1000);
    // Click Expand all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(500);
    // Click to select the task name
    await page.locator('(//td[contains(@class,"e-rowcell")])[10]').click();
    await page.waitForTimeout(500);
    // Click the delete button
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(1000);
    // Validate the screenshot-record is deleted
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Click dependency to show the dialog tab ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Expand all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(1000);
    //Double click on taskbar to open dialog
    await page.waitForTimeout(1000);
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[2]').dblclick();
    await page.waitForTimeout(1000);
    //Click to select dependency
    await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Edit work through cell-edit ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Expand all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(1000);
    //Click the record for work
    await page.locator('(//td[contains(@class,"e-rowcell")])[9]').dblclick();
    await page.waitForTimeout(500);
    //Click increament
    await page.locator('(//span[contains(@class,"e-spin-up")])[1]').click();
    await page.waitForTimeout(500);
    //Click to update
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Edit progress value through cell-edit ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Expand all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(1000);
    //Click the record for work
    await page.locator('(//td[contains(@class,"e-rowcell")])[10]').dblclick();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.locator('(//input[contains(@class,"e-control")])[2]').fill('40');
    //Click to update
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Edit Start Date through cell-edit ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Expand all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(800);
    //Click the record for work
    await page.locator('(//td[contains(@class,"e-rowcell")])[11]').dblclick();
    await page.waitForTimeout(800);
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.locator('(//input[contains(@class,"e-control")])[2]').fill('3/28/2019');
    //Click to update
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Edit End Date through cell-edit ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Expand all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(800);
    //Click the record for work
    await page.locator('(//td[contains(@class,"e-rowcell")])[12]').dblclick();
    await page.waitForTimeout(800);
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.locator('(//input[contains(@class,"e-control")])[2]').fill('4/5/2019');
    //Click to update
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/890030
test('12-Add new dependency record ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(2000);
    //Click Expand all
    await page.locator('(//span[contains(@class,"expandall")])').click();
    await page.waitForTimeout(500);
    //Click the Add button
    await page.locator('(//span[contains(@class,"add")])[1]').click();
    await page.waitForTimeout(500);
    //Click the dependency
    await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
    await page.waitForTimeout(500);
    //Click to Add button on dependency dialog tab
    await page.locator('(//span[contains(@class,"add")])[2]').click();
    await page.waitForTimeout(500);
    //Click to select the dependency dropdown
    await page.locator('(//input[contains(@class,"e-control e-combobox e-lib e-input")])[1]').click();
    await page.waitForTimeout(500);
    //select the dependency
    await page.keyboard.press("ArrowDown+ArrowDown");
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    await page.waitForTimeout(300);
    await page.keyboard.press("Tab+Tab");
    await page.waitForTimeout(1500);
    //Click save button
    await page.locator("(//button[text()='Save'])").click();
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell")])[206]').click();
    await page.waitForTimeout(500);
    //Screenshot validation-On the chart side of the component , dependency record is shown.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Drag and Drop the taskbar on the same Row
test('13-Drag and Drop the taskbar', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //click to drag the taskbar on chart side.
    await page.mouse.click(1038, 448);
    await page.mouse.down();
    await page.mouse.move(1038, 448);
    await page.waitForTimeout(1000);
    await page.mouse.move(831, 435);
    await page.mouse.up();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Drag from one row to another row the taskbars.
test('14-Drag and Drop the taskbar', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Expand all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(500);
    const src = page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[3]');
    const dst = page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]');
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
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Drag and Drop the Taskbar
test('15-Drag and Drop the child taskbar ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Click to Expand
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(500);
    await page.mouse.click(1077, 427);
    await page.mouse.down();
    await page.mouse.move(1077, 427);
    await page.waitForTimeout(1000);
    await page.mouse.move(1065, 440);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Negative scenario
//Disable Drag and Drop 
test('16-Drag from row to row the taskbar ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Disable Drag and Drop
    await page.locator('(//span[contains(@class,"e-switch-active")])[2]').click();
    //Click to Expand
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(500);
    //click on identify site location task
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar   ")])[1]').click();
    // await page.mouse.click(906, 375);
    await page.mouse.down();
    // await page.mouse.move(906, 375);
    await page.waitForTimeout(1000);
    await page.mouse.move(905, 508);
    await page.mouse.up();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Edit progress with Null value ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Expand all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(1000);
    //Click the progress
    await page.locator('(//td[contains(@class,"e-rowcell")])[10]').dblclick();
    await page.waitForTimeout(500);
    //Null value
    await page.locator('#DataItem___Progress').fill('');
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Edit progress with negative value ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Expand all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(1000);
    //Click the progress
    await page.locator('(//td[contains(@class,"e-rowcell")])[10]').dblclick();
    await page.waitForTimeout(500);
    //Negative value added
    await page.locator('#DataItem___Progress').fill('-20');
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Edit start date with wrong date format ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Expand all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(1000);
    //Click the start date
    await page.locator('(//td[contains(@class,"e-rowcell")])[11]').dblclick();
    await page.waitForTimeout(500);
    //Wrong date format added
    await page.locator('#DataItem___StartDate').fill('2021/14/1');
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Edit start date with special characters ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Expand all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(1000);
    //Click the start date
    await page.locator('(//td[contains(@class,"e-rowcell")])[11]').dblclick();
    await page.waitForTimeout(500);
    //Special characters
    await page.locator('#DataItem___StartDate').fill('*&^%$43');
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Edit End date with special characters ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Expand all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(1000);
    //Click the End date
    await page.locator('(//td[contains(@class,"e-rowcell")])[12]').dblclick();
    await page.waitForTimeout(500);
    //Special characters added
    await page.locator('#DataItem___EndDate').fill('*&^%$43');
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Edit End date with wrong date format ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=fluent');
    await page.waitForTimeout(4000);
    //Click Expand all
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(1000);
    //Click the End date
    await page.locator('(//td[contains(@class,"e-rowcell")])[12]').dblclick();
    await page.waitForTimeout(500);
    //Wrong date format
    await page.locator('#DataItem___EndDate').fill('2021/14/1');
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});