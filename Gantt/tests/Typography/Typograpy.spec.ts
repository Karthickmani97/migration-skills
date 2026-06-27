import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test.describe('Gantt Tests', () => {
  test.use({
    launchOptions: {
      ignoreDefaultArgs: [],
    },
  });

test('2-Overview - settings', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@id,"Settings")])[1]').click();
    await page.waitForTimeout(8000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('3-Overview - work week', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@id,"Settings")])[1]').click();
    await page.waitForTimeout(800);
    await page.locator('(//div[contains(@class,"e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Overview - Duration Unit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@id,"Settings")])[1]').click();
    await page.waitForTimeout(800);
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Overview - View Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@id,"Settings")])[1]').click();
    await page.waitForTimeout(800);
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[3]').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('6-Overview - View Type', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@id,"Settings")])[1]').click();
    await page.waitForTimeout(800);
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('7-Editing - toolbar add tab', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind3');
    await page.waitForTimeout(2000);
    //Click the add button on the toolbar
    await page.locator('(//span[contains(@class, "add")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(800);
    await page.locator('(//span[contains(@class,"e-input-group-icon e-date-icon e-icons")])[1]').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(800);
    await page.locator('(//span[contains(@class,"e-input-group-icon e-date-icon e-icons")])[2]').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('8-Editing - Add Dependency tab', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind3');
    await page.waitForTimeout(2000);
    //Click the add button on the toolbar
    await page.locator('(//span[contains(@class, "add")])[1]').click();
    await page.waitForTimeout(800);
    await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"add")])[2]').click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('9-Editing - Hover on taskbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind3');
    await page.waitForTimeout(2000);
    //Click the add button on the toolbar
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").hover({ force: true });
    await page.waitForTimeout(2500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //For child record hovered to show the records
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").hover({ force: true });
    await page.waitForTimeout(2500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('10-Editing - Delete child record', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell")])[16]').click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('11-Editing - cell edit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell")])[9]').dblclick();
    await page.waitForTimeout(300);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('12-Sorting - sort columns', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'sorting?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class,"e-sortfilterdiv e-icons")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-sortfilterdiv e-icons")])[1]').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('13 Selection - Single selection', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'selection?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[16]').click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(500);
    await page.getByLabel('Defining the target audience Column Header Task Name').click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('14- Selection - Enable row hover', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'selection?theme=tailwind3');
    await page.waitForTimeout(2000);
    //Click the Enable Hover to be selected
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(1000);
    //Select the row to hover
    await page.locator('(//span[contains(@class, "e-label")])[3]').hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-Hover on the chart side of the component 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('15-Row selection multiple', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'selection?theme=tailwind3');
    await page.waitForTimeout(2000);
    //Click Type  to select multiple
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(500);
    //Press ArrowDown key to select multiple
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(200);
    //Press the Enter key to select it 
    await page.keyboard.press("Enter");
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.down("Control");
    await page.waitForTimeout(500);
    //Select 1st task name 
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(500);
    //Select the 2 nd task name
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(500);
    //Select the 3rd task name
    //Press the keyboard Control button down
    await page.keyboard.up("Control");
    await page.waitForTimeout(2000);
    //Screenshot validation-3 rows records are multi selected on the grid side of the component
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('16-Selection - Cell multiple', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'selection?theme=tailwind3');
    await page.waitForTimeout(2000);
    //Click mode to select the cell
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(500);
    //Press ArrowDown key to select Cell
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(500);
    //Press the Enter key to select it 
    await page.keyboard.press("Enter");
    await page.waitForTimeout(500);
    //Click Type  to select multiple
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    //Press ArrowDown key to select Cell
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(500);
    //Press the Enter key to select it 
    await page.keyboard.press("Enter");
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.down("Control");
    await page.waitForTimeout(500);
    //Select 1st task name 
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(500);
    //Select the 2 nd task name
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.up("Control");
    await page.waitForTimeout(500);
    //Click the Enable Hover to be selected
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(500);
    //Select the row to hover
    await page.locator('(//td[contains(@class, "e-rowcell")])[22]').hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-3 cells records are multi selected on the grid side of the component and recoved hovered the grid side
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('17-Selection - Auto scroll to taskbar and toggle', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'selection?theme=tailwind3');
    await page.waitForTimeout(2000);
    //Click to enable Autoscroll
    await page.locator('(//span[contains(@class, "e-switch-handle")])[1]').click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('18-Airline Tracker', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'airline-tracker?theme=tailwind3');
    await page.waitForTimeout(2000);
    //Screenshot validation-Origin is filtered from the search.
    expect(await page.locator('.content-wrapper').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('19-Human resource', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'human-resource-management?theme=tailwind3');
    await page.waitForTimeout(2000);
    //Screenshot validation-All records displayed on initial load and Recruitment Team
    expect.soft(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-icon-down-arrow e-icons e-btn-icon e-icon-right")])[1]').click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });

});

test('20-Education Scheduler', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=tailwind3');
    await page.waitForTimeout(2000);
    //Screenshot validation-Input field is displayed  and has no issue in the theme
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('21-Remote data', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'remote-data?theme=tailwind3');
    await page.waitForTimeout(2000);
    // Click the dropdown to select the 1000th row
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(2000);
    // Press the ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('22-Scheduling mode sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'scheduling-mode?theme=tailwind3');
    await page.waitForTimeout(2000);
    // Click on a specific cell to focus
    await page.locator('(//div[contains(@class, "e-gantt-manualparenttaskbar")])[1]').hover({ force: true });
    await page.waitForTimeout(2000);
    // Validate the screenshot- Scheduling mode is displayed on the chart side of the component.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('23-Holidays sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'holidays?theme=tailwind3');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('24-Unscheduled task sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'unscheduled-task?theme=tailwind3');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('25-Baseline sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'baseline?theme=tailwind3');
    await page.waitForTimeout(2000);
    // Validate the screenshot- Baseline is displayed on the chart side of the component.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('26-Eventmarkers sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'eventmarkers?theme=tailwind3');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('27-Timezone sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'eventmarkers?theme=tailwind3');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('28-Critical path sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'criticalpath?theme=tailwind3');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('29-Column Template', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-template?theme=tailwind3');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('30-Column menu items', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-menu?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
    await page.waitForTimeout(600);
    await page.locator('(//li[contains(@class,"e-menu-item")])[5]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('(//li[contains(@class,"e-menu-item")])[6]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('31-WBS Column', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'wbs-column?theme=tailwind3');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('32-Resource Allocation', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-allocation?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').dblclick();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('33-Resourceview sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-view?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').dblclick();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('34-Resourceview - Switch to Projectview', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-view?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//span[contains(@class,"e-switch-on")])[1]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('35-Resource multitaskbar', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=tailwind3');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('36-Header Template', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'header-template?theme=tailwind3');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('37-Taskbar Template', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'taskbar-template?theme=tailwind3');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('38-Tooltip Template', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'tooltip-template?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").hover({ force: true });
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //For child record hovered to show the records
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").hover({ force: true });
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('39-Frozen column', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'frozen-column?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('40-Filtering - Task ID', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'filtering?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class, "e-icon-filter")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('41-Filtering - Task Name', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'filtering?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class, "e-icon-filter")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('42-Filtering - Start Time', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'filtering?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class, "e-icon-filter")])[3]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('43-Filtering - Duration', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'filtering?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class, "e-icon-filter")])[4]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('44-Filtering - End Time', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'filtering?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class, "e-icon-filter")])[5]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('45-Excel Filtering - Task ID', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter")])[1]').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('(//li[contains(@role, "menuitem")])[2]').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('46-Spli task - contextmenu open', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class,"e-gantt-child")])[7]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('47-Split task - Segment tab', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=tailwind3');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class,"child-taskbar")])[3]').click();
    await page.waitForTimeout(500);
    //Click the edit button
    await page.locator('(//span[contains(@class,"e-edit")])[1]').click();
    await page.waitForTimeout(500);
    //Navigate to segments to open the dialog tab
    await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('48-Overview - settings', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@id,"Settings")])[1]').click();
    await page.waitForTimeout(8000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('49-Overview - work week', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@id,"Settings")])[1]').click();
    await page.waitForTimeout(800);
    await page.locator('(//div[contains(@class,"e-multi-select-wrapper")])[1]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('50-Overview - Duration Unit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@id,"Settings")])[1]').click();
    await page.waitForTimeout(800);
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('51-Overview - View Mode', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@id,"Settings")])[1]').click();
    await page.waitForTimeout(800);
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[3]').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('52-Overview - View Type', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'overview?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@id,"Settings")])[1]').click();
    await page.waitForTimeout(800);
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('53-Editing - toolbar add tab', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    //Click the add button on the toolbar
    await page.locator('(//span[contains(@class, "add")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(800);
    await page.locator('(//span[contains(@class,"e-input-group-icon e-date-icon e-icons")])[1]').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"e-input-group-icon e-date-icon e-icons")])[2]').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('54-Editing - Add Dependency tab', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    //Click the add button on the toolbar
    await page.locator('(//span[contains(@class, "add")])[1]').click();
    await page.waitForTimeout(800);
    await page.locator('(//div[contains(@class,"e-tab-text")])[4]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class,"add")])[2]').click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('55-Editing - Hover on taskbar', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    //Click the add button on the toolbar
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").hover({ force: true });
    await page.waitForTimeout(2500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //For child record hovered to show the records
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").hover({ force: true });
    await page.waitForTimeout(2500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('56-Editing - Delete child record', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell")])[16]').click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('57-Editing - cell edit', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'editing?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class,"e-rowcell")])[9]').dblclick();
    await page.waitForTimeout(300);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('58-Sorting - sort columns', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'sorting?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class,"e-sortfilterdiv e-icons")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//div[contains(@class,"e-sortfilterdiv e-icons")])[1]').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('59 Selection - Single selection', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'selection?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//td[contains(@class, "e-rowcell")])[16]').click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('.e-input-group-icon').first().click();
    await page.waitForTimeout(500);
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(500);
    await page.getByLabel('Defining the target audience Column Header Task Name').click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('60 - Selection - Enable row hover', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'selection?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    //Click the Enable Hover to be selected
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(1000);
    //Select the row to hover
    await page.locator('(//span[contains(@class, "e-label")])[3]').hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-Hover on the chart side of the component 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('61-Row selection multiple', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'selection?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    //Click Type  to select multiple
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(500);
    //Press ArrowDown key to select multiple
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(200);
    //Press the Enter key to select it 
    await page.keyboard.press("Enter");
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.down("Control");
    await page.waitForTimeout(500);
    //Select 1st task name 
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(500);
    //Select the 2 nd task name
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(500);
    //Select the 3rd task name
    //Press the keyboard Control button down
    await page.keyboard.up("Control");
    await page.waitForTimeout(2000);
    //Screenshot validation-3 rows records are multi selected on the grid side of the component
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('62-Selection - Cell multiple', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'selection?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    //Click mode to select the cell
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(500);
    //Press ArrowDown key to select Cell
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(500);
    //Press the Enter key to select it 
    await page.keyboard.press("Enter");
    await page.waitForTimeout(500);
    //Click Type  to select multiple
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(300);
    //Press ArrowDown key to select Cell
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(500);
    //Press the Enter key to select it 
    await page.keyboard.press("Enter");
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.down("Control");
    await page.waitForTimeout(500);
    //Select 1st task name 
    await page.locator("(//td[contains(@class,'e-rowcell')])[2]").click();
    await page.waitForTimeout(500);
    //Select the 2 nd task name
    await page.locator("(//td[contains(@class,'e-rowcell')])[9]").click();
    await page.waitForTimeout(500);
    //Press the keyboard Control button down
    await page.keyboard.up("Control");
    await page.waitForTimeout(500);
    //Click the Enable Hover to be selected
    await page.locator('(//span[contains(@class, "e-switch-handle")])[3]').click();
    await page.waitForTimeout(500);
    //Select the row to hover
    await page.locator('(//td[contains(@class, "e-rowcell")])[22]').hover({ force: true });
    await page.waitForTimeout(2000);
    //Screenshot validation-3 cells records are multi selected on the grid side of the component and recoved hovered the grid side
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('63-Selection - Auto scroll to taskbar and toggle', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'selection?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    //Click to enable Autoscroll
    await page.locator('(//span[contains(@class, "e-switch-handle")])[1]').click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-switch-handle")])[2]').click();
    await page.waitForTimeout(500);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('64-Airline Tracker', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'airline-tracker?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    //Screenshot validation-Origin is filtered from the search.
    expect.soft(await page.locator('.content-wrapper').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(800);
    await page.locator('(//span[contains(@class, "e-input-group-icon e-range-icon e-icons e-active")])[1]').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.content-wrapper').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('65-Human resource', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'human-resource-management?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    //Screenshot validation-All records displayed on initial load and Recruitment Team
    expect.soft(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(1000);
    await page.locator('(//span[contains(@class, "e-icon-down-arrow e-icons e-btn-icon e-icon-right")])[1]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });

});

test('66-Education Scheduler', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'education-scheduler?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    //Screenshot validation-Input field is displayed  and has no issue in the theme
    expect(await page.locator('.container-fluid').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('67-Remote data', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'remote-data?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    // Click the dropdown to select the 1000th row
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(2000);
    // Press the ArrowDown
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('68-Scheduling mode sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'scheduling-mode?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    // Click on a specific cell to focus
    await page.locator('(//div[contains(@class, "e-gantt-manualparenttaskbar")])[1]').hover({ force: true });
    await page.waitForTimeout(2000);
    // Validate the screenshot- Scheduling mode is displayed on the chart side of the component.
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('69-Holidays sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'holidays?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('70-Unscheduled task sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'unscheduled-task?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('71-Baseline sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'baseline?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    // Validate the screenshot- Baseline is displayed on the chart side of the component.
    expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('72-Eventmarkers sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'eventmarkers?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('73-Timezone sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'eventmarkers?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('74-Critical path sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'criticalpath?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('75-Column Template', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-template?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('76-Column menu items', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'column-menu?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class, "e-icons e-columnmenu")])[1]').click();
    await page.waitForTimeout(600);
    await page.locator('(//li[contains(@class,"e-menu-item")])[5]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('(//li[contains(@class,"e-menu-item")])[6]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('77-WBS Column', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'wbs-column?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').first().screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('78-Resource Allocation', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-allocation?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').dblclick();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('79-Resourceview sample', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-view?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class,"e-gantt-child-taskbar")])[1]').dblclick();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('80-Resourceview - Switch to Projectview', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'resource-view?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//span[contains(@class,"e-switch-on")])[1]').click();
    await page.waitForTimeout(500);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('81-Resource multitaskbar', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'multi-taskbar?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('82-Header Template', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'header-template?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('83-Taskbar Template', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'taskbar-template?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('84-Tooltip Template', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'tooltip-template?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator("(//div[contains(@class,'e-gantt-parent-taskbar')])[1]").hover({ force: true });
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //For child record hovered to show the records
    await page.locator("(//div[contains(@class,'e-gantt-child-taskbar')])[1]").hover({ force: true });
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('85-Frozen column', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'frozen-column?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//span[contains(@class,"e-input-group-icon e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(800);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('86-Filtering - Task ID', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'filtering?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class, "e-icon-filter")])[1]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('87-Filtering - Task Name', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'filtering?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class, "e-icon-filter")])[2]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('88-Filtering - Start Time', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'filtering?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class, "e-icon-filter")])[3]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('89-Filtering - Duration', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'filtering?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class, "e-icon-filter")])[4]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('90-Filtering - End Time', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'filtering?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class, "e-icon-filter")])[5]').click();
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[2]').click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('(//span[contains(@class, "e-input-group-icon e-ddl-icon e-icons")])[1]').click();
    await page.waitForTimeout(800);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('91-Excel Filtering - Task ID', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'excel-filtering?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class, "e-filtermenudiv e-icons e-icon-filter")])[1]').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('(//li[contains(@role, "menuitem")])[2]').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator('(//li[contains(@role, "menuitem")])[10]').click();
    await page.waitForTimeout(600);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('92-Spli task - contextmenu open', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class,"e-gantt-child")])[7]').click({
        button: 'right'
    });
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('93-Split task - Segment tab', async ({ page }) => {
    await page.goto(Helper.baseUrl + 'split-tasks?theme=tailwind3-dark');
    await page.waitForTimeout(2000);
    await page.locator('(//div[contains(@class,"child-taskbar")])[3]').click();
    await page.waitForTimeout(500);
    //Click the edit button
    await page.locator('(//span[contains(@class,"e-edit")])[1]').click();
    await page.waitForTimeout(500);
    //Navigate to segments to open the dialog tab
    await page.locator('(//div[contains(@class,"e-tab-text")])[5]').click();
    await page.waitForTimeout(1000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
