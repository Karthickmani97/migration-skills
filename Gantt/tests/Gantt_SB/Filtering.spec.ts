import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
  launchOptions: {
    ignoreDefaultArgs: [], // Disable the scrollbar argument
  },
});

test('1-Filtering initial load', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Open filter menu', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  await page.locator('(//div[contains(@class, "e-icon-filter")])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Filtering task ID with equal filter', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  await page.locator('(//div[contains(@class, "e-icon-filter")])[1]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-numeric e-input-group")])[1]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type("3");
  await page.waitForTimeout(200);
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Clear Task ID filter', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter on the TaskId
  await page.locator('(//div[contains(@class, "e-icon-filter")])[1]').click();
  await page.waitForTimeout(600);
  //Click to Enter the value
  await page.locator('(//span[contains(@class, "e-numeric e-input-group")])[1]').click();
  //Enter the value
  await page.keyboard.type('6');
  await page.waitForTimeout(200);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(500);
  //Click the filter on the TaskId
  await page.locator('(//div[contains(@class, "e-icon-filter")])[1]').click();
  await page.waitForTimeout(600);
  //Click the clear button
  await page.locator("(//button[text()='Clear'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Filtering Taskname with startwith operator', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  await page.locator('(//div[contains(@class, "e-icon-filter")])[2]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('market research');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Filtering Taskname with endswith operator', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter")])[2]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(200);
  //Click Ends with
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(100);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('Demand analysis');
  await page.waitForTimeout(100);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Filtering startdate with equal operator', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter")])[3]').click();
  await page.waitForTimeout(500);
  //Choose Date
  await page.locator('(//span[contains(@class, "e-date-wrapper e-date-container e-input-group")])[1]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('4/9/2021');
  await page.waitForTimeout(200);
  //Filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Filtering startdate with greaterthan operator', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter")])[3]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(200);
  //Greater than
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(200);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(300);
  await page.locator('(//span[contains(@class, "e-date-wrapper e-date-container e-input-group")])[1]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('4/15/2021');
  await page.waitForTimeout(200);
  //Filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Filtering startdate with greater than or equal', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter")])[3]').click();
  await page.waitForTimeout(300);
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(200);
  //Greater than or Equal
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(200);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(200);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-date-wrapper e-date-container")])[1]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('4/15/2021');
  await page.waitForTimeout(200);
  //Filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Filtering duration with startwith operator', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter")])[4]').click();
  await page.waitForTimeout(500);
  //Starts with
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('4');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  //Filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Filtering duration column with not equal to', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter")])[4]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(200);
  //Not Equal
  await page.locator('(//li[contains(@class, "e-list-item e-active")])[1]').click();
  await page.waitForTimeout(200);
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('8');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Filtering duration column with equal operator', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter")])[4]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(200);
  //Equal 
  await page.locator('(//li[contains(@class, "e-list-item")])[7]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('0');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  //Filter button
  await page.waitForTimeout(200);
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Filtering enddate with less than operator', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter")])[5]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(200);
  //Less than
  await page.locator('(//li[contains(@class, "e-list-item e-active")])[1]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-date-wrapper e-date-container")])[1]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('4/20/2021');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Filtering enddate with less than or equal', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter")])[5]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  //Less Than or Equal
  await page.locator('(//li[contains(@class, "e-list-item")])[5]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-date-wrapper e-date-container")])[1]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('4/20/2021');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Filter the service name to start with', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon on service name
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[2]').click();
  await page.waitForTimeout(500);
  //Click to enter the record starts with
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('Final Product ');
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Servie name filtered to indicate starts with .
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Filter the service name to start with', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon on service name
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the dropdown icon
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('CAD - Computer Aided Design');
  await page.waitForTimeout(600);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Servie name filtered to indicate oes Not Start With.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Filter the service name to Does Not Start With', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon on service name
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Does Not Start With
  await page.locator("(//li[text()='Does Not Start With'])[1]").click();
  await page.waitForTimeout(200);
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('CAD - Computer Aided Design');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Servie name filtered to indicate Does Not Start With.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Filter the service name to Does Not End With', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon on service name
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Does Not Start With
  await page.locator("(//li[text()='Does Not End With'])[1]").click();
  await page.waitForTimeout(200);
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('Manufacturing cost');
  await page.waitForTimeout(600);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Servie name filtered to indicate Does Not End With.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Filter the service name to have Contains', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon on service name
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[2]').click();
  await page.waitForTimeout(800);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(800);
  //Select Contains to filter
  await page.locator("(//li[text()='Contains'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('Include all the details');
  await page.waitForTimeout(800);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(800);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Servie name filtered to show contains.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Filter the service name to have Does Not Contain', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon on service name
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Does Not Contain to filter
  await page.locator("(//li[text()='Does Not Contain'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('Final');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Servie name filtered to show Does Not Contain.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Filter the service name to have Equal', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon on service name
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Equal to filter
  await page.locator("(//li[text()='Equal'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('Marketing and Presales');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Servie name filtered to show Equal  .
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Filter the service name to have Not Equal', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon on service name
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Equal to filter
  await page.locator("(//li[text()='Not Equal'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('Marketing and Presales');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Servie name filtered to show Not Equal  .
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Filter the service name to have Empty record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon on service name
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Empty to filter  the records
  await page.locator("(//li[text()='Empty'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('Quality design');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Servie name filtered to show Empty records  .
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Filter the service name to have Not Empty record', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon on service name
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Empty to filter  the records
  await page.locator("(//li[text()='Not Empty'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('Customer strength');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Servie name filtered to show Not Empty records  .
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Filter the service name to have Like records filtered', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon on service name
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Like to filter  the records
  await page.locator("(//li[text()='Like'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('Customer strength');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Servie name filtered to show Like records .
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Collapse parent records, Filter the Start time', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the icon to collapse parent record
  await page.locator('(//span[contains(@class, "e-treegridexpand")])[1]').click();
  await page.waitForTimeout(500);
  //Click the icon to collapse 2nd parent record
  await page.locator('(//span[contains(@class, "e-treegridexpand")])[1]').click();
  await page.waitForTimeout(500);
  //Click the filter icon Start time
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[3]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Greater Than to filter  the records
  await page.locator("(//li[text()='Greater Than'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-date-wrapper e-date-container")])[1]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('4/20/2021');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Start time records are filtered to have Greater than values .
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Filter the Start time,Greater Than and End Time', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon Start time
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[3]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Greater Than to filter  the records
  await page.locator("(//li[text()='Greater Than'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-date-wrapper e-date-container")])[1]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('4/20/2021');
  await page.waitForTimeout(500);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(500);
  //Click the filter icon End time
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[5]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Less Than to filter  the records
  await page.locator("(//li[text()='Less Than'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-date-wrapper e-date-container")])[1]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('5/10/2021');
  await page.waitForTimeout(500);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Start time records are filtered to have Greater than values and Less Than Values filtered in End Time .
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Filter Task ID and Duration starts with ', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon,Task ID
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[1]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Greater Than to filter  the records
  await page.locator("(//li[text()='Greater Than'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-numeric e-input-group")])[1]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('5');
  await page.waitForTimeout(500);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(500);
  //Click the filter icon for Duration
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[4]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Less Than to filter  the records
  await page.locator("(//li[text()='Starts With'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('0');
  await page.waitForTimeout(500);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Task ID filtered and Duration filtered
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Filter Task ID, Greater Than  and Duration starts with ', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon,Task ID
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[1]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Greater Than to filter  the records
  await page.locator("(//li[text()='Greater Than'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-numeric e-input-group")])[1]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('5');
  await page.waitForTimeout(500);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the filter icon for Duration
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[4]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(400);
  //Select Starts  With to filter  the records
  await page.locator("(//li[text()='Starts With'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('0');
  await page.waitForTimeout(500);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Task ID filtered and Duration filtered
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Filter Duration,Starts with then Filter End Time', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon,Duration
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[4]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Starts  With to filter  the records
  await page.locator("(//li[text()='Starts With'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('0');
  await page.waitForTimeout(500);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(500);
  //Click the filter icon for End Time
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[5]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Not Null to filter  the records
  await page.locator("(//li[text()='Not Null'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-date-wrapper e-date-container")])[1]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('4/14/2021');
  await page.waitForTimeout(500);
  //Click the filter button
  await page.locator("(//button[text()='Clear'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Duration record is filtered and End Time record is cleared.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Filter the Service Name records two times.', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon,Service Name
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Starts  With to filter  the records
  await page.locator("(//li[text()='Starts With'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('Defining the product usage');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(500);
  //Click the filter icon for Service Name 
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[2]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Contains to filter  the records
  await page.locator("(//li[text()='Contains'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('Product Concept');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Service Name record is filtered two times and the records displayed
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Filter the Duration,Does Not Start With', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon Duration
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[4]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Like to filter  the records
  await page.locator("(//li[text()='Does Not Start With'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[3]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('4 Days');
  await page.waitForTimeout(200);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Duration is filtered ,Does Not Start With
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Multisort the records in ascending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  //Sort ascend 1st column
  await page.locator("(//th[contains(@class,'e-headercell')])[1]").click();
  await page.waitForTimeout(100);
  //Sort ascend 2nd column
  await page.locator("(//th[contains(@class,'e-headercell')])[2]").click();
  await page.waitForTimeout(100);
  //Sort ascend 3rd column
  await page.locator("(//th[contains(@class,'e-headercell')])[3]").click();
  await page.waitForTimeout(100);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(500);
  //Click the filter icon End time
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[5]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Less Than to filter  the records
  await page.locator("(//li[text()='Less Than'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-date-wrapper e-date-container")])[1]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('4/23/2021');
  await page.waitForTimeout(500);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Records sorted in ascending order and End Time Filtered.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Multisort the records in descending', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  //Sort ascend 1st column
  await page.locator("(//th[contains(@class,'e-headercell')])[1]").click();
  await page.waitForTimeout(100);
  //Sort ascend 2nd column
  await page.locator("(//th[contains(@class,'e-headercell')])[2]").click();
  await page.waitForTimeout(100);
  //Sort ascend 3rd column
  await page.locator("(//th[contains(@class,'e-headercell')])[3]").click();
  await page.waitForTimeout(100);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  //Sort ascend 1st column
  await page.locator("(//th[contains(@class,'e-headercell')])[1]").click();
  await page.waitForTimeout(100);
  //Sort ascend 2nd column
  await page.locator("(//th[contains(@class,'e-headercell')])[2]").click();
  await page.waitForTimeout(100);
  //Sort ascend 3rd column
  await page.locator("(//th[contains(@class,'e-headercell')])[3]").click();
  await page.waitForTimeout(100);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(500);
  //Click the filter icon Start time
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[3]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Greater Than to filter  the records
  await page.locator("(//li[text()='Greater Than'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-date-wrapper e-date-container")])[1]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('6/16/2021');
  await page.waitForTimeout(300);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Records sorted in descending order and Start Time Filtered to have Greater Than values
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/901354/
test('35-BUG-901354-Console error thrown when Filter Start Time', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter for start time
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[3]').click();
  await page.waitForTimeout(500);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-The record is filtered and it indicates no records displayed.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/testing/_workitems/edit/905441
test('36-The End Time records are filtered to have Greater Than values', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter End time
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[5]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Greater Than 
  await page.locator("(//li[text()='Greater Than'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-date-wrapper e-date-container")])[1]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('5/5/21');
  await page.waitForTimeout(500);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-When record is updated it is filtered no records are displayed
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/884330
test('37-BUG-884330-Issue when edit the End Time', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the filter icon,End Time
  await page.locator('(//div[contains(@class, "e-filtermenudiv ")])[5]').click();
  await page.waitForTimeout(500);
  //Click the icon for the dropdown
  await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[2]').click();
  await page.waitForTimeout(300);
  //Select Greater  Than to filter  the records
  await page.locator("(//li[text()='Greater Than'])[1]").click();
  await page.waitForTimeout(500);
  //Enter the record
  await page.locator('(//span[contains(@class, "e-date-wrapper e-date-container")])[1]').click();
  await page.waitForTimeout(200);
  await page.keyboard.type('5/5/21');
  await page.waitForTimeout(500);
  //Click the filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-There is no issue when filtering is done on End time
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/986786
test('38-986786', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'filtering?theme=fluent2' });
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'toggle settings menu' }).click();
  await page.waitForTimeout(1000);
  //select Touch Mode
  await page.getByRole('button', { name: 'Touch' }).click();
  await page.waitForTimeout(1000);
  //Click the icon ftom the dropdown
  await page.locator('.e-input-group-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Child' }).click();
  await page.waitForTimeout(1000);
  //Click the Filter icon
  await page.getByTitle('Filter Icon').nth(1).click();
  await page.waitForTimeout(1000);
  //Enter it
  await page.getByRole('combobox', { name: 'Filter Value' }).fill('Customer strength');
  await page.waitForTimeout(1000);
  //Type the record 
  // await page.getByRole('option', { name: 'Customer strength' }).click();
  // await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter', exact: true }).click();
  await page.waitForTimeout(1000);
  //Click the dropdown icon
  await page.locator('.e-input-group-icon').click();
  await page.waitForTimeout(1000);
  //slect from the dropdown None
  await page.getByRole('option', { name: 'None' }).click();
  await page.waitForTimeout(1000);
  //Click the filter icon
  await page.getByTitle('Filter Icon').nth(1).click();
  await page.waitForTimeout(1000);
  //Click the clear button
  await page.getByRole('button', { name: 'Clear' }).click()
  await page.waitForTimeout(1000);
  //Screenshot validation-
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/991630
test('39-991630', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'filtering?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'filtering?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click the Filter icon
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter ")])[1]').click();
  await page.waitForTimeout(500);
  //Click the Row
  await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Filter pop up is closed
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});