import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-AutoFit all the columns and Filtered the Taskname', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Remote-data');
    await page.waitForTimeout(500);
    //Column
    await page.locator('(//th[contains(@class, "e-headercell")])[2]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Autofit all the columns
    await page.locator('(//li[contains(@class, "e-menu-item")])[1]').click();
    await page.waitForTimeout(200);
    //Filter Icon for Taskname 
    await page.locator('(//div[contains(@class, "e-icons")])[4]').click();
    await page.waitForTimeout(200);
    //Enter the value after starts with for the filter
    await page.locator('(//input[contains(@class, "e-control")])[2]').click();
    await page.waitForTimeout(1200);
    //Fill the value
    await page.locator('(//input[contains(@class, "e-control")])[2]').type('Leaf development');
    await page.waitForTimeout(1600);
    //Filter 
    await page.keyboard.press('Enter');
    await page.waitForTimeout(600);
    //Zoom to Fit
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[8]').click();
    await page.waitForTimeout(600);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Edit the startdate after AutoFit this column', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Remote-data');
    await page.waitForTimeout(500);
    //Column
    await page.locator('(//th[contains(@class, "headercell")])[3]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Click AutoFit this column.
    await page.locator("(//li[text()='AutoFit All Columns'])").click();
    await page.waitForTimeout(200);
    //Click the startdate to edit of parent record
    await page.locator('(//td[contains(@class, "rowcell")])[3]').dblclick();
    await page.waitForTimeout(1000);
    //Enter the new date , edited
    await page.locator('#DataItem___StartDate').fill('02/03/2021');
    await page.waitForTimeout(300);
    //Press the Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Delete task through context menu,Filter the Duration', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Remote-data');
    await page.waitForTimeout(1000);
    //Select duration
    await page.locator('(//td[contains(@class, "e-rowcell")])[8]').click({
        button: 'right'
    });;
    await page.waitForTimeout(1000);
    //Delete task
    await page.locator('(//li[contains(@class, "e-menu-item")])[6]').click();
    await page.waitForTimeout(200);
    //Click Ok button
    await page.locator('(//button[contains(@class, "e-control")])[9]').click();
    await page.waitForTimeout(200);
    //Filter duration
    await page.locator('(//div[contains(@class, "e-icons")])[8]').click();
    await page.waitForTimeout(300);
    //Enter the value
    await page.locator('(//input[contains(@class, "e-control")])[2]').fill('9');
    await page.waitForTimeout(400);
    //Filter
    await page.locator('(//button[contains(@class, "e-control")])[9]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Convert the milestone to Task and Zoom In the records.', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Remote-data');
    await page.waitForTimeout(1500);
    //Select the milestone
    await page.locator('(//div[contains(@class, "e-gantt-milestone")])[1]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Convert
    await page.locator('(//li[contains(@class, "e-menu-item")])[14]').click();
    await page.waitForTimeout(400);
    //Click Task
    await page.locator('(//li[contains(@class, "e-menu-item")])[16]').click();
    await page.waitForTimeout(800);
    //Zoom In 
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Filter the record ,Add dependency data', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Remote-data');
    await page.waitForTimeout(1000);
    //Filter
    await page.locator('(//div[contains(@class, "e-icons")])[4]').click();
    await page.waitForTimeout(300);
    //Drop down
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])').click();
    await page.waitForTimeout(300);
    //Contains
    await page.locator('(//li[contains(@class, "e-list-item")])[3]').click();
    await page.waitForTimeout(500);
    //Enter the value
    await page.locator('(//input[contains(@class, "e-control")])[2]').type('Tillering');
    await page.waitForTimeout(300);
    //Filter
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);
    //Click Add button
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(300);
    //Click the dependency data
    await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
    await page.waitForTimeout(300);
    //Add to dependency 
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[9]').click();
    await page.waitForTimeout(300);
    //Drop down 
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(300);
    //select dependency
    await page.getByRole('option', { name: '-End of tillering' }).click();
    await page.waitForTimeout(300);
    //Save button
    await page.locator('(//button[contains(@class, "e-control")])[12]').click();
    await page.waitForTimeout(1500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Add above and Zoom Out and Edit', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Remote-data');
    await page.waitForTimeout(500);
    //Select the start date
    await page.locator('(//td[contains(@class, "e-rowcell")])[31]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Add
    await page.locator('(//li[contains(@class, "e-menu-item")])[15]').click();
    await page.waitForTimeout(200);
    //Add above record
    await page.locator('(//li[contains(@class, "e-menu-item")])[16]').click();
    await page.waitForTimeout(200);
    //Zoom Out
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
    await page.waitForTimeout(800);
    //Select the record to edit 
    await page.locator('(//td[contains(@class, "e-rowcell")])[2]').click();
    await page.waitForTimeout(200);
    //Edit button 
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
    await page.waitForTimeout(500);
    //The taskname 
    await page.locator('#TaskName').fill('First Leaf');
    await page.waitForTimeout(200);
    //Click save button
    await page.locator('(//button[contains(@class, "e-control")])[10]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Add below for child records and new record tasks', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Remote-data');
    await page.waitForTimeout(500);
    //Select the record
    await page.locator('(//td[contains(@class, "e-rowcell")])[14]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Add 
    await page.locator('(//li[contains(@class, "e-menu-item")])[15]').click();
    await page.waitForTimeout(200);
    //Click Below
    await page.locator('(//li[contains(@class, "e-menu-item")])[17]').click();
    await page.waitForTimeout(200);
    //Add 
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(200);
    //save button
    await page.locator('(//button[contains(@class, "e-control")])[10]').click();
    await page.waitForTimeout(200);
    //Add secod task
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(200);
    //save button
    await page.locator('(//button[contains(@class, "e-control")])[10]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Add the child record for the tasks', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Remote-data');
    await page.waitForTimeout(500);
    //Select the record
    await page.locator('(//td[contains(@class, "e-rowcell")])[14]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Add 
    await page.locator('(//li[contains(@class, "e-menu-item")])[15]').click();
    await page.waitForTimeout(200);
    //Click child
    await page.locator('(//li[contains(@class, "e-menu-item")])[18]').click();
    await page.waitForTimeout(200);
    //Add 
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
    await page.waitForTimeout(200);
    //save button
    await page.locator('(//button[contains(@class, "e-control")])[10]').click();
    //Zoom In 
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Filter the Start date and Clear the records', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Remote-data');
    await page.waitForTimeout(500);
    //Filter 
    await page.locator('(//div[contains(@class, "e-icons")])[6]').click();
    await page.waitForTimeout(200);
    //Enter the value
    await page.locator('(//input[contains(@class, "e-control")])[2]').fill('12/03/2021');
    await page.waitForTimeout(200);
    //Filter button 
    await page.locator('(//button[contains(@class, "e-control")])[9]').click();
    await page.waitForTimeout(200);
    //Click Filter button for start date
    await page.locator('(//div[contains(@class, "e-icons")])[6]').click();
    await page.waitForTimeout(200);
    //Click Clear button
    await page.locator('(//button[contains(@class, "e-control")])[10]').click();
    await page.waitForTimeout(200);
    //Task information for first parent task record
    await page.locator('(//td[contains(@class, "e-rowcell")])[2]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Task Information
    await page.locator('(//li[contains(@class, "e-menu-item")])[5]').click();
    await page.waitForTimeout(1000);
    await page.locator('#TaskName').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Delete the dependency data and the parent', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/Remote-data');
    await page.waitForTimeout(500);
    //Select the record
    await page.locator('(//td[contains(@class, "e-rowcell")])[10]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    //Delete dependency
    await page.locator('(//li[contains(@class, "e-menu-item")])[9]').click();
    await page.waitForTimeout(200);
    //Click the dependencyn to delete it
    await page.locator('(//li[contains(@class, "e-menu-item")])[16]').click();
    await page.waitForTimeout(200);
    //Delete the parent record
    await page.locator('(//td[contains(@class, "e-rowcell")])[2]').click();
    await page.waitForTimeout(200);
    //Delete button on the toolbar
    await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
    await page.waitForTimeout(200);
    //Click Ok 
    await page.locator('(//button[contains(@class, "e-control")])[9]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
