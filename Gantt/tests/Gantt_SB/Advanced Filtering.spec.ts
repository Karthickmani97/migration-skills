import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
        ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
});

test('1-Filter the Taskname ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])[1]').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[2]').click();
    await page.waitForTimeout(500);
    //Click the Taskname
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Click to Add the Taskname
    await page.locator('(//input[contains(@class,"control")])[3]').fill('Concept approval');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Collapse the Record after filtering', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])[1]').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click the Enddate
    await page.locator("(//li[text()='End Date'])").click();
    await page.waitForTimeout(500);
    //Click to Edit the End date
    await page.locator('(//input[contains(@class,"control")])[3]').fill('4/8/2021');
    await page.waitForTimeout(500);
    //Click to select the drop down to choose Greater than
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Greater than
    await page.locator("(//li[text()='Greater Than'])").click();
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(500);
    //Click the parent record to collapse the task
    await page.locator('(//div[contains(@class,"parent-taskbar")])[1]').click();
    await page.waitForTimeout(300);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Clear the Record after Filtering', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[2]').click();
    await page.waitForTimeout(500);
    //Click the Taskname
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Click to Edit the Taskname
    await page.locator('(//input[contains(@class,"control")])[3]').fill('Quality design');
    await page.waitForTimeout(500);
    //Click the add Group button
    await page.locator('(//button[contains(@class,"control")])[3]').click();
    await page.waitForTimeout(500);
    //Add Group button
    await page.locator("(//li[text()='Add Group'])").click();
    await page.waitForTimeout(500);
    //Click the Taskname for Add Group
    await page.locator('(//span[contains(@class,"input")])[6]').click();
    await page.waitForTimeout(500);
    //Select TaskName
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Select the type of Taskname, Edit
    await page.locator('(//input[contains(@class,"control")])[6]').fill('Manufacturing cost');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(500);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Clear button 
    await page.locator("(//button[text()='Clear'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Add Group after Filter the Tasknames', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click the Taskname
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Click to Edit the Taskname
    await page.locator('(//input[contains(@class,"e-control")])[3]').fill('Quality design');
    await page.waitForTimeout(500);
    //Click the add Group button
    await page.locator('(//button[contains(@class,"control")])[3]').click();
    await page.waitForTimeout(500);
    //Add Group button
    await page.locator("(//li[text()='Add Group'])").click();
    await page.waitForTimeout(500);
    //Click the Taskname for Add Group
    await page.locator('(//span[contains(@class,"input")])[6]').click();
    await page.waitForTimeout(500);
    //Select TaskName
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Select the type of Taskname, Edit
    await page.locator('(//input[contains(@class,"control")])[3]').fill('Manufacturing Cost');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/875518
test('5-Filter the duration field ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click the Duration
    await page.locator("(//li[text()='Duration'])").click();
    await page.waitForTimeout(500);
    //Click to Edit the Duration
    await page.locator('(//input[contains(@class,"e-control")])[3]').fill('5');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-the grid side of the component should show that  duration should be filtered.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/875017
test('6-BUG-Icon for Add button is fixed  ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-the alignment of the add button icon is fixed and is displayed at the centre
    expect(await page.locator('.e-group-header').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/875311
test('7-BUG-Validation message Error issue.', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click the Duration
    await page.locator("(//li[text()='Duration'])").click();
    await page.waitForTimeout(500);
    //Click to select from Dropdown
    await page.locator('(//span[contains(@class,"input")])[4]').click();
    await page.waitForTimeout(500);
    //Click to select Is Null
    await page.locator("(//li[text()='Is Null'])").click();
    await page.waitForTimeout(500);
    //Click the Add icon
    await page.locator('(//span[contains(@class,"e-add")])[1]').click();
    await page.waitForTimeout(500);
    //Click Add Condition
    await page.locator("(//li[text()='Add Condition'])").click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[6]').click();
    await page.waitForTimeout(500);
    //Click the Duration
    await page.locator("(//li[text()='Duration'])").click();
    await page.waitForTimeout(500);
    //Click to select from Dropdown
    await page.locator('(//span[contains(@class,"input")])[9]').click();
    await page.waitForTimeout(500);
    //Click to select Is Not Null
    await page.locator("(//li[text()='Is Not Null'])").click();
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(500);
    //Click Filter buttton 
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Validation message should not appear when filtering has been done.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Filter the Taskname field to have contains  ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click the Task Name 
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Click the dropdown to select contains
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select contains
    await page.locator("(//li[text()='Contains'])").click();
    await page.waitForTimeout(500);
    //Click to enter the Taskname value
    await page.locator('(//input[contains(@class,"e-control")])[3]').fill('Product concept');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The taskname should be visible on both grid and chart side of the component.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Filter the Start date field ,Not Between ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(200);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(200);
    //Click the start date 
    await page.locator("(//li[text()='Start Date'])").click();
    await page.waitForTimeout(200);
    //Select the dropdown to choose not between
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(200);
    //Select Not Between
    await page.locator("(//li[text()='Not Between'])").click();
    await page.waitForTimeout(200);
    //Click to enter the startdate value
    await page.locator('(//input[contains(@class,"e-control")])[3]').fill('4/2/2021 - 4/9/2021');
    await page.waitForTimeout(200);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(200);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The filtered start date should be visible on the Grid side of the component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/933536
test('10-Filter the ID Field to be Greater than ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select ID
    await page.locator("(//li[text()='ID'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Greater than
    await page.locator("(//li[text()='Greater Than'])").click();
    await page.waitForTimeout(500);
    //Click to enter start date
    await page.locator('(//input[contains(@class,"e-control")])[3]').fill('6');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The Filtered ID greater than record should be visible on Grid and chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Filter the End Date  Field to have Between Dates', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select End Date
    await page.locator("(//li[text()='End Date'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Between
    await page.locator("(//li[text()='Between'])").click();
    await page.waitForTimeout(500);
    //Click to enter End date
    await page.locator('(//input[contains(@class,"e-control")])[3]').fill('4/29/2021 - 5/10/2021');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The selected in between dates should appear on Grid side filtered.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Filter the End date with OR after clear', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click the clear button
    await page.locator("(//button[text()='Clear'])").click();
    await page.waitForTimeout(500);
    //Click the Add button icon
    await page.locator('(//span[contains(@class,"e-add")])[1]').click();
    await page.waitForTimeout(500);
    //Click Add Group
    await page.locator("(//li[text()='Add Group'])").click();
    await page.waitForTimeout(500);
    //Click to select 'OR'
    await page.locator('(//label[contains(@class,"e-lib")])[2]').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select End Date
    await page.locator("(//li[text()='End Date'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Less then
    await page.locator("(//li[text()='Less Than'])").click();
    await page.waitForTimeout(500);
    //Click to enter End date
    await page.locator('(//input[contains(@class,"e-control")])[3]').fill('06/07/21');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The selected dates Less Than should appear on Grid side filtered.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Filter the End Date to have Less Than', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select End Date
    await page.locator("(//li[text()='End Date'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Less Than
    await page.locator("(//li[text()='Less Than'])").click();
    await page.waitForTimeout(500);
    //Click to enter End date
    await page.locator('(//input[contains(@class,"e-control")])[3]').fill('4/8/2021');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The selected Less than dates should appear on Grid side filtered.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Filter the End Date Greater Than or Equal and Less Than Or Equal', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select End Date
    await page.locator("(//li[text()='End Date'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Greater Than or Equal 
    await page.locator("(//li[text()='Greater Than Or Equal'])").click();
    await page.waitForTimeout(500);
    //Click to Enter End date
    await page.locator('(//input[contains(@class,"e-control")])[3]').fill('4/20/2021');
    await page.waitForTimeout(500);
    //Click the Add button icon
    await page.locator('(//span[contains(@class,"e-add")])[1]').click();
    await page.waitForTimeout(500);
    //Click Add Group
    await page.locator("(//li[text()='Add Group'])").click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[7]').click();
    await page.waitForTimeout(500);
    //Click to select End Date
    await page.locator("(//li[text()='End Date'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[9]').click();
    await page.waitForTimeout(500);
    //Select Less Than or Equal 
    await page.locator("(//li[text()='Less Than Or Equal'])").click();
    await page.waitForTimeout(500);
    //Click to Enter End date
    await page.locator('(//input[contains(@class,"e-control")])[3]').fill('4/27/2021');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The selected dates filtered should reflect on the Grid and chart side how records are filtered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Filter the Start Date to have Less Than', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select End Date
    await page.locator("(//li[text()='End Date'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Less Than
    await page.locator("(//li[text()='Less Than'])").click();
    await page.waitForTimeout(500);
    //Click to enter End date
    await page.locator('(//input[contains(@class,"e-control")])[3]').fill('4/7/2021');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The selected Less than dates should appear on Grid side filtered.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Filter the Start Date to be Equal', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Start Date
    await page.locator("(//li[text()='Start Date'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Equal
    await page.locator("(//li[text()='Equal'])").click();
    await page.waitForTimeout(500);
    //Click to enter start date
    await page.locator('(//input[contains(@class,"control")])[3]').fill('6/16/2021');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The selected Equal dates should appear on Grid side filtered.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Filter the Start Date to be Greater Than', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Start Date
    await page.locator("(//li[text()='Start Date'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Greater Than
    await page.locator("(//li[text()='Greater Than'])").click();
    await page.waitForTimeout(500);
    //Click to enter Start date
    await page.locator('(//input[contains(@class,"control")])[3]').fill('6/22/2021');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The selected Greater Than filtered start date should be visible on grid and chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Filter the Start Date to be Less Than or Equal', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Start Date
    await page.locator("(//li[text()='Start Date'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Less Than or Equal 
    await page.locator("(//li[text()='Less Than Or Equal'])").click();
    await page.waitForTimeout(500);
    //Click to enter Start date
    await page.locator('(//input[contains(@class,"control")])[3]').fill('4/9/2021');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The selected Less Than Or Equal filtered start date should be visible on grid and chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Filter the Start Date to be Not Equal', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Start Date
    await page.locator("(//li[text()='Start Date'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Not Equal 
    await page.locator("(//li[text()='Not Equal'])").click();
    await page.waitForTimeout(500);
    //Click to enter Start date
    await page.locator('(//input[contains(@class,"control")])[3]').fill('4/20/2021');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The selected Not Equal filtered start date should be visible on grid and chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Filter the Start Date to be Between', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Start Date
    await page.locator("(//li[text()='Start Date'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Between 
    await page.locator("(//li[text()='Between'])").click();
    await page.waitForTimeout(500);
    //Click to enter Start date
    await page.locator('(//input[contains(@class,"control")])[3]').fill('5/6/2021');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The selected Between filtered start date should be visible on grid and chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Filter the Taskname ,Does Not Start With', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Task Name
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Does Not Start With 
    await page.locator("(//li[text()='Does Not Start With'])").click();
    await page.waitForTimeout(500);
    //Click to select 
    await page.locator('(//input[contains(@class,"control")])[3]').fill('Branding product');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The record is filtered on the grid side for the Task Name selected
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Filter the Taskname ,Ends With', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Task Name
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Ends With 
    await page.locator("(//li[text()='Ends With'])").click();
    await page.waitForTimeout(500);
    //Click to select 
    await page.locator('(//input[contains(@class,"control")])[3]').fill('materials');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The record is filtered has Ends With record seleted on the grid side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Filter the Taskname , to have Contains', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Task Name
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Contains 
    await page.locator("(//li[text()='Contains'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('details');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The record is filtered Contains, shows on grid side and chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Filter the Taskname , to have Does Not Contain', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Task Name
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Does Not Contain 
    await page.locator("(//li[text()='Does Not Contain'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('Product concept');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The record is filtered Does Not Contain,and Should not be visible on either Grid or Chart side of the component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Filter the Taskname , to have Does Not End With', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Task Name
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Does Not End With 
    await page.locator("(//li[text()='Does Not End With'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('cost');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The record is filtered Does Not End With,is selected and is visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Filter the Taskname ,to have Equal', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Task Name
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Equal 
    await page.locator("(//li[text()='Equal'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('Market research');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The filtered record is selected ,equal and visible on grid side and chart side of the component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Filter the Taskname ,to have Not Equal', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Task Name
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Not Equal 
    await page.locator("(//li[text()='Not Equal'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('Competitor analysis');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The filtered record Not Equal is filtered and does not show on either grid or chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Filter the Taskname ,to have In', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Task Name
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select In 
    await page.locator("(//li[text()='In'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('Define reliability');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The record is filtered to have In and is visible 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Filter the Taskname ,Not In', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Task Name
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Not In 
    await page.locator("(//li[text()='Not In'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('Prepare product sketch and notes');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The record is filtered ,and does not show on the grid side or chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Filter the Taskname ,to have Empty', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Task Name
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Empty 
    await page.locator("(//li[text()='Empty'])").click();
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Empty is filtered and records are filtered are visible on the grid and chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Filter the Taskname ,to have Not Empty', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Task Name
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Not Empty 
    await page.locator("(//li[text()='Not Empty'])").click();
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The records filtered not empty , all tasks are visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Filter the Taskname ,to have Is Null', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Task Name
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Is Null 
    await page.locator("(//li[text()='Is Null'])").click();
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The records filtered to show Null records, all records on grid and chart side is shown.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Filter the Taskname ,to have Is Not Null', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Task Name
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Is Not Null 
    await page.locator("(//li[text()='Is Not Null'])").click();
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The filtered records are shown 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Filter the ID ,Greater Than Or Equal', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Press arrowdown on the keyboard to select ID
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Greater Than Or Equal 
    await page.locator("(//li[text()='Greater Than Or Equal'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('25');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2500);
    //Screenshot validation-The record is filtered is visible on the Grid side of the component and chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Filter the ID ,to have Between', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Press arrowdown on the keyboard to select ID
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Between
    await page.locator("(//li[text()='Between'])").click();
    await page.waitForTimeout(500);
    //Click to select 1st record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('5');
    await page.waitForTimeout(500);
    //Click to select 2nd record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[4]').fill('11');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2500);
    //Screenshot validation-The record is filtered is visible on the Grid side of the component and chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Filter the ID ,Less Than', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Press arrowdown on the keyboard to select ID
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Less Than
    await page.locator("(//li[text()='Less Than'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('6');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2500);
    //Screenshot validation-The Less Than Records is filtered is visible 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Filter the ID ,Not Between', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Press arrowdown on the keyboard to select ID
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Not Between
    await page.locator("(//li[text()='Not Between'])").click();
    await page.waitForTimeout(500);
    //Click to select 1st record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('2');
    await page.waitForTimeout(500);
    //Click to select 2nd record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[4]').fill('7');
    await page.waitForTimeout(500)
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2500);
    //Screenshot validation-The filtered records is shown on the grid side of the component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Filter the ID ,Less Than Or Equal', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Press arrowdown on the keyboard to select ID
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Less Than Or Equal
    await page.locator("(//li[text()='Less Than Or Equal'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('4');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2500);
    //Screenshot validation-The Less Than or Equal Records is filtered is visible on the Grid side and Chart side of the component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Filter the ID ,Not Equal', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Press arrowdown on the keyboard to select ID
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Not Equal
    await page.locator("(//li[text()='Not Equal'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('10');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2500);
    //Screenshot validation-The records is filtered and grid and chart side remains same 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Filter the ID ,to Filter ,In', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Press arrowdown on the keyboard to select ID
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select In
    await page.locator("(//li[text()='In'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('7');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2500);
    //Screenshot validation-The record is filtered and is displayed on the grid and chart side of the component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Filter the ID ,to Filter ,Not In', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Press arrowdown on the keyboard to select ID
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select  Not In
    await page.locator("(//li[text()='Not In'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('9');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2500);
    //Screenshot validation-The record that is filtered is not visible either on grid or chart side of the component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('42-Filter the ID ,to Filter ,Is Null', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Press arrowdown on the keyboard to select ID
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Is Null
    await page.locator("(//li[text()='Is Null'])").click();
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2500);
    //Screenshot validation-The record is filtered and records remains same on both grid and chart side of the component.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-Filter the ID ,to Filter ,Is Not Null', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Press arrowdown on the keyboard to select ID
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press Enter key on the keyboard
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Is Not Null
    await page.locator("(//li[text()='Is Not Null'])").click();
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2500);
    //Screenshot validation-The record is filtered and records remains same on both grid and chart side of the component.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('44-Filter the Duration ,Does Not Start With', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Duration
    await page.locator("(//li[text()='Duration'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Does Not Start With 
    await page.locator("(//li[text()='Does Not Start With'])").click();
    await page.waitForTimeout(500);
    //Click to select 
    await page.locator('(//input[contains(@class,"control")])[3]').fill('4');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The record is filtered on the grid side for the Task Name selected
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('45-Filter the Duration,Ends With', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Duration
    await page.locator("(//li[text()='Duration'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Ends With 
    await page.locator("(//li[text()='Ends With'])").click();
    await page.waitForTimeout(500);
    //Click to select 
    await page.locator('(//input[contains(@class,"control")])[3]').fill('2');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The record is filtered has Ends With record seleted on the grid side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('46-Filter the Duration ,Does Not End With', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Duration
    await page.locator("(//li[text()='Duration'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Does Not End With 
    await page.locator("(//li[text()='Does Not End With'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('4');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The record is filtered Does Not End With,is selected and is visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('47-Filter the Duration ,Contains', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Duration
    await page.locator("(//li[text()='Duration'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Contains 
    await page.locator("(//li[text()='Contains'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('8');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The record is filtered Contains, shows on grid side and chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('48-Filter the Duration,Does Not Contain', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Duration
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Does Not Contain 
    await page.locator("(//li[text()='Does Not Contain'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('2');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The filtered record is visible on the Grid and Chart side of the component. 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('49-Filter the Duration , Equal', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Duration
    await page.locator("(//li[text()='Duration'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Equal 
    await page.locator("(//li[text()='Equal'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('4');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The filtered record is selected ,equal and visible on grid side and chart side of the component
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('50-Filter the Duration,Not Equal', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Duration
    await page.locator("(//li[text()='Duration'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Not Equal 
    await page.locator("(//li[text()='Not Equal'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('3');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The filtered record Not Equal is filtered and does not show on either grid or chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('51-Filter the Duration ,In', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Duration
    await page.locator("(//li[text()='Duration'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select In 
    await page.locator("(//li[text()='In'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('0');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The record is filtered to have In and is visible on both Grid and chart side 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('52-Filter the Duration ,Not In', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Duration
    await page.locator("(//li[text()='Duration'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Not In 
    await page.locator("(//li[text()='Not In'])").click();
    await page.waitForTimeout(500);
    //Click to select record that is to be entered
    await page.locator('(//input[contains(@class,"control")])[3]').fill('7');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The record is filtered ,and does not show on the grid side or chart side
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('53-Filter the Duration ,Empty', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Duration
    await page.locator("(//li[text()='Duration'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Empty 
    await page.locator("(//li[text()='Empty'])").click();
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Empty is filtered and records are filtered are visible on the grid and chart side.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('54-Filter the Duration,Not Empty', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click to select Duration
    await page.locator("(//li[text()='Duration'])").click();
    await page.waitForTimeout(500);
    //Select the dropdown
    await page.locator('(//span[contains(@class,"input")])[3]').click();
    await page.waitForTimeout(500);
    //Select Not Empty 
    await page.locator("(//li[text()='Not Empty'])").click();
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The records filtered not empty , all tasks are visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/887206
test('55-BUG-887206-Close button issue not visible ', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent2');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])[1]').click();
    await page.waitForTimeout(500);
    //Click the close button to remove the input
    await page.locator('(//span[contains(@class,"delete")])[1]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The close button is visible
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/testing/_workitems/edit/907153/?workitem=912797
test('56-BUG-912797-Close button issue not visible', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=bootstrap5');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//button[contains(@class,"e-control e-btn e-lib")])[3]').click();
    await page.waitForTimeout(500);
    //Click the close button to remove the input
    await page.locator('(//span[contains(@class,"delete")])[1]').click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The close button is visible in bootstrap 5 theme 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/884358
test('57-BUG-884358-Console error when Add conditions', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click the Duration
    await page.locator("(//li[text()='Duration'])").click();
    await page.waitForTimeout(500);
    //Click to select from Dropdown
    await page.locator('(//span[contains(@class,"input")])[4]').click();
    await page.waitForTimeout(500);
    //Click to select starts with
    await page.locator("(//li[text()='Starts With'])").click();
    await page.waitForTimeout(500);
    //Click to add the duration value
    await page.locator('(//input[contains(@class,"e-control e-textbox e-lib e-input")])[1]').fill('14 days');
    await page.waitForTimeout(500);
    //Click the Add icon
    await page.locator('(//span[contains(@class,"e-add")])[1]').click();
    await page.waitForTimeout(500);
    //Click Add Condition
    await page.locator("(//li[text()='Add Condition'])").click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[6]').click();
    await page.waitForTimeout(500);
    //Click the Taskname
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Click to select from Dropdown
    await page.locator('(//span[contains(@class,"input")])[9]').click();
    await page.waitForTimeout(500);
    //Click to select Starts With
    await page.locator("(//li[text()='Starts With'])").click();
    await page.waitForTimeout(500);
    //Click to enter the records
    await page.locator('(//input[contains(@class,"e-control e-textbox e-lib e-input")])[2]').fill('Concept approval');
    await page.waitForTimeout(500);
    //Click OR Button
    await page.locator("(//label[text()='OR'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Add icon
    await page.locator('(//span[contains(@class,"e-add")])[1]').click();
    await page.waitForTimeout(500);
    //Click Add Condition
    await page.locator("(//li[text()='Add Condition'])").click();
    await page.waitForTimeout(500);
    //Click the input for the dropdown
    await page.locator('(//span[contains(@class,"input")])[12]').click();
    await page.waitForTimeout(200);
    //Click the start date
    await page.locator("(//li[text()='Start Date'])").click();
    await page.waitForTimeout(200);
    //Click to enter the records
    await page.locator('(//input[contains(@class,"e-control e-datepicker e-lib e-input e-keyboard")])').fill('4/8/2021');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The records are updated.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/905266
test('58-Add conditons console error thrown', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=fluent');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])').click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[1]').click();
    await page.waitForTimeout(500);
    //Click the Duration
    await page.locator("(//li[text()='Duration'])").click();
    await page.waitForTimeout(500);
    //Click to select from Dropdown
    await page.locator('(//span[contains(@class,"input")])[4]').click();
    await page.waitForTimeout(500);
    //Click to select starts with
    await page.locator("(//li[text()='Starts With'])").click();
    await page.waitForTimeout(500);
    //Click to add the duration value
    await page.locator('(//input[contains(@class,"e-control e-textbox e-lib e-input")])[1]').fill('2 days');
    await page.waitForTimeout(500);
    //Click the Add icon
    await page.locator('(//span[contains(@class,"e-add")])[1]').click();
    await page.waitForTimeout(500);
    //Click Add Condition
    await page.locator("(//li[text()='Add Condition'])").click();
    await page.waitForTimeout(500);
    //Click to show the Dropdown
    await page.locator('(//span[contains(@class,"input")])[6]').click();
    await page.waitForTimeout(500);
    //Click the Taskname
    await page.locator("(//li[text()='Task Name'])").click();
    await page.waitForTimeout(500);
    //Click to select from Dropdown
    await page.locator('(//span[contains(@class,"input")])[9]').click();
    await page.waitForTimeout(500);
    //Click to select Starts With
    await page.locator("(//li[text()='Starts With'])").click();
    await page.waitForTimeout(500);
    //Click to enter the records
    await page.locator('(//input[contains(@class,"e-control e-textbox e-lib e-input")])[2]').fill('C');
    await page.waitForTimeout(500);
    //Click the Add icon
    await page.locator('(//span[contains(@class,"e-add")])[1]').click();
    await page.waitForTimeout(500);
    //Click Add Condition
    await page.locator("(//li[text()='Add Condition'])").click();
    await page.waitForTimeout(500);
    //Click the input for the dropdown
    await page.locator('(//span[contains(@class,"input")])[12]').click();
    await page.waitForTimeout(200);
    //Click the End date
    await page.locator("(//li[text()='End Date'])").click();
    await page.waitForTimeout(200);
    //Click to enter the records
    await page.locator("(//input[contains(@class,'e-datepicker')])[1]").fill('4/20/2021');
    await page.waitForTimeout(500);
    //Click Apply button
    await page.locator("(//button[text()='Apply'])").click();
    await page.waitForTimeout(500);
    //Click to Close
    await page.locator('(//span[contains(@class,"close")])[3]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The records are updated and no console error thrown
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/922653
test('59-Visibility Issue in Advanced Filtering', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=bootstrap5');
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator("(//span[text()='Dark'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The filter icon is not visible 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/925120
test('60-925120-Visibility Issue of the Filter icon', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=tailwind3');
    test.info().annotations.push({ type: 'Sample link', description: 'advanced-filtering?theme=tailwind3' });
    await page.waitForTimeout(5000);
    //Screenshot validation-The icons on the Filter  in tailwind theme is displayed properly
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/925602
test('61-925602-Close icon not visible in theme Tailwind 3', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'advanced-filtering?theme=tailwind3');
    test.info().annotations.push({ type: 'Sample link', description: 'advanced-filtering?theme=tailwind3' });
    await page.waitForTimeout(2000);
    //Click the Advanced Filter button
    await page.locator('(//span[contains(@class,"filter")])[1]').click();
    //Screenshot validation-The icon is visible when load the theme
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

