import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
        ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
});

test('1-Console error on dynamically changing segment c', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2-highcontrast');
    await page.waitForTimeout(2000);
    //Click to select the dropdown
    await page.mouse.click(307, 303);
    await page.waitForTimeout(500);
    //Click to select 
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Click to select
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    // validation-Console error not thrown
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/922657
test('2-Input field for select date issue', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=highcontrast');
    await page.waitForTimeout(4200);
    //Screenshot validation-Input field is displayed  and has no issue in the theme
    expect(await page.locator('(//div[contains(@class,"e-control e-tooltip e-lib")])[3]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/923217
test('3-Issue cannot move to next row ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    await page.waitForTimeout(2000);
    //click the record on grid side 
    await page.locator('(//td[contains(@class,"rowcell")])[14]').click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(2000);
    //Screenshot validation-selection made on the chart side
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/926790
test('4-926790-Text view issue', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'education-scheduler?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the settings
    await page.getByLabel('toggle settings menu').click();
    await page.waitForTimeout(500);
    //Click to switch to Touch Mode
    await page.getByRole('button', { name: 'Touch' }).click();
    await page.waitForTimeout(9000);
    //Screenshot validation-text MATH101 is clearly visible when change to Touch Mode.
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Initial load of sample', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'education-scheduler?theme=fluent2' });
    await page.waitForTimeout(5000);
    //Screenshot validation-Inittial load
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-select Group By Professor Freshman year', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'education-scheduler?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Select "Professor" from the group by dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(1000);
    // Press the ArrowDown key to select the first option
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    // Press the Enter key to confirm the selection
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1500);
    // Select "Freshman Year" from the academic period dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[3]').click();
    await page.waitForTimeout(500);
    // Press the ArrowDown key to select "Freshman Year"
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    // Press the ArrowDown key again to select "Freshman Year"
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    // Click the search button
    await page.locator("(//button[text()='Search'])[1]").click();
    await page.waitForTimeout(1500);
    // Screenshot validation-Group By Professor and Academic period to be for Freshman year is selected
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-select Group By Professor Sophomore year', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'education-scheduler?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select Professor
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(800);
    // Press ArrowDown to select Professor
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    // Press Enter to select Professor
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1500);
    // Click the academic period dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[3]').click();
    await page.waitForTimeout(800);
    // Press ArrowDown to select Sophomore Year
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    // Press ArrowDown again to select Sophomore Year
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    // Press Enter to select Sophomore Year
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Click the search button
    await page.locator("(//button[text()='Search'])[1]").click();
    await page.waitForTimeout(1500);
    // Screenshot validation-Group By Professor and Academic period to be for Sophomore year is selected
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-select Group By Professor Junior year', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'education-scheduler?theme=fluent2' });
    await page.waitForTimeout(2000);
    //click the dropdown to select Professor
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(1000);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1500);
    //Click  the dropdown to Academic Period 
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[3]').click();
    await page.waitForTimeout(1000);
    //Press ArrowDown to select Junior Year 
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    //Click the search button
    await page.locator("(//button[text()='Search'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Group By Professor and Academic period to be for Junior year is selected
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-select Group By Professor Senior year', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'education-scheduler?theme=fluent2' });
    await page.waitForTimeout(2000);
    //click the dropdown to select Professor
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(500);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1500);
    //Click  the dropdown to Academic Period 
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[3]').click();
    await page.waitForTimeout(1000);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    //Press Enter
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1500);
    //Click the search button
    await page.locator("(//button[text()='Search'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Group By Professor and Academic period to be for Senior year is selected
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-select Group By Exam Freshman year', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'education-scheduler?theme=fluent2' });
    await page.waitForTimeout(2000);
    //click the dropdown to select Professor
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(800);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1500);
    //Press the Tab key to move to Academic Period 
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    //Press ArrowDown to select Freshman Year 
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the search button
    await page.locator("(//button[text()='Search'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Group By Exam and Freshman Year
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-select Group By Exam Sophomore year', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    await page.waitForTimeout(2000);
    //click the dropdown to select Professor
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(1000);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(500);
    //Press ArrowDown
    //Press Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1500);
    //Click  the dropdown to Academic Period 
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[3]').click();
    await page.waitForTimeout(1000);
    //Press ArrowDown to select Sophomore Year 
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press the ArrowDown Button
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the search button
    await page.locator("(//button[text()='Search'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Group By Exam and Academic period to be for sophomre year is selected
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-select Group By Exam Junior year', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    await page.waitForTimeout(2000);
    //click the dropdown to select Professor
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(1000);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press Enter button
    await page.locator("(//button[text()='Search'])[1]").click();
    await page.waitForTimeout(1000);
    //Press the Tab key to move to Academic Period 
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[3]').click();
    await page.waitForTimeout(1000);
    //Press ArrowDown to select Junior Year 
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    //Press Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1500);
    //Click the search button
    await page.locator("(//button[text()='Search'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Group By Exam and Academic period to be for Junior year is selected
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-select Group By Professor Senior year', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'education-scheduler?theme=fluent2' });
    await page.waitForTimeout(2000);
    //click the dropdown to select Professor
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(500);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    //Click  the dropdown to Academic Period 
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[3]').click();
    await page.waitForTimeout(1000);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    //Press Enter
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1500);
    //Click the search button
    await page.locator("(//button[text()='Search'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Group By Exam and Academic period to be for Senior year is selected
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-select Group By Professor Senior year semester', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'education-scheduler?theme=fluent2' });
    await page.waitForTimeout(2000);
    //click the dropdown to select Professor
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(1000);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1500);
    //Click  the dropdown to Academic Period 
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[3]').click();
    await page.waitForTimeout(1000);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    //Press Enter
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    //Click the dropdown to select the Fall semester
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[4]').click();
    await page.waitForTimeout(1000);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    //Press Enter
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1500);
    //Click the search button
    await page.locator("(//button[text()='Search'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Group By Exam and Academic period to be for Senior year is selected and Fall semester is added
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-select Group By Professor Senior year semester', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'education-scheduler?theme=fluent2' });
    await page.waitForTimeout(2000);
    //click the dropdown to select Professor
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(1000);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    //Press Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    //Click the dropdown to select the Fall semester
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[4]').click();
    await page.waitForTimeout(1000);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    //Press ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    //Press Enter
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the search button
    await page.locator("(//button[text()='Search'])[1]").click();
    await page.waitForTimeout(4000);
    //Screenshot validation-Group By Exam and Academic period to be for Senior year is selected and Spring Semester is added
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-select Group By Professor Senior year semester clear', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'education-scheduler?theme=fluent2' });
    await page.waitForTimeout(2000); // Initial page load
    // Select "Professor" in Group By dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(800);
    await page.keyboard.press('ArrowDown'); // Option 1
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowDown'); // Option 2 (Professor)
    await page.waitForTimeout(300);
    // Press Enter to select Professor
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Select "Senior Year" semester (assuming it's the 3rd option)
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[4]').click();
    await page.waitForTimeout(800);
    // Press ArrowDown 
    await page.keyboard.press('ArrowDown'); // Option 1
    await page.waitForTimeout(300);
    // Press ArrowDown again to select Senior Year
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);
    // Press Enter again
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Click the Search button
    await page.locator("(//button[text()='Search'])[1]").click();
    await page.waitForTimeout(1500);
    // Click the Clear button
    await page.locator("(//button[text()='Clear'])[1]").click();
    await page.waitForTimeout(2000);
    // Screenshot validation-Group By Professor and Academic period to be for Senior year is selected and Fall semester is added
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-select Group By Professor select Semester', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'education-scheduler?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Select "Professor" in Group By dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(800);
    await page.keyboard.press('ArrowDown'); // Option 1
    await page.waitForTimeout(1000);
    // Press Enter to select Professor
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1500);
    // Select "Senior Year" semester 
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[5]').click();
    await page.waitForTimeout(1000);
    // Press ArrowDown 
    await page.keyboard.press('ArrowDown'); // Option 1
    await page.waitForTimeout(500);
    // Press Enter again
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Click the Search button
    await page.locator("(//button[text()='Search'])[1]").click();
    await page.waitForTimeout(2000);
    // Screenshot validation-select professor and semester is selected
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-select Group By Professor select Semester', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'education-scheduler?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Select "Professor" in Group By dropdown
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(800);
    await page.keyboard.press('ArrowDown'); // Option 1
    await page.waitForTimeout(1000);
    // Press Enter to select Professor
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1500);
    // Select "Senior Year" semester 
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[5]').click();
    await page.waitForTimeout(1000);
    // Press ArrowDown 
    await page.keyboard.press('ArrowDown'); // Option 1
    await page.waitForTimeout(500);
    // Press Enter again
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    // Click the Search button
    await page.locator("(//button[text()='Search'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Clear button
    await page.locator("(//button[text()='Clear'])[1]").click();
    await page.waitForTimeout(2000);
    // Screenshot validation-select professor and semester is selected
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Select Subject Code ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'education-scheduler?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the subject Code 
    await page.locator('(//span[contains(@class,"e-control")])[6]').click();
    await page.waitForTimeout(800);
    //Type the record
    await page.keyboard.type('CS101');
    await page.waitForTimeout(1500);
    // Click the Search button
    await page.locator("(//button[text()='Search'])[1]").click();
    await page.waitForTimeout(2000);
    // Screenshot validation-Subject code is selected
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Select Subject Code Clear ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'education-scheduler?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the subject Code 
    await page.locator('(//span[contains(@class,"e-control")])[6]').click();
    await page.waitForTimeout(800);
    //Type the record MATH102
    await page.keyboard.type('MATH102');
    await page.waitForTimeout(1500);
    // Click the Search button
    await page.locator("(//button[text()='Search'])[1]").click();
    await page.waitForTimeout(800);
    //Click the Clear button
    await page.locator("(//button[text()='Clear'])[1]").click();
    await page.waitForTimeout(2000);
    // Screenshot validation-Subject code is selected is cleared
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
