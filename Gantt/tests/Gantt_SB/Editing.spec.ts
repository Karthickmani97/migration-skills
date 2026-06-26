import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.use({
  launchOptions: {
    ignoreDefaultArgs: [], // Disable the scrollbar argument
  },
});

test('1-Editing initial load', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Add new task - toolbar add', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the add button on the toolbar
  await page.locator('(//span[contains(@class, "add")])[1]').click();
  await page.waitForTimeout(500);
  //Click to select the job name
  await page.locator('(//input[contains(@class, "control")])[2]').fill('Project 1');
  await page.waitForTimeout(500);
  //Click to select End date to enter
  await page.locator('(//input[contains(@class, "control")])[3]').fill('4/3/2025');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-New task is added.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Editing duration - toolbar edit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[12]').click();
  await page.waitForTimeout(200);
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[2]').click();
  await page.waitForTimeout(1000);
  await page.locator('(//input[contains(@class,"e-control")])[5]').click();
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(1000);
  await page.locator('(//input[contains(@class,"e-control")])[5]').fill('5 Days');
  await page.waitForTimeout(1000);
  //Save button click
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(3000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Editing dependency - taskbar double click', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  //Click to select child taskbar
  await page.locator('(//div[contains(@class,"child")])[11]').dblclick();
  await page.waitForTimeout(1000);
  //Click to select dependency
  await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
  await page.waitForTimeout(600);
  //Click the data record for the dependency, add
  await page.locator('(//span[contains(@class,"add")])[2]').click();
  await page.waitForTimeout(500);
  //Select the dropdown
  await page.locator('(//span[contains(@class,"e-input")])[9]').click();
  await page.waitForTimeout(500);
  //Select the dependency
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  await page.keyboard.press("Tab+Tab");
  await page.waitForTimeout(500);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(500);
  //Click save button
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(3000);
  //Screenshot validation-Data added on chart side dependency added should be shown.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Delete child record at grid side', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[16]').click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Delete parent record at chart side', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class,"e-gantt-parent-taskbar")])[1]').click()
  await page.waitForTimeout(1600);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(1600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Cancel delete action', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').click()
  await page.waitForTimeout(1300);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Cancel add dialog', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Delete dependency - toolbar edit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(2000);
  //Click the record.
  await page.locator('(//div[contains(@class,"e-gantt-child-progressbar-inner-div e-gantt-child-progressbar ")])[2]').click();
  await page.waitForTimeout(500);
  //Click Edit button
  await page.locator('(//span[contains(@class,"edit")])').click();
  await page.waitForTimeout(500);
  //Select dependecy
  await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
  await page.waitForTimeout(500);
  //Select the dependency record to delete
  await page.locator('(//td[text()="2-Site evaluation"])').click();
  await page.waitForTimeout(500);
  //Click the delete button
  await page.locator('(//span[contains(@class,"delete")])[2]').click();
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(3000);
  //Screenshot validation-On the chart side the dependency line is deleted.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Child taskname edit - toolbar update', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[9]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___TaskName').fill('child edit');
  await page.waitForTimeout(200);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Child taskname edit - toolbar cancel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[30]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___TaskName').fill('cancel edit');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Editing child taskname - keyboard enter', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[23]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___TaskName').fill('new ');
  await page.waitForTimeout(300);
  await page.locator('#DataItem___TaskName').press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Null value to child startdate', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[17]').dblclick();
  await page.waitForTimeout(300);
  const input = await page.locator('#DataItem___StartDate');
  await input.click();
  await input.press('Control+A');
  await input.press('Backspace');
  await page.waitForTimeout(600);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Null value to child enddate', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[25]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___EndDate').fill(' ');
  await page.waitForTimeout(200);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Null value to parent start date', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[3]').dblclick();
  await page.waitForTimeout(300);
  const input = await page.locator('#DataItem___StartDate');
  await input.click();
  await input.press('Control+A');
  await input.press('Backspace');
  await page.waitForTimeout(600);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Open delete confirmation at grid side', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  //Select the record
  await page.locator('(//td[contains(@class,"e-rowcell")])[16]').click();
  await page.waitForTimeout(500);
  //Delete button
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(500);
  //Press Escape on the keyboard,Esc
  await page.keyboard.press('Escape');
  await page.waitForTimeout(200);
  //Select the record
  await page.locator('(//td[contains(@class,"e-rowcell")])[16]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Open delete confirmation using toolbar', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  //Select the record
  await page.locator('(//td[contains(@class,"e-rowcell")])[16]').click();
  await page.waitForTimeout(500);
  //Delete button
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(500);
  //Press Escape on the keyboard
  await page.keyboard.press('Escape');
  await page.waitForTimeout(200);
  //Delete button 
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Indent child task and editing start date', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[16]').click();
  await page.waitForTimeout(200);
  await page.getByLabel('Indent').click();
  await page.waitForTimeout(1000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[17]').dblclick();
  await page.waitForTimeout(600);
  await page.locator('#DataItem___StartDate').fill('4/6/2025');
  await page.waitForTimeout(200);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Outdent parent task', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[44]').click();
  await page.waitForTimeout(300);
  await page.getByLabel('Outdent').click();
  await page.waitForTimeout(1300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Indent and outdent same child task', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[16]').click();
  await page.waitForTimeout(200);
  await page.getByLabel('Indent').click();
  await page.waitForTimeout(300);
  await page.getByLabel('Outdent').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Collapse all records', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Collapse all' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Expand all records', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Collapse all' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Expand all' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Collapse parent record using treegrid icon', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
  await page.waitForTimeout(1300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Delete child record and expand parent record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class,"e-rowcell")])[23]').click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(300);
  await page.locator('(//span[contains(@class,"e-icons e-treegridexpand")])[1]').click();
  await page.locator('(//span[contains(@class,"e-icons e-treegridcollapse")])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Insert record at chart side', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class,"e-left-label-container")])[2]').click();
  await page.waitForTimeout(300);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Insert record at treegrid side side', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class, "e-rowcell")])[2]').click();
  await page.waitForTimeout(300);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Editing dependency connector line through drag and drop.', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  const src = page.locator('(//div[contains(@class, "e-connectorpoint-left ")])[1]');
  const dst = page.locator('(//div[contains(@class, "e-connectorpoint-left ")])[6]');
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
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Negative scenarios 
//Invalid characters/Inputs 
test('28-Edit the start date with wrong date format', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  //Click on the start date 
  await page.locator('(//td[contains(@class,"e-rowcell")])[17]').dblclick();
  await page.waitForTimeout(2000);
  //Press the keyboard Control+A to select all 
  await page.keyboard.press('Control+A');
  //Press the keyboard Backspace to clear the data record
  await page.keyboard.press('Backspace');
  //Fill the start date
  await page.locator('#DataItem___StartDate').fill('2021/1/11');
  await page.waitForTimeout(3000);
  //Press Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Edit the start date with invalid characters', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(4000);
  //Click on the start date
  await page.locator('(//td[contains(@class,"e-rowcell")])[17]').dblclick();
  await page.waitForTimeout(2000);
  //Press the keyboard Control+A to select all 
  await page.keyboard.press('Control+A');
  //Press the keyboard Backspace to clear the data record
  await page.keyboard.press('Backspace');
  //Place invalid characters
  await page.locator('#DataItem___StartDate').fill('*&^%$#@');
  //Press Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Edit the End date with special characters', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(1000);
  //Click on the end date
  await page.locator('(//td[contains(@class,"e-rowcell")])[18]').dblclick();
  await page.waitForTimeout(500);
  //Place invalid characters
  await page.locator('#DataItem___EndDate').fill('*&^%$#@');
  await page.waitForTimeout(500);
  //Press Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Edit the End date with wrong date format', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(1000);
  //Click on the end date
  await page.locator('(//td[contains(@class,"e-rowcell")])[18]').dblclick();
  await page.waitForTimeout(200);
  //Place wrong date
  await page.locator('#DataItem___EndDate').fill('2021/4/15');
  //Press Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Edit negative progress value ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(1000);
  //Click on Progress
  await page.locator('(//td[contains(@class,"e-rowcell")])[20]').dblclick();
  await page.waitForTimeout(200);
  //Place negative value
  await page.locator('#DataItem___Progress').fill('-50');
  await page.waitForTimeout(200);
  //Press Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Edit Dependency with negative value ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(1000);
  //Click on Dependency
  await page.locator('(//td[contains(@class,"e-rowcell")])[21]').dblclick();
  await page.waitForTimeout(200);
  //Place negative value
  await page.locator('#DataItem___Predecessor').fill('-3FS');
  //Press Enter key on the keyboard
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Edit Dependency with invalid characters ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(1000);
  //Click on Dependency column
  await page.locator('(//td[contains(@class,"e-rowcell")])[21]').dblclick();
  await page.waitForTimeout(200);
  //Place invalid characters
  await page.locator('#DataItem___Predecessor').fill('2SFFS');
  await page.waitForTimeout(500);
  //Press Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Null to the Dependency ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(1000);
  //Click on Dependency
  await page.locator('(//td[contains(@class,"e-rowcell")])[21]').dblclick();
  await page.waitForTimeout(200);
  //Null value
  const input = await page.locator('#DataItem___Predecessor');
  await input.click();
  await input.press('Control+A');
  await input.press('Backspace');
  await page.waitForTimeout(600);
  //Press Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Add record with double click action', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(1000);
  //Add record through dialog
  await page.locator('(//span[contains(@class,"add")])').click();
  await page.waitForTimeout(800);
  //Click the save button
  await page.locator("(//button[text()='Save'])").dblclick();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/901703
test('37-Edit taskbar and double click', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(1000);
  //Open edit dialog
  await page.locator('(//div[contains(@class,"child")])[4]').dblclick();
  await page.waitForTimeout(1000);
  //Click the save button
  await page.locator("(//button[text()='Save'])").dblclick();
  await page.waitForTimeout(2000);
  //Screenshot validation-one record added and not two records are added.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-TC-90746: BLAZ-27785-Add/Edit Dialog Tab', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
  await page.waitForTimeout(2000);
  //Click the Add Button
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-TC-108701: 831809-Edit dialog close button alignment', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
  await page.waitForTimeout(2000);
  //Click the settings
  await page.getByLabel('toggle settings menu').click();
  await page.waitForTimeout(1000);
  //Click to switch to Touch Mode
  await page.getByRole('button', { name: 'Touch' }).click();
  await page.waitForTimeout(1000);
  //Click the record to edit
  await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
  await page.waitForTimeout(200);
  //Click the Edit button
  await page.locator('(//span[contains(@class,"edit")])').click();
  await page.waitForTimeout(200);
  //Click the Close
  await page.locator('(//button[contains(@class,"control")])[12]').hover();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/881819
test('40-Delete the dependency line and add new  milestone record ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
  await page.waitForTimeout(2000);
  //click the child taskbar to open dialog tab
  await page.locator('(//div[contains(@class,"child")])[7]').dblclick();
  await page.waitForTimeout(1000);
  //Click the dependency
  await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
  await page.waitForTimeout(200);
  //Click the dependency to delete
  await page.locator("(//td[text()='3-Obtain permits'])").click();
  await page.waitForTimeout(200);
  //Click the delete button
  await page.locator('(//span[contains(@class,"delete")])[2]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(500);
  //Click milestone to select it
  await page.locator('(//div[contains(@class,"milestone")])[1]').dblclick();
  await page.waitForTimeout(1000);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(3000);
  //Screenshot validation-the dependency lines on the shown the taskbars for the saved milestone record
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/881819
test('41-Add the dependency data record and add new task', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
  await page.waitForTimeout(1000);
  //click the parent taskbar to open dialog tab
  await page.locator('(//div[contains(@class,"parent")])[5]').dblclick();
  await page.waitForTimeout(1000);
  //Click the dependency
  await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
  await page.waitForTimeout(200);
  //Click the dependency to add record, click add button
  await page.locator('(//span[contains(@class,"add")])[2]').click();
  await page.waitForTimeout(200);
  //Click the dropdown 
  await page.locator('(//span[contains(@class,"e-input")])[9]').click();
  await page.waitForTimeout(500);
  //Click to select new dependency
  await page.keyboard.press("ArrowDown")
  await page.waitForTimeout(200);
  await page.keyboard.press("Tab+Tab");
  await page.waitForTimeout(500);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(200);
  //Click Add button
  await page.locator('(//span[contains(@class,"add")])[1]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(1500);
  //Screenshot validation-New task added should be visible on the chart side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('42-Delete child record and Collapseall records ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
  await page.waitForTimeout(2000);
  //Click the parent record to delete
  await page.locator("(//span[text()='Planning and permits'])[1]").click();
  await page.waitForTimeout(200);
  //Click the delete button
  await page.locator('(//span[contains(@class,"delete")])[1]').click();
  await page.waitForTimeout(200);
  //Click the ok button
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(200);
  //Click collapse all button
  await page.locator('(//span[contains(@class,"collapseall")])[1]').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Records are in collapseall state and parent record deleted 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903061/
test('43-BUG-903061-Console error thrown when press Delete key ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
  await page.waitForTimeout(2000);
  //click the child 8 rd record
  await page.locator('(//div[contains(@class,"gantt-child")])[9]').dblclick();
  await page.waitForTimeout(1000);
  //Click the dependency
  await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
  await page.waitForTimeout(500);
  //Click the Add button
  await page.locator('(//span[contains(@class,"e-add")])[2]').click();
  await page.waitForTimeout(500);
  //select from the dropdown
  await page.locator('(//span[contains(@class,"e-input")])[9]').click();
  await page.waitForTimeout(500);
  //select the dependency
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(500);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(200);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(200);
  await page.keyboard.press("Tab");
  await page.waitForTimeout(200);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(500);
  //Click the 8 rd child record
  await page.locator("(//div[contains(@class,'gantt-child')])[9]").click();
  await page.waitForTimeout(500);
  //Click delete button
  await page.keyboard.press('Delete');
  await page.waitForTimeout(500);
  //Click the ok button
  await page.locator("(//button[text()='OK'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Record is updated on both the grid and chart side after delete 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/914046
test('44-BUG-914046-Duration date is not updated', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
  await page.waitForTimeout(2000);
  //click Add button
  await page.locator('(//span[contains(@class,"e-add e-icons e-btn-icon e-icon-left")])[1]').click();
  await page.waitForTimeout(500);
  //Click the duration to fill
  await page.locator('#Duration').fill('11 days');
  await page.waitForTimeout(200);
  //CPress the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  //Hover over the taskbar
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').click();
  await page.waitForTimeout(3000);
  //Screenshot validation-The duration is updated properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/901569
test('45-Add new record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent');
  await page.waitForTimeout(2000);
  //Add record through dialog
  await page.locator('(//span[contains(@class,"add")])').click();
  await page.waitForTimeout(800);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-No selection issue on the grid and chart side od added record
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/939148
test('46-Add the dependency data', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
  await page.waitForTimeout(1000);
  //Click the Add button
  await page.locator('(//span[contains(@class,"add")])').click();
  await page.waitForTimeout(500);
  //Click the dependency
  await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
  await page.waitForTimeout(500);
  //Click the dependency to add record, click add button
  await page.locator('(//span[contains(@class,"add")])[2]').click();
  await page.waitForTimeout(500);
  //Click the dropdown 
  await page.locator('(//span[contains(@class,"e-input")])[9]').click();
  await page.waitForTimeout(500);
  //Click to select new dependency
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown")
  await page.keyboard.press("Tab");
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-New dependency record added.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/915560
test('47-The duration value gets updated wrong', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
  await page.waitForTimeout(2000);
  //Double click the record
  await page.locator('(//td[contains(@class,"rowcell")])[12]').dblclick();
  await page.waitForTimeout(500);
  //Click the duration to fill
  await page.locator('#DataItem___Duration').fill('3 4 days');
  await page.waitForTimeout(500);
  //CPress the Enter button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  //Screenshot validation-The duration is updated properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/923237
test('48-Taskbar tooltip is not showing ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
  await page.waitForTimeout(2000);
  //Click the the record
  await page.locator('(//div[contains(@class,"e-left-label-container")])[6]').click();
  await page.waitForTimeout(500);
  //Hover over the taskbar
  await page.locator('(//div[contains(@class,"gantt-child")])[3]').hover();
  await page.waitForTimeout(2000);
  //Screenshot validation-
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/924191
test('49-924191-Console error delete multilevel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click the the record to delete
  await page.locator("(//td[contains(@class,'rowcell')])[8]").click();
  await page.waitForTimeout(800);
  //Hovver on the chart side
  await page.locator("(//tr[contains(@class,'e-chart-row')])[2]").hover({ force: true });
  await page.waitForTimeout(2000);
  //Screenshot validation-The chart side is blurred proper in tailwind theme
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/924797
test('50-924797-Selection issue', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click the rcord to delete
  await page.locator('(//td[contains(@class,"e-rowcell")])[16]').click();
  await page.waitForTimeout(500);
  //Delete button
  await page.locator('(//span[contains(@class,"e-delete")])[1]').click();
  await page.waitForTimeout(800);
  //Click the Ok button
  await page.locator("(//button[text()='OK'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-There is no selection issue after delete record on the grid side.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/925329
test('51-925329-Toolbar update issue', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Double click the record for progress column
  await page.locator('(//td[contains(@class,"e-rowcell")])[13]').dblclick();
  await page.waitForTimeout(1000);
  //Enter the value 
  await page.locator('#DataItem___Progress').fill('3456');
  await page.waitForTimeout(500);
  //Click the Ok button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  //Screenshot validation-There record is reverted to it original state after the invalid value is entered.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/925597
test('52-925597-Cell selection issue for Progress', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Double click the taskname to cell edit it
  await page.locator('(//td[contains(@class,"e-rowcell")])[9]').dblclick();
  await page.waitForTimeout(1000);
  //Press the Tab key to move to start date
  await page.keyboard.press('Tab');
  await page.waitForTimeout(800);
  //Press the Tab key to move to end date
  await page.keyboard.press('Tab');
  await page.waitForTimeout(800);
  //Press the Tab key to move to duration
  await page.keyboard.press('Tab');
  await page.waitForTimeout(800);
  //Press the Tab key to move to progress
  await page.keyboard.press('Tab');
  await page.waitForTimeout(800);
  //Press the Tab key to move to dependency
  await page.keyboard.press('Tab');
  await page.waitForTimeout(2000);
  //Screenshot validation-The progress cell is selected
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/926071
test('53-926071-Taskbar resizer icon not visible in touch mode', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=tailwind3');
  test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=tailwind3' });
  await page.waitForTimeout(2000);
  //Click the settings
  await page.getByLabel('toggle settings menu').click();
  await page.waitForTimeout(1500);
  //Click to switch to Touch Mode
  await page.getByRole('button', { name: 'Touch' }).click();
  await page.waitForTimeout(1500);
  //Hover over the child taskbar on chart side 
  await page.locator('(//div[contains(@class,"gantt-child")])[3]').hover({ force: true });
  await page.waitForTimeout(2000);
  //Screenshot validation-Taskbar resizers are visible
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/926349/
test('54-926349-Horizontal scrollbar issue  ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=tailwind3');
  test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=tailwind3' });
  await page.waitForTimeout(2000);
  //Click the settings
  await page.getByLabel('toggle settings menu').click();
  await page.waitForTimeout(500);
  //Click to switch to Touch Mode
  await page.getByRole('button', { name: 'Touch' }).click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The horizontal scrollbar for all samples loads properly, in touch mode
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/946836
test('55-946836-Grid Lines Removed', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click the 3rd task
  await page.locator('(//td[contains(@class,"e-rowcell")])[16]').click();
  await page.waitForTimeout(500);
  //Click the indent button
  await page.locator("(//span[text()='Indent'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Grid lines on chart side are maintained after indent record
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/946720
test('56-946720-Child Task Duration Not Updated', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click the settings
  await page.locator('(//span[contains(@class,"sb-icon-settings-preferences")])[1]').click();
  await page.waitForTimeout(1000);
  //Click the localization dropdown
  await page.locator("(//input[contains(@aria-label,'Culture Switcher')])[2]").click();
  await page.waitForTimeout(500);
  //Select Locale German-Germany
  await page.locator("(//span[text()='French - Switzerland*'])[1]").click();
  await page.waitForTimeout(1800);
  //Double click the record
  await page.locator('(//td[contains(@class,"rowcell")])[19]').dblclick();
  await page.waitForTimeout(1500);
  //Click the duration to fill
  await page.locator('#DataItem___Duration').fill('4 days');
  await page.waitForTimeout(1000);
  //CPress the Enter button
  await page.locator("(//span[text()='Mise à jour'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The locale is changed to German-Germany and has no issues
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/944920
test('57-944920-Collapse All Action Not Working ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click 1st cell 
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
  await page.waitForTimeout(500);
  for (let i = 0; i < 9; i++) {
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
  }
  //Click the indent button
  await page.locator("(//span[text()='Collapse all'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Collapse working fine
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/944919
test('58-944919-Console Error Thrown ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Double click the 2 nd child taskbarto open dialog tab
  await page.locator('(//div[contains(@class,"e-gantt-child")])[3]').dblclick();
  await page.waitForTimeout(2500);
  //Screenshot validation-The dialog tab is opened after double click the second child taskbar and there are no delays and no console error thrown
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/944976
test('59-944976-Tooltip Not Rendering', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click the Add button
  await page.locator("(//span[contains(@class,'e-tbar-btn-text')])[1]").click();
  await page.waitForTimeout(500);
  //Select the start date to enter the record
  await page.locator("(//input[contains(@class,'control')])[3]").click();
  await page.waitForTimeout(200);
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.keyboard.type('4/2/2025');
  //Click the save button
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  //Screenshot validation-The connector lines the tooltip is rendering properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/945059
test('60-944919-Lag Day Not Calculated', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'editing?theme=fluent2' });
  await page.waitForTimeout(2000);
  // Select the task connector lines 2nfd and 7 th 
  const src = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[2]");
  const dst = page.locator("(//div[contains(@class,'e-connectorpoint-right ')])[7]");
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
  //Select to check the tooltip for the connector the lag
  // await page.mouse.move(1423,466 );
  await page.waitForTimeout(2000);
  //Screenshot validation-Lag day is calculated properly 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1005276
test('61-1005276', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'editing?theme=fluent2');
  await page.waitForTimeout(2000);
  await page.locator('(//span[text()="Obtain permits"])[1]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___TaskName').waitFor();
  await page.locator('#DataItem___TaskName').click();
  await page.mouse.move(
    (await page.locator('#DataItem___TaskName').boundingBox())!.x + 5,
    (await page.locator('#DataItem___TaskName').boundingBox())!.y + (await page.locator('#DataItem___TaskName').boundingBox())!.height / 2
  );
  await page.mouse.down();
  await page.mouse.move(
    (await page.locator('#DataItem___TaskName').boundingBox())!.x + (await page.locator('#DataItem___TaskName').boundingBox())!.width - 5,
    (await page.locator('#DataItem___TaskName').boundingBox())!.y + (await page.locator('#DataItem___TaskName').boundingBox())!.height / 2,
    { steps: 12 }
  );
  await page.mouse.up();
  await page.waitForTimeout(2000);
  //Screenshot validation
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1009797
test('62-Case1-1009797', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
  await page.waitForTimeout(3000);
  //Step 1:Click the End Date of milestone
  await page.locator('(//td[text()="4/10/2025"])[5]').click();
  await page.waitForTimeout(800);
  //Step 2: Enter cell edit mode on the EndDate column by double-clicking
  await page.locator('(//td[text()="4/10/2025"])[5]').dblclick();
  await page.waitForTimeout(1000);
  //Step 3: Open and close the edit state using Enter key
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);
  //Step 4: Take screenshot to validate the behavior after closing edit state
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1009797
test('62-Case2-1009797', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
  await page.waitForTimeout(3000);
  //Step 1: Select a milestone task
  await page.locator('(//td[text()="4/10/2025"])[5]').click();
  await page.waitForTimeout(500);
  //Step 2: Enter cell edit mode on the EndDate column
  await page.locator('(//td[text()="4/10/2025"])[5]').dblclick();
  await page.waitForTimeout(800);
  //Step 3: Close edit state by clicking outside (clicking on another cell)
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
  await page.waitForTimeout(1000);
  //Step 4: Screenshot validation
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1009797
test('62-Case3-1009797', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'editing?theme=bootstrap5');
  await page.waitForTimeout(3000);
  //Step 1: Select a milestone task
  await page.locator('(//td[text()="4/10/2025"])[5]').click();
  await page.waitForTimeout(500);
  //Step 2: Enter cell edit mode on the EndDate column
  await page.locator('(//td[text()="4/10/2025"])[5]').dblclick();
  await page.waitForTimeout(500);
  //Step 3: Close edit state with Enter
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  //Step 4: Reopen edit mode on the same EndDate cell
  await page.locator('(//td[contains(@class,"e-rowcell")])[4]').dblclick();
  await page.waitForTimeout(500);
  //Step 5: Close edit state by clicking outside
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
  await page.waitForTimeout(1000);
  //Step 6: Screenshot validation
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

