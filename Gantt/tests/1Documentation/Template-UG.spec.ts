import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('1-Taskbar template', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-template');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Collapse parent record using keyboard', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-template');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[2]').click();
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[1]/div/span[1]').press('Control+ArrowUp');
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Collapse parent using treegird icon', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-template');
  await page.waitForTimeout(500);
  await page.getByLabel('1 Column Header Event Id').locator('span').first().click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('4-Resize the Taskbar template from Right to Left', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Taskbar-template');
//   await page.waitForTimeout(1000);
//   await page.waitForSelector("(//div[@class='e-taskbar-right-resizer e-icon'])[1]");
//   const resizer = await page.locator("(//div[@class='e-taskbar-right-resizer e-icon'])[1]").boundingBox();
//   if (resizer) {
//     await page.mouse.move(resizer.x + resizer.width / 2, resizer.y + resizer.height / 2);
//     await page.mouse.down();
//     await page.waitForTimeout(300);
//     await page.mouse.move(resizer.x - 70, resizer.y);  // Move to desired position
//     await page.waitForTimeout(600);
//     await page.mouse.up();
//     await page.waitForTimeout(400);
//   }
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[1]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('5-Resize the Taskbar template from Left  to Right', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Taskbar-template');
//   await page.waitForTimeout(1000);
//   await page.waitForSelector("(//div[@class='e-taskbar-right-resizer e-icon'])[1]");
//   const resizer = await page.locator("(//div[@class='e-taskbar-right-resizer e-icon'])[1]").boundingBox();
//   if (resizer) {
//     await page.mouse.move(resizer.x + resizer.width / 2, resizer.y + resizer.height / 2);
//     await page.mouse.down();
//     await page.waitForTimeout(300);
//     await page.mouse.move(resizer.x + 100, resizer.y);  // Move to desired position
//     await page.waitForTimeout(600);
//     await page.mouse.up();
//     await page.waitForTimeout(400);
//   }
//   await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[2]/td[1]').click();
//   await page.waitForTimeout(500);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('6-Drag and Drop the child record Taskbar', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Taskbar-template');
//   await page.waitForTimeout(1000);
//   //mouse move
//   await page.mouse.move(798, 374);
//   await page.waitForTimeout(100);
//   //mouse down
//   await page.mouse.down();
//   await page.mouse.move(798, 374);
//   await page.waitForTimeout(100);
//   //mouse move
//   await page.mouse.move(1171, 377);
//   await page.waitForTimeout(100);
//   //mouse up
//   await page.mouse.up();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('7-Drag and Drop the Parent record Taskbar', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Taskbar-template');
//   await page.waitForTimeout(1000);
//   //mouse move
//   await page.mouse.move(766, 148);
//   await page.waitForTimeout(100);
//   //mouse down
//   await page.mouse.down();
//   await page.waitForTimeout(100);
//   //mouse move
//   await page.mouse.move(766, 148);
//   await page.waitForTimeout(100);
//   //mouse move
//   await page.mouse.move(1170, 147);
//   await page.waitForTimeout(100);
//   //mouse up
//   await page.mouse.up();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('8-Click to collapse all the records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-template');
  await page.waitForTimeout(1000);
  await page.locator('(//span[contains(@class,"collapseall")])').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Click to Expand all the records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-template');
  await page.waitForTimeout(1000);
  //Click to collapse all the records
  await page.locator('(//span[contains(@class,"collapseall")])').click();
  await page.waitForTimeout(500);
  //Click to Expand all the records
  await page.locator('(//span[contains(@class,"expandall")])').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Add new task record and dependency', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-template');
  await page.waitForTimeout(1000);
  //Click add button
  await page.locator('(//span[contains(@class,"add")])').click();
  await page.waitForTimeout(500);
  //Click dependency to open the dialog tab
  await page.locator('(//div[contains(@class,"e-tab-text")])[2]').click();
  await page.waitForTimeout(500);
  //Click add button on the dependency
  await page.locator('(//span[contains(@class,"add")])[2]').click();
  await page.waitForTimeout(500);
  //Click the dropdown
  await page.locator('(//span[contains(@class,"input")])[7]').click();
  await page.waitForTimeout(500);
  //Select the dependency 
  await page.locator('(//li[text()="2-Actor in Supporting Role"])').click();
  await page.waitForTimeout(500);
  //Click to select Custom columns to open the dialog tab
  await page.locator('(//div[contains(@class,"e-tab-text")])[3]').click();
  await page.waitForTimeout(500);
  //Click to custom the movie
  await page.locator('(//input[contains(@id,"Movie")])[1]').click();
  await page.waitForTimeout(500);
  //Type the movie name
  await page.keyboard.type('Darkest Hour');
  await page.waitForTimeout(500);
  //Click the save button
  await page.locator('(//button[contains(@class,"control")])[16]').click();
  await page.waitForTimeout(500);
  //Click to resize the taskbar
  await page.mouse.move(850, 150);
  await page.waitForTimeout(100);
  //mouse down
  await page.mouse.down();
  await page.waitForTimeout(100);
  //mouse move
  await page.mouse.move(850, 150);
  await page.waitForTimeout(100);
  //mouse move
  await page.mouse.move(973, 148);
  await page.waitForTimeout(100);
  //mouse up
  await page.mouse.up();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test.fixme('11-Edit the parent record and delete the child record ', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/Taskbar-template');
//   await page.waitForTimeout(1000);
//   //Click the parent record
//   await page.locator('(//td[contains(@class,"rowcell")])[2]').dblclick();
//   await page.waitForTimeout(500);
//   //Click to edit
//   await page.locator('(//input[contains(@class,"control")])[1]').click();
//   await page.waitForTimeout(500);
//   //Press to select all 
//   await page.keyboard.press('Control+A');
//   await page.waitForTimeout(500);
//   //Press to clear the records
//   await page.keyboard.press('Backspace');
//   await page.waitForTimeout(500);
//   //Click to type the record
//   await page.keyboard.type('Grammy Moments');
//   await page.waitForTimeout(500);
//   //Click the update button
//   await page.locator('(//span[contains(@class,"update")])[1]').click();
//   await page.waitForTimeout(500);
//   //Click the child record
//   await page.locator('(//td[contains(@class,"rowcell")])[23]').click();
//   await page.waitForTimeout(500);
//   //Click the delete button on the Toolbar
//   await page.locator('(//span[contains(@class,"delete")])').click();
//   await page.waitForTimeout(500);
//   //Click the ok button 
//   await page.locator('(//button[contains(@class,"control")])[13]').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('12-Oudent the record and Indent the records ', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-template');
  await page.waitForTimeout(1000);
  //Click the child record
  await page.locator('(//td[contains(@class,"rowcell")])[9]').click();
  await page.waitForTimeout(500);
  //Click oudent on the toolbar
  await page.locator('(//span[contains(@class,"outdent")])').click();
  await page.waitForTimeout(500);
  //Click the last child record to indent
  await page.locator('(//td[contains(@class,"rowcell")])[23]').click();
  await page.waitForTimeout(500);
  //Indent the records
  await page.locator('(//span[contains(@class,"indent")])').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Zoom In the record and Zoom Out', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-template');
  await page.waitForTimeout(1000);
  //Zoom Inthe Records
  await page.locator('(//span[contains(@class,"zoomin")])').click();
  await page.waitForTimeout(500);
  //Zoom out the records
  await page.locator('(//span[contains(@class,"zoomout")])').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Zoom to fit and Collapse all the records ', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/Taskbar-template');
  await page.waitForTimeout(1000);
  //Zoomto fit the records
  await page.locator('(//span[contains(@class,"zoomtofit")])').click();
  await page.waitForTimeout(500);
  //Collapse all the records
  await page.locator('(//span[contains(@class,"collapseall")])').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});