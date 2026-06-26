import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Columnvalidation-01', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Screenshot validation-Record is rendered
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Columnvalidation-02', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
    await page.waitForTimeout(1000);
    //Press the Enter button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    //Screenshot validation-Validation message is displayed for required columns for progress before updating the record
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Customvalidation-03', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Double click to cell edit 
    await page.locator("(//td[contains(@class,'e-rowcell')])[36]").dblclick();
    await page.waitForTimeout(800);
    //Press Control+A to select all text
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Click the Update  button
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-validation message is indicated under taskname to be added
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Customvalidation-04', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to Custom field
    await page.locator("(//div[contains(@class,'e-tab-text')])[4]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-validation message is indicated for Task name as it is a custom validation to have min length of 5 characters
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Customvalidation-05', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(500);
    //Navigate to Custom field
    await page.locator("(//div[contains(@class,'e-tab-text')])[4]").click();
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Click the Cancel button in the validation dialog
    await page.locator("(//button[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is not indicated 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Customvalidation-06', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Double click the  1st child taskbar to edit
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(800);
    //click the Duration 
    await page.locator("input[name='Duration']").click();
    await page.waitForTimeout(500);
    //Edit the Duration with invalid value
    await page.locator("input[name='Duration']").fill('5');
    await page.waitForTimeout(1000);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1200);
    //Screenshot validation-Multiple filed validation messages are indicated and saved is blocked and End Date is also blocked from updating for a completed task 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Customvalidation-07', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
   await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the Add button
    await page.locator("(//span[text()='Add'])[1]").click();
    await page.waitForTimeout(800);
    //select progress value
    await page.locator("input[name='Progress']").click();
    await page.waitForTimeout(500);
    await page.locator("input[name='Progress']").fill('50');
    await page.waitForTimeout(500);
    //Click the Custom field
    await page.locator("(//div[contains(@class,'e-tab-text')])[4]").click();
    await page.waitForTimeout(500);
    //click the OwnerEmail 
    await page.locator("input[name='OwnerEmail']").click();
    await page.waitForTimeout(500);
    //Edit the OwnerEmail with invalid value
    await page.locator("input[name='OwnerEmail']").fill('pm.alex@acme.com');
    await page.waitForTimeout(500);
    //Click Task Code field to move the focus
    await page.locator("input[name='TaskCode']").click();
    await page.waitForTimeout(500);
    //Edit the TaskCode with invalid value
    await page.locator("input[name='TaskCode']").fill('PRJ-INI-000');
    await page.waitForTimeout(500);
    //Click the Team size 
    await page.locator("input[name='TeamSize']").click();
    await page.waitForTimeout(500);
    //Click the increament value 
    await page.locator("(//span[@title='Increment value'])[3]").click();
    await page.waitForTimeout(200);
    //Click the tags to fill it 
    await page.locator("input[name='Tags']").click();
    await page.waitForTimeout(500);
    //Edit the Tags with invalid value
    await page.locator("input[name='Tags']").fill('#initiation');
    await page.waitForTimeout(500);
    //Contact phone to fill
    await page.locator("input[name='ContactPhone']").click();
    await page.waitForTimeout(500);
    await page.locator("input[name='ContactPhone']").fill('+15553000104');
    await page.waitForTimeout(500);
    //Edit the budget
    await page.locator("input[name='Budget']").click();
    await page.waitForTimeout(500);
    await page.locator("input[name='Budget']").fill('100');
    await page.waitForTimeout(500);
    //Actual Cost to fill
    await page.locator("input[name='ActualCost']").click();
    await page.waitForTimeout(500);
    await page.locator("input[name='ActualCost']").fill('1.00');
    await page.waitForTimeout(500);
    //Click it 
    await page.locator("(//span[contains(@class,'e-input')])[15]").click();
    await page.waitForTimeout(200);
    await page.locator("(//li[text()='In Progress'])[1]").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Low'])[1]").click();
    await page.waitForTimeout(500);
    //Notes part 
    await page.locator("(//div[contains(@class,'e-tab-text')])[6]").click();
    await page.waitForTimeout(500);
    //Click the Notes part to add fill task
    await page.locator('//div[@aria-label="Rich Text Editor"]').fill('Notes');
    await page.waitForTimeout(1500);
    //Click the save button
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    //Screenshot validation-Validation message is not indicated after enter records for progress in general tab and 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Customvalidation-08', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Double click the 1st child taskbar to edit
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(800);
    //click the Task name input
    await page.locator("input[name='TaskName']").click();
    await page.waitForTimeout(600);
    //Edit the Task name
    await page.locator("input[name='TaskName']").fill('');
    await page.waitForTimeout(600);
    //Press Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(600);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1200);
    //screenshot validation-Required field validation message is displayed for taskname
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    //click the Task name input
    await page.locator("input[name='TaskName']").click();
    await page.waitForTimeout(500);
    //Edit the Task name
    await page.locator("input[name='TaskName']").fill('ab');
    await page.waitForTimeout(500);
    //Press Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //screenshot validation-Min length validation message is displayed for taskname
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Task name input
    await page.locator("input[name='TaskName']").click();
    await page.waitForTimeout(500);
    //Edit the Task name
    await page.locator("input[name='TaskName']").fill('abcde');
    await page.waitForTimeout(500);
    //Press Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click progress input
    await page.locator("input[name='Progress']").click();
    await page.waitForTimeout(500);
    //Edit the progress with invalid value
    await page.locator("input[name='Progress']").fill('150');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1500);
    //Screenshot validation-Record is saved successfully after entering valid progress value
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Customvalidation-09', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Double click the 1st child taskbar to edit
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(800);
    //click the Task name input
    await page.locator("input[name='TaskName']").click();
    await page.waitForTimeout(200);
    //Edit the Task name
    await page.locator("input[name='TaskName']").fill('ab');
    await page.waitForTimeout(200);
    //Press Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //screenshot validation-Min length validation message is displayed for taskname
    expect.soft(await page.locator('.sf-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Customvalidation-10', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Double click the 1st child taskbar to edit
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(800);
    // Click the Task name input
    const taskName = page.locator("input[name='TaskName']");
    await taskName.click();
    await page.waitForTimeout(200);
    // Enter value that matches the regex ^[A-Z] (starts with uppercase)
    await taskName.fill('Task Name');
    await page.waitForTimeout(200);
    // Press Tab to trigger validation
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    // Assert: validation error shown for Task Name
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Customvalidation-11', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Double click the 1st child taskbar to edit
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").dblclick();
    await page.waitForTimeout(800);
    // Click the Task name input
    const taskName = page.locator("input[name='TaskName']");
    await taskName.click();
    await page.waitForTimeout(200);
    // Enter value that matches the regex ^[A-Z] (starts with uppercase)
    await taskName.fill('task name');
    await page.waitForTimeout(200);
    // Press Tab to trigger validation
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    // Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-rror displays as it is due to mismatch with regex ^[A-Z]
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Customvalidation-12', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the cell
    await page.locator('//td[@aria-label="Project initiation meeting Column Header Task Name"]').click();
    await page.waitForTimeout(500);
    // Open Edit dialog
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(200);
    // Make Task Name invalid
    await page.locator("input[name='TaskName']").fill('task name'); // invalid
    await page.waitForTimeout(500);
    // Close dialog
    await page.locator("(//button[text()='Cancel'])[1]").click();
    await page.waitForTimeout(500);
    // Reopen same record
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(500);
    // Screenshot after reopening-No error message is displayed 
    await expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Customvalidation-13', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the cell
    await page.locator('//td[@aria-label="Project initiation meeting Column Header Task Name"]').click();
    await page.waitForTimeout(500);
    //click the edit button
    await page.locator("(//span[text()='Edit'])[1]").click();
    await page.waitForTimeout(1000);
    //Edit the Task name
    await page.locator("input[name='TaskName']").fill('Lorem ipsum dolor sit amet consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore');
    await page.waitForTimeout(500);
    //Click the save button
    await page.locator("(//button[text()='Save'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Error message is dispayed after adding more than 50 characters in the Task name
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Budget validation Min and Max
test('14-Customvalidation-14', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[47]").click();
    await page.waitForTimeout(1000);
    //Click the cell budget min
    await page.locator("(//td[contains(@class,'e-rowcell')])[47]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type the min budget value
    await page.keyboard.type('5');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the cell 
    await page.mouse.click(559, 227);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for budget min value
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Customvalidation-15', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[47]").click();
    await page.waitForTimeout(1000);
    //Click the cell budget min
    await page.locator("(//td[contains(@class,'e-rowcell')])[47]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type the max budget value
    await page.keyboard.type('200000');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the cell 
    await page.mouse.click(559, 227);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for budget max value
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//start date cannot be changed for a completed task
test('16-Customvalidation-16', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[37]").click();
    await page.waitForTimeout(500);
    //Click the start date 
    await page.locator("(//td[contains(@class,'e-rowcell')])[37]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type the start date
    await page.keyboard.type('1/5/2025 8:00 AM');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the cell 
    await page.mouse.click(559, 227);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for start date 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Customvalidation-17', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[38]").click();
    await page.waitForTimeout(1000);
    //Click the end date 
    await page.locator("(//td[contains(@class,'e-rowcell')])[38]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type the En date
    await page.keyboard.type('1/9/2025 5:00 PM');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the cell 
    await page.mouse.click(559, 227);
    await page.waitForTimeout(1200);
    //Screenshot validation-Validation message is displayed for end  date 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//progress cannot be changed for a completed task
test('18-Customvalidation-18', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[40]").click();
    await page.waitForTimeout(500);
    //Click the progress
    await page.locator("(//td[contains(@class,'e-rowcell')])[40]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type the progress
    await page.keyboard.type('50');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the cell 
    await page.mouse.click(559, 227);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for progress 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Customvalidation-19', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").click();
    await page.waitForTimeout(500);
    //Click the owner email
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type it to be null 
    await page.keyboard.type('');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for owner mail when it is idicated to be Null
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Customvalidation-20', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[58]").click();
    await page.waitForTimeout(500);
    //Click the 
    await page.locator("(//td[contains(@class,'e-rowcell')])[58]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('1FS');
    await page.waitForTimeout(500);
    //
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for Dependency 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Customvalidation-21', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[43]").click();
    await page.waitForTimeout(500);
    //Click the Task Code
    await page.locator("(//td[contains(@class,'e-rowcell')])[43]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type 
    await page.keyboard.type('000-INI-RJI');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the cell 
    await page.mouse.click(559, 227);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for Task Code
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Customvalidation-22', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[44]").click();
    await page.waitForTimeout(500);
    //Click the Team Size
    await page.locator("(//td[contains(@class,'e-rowcell')])[44]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type record
    await page.keyboard.type('-1');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the cell 
    await page.mouse.click(559, 227);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for Team size is indicated as it should be greater than 1
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Customvalidation-23', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[44]").click();
    await page.waitForTimeout(500);
    //Click the Team Size
    await page.locator("(//td[contains(@class,'e-rowcell')])[44]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type it to be null 
    await page.keyboard.type('50');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the cell 
    await page.mouse.click(559, 227);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for Team size is too large for low maximum that is 6 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Customvalidation-24', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[43]").click();
    await page.waitForTimeout(500);
    //Click the Task Code
    await page.locator("(//td[contains(@class,'e-rowcell')])[43]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type it to be null 
    await page.keyboard.type('');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for Task Code when it is Null 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Customvalidation-25', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[45]").click();
    await page.waitForTimeout(500);
    //Click the Tags
    await page.locator("(//td[contains(@class,'e-rowcell')])[45]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type it to be null 
    await page.keyboard.type('stakeholders');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    await page.locator("(//td[contains(@class,'e-rowcell  e-leftalign')])[21]").click();
    await page.waitForTimeout(1500);
    //Screenshot validation-Validation message is displayed for Tags when remove the # 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Customvalidation-26', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[45]").click();
    await page.waitForTimeout(500);
    //Click the Conatct Phone
    await page.locator("(//td[contains(@class,'e-rowcell')])[45]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type 
    await page.keyboard.type('15553000101');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    await page.locator("(//td[contains(@class,'e-rowcell  e-leftalign')])[21]").click();
    await page.waitForTimeout(1500);
    //Screenshot validation-Validation message is displayed for Contact Phone when the contact is not valid 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Customvalidation-27', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the status
    await page.locator("(//td[contains(@class,'e-rowcell')])[49]").click();
    await page.waitForTimeout(500);
    //Click the status 
    await page.locator("(//td[contains(@class,'e-rowcell')])[49]").dblclick();
    await page.waitForTimeout(1000);
    //Click the dropdown icon
    await page.locator("(//span[contains(@class,'e-input')])[1]").click();
    await page.waitForTimeout(500);
    //Select the status
    await page.locator("(//li[text()='Testing'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed forstatus when select Testing
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Customvalidation-28', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the priority
    await page.locator("(//td[contains(@class,'e-rowcell')])[50]").click();
    await page.waitForTimeout(500);
    //Click the priority 
    await page.locator("(//td[contains(@class,'e-rowcell')])[50]").dblclick();
    await page.waitForTimeout(1000);
    //Click the dropdown icon
    await page.locator("(//span[contains(@class,'e-input')])[1]").click();
    await page.waitForTimeout(500);
    //Select the Priority
    await page.locator("(//li[text()='Critical'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for Priority after select Critical 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Customvalidation-29', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the priority
    await page.locator("(//td[contains(@class,'e-rowcell')])[50]").click();
    await page.waitForTimeout(500);
    //Click the priority 
    await page.locator("(//td[contains(@class,'e-rowcell')])[50]").dblclick();
    await page.waitForTimeout(1000);
    //Click the dropdown icon
    await page.locator("(//span[contains(@class,'e-input')])[1]").click();
    await page.waitForTimeout(500);
    //Select the Priority
    await page.locator("(//li[text()='Critical'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for Priority after select Critical 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for Priority after select Critical 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Customvalidation-30', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the status
    await page.locator("(//td[contains(@class,'e-rowcell')])[49]").click();
    await page.waitForTimeout(500);
    //Click the status 
    await page.locator("(//td[contains(@class,'e-rowcell')])[49]").dblclick();
    await page.waitForTimeout(1000);
    //Click the dropdown icon
    await page.locator("(//span[contains(@class,'e-input')])[1]").click();
    await page.waitForTimeout(500);
    //Select the status
    await page.locator("(//li[text()='Testing'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for status when select Testing
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for status after select Testing 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Customvalidation-31', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[37]").click();
    await page.waitForTimeout(500);
    //Click the start date 
    await page.locator("(//td[contains(@class,'e-rowcell')])[37]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type the start date
    await page.keyboard.type('1/5/2025 8:00 AM');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the cell 
    await page.mouse.click(559, 227);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for start date 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is not  displayed for start date 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Customvalidation-32', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[38]").click();
    await page.waitForTimeout(1000);
    //Click the end date 
    await page.locator("(//td[contains(@class,'e-rowcell')])[38]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type the En date
    await page.keyboard.type('1/9/2025 5:00 PM');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the cell 
    await page.mouse.click(559, 227);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for end  date 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is not displayed for End date 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//progress cannot be changed for a completed task
test('33-Customvalidation-33', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[40]").click();
    await page.waitForTimeout(500);
    //Click the progress
    await page.locator("(//td[contains(@class,'e-rowcell')])[40]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type the progress
    await page.keyboard.type('50');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the cell 
    await page.mouse.click(559, 227);
    await page.waitForTimeout(2000);
    //Screenshot validation-Validation message is displayed for progress 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is not  displayed for Progress
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Customvalidation-34', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").click();
    await page.waitForTimeout(500);
    //Click the owner email
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type it to be null 
    await page.keyboard.type('');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for owner mail when it is idicated to be Null
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is not  displayed for owner mail
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Customvalidation-35', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[58]").click();
    await page.waitForTimeout(500);
    //Click the 
    await page.locator("(//td[contains(@class,'e-rowcell')])[58]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type
    await page.keyboard.type('1FS');
    await page.waitForTimeout(500);
    //
    await page.locator("(//td[contains(@class,'e-rowcell')])[42]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for Dependency 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is not  displayed for Dependency
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Customvalidation-36', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[43]").click();
    await page.waitForTimeout(500);
    //Click the Task Code
    await page.locator("(//td[contains(@class,'e-rowcell')])[43]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type 
    await page.keyboard.type('000-INI-RJI');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the cell 
    await page.mouse.click(559, 227);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for Task Code
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is not  displayed for Task Code
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Customvalidation-37', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[44]").click();
    await page.waitForTimeout(500);
    //Click the Team Size
    await page.locator("(//td[contains(@class,'e-rowcell')])[44]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type record
    await page.keyboard.type('-1');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the cell 
    await page.mouse.click(559, 227);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for Team size is indicated as it should be greater than 1
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is not  displayed for Team Size
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Customvalidation-38', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[44]").click();
    await page.waitForTimeout(500);
    //Click the Team Size
    await page.locator("(//td[contains(@class,'e-rowcell')])[44]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type it to be null 
    await page.keyboard.type('50');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the cell 
    await page.mouse.click(559, 227);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for Team size is too large for low maximum that is 6 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is not  displayed for Team size
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Customvalidation-39', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[43]").click();
    await page.waitForTimeout(500);
    //Click the Task Code
    await page.locator("(//td[contains(@class,'e-rowcell')])[43]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type it to be null 
    await page.keyboard.type('');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for Task Code when it is Null 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is not  displayed for Task Code
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Customvalidation-40', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[45]").click();
    await page.waitForTimeout(500);
    //Click the Tags
    await page.locator("(//td[contains(@class,'e-rowcell')])[45]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type it to be null 
    await page.keyboard.type('stakeholders');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for Tags when remove the # 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is not  displayed for Tags
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Customvalidation-41', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[45]").click();
    await page.waitForTimeout(500);
    //Click the Conatct Phone
    await page.locator("(//td[contains(@class,'e-rowcell')])[45]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type 
    await page.keyboard.type('15553000101');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for Contact Phone when the contact is not valid 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is not  displayed for Contact Phone
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Budget validation Min and Max
test('42-Customvalidation-42', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[47]").click();
    await page.waitForTimeout(1000);
    //Click the cell budget min
    await page.locator("(//td[contains(@class,'e-rowcell')])[47]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type the min budget value
    await page.keyboard.type('5');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the cell 
    await page.mouse.click(559, 227);
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for budget min value
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is not  displayed for budget min
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-Customvalidation-43', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[47]").click();
    await page.waitForTimeout(1000);
    //Click the cell budget min
    await page.locator("(//td[contains(@class,'e-rowcell')])[47]").dblclick();
    await page.waitForTimeout(1000);
    //click the edit button
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    //Press Backspace to delete the existing text
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    //Type the max budget value
    await page.keyboard.type('200000');
    await page.waitForTimeout(500);
    //Press Enter to save the record
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    //Click the cell 
    await page.mouse.click(559, 227);
    await page.waitForTimeout(2000);
    //Screenshot validation-Validation message is displayed for budget max value
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //click the Cancel button
    await page.locator("(//span[text()='Cancel'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is not  displayed for max budget value
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('44-Customvalidation-44', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[38]").click();
    await page.waitForTimeout(1000);
    //Click the end date 
    await page.locator("(//td[contains(@class,'e-rowcell')])[38]").dblclick();
    await page.waitForTimeout(1000);
    //Click to select time 
    await page.locator("(//span[contains(@class,'e-input')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the time
    await page.locator("(//li[text()='5:30 PM'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for end  date after click the time 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('45-Customvalidation-45', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'column-validation?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'column-validation?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//td[contains(@class,'e-rowcell')])[37]").click();
    await page.waitForTimeout(1000);
    //Click the start date 
    await page.locator("(//td[contains(@class,'e-rowcell')])[37]").dblclick();
    await page.waitForTimeout(1000);
    //Click to select time 
    await page.locator("(//span[contains(@class,'e-input')])[3]").click();
    await page.waitForTimeout(500);
    //Enter the time
    await page.locator("(//li[text()='5:30 PM'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-Validation message is displayed for start  date after click the time 
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});