import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Resource view initial load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[3]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Add resources for unassinged parent resource', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(2000);
  //Clic the Add button
  await page.locator("(//span[contains(@class,'add')])").click();
  await page.waitForTimeout(500);
  //Click to edit the taskname
  await page.locator("(//input[contains(@id, 'TaskName')])[1]").click({ clickCount: 3 })
  await page.locator("(//input[contains(@id, 'TaskName')])[1]").fill('Resource task1');
  await page.waitForTimeout(500);
  //Click to Edit the start date
  await page.locator("(//input[contains(@id, 'StartDate')])[1]").click({ clickCount: 3 });
  await page.locator("(//input[contains(@id, 'StartDate')])[1]").fill('4/2/2022');
  await page.waitForTimeout(500);
  //Click to Edit the End date
  await page.locator("(//input[contains(@id, 'EndDate')])[1]").click({ clickCount: 3 });
  await page.locator("(//input[contains(@id, 'EndDate')])[1]").fill('4/12/2022');
  await page.waitForTimeout(500);
  //Click to Edit the Progress
  await page.locator("(//input[contains(@id, 'Progress')])[1]").click({ clickCount: 3 });
  await page.locator("(//input[contains(@id, 'Progress')])[1]").fill('24');
  await page.waitForTimeout(1500);
  //Click to select Resources to open its dialog tab
  await page.locator('(//div[contains(@class,"e-toolbar-item e-template e-ileft")])[3]').click();
  await page.waitForTimeout(1000);
  //Select the resource
  await page.locator('(//span[contains(@class, "uncheck")])[2]').click();
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-New task is added and visible on grid and chart side.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Add new resources for assigned parent resource', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(2000);
  //Click the 1 st parent record
  await page.locator("(//span[text()='Martin Tamer'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Add button
  await page.locator("(//span[contains(@class,'add')])").click();
  await page.waitForTimeout(500);
  //Click to edit the duration
  await page.locator("(//input[contains(@class,'control')])[5]").click({ clickCount: 3 })
  await page.locator("(//input[contains(@class,'control')])[5]").fill('3 days');
  await page.waitForTimeout(500);
  //Select resources to open dialog tab
  await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
  await page.waitForTimeout(500);
  //Select the resource
  await page.locator('(//span[contains(@class, "e-uncheck")])[1]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Parent record has resource assigned to it on taskbar on chart side of the component
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Add unassigned task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(2000);
  //Clic the Add button
  await page.locator("(//span[contains(@class,'add')])").click();
  await page.waitForTimeout(500);
  //Click to Edit the start date
  await page.locator("(//input[contains(@id, 'StartDate')])[1]").click({ clickCount: 3 });
  await page.locator("(//input[contains(@id, 'StartDate')])[1]").fill('4/2/2022');
  await page.waitForTimeout(500);
  //Click to Edit the End date
  await page.locator("(//input[contains(@id, 'EndDate')])[1]").click({ clickCount: 3 });
  await page.locator("(//input[contains(@id, 'EndDate')])[1]").fill('4/8/2022');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Unassigned task has been added below it.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Edit resources for unassigned task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(2000);
  //Double click the taskbar on chart side
  await page.locator("(//div[contains(@class,'child')])[1]").dblclick();
  await page.waitForTimeout(1000);
  //Click the resources to open its dialog tab
  await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
  await page.waitForTimeout(600);
  //Select resources
  await page.locator('(//span[contains(@class, "e-uncheck")])[4]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Unassigned task resource has been added for it.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Remove task from parent resource', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(2000);
  //Click the child task
  await page.locator("(//span[text()='Perform soil test'])[1]").click();
  await page.waitForTimeout(500);
  //Click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click Resources to open dialog tab
  await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
  await page.waitForTimeout(500);
  //Select resource
  await page.locator('(//span[contains(@class, "e-check")])[1]').click();
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(500);
  //Click the record to delete
  await page.locator("(//span[text()='Identify Site location'])[1]").click();
  await page.waitForTimeout(500);
  //Click the delete button on toolbar
  await page.locator("(//span[contains(@class,'delete')])").click();
  await page.waitForTimeout(500);
  //Click the collapseall button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(500);
  //Click the record
  await page.locator("(//span[text()='Rose Fuller'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Resources removed from the child taskbar record. 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Collapse all and add unassigned task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(1000);
  await page.getByLabel('Collapse all').click();
  await page.waitForTimeout(200);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(600);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Collapse all and add reosurce task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(1000);
  //Click the collapseall button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(500);
  //Clic the Add button
  await page.locator("(//span[contains(@class,'add')])").click();
  await page.waitForTimeout(500);
  //Click to edit the duration
  await page.locator("(//input[contains(@class,'control')])[5]").fill('3 days');
  await page.waitForTimeout(500);
  //Click the resources 
  await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
  await page.waitForTimeout(500);
  //Click to select resources
  await page.locator('(//span[contains(@class, "e-uncheck")])[2]').click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Records are in collapse state
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test.fixme('9-Delte record from parent resource and unassigned task', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Resource-task');
//   await page.waitForTimeout(1000);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
//   await page.getByLabel('Delete').click();
//   await page.waitForTimeout(100);
//   await page.getByLabel('Collapse all').click();
//   await page.waitForTimeout(200);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[6]/td[3]/div/span[1]').click();
//   await page.waitForTimeout(200);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[7]/td[3]').click();
//   await page.getByLabel('Delete').click();
//   await page.waitForTimeout(200);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[7]/td[3]').click();
//   await page.getByLabel('Delete').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('10-Update work value through cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[9]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___Work').fill('43');
  await page.getByLabel('Update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Update startdate column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[4]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___StartDate').click();
  await page.locator('#DataItem___StartDate').fill('4/5/2022');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Cancel edit action', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="DataItem___TaskName"]').fill('Edited');
  await page.getByLabel('Cancel').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Cancel edit action using ESC key', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('//*[@id="DataItem___TaskName"]').fill('Child task');
  await page.waitForTimeout(200);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Drag taskbar', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[5]/td/div[2]/div[2]/div').click();
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(510, 206);
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Parent taskbar tooltip', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[1]/td/div[2]/div[2]/div').click();
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('16-Edit dependency', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Resource-task');
//   await page.waitForTimeout(1000);
//   await page.getByLabel('Right task label Martin Tamer [40%]').nth(2).click();
//   await page.getByLabel('Edit').click();
//   await page.waitForTimeout(1000);
//   await page.locator('(//div[contains(@class, "e-tab-text")])[2]').click();
//   await page.waitForTimeout(600);
//   await page.getByLabel('Dependency', { exact: true }).getByLabel('Add').click();
//   await page.waitForTimeout(200);
//   await page.locator('form').getByRole('cell', { name: '' }).locator('span').nth(2).click();
//   await page.waitForTimeout(100);
//   await page.getByRole('option', { name: '4-Perform soil test' }).click();
//   await page.waitForTimeout(100);
//   await page.locator('#Offset').dblclick();
//   await page.locator('#Offset').fill('3 days');
//   await page.waitForTimeout(100);
//   await page.locator('div:nth-child(4) > .e-content').click();
//   await page.waitForTimeout(1000);
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForTimeout(1500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('17-Child taskbar dragging', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Gantt_chartContentBody"]/tr[2]/td/div[2]/div[3]/div').click();
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(200);
  await page.mouse.move(612, 174);
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Insert record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
  await page.keyboard.press('Insert');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Delete task using delete key', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[6]/td[3]').click();
  await page.waitForTimeout(100);
  await page.keyboard.press('Delete');
  await page.waitForTimeout(300);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[7]/td[3]').click();
  await page.waitForTimeout(100);
  await page.keyboard.press('Delete');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Drag and drop one child to another parent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-task');
  await page.waitForTimeout(1000);
  const src = page.locator("(//td[contains(@class,'e-rowdragdrop')])[3]");
  const dst = page.locator("(//td[contains(@class,'e-rowdragdrop')])[4]");
  if (src && dst) {
    const src_bound = await src.boundingBox();
    const dst_bound = await dst.boundingBox();
    if (src_bound && dst_bound) {
      await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
      await page.mouse.down();
      await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
      await page.waitForTimeout(1000);
      await page.mouse.up();
      await page.waitForTimeout(2000);
    }
  }
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('21-Resource overallocation', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Resource-OverAllocation');
//   await page.waitForTimeout(1000);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('22-Add new task - overallocation', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Resource-OverAllocation');
//   await page.waitForTimeout(2000);
//   //Click the Add button
//   await page.locator("(//span[contains(@class,'add')])").click();
//   await page.waitForTimeout(500);
//   //Click to Edit duration
//   await page.locator("(//input[contains(@class,'control')])[5]").fill('5 days');
//   await page.waitForTimeout(500);
//   //Click the save button
//   await page.locator("(//button[text()='Save'])").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-Added new task
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('23-Insert unassigned task', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Resource-OverAllocation');
//   await page.waitForTimeout(1000);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[3]').click();
//   await page.keyboard.press('Insert');
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('24-Delete child tasks - overallocation', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Resource-OverAllocation');
//   await page.waitForTimeout(1000);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[3]').click();
//   await page.getByLabel('Delete').click();
//   await page.waitForTimeout(200);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[5]/td[3]').click();
//   await page.getByLabel('Delete').click();
//   await page.waitForTimeout(200);
//   await page.getByLabel('Collapse all').click();
//   await page.waitForTimeout(200);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[6]/td[3]/div/span[1]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('25-Add new record with resources', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Resource-OverAllocation');
//   await page.waitForTimeout(2000);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[3]').click();
//   await page.waitForTimeout(500);
//   //Clic the Add button
//   await page.locator("(//span[contains(@class,'add')])").click();
//   await page.waitForTimeout(500);
//   //Click to edit the duration
//   await page.locator("(//input[contains(@class,'control')])[5]").fill('6 days');
//   await page.waitForTimeout(500);
//   //Click resources to open dialog tab
//   await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
//   await page.waitForTimeout(500);
//   //Select the resource
//   await page.locator('(//span[contains(@class, "e-uncheck")])[1]').click();
//   await page.waitForTimeout(500);
//   //Click the save button
//   await page.locator("(//button[text()='Save'])").click();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-New record is added with resources and visible.
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


// test('26-Edit resources - overallocation', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Resource-OverAllocation');
//   await page.waitForTimeout(2000);
//   //Double click the taskbar to open dialog tab
//   await page.locator('(//div[contains(@class, "child")])[4]').dblclick();
//   await page.waitForTimeout(1000);
//   //Click Resources to open its dialog
//   await page.locator('(//div[contains(@class, "e-tab-text")])[3]').click();
//   await page.waitForTimeout(500);
//   //Select Resource
//   await page.locator('(//span[contains(@class, "e-uncheck")])[4]').click();
//   await page.waitForTimeout(500);
//   //Click the save button
//   await page.locator("(//button[text()='Save'])").click();
//   await page.waitForTimeout(500);
//   //Click the taskbar ,child 
//   await page.locator('(//div[contains(@class, "child")])[8]').click();
//   await page.waitForTimeout(300);
//   //Click the mouse to drag it 
//   await page.mouse.down();
//   await page.waitForTimeout(200);
//   await page.mouse.move(613, 357);
//   await page.waitForTimeout(500);
//   await page.mouse.up();
//   await page.waitForTimeout(2000);
//   //Screenshot validation-The taskbar selected is drag and dropped 
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('27-Edit duration for overallocation task', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Resource-OverAllocation');
//   await page.waitForTimeout(1000);
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[6]').dblclick();
//   await page.waitForTimeout(500);
//   await page.locator('#DataItem___Duration').click();
//   await page.waitForTimeout(500);
//   await page.locator('#DataItem___Duration').fill('2 days');
//   await page.waitForTimeout(500);
//   await page.getByLabel('Update').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('28-Add new task ,Expand all records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-overallocation-UG');
  await page.waitForTimeout(2000);
  //click collapse all button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(500);
  //Click the Add button on the toolbar
  await page.locator("(//span[contains(@class,'add')])").click();
  await page.waitForTimeout(500);
  //Select resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Click to select the checkbox for the resources
  await page.locator("(//span[contains(@class,'check')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //click expand all button on the toolbar
  await page.locator("(//span[contains(@class,'expandall')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-New task and resources added is shown on both grid and chart side.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Edit the Work through cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-overallocation-UG');
  await page.waitForTimeout(2000);
  //Double click the Work for 2nd child record
  await page.locator("(//td[contains(@class,'rowcell')])[12]").dblclick();
  await page.waitForTimeout(1000);
  //Press the Backspace key on the keyboard to remove the values
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(500);
  //Press the Enter key on the keyboard
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  //Click the child record to open dialog tab
  await page.locator("(//span[text()='Identify site location'])[1]").click();
  await page.waitForTimeout(500);
  //Click the edit button
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Select resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Click the filter button ,under name
  await page.locator("(//div[contains(@class,'filtermenudiv')])[2]").click();
  await page.waitForTimeout(500);
  //Enter the filter ,starts with 
  await page.locator("(//input[contains(@class,'control')])[9]").fill('Davolio');
  await page.waitForTimeout(500);
  //Click the Filter button
  await page.locator("(//button[text()='Filter'])[1]").click();
  await page.waitForTimeout(500);
  //Click to select the resource filtered
  await page.locator("(//span[contains(@class,'uncheck')])[1]").click();
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(300);
  //Screenshot validation-Filtered resource is visible on child taskbar on the chart side
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Delete the child records for 1st parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-overallocation-UG');
  await page.waitForTimeout(2000);
  //Click the 1st child record 
  await page.locator("(//span[text()='Identify site location'])[1]").click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator("(//span[contains(@class,'delete')])").click();
  await page.waitForTimeout(500);
  //Click the 2nd child record 
  await page.locator("(//span[text()='Perform soil test'])[1]").click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator("(//span[contains(@class,'delete')])").click();
  await page.waitForTimeout(500);
  //Click the add button on the toolbar
  await page.locator("(//span[contains(@class,'add')])").click();
  await page.waitForTimeout(500);
  //Click the Name to edit
  await page.locator("(//input[contains(@class,'control')])[2]").fill('New Task');
  await page.waitForTimeout(500);
  //Click to edit the duration
  await page.locator("(//input[contains(@class,'control')])[4]").fill('4 Days');
  await page.waitForTimeout(500);
  //Select resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Click to select the resource
  await page.locator("(//span[contains(@class,'uncheck')])[3]").click();
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click the New task
  await page.locator("(//span[text()='New Task'])[1]").click();
  await page.waitForTimeout(1200);
  //Screenshot validation-Added task is visible and resource allocation is on taskbar on chart side of the component.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Collapse all the records,Expand last parent record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Resource-overallocation-UG');
  await page.waitForTimeout(2000);
  //Click collapse all records on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(500);
  //Click the icon for the last parent record to expand it
  await page.locator("(//span[contains(@class,'treegridcollapse')])[5]").click();
  await page.waitForTimeout(500);
  //Click the Add button on the toolbar to open the dialog tab
  await page.locator("(//span[contains(@class,'add')])").click();
  await page.waitForTimeout(500);
  //Click the Name to edit
  await page.locator("(//input[contains(@class,'control')])[2]").fill('New');
  await page.waitForTimeout(500);
  //Click to edit the duration
  await page.locator("(//input[contains(@class,'control')])[4]").fill('4 Days');
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(1500);
  //Click the icon of Unassigned Task record to expand it
  await page.locator("(//span[contains(@class,'treegridcollapse')])[5]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The unassigned task record is in expanded state.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Edit the child taskbar of unassigned task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Unassigned-task');
  await page.waitForTimeout(2000);
  //Double click the last child taskbar on chart side of component
  await page.locator("(//div[contains(@class,'child')])[19]").dblclick();
  await page.waitForTimeout(1000);
  //Click the Name to edit
  await page.locator("(//input[contains(@class,'control')])[2]").fill('Contact');
  await page.waitForTimeout(500);
  //Click to edit the Duration
  await page.locator("(//input[contains(@class,'control')])[4]").fill('4 Days');
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Edited record is displayed on the grid and chart side of the component.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Delete unassigned task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Unassigned-task');
  await page.waitForTimeout(2000);
  //Click the last child taskbar on chart side of component
  await page.locator("(//span[text()='Sign contract'])[1]").click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator("(//span[contains(@class,'delete')])").click();
  await page.waitForTimeout(500);
  //Click Ok button to delete the records
  await page.locator("(//button[text()='OK'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Add button on the toolbar
  await page.locator("(//span[contains(@class,'add')])").click();
  await page.waitForTimeout(500);
  //Click the task type to show the dropdown
  await page.locator("(//span[contains(@class,'input')])[5]").click();
  await page.waitForTimeout(500);
  //Select the task type
  await page.locator("(//li[text()='FixedUnit'])").click();
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The unassigned task is deleted and new assigned task added.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Select unassigned task to Edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Unassigned-task');
  await page.waitForTimeout(2000);
  //Click the collapseall button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(500);
  //Click the expandall button on the toolbar
  await page.locator("(//span[contains(@class,'expandall')])").click();
  await page.waitForTimeout(500);
  //Click the child record to edit
  await page.locator("(//span[text()='Develop floor plan for estimation'])[1]").click();
  await page.waitForTimeout(500);
  //Click the edit button on the toolbar to open the dialog tab
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click the task type to show the dropdown
  await page.locator("(//span[contains(@class,'input')])[5]").click();
  await page.waitForTimeout(500);
  //Select the task type,FixedDuration
  await page.locator("(//li[text()='FixedDuration'])").click();
  await page.waitForTimeout(500);
  //Click the Cancel button
  await page.locator("(//button[text()='Cancel'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The unassigned task is reverted to its default records
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Edit the unassigned tasks', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Unassigned-task');
  await page.waitForTimeout(2000);
  //Double click the child taskbar on chart side
  await page.locator("(//div[contains(@class,'child')])[10]").dblclick();
  await page.waitForTimeout(1000);
  //Click Work for increment
  await page.locator("(//span[contains(@class,'input')])[4]").click();
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click to select the edited unassigned taskbar
  await page.locator("(//span[text()='Develop floor plan for estimation'])").click();
  await page.waitForTimeout(500);
  //Click the delete button on the toolbar
  await page.locator("(//span[contains(@class,'delete')])").click();
  await page.waitForTimeout(500);
  //Click Ok button to delete the records
  await page.locator("(//button[text()='OK'])[1]").click();
  await page.waitForTimeout(500);
  //Click the collapseall button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The unassigned task is reverted to its default records
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Edit the child taskbar and expand all the records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/multi-taskbar');
  await page.waitForTimeout(2000);
  //Double click the child taskbar on chart side ,dialog tabis opened
  await page.locator("(//div[contains(@class,'child')])[1]").dblclick();
  await page.waitForTimeout(1000);
  //Click to edit the Duration
  await page.locator("(//input[contains(@class,'control')])[4]").fill('8 Days');
  await page.waitForTimeout(500);
  //Click the start date to edit
  await page.locator("(//input[contains(@class,'control')])[6]").fill('03/30/19');
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click the expandall button on the toolbar
  await page.locator("(//span[contains(@class,'expandall')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The edited taskbar is visible on the chart side and all records are in expanded state.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Add new task under unassigned task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/multi-taskbar');
  await page.waitForTimeout(2000);
  //Click the expand all button on the toolbar
  await page.locator("(//span[contains(@class,'expandall')])[1]").click();
  await page.waitForTimeout(500);
  //Click the add button on the toolbar to add new task
  await page.locator("(//span[contains(@class,'add')])").click();
  await page.waitForTimeout(500);
  //Click the start date to edit
  await page.locator("(//input[contains(@class,'control')])[6]").fill('03/30/19');
  await page.waitForTimeout(500);
  //Click the Save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click the collapse all button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The records are in collapsed state and record added under unassigned task.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Drag and Drop the child taskbars', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-drag-drop');
  await page.waitForTimeout(2000);
  //Click the expand all button on the toolbar
  await page.locator("(//span[contains(@class,'expandall')])").click();
  await page.waitForTimeout(500);
  //Drag and drop the taskbars on the cahrt side
  const src = page.locator("(//div[contains(@class,'child')])[1]");
  const dst = page.locator("(//div[contains(@class,'child')])[10]");
  if (src && dst) {
    const src_bound = await src.boundingBox();
    const dst_bound = await dst.boundingBox();
    if (src_bound && dst_bound) {
      await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
      await page.mouse.down();
      await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
      await page.mouse.up();
      await page.waitForTimeout(1000);
    }
  }
  await page.waitForTimeout(2000);
  //Screenshot validation-The taskbars are drag and dropped.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Drag and Drop the child to unassigned tasks', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-drag-drop');
  await page.waitForTimeout(2000);
  //Drag and drop the taskbars on the chart side from 1st child taskbar to unassigned taskbar record
  const src = page.locator("(//div[contains(@class,'child')])[1]");
  const dst = page.locator("(//div[contains(@class,'child')])[71]");
  if (src && dst) {
    const src_bound = await src.boundingBox();
    const dst_bound = await dst.boundingBox();
    if (src_bound && dst_bound) {
      await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
      await page.mouse.down();

      await dst.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const newDstBound = await dst.boundingBox();

      if (newDstBound) {
        await page.mouse.move(newDstBound.x + newDstBound.width / 2, newDstBound.y + newDstBound.height / 2, { steps: 30 });
        await page.mouse.up();
      }
      await page.waitForTimeout(1000);
    }
  }
  await page.locator('//*[@id="treeGridtaskbar_gridcontrol_content_table"]/tbody/tr[13]/td[2]').click();
  await page.waitForTimeout(1000);
  //Screenshot validation-The taskbars are drag and dropped to unassigned task
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Drag and Drop the child Above the parent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-drag-drop');
  await page.waitForTimeout(2000);
  //Click the expand all button on the toolbar
  await page.locator("(//span[contains(@class,'expandall')])").click();
  await page.waitForTimeout(500);
  //Drag and drop the taskbars on the cahrt side
  const src = page.locator("(//div[contains(@class,'child')])[10]");
  const dst = page.locator("(//div[contains(@class,'child')])[1]");
  if (src && dst) {
    const src_bound = await src.boundingBox();
    const dst_bound = await dst.boundingBox();
    if (src_bound && dst_bound) {
      await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
      await page.mouse.down();
      await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
      await page.mouse.up();
      await page.waitForTimeout(1000);
    }
  }
  await page.waitForTimeout(2000);
  //Screenshot validation-The taskbars are drag and dropped.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test.fixme('41-Add New Tasks ,then drag and drop the records', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Taskbar-drag-drop');
//   await page.waitForTimeout(2000);
//   //Click the add button
//   await page.locator("(//span[contains(@class,'add')])").click();
//   await page.waitForTimeout(500);
//   //Click the Save button
//   await page.locator("(//button[text()='Save'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click the add button
//   await page.locator("(//span[contains(@class,'add')])").click();
//   await page.waitForTimeout(500);
//   //Click the Save button
//   await page.locator("(//button[text()='Save'])[1]").click();
//   await page.waitForTimeout(500);
//   //Click the expand all button on the toolbar
//   await page.locator("(//span[contains(@class,'expandall')])").click();
//   await page.waitForTimeout(500);
//   //Drag and drop the taskbars on the cahrt side
//   const src = page.locator("(//div[contains(@class,'child')])[59]");
//   const dst = page.locator("(//div[contains(@class,'child')])[61]");
//   if (src && dst) {
//     const src_bound = await src.boundingBox();
//     const dst_bound = await dst.boundingBox();
//     if (src_bound && dst_bound) {
//       await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
//       await page.mouse.down();
//       await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
//       await page.mouse.up();
//       await page.waitForTimeout(1000);
//     }
//   }
//   await page.waitForTimeout(2000);
//   //Screenshot validation-The taskbars are drag and dropped.
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('42-Collapseall records and Expandall records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/through-box-dialog');
  await page.waitForTimeout(2000);
  //click collapse all button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(500);
  //click expand all button on the toolbar
  await page.locator("(//span[contains(@class,'expandall')])").click();
  await page.waitForTimeout(500);
  //Click the child record to edit 
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar-inner-div e-gantt-child-taskbar   ")])[7]').click();
  await page.waitForTimeout(500);
  //Click Edit all button on the toolbar to open the dialog tab
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click to select Task type from the dropdown
  await page.locator("(//span[contains(@class,'input')])[5]").click();
  await page.waitForTimeout(500);
  //Click to select FixedUnit
  await page.locator("(//li[text()='FixedUnit'])[1]").click();
  await page.waitForTimeout(500);
  //Select resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Click to uncheck resources
  await page.locator("(//span[contains(@class,'check')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The resource is unselected. 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-Edit the Task Type change to FixedUnit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/through-box-dialog');
  await page.waitForTimeout(2000);
  //Double click the Task Type
  await page.locator("(//td[contains(@class,'rowcell')])[14]").dblclick();
  await page.waitForTimeout(1000)
  //Click the Dropdown to show FixeUnit
  await page.locator("(//span[contains(@class,'input')])[2]").click();
  await page.waitForTimeout(500);
  //Select FixedUnit
  await page.locator("(//li[text()='FixedUnit'])").click();
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[contains(@class,'update')])").click();
  await page.waitForTimeout(500);
  //Double click the Task Type for the 2nd child record
  await page.locator("(//td[contains(@class,'rowcell')])[22]").dblclick();
  await page.waitForTimeout(1000)
  //Click the Dropdown to show FixeUnit
  await page.locator("(//span[contains(@class,'input')])[2]").click();
  await page.waitForTimeout(500);
  //Select FixedUnit
  await page.locator("(//li[text()='FixedUnit'])").click();
  await page.waitForTimeout(500);
  //Click update button on the toolbar
  await page.locator("(//span[contains(@class,'update')])").click();
  await page.waitForTimeout(500);
  //Click Add button on the toolbar
  await page.locator("(//span[contains(@class,'add')])").click();
  await page.waitForTimeout(500);
  //Click to edit the Duration
  await page.locator("(//input[contains(@class,'control')])[4]").fill('4 Days');
  await page.waitForTimeout(500);
  //Select resources to open its dialog tab
  await page.locator("(//div[contains(@class,'e-tab-text')])[2]").click();
  await page.waitForTimeout(500);
  //Click to uncheck resources
  await page.locator("(//span[contains(@class,'check')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(300);
  //Screenshot validation-The task type for the two child records are changed.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('44-Edit the Child record,End Date', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/through-box-dialog');
  await page.waitForTimeout(2000);
  //Click the child record on grid side
  await page.locator("(//span[text()='Soil test approval'])[1]").click();
  await page.waitForTimeout(500)
  //Click the Edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click the Event Name and Edit it 
  await page.locator("(//input[contains(@class,'control')])[2]").fill('test');
  await page.waitForTimeout(500);
  //Click the End date to edit it 
  await page.locator("(//input[contains(@class,'control')])[7]").fill('04/30/21');
  await page.waitForTimeout(500);
  //Select Resources to open its dialog tab
  await page.locator("(//div[text()='Resources'])").click();
  await page.waitForTimeout(500);
  //Deselect the 1st resource
  await page.locator("(//span[contains(@class,'e-check')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The Event Name is edited on grid side and Chart side the taskbar all resources are added.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('45-Collapse all Records,Expand all records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Method-through');
  await page.waitForTimeout(2000);
  //Click collapse all button on the toolbar
  await page.locator("(//span[contains(@class,'collapseall')])").click();
  await page.waitForTimeout(500);
  //Click expandall all button on the toolbar
  await page.locator("(//span[contains(@class,'expandall')])").click();
  await page.waitForTimeout(500);
  //Click the  Add assignment button on the toolbar
  await page.locator("(//button[text()='Add Assignment'])[1]").click();
  await page.waitForTimeout(500);
  //Click the last child record
  await page.locator("(//span[text()='Sign contract'])[1]").click();
  await page.waitForTimeout(1000);
  //Click delete button
  await page.locator("(//span[contains(@class,'delete')])").click();
  await page.waitForTimeout(2200);
  //Screenshot validation-Added assignment is visible 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//RESOURCEVIEW-UG cases from documentation
test('46-Add assignment through method,edit child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Method-through');
  await page.waitForTimeout(2100);
  //Click the Add assignment button on the toolbar
  await page.locator("(//button[text()='Add Assignment'])[1]").click();
  await page.waitForTimeout(1200);
  //Click the child record to edit
  await page.locator("(//span[text()='Identify site location'])[1]").click();
  await page.waitForTimeout(500);
  //click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click to edit the child record
  await page.locator("(//input[contains(@class,'control')])[2]").fill('location');
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click the Update assignment button on the toolbar
  await page.locator("(//button[text()='Update Assignment'])[1]").click();
  await page.waitForTimeout(1000);
  // //Validation (Not working)
  // const UpdateAssignment = page.locator('(//span[contains(@class,"e-label")])[4]');
  // await expect(UpdateAssignment).toHaveText('Jack Davolio, Margaret Buchanan [50%]');
  //Click the  Delete Assignment button on the toolbar
  await page.locator("(//button[text()='Delete Assignment'])[1]").click();
  await page.waitForTimeout(2000);
  //Validation 
  const DeleteAssignment = page.locator('(//span[contains(@class,"e-label")])[4]');
  await expect(DeleteAssignment).toHaveText('Rose Fuller');
  //Screenshot validation-Add assignment,edited record is visible ,update assignment 
  //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('47-Add assignment through method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Method-through');
  await page.waitForTimeout(2000);
  //Click the Add assignment button on the toolbar
  await page.locator("(//button[text()='Add Assignment'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the child record to edit
  await page.locator("(//span[text()='Identify site location'])[1]").click();
  await page.waitForTimeout(1000);
  //click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click to edit the child record
  await page.locator("(//input[contains(@class,'control')])[2]").fill('Identify');
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(1500);
  //Click the Update assignment button on the toolbar
  await page.locator("(//button[text()='Update Assignment'])[1]").click();
  await page.waitForTimeout(2000);
  // //Validation -Not working
  // const UpdateAssignment = page.locator('(//span[contains(@class,"e-label")])[4]');
  // await expect(UpdateAssignment).toHaveText('Jack Davolio, Margaret Buchanan [50%]');
  //Screenshot validation-Assignment is added and updated assignment visible and edited record seen
  //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('48-Add assignment through method', async ({ page }) => {
  test.slow();
  await page.goto(Helper.baseUrlserver + '/Method-through');
  await page.waitForTimeout(2000);
  //Click the Add assignment button on the toolbar
  await page.locator("(//button[text()='Add Assignment'])[1]").click();
  await page.waitForTimeout(1000);
  //Validation 
  const AddAssignment = page.locator('(//span[contains(@class,"e-label")])[6]');
  await page.waitForTimeout(500);
  await expect(AddAssignment).toHaveText('Rose Fuller');
  //Click the child record to edit
  await page.locator("(//span[text()='Estimation approval'])[1]").click();
  await page.waitForTimeout(500);
  //click the edit button on the toolbar
  await page.locator("(//span[contains(@class,'edit')])").click();
  await page.waitForTimeout(500);
  //Click to edit the child record
  await page.locator("(//input[contains(@class,'control')])[2]").fill('Estimation');
  await page.waitForTimeout(500);
  //Click duration to add new record
  await page.locator("(//input[contains(@class,'control')])[4]").fill('6 Days');
  await page.waitForTimeout(500);
  //Click save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(500);
  //Click the delete assignment on the toolbar
  await page.locator("(//button[text()='Add Assignment'])[1]").click();
  await page.waitForTimeout(2000);
  //Validation 
  const AddAssignment1 = page.locator('(//span[contains(@class,"e-label")])[6]');
  await page.waitForTimeout(500);
  await expect(AddAssignment1).toHaveText('Rose Fuller');
  //Screenshot validation-Added assignment is shown ,edited child record is also visible
  //expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});