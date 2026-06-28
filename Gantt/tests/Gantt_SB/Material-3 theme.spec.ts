import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
//Materia 3 themes 
// test('1-Overview sample - materail 3', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'overview?theme=material3');
//   await page.waitForTimeout(5000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('2-Editing sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'editing?theme=material3');
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Add dialog tab general - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'editing?theme=material3');
  await page.waitForTimeout(4000);
  await page.getByLabel('Add', { exact: true }).click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Add dialog tab dependency - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'editing?theme=material3');
  await page.waitForTimeout(4000);
  await page.getByLabel('Add', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('tab', { name: 'Dependency' }).locator('div').first().click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Dependency add tab- material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'editing?theme=material3');
  await page.waitForTimeout(4000);
  await page.getByLabel('Add', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('tab', { name: 'Dependency' }).locator('div').first().click();
  await page.waitForTimeout(600);
  await page.getByLabel('Dependency', { exact: true }).getByLabel('Add').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Delete dialog dependency - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'editing?theme=material3');
  await page.waitForTimeout(4000);
  await page.locator("(//span[text()='Obtain permits'])[1]").click();
  await page.waitForTimeout(600);
  await page.getByLabel('Delete').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Focusing on cell-edit - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'editing?theme=material3');
  await page.waitForTimeout(4000);
  await page.locator("(//span[text()='Obtain permits'])[1]").dblclick();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Open filter menu - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=material3');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter ")])[1]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Open filter menu options - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=material3');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter ")])[1]').click();
  await page.waitForTimeout(300);
  await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon")])[2]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Check filter icon after filtering - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=material3');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter ")])[1]').click();
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Enter the value').click();
  await page.getByPlaceholder('Enter the value').fill('7');
  await page.getByRole('button', { name: 'Filter', exact: true }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Row selection - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'selection?theme=material3');
  await page.waitForTimeout(4000);
  await page.locator('(//td[contains(@class, "e-rowcell ")])[16]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Cell selection - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'selection?theme=material3');
  await page.waitForTimeout(4000);
  await page.locator('(//span[contains(@class, "e-input-group-icon")])[1]').first().click();
  await page.waitForTimeout(300);
  await page.locator('(//li[contains(@class, "e-list-item")])[2]').click();
  await page.waitForTimeout(300);
  await page.getByLabel('Defining the target audience Column Header Task Name').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Scheduling concept sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'scheduling-mode?theme=material3');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Scheduling concept sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'holidays?theme=material3');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-unscheduled sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'unscheduled-task?theme=material3');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Baseline sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'baseline?theme=material3');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-eventmarkers sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'eventmarkers?theme=material3');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-critical path sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'criticalpath?theme=material3');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-column template sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-template?theme=material3');
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Column menu options', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=material3');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[1]').click();
  await page.getByLabel('Columns', { exact: true }).click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Resourceview sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-view?theme=material3');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Resrouces tab - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-view?theme=material3');
  await page.waitForTimeout(4000);
  await page.waitForTimeout(5000);
  await page.getByLabel('Site Analyze Column Header Name').locator('div').click();
  await page.waitForTimeout(100);
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(1000);
  await page.locator('(//div[text()="Resources"])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Header template - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'header-template?theme=material3');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Taskbar template - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'taskbar-template?theme=material3');
  await page.waitForTimeout(4000);
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Materia 3-dark themes 
// test('25-Overview sample - materail 3', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'overview?theme=material3-dark');
//   await page.waitForTimeout(4000);
//   await page.waitForTimeout(5000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('26-Editing sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'editing?theme=material3-dark');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Add dialog tab general - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'editing?theme=material3-dark');
  await page.waitForTimeout(4000);
  await page.getByLabel('Add', { exact: true }).click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Add dialog tab dependency - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'editing?theme=material3-dark');
  await page.waitForTimeout(4000);
  await page.getByLabel('Add', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('tab', { name: 'Dependency' }).locator('div').first().click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Dependency add tab- material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'editing?theme=material3-dark');
  await page.waitForTimeout(4000);
  await page.getByLabel('Add', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('tab', { name: 'Dependency' }).locator('div').first().click();
  await page.waitForTimeout(800);
  await page.getByLabel('Dependency', { exact: true }).getByLabel('Add').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Delete dialog dependency - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'editing?theme=material3-dark');
  await page.waitForTimeout(4000);
  await page.locator("(//span[text()='Obtain permits'])[1]").click();
  await page.getByLabel('Delete').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Focusing on cell-edit - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'editing?theme=material3-dark');
  await page.waitForTimeout(4000);
  await page.locator("(//span[text()='Obtain permits'])[1]").dblclick();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Open filter menu - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=material3-dark');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter ")])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Open filter menu options - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=material3-dark');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter ")])[1]').click();
  await page.waitForTimeout(400);
  await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon")])[2]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Check filter icon after filtering - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'filtering?theme=material3-dark');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter ")])[1]').click();
  await page.waitForTimeout(300);
  await page.getByPlaceholder('Enter the value').click();
  await page.getByPlaceholder('Enter the value').fill('7');
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Filter', exact: true }).click();
  await page.waitForTimeout(1500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Row selection - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'selection?theme=material3-dark');
  await page.waitForTimeout(4000);
  await page.getByLabel('Defining the target audience Column Header Task Name').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Cell selection - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'selection?theme=material3-dark');
  await page.waitForTimeout(4000);
  await page.locator('.e-input-group-icon').first().click();
  await page.waitForTimeout(300);
  await page.getByRole('option', { name: 'Cell' }).click();
  await page.waitForTimeout(300);
  await page.getByLabel('Defining the target audience Column Header Task Name').click();
  await page.waitForTimeout(600);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Scheduling concept sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'scheduling-mode?theme=material3-dark');
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Scheduling concept sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'holidays?theme=material3-dark');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-unscheduled sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'unscheduled-task?theme=material3-dark');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Baseline sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'baseline?theme=material3-dark');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-eventmarkers sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'eventmarkers?theme=material3-dark');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('42-critical path sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'criticalpath?theme=material3-dark');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-column template sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-template?theme=material3-dark');
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('44-Column menu options', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'column-menu?theme=material3-dark');
  await page.waitForTimeout(4000);
  await page.locator('(//div[contains(@class, "e-icons e-columnmenu ")])[1]').click();
  await page.getByLabel('Columns', { exact: true }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('45-Resourceview sample - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-view?theme=material3-dark');
  await page.waitForTimeout(4000);
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('46-Resrouces tab - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'resource-view?theme=material3-dark');;
  await page.waitForTimeout(5000);
  await page.getByLabel('Site Analyze Column Header Name').locator('div').click();
  await page.waitForTimeout(500);
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(1000);
  await page.locator('(//div[text()="Resources"])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('47-Header template - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'header-template?theme=material3-dark');
  await page.waitForTimeout(4500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('48-Taskbar template - material 3', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'taskbar-template?theme=material3-dark');
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/843575/
test('49-Taskbar resizer icon does not appear', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'editing?theme=material3');
  await page.waitForTimeout(2000);
  //Click the settings
  // Click the settings
  await page.locator('(//span[contains(@class,"sb-settings")])[2]').click();
  await page.waitForTimeout(1000);

  // Click Touch Mode
  await page.locator("(//div[text()='Touch'])[1]").click();
  await page.waitForTimeout(2000);

  // Click the child taskbar
  await page.locator(' (//div[contains(@class,"child-taskbar  ")])[2]').click();
  await page.waitForTimeout(1000);

  // Add hover operation to show the tooltip
  const taskbar = page.locator('(//div[contains(@class,"child-taskbar  ")])[2]');
  await taskbar.hover();
  await page.waitForTimeout(1500); // Wait for tooltip to appear

  const resizerLeft = page.locator('.e-taskbar-left-resizer').nth(1);
  const resizerRight = page.locator('.e-taskbar-right-resizer').nth(1);

  // Verify the resizer icon is visible
  expect(await resizerLeft.isVisible()).toBeTruthy();
  expect(await resizerRight.isVisible()).toBeTruthy();
  await page.locator("//span[@class='e-label' and text()='Obtain permits']").click();
  await page.waitForTimeout(500);
  //Screenshot validation-The resize icon appears on the taskbar
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// test('50-Taskbar resizer icon does not appear', async ({ page }) => {
//   await page.goto(Helper.baseUrl + 'editing?theme=material3-dark');
//   await page.waitForTimeout(4000);
//   await page.getByLabel('toggle settings menu').click();
//   await page.waitForTimeout(1000);
//   await page.getByRole('button', { name: 'Touch' }).click();
//   await page.waitForTimeout(2000);
//   await page.locator('(//div[@class="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar   "])[1]').click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

test('51-Checking persistence toolbar item', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'persistence?theme=material3');
  await page.waitForTimeout(5000);
  //Zoom to fit
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[3]').click();
  await page.waitForTimeout(300);
  //Reset state
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[6]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('52-Checking persistence toolbar item', async ({ page }) => {
  await page.goto(Helper.baseUrl + 'persistence?theme=material3-dark');
  await page.waitForTimeout(5000);
  //Click Zoom out
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
  //Click Zoom out
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[2]').click();
  //Click Save state
  await page.locator('(//span[contains(@class, "e-tbar-btn-text")])[4]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

