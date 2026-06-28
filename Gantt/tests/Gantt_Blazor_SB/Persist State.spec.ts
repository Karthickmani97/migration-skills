import {test, expect} from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
test('1-Persistence initial load', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Reload state', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
  await page.waitForTimeout(5000);
  //Reset state
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
  await page.waitForTimeout(2000);
  //Reload page
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Zoom in one time', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
  await page.waitForTimeout(5000);
  //Reset state
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
  await page.waitForTimeout(2000);
  //Zoom in
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
  await page.waitForTimeout(2000);
  //Reload page
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Zoom out one time', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
  await page.waitForTimeout(5000);
  //Reset state
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
  await page.waitForTimeout(2000);
  //Zoom out
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
  await page.waitForTimeout(2000);
  //Reload page
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Zoom-to-fit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
  await page.waitForTimeout(5000);
  //Reset state
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
  await page.waitForTimeout(2000);
  //Zoom to fit
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
  await page.waitForTimeout(2000);
  //Reload page
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('6-Sort descending', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
//   await page.waitForTimeout(5000);
//   //Reset state
//   await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//   await page.waitForTimeout(4000);
//   await page.locator('(//div[contains(@class, "e-sortfilterdiv")])[2]').click();
//   await page.waitForTimeout(4000);
//   await page.locator('(//div[contains(@class, "e-sortfilterdiv")])[2]').click();
//   await page.waitForTimeout(4000);
//   //Reload page
//   await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//   await page.waitForTimeout(5000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('7-Sort ascending', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
  await page.waitForTimeout(5000);
  //Reset state
  //await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
  await page.waitForTimeout(4000);
  //Click sort ascending
  await page.locator('//th[contains(@class, "e-headercell")][2]').click();
  await page.waitForTimeout(2000);
  //Reload page
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Columns disable', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
  await page.waitForTimeout(5000);
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
  await page.waitForTimeout(1000);
  //Columns
  await page.locator('(//li[contains(@class, "e-menu-item")])[5]').hover();
  await page.waitForTimeout(2000);
  //ID
  await page.locator('(//li[contains(@class, "e-menu-item")])[7]').click();
  await page.waitForTimeout(1000);
  //Start date
  await page.locator('(//li[contains(@class, "e-menu-item")])[9]').click();
  await page.waitForTimeout(1000);
  //Click to disable the column
  await page.locator('(//td[contains(@class, "e-rowcell")])[40]').click();
  await page.waitForTimeout(2000);
  //Reload page
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Enabling columns', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
  await page.waitForTimeout(5000);
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
  await page.waitForTimeout(1000);
  //Column
  await page.locator('(//li[contains(@class, "e-menu-item")])[5]').hover();
  await page.waitForTimeout(500);
  //ID
  await page.locator('(//li[contains(@class, "e-menu-item")])[7]').click();
  await page.waitForTimeout(300);
  //Name
  await page.locator('(//li[contains(@class, "e-menu-item")])[8]').click();
  await page.waitForTimeout(300);
  //ID clicked
  await page.locator('(//li[contains(@class, "e-menu-item")])[7]').click();
  await page.waitForTimeout(1000);
  //Click to enable the columns
  await page.locator('(//td[contains(@class, "e-rowcell")])[26]').click();
  await page.waitForTimeout(2000);
  //Reload page
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Zoom-in after zoom-to-fit', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
  await page.waitForTimeout(5000);
  //Reset 
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
  await page.waitForTimeout(4000);
  //Zoom fit
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
  await page.waitForTimeout(1000);
  //Zoom in
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[1]').click();
  await page.waitForTimeout(2000);
  //Reload
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('11-Zoom-out continously', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
//   await page.waitForTimeout(5000);
//   await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
//   for (let i = 0; i < 5; i++) {
//     //Zoom out
//     await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
//     await page.waitForTimeout(2000);
//   }
//   //Reload page
//   await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[7]').click();
//   await page.waitForTimeout(5000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//https://dev.azure.com/EssentialStudio/testing/_workitems/edit/876091
test('12-Selection not removed on chart side', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
  await page.waitForTimeout(2000);
  //select the child record on the chart side of the component
  await page.locator('(//div[contains(@class,"child")])[4]').click();
  await page.waitForTimeout(500);
  //mouse move
  await page.mouse.move(914,85);
  await page.waitForTimeout(500);
  //Click the Reset buttton
  await page.locator('(//span[contains(@class,"resetstate")])').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Multi sort ascending the columns', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
  await page.waitForTimeout(2000);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  await page.waitForTimeout(500);
  //Sort ascend 1st column
  await page.locator('//th[contains(@class, "e-headercell")][1]').click();
  await page.waitForTimeout(500);
  //Sort ascend 2nd column
  await page.locator("//th[contains(@class, 'e-headercell')][2]").click();
  await page.waitForTimeout(500);
  //Sort ascend 3rd column
  await page.locator("//th[contains(@class, 'e-headercell')][3]").click();
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(500);
  //Click the column menu on name
  await page.locator("(//div[contains(@class,'columnmenu')])[2]").click();
  await page.waitForTimeout(500);
  //Select Autofit this column
  await page.locator("(//li[contains(@class,'e-menu')])[2]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Name column is autofitted and records are in ascending state
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Multi sort ascending the columns', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
  await page.waitForTimeout(2000);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  await page.waitForTimeout(500);
  //Sort ascend 1st column
  await page.locator("//th[contains(@class, 'e-headercell')][1]").click();
  await page.waitForTimeout(500);
  //Sort ascend 2nd column
  await page.locator("//th[contains(@class, 'e-headercell')][2]").click();
  await page.waitForTimeout(500);
  //Sort ascend 3rd column
  await page.locator("//th[contains(@class, 'e-headercell')][3]").click();
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(500);
  //Click the column menu on name
  await page.locator("(//div[contains(@class,'columnmenu')])[2]").click();
  await page.waitForTimeout(500);
  //Click to select the columns 
  await page.locator('(//li[contains(@class,"menu")])[5]').click();
  await page.waitForTimeout(500);
  //Click to deselect start date
  await page.locator('(//li[contains(@class,"menu")])[9]').click();
  await page.waitForTimeout(500);
  //Click to deselect Enddate
  await page.locator('(//li[contains(@class,"menu")])[10]').click();
  await page.waitForTimeout(500);
  //Click to deselect Duration
  await page.locator('(//li[contains(@class,"menu")])[11]').click();
  await page.waitForTimeout(700);
  //Click Zoom to Fit
  await page.locator('(//span[contains(@class,"e-zoomtofit e-icons e-btn-icon e-icon-left")])[1]').click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Chart side records are zoomed to Fit and Sorting of columns done.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/888820
test('15-Multi sort load and save state', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
  await page.waitForTimeout(1000);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  await page.waitForTimeout(500);
  //Sort ascend 1st column
  await page.locator("//th[contains(@class, 'e-headercell')][1]").click();
  await page.waitForTimeout(500);
  //Sort ascend 2nd column
  await page.locator("//th[contains(@class, 'e-headercell')][2]").click();
  await page.waitForTimeout(500);
  //Sort ascend 3rd column
  await page.locator("//th[contains(@class, 'e-headercell')][3]").click();
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(500);
  //Click on the toolbar save state
  await page.locator("(//span[contains(@class,'e-savestate')])[1]").click();
  await page.waitForTimeout(500);
  //Click on the toolbar reset state
  await page.locator("(//span[contains(@class,'e-resetstate')])[1]").click();
  await page.waitForTimeout(500);
  //Click load state button 
  await page.locator("(//span[contains(@class,'e-setstate')])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Multisorting is not maintained on the columns
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/903078
test('16- Records displayed when sort ascending', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
  await page.waitForTimeout(2000);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  await page.waitForTimeout(500);
  //Sort ascend 1st column
  await page.locator("//th[contains(@class, 'e-headercell')][1]").click();
  await page.waitForTimeout(500);
  //Sort ascend 2nd column
  await page.locator("//th[contains(@class, 'e-headercell')][2]").click();
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(2000);
  //Screenshot validation-Records are updated in ascending orders and records are displayed.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/874764
test('17-Persist state sample not works ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
  await page.waitForTimeout(2000);
  //Press the keyboard Control button down
  await page.keyboard.down("Control");
  await page.waitForTimeout(500);
  //Sort ascend 1st column
  await page.locator("//th[contains(@class, 'e-headercell')][1]").click();
  await page.waitForTimeout(500);
  //Sort ascend 2nd column
  await page.locator("//th[contains(@class, 'e-headercell')][2]").click();
  await page.waitForTimeout(500);
  //Press the keyboard Control button down
  await page.keyboard.up("Control");
  await page.waitForTimeout(500);
  //Perform zoomtofit
  await page.locator('(//span[contains(@class,"e-zoomtofit e-icons e-btn-icon e-icon-left")])[1]').click();
  await page.waitForTimeout(500);
  //save state
  await page.locator("(//span[contains(@class,'e-savestate')])[1]").click();
  await page.waitForTimeout(500);
  //Click on the toolbar reset state
  await page.locator("(//span[contains(@class,'e-resetstate')])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Records are updated in ascending orders and records are displayed.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Reorder the name column', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent');
  await page.waitForTimeout(2000);
  const src = page.locator("(//th[contains(@class,'e-headercell')])[2]");
  const dst = page.locator("(//th[contains(@class,'e-headercell')])[1]");
  if (src && dst) {
      const src_bound = await src.boundingBox();
      const dst_bound = await dst.boundingBox();
      if ( src_bound && dst_bound) {
          await page.mouse.move(src_bound.x + src_bound.width/2, src_bound.y + src_bound.height/2);
          await page.mouse.down();
          await page.mouse.move(dst_bound.x + dst_bound.width/2, dst_bound.y + dst_bound.height/2, {steps: 30});
          await page.mouse.up();
          await page.waitForTimeout(2000);
      }
  }
  await page.waitForTimeout(2000);
 expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/925112
test('19-925112-Icon Issue theme tailwind', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=tailwind3');
  test.info().annotations.push({ type: 'Sample link', description: 'persistence?theme=tailwind3' });
  await page.waitForTimeout(5000);
  //Screenshot validation-The icons on the toolbar in tailwind theme is displayed properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/947168
test('20-947168-Load State Not Working', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrl + 'persistence?theme=fluent2');
  test.info().annotations.push({ type: 'Sample link', description: 'persistence?theme=fluent2' });
  await page.waitForTimeout(2000);
  //Click  the ID header
  await page.locator("(//th[contains(@class,'headercell')])[1]").click();
  await page.waitForTimeout(500);
  //Click the save state button on the toolbar
  await page.locator("(//span[text()='Save state'])").click();
  await page.waitForTimeout(500);
  //Click the ID 
  await page.locator("(//th[contains(@class,'headercell')])[1]").click();
  await page.waitForTimeout(500);
  //Load state clicked
  await page.locator("(//span[text()='Load state'])").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Load state is working properly 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
