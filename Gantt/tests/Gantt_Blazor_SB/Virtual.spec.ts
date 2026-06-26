import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
        ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
});

test('1-Virtual scrolling  initial load', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent');
    await page.waitForTimeout(5000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Add new task ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent');
    await page.waitForTimeout(4000);
    //Click the Add button
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(800);
    //Click save
    await page.locator('(//button[contains(@class,"e-control")])[9]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-General tab dialog', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent');
    await page.waitForTimeout(4000);
    //Click the record to select 
    await page.locator('(//td[contains(@class,"e-rowcell")])[1]').click();
    await page.waitForTimeout(800);
    //Click the Edit button
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(500);
    await page.locator("#TaskName").click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Custom Columns dialog tab', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent');
    await page.waitForTimeout(4000);
    //Click the record to select 
    await page.locator('(//td[contains(@class,"e-rowcell")])[1]').click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(500);
    //Click the custom column to open the dialog
    await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Dependency dialog tab', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent');
    await page.waitForTimeout(4000);
    //Click the record to select 
    await page.locator('(//td[contains(@class,"e-rowcell")])[1]').click();
    await page.waitForTimeout(500);
    //Click the Edit button
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(500);
    //Click the dependency to open the dialog
    await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Zoom in the records', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent');
    await page.waitForTimeout(4000);
    await page.locator(' (//span[contains(@class,"e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Zoom out the records', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent');
    await page.waitForTimeout(4000);
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[5]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Collpase the records', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent');
    await page.waitForTimeout(4000);
    //Collapse by click on the icon
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Expand the records', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent');
    await page.waitForTimeout(4000);
    //Collapse by using the icon
    await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[2]').click();
    await page.waitForTimeout(800);
    //Expand by using the icon
    await page.locator('(//span[contains(@class,"e-icons e-treegridcollapse")])[1]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Increase number of Rows to 2,500 Rows', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent');
    await page.waitForTimeout(4000);
    await page.locator('(//span[contains(@class,"e-ddl")])[1]').click();
    await page.waitForTimeout(2000);
    //Select the row numbers 2,500
    await page.locator('(//li[contains(@class,"e-list-item")])[2]').click();
    await page.waitForTimeout(3000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Increase number of Rows to 5000 Rows', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent');
    await page.waitForTimeout(4000);
    await page.locator('(//span[contains(@class,"e-ddl")])[1]').click();
    await page.waitForTimeout(1000);
    //Select the row numbers 5000
    await page.locator('(//li[contains(@class,"e-list-item")])[3]').click();
    await page.waitForTimeout(5000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Negative scenarios
test('12-Edit start date using wrong date format', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent');
    await page.waitForTimeout(4000);
    //Click start date
    await page.locator('(//td[contains(@class,"e-rowcell")])[3]').click();
    await page.waitForTimeout(2000);
    //Click Edit button
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(500);
    //Click to edit the start date
    await page.locator('(//input[contains(@class,"e-control")])[4]').click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.locator('(//input[contains(@class,"e-control")])[4]').fill('2000/14/1');
    //Click to save
    await page.locator('(//button[contains(@class,"e-control")])[9]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Edit start date to have invalid characters', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent');
    await page.waitForTimeout(4000);
    //Click start date
    await page.locator('(//td[contains(@class,"e-rowcell")])[3]').click();
    await page.waitForTimeout(2000);
    //Click Edit button
    await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(500);
    //Click to edit the start date
    await page.locator('(//input[contains(@class,"e-control")])[4]').click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.locator('(//input[contains(@class,"e-control")])[4]').fill('*&&^%$$##');
    //Click to save
    await page.locator('(//button[contains(@class,"e-control")])[9]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Click add and edit custom', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent');
    await page.waitForTimeout(4000);
    //add dialog
    await page.locator('//span[contains(@class, "e-add e-icons e-btn-icon e-icon-left")]').click();
    await page.waitForTimeout(1000);
    //custom tab
    await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click();
    await page.waitForTimeout(600);
    //Click to edit the start date
    await page.locator('(//input[contains(@id,"Assignee")])[1]').click();
    await page.locator('(//input[contains(@id,"Assignee")])[1]').fill('Custom tab');
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Click edit dialog and edit custom', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent');
    await page.waitForTimeout(4000);
    await page.locator('(//td[contains(@class,"e-rowcell")])[11]').click();
    await page.waitForTimeout(300);
    //add dialog
    await page.locator('//span[contains(@class, "e-edit e-icons e-btn-icon e-icon-left")]').click();
    await page.waitForTimeout(1000);
    //custom tab
    await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click();
    await page.waitForTimeout(600);
    //Click to edit the start date
    await page.locator('(//input[contains(@id,"Assignee")])').click();
    await page.locator('(//input[contains(@id,"Assignee")])').fill('Custom tab');
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/861063
test('16-BUG-Placeholder Text Covers Previous Input', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the add button
    await page.locator('(//span[contains(@class,"add")])').click();
    await page.waitForTimeout(500);
    //Custom columns selection
    await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click();
    await page.waitForTimeout(500);
    //Click Assignee
    await page.locator('(//input[contains(@class,"control")])[10]').fill('Allison Janney');
    await page.waitForTimeout(600);
    //Press the tab key on the keyboard to move to the next selection
    await page.keyboard.press('Tab');
    await page.waitForTimeout(2000);
    //Screnshot validation- the placeholder for edited record should not cover the text after moving to next input field.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/969774
test('17-Taskbar Edit and Scrolldown and Scrollup', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=fluent2');
    await page.waitForTimeout(4000);
    const taskNameCell = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]').nth(1);

    // Double-click to activate cell editing mode
    await taskNameCell.dblclick();
    await page.waitForTimeout(300);
    const editInput = page.locator('#DataItem___TaskName');
    await expect(editInput).toBeVisible();

    // Clear the input and enter new text
    await editInput.clear();
    await editInput.fill('Updated Task Name');

    await editInput.press('Enter');

    // Wait for the cell to be updated
    await page.waitForTimeout(500);

    // Scroll down to the bottom
    // Using mouse wheel scroll to simulate natural scrolling
    const ganttContent = page.locator('.e-chart-scroll-container.e-content');

    // First, ensure scroll element is visible
    await ganttContent.scrollIntoViewIfNeeded();

    // Scroll down using multiple scroll actions to ensure we reach the bottom
    for (let i = 0; i < 10; i++) {
        await ganttContent.evaluate(element => {
            element.scrollTop = element.scrollHeight;
        });
        // Wait a little between scrolls to allow content to load
        await page.waitForTimeout(500);
    }

    // Verify we're at the bottom by checking for last rows
    // This assumes there are task rows at the bottom with specific content
    // We'll wait for any task row to be visible
    await expect(page.locator('.e-treegrid .e-rowcell').last()).toBeVisible();
    await page.waitForTimeout(500);
    // Scroll back to the top
    await ganttContent.evaluate(element => {
        element.scrollTop = 0;
    });
    await page.waitForTimeout(1000);

    // Verify we're back at the top by checking the second task is visible
    const secondTask = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]').nth(1);
    await expect(secondTask).toBeVisible();
    await expect(secondTask).toContainText('Updated Task Name');
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/997542
test('18-Cell automatically receives focus when a record is selected and then scrolled up', async ({ page }) => {
    await page.setViewportSize({ width: 1366, height: 768 });
    await page.goto(Helper.baseUrl + 'virtual-scroll?theme=bootstrap5');
    await page.waitForTimeout(2000);
    // Hover the grid  scroll down
    await page.locator('.e-content.e-yscroll').first().hover();
    await page.mouse.wheel(0, 900);
    await page.waitForTimeout(200);
    await page.mouse.wheel(0, 900);
    await page.waitForTimeout(200);
    await page.mouse.wheel(0, 900);
    await page.waitForTimeout(400);
    // Click Task 6
    await page.getByRole('gridcell', { name: 'Task 76 Column Header TaskName' }).click();
    await page.waitForTimeout(3000);
    // Hover again and scroll up just to middle area 
    await page.locator('.e-content.e-yscroll').first().hover();
    await page.mouse.wheel(0, -900);
    await page.waitForTimeout(200);
    await page.mouse.wheel(0, -900);
    await page.waitForTimeout(600);
    // Validate a focused cell exists and take screenshot
    await page.waitForTimeout(3000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});