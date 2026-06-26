import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
import Excel from "exceljs";
import { pdf } from 'pdf-to-img';

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/827747
//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/67425
// test('1-Empty space issue while scrolling', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/bst');
//   await page.waitForTimeout(1000);
//   await page.getByRole('button', { name: 'Scroll-Rows' }).click();
//   await page.waitForTimeout(1200);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('2-Collapse child record and scroll', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/bst');
//   await page.waitForTimeout(1000);
//   await page.getByRole('gridcell', { name: '1 Column Header ID', exact: true }).locator('span').first().click();
//   await page.waitForTimeout(300);
//   await page.getByRole('button', { name: 'Scroll-Rows' }).click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('3-Collapse parent using collapseATLevel method', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/bst');
//   await page.waitForTimeout(1000);
//   await page.getByRole('button', { name: 'Collapse' }).click();
//   await page.waitForTimeout(600);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/837290/

test('4-Edit startdate as string', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/837290');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGanttSelfdata_gridcontrol_content_table"]/tbody/tr[3]/td[4]').dblclick();
  await page.waitForTimeout(400);
  await page.locator('#DataItem___StartDate').fill('4/8/2019');
  await page.waitForTimeout(500);
  await page.locator('#DataItem___StartDate').press('Enter');
  await page.waitForTimeout(2500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('5-Edit enddate as string', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/837290');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGanttSelfdata_gridcontrol_content_table"]/tbody/tr[4]/td[5]').dblclick();
  await page.waitForTimeout(400);
  await page.locator('form span').nth(1).click();
  await page.waitForTimeout(100);
  await page.getByTitle('Wednesday, April 10, 2019').click();
  await page.getByLabel('Update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/837700/

test('6-Tab key navigation in column virtual', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/837700-column-virtual');
  await page.waitForTimeout(3000);
  await page.locator('(//td[contains(@class, "e-rowcell  e-leftalign e-gridrowindex0Level1")])[2]').dblclick();
  // await page.getByLabel('Task 3 Column Header TaskName').locator('div').click();
  // await page.getByLabel('Task 3 Column Header TaskName').dblclick();
  await page.waitForTimeout(1400);
  await page.locator('#DataItem___TaskName').press('Tab');
  await page.waitForTimeout(1600);
  await page.locator('#DataItem___StartDate').press('Tab');
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/testing/_workitems/edit/844985

test('7-Add and dialog to show status', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/844446-custom-column');
  await page.waitForTimeout(500);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(600);
  await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Status saved when added', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/844446-custom-column');
  await page.waitForTimeout(500);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(200);
  await page.getByRole('combobox').nth(2).click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
  await page.waitForTimeout(200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Status edit through diaolog edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/844446-custom-column');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="GanttSelfdata_chartContentBody"]/tr[8]/td/div[1]').click();
  await page.waitForTimeout(300);
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(800);
  await page.getByLabel('Duration', { exact: true }).click();
  await page.waitForTimeout(200);
  await page.getByLabel('Duration', { exact: true }).fill('5 Days');
  await page.waitForTimeout(200);
  await page.locator('.e-ddl > .e-input-group-icon').click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('(//td[contains(@class, "e-rowcell")])[1]').click();
  await page.waitForTimeout(200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Edit status', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/844446-custom-column');
  await page.waitForTimeout(500);
  await page.locator('(//td[@class="e-rowcell  e-leftalign"])[15]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
  await page.waitForTimeout(500);
  await page.locator('(//li[@class="e-list-item"])[2]').click();
  await page.waitForTimeout(200);
  await page.locator('(//span[@class="e-tbar-btn-text"])[5]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/testing/_workitems/edit/840485

// test('11-Add empty record in data source.', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/839426-Add-Record');
//   await page.waitForTimeout(500);
//   await page.getByLabel('13 is template cell Column Header ID').getByRole('button', { name: 'Add' }).click();
//   await page.waitForTimeout(1000);
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/841482/

test('12-Add dialog fields gereral tab', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/custom-column');
  await page.waitForTimeout(500);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13-Add custom column value', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/custom-column');
  await page.waitForTimeout(500);
  await page.getByLabel('Add').click();
  await page.waitForTimeout(800);
  await page.getByLabel('Status', { exact: true }).click();
  await page.getByLabel('Status', { exact: true }).fill('Pending');
  await page.waitForTimeout(200);
  await page.getByLabel('Priority', { exact: true }).click();
  await page.getByLabel('Priority', { exact: true }).fill('High');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[7]').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14-Edit dialog fields', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/custom-column');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[4]/td[2]').click();
  await page.waitForTimeout(200);
  await page.getByLabel('Edit').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Edit custom column value', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/custom-column');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[7]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___Status').fill('Done');
  await page.waitForTimeout(200);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[8]').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___Priority').fill('Medium');
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Priority').press('Enter');
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/838567

// test('16-Edit startdate and enddate in dialog tab when Gantt is rendered using the grid edit template', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/838567-dialog');
//   await page.waitForTimeout(500);
//   await page.getByLabel('Add').click();
//   await page.waitForTimeout(500);
//   await page.getByLabel('Component').getByLabel('Add').click();
//   await page.waitForTimeout(500);
//   await page.locator('div:nth-child(3) > .e-control-wrapper > span:nth-child(4)').click();
//   await page.getByTitle('Tuesday, April 06, 2021').click();
//   await page.locator('.e-date-wrapper > .e-input-group-icon').click();
//   await page.getByText('12', { exact: true }).click();
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForTimeout(800);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('17-Edit startdate value in dialog tab', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/838567-dialog');
//   await page.waitForTimeout(500);
//   await page.getByLabel('10250 Column Header Order ID').click();
//   await page.getByLabel('Edit').click();
//   await page.waitForTimeout(500);
//   await page.getByLabel('Defining the target audience Column Header Job Name').click();
//   await page.getByLabel('Component').getByLabel('Edit').click();
//   await page.waitForTimeout(500);
//   await page.getByLabel('Start Date', { exact: true }).click();
//   await page.getByLabel('Start Date', { exact: true }).fill('4/6/2021');
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForTimeout(800);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

// test('18-Delete record in dialog tab', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/838567-dialog');
//   await page.waitForTimeout(500);
//   await page.getByLabel('Add').click();
//   await page.waitForTimeout(800);
//   await page.locator('#sfGantt_1_chartContentBody').getByText('Defining the product usage').click();
//   await page.waitForTimeout(200);
//   await page.getByLabel('Component').getByLabel('Delete').click();
//   await page.waitForTimeout(200);
//   await page.getByRole('button', { name: 'Ok' }).click();
//   await page.waitForTimeout(600);
//   expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/852187

test('19-Edit custom column value through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/852187-Edit-template');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.getByLabel('Edit', { exact: true }).click();
  await page.waitForTimeout(800);
  await page.getByText('Custom Columns').click();
  await page.waitForTimeout(400);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: 'Review' }).click();
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('20-Edit custom column and save', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/852187-Edit-template');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="Gamtt_chartContentBody"]/tr[6]/td/div[2]/div[3]/div').dblclick();
  await page.waitForTimeout(800);
  await page.locator('//*[@id="StartDate"]').click();
  await page.locator('//*[@id="StartDate"]').fill('4/12/2022');
  await page.waitForTimeout(200);
  await page.getByText('Custom Columns').click();
  await page.waitForTimeout(400);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(200);
  await page.getByRole('combobox').press('ArrowDown');
  await page.waitForTimeout(400);
  await page.getByRole('combobox').press('Tab');
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Update custom column value through cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/852187-Edit-template');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[3]/td[7]').dblclick();
  await page.waitForTimeout(300);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(200);
  await page.getByRole('option', { name: 'validate' }).click();
  await page.waitForTimeout(200);
  await page.getByLabel('Update').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Cancel custom column value through cell edit', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/852187-Edit-template');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGamtt_gridcontrol_content_table"]/tbody/tr[2]/td[7]').dblclick();
  await page.waitForTimeout(300);
  await page.getByRole('combobox').locator('span').click();
  await page.waitForTimeout(200);
  await page.getByRole('combobox').press('ArrowDown');
  await page.waitForTimeout(200);
  await page.getByLabel('Cancel').click();
  await page.waitForTimeout(500);
  await page.locator('(//td[contains(@class, "e-rowcell")])[8]').click();
  await page.waitForTimeout(200);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/833218/

test('23-BUG-833218-collapse task', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/833218-custom-adaptor');
  await page.waitForTimeout(500);
  await page.getByLabel('61 Column Header Task ID').locator('span').first().click();
  await page.waitForTimeout(500);
  await page.getByLabel('73 Column Header Task ID').locator('span').first().click();
  await page.waitForTimeout(500);
  await page.getByLabel('85 Column Header Task ID').locator('span').first().click();
  await page.waitForTimeout(500);
  await page.getByLabel('85 Column Header Task ID').locator('span').first().click();
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGanttChart_gridcontrol_content_table"]/tbody/tr[33]/td[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-BUG-833218-collapsed task child record', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/833218-custom-adaptor');
  await page.waitForTimeout(500);
  await page.getByLabel('5 Column Header Task ID', { exact: true }).locator('span').nth(1).click();
  await page.waitForTimeout(500);
  await page.getByLabel('17 Column Header Task ID').locator('span').nth(1).click();
  await page.waitForTimeout(500);
  await page.getByLabel('29 Column Header Task ID').locator('span').nth(1).click();
  await page.waitForTimeout(500);
  await page.getByLabel('29 Column Header Task ID').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/854143

test('25-Zoom out when top tier is day and bottom is hour', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/854143-Timeline');
  await page.waitForTimeout(1500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.waitForTimeout(300);
  await page.locator('#Gantt_zoomout').click();
  await page.waitForTimeout(500);
  await page.locator('#Gantt_zoomout').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Zoom to fit when top tier is day and bottom is hour', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/854143-Timeline');
  await page.waitForTimeout(1500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.waitForTimeout(300);
  await page.locator('#Gantt_zoomout').click();
  await page.waitForTimeout(500);
  await page.locator('#Gantt_zoomtofit').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Zoom in when top tier is day and bottom is hour', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/854143-Timeline');
  await page.waitForTimeout(1500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[2]').click();
  await page.waitForTimeout(300);
  await page.locator('#Gantt_zoomin').click();
  await page.waitForTimeout(1000);
  await page.locator('#Gantt_zoomin').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-scrolling rows 1000 records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/864306-FrozenColumn');
  await page.waitForTimeout(1500);
  await page.locator('//*[@id="Scroll_Rows"]').click();
  await page.waitForTimeout(3000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-scrolling rows 2500 records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/864306-FrozenColumn');
  await page.waitForTimeout(1500);
  await page.locator('//span[contains(@class, "e-ddl e-lib e-input")]').click();
  await page.waitForTimeout(500);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  await page.locator('//*[@id="Scroll_Rows"]').click();
  await page.waitForTimeout(4000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-scrolling rows 5000 records', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/864306-FrozenColumn');
  await page.waitForTimeout(1500);
  await page.locator('//span[contains(@class, "e-ddl e-lib e-input")]').click();
  await page.waitForTimeout(500);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(100);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(100);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="Scroll_Rows"]').click();
  await page.waitForTimeout(9000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-Console error when loading data dynamically', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/GanttResourceGUID');
  await page.waitForTimeout(3000);
  await page.locator('(//button[contains(@class, "e-control e-btn e-lib col-1")])').click();
  await page.waitForTimeout(3000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Console error when loading data dynamically', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/GanttResourceINT');
  await page.waitForTimeout(1000);
  await page.locator('(//button[contains(@class, "e-control e-btn e-lib col-1")])').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Gann chart without parentID field', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/ParentID-field');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/867122/

test('34-Change to resourceview and load data', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/GanttResourceINT');
  await page.waitForTimeout(1000);
  await page.locator('(//span[contains(@class, "e-switch-on")])').click();
  await page.waitForTimeout(1000);
  await page.locator('(//button[contains(@class, "e-control e-btn")])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Change to resourceview and load data', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/GanttResourceINT');
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-switch-on")])').click();
  await page.waitForTimeout(500);
  await page.locator('(//button[contains(@class, "e-control e-btn")])[1]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class, "e-switch-off")])').click();
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Scroll to taskbar in virtual sample', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/virtual');
  await page.waitForTimeout(1500);
  await page.locator('#ScrollToTask').click();
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Scroll to taskbar in Guid virtual sample', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/GuidVirtual');
  await page.waitForTimeout(1000);
  await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
  await page.waitForTimeout(500);
  //scroll to taskbar
  await page.keyboard.type("ScrollToTaskbar");
  await page.waitForTimeout(2000);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-BLAZ-27961-Issue in dialog box', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-20860');
  await page.waitForTimeout(500);
  //Select the parent taskbar
  await page.locator('(//td[contains(@class,"rowcell")])[2]').click();
  await page.waitForTimeout(500);
  //Click the Edit button on the toolbar
  await page.locator('(//span[contains(@class,"edit")])').click();
  await page.waitForTimeout(500);
  //Click dependency
  await page.locator('(//div[contains(@class,"e-tab-text")])[2]').click();
  await page.waitForTimeout(800);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/882751/
test('39-Exception thrown when right click on empty row', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-882751');
  await page.waitForTimeout(500);
  //Right click on the empty row to highlight the context menu
  await page.mouse.click(95, 234, {
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Screenshot validation-There should be no context menu shown when the action is performed
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/890733
test('40-BUG-890733-Exception is thrown when adding child', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-890733');
  await page.waitForTimeout(500);
  //Right click on the child record to open the context
  await page.locator('(//td[contains(@class,"rowcell")])[8]').click({
    button: 'right'
  });
  await page.waitForTimeout(1000);
  //Click the Add button 
  await page.locator("(//li[text()='Add'])").click();
  await page.waitForTimeout(500);
  //Click Child to add child record
  await page.locator("(//li[text()='Child'])").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Child record is added and visible on both grid and chart side.
  expect(await page.locator('.e-gantt').screenshot({ mask: [page.locator("(//td[contains(@aria-colindex,'1')])")], maskColor: "#C0C0C0" })).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://syncfusion.atlassian.net/browse/BLAZ-17972

// test.fixme('41-BLAZ-17972', async ({ page }, testInfo) => {
//   await page.goto(Helper.baseUrlserver + '/BLAZ-17972');
//   await page.waitForTimeout(1000);
//   //  Press the button to download the Excel file
//   const [download] = await Promise.all([
//     page.waitForEvent('download'),
//     await page.locator("#GanttContainer_excelexport").click()
//   ]);
//   await page.waitForTimeout(500);
//   // Get the excel file name with path
//   const path = "./tests/CR_Issues/ExcelExportFiles-Diff/ActualExport/BLAZ-17972/" + download.suggestedFilename();
//   await download.saveAs(path);
//   await page.waitForTimeout(500);
//   // attach the downloaded file to the report ( This is the playwright event to download the Excel File)
//   await testInfo.attach('downloaded', { path: path });
//   await page.waitForTimeout(500);
//   // Read the Expected and Actual Excel Export File's data and store it in String format
//   const ExpectedExportFile = "./tests/CR_Issues/ExcelExportFiles-Diff/ExpectedExport/BLAZ-17972/Gantt.xlsx";
//   await page.waitForTimeout(500);
//   //Now navigate to spreadsheet component 

//   await page.goto("https://ej2.syncfusion.com/demos/#/fluent2/spreadsheet/default.html");
//   await page.waitForTimeout(3000);

//   //Click on File 
//   await page.locator("(//li[contains(@aria-label, 'File')])[1]").click();
//   await page.waitForTimeout(2000);

//   //Listen for the File Chooser dialog Event 
//   page.on("filechooser", async (fileChooser) => {
//     ////using .setFiles() to upload the desired files - Here, [ExpectedExportFile] is the const where I have designated the path of the Export File I want to upload 
//     await fileChooser.setFiles([ExpectedExportFile])
//   });

//   //Now click the Open option which will open the file chooser dialog and wait for the upload to be done 
//   await page.locator("(//li[contains(@aria-label, 'Open')])[1]").click({ force: true });
//   await page.waitForTimeout(2000);
//   //Screenshot 
//   expect(await page.locator("(//div[contains(@class,'e-sheet')])[1]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });


//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/885111

test('42-885111 Segment event trigger issue', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-885111');
  await page.waitForTimeout(500);
  await page.locator('(//div[contains(@class,"e-segmented-taskbar")])[5]').click({ force: true });
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.waitForTimeout(500);
  await page.mouse.move(1085, 210);
  await page.waitForTimeout(600);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  expect(await page.locator("xpath=(//div[contains(@class,'Event')])[1]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://syncfusion.atlassian.net/browse/BLAZ-26005

test('43-26005 Editing progess value', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-26005');
  await page.waitForTimeout(500);
  //Resizing
  await page.locator('(//div[contains(@class,"e-child-progress-resizer")])[2]').click();
  await page.waitForTimeout(200);
  await page.mouse.down();
  await page.waitForTimeout(300);
  await page.mouse.move(720, 310);
  await page.waitForTimeout(600);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  await page.locator('(//span[text()="Concept approval"])[1]').click();
  await page.waitForTimeout(500);
  expect(await page.locator("xpath=(//div[contains(@class,'Event')])[1]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/829028

test('44-BUG-829028-Indent and outdent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-829028');
  await page.waitForTimeout(500);
  //Right click on the child record to open the context
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[2]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  //Click the indent
  await page.locator("#Gantt_cmenu_Indent").click();
  await page.waitForTimeout(1200);
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  //Click the outdent
  await page.locator("#Gantt_cmenu_Outdent").click();
  await page.waitForTimeout(1000);
  //Parent ID will display
  expect(await page.locator("xpath=(//div[contains(@class,'Event')])[1]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('45-BUG-829028-Indent and outdent', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-829028');
  await page.waitForTimeout(500);
  //Right click on the child record to open the context
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[2]').click();
  await page.waitForTimeout(300);
  //Click the indent
  await page.locator("#Gantt_indent").click();
  await page.waitForTimeout(600);
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').click();
  await page.waitForTimeout(300);
  //Click the outdent
  await page.locator("#Gantt_outdent").click();
  await page.waitForTimeout(800);
  //Parent ID will display
  expect(await page.locator("xpath=(//div[contains(@class,'Event')])[1]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/881809

test('46-881809 Removing all resources through dialog', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-881809');
  await page.waitForTimeout(1000);
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[5]').dblclick();
  await page.waitForTimeout(800);
  await page.locator('(//div[contains(@class,"e-tab-text")])[2]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[contains(@class,"e-frame e-icons e-check ")])[1]').click();
  await page.waitForTimeout(300);
  await page.locator('(//span[contains(@class,"e-frame e-icons e-check ")])[1]').click();
  await page.waitForTimeout(300);
  await page.locator('(//button[text()="Save"])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator("xpath=(//div[contains(@class,'Event')])[1]").screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/900583
test('47-BUG-900583-Spinner showing issue after render', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-900583');
  await page.waitForTimeout(1000);
  //Screenshot validation-Spinner does not render on initial load.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/900847
test('48-BUG-900847-Spinner showing after data is rendered', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-900847');
  await page.waitForTimeout(1000);
  //Screenshot validation-Spinner does not render after data is loaded.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/905442
test('49-BUG-905442-DataAnnotations are not working properly', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-905442');
  await page.waitForTimeout(500);
  //Double click the records
  await page.locator('(//div[contains(@class," e-segmented-taskbar")])[1]').dblclick();
  await page.waitForTimeout(800);
  //Click the segement
  await page.locator('(//div[contains(@class,"e-tab-text")])[3]').click();
  await page.waitForTimeout(1500);
  //Screenshot validation-Segment is shown properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/905442
test('50-BUG-905442- DataAnnotations are not working properly', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-905442');
  await page.waitForTimeout(1000);
  //Double click the child taskbar
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner-div e-gantt-child-taskbar ")])[7]').dblclick();
  await page.waitForTimeout(800);
  //Click the segement
  await page.locator('(//div[contains(@class,"e-tab-text")])[3]').click();
  await page.waitForTimeout(1500);
  //Screenshot validation-Segment without the task is shown
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/875871/?view=edit

test('51-BUG-875871-GanttTaskFields CssClass Mapping does not work', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-875871');
  await page.waitForTimeout(300);
  // Wait for the element containing class 'task_A' to be visible
  await page.waitForSelector("(//div[contains(@class,'task_A')])[1]");
  // Locate the taskbar with 'task_A' class
  const locate = page.locator("(//div[contains(@class,'task_A')])[1]");
  // Check if the element has the class 'task_A'
  await expect(locate).toHaveClass(/task_A/);  // Or 'task_A' if you want an exact match
  await page.waitForTimeout(500);  // You can consider replacing this with a more specific wait condition

  // Locate the second taskbar with class 'task_B'
  const locate2 = page.locator("(//div[contains(@class,'task_B')])[1]");
  // Check if the element has the class 'task_B'
  await expect(locate2).toHaveClass(/task_B/);  // Or 'task_B' if you want an exact match
  await page.waitForTimeout(300);
  // Screenshot validation - Records are updated properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/933402
test('52-Incorrect decimal value update in duration column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-933402');
  await page.waitForTimeout(500);
  await page.mouse.down();
  await page.mouse.click(1386, 129);
  await page.waitForTimeout(500);
  await page.mouse.move(1386, 129);
  await page.waitForTimeout(500);
  await page.mouse.down();
  await page.waitForTimeout(1000);
  //Screenshot validation-Segment is shown properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/929870
test('53-Dragging and dropping the taskbar with a minute duration', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-929870');
  await page.waitForTimeout(2000);
  await page.locator('(//div[contains(@class, "e-gantt-child-taskbar-inner-div e-gantt-child-taskbar ")])[1]').click();
  await page.waitForTimeout(1000);
  await page.mouse.down();
  await page.waitForTimeout(500);
  await page.mouse.move(455, 125);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.locator('(//div[contains(@class,"e-gantt-child-taskbar-inner")])[1]').hover();
  await page.waitForTimeout(1000);
  //Screenshot validation-
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/927592
test('54-EditTemplate is not working for the progress column', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-905442');
  await page.waitForTimeout(500);
  //Click the record on the grid side of the component
  await page.locator('(//td[contains(@class,"rowcell")])[14]').click();
  await page.waitForTimeout(500);
  //Click the Edit button on the toolbar
  await page.locator('(//span[contains(@class,"e-tbar-btn-text")])[2]').click();
  await page.waitForTimeout(500);
  //Click the progress to change the value
  await page.locator('(//span[contains(@class,"input")])[5]').click();
  await page.waitForTimeout(500);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  //save button
  await page.locator("(//button[text()='Save'])").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-Progress value is updated
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/936386
test('55-Resolve Exception Thrown on Initial Load', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-936386');
  await page.waitForTimeout(2000);
  //Screenshot validation-No console error is thrown on initial load
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});


//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/940774
test('56-In resource view, the parent task cannot be moved using drag and drop', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-940774');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-940774' });
  await page.waitForTimeout(1500);
  //click the martin tamer parent task row drag and drop icon 
  await page.locator('(//td[contains(@class, "e-rowdragdrop")])[1]').click();
  await page.waitForTimeout(1000);
  await page.mouse.down();
  await page.waitForTimeout(500);
  await page.mouse.move(53, 157);
  await page.mouse.move(57, 284);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  //martin tamer parent task should be dragged and dropped 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});


//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942159
test('57-An exception is thrown after clicking delete following a row drag', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-942159');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-942159' });
  await page.waitForTimeout(1500);
  //drag 2 nd row and drop in the same row 
  await page.locator('xpath=//*[@aria-label="2 Column Header ID"]').click();
  await page.waitForTimeout(1000);
  await page.mouse.down();
  await page.waitForTimeout(500);
  await page.mouse.move(97, 201);
  await page.mouse.move(221, 205);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  //click the delete button in toolbar
  await page.locator('(//button[contains(@aria-label, "Delete")])[1]').click();
  await page.waitForTimeout(1000);
  //task should be deleted without console error 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.01 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/942626
test('58-942626-Cell remains focused', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-942626');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-942626' });
  await page.waitForTimeout(2000);
  //Double click to cell edit 
  await page.locator("(//td[contains(@class,'e-rowcell')])[8]").dblclick();
  await page.waitForTimeout(1000);
  //Drag the record
  await page.mouse.down();
  await page.waitForTimeout(500);
  await page.mouse.move(50, 161);
  await page.mouse.move(50, 204);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(1000);
  //Screenshot validation-The cell remains focused.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/950590
test('59-950590-adding a record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-950590');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-950590' });
  await page.waitForTimeout(2000);
  //Click Add Row button on the toolbar
  await page.locator("(//button[text()='Add Row'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-The record added to the appropriate list and not as before as it was added above.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/954018
test('60-954018-Numeric Edit with decimal values issue', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-954018');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-954018' });
  await page.waitForTimeout(2000);
  //Click Add  button on the toolbar
  await page.locator("(//span[text()='Add'])[1]").click();
  await page.waitForTimeout(500);
  //Select the custom column
  await page.locator("(//div[contains(@class,'e-tab-text')])[3]").click();
  await page.waitForTimeout(500);
  //Select custom column
  await page.locator("(//input[contains(@class,'e-control')])[3]").click();
  await page.waitForTimeout(500);
  //Click the custom column to edit
  await page.keyboard.type("1.4");
  await page.waitForTimeout(2000);
  //Screenshot validation-Numeric Edit with decimal values working fine
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/958064
test('61-958064-Fix Indent Issue in Context Menu', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-958064');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-958064' });
  await page.waitForTimeout(2000);
  //Click disable dependency 
  await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
  await page.waitForTimeout(500);
  //Right click the 4 th row
  await page.locator("(//td[contains(@class,'e-rowcell')])[19]").click({ button: 'right' });
  await page.waitForTimeout(1000);
  //Click the indent button in the context menu
  await page.locator("(//li[text()='Indent'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-Record is indented properly
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/958062
test('62-958062-Newly Added Task via Context Menu Not Rendered', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-958062');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-958062' });
  await page.waitForTimeout(2000);
  //Click disable dependency 
  await page.locator("(//button[text()='Disable Predecessor'])[1]").click();
  await page.waitForTimeout(500);
  //Right click the 4 th row
  await page.locator("(//td[contains(@class,'e-rowcell')])[19]").click({ button: 'right' });
  await page.waitForTimeout(1000);
  //Click the indent button in the context menu
  await page.locator("(//li[text()='Add'])[1]").click();
  await page.waitForTimeout(500);
  //Select Above
  await page.locator("(//li[text()='Above'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-The records are rendered properly after adding a new task via context menu
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/957825
test('63-Progress value in the TaskbarEdited event args returns null', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-957825');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-957825' });
  await page.waitForTimeout(2000);
  //Resize
  await page.mouse.move(352, 164);
  await page.mouse.down();
  await page.waitForTimeout(500);
  await page.mouse.move(352, 164);
  await page.mouse.move(343, 160);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(2000);
  //Screenshot validation-The resize of the 3rd taskbar is moved
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/957268
test('64-Expand collapse icon missing issue', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-957268');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-957268' });
  await page.waitForTimeout(2000);
  //Drag and drop the connector line
  const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[1]");
  const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[2]");
  if (src && dst) {
    const src_bound = await src.boundingBox();
    const dst_bound = await dst.boundingBox();
    if (src_bound && dst_bound) {
      await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
      await page.mouse.down();
      await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
      await page.mouse.up();
      await page.waitForTimeout(5000);
    }
  }
  //Add click 
  await page.locator("(//span[text()='Add'])[1]").click();
  await page.waitForTimeout(1000);
  //Click the save button
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(2000);
  //Screenshot validation-New record is added and the expand collapse icon is visible
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/957250
test('65-957250-Row Drag drop issue when dragging last record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-957250');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-957250' });
  await page.waitForTimeout(2000);
  //Drag and drop
  await page.mouse.move(51, 446);
  await page.mouse.down();
  await page.waitForTimeout(500);
  await page.mouse.move(51, 446);
  await page.mouse.move(50, 469);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(2000);
  //Screenshot validation-No script error is thrown
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/957214
test('66-957214-BeforeCopyPaste event not triggering when using ctrl+c or ctrl+v', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-957214');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-957214' });
  await page.waitForTimeout(2000);
  await page.locator('(//td[contains(@class,"e-rowcell ")])[2]').click();
  await page.waitForTimeout(500);
  //Press the to copy the record
  await page.keyboard.press('Control+C');
  await page.waitForTimeout(300);
  //Press the Paste
  await page.keyboard.press('Control+V');
  await page.waitForTimeout(2000);
  //Screenshot validation-The BeforeCopyPaste event is triggered and the record is copied and pasted successfully
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/938335
test('67-938335-Dependency Not Working When Task ID is Alphanumeric', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-938335');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-938335' });
  await page.waitForTimeout(2000);
  //Screenshot validation-It is still a limitation that the dependency is not working when the task ID is alphanumeric.
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/957209
test('68-957209-Row Drag drop issue when dragging last record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-957209');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-957209' });
  await page.waitForTimeout(2000);
  //Drag and drop
  await page.mouse.move(51, 446);
  await page.mouse.down();
  await page.waitForTimeout(500);
  await page.mouse.move(51, 446);
  await page.mouse.move(50, 469);
  await page.waitForTimeout(500);
  await page.mouse.up();
  await page.waitForTimeout(2000);
  //Screenshot validation-No script error is thrown
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 92 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/965457
test('69-Edit form not saved even after drag and drop', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-965457');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-965457' });
  await page.waitForTimeout(1000);
  await page.locator("(//span[text()='Finalize Planning'])[1]").dblclick();
  await page.waitForTimeout(300);
  //Drag and drop the connector line
  const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[4]");
  const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[8]");
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
  //Screenshot validation-New record is added and the expand collapse icon is visible
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/959867
test('70-957209-Row Drag drop issue when dragging last record', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-959867');
  test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/BLAZ-959867' });
  await page.waitForTimeout(1000);
  //Screenshot validation
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/964738
test('71-Verify PreviousData in console log during RowUpdating', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-964738');
  await page.waitForTimeout(1000);
  await page.locator("(//div[contains(@class,'e-gantt-child')])[5]").dblclick();
  await page.waitForTimeout(800);
  await page.locator('#Duration').fill("5 days");
  await page.waitForTimeout(200);
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(1000);
  const spanElement = page.locator('//span[@message="" and text()="4"]');
  await expect(spanElement).toBeVisible();
  await expect(spanElement).toHaveText('4');
  await page.waitForTimeout(300);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/964731
test('72-Check dependency line in virtual', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-964731');
  await page.waitForTimeout(2000);
  const src = page.locator("(//div[contains(@class,'e-right-connectorpoint')])[1]");
  const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[2]");
  if (src && dst) {
    const src_bound = await src.boundingBox();
    const dst_bound = await dst.boundingBox();
    if (src_bound && dst_bound) {
      await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2, { steps: 150 });
      await page.mouse.down();
      await page.waitForTimeout(1000);
      await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 250 });
      await page.waitForTimeout(2000);
      await page.mouse.up();
      await page.waitForTimeout(1000);
    }
  }
  await page.locator(".e-chart-scroll-container.e-content").click();
  await page.mouse.wheel(0, 2261)
  await page.waitForTimeout(2000);
  await page.locator(".e-chart-scroll-container.e-content").click();
  await page.mouse.wheel(0, -2661);
  await page.waitForTimeout(2000);
  await page.locator(".e-content.e-yscroll").click();
  await page.mouse.wheel(2354, 0);
  await page.waitForTimeout(2000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/968823
test('74-Delete record using drag selection', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-968823');
  await page.waitForTimeout(3000);
  // Wait for the data to load
  await page.waitForSelector('.e-treegrid .e-row', { state: 'visible', timeout: 500 });

  // Select records from 1 to 11 using drag selection
  // Find the first row to start selection
  const firstRow = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]').first();
  await expect(firstRow).toBeVisible({ timeout: 500 });

  // Get position of first row
  const firstRowBoundingBox = await firstRow.boundingBox();
  if (!firstRowBoundingBox) {
    throw new Error('Could not determine position of first row');
  }

  // Calculate start position (middle of the first cell)
  const startX = firstRowBoundingBox.x + firstRowBoundingBox.width / 2;
  const startY = firstRowBoundingBox.y + firstRowBoundingBox.height / 2;

  // Find the 11th row to end selection
  const eleventhRow = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]').nth(10); // 0-based index
  await expect(eleventhRow).toBeVisible({ timeout: 500 });

  // Get position of 11th row
  const eleventhRowBoundingBox = await eleventhRow.boundingBox();
  if (!eleventhRowBoundingBox) {
    throw new Error('Could not determine position of 11th row');
  }

  // Calculate end position (middle of the 11th cell)
  const endX = eleventhRowBoundingBox.x + eleventhRowBoundingBox.width / 2;
  const endY = eleventhRowBoundingBox.y + eleventhRowBoundingBox.height / 2;

  // Perform drag selection
  await page.mouse.move(startX, startY);
  await page.mouse.down();
  // Use steps for smoother drag operation
  await page.mouse.move(endX, endY, { steps: 15 });
  await page.mouse.up();

  // Wait for selection to complete
  await page.waitForTimeout(1500);

  // Take screenshot of selection state
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });

  // Verify rows are selected (should find around 11 selected rows)
  const selectedRows = page.locator('.e-treegrid .e-selectionbackground');
  await expect(selectedRows).toHaveCount(99, { timeout: 500 });

  //Right click on one of the selected rows to open context menu
  await page.mouse.click(endX, endY, { button: 'right' });
  await page.waitForTimeout(1000);

  // Wait for context menu to appear
  await page.waitForSelector('.e-contextmenu', { state: 'visible', timeout: 1000 });

  // Find and click the Delete option
  const deleteOption = page.locator('.e-contextmenu .e-menu-item').filter({ hasText: 'Delete Task' });
  await expect(deleteOption).toBeVisible({ timeout: 800 });
  await deleteOption.click();

  // Wait for deletion to complete
  await page.waitForTimeout(2000);
  // Take screenshot of final state
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('75-Delete record using drag selection-toolbar', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-968823');
  await page.waitForTimeout(3000);
  await page.waitForSelector('.e-treegrid .e-row', { state: 'visible', timeout: 500 });

  // Step 2: Select records from 1 to 11 using drag selection
  // Find the first row to start selection
  const firstRow = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]').first();
  await expect(firstRow).toBeVisible({ timeout: 500 });

  // Get position of first row
  const firstRowBoundingBox = await firstRow.boundingBox();
  if (!firstRowBoundingBox) {
    throw new Error('Could not determine position of first row');
  }

  // Calculate start position (middle of the first cell)
  const startX = firstRowBoundingBox.x + firstRowBoundingBox.width / 2;
  const startY = firstRowBoundingBox.y + firstRowBoundingBox.height / 2;

  // Find the 11th row to end selection
  const eleventhRow = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]').nth(10); // 0-based index
  await expect(eleventhRow).toBeVisible({ timeout: 500 });

  // Get position of 11th row
  const eleventhRowBoundingBox = await eleventhRow.boundingBox();
  if (!eleventhRowBoundingBox) {
    throw new Error('Could not determine position of 11th row');
  }

  // Calculate end position (middle of the 11th cell)
  const endX = eleventhRowBoundingBox.x + eleventhRowBoundingBox.width / 2;
  const endY = eleventhRowBoundingBox.y + eleventhRowBoundingBox.height / 2;

  // Perform drag selection
  await page.mouse.move(startX, startY);
  await page.mouse.down();
  // Use steps for smoother drag operation
  await page.mouse.move(endX, endY, { steps: 15 });
  await page.mouse.up();

  // Wait for selection to complete
  await page.waitForTimeout(1500);

  // Take screenshot of selection state
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });

  // Verify rows are selected (should find around 11 selected rows)
  const selectedRows = page.locator('.e-treegrid .e-selectionbackground');
  await expect(selectedRows).toHaveCount(99, { timeout: 500 });

  await page.locator("#Gantt_delete").click();
  await page.waitForTimeout(2000);
  // Take screenshot of final state
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/983481
test('76-Exception on Expand with ExpandState', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-983481');
  await page.waitForTimeout(500);
  await page.locator('.e-icons.e-treegridcollapse').click();
  await page.waitForTimeout(300);
  await page.locator('.e-icons.e-treegridcollapse').click();
  await page.waitForTimeout(300);
  await page.locator('.e-icons.e-treegridcollapse').click();
  await page.waitForTimeout(200);
  await page.locator('.e-icons.e-treegridcollapse').click();
  await page.waitForTimeout(300);
  await page.locator('.e-icons.e-treegridcollapse').click();
  await page.waitForTimeout(500);
  // Take screenshot 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/983748
test('77-Exception Thrown on PDF Export', async ({ page }, testInfo) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-983748');
  await page.waitForTimeout(500);
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator("#CustomPdfExport").click()
  ]);
  await page.waitForTimeout(1000);
  // Define the Actual Export File Path with proper name           
  const path = "./tests/CR_Issues/PdfExportFiles/BLAZ-983748/" + download.suggestedFilename();
  await download.saveAs(path);
  await page.waitForTimeout(500);
  // attach the downloaded file to the report ( This is the playwright event to download the File)       
  await testInfo.attach('downloaded', { path: path });
  await page.waitForTimeout(1500);
  //The "pdf" here is the package that converts the file to PNG format 
  const doc = await pdf(path)
  await page.waitForTimeout(500);
  expect(doc.length).toBe(1);
  //Converts the 1 pages to image format and takes snapshot     
  for await (const page of doc) {
    //Screenshot validation-theme should be fluent
    await expect(page).toMatchSnapshot({ maxDiffPixels: 100 });
  }
});

// //https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/983755
// test('78-Gantt chart selection and collapse behavior', async ({ page }) => {
//   await page.goto(Helper.baseUrlserver + '/BLAZ-983755');
//   await page.waitForTimeout(500);
//   await page.getByRole('gridcell', { name: 'Identify Site location' }).click({
//     modifiers: ['ControlOrMeta']
//   });
//   await page.waitForTimeout(200);
//   await page.getByRole('gridcell', { name: 'Perform soil test' }).click({
//     modifiers: ['ControlOrMeta']
//   });
//   await page.waitForTimeout(200);
//   await page.locator('.e-icons.e-treegridexpand').first().click();
//   await page.waitForTimeout(200);
//   await page.locator('.e-icons.e-treegridcollapse').first().click();
//   await page.waitForTimeout(500);
//   // Take screenshot 
//   expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
// });

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/984203
test('79-ActionFailure Event Not Triggering Properly', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-984203');
  await page.waitForTimeout(500);
  // Take screenshot 
  expect(
    await page.locator('.e-gantt').screenshot({
      mask: [page.locator('.e-timeline-header-container ')],
      maskColor: '#d55348'
    })
  ).toMatchSnapshot({
    maxDiffPixels: 100
  });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/989225
test('80-Segment collection not updated after taskbar split or merge', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-989225');
  await page.waitForTimeout(500);
  await page.locator('.e-gantt-child-taskbar-inner-div').first().click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.getByRole('menuitem', { name: 'Split Task' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Select Row' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('progressbar', { name: 'taskbar-label' }).nth(1).click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  expect(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.getByRole('menuitem', { name: 'Merge Task' }).click();
  await page.waitForTimeout(200);
  await page.getByRole('menuitem', { name: 'Left' }).click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Select Row' }).click();
  await page.waitForTimeout(1000);
  // Take screenshot 
  expect(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/989272  /BLAZ-989272
test('81-Context menu split task option click not working properly', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-989272');
  await page.locator('.e-gantt-child-progressbar-inner-div').first().click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  await page.getByRole('menuitem', { name: 'Split Task' }).click();
  await page.waitForTimeout(200);
  await page.locator('.e-gantt-child-progressbar-inner-div').first().click({
    button: 'right'
  });
  await page.waitForTimeout(200);
  // Take screenshot 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/992507  /BLAZ-992507
test('82-Throws exception when adding record using AddRecordAsync method', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-992507');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Add Row' }).click();
  await page.waitForTimeout(1000);
  // Take screenshot 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/992654  /BLAZ-992654
test('83-Exception thrown when using delete', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-992654');
  await page.waitForTimeout(1000);
  // CTRL + Click Task #6, #8, #9
  await page.getByRole('gridcell', { name: '6 Column Header ID', exact: true }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.waitForTimeout(500);
  await page.getByRole('gridcell', { name: '8 Column Header ID', exact: true }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.waitForTimeout(500);
  await page.getByRole('gridcell', { name: '9 Column Header ID', exact: true }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.waitForTimeout(500);
  // SHIFT + Click Task #10
  await page.getByRole('gridcell', { name: '10 Column Header ID' }).click({
    modifiers: ['Shift']
  });
  await page.waitForTimeout(500);
  //Click Delete toolbar item
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(1000);
  // Take screenshot 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/994380  /BLAZ-994380
test('84-Background color is incorrectly applied during expand/collapse', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-994380');
  await page.waitForTimeout(1000);
  //Click  collapse of 1st parent class
  await page.locator('span').nth(5).click();
  await page.waitForTimeout(300);
  //Click collapse of 5nd parent class
  await page.locator('.e-icons.e-treegridexpand').click();
  await page.waitForTimeout(300);
  //Click Expand of 5nd parent class
  await page.locator('.e-rowcell.e-lastrowcell > .e-treecolumn-container > .e-icons.e-treegridcollapse').click();
  await page.waitForTimeout(1000);
  // Take screenshot 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/993746
test('85-Select 1-40 using selection (Indent)', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-993746');
  await page.waitForTimeout(1500);
  // Click row 1 (Task ID 1)
  const firstCell = page.getByRole('gridcell', { name: '1 Column Header ID', exact: true });
  await firstCell.scrollIntoViewIfNeeded();
  await firstCell.click();
  await page.waitForTimeout(300);
  // Scroll until Task ID 40 is rendered, then Shift+click it to select range 1..40
  const content = page.locator('.e-content.e-yscroll').first();
  const targetCell = page.getByRole('gridcell', { name: '40 Column Header ID', exact: true });
  for (let i = 0; i < 20; i++) {
    if (await targetCell.count() > 0) break;
    await content.hover();
    await page.mouse.wheel(0, 800);
    await page.waitForTimeout(500);
  }
  await targetCell.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await targetCell.click({ modifiers: ['Shift'] });
  await page.waitForTimeout(800);
  //Click Indent
  await page.getByRole('button', { name: 'Indent' }).click();
  await page.waitForTimeout(1000);
  expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/993746
test('85-Select 1-40 using selection (Outdent)', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-993746');
  await page.waitForTimeout(1500);
  // Click row 1 (Task ID 1)
  const firstCell = page.getByRole('gridcell', { name: '1 Column Header ID', exact: true });
  await firstCell.scrollIntoViewIfNeeded();
  await firstCell.click();
  await page.waitForTimeout(300);
  // Scroll until Task ID 40 is rendered, then Shift+click it to select range 1..40
  const content = page.locator('.e-content.e-yscroll').first();
  const targetCell = page.getByRole('gridcell', { name: '40 Column Header ID', exact: true });
  for (let i = 0; i < 20; i++) {
    if (await targetCell.count() > 0) break;
    await content.hover();
    await page.mouse.wheel(0, 800);
    await page.waitForTimeout(500);
  }
  await targetCell.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await targetCell.click({ modifiers: ['Shift'] });
  await page.waitForTimeout(800);
  //Click Outdent
  await page.getByRole('button', { name: 'Outdent' }).click();
  await page.waitForTimeout(1000);
  expect.soft(await page.locator('html').screenshot()).toMatchSnapshot({ maxDiffPixels: 120 });
});

//Case1
//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/988611
test('86-Multiple row selection with copy functionality', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-957209');
  await page.waitForTimeout(1000);
  //Select a record
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
  await page.waitForTimeout(500);
  //Scroll down to see more records
  const scrollContainer = page.locator('.e-content.e-yscroll');
  await scrollContainer.evaluate(element => {
    element.scrollBy(0, 400);
  });
  await page.waitForTimeout(1000);
  const targetRecord = page.locator('(//td[contains(@class,"e-rowcell")])[30]');
  // Use keyboard.down to hold the Shift key before clicking
  await page.keyboard.down('Shift');
  await targetRecord.click();
  await page.keyboard.up('Shift');
  await page.waitForTimeout(1000);
  //Press Ctrl + C to copy selected records
  await page.keyboard.press('Control+C');
  await page.waitForTimeout(1000);
  // Final screenshot
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Case 2
//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/988611
test('86-Drag selection with copy functionality', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-957209');
  await page.waitForTimeout(1000);
  await page.waitForSelector('.e-treegrid .e-row', { state: 'visible', timeout: 3000 });
  //Locate starting and ending rows for drag selection
  const firstRow = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]').first();
  await expect(firstRow).toBeVisible({ timeout: 1000 });

  const fifthRow = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]').nth(4);
  await expect(fifthRow).toBeVisible({ timeout: 1000 });
  // Get positions for drag operation
  const firstRowBoundingBox = await firstRow.boundingBox();
  const fifthRowBoundingBox = await fifthRow.boundingBox();
  if (!firstRowBoundingBox || !fifthRowBoundingBox) {
    throw new Error('Could not determine row positions for drag selection');
  }
  //Calculate start and end positions for drag selection
  const startX = firstRowBoundingBox.x + firstRowBoundingBox.width / 2;
  const startY = firstRowBoundingBox.y + firstRowBoundingBox.height / 2;

  const endX = fifthRowBoundingBox.x + fifthRowBoundingBox.width / 2;
  const endY = fifthRowBoundingBox.y + fifthRowBoundingBox.height / 2;
  // Perform drag selection
  await page.mouse.move(startX, startY);
  await page.mouse.down();
  await page.mouse.move(endX, endY, { steps: 10 });
  await page.mouse.up();
  await page.waitForTimeout(1000);
  //Press Ctrl+C to copy the selected records
  await page.keyboard.press('Control+C');
  await page.waitForTimeout(1000);
  // Final screenshot
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/988853
test('87-Auto selection when toggle is enabled', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-988853');
  await page.waitForTimeout(1000);
  // Step 1: Scroll to the bottom of the Gantt chart
  const scrollContainer = page.locator('.e-gantt .e-content.e-yscroll');
  await scrollContainer.evaluate(element => {
    element.scrollTop = element.scrollHeight;
  });
  await page.waitForTimeout(1000);
  // Step 2: Click the Add button
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(300);
  // Step 3: Scroll to the last record again
  await scrollContainer.evaluate(element => {
    element.scrollTop = element.scrollHeight;
  });
  await page.waitForTimeout(1000);
  // Step 4: Click on the last record twice
  const lastRow = page.locator('.e-gantt .e-row').last();
  await lastRow.click();
  await page.waitForTimeout(500);
  await lastRow.click();
  await page.waitForTimeout(1000);
  // Final screenshot
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/989024
test('88-Split and merge task using context menu', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-989024');
  await page.waitForTimeout(1000);
  //Find and click a task in the chart area to select it
  //Right click on the selected task to open context menu
  await page.locator('.e-gantt-chart .e-gantt-child-taskbar').first().click({ button: 'right' });
  await page.waitForTimeout(300);
  //Click on Split option in the context menu
  await page.getByRole('menuitem', { name: 'Split Task' }).click();
  await page.waitForTimeout(300);
  //Click on Merge option in the context menu
  await page.locator('.e-gantt-chart .e-gantt-child-taskbar').first().click({ button: 'right' });
  await page.waitForTimeout(300);
  await page.getByRole('menuitem', { name: 'Merge Task' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('menuitem', { name: 'Right' }).click();
  await page.waitForTimeout(500);
  // Take final screenshot 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/969877
test('89-Row update event', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-969877');
  await page.waitForTimeout(500);
  await page.locator("(//div[contains(@class,'e-gantt-child')])[1]").dblclick();
  await page.waitForTimeout(800);
  await page.locator('#EndDate').fill("");
  await page.locator('#EndDate').fill("1/18/2023");
  await page.waitForTimeout(200);
  await page.locator("(//button[text()='Save'])[1]").click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.Event').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/974741
test('90-Predecessor validation', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/methods');
  await page.waitForTimeout(500);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[1]/td[3]').click();
  await page.waitForTimeout(500);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(200);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(200);
  await page.keyboard.press('Insert');
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[8]').dblclick();
  await page.waitForTimeout(200);
  await page.locator('#DataItem___Predecessor').fill('1FS');
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(200);
  await page.locator('//*[@id="treeGridGantt_gridcontrol_content_table"]/tbody/tr[3]/td[8]').dblclick();
  await page.waitForTimeout(200);
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(500);
  await page.keyboard.press('Backspace');
  await page.keyboard.type('1FS,2');
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/971739
test('91-Taskbar resize icon', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/methods');
  await page.waitForTimeout(2000);
  //Click the taskbar to resize
  await page.locator("(//div[contains(@class,'e-taskbar-right-resizer e-icon')])[3]").click();
  await page.waitForTimeout(500);
  //drag the records
  await page.waitForTimeout(1000);
  await page.mouse.down();
  await page.mouse.move(1079, 293);
  await page.waitForTimeout(1000);
  await page.mouse.move(1223, 293);
  await page.waitForTimeout(1000);
  await page.mouse.up();
  await page.waitForTimeout(2000);
  //Screenshot validation-
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/972823
test('92-issue occurs with drag selection', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-968823');

  // Give the grid time to render
  await page.waitForTimeout(3000);

  // Ensure at least one row is visible
  await page.waitForSelector('.e-treegrid .e-row', { state: 'visible', timeout: 2000 });

  // Right-click to show the context menu (as per original repro)
  await page.locator("(//td[contains(@class,'e-rowcell ')])[6]").click({ button: 'right' });

  // If context menu is visible, close it to avoid interfering with drag selection
  const contextMenu = page.locator('.e-contextmenu, .e-dropdown-popup, .e-popup-open');
  if (await contextMenu.first().isVisible()) {
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200); // brief stabilization
  }

  // First row cell in column index 2
  const firstCell = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]').first();
  await expect(firstCell).toBeVisible({ timeout: 2000 });

  // Ensure 11th row's cell is present and scrolled into view
  const eleventhCell = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]').nth(10); // 0-based
  await expect(eleventhCell).toBeVisible({ timeout: 2000 });
  await eleventhCell.scrollIntoViewIfNeeded();

  // Compute drag coordinates from cell bounding boxes
  const firstBox = await firstCell.boundingBox();
  const eleventhBox = await eleventhCell.boundingBox();
  if (!firstBox || !eleventhBox) {
    throw new Error('Could not determine bounding box for drag start/end.');
  }

  const startX = firstBox.x + firstBox.width / 2;
  const startY = firstBox.y + firstBox.height / 2;
  const endX = eleventhBox.x + eleventhBox.width / 2;
  const endY = eleventhBox.y + eleventhBox.height / 2;

  // Drag selection gesture
  await page.mouse.move(startX, startY);
  await page.mouse.down();
  await page.mouse.move(endX, endY, { steps: 15 });
  await page.mouse.up();

  // Allow selection to settle
  await page.waitForTimeout(1000);

  // Helper: count selected unique rows by mapping selected elements to their TR ancestors
  const selectedUniqueRowCount = await page.evaluate(() => {
    const selected = Array.from(document.querySelectorAll('.e-treegrid .e-selectionbackground'));
    const rowIds = new Set<string>();
    for (const el of selected) {
      const tr = el.closest('tr');
      if (tr) {
        const ariaIdx = tr.getAttribute('aria-rowindex');
        if (ariaIdx) {
          rowIds.add(`aria:${ariaIdx}`);
        } else {
          const parent = tr.parentElement;
          if (parent) {
            const idx = Array.prototype.indexOf.call(parent.children, tr);
            rowIds.add(`idx:${idx}`);
          }
        }
      }
    }
    return rowIds.size;
  });

  await expect.poll(() => selectedUniqueRowCount, {
    message: `Expected ~11 rows selected via drag.`,
    timeout: 1500,
  }).toBeGreaterThanOrEqual(11);

  // --- Screenshot stabilization start ---
  const gantt = page.locator('.e-gantt');
  await expect(gantt).toBeVisible({ timeout: 3000 });
  await gantt.scrollIntoViewIfNeeded();

  // Ensure next frames are painted
  await page.evaluate(() => new Promise<void>(r => requestAnimationFrame(() => requestAnimationFrame(() => r()))));

  // Small buffer for icons/images/fonts
  await page.waitForTimeout(600);
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/972233
test('93-Selection on newly added ', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-972233');
  await page.waitForTimeout(2000);
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.waitForTimeout(200);
  await page.locator("(//button[text()='Add Row'])[1]").click();
  await page.waitForTimeout(1000);
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/970115
test('94-Row Cloning Occurs', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/methods');
  await page.waitForTimeout(2000);
  //Double click the taskbar to cell edit
  await page.locator("(//td[contains(@class,'e-rowcell')])[10]").dblclick();
  await page.waitForTimeout(1000);
  //Select the record
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(1000);
  //Screenshot validation-Record is slected properly and no row cloning occurs
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/977188
test('95-977188-AutoCalculateDateScheduling', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-977188');
  await page.waitForTimeout(2000);
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  //Click Update Task 3 on the toolbar
  await page.locator("(//button[text()='Update Task 3'])[1]").click();
  await page.waitForTimeout(1000);
  //Screenshot validation-The parent date is not hardcoded and it is updated based on the child record date
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/977406
test('96-977406-Exception thrown', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-977406');
  await page.waitForTimeout(1000);
  //Double click the cell on the grid side 
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").dblclick();
  await page.waitForTimeout(2000);
  //Screenshot validation-Console error is not thrown after double click any cell on the grid side.
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/983748
test('97-977406-Exception thrown', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-977406');
  await page.waitForTimeout(1000);
  //Double click the cell on the grid side 
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").dblclick();
  await page.waitForTimeout(2000);
  //Screenshot validation-Console error is not thrown after double click any cell on the grid side.
});

//Case 1
//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/1001391
test('98-Case1-1001391', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1001391');
  await page.waitForTimeout(1000);
  //Screenshot for the inital page
  expect(
    await page.locator('.e-gantt').screenshot({
      mask: [page.locator('.e-timeline-header-container ')],
      maskColor: '#d55348'
    })
  ).toMatchSnapshot({
    maxDiffPixels: 100
  });
  //Change the dropdown to A
  await page.locator("(//span[contains(@class,'e-ddl e-lib e-input-group')])").click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Project A' }).click();
  await page.waitForTimeout(1000);
  //Screenshot for Change the dropdown to A
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.waitForTimeout(200);
  //Change the dropdown to B
  await page.locator("(//span[contains(@class,'e-ddl e-lib e-input-group')])").click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Project B' }).click();
  await page.waitForTimeout(1000);
  //Screenshot for Change the dropdown to B
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.waitForTimeout(200);
  //Change the dropdown to C
  await page.locator("(//span[contains(@class,'e-ddl e-lib e-input-group')])").click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Project C' }).click();
  await page.waitForTimeout(1000);
  //Screenshot for Change the dropdown to C
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Case2
//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/1001391
test('98-Case2-1001391', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1001391');
  await page.waitForTimeout(1000);
  //Change the dropdown to A
  await page.locator("(//span[contains(@class,'e-ddl e-lib e-input-group')])").click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Project A' }).click();
  await page.waitForTimeout(1000);
  //Screenshot for Change the dropdown to A
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.waitForTimeout(200);
  //Change the dropdown to A
  await page.locator("(//span[contains(@class,'e-ddl e-lib e-input-group')])").click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Project A' }).click();
  await page.waitForTimeout(1000);
  //Screenshot for Change the dropdown to A
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  //Change the dropdown to B
  await page.locator("(//span[contains(@class,'e-ddl e-lib e-input-group')])").click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Project B' }).click();
  await page.waitForTimeout(1000);
  //Screenshot for Change the dropdown to B
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.waitForTimeout(200);
  //Change the dropdown to B
  await page.locator("(//span[contains(@class,'e-ddl e-lib e-input-group')])").click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Project B' }).click();
  await page.waitForTimeout(1000);
  //Screenshot for Change the dropdown to B
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.waitForTimeout(200);
  //Change the dropdown to C
  await page.locator("(//span[contains(@class,'e-ddl e-lib e-input-group')])").click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Project C' }).click();
  await page.waitForTimeout(1000);
  //Screenshot for Change the dropdown to C
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.waitForTimeout(200);
  //Change the dropdown to C
  await page.locator("(//span[contains(@class,'e-ddl e-lib e-input-group')])").click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Project C' }).click();
  await page.waitForTimeout(1000);
  //Screenshot for Change the dropdown to C
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Case3
//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/1001391
test('98-Case3-1001391', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1001391');
  await page.waitForTimeout(800);
  await page.locator('(//button[text()="Query"])').click();
  await page.waitForTimeout(1000);
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/1003148
test('99-Case1-1003148', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1003148');
  await page.waitForTimeout(1000);
  //Double click the task name planning
  await page.locator('(//td[text()="Planning"])').dblclick();
  await page.waitForTimeout(1000);
  //Validate the screenshot for console error not occurs for planning
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/1003148
test('99-Case2-1003148', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1003148');
  await page.waitForTimeout(1000);
  //Double click the task name Design
  await page.locator('(//td[text()="Design"])').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#StartDate').click();
  await page.waitForTimeout(1000);
  //Validate the screenshot for console error not occurs for planning
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1003293
test('100-1003148', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1003288');
  await page.waitForTimeout(1000);
  //Add 2 new records
  await page.locator('(//span[text()="Add"])').click();
  await page.waitForTimeout(800);
  await page.locator('(//button[text()="Save"])').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[text()="Add"])').click();
  await page.waitForTimeout(800);
  await page.locator('(//button[text()="Save"])').click();
  await page.waitForTimeout(500);
  //Cell edit and save the newly added records
  await page.locator('(//td[text()="New Task 15"])').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___TaskName').fill('New Task');
  await page.waitForTimeout(300);
  await page.locator('#DataItem___TaskName').press('Enter');
  await page.waitForTimeout(300);
  await page.locator('(//td[text()="New Task 14"])').dblclick();
  await page.waitForTimeout(300);
  await page.locator('#DataItem___TaskName').fill('New Task');
  await page.waitForTimeout(300);
  await page.locator('#DataItem___TaskName').press('Enter');
  await page.waitForTimeout(300);
  //Undo till the initial load records appear
  await page.locator('(//span[text()="Undo"])').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[text()="Undo"])').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[text()="Undo"])').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[text()="Undo"])').click();
  await page.waitForTimeout(500);
  //Perform redo action
  await page.locator('(//span[text()="Redo"])').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[text()="Redo"])').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[text()="Redo"])').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[text()="Redo"])').click();
  await page.waitForTimeout(1500);
  //Validate the screenshot for console error not occurs 
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1003288
test('101-1003288', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1003288');
  await page.waitForTimeout(1000);
  //Cell edit and save taskName column
  await page.locator('(//td[text()="Perform soil test"])[1]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___TaskName').fill('New Task updated');
  await page.waitForTimeout(300);
  await page.locator('#DataItem___TaskName').press('Enter');
  await page.waitForTimeout(300);
  //Perform Undo
  await page.locator('(//span[text()="Undo"])').click();
  await page.waitForTimeout(500);
  //Again cell edit the same cell and save
  await page.locator('(//td[text()="Perform soil test"])[1]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___TaskName').fill('New Task Changed');
  await page.waitForTimeout(300);
  await page.locator('#DataItem___TaskName').press('Enter');
  await page.waitForTimeout(1000);
  //Validate the screenshot Edited value has saved
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1003306
test('102-1003306', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5001/BLAZ-1003306');
  await page.waitForTimeout(1000);
  await page.locator('#locale').selectOption('pt-PT');
  await page.waitForTimeout(1000);
  //Validate the screenshot 
  expect(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1005615
test('103-1005615', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1005615');
  await page.waitForTimeout(1000);
  //Screenshot for the inital page
  expect.soft(await page.locator('.e-gantt').screenshot({ mask: [page.locator(".e-timeline-header-container")], maskColor: "#C0C0C0" })).toMatchSnapshot({ maxDiffPixels: 100 });
  //Change the dropdown to A
  await page.locator("(//span[contains(@class,'e-ddl e-lib e-input-group')])").click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Project A' }).click();
  await page.waitForTimeout(1000);
  //Screenshot for Change the dropdown to A
  expect.soft(await page.locator('.e-gantt').screenshot({ mask: [page.locator(".e-timeline-header-container")], maskColor: "#C0C0C0" })).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.waitForTimeout(200);
  //Change the dropdown to B
  await page.locator("(//span[contains(@class,'e-ddl e-lib e-input-group')])").click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Project B' }).click();
  await page.waitForTimeout(1000);
  //Screenshot for Change the dropdown to B
  expect.soft(await page.locator('.e-gantt').screenshot({ mask: [page.locator(".e-timeline-header-container")], maskColor: "#C0C0C0" })).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.waitForTimeout(200);
  //Change the dropdown to C
  await page.locator("(//span[contains(@class,'e-ddl e-lib e-input-group')])").click();
  await page.waitForTimeout(500);
  await page.getByRole('option', { name: 'Project C' }).click();
  await page.waitForTimeout(1000);
  //Screenshot for Change the dropdown to C
  expect.soft(await page.locator('.e-gantt').screenshot({ mask: [page.locator(".e-timeline-header-container")], maskColor: "#C0C0C0" })).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1006307
test('104-1006307', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1006307');
  await page.waitForTimeout(800);
  //Switch to Resource View
  await page.locator('(//span[@class="e-switch-handle"])').click();
  await page.waitForTimeout(1000);
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  //Hover the Child taskbar
  await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").hover();
  await page.waitForTimeout(1000);
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/1006687
test('105-1006307-Case1', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1006687');
  await page.waitForTimeout(800);
  //Edit the first child task name
  await page.locator('(//span[@class="e-treecell"])[2]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___TaskName').fill('New Task');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  //Click undo
  await page.locator('(//span[text()="Undo"])').click();
  await page.waitForTimeout(500);
  // Again Edit the first child task name
  await page.locator('(//span[@class="e-treecell"])[2]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___TaskName').fill('New Task');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  //Validated the screenshot – Redo it as Disabled
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").hover();
  await page.waitForTimeout(1000);
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/1006687
test('105-1006307-Case2', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1006687');
  await page.waitForTimeout(800);
  //Edit the first child task name
  await page.locator('(//span[@class="e-treecell"])[2]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___TaskName').fill('New Task');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  //Click undo
  await page.locator('(//span[text()="Undo"])').click();
  await page.waitForTimeout(500);
  //Click Redo
  await page.locator('(//span[text()="Redo"])').click();
  await page.waitForTimeout(500);
  // Again Edit the first child task name
  await page.locator('(//span[@class="e-treecell"])[2]').dblclick();
  await page.waitForTimeout(500);
  await page.locator('#DataItem___TaskName').fill('New Task');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  //Click undo
  await page.locator('(//span[text()="Undo"])').click();
  await page.waitForTimeout(500);
  //Click Redo
  await page.locator('(//span[text()="Redo"])').click();
  await page.waitForTimeout(500);
  await page.waitForTimeout(1000);
  //Validated the screenshot – Redo it as Disabled
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").hover();
  await page.waitForTimeout(1000);
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1006692
test('106-1006692', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1006692');
  await page.waitForTimeout(800);
  //Collapse the second parent record.
  await page.locator("(//span[contains(@class,'e-treegridexpand')])[2]").click();
  await page.waitForTimeout(500);
  //Click the Add RoW
  await page.locator('(//button[text()="Add Row"])').click();
  await page.waitForTimeout(1000);
  //Validated the screenshot
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[2]").hover();
  await page.waitForTimeout(1000);
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1008865
test('107-1008865', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1008865');
  await page.waitForTimeout(800);
  //Validated the screenshot-Zoom In Get disable
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").hover();
  await page.waitForTimeout(1000);
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1009002
test('108-1009002', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-1009002');
  await page.waitForTimeout(2000);
  // Click the taskbar 
  await page.locator("(//div[contains(@class,'e-gantt-milestone')])[1]").click();
  await page.waitForTimeout(5000);
  // Hover the taskbar 
  await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").hover();
  await page.waitForTimeout(2000);
  //Drag and drop the connector line
  const src = page.locator("(//div[contains(@class,'e-connectorpoint-right')])[3]");
  const dst = page.locator("(//div[contains(@class,'e-connectorpoint-left')])[6]");
  if (src && dst) {
    const src_bound = await src.boundingBox();
    const dst_bound = await dst.boundingBox();
    if (src_bound && dst_bound) {
      await page.mouse.move(src_bound.x + src_bound.width / 2, src_bound.y + src_bound.height / 2);
      await page.mouse.down();
      await page.mouse.move(dst_bound.x + dst_bound.width / 2, dst_bound.y + dst_bound.height / 2, { steps: 30 });
      await page.mouse.up();
      await page.waitForTimeout(5000);
    }
  }
  await page.waitForTimeout(1000);
  //Click the taskbar to resize
  await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").click();
  await page.waitForTimeout(500);
  //drag the records
  await page.waitForTimeout(1000);
  await page.mouse.down();
  await page.mouse.move(890, 224);
  await page.mouse.move(795, 215);
  await page.waitForTimeout(1000);
  await page.mouse.up();
  // Validate date values for the 3rd taskbar after drag action
  await page.waitForTimeout(2000);
  // Get StartDate cell of 3rd row (0-based index 2) - aria-colindex="3"
  const startDateCell = page.locator('.e-treegrid .e-rowcell[aria-colindex="3"]').nth(2);
  // Get EndDate cell of 3rd row (0-based index 2) - aria-colindex="4"
  const endDateCell = page.locator('.e-treegrid .e-rowcell[aria-colindex="4"]').nth(2);
  const startDateText = (await startDateCell.textContent())?.trim();
  const endDateText = (await endDateCell.textContent())?.trim();
  expect(startDateText).toBeTruthy();
  expect(endDateText).toBeTruthy();
  // Verify that the StartDate and EndDate reflect the dragged position (dates should have shifted)
  expect(startDateText).toBe('2024-04-01');
  expect(endDateText).toBe('2024-04-04');
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1009804
test('109-1009804', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-1009804');
  await page.waitForTimeout(1000);
  // Enter cell edit (double-click an editable grid cell)
  await page.locator("(//td[contains(@class,'e-rowcell')])[2]").dblclick();
  await page.waitForTimeout(400);
  // Right-click while editor is open to close it
  await page.click("(//td[contains(@class,'e-rowcell')])[2]", { button: 'right' });
  await page.waitForTimeout(300);
  // Right-click again on another column/cell to open the context menu
  await page.click("(//td[contains(@class,'e-rowcell')])[3]", { button: 'right' });
  await page.waitForTimeout(500);
  // Wait for context menu and verify items exist
  await page.waitForSelector('.e-contextmenu', { state: 'visible', timeout: 2000 });
  const items = await page.$$eval('.e-contextmenu .e-menu-item', els => els.map(e => (e.textContent || '').trim()));
  expect(items.length).toBeGreaterThan(0);
  // Capture visual evidence
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/1012236

//Select record and click Indent button
test('110-case1-1012236', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-1012236');
  await page.waitForTimeout(1000);
  // Select a record in the Gantt Chart (select 3rd row - Task ID 3)
  await page.locator('(//td[contains(@class,"e-rowcell")])[11]').click(); // Task: "Perform soil test"
  await page.waitForTimeout(500);
  // Click the "Indent Task" button
  await page.getByRole('button', { name: 'Indent Task' }).click();
  await page.waitForTimeout(1000);
  // Screenshot validation - Record should be indented properly without any exceptions
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Select record and click Outdent button
test('110-Case2-1012236', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-1012236');
  await page.waitForTimeout(1000);
  // Select a child record (Task ID 3 - "Perform soil test" which has ParentId 1)
  await page.locator('(//td[contains(@class,"e-rowcell")])[11]').click();
  await page.waitForTimeout(500);
  // Click the "Outdent Task" button
  await page.getByRole('button', { name: 'Outdent Task' }).click();
  await page.waitForTimeout(1000);
  // Screenshot validation - Record should be outdented properly
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Multiple indent operations
test('110-Case3-1012236', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-1012236');
  await page.waitForTimeout(1000);
  // Select Task ID 4 ("Soil test approval")
  await page.locator('(//td[contains(@class,"e-rowcell")])[16]').click();
  await page.waitForTimeout(500);
  // Click Indent Task button
  await page.getByRole('button', { name: 'Indent Task' }).click();
  await page.waitForTimeout(1000);
  // Screenshot after first indent
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  // Select Task ID 3 ("Perform soil test")
  await page.locator('(//td[contains(@class,"e-rowcell")])[11]').click();
  await page.waitForTimeout(500);
  // Click Indent Task button again
  await page.getByRole('button', { name: 'Indent Task' }).click();
  await page.waitForTimeout(1000);
  // Screenshot validation - Multiple indent operations should work correctly
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Indent and Outdent combination
test('110-case4-1012236', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-1012236');
  await page.waitForTimeout(1000);
  // Select a child record (Task ID 7 - "List materials")
  await page.locator('(//td[contains(@class,"e-rowcell")])[31]').click();
  await page.waitForTimeout(500);
  // Click Outdent Task button
  await page.getByRole('button', { name: 'Outdent Task' }).click();
  await page.waitForTimeout(1000);
  // Screenshot after outdent
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  // Click Indent Task button to restore
  await page.getByRole('button', { name: 'Indent Task' }).click();
  await page.waitForTimeout(1000);
  // Screenshot validation - Should be able to indent and outdent without issues
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Add task then indent
test('110-case5-1012236', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-1012236');
  await page.waitForTimeout(1000);
  // Click "Add Task" button
  await page.getByRole('button', { name: 'Add Task' }).click();
  await page.waitForTimeout(1000);
  // Screenshot after adding task
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  // Select the newly added task (it should be the last record)
  await page.locator('(//td[contains(@class,"e-rowcell")])[46]').click(); // Last row
  await page.waitForTimeout(500);
  // Click Indent Task button
  await page.getByRole('button', { name: 'Indent Task' }).click();
  await page.waitForTimeout(1000);
  // Screenshot validation - Newly added task should be indented correctly
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Outdent task at boundary
test('110-case6-1012236', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-1012236');
  await page.waitForTimeout(1000);
  // Select first child record (Task ID 2 - "Identify site location")
  await page.locator('(//td[contains(@class,"e-rowcell")])[6]').click();
  await page.waitForTimeout(500);
  // Try to outdent (this is a boundary case - already at parent level 1)
  await page.getByRole('button', { name: 'Outdent Task' }).click();
  await page.waitForTimeout(1000);
  // Screenshot validation - Should handle boundary case gracefully
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Get Tasks then indent
test('110-case7-1012236', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-1012236');
  await page.waitForTimeout(1000);
  // Click "Get Tasks" button to reload data
  await page.getByRole('button', { name: 'Get Tasks' }).click();
  await page.waitForTimeout(1000);
  // Screenshot after getting tasks
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  // Select a record (Task ID 7)
  await page.locator('(//td[contains(@class,"e-rowcell")])[31]').click();
  await page.waitForTimeout(500);
  // Click Indent Task button
  await page.getByRole('button', { name: 'Indent Task' }).click();
  await page.waitForTimeout(1000);
  // Screenshot validation - Indent should work after reloading data
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Indent parent task
test('110-case8-1012236', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(Helper.baseUrlserver + '/BLAZ-1012236');
  await page.waitForTimeout(1000);
  // Select a parent task (Task ID 5 - "Project estimation")
  await page.locator('(//td[contains(@class,"e-rowcell")])[21]').click();
  await page.waitForTimeout(500);
  // Click Indent Task button on parent
  await page.getByRole('button', { name: 'Indent Task' }).click();
  await page.waitForTimeout(1000);
  // Screenshot validation - Should handle indenting parent tasks with children
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/1014203

//Empty Gantt with DynamicDictionary
test('111-case1-1014203', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1014203');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

// Click Add button in toolbar
test('111-Case2-1014203', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1014203');
  await page.waitForTimeout(1000);
  // Add task
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Add and Edit task
test('111-Case3-1014203', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1014203');
  await page.waitForTimeout(1000);
  // Add task
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.waitForTimeout(500);
  await page.locator('#TaskName').fill('New Task');
  await page.waitForTimeout(500);
  await page.locator('#Duration').fill('5');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  // Edit task
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(500);
  await page.locator('#TaskName').fill('Updated Task');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Delete task
test('111-case4-1014203', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1014203');
  await page.waitForTimeout(1000);
  // Add task
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.waitForTimeout(500);
  await page.locator('#TaskName').fill('Task 1');
  await page.waitForTimeout(500);
  await page.locator('#Duration').fill('5');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  // Delete task
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Add two task
test('111-case5-1014203', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1014203');
  await page.waitForTimeout(1000);
  // Add parent
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.waitForTimeout(500);
  await page.locator('#TaskName').fill('Parent Task');
  await page.waitForTimeout(500);
  await page.locator('#Duration').fill('10');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(800);
  // Add child
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.waitForTimeout(500);
  await page.locator('#TaskName').fill('Child Task');
  await page.waitForTimeout(500);
  await page.locator('#Duration').fill('5');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_workitems/edit/1015620

// Repro: scroll to middle, click Add, verify scroll position preserved
test('112-1015620-scroll', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1015620');
  await page.waitForTimeout(1000);
  const selector = '.e-content.e-yscroll';
  await page.waitForSelector(selector, { timeout: 3000 });
  // scroll to middle
  await page.evaluate((sel) => {
    const c = document.querySelector(sel) as HTMLElement | null;
    if (c) c.scrollTop = Math.floor(c.scrollHeight / 2);
  }, selector);
  await page.waitForTimeout(400);
  const before = await page.evaluate((sel) => {
    const c = document.querySelector(sel) as HTMLElement | null;
    return c ? c.scrollTop : -1;
  }, selector);
  //Select record
  await page.locator('(//span[text()="#43"])[1]').click();
  await page.waitForTimeout(800);
  // Click Add below
  await page.getByRole('button', { name: 'Add below', exact: true }).click();
  await page.waitForTimeout(2500);
  // visual check
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1016677

//intiall
test('113-1016677-case1', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1016677');
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//ClearPredecessors scenarios
test('113-1016677-case2', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1016677');
  await page.waitForTimeout(800);
  await page.getByRole('gridcell', { name: 'Perform soil test' }).first().click();
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Clear Predecessors' }).first().click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//multiple-selection-predecessors
test('113-1016677-case3', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1016677');
  await page.waitForTimeout(800);
  await page.getByRole('gridcell', { name: 'Perform soil test' }).first().click();
  await page.keyboard.down('Control');
  await page.getByRole('gridcell', { name: 'Estimation approval' }).first().click().catch(() => { });
  await page.keyboard.up('Control');
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Clear Predecessors' }).first().click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//no-predecessor
test('113-1016677-case4', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1016677');
  await page.waitForTimeout(800);
  // Select a task without predecessor (TaskID 1 "Project initiation")
  await page.getByRole('gridcell', { name: 'Project initiation' }).first().click();
  await page.waitForTimeout(200);
  // Clicking Clear Predecessors should be a no-op and not freeze
  await page.getByRole('button', { name: 'Clear Predecessors' }).first().click();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Get Tasks' }).first().click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//virtualized-row-predecessor
test('113-1016677-case5', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1016677');
  await page.waitForTimeout(800);
  // Scroll grid area to bring a lower task into view (Task "Tiling" has predecessor)
  await page.evaluate(() => { const s = document.querySelector('.e-content.e-yscroll'); if (s) s.scrollTop = s.scrollHeight; });
  await page.waitForTimeout(800);
  await page.getByRole('gridcell', { name: 'Tiling' }).first().click();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Clear Predecessors' }).first().click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Get Tasks' }).first().click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//no-selection-click
test('113-1016677-case6', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1016677');
  await page.waitForTimeout(800);
  // Ensure no row selected then click Clear Predecessors
  await page.locator('body').click({ position: { x: 10, y: 10 } });
  await page.waitForTimeout(200);
  await page.getByRole('button', { name: 'Clear Predecessors' }).first().click();
  await page.waitForTimeout(600);
  await page.getByRole('button', { name: 'Get Tasks' }).first().click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1017046
test('114-1017046-Case1', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1017046');
  await page.waitForTimeout(1000);
  //Drag and drop the connector line
  const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[6]");
  const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[7]");
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
  //Screenshot validation
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('114-1017046-Case2', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1017046');
  await page.waitForTimeout(1000);
  //Drag and drop the connector line
  const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[7]");
  const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[9]");
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
  //Screenshot validation
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('114-1017046-Case3', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1017046');
  await page.waitForTimeout(1000);
  //Drag and drop the connector line
  const src = page.locator("(//div[contains(@class,'e-rowcelldrag')])[7]");
  const dst = page.locator("(//div[contains(@class,'e-rowcelldrag')])[12]");
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
  //Screenshot validation
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1018749
test('115-1018749-Case1', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1018749');
  await page.waitForTimeout(1000);
  // Try to scroll the Gantt chart area to the bottom (several selectors tried for robustness)
  const selector = '#ScheduleBuilder .e-chart-scroll-container, #ScheduleBuilder .e-chart-rows, .e-gantt .e-chart-scroll-container, .e-gantt .e-chart-rows, .e-gantt .e-content.e-yscroll';
  await page.evaluate((sel) => {
    const el = document.querySelector(sel) as HTMLElement | null;
    if (el) {
      el.scrollTop = el.scrollHeight;
    } else {
      const fallback = document.querySelector('.e-gantt .e-content.e-yscroll') as HTMLElement | null;
      if (fallback) fallback.scrollTop = fallback.scrollHeight;
    }
  }, selector);
  await page.waitForTimeout(1200);
  await page.locator('(//td[text()="Task 100"])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  // Scroll back up to the top and capture again
  await page.evaluate((sel) => {
    const el = document.querySelector(sel) as HTMLElement | null;
    if (el) {
      el.scrollTop = 0;
    } else {
      const fallback = document.querySelector('.e-gantt .e-content.e-yscroll') as HTMLElement | null;
      if (fallback) fallback.scrollTop = 0;
    }
  }, selector);
  await page.waitForTimeout(1200);
  await page.locator('(//td[text()="Task 003"])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('115-1018749-Case2', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1018749');
  await page.waitForTimeout(1000);
  await page.locator('(//td[text()="Task 001"])[1]').click();
  await page.waitForTimeout(500);
  await page.locator('(//button[text()="Set Task Name"])[1]').click();
  await page.waitForTimeout(500);
  // Try to scroll the Gantt chart area to the bottom (several selectors tried for robustness)
  const selector = '#ScheduleBuilder .e-chart-scroll-container, #ScheduleBuilder .e-chart-rows, .e-gantt .e-chart-scroll-container, .e-gantt .e-chart-rows, .e-gantt .e-content.e-yscroll';
  await page.evaluate((sel) => {
    const el = document.querySelector(sel) as HTMLElement | null;
    if (el) {
      el.scrollTop = el.scrollHeight;
    } else {
      const fallback = document.querySelector('.e-gantt .e-content.e-yscroll') as HTMLElement | null;
      if (fallback) fallback.scrollTop = fallback.scrollHeight;
    }
  }, selector);
  await page.waitForTimeout(1200);
  await page.locator('(//td[text()="Task 100"])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });

  // Scroll back up to the top and capture again
  await page.evaluate((sel) => {
    const el = document.querySelector(sel) as HTMLElement | null;
    if (el) {
      el.scrollTop = 0;
    } else {
      const fallback = document.querySelector('.e-gantt .e-content.e-yscroll') as HTMLElement | null;
      if (fallback) fallback.scrollTop = 0;
    }
  }, selector);
  await page.waitForTimeout(1200);
  await page.locator('(//td[text()="Hello World"])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('115-1018749-Case3', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1018749');
  await page.waitForTimeout(1000);
  await page.locator('(//td[text()="Task 006"])[1]').click();
  await page.waitForTimeout(500);
  await page.locator('(//button[text()="Set Task Name"])[1]').click();
  await page.waitForTimeout(500);
  // Try to scroll the Gantt chart area to the bottom (several selectors tried for robustness)
  const selector = '#ScheduleBuilder .e-chart-scroll-container, #ScheduleBuilder .e-chart-rows, .e-gantt .e-chart-scroll-container, .e-gantt .e-chart-rows, .e-gantt .e-content.e-yscroll';
  await page.evaluate((sel) => {
    const el = document.querySelector(sel) as HTMLElement | null;
    if (el) {
      el.scrollTop = el.scrollHeight;
    } else {
      const fallback = document.querySelector('.e-gantt .e-content.e-yscroll') as HTMLElement | null;
      if (fallback) fallback.scrollTop = fallback.scrollHeight;
    }
  }, selector);
  await page.waitForTimeout(1200);
  await page.locator('(//td[text()="Task 100"])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });

  // Scroll back up to the top and capture again
  await page.evaluate((sel) => {
    const el = document.querySelector(sel) as HTMLElement | null;
    if (el) {
      el.scrollTop = 0;
    } else {
      const fallback = document.querySelector('.e-gantt .e-content.e-yscroll') as HTMLElement | null;
      if (fallback) fallback.scrollTop = 0;
    }
  }, selector);
  await page.waitForTimeout(1200);
  await page.locator('(//td[text()="Hello World"])[1]').click();
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1018861
test('116-1018861-case1', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1018861');
  await page.waitForTimeout(1000);
  await page.locator('(//button[text()="Force Rerender"])[1]').click();
  await page.waitForTimeout(500);
  await page.locator('(//span[text()="#8"])[1]').click();
  await page.waitForTimeout(500);
  // Get the row count before adding a task
  const rowsBefore = await page.locator('.e-gantt .e-row').count();
  await page.locator('(//button[text()="Add Task"])[1]').click();
  await page.waitForTimeout(3000);
  // Assert that the Gantt is still visible and rendered without errors
  await expect(page.locator('.e-gantt')).toBeVisible();
  // Assert a new row was added (row count increased by 1)
  const rowsAfter = await page.locator('.e-gantt .e-row').count();
  expect(rowsAfter).toBe(rowsBefore + 1);
  // Assert the new empty row (edit state) or newly added row is present in the treegrid
  const newRow = page.locator('.e-gantt .e-row').last();
  await expect(newRow).toBeVisible();
});

test('116-1018861-case2', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1018861');
  await page.waitForTimeout(1000);
  await page.locator('(//button[text()="Force Rerender"])[1]').click();
  await page.waitForTimeout(300);
  await page.locator('(//span[text()="#5"])[1]').click();
  await page.waitForTimeout(500);
  // Get the row count before indenting and adding a task
  const rowsBefore = await page.locator('.e-gantt .e-row').count();
  await page.locator('(//button[text()="Indent Task"])[1]').click();
  await page.waitForTimeout(500);
  await page.locator('(//button[text()="Add Task"])[1]').click();
  await page.waitForTimeout(3000);
  // Assert that the Gantt is still visible and rendered without errors
  await expect(page.locator('.e-gantt')).toBeVisible();
  // Assert a new row was added (row count increased by 1)
  const rowsAfter = await page.locator('.e-gantt .e-row').count();
  expect(rowsAfter).toBe(rowsBefore + 1);
  // Assert the new empty row (edit state) or newly added row is present in the treegrid
  const newRow = page.locator('.e-gantt .e-row').last();
  await expect(newRow).toBeVisible();
});

test('116-1018861-case3', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1018861');
  await page.waitForTimeout(1000);
  await page.locator('(//button[text()="Force Rerender"])[1]').click();
  await page.waitForTimeout(300);
  await page.locator('(//span[text()="#8"])[1]').click();
  await page.waitForTimeout(500);
  // Get the row count before outdenting and adding a task
  const rowsBefore = await page.locator('.e-gantt .e-row').count();
  await page.locator('(//button[text()="Outdent Task"])[1]').click();
  await page.waitForTimeout(500);
  await page.locator('(//button[text()="Add Task"])[1]').click();
  await page.waitForTimeout(3000);
  // Assert that the Gantt is still visible and rendered without errors
  await expect(page.locator('.e-gantt')).toBeVisible();
  // Assert a new row was added (row count increased by 1)
  const rowsAfter = await page.locator('.e-gantt .e-row').count();
  expect(rowsAfter).toBe(rowsBefore + 1);
  // Assert the new empty row (edit state) or newly added row is present in the treegrid
  const newRow = page.locator('.e-gantt .e-row').last();
  await expect(newRow).toBeVisible();
});

test('116-1018861-Case4', async ({ page }) => {
  // Navigate to the page
  await page.goto(Helper.baseUrlserver + '/BLAZ-1018861');
  await page.waitForTimeout(1000);
  // Assert Gantt chart is loaded and visible
  const ganttChart = page.locator('.e-gantt');
  await expect(ganttChart).toBeVisible();
  // Try to scroll the Gantt chart area to the bottom (several selectors tried for robustness)
  const selector = '#ScheduleBuilder .e-chart-scroll-container, #ScheduleBuilder .e-chart-rows, .e-gantt .e-chart-scroll-container, .e-gantt .e-chart-rows, .e-gantt .e-content.e-yscroll';
  await page.evaluate((sel) => {
    const el = document.querySelector(sel) as HTMLElement | null;
    if (el) {
      el.scrollTop = el.scrollHeight;
    } else {
      const fallback = document.querySelector('.e-gantt .e-content.e-yscroll') as HTMLElement | null;
      if (fallback) fallback.scrollTop = fallback.scrollHeight;
    }
  }, selector);
  await page.waitForTimeout(2000);
  // Assert the target task is visible and click it
  const targetTask = page.locator('(//td[text()="Project closeout & handover"])[1]');
  await expect(targetTask).toBeVisible();
  await targetTask.click();
  await page.waitForTimeout(3000);
  // Assert "Add Task" button is visible and enabled
  const addTaskButton = page.locator('(//button[text()="Add Task"])[1]');
  await expect(addTaskButton).toBeVisible();
  await expect(addTaskButton).toBeEnabled();
  // Click the Add Task button
  await addTaskButton.click();
  await page.waitForTimeout(5000);
  // Assert the Gantt chart is still visible and functional after the operation
  await expect(ganttChart).toBeVisible();
  // Verify that the Gantt still has rows (basic sanity check)
  const rowCount = await page.locator('.e-gantt .e-row').count();
  expect(rowCount).toBeGreaterThan(0);
  // Verify the selected task is still visible
  await expect(targetTask).toBeVisible();
  // Verify no error messages appeared
  const errorDialog = page.locator('.e-error, .e-dlg-error, [role="alertdialog"]');
  await expect(errorDialog).not.toBeVisible();
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1019256
test('117-1018749-Case1', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1019256');
  // wait for Gantt to load properly
  await page.waitForSelector('.e-gantt');
  await page.waitForTimeout(1000);
  const selector = '#ScheduleBuilder .e-chart-scroll-container, ' + '#ScheduleBuilder .e-chart-rows, ' +
    '.e-gantt .e-chart-scroll-container, ' +
    '.e-gantt .e-chart-rows, ' +
    '.e-gantt .e-content.e-yscroll';
  // ✅ Scroll to vertical middle
  await page.evaluate((sel) => {
    const el = document.querySelector(sel) as HTMLElement | null;

    if (el) {
      el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;
    } else {
      const fallback = document.querySelector('.e-gantt .e-content.e-yscroll') as HTMLElement | null;
      if (fallback) {
        fallback.scrollTop = (fallback.scrollHeight - fallback.clientHeight) / 2;
      }
    }
  }, selector);
  await page.waitForTimeout(1000);
  // ✅ Better approach: ensure the row comes into view before clicking
  const taskLocator = page.locator('(//span[text()="#38"])[1]');
  await taskLocator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await taskLocator.click();
  await page.waitForTimeout(3000);
  // ✅ Screenshot validation
  await expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('117-1018749-Case2', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1019256');
  // wait for Gantt to load properly
  await page.waitForSelector('.e-gantt');
  await page.waitForTimeout(1000);
  const selector = '#ScheduleBuilder .e-chart-scroll-container, ' + '#ScheduleBuilder .e-chart-rows, ' +
    '.e-gantt .e-chart-scroll-container, ' +
    '.e-gantt .e-chart-rows, ' +
    '.e-gantt .e-content.e-yscroll';
  // ✅ Scroll to vertical middle
  await page.evaluate((sel) => {
    const el = document.querySelector(sel) as HTMLElement | null;

    if (el) {
      el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;
    } else {
      const fallback = document.querySelector('.e-gantt .e-content.e-yscroll') as HTMLElement | null;
      if (fallback) {
        fallback.scrollTop = (fallback.scrollHeight - fallback.clientHeight) / 2;
      }
    }
  }, selector);
  await page.waitForTimeout(1000);
  // ✅ Better approach: ensure the row comes into view before clicking
  const taskLocator = page.locator('(//span[text()="#38"])[1]');
  await taskLocator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await taskLocator.click();
  await page.waitForTimeout(3000);
  //Outdent Task
  await page.locator('(//button[text()="Outdent Task"])[1]').click();
  await page.waitForTimeout(1000);
  // ✅ Screenshot validation
  await expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('117-1018749-Case3', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1019256');
  // wait for Gantt to load properly
  await page.waitForSelector('.e-gantt');
  await page.waitForTimeout(1000);
  const selector = '#ScheduleBuilder .e-chart-scroll-container, ' + '#ScheduleBuilder .e-chart-rows, ' +
    '.e-gantt .e-chart-scroll-container, ' +
    '.e-gantt .e-chart-rows, ' +
    '.e-gantt .e-content.e-yscroll';
  // ✅ Scroll to vertical middle
  await page.evaluate((sel) => {
    const el = document.querySelector(sel) as HTMLElement | null;

    if (el) {
      el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;
    } else {
      const fallback = document.querySelector('.e-gantt .e-content.e-yscroll') as HTMLElement | null;
      if (fallback) {
        fallback.scrollTop = (fallback.scrollHeight - fallback.clientHeight) / 2;
      }
    }
  }, selector);
  await page.waitForTimeout(1000);
  // ✅ Better approach: ensure the row comes into view before clicking
  const taskLocator = page.locator('(//span[text()="#38"])[1]');
  await taskLocator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await taskLocator.click();
  await page.waitForTimeout(3000);
  //Indent Task
  await page.locator('(//button[text()="Indent Task"])[1]').click();
  await page.waitForTimeout(1200);
  // ✅ Screenshot validation
  await expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('117-1018749-Case4', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1019256');
  // wait for Gantt to load properly
  await page.waitForSelector('.e-gantt');
  await page.waitForTimeout(1000);
  const selector = '#ScheduleBuilder .e-chart-scroll-container, ' + '#ScheduleBuilder .e-chart-rows, ' +
    '.e-gantt .e-chart-scroll-container, ' +
    '.e-gantt .e-chart-rows, ' +
    '.e-gantt .e-content.e.onluy-yscroll';
  // ✅ Scroll to vertical middle
  await page.evaluate((sel) => {
    const el = document.querySelector(sel) as HTMLElement | null;

    if (el) {
      el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;
    } else {
      const fallback = document.querySelector('.e-gantt .e-content.e-yscroll') as HTMLElement | null;
      if (fallback) {
        fallback.scrollTop = (fallback.scrollHeight - fallback.clientHeight) / 2;
      }
    }
  }, selector);
  await page.waitForTimeout(1000);
  // ✅ Better approach: ensure the row comes into view before clicking
  const taskLocator = page.locator('(//span[text()="#38"])[1]');
  await taskLocator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await taskLocator.click();
  await page.waitForTimeout(3000);
  //Indent Task
  await page.locator('(//button[text()="Indent Task"])[1]').click();
  await page.waitForTimeout(1000);
  //Outdent Task
  await page.locator('(//button[text()="Outdent Task"])[1]').click();
  await page.waitForTimeout(1000);
  // ✅ Screenshot validation
  await expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('117-1018749-Case5', async ({ page }) => {
  await page.goto(Helper.baseUrlserver + '/BLAZ-1019256');
  // wait for Gantt to load properly
  await page.waitForSelector('.e-gantt');
  await page.waitForTimeout(1000);
  const selector = '#ScheduleBuilder .e-chart-scroll-container, ' + '#ScheduleBuilder .e-chart-rows, ' +
    '.e-gantt .e-chart-scroll-container, ' +
    '.e-gantt .e-chart-rows, ' +
    '.e-gantt .e-content.e-yscroll';
  // ✅ Scroll to vertical middle
  await page.evaluate((sel) => {
    const el = document.querySelector(sel) as HTMLElement | null;

    if (el) {
      el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;
    } else {
      const fallback = document.querySelector('.e-gantt .e-content.e-yscroll') as HTMLElement | null;
      if (fallback) {
        fallback.scrollTop = (fallback.scrollHeight - fallback.clientHeight) / 2;
      }
    }
  }, selector);
  await page.waitForTimeout(1000);
  // ✅ Better approach: ensure the row comes into view before clicking
  const taskLocator = page.locator('(//span[text()="#38"])[1]');
  await taskLocator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await taskLocator.click();
  await page.waitForTimeout(3000);
  //Indent Task
  await page.locator('(//button[text()="Indent Task"])[1]').click();
  await page.waitForTimeout(1000);
  //Outdent Task
  await page.locator('(//button[text()="Outdent Task"])[1]').click();
  await page.waitForTimeout(1000);
  //Add task
  await page.locator('(//button[text()="Add Task"])[1]').click();
  await page.waitForTimeout(3000);
  //✅ Screenshot validation
  await expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1020284
test('118-1020284-Case1', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1020284');
  await page.waitForTimeout(2000);
  // Screenshot validation - Initial load of Gantt with segmented tasks
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('118-1020284-Case2', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1020284');
  await page.waitForTimeout(2000);
  // Verify that segmented tasks are visible (5 tasks with multiple segments)
  const segmentedTaskbars = page.locator('div[class*="e-segmented-taskbar"]');
  const count = await segmentedTaskbars.count();
  await expect.soft(count).toBeGreaterThan(0);
  // Click on the first segmented task to select it
  await segmentedTaskbars.first().click();
  await page.waitForTimeout(1000);
  // Screenshot validation - After selection
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('118-1020284-Case3', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1020284');
  await page.waitForTimeout(2000);
  // Double-click on a segmented task to open the edit dialog
  const segmentedTaskbars = page.locator('div[class*="e-segmented-taskbar"]');
  await segmentedTaskbars.first().dblclick();
  await page.waitForTimeout(1000);
  // Verify the edit dialog is open
  await expect.soft(page.locator('.e-dialog')).toBeVisible();
  // Screenshot validation - Edit dialog
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  await page.waitForTimeout(1000);
  // Close the edit dialog by pressing Escape
  await page.keyboard.press('Escape');
  await page.waitForTimeout(1200);
  await page.locator('(//td[text()="Testing & QA"])[1]').click();
  await page.waitForTimeout(1000);
  // Final screenshot validation
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('118-1020284-Case4', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1020284');
  await page.waitForTimeout(2000);
  // Scroll the timeline horizontally
  const timelineContainer = page.locator('.e-chart-scroll-container.e-content');
  if (await timelineContainer.isVisible()) {
    const boundingBox = await timelineContainer.boundingBox();
    if (boundingBox) {
      await page.mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);
      await page.mouse.wheel(500, 0); // Scroll right
      await page.waitForTimeout(1000);
      // Screenshot validation - After horizontal scroll
      expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    }
  }
  // Scroll back to initial position
  await page.keyboard.press('Home');
  await page.waitForTimeout(500);
  // Final screenshot validation
  expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('118-1020284-Case5', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1020284');
  await page.waitForTimeout(2000);
  // Final screenshot validation
  expect.soft(await page.locator('.content').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//https://dev.azure.com/EssentialStudio/Ej2-Web/_queries/edit/1020859
//Bug: Selection is not cleared when right-clicking on an unselected row with PersistSelection and Multiple Selection enabled
//Case 1: Right-click on unselected row should clear previous selection
test('119-1020859-Case1', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1020859');
  await page.waitForTimeout(1500);
  // Select multiple rows using Ctrl+Click
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
  await page.waitForTimeout(300);
  await page.keyboard.down('Control');
  await page.locator('(//td[contains(@class,"e-rowcell")])[8]').click();
  await page.waitForTimeout(300);
  await page.locator('(//td[contains(@class,"e-rowcell")])[14]').click();
  await page.waitForTimeout(300);
  await page.locator('(//td[contains(@class,"e-rowcell")])[20]').click();
  await page.waitForTimeout(300);
  await page.locator('(//td[contains(@class,"e-rowcell")])[26]').click();
  await page.keyboard.up('Control');
  await page.waitForTimeout(500);
  // Verify multiple rows are selected
  const selectedBefore = await page.locator('.e-selectionbackground').count();
  expect(selectedBefore).toBeGreaterThan(1);
  // Right-click on an unselected row (row 5 - not in selection)
  await page.locator('(//td[contains(@class,"e-rowcell")])[5]').click({ button: 'right' });
  await page.waitForTimeout(800);
  // Selection should be replaced - only the right-clicked row should be selected (context menu may appear)
  // The bug is that previous selection remains when right-clicking unselected row
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Case 2: Right-click on already selected row should maintain selection
test('119-1020859-Case2', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1020859');
  await page.waitForTimeout(1500);
  // Select multiple rows using Ctrl+Click
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
  await page.waitForTimeout(300);
  await page.keyboard.down('Control');
  await page.locator('(//td[contains(@class,"e-rowcell")])[8]').click();
  await page.waitForTimeout(300);
  await page.locator('(//td[contains(@class,"e-rowcell")])[14]').click();
  await page.keyboard.up('Control');
  await page.waitForTimeout(500);
  // Right-click on one of the already selected rows (row 2)
  await page.locator('(//td[contains(@class,"e-rowcell")])[20]').click({ button: 'right' });
  await page.waitForTimeout(800);
  // Selection should be maintained
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Case 3: Ctrl+Click on unselected row should add to selection
test('119-1020859-Case3', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1020859');
  await page.waitForTimeout(1500);
  // Select first row
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
  await page.waitForTimeout(300);
  // Ctrl+Click on an unselected row to add to selection
  await page.keyboard.down('Control');
  await page.locator('(//td[contains(@class,"e-rowcell")])[8]').click();
  await page.keyboard.up('Control');
  await page.waitForTimeout(500);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Case 4: Shift+Click on row should select range
test('199-1020859-Case4', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1020859');
  await page.waitForTimeout(1500);
  // Click on first row to set anchor
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
  await page.waitForTimeout(300);
  // Shift+Click on another row to select range
  await page.keyboard.down('Shift');
  await page.locator('(//td[contains(@class,"e-rowcell")])[6]').click();
  await page.keyboard.up('Shift');
  await page.waitForTimeout(500);
  //Right Click
  await page.locator('(//td[contains(@class,"e-rowcell")])[6]').click({ button: 'right' });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Case 5: Right-click on different unselected row after multiple selection
test('199-1020859-Case5', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1020859');
  await page.waitForTimeout(1500);
  // Select multiple rows using Ctrl+Click (rows 1, 2, 3)
  await page.locator('(//td[contains(@class,"e-rowcell")])[2]').click();
  await page.waitForTimeout(300);
  await page.keyboard.down('Control');
  await page.locator('(//td[contains(@class,"e-rowcell")])[8]').click();
  await page.waitForTimeout(300);
  await page.locator('(//td[contains(@class,"e-rowcell")])[14]').click();
  await page.keyboard.up('Control');
  await page.waitForTimeout(500);
  // Right-click on row 4 (unselected) - selection should be replaced
  await page.locator('(//td[contains(@class,"e-rowcell")])[20]').click({ button: 'right' });
  await page.waitForTimeout(1000);
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
  // Close context menu by pressing Escape
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);
  // Selection should be cleared (only context menu row was clicked, not selected)
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

//Case 6: Drag selection and right-click on unselected row
test('199-1020859-Case6', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5004/BLAZ-1020859');
  await page.waitForTimeout(1500);
  // Wait for grid to be ready
  await page.waitForSelector('.e-treegrid .e-row', { state: 'visible', timeout: 3000 });
  // Perform drag selection on rows
  const firstCell = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]').first();
  const fifthCell = page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]').nth(4);
  const firstBox = await firstCell.boundingBox();
  const fifthBox = await fifthCell.boundingBox();
  if (firstBox && fifthBox) {
    // Drag from first row to fifth row
    await page.mouse.move(firstBox.x + firstBox.width / 2, firstBox.y + firstBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(fifthBox.x + fifthBox.width / 2, fifthBox.y + fifthBox.height / 2, { steps: 10 });
    await page.mouse.up();
    await page.waitForTimeout(800);
  }
  // Verify rows are selected
  const selectedBefore = await page.locator('.e-selectionbackground').count();
  expect(selectedBefore).toBeGreaterThan(1);
  // Right-click on an unselected row (row 7 - outside drag selection)
  await page.locator('.e-treegrid .e-rowcell[aria-colindex="2"]').nth(6).click({ button: 'right' });
  await page.waitForTimeout(1000);
  // The previous drag selection should be cleared when right-clicking on unselected row
  expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
