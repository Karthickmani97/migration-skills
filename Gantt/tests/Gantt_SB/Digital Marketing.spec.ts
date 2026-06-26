import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
    launchOptions: {
        ignoreDefaultArgs: [], // Disable the scrollbar argument
    },
});

test('1-Initial load of the sample digital marketing.', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Screenshot validation-All records displayed on initial load
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Filter the Activity record starts with', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for activity
    await page.locator('(//div[contains(@class, "filtermenudiv")])[1]').click();
    await page.waitForTimeout(1000);
    //Fill the record starts with
    await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[1]').click();
    await page.waitForTimeout(500);
    await page.keyboard.type('B');
    await page.waitForTimeout(500);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Record is updated with start with when filtered.
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Filter the Activity record Does Not starts with', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for activity
    await page.locator('(//div[contains(@class, "filtermenudiv")])[1]').click();
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "input")])[2]').click();
    await page.waitForTimeout(500);
    //Select Does Not Start With
    await page.locator("(//li[text()='Does Not Start With'])[1]").click();
    await page.waitForTimeout(500);
    //Fill the record Does Not Start With 
    await page.locator('(//input[contains(@class, "control")])[2]').fill('ROI Analysis');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are updated with Does Not Start With
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Filter the Activity record Ends with', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for activity
    await page.locator('(//div[contains(@class, "filtermenudiv")])[1]').click();
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[1]').click();
    await page.waitForTimeout(300);
    //Click from the dropdown
    await page.locator("(//li[text()='Ends With'])[1]").click();
    await page.waitForTimeout(300);
    //Fill the record to End With
    await page.locator('(//span[contains(@class, "e-ddl e-lib e-input-group")])[1]').click();
    await page.waitForTimeout(200);
    await page.keyboard.type('g');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are updated with Ends With
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Filter the Activity record Does Not End with', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for activity
    await page.locator('(//div[contains(@class, "filtermenudiv")])[1]').click();
    await page.waitForTimeout(1000);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "input")])[2]').click();
    await page.waitForTimeout(500);
    //Click from the dropdown
    await page.locator("(//li[text()='Does Not End With'])[1]").click();
    await page.waitForTimeout(500);
    //Fill the record Does Not End With
    await page.locator('(//input[contains(@class, "control")])[2]').fill('t');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are updated with Does Not End with
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Filter the Activity record with Contains', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for activity
    await page.locator('(//div[contains(@class, "filtermenudiv")])[1]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "input")])[2]').click();
    await page.waitForTimeout(500);
    //Click Contains to select it 
    await page.locator("(//li[text()='Contains'])[1]").click();
    await page.waitForTimeout(500);
    //Fill the record Contains
    await page.locator('(//input[contains(@class, "control")])[2]').fill('e');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are updated with Contains
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Filter the Activity record with Does Not Contain', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for activity
    await page.locator('(//div[contains(@class, "filtermenudiv")])[1]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "input")])[2]').click();
    await page.waitForTimeout(500);
    //Select Does Not Contain from the dropdown
    await page.locator("(//li[text()='Does Not Contain'])[1]").click();
    await page.waitForTimeout(500);
    //Fill the record Does not Contain record
    await page.locator('(//input[contains(@class, "control")])[2]').fill('w');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are updated with Does Not Contain
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Filter the Activity record with Equal ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for activity
    await page.locator('(//div[contains(@class, "filtermenudiv")])[1]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "input")])[2]').click();
    await page.waitForTimeout(500);
    //Select Equal 
    await page.locator("(//li[text()='Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Fill the record with the value 
    await page.locator('(//input[contains(@class, "control")])[2]').fill('Ad Creation');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are updated with Equal
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Filter the Activity record with Not Equal ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for activity
    await page.locator('(//div[contains(@class, "filtermenudiv")])[1]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "input")])[2]').click();
    await page.waitForTimeout(500);
    //Select Not Equal
    await page.locator("(//li[text()='Not Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Fill the record Not Equal
    await page.locator('(//input[contains(@class, "control")])[2]').fill('Video Content Creation');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are updated with Not Equal
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Filter the Activity record with Empty  ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for activity
    await page.locator('(//div[contains(@class, "filtermenudiv")])[1]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "input")])[2]').click();
    await page.waitForTimeout(500);
    //Select Empty
    await page.locator("(//li[text()='Empty'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are updated to be empty but they are indicated
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Filter the Activity record with Not Empty  ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for activity
    await page.locator('(//div[contains(@class, "filtermenudiv")])[1]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "input")])[2]').click();
    await page.waitForTimeout(500);
    //Select Not Empty Records
    await page.locator("(//li[text()='Not Empty'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are updated to be Not empty but they are indicated
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Filter the Activity record with Like  ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for activity
    await page.locator('(//div[contains(@class, "filtermenudiv")])[1]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "input")])[2]').click();
    await page.waitForTimeout(500);
    //Select Like
    await page.locator("(//li[text()='Like'])[1]").click();
    await page.waitForTimeout(500);
    //Fill the record Not Equal
    await page.locator('(//input[contains(@class, "control")])[2]').fill('Topic Research');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records are updated to be Like but they are indicated
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Filter the Activity record Does Not starts with', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for activity
    await page.locator('(//div[contains(@class, "filtermenudiv")])[1]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "input")])[2]').click();
    await page.waitForTimeout(500);
    //Select Does Not Start With
    await page.locator("(//li[text()='Does Not Start With'])[1]").click();
    await page.waitForTimeout(500);
    //Fill the record Does Not Start With 
    await page.locator('(//input[contains(@class, "control")])[2]').fill('ROI Analysis');
    await page.waitForTimeout(200);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(500);
    //Click the filter icon for activity
    await page.locator('(//div[contains(@class, "filtermenudiv")])[1]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    //await page.locator('(//span[contains(@class,"input")])[2]').click();
    await page.waitForTimeout(500);
    //Click the clear record
    await page.locator("(//button[text()='Clear'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Record is cleared after it was filtered.
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//start date 
test('14-Filter the Start Date record with Not Equal  ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[6]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Not Equal
    await page.locator("(//li[text()='Not Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Fill the record Not Equal
    await page.locator('(//input[contains(@class, "e-input e-keyboard")])[1]').fill('3/1/2024');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Start date has been updated with records Not Equal
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Filter the Start Date record with  Equal  ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[6]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Fill the record Not Equal
    await page.locator('(//input[contains(@class, "e-input e-keyboard")])[1]').fill('7/1/2024');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records updated under start date are Equal
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Filter the Start Date record with  Greater Than  ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[6]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Greater Than
    await page.locator("(//li[text()='Greater Than'])").click();
    await page.waitForTimeout(500);
    //Fill the record Greater Than
    await page.locator('(//input[contains(@class, "e-input e-keyboard")])[1]').fill('10/23/2023');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Updated recordis Greater Than
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Filter the Start Date record with Greater Than Or Equal', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[6]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Greater Than Or Equal
    await page.locator("(//li[text()='Greater Than Or Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Fill the record Greater Than Or Equal
    await page.locator('(//input[contains(@class, "e-input e-keyboard")])[1]').fill('12/2/2024');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Updated record is greater than or Equal to.
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Filter the Start Date record with Less Than ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[6]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Less Than 
    await page.locator("(//li[text()='Less Than'])[1]").click();
    await page.waitForTimeout(500);
    //Fill the record
    await page.locator('(//input[contains(@class, "e-input e-keyboard")])[1]').fill('12/2/2024');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Updated record is Less Than
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Filter the Start Date record with Less Than Or Equal ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[6]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Less Than Or Equal
    await page.locator("(//li[text()='Less Than Or Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Fill the record 
    await page.locator('(//input[contains(@class, "e-input e-keyboard")])[1]').fill('12/18/2024');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Updated start date record is Less Than Or Equal
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Filter the Start Date record with Null ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[6]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Null
    await page.locator("(//li[text()='Null'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Null record is updated
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Filter the Start Date record with  Not Null ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[6]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Not Null
    await page.locator("(//li[text()='Not Null'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The start date Not Null records are updated
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Duration
test('21 -Filter the Duration record with Starts With ', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for Duration
    await page.locator('(//div[contains(@class, "filtermenudiv")])[7]').click();
    await page.waitForTimeout(500);
    //Fill the record 
    await page.locator('(//input[contains(@class, "e-lib ")])[2]').fill('23 days');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Duration records starts with is filtered 
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Filter the Duration record with Does Not Start With', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[7]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Does Not Start With
    await page.locator("(//li[text()='Does Not Start With'])").click();
    await page.waitForTimeout(500);
    //Fill the record 
    await page.locator('(//input[contains(@class, "e-lib ")])[2]').fill('65 days');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Updated record does not start with is updated 
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Filter the Duration record with Ends With', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[7]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Ends With
    await page.locator("(//li[text()='Ends With'])[1]").click();
    await page.waitForTimeout(500);
    //Fill the record 
    await page.locator('(//input[contains(@class, "e-lib ")])[2]').fill('8 days');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Duration updated is updated it Ends with
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Filter the Duration record with Does Not End With', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[7]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Does Not End With
    await page.locator("(//li[text()='Does Not End With'])").click();
    await page.waitForTimeout(500);
    //Fill the record 
    await page.locator('(//input[contains(@class, "e-lib ")])[2]').fill('76 days');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records updated does not end with are shown.
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('25-Filter the Duration record with Contains', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//      //await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
//     await page.waitForTimeout(5000);
//     //Click the filter icon for start date
//     await page.locator('(//div[contains(@class, "filtermenudiv")])[7]').click();
//     await page.waitForTimeout(500);
//     //Click the dropdown
//     await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
//     await page.waitForTimeout(500);
//     //Select Contains
//     await page.locator("(//li[text()='Contains'])[1]").click();
//     await page.waitForTimeout(500);
//     //Fill the record 
//     await page.locator('(//input[contains(@class, "e-lib ")])[2]').fill('3');
//     await page.waitForTimeout(500);
//     //Click the Filter
//     await page.locator("(//button[text()='Filter'])[1]").click();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-The filter record for contains is updated
//      expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('26-Filter the Duration record with Does Not Contain', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[7]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Does Not Contain
    await page.locator("(//li[text()='Does Not Contain'])[1]").click();
    await page.waitForTimeout(500);
    //Fill the record 
    await page.locator('(//input[contains(@class, "e-lib ")])[2]').fill('41 days');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records does not contain the duration
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Filter the Duration record with Equal', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[7]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Equal
    await page.locator("(//li[text()='Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Fill the record 
    await page.locator('(//input[contains(@class, "e-lib ")])[2]').fill('5 days');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Duration record updated to have Equal records
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Filter the Duration record with Not Equal', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[7]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Not Equal
    await page.locator("(//li[text()='Not Equal'])[1]").click();
    await page.waitForTimeout(500);
    //Fill the record 
    await page.locator('(//input[contains(@class, "e-lib ")])[2]').fill('5 days');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Duration to have been filtered Not to be Equal
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Filter the Duration record with Empty', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[7]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Empty 
    await page.locator("(//li[text()='Empty'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Duration filtered to be empty
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Filter the Duration record with Not Empty', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[6]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Not Empty 
    await page.locator("(//li[text()='Not Equal'])").click();
    await page.waitForTimeout(500);
    //Fill the record 
    await page.locator('(//input[contains(@class, "e-lib ")])[2]').fill('8 days');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Duration filtered to be not empty
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903969
test('31-BUG-907794-Empty space appears at the top of the tooltip.', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Hover over the taskbar on the chart side of the component
    await page.locator('(//div[contains(@class, "parent")])[3]').hover();
    await page.waitForTimeout(3500);
    //Screenshot validation-All records displayed on initial load
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903969
test('32-BUG-907794-Dollar Format changed to another currenct .', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Screenshot validation-The currency is in the correct Format 
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/910772
test('33-Misalignment Issue in Digital Marketing Sample', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for start date
    await page.locator('(//div[contains(@class, "filtermenudiv")])[6]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Not Empty 
    await page.locator("(//li[text()='Not Equal'])").click();
    await page.waitForTimeout(500);
    //Fill the record 
    await page.locator('(//input[contains(@class, "e-lib ")])[2]').fill('8 days');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(500);
    //Click the rows
    await page.locator('(//td[contains(@class, "rowcell")])[6]').click();
    await page.waitForTimeout(2000);
    //Screenshot validation-There is no misalignment in the records
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/921886
// test('34-Multiple selection on grid side', async ({ page }) => {
//     await page.setViewportSize({ width: 1920, height: 1080 });
//     //await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
//     await page.waitForTimeout(5000);
//     //Click the filter icon for activity
//     await page.locator('(//div[contains(@class, "filtermenudiv")])[1]').click();
//     await page.waitForTimeout(1000);
//     //Fill the record starts with
//     await page.locator('(//input[contains(@class, "control")])[2]').fill('G');
//     await page.waitForTimeout(500);
//     //Click the Filter
//     await page.locator("(//button[text()='Filter'])[1]").click();
//     await page.waitForTimeout(1000);
//     //Click the last rowcell
//     await page.locator('(//td[contains(@class, "rowcell")])[21]').click();
//     await page.waitForTimeout(2000);
//     //Screenshot validation-Multiple selection not made on the grid side
//     expect(await page.locator('.sb-demo-section').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
// });

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/925598
test('35-925598-Console error when double click', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'digital-marketing?theme=fluent2' });
    await page.waitForTimeout(5000);
    //Click the filter icon for activity
    await page.locator('(//div[contains(@class, "filtermenudiv")])[1]').click();
    await page.waitForTimeout(500);
    //Click the clear record
    await page.locator("(//button[text()='Clear'])[1]").dblclick();
    await page.waitForTimeout(2000);
    //Screenshot validation-Console error is not thrown when  double click on the clear button
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/963854
test('36-963854-Mismatched Conversion Rate Between Grid', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'digital-marketing?theme=fluent2' });
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class, "e-gantt-child-progressbar")])[21]').hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-Conversion rate is displayed correctly
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/963129
test('37-963129-Filter issue in Digital Marketing', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'digital-marketing?theme=fluent2');
    await page.waitForTimeout(5000);
    //Click the filter icon for conversion rate
    await page.locator('(//div[contains(@class,"filtermenudiv")])[4]').click();
    await page.waitForTimeout(500);
    //Click the dropdown
    await page.locator('(//span[contains(@class, "e-ddl e-lib")])[1]').click();
    await page.waitForTimeout(500);
    //Select Greater Than
    await page.locator("(//li[text()='Greater Than'])").click();
    await page.waitForTimeout(500);
    //Fill the record 
    await page.locator('(//input[contains(@class, "e-lib ")])[2]').fill('0.48%');
    await page.waitForTimeout(500);
    //Click the Filter
    await page.locator("(//button[text()='Filter'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The records are filtered based on the conversion rate
    expect(await page.locator('(//div[contains(@class,"sf-gantt e-control e-gantt")])[1]').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});