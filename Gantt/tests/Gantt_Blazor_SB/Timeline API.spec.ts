import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
test('1-Timeline API initial load', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Decrement unit size width', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  //Click the decrement icon
  await page.locator("(//span[contains(@class,'input')])[2]").click();
  await page.waitForTimeout(500);
  //Click the decrement icon
  await page.locator("(//span[contains(@class,'input')])[2]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Unit width size should be decreased.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Increment unit size width', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  //Click the increment icon
  await page.locator("(//span[contains(@class,'input')])[3]").click();
  await page.waitForTimeout(500);
  //Click the increment icon
  await page.locator("(//span[contains(@class,'input')])[3]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The unit width size should be increased
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Top tier count:3 and change format', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  //Click the count to fill 3 
  await page.locator("(//input[contains(@class,'control')])[2]").fill('3');
  await page.waitForTimeout(500);
  //Click to change the Format
  await page.locator("(//span[contains(@class,'input')])[10]").click();
  await page.waitForTimeout(500);
  //Select the Format
  await page.locator("(//li[text()='Mon Jan 01, 19'])").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Top tier count and Format changes are visible.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Top tier unit: year and bottom tier unit: year', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  //Click Top tier unit 
  await page.locator("(//span[contains(@class,'input')])[8]").click();
  await page.waitForTimeout(500);
  //Select Year
  await page.locator("(//li[text()='Year'])").click();
  await page.waitForTimeout(500);
  //Bottom Tier Unit select
  await page.locator("(//span[contains(@class,'input')])[15]").click();
  await page.waitForTimeout(500);
  //Select year
  await page.locator("(//li[text()='Year'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The chart side of the component the unit changes to years
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Top tier unit: moth and bottom tier unit: month', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  await page.locator('.e-ddl > .e-input-group-icon').first().click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Month' }).click();
  await page.waitForTimeout(200);
  await page.locator('tr:nth-child(8) > td:nth-child(2) > div > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Month' }).click();
  await page.waitForTimeout(200);
  await page.locator('tr:nth-child(9) > td:nth-child(2) > div > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Jan 01, 2018' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Top tier unit:Month and bottom tier unit: week', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  await page.locator('.e-ddl > .e-input-group-icon').first().click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Month' }).click();
  await page.waitForTimeout(500);
  await page.locator('tr:nth-child(5) > td:nth-child(2) > div > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: 'January' }).click();
  await page.waitForTimeout(1000);
  await page.locator('tr:nth-child(8) > td:nth-child(2) > div > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Week' }).click();
  await page.waitForTimeout(500);
  await page.locator('tr:nth-child(9) > td:nth-child(2) > div > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Mon Jan 01', exact: true }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Top tier unit: month and bottom tier unit: day', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  await page.locator('.e-ddl > .e-input-group-icon').first().click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Month' }).click();
  await page.waitForTimeout(1000);
  await page.locator('tr:nth-child(9) > td:nth-child(2) > div > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: '01' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Top tier unit: month and bottom tier unit: hour', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  await page.locator('.e-ddl > .e-input-group-icon').first().click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Month' }).click();
  await page.waitForTimeout(2000);
  await page.locator('tr:nth-child(8) > td:nth-child(2) > div > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Hour' }).click();
  await page.waitForTimeout(2500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Top tier unit: week and bottom tier: year', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  await page.locator("(//span[contains(@class,'e-input-group-icon')])[9]").click();
  await page.waitForTimeout(800);
  await page.getByRole('option', { name: 'Year', exact: true }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Top tier: week and bottom tier: month', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  await page.locator('tr:nth-child(8) > td:nth-child(2) > div > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Month' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Top tier: week and bottom tier: week', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  await page.locator('tr:nth-child(8) > td:nth-child(2) > div > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Week' }).click();
  await page.waitForTimeout(1000);
  await page.locator('tr:nth-child(9) > td:nth-child(2) > div > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Mon Jan 01', exact: true }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Top tier: week and bottom tier: day', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  //Bottom Tier Format select
  await page.locator("(//span[contains(@class,'input')])[17]").click();
  await page.waitForTimeout(500);
  //Select Mon
  await page.locator("(//li[text()='Mon'])").click();
  await page.waitForTimeout(500);
  //Top Tier Format select
  await page.locator("(//span[contains(@class,'input')])[10]").click();
  await page.waitForTimeout(500);
  //Select the Format
  await page.locator("(//li[text()='Mon Jan 01, 19'])").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-The format changed on top and bottom tier is visible
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Top tier: week and bottom tier: hour', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  await page.locator('tr:nth-child(8) > td:nth-child(2) > div > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Hour' }).click();
  await page.waitForTimeout(1000);
  await page.locator('tr:nth-child(9) > td:nth-child(2) > div > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: '00 : 00 AM' }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Top tier: day and bottom tier: year', async ({ page }) => {
  //await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.goto('https://sfblazor.azurewebsites.net/development/net10/demos/gantt-chart/timeline?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  await page.locator('.e-ddl > .e-input-group-icon').first().click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Day' }).click();
  await page.waitForTimeout(1000);
  await page.locator('tr:nth-child(8) > td:nth-child(2) > div > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Year', exact: true }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Top tier: day and bottom tier: month', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  await page.locator('.e-ddl > .e-input-group-icon').first().click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Day' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Increment value' }).nth(1).click();
  await page.waitForTimeout(200);
  await page.locator('tr:nth-child(8) > td:nth-child(2) > div > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Month' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Top tier: day and bottom tier: day', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  await page.locator('.e-ddl > .e-input-group-icon').first().click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Day' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Increment value' }).nth(1).click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Increment value' }).nth(1).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Top tier: day and bottom tier: hour', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  await page.locator('.e-ddl > .e-input-group-icon').first().click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Day' }).click();
  await page.waitForTimeout(1000);
  await page.locator('tr:nth-child(8) > td:nth-child(2) > div > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Hour' }).click();
  await page.waitForTimeout(2000);
  await page.locator('tr:nth-child(9) > td:nth-child(2) > div > .e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: '0 : 00 AM', exact: true }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Top tier:hour and bottom tier: hour', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(4000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  await page.locator('.e-ddl > .e-input-group-icon').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Hour' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('combobox').nth(2).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Hour' }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Bottom tier count set to 34', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  await page.locator('(//input[contains(@class, "e-control e-numerictextbox e-lib e-input")])[3]').first().click();
  await page.waitForTimeout(500);
  await page.locator('(//input[contains(@class, "e-control e-numerictextbox e-lib e-input")])[3]').fill("34");
  await page.waitForTimeout(300);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20 Set unit width as 100', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  await page.locator('(//input[contains(@class, "e-control e-numerictextbox e-lib e-input")])[1]').first().click();
  await page.waitForTimeout(500);
  await page.locator('(//input[contains(@class, "e-control e-numerictextbox e-lib e-input")])[1]').fill("100");
  await page.waitForTimeout(300);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21 Set unit count as -3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  await page.locator('(//input[contains(@class, "e-control e-numerictextbox e-lib e-input")])[1]').first().click();
  await page.waitForTimeout(500);
  await page.locator('(//input[contains(@class, "e-control e-numerictextbox e-lib e-input")])[1]').fill("-3");
  await page.waitForTimeout(300);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/901710
test('22-BUG-901710-Console error is thrown when clear Unit', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent2');
  await page.waitForTimeout(2000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  //Click the unit width
  await page.locator('(//input[contains(@class, "e-control e-numerictextbox e-lib e-input")])[1]').fill('');
  await page.waitForTimeout(500);
  //Press the Enter key
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  //Screenshot validation-Console error not thrown when enter null value record.
  expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/902115
test('23-Console error when clear Unit', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'timeline?theme=fluent2');
  await page.waitForTimeout(1000);
  //Click the settings icon
  await page.locator("(//span[contains(@class,'e-icons e-settings')])[1]").click();
  await page.waitForTimeout(500);
  //Click the unit width
  await page.locator('(//input[contains(@class, "e-control ")])[1]').fill('');
  await page.waitForTimeout(500);
  //Press the Enter key
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  //Click the next unit width under top tier
  await page.locator('(//input[contains(@class, "e-control ")])[1]').fill('');
  await page.waitForTimeout(1000);
  //Screenshot validation-Console error not thrown when enter null value records under the units
  expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});