import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';
import { pdf } from '../Helper/pdfStub';
test('Timezone-001', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-002', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click to select the row
    await page.locator("(//tr[contains(@class,'e-chart-row')])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Row is selected
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-003', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the icon to collapse the records
    await page.locator("(//span[contains(@class,'e-icons e-treegridexpand')])[1]").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    //Expand the records
    await page.locator("(//span[contains(@class,'e-icons e-treegridcollapse')])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The record are collapsed and expanded
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-004', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Row is selected
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-005', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    //Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Row is selected
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-006', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click Previous Timespan
    await page.locator("#previous-btn").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records moved to previous
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-007', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click Previous Timespan
    await page.locator("#next-btn").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-Records moved 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-008', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    // Wait for timezone list to appear
    await page.locator("(//li[text()='(UTC-12:00) International Date Line West'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-009', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select timezone
    await page.locator("(//li[text()='(UTC-11:00) Coordinated Universal Time-11'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-010', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2-dark');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2-dark' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select timezone
    await page.locator("(//li[text()='(UTC-10:00) Aleutian Islands'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-011', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select timezone
    await page.locator("(//li[text()='(UTC-10:00) Hawaii'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(1000);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-012', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=material3-dark');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=material3-dark' });
    await page.waitForTimeout(1000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-09:30) Marquesas Islands'])").click();
    await page.waitForTimeout(1500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });

});

test('Timezone-013', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-09:30) Marquesas Islands'])").click();
    await page.waitForTimeout(1500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-014', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-09:00) Alaska'])").click();
    await page.waitForTimeout(1500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });;
});


test('Timezone-015', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1000);
    //select timezone
    await page.locator("(//li[text()='(UTC-09:00) Coordinated Universal Time-09'])").click();
    await page.waitForTimeout(1500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-016', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select timezone
    await page.locator("(//li[text()='(UTC-08:00) Baja California'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-017', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-05:00) Chetumal'])").click();
    await page.waitForTimeout(1500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-018', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-05:00) Eastern Time (US & Canada)'])").click();
    await page.waitForTimeout(1500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-019', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-05:00) Eastern Time (US & Canada)'])").click();
    await page.waitForTimeout(1500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('Timezone-020', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select timezone
    await page.locator("(//li[text()='(UTC-05:00) Haiti'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-021', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select timezone
    await page.locator("(//li[text()='(UTC-05:00) Havana'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-022', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select timezone
    await page.locator("(//li[text()='(UTC-05:00) Indiana (East)'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-023', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-04:00) Turks and Caicos'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('Timezone-024', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-04:00) Asuncion'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-025', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-04:00) Atlantic Time (Canada)'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-026', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-04:00) Caracas'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-027', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-04:00) Cuiaba'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-028', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select timezone
    await page.locator("(//li[text()='(UTC-04:00) Georgetown, La Paz, Manaus, San Juan'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('Timezone-029', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select timezone
    await page.locator("(//li[text()='(UTC-04:00) Santiago'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-030', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(500);
    //select timezone
    await page.locator("(//li[text()='(UTC-03:30) Newfoundland'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-031', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-03:00) Araguaina'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-032', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-03:00) Brasilia'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-033', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-03:00) Cayenne, Fortaleza'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-034', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-03:00) City of Buenos Aires'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-035', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-03:00) Greenland'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-036', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-03:00) Montevideo'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-037', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-03:00) Punta Arenas'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-038', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-03:00) Saint Pierre and Miquelon'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-039', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-03:00) Salvador'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-040', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-02:00) Coordinated Universal Time-02'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-041', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-01:00) Azores'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-042.', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-01:00) Cabo Verde Is.'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-043', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-03:00) Salvador'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-044', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-02:00) Coordinated Universal Time-02'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-045', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-01:00) Azores'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-046', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC-01:00) Azores'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-047', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC) Coordinated Universal Time'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-048', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC+00:00) Dublin, Edinburgh, Lisbon, London'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-049', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC+00:00) Monrovia, Reykjavik'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-050', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC+00:00) Sao Tome'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-051', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-052', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-053', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC+01:00) Brussels, Copenhagen, Madrid, Paris'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-054', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-055', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC+01:00) West Central Africa'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-056', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=bootstrap5');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=bootstrap5' });
    await page.waitForTimeout(1000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC+02:00) Amman'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-057', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=material');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=material' });
    await page.waitForTimeout(1000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC+02:00) Athens, Bucharest'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-058', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=material');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=material' });
    await page.waitForTimeout(1000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC+02:00) Beirut'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-059', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC+02:00) Cairo'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-060', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    //Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    //select timezone
    await page.locator("(//li[text()='(UTC+02:00) Chisinau'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-061', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    await page.locator("(//li[text()='(UTC+02:00) Damascus'])").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-062', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    await page.locator("(//li[text()='(UTC+02:00) Gaza, Hebron'])").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-063', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    await page.locator("(//li[text()='(UTC+02:00) Harare, Pretoria'])").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-064', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    await page.locator("(//li[text()='(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius'])").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-065', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    await page.locator("(//li[text()='(UTC+02:00) Jerusalem'])").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-066', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+02:00) Kaliningrad'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-067', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    await page.locator("(//li[text()='(UTC+02:00) Khartoum'])").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-068', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    await page.locator("(//li[text()='(UTC+02:00) Tripoli'])").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-069', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    await page.locator("(//li[text()='(UTC+02:00) Windhoek'])").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-070', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    await page.locator("(//li[text()='(UTC+03:00) Baghdad'])").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-071', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    await page.locator("(//li[text()='(UTC+03:00) Istanbul'])").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-072', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    await page.locator("(//li[text()='(UTC+03:00) Kuwait, Riyadh'])").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-073', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    await page.locator("(//li[text()='(UTC+03:00) Minsk'])").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-074', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    await page.locator("(//li[text()='(UTC+03:00) Moscow, St. Petersburg'])").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-075', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    await page.locator("(//li[text()='(UTC+03:00) Nairobi'])").click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-076', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+03:00) Volgograd'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-077', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+03:30) Tehran'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-078', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+04:00) Abu Dhabi, Muscat'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-079', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+04:00) Astrakhan, Ulyanovsk'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-080', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+04:00) Baku'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-081', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+04:00) Izhevsk, Samara'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-082', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+04:00) Port Louis'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-083', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+04:00) Saratov'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(800);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(2000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-084', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+04:00) Tbilisi'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-085', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+04:00) Yerevan'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-086', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+04:30) Kabul'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-087', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+05:00) Ashgabat, Tashkent'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-088', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+05:00) Ekaterinburg'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-089', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+05:00) Islamabad, Karachi'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-090', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+05:00) Qyzylorda'])").click();
    await page.waitForTimeout(800);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-091', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-092', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+05:30) Sri Jayawardenepura'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-093', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+05:45) Kathmandu'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-094', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+06:00) Astana'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-095', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+06:00) Dhaka'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-096', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+06:00) Omsk'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-097', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+06:30) Yangon (Rangoon)'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-098', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+07:00) Bangkok, Hanoi, Jakarta'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-099', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+07:00) Barnaul, Gorno-Altaysk'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-100', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+07:00) Hovd'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-101', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+07:00) Krasnoyarsk'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-102', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+07:00) Novosibirsk'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-103', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+07:00) Tomsk'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-104', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-105', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+08:00) Irkutsk'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-106', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+08:00) Kuala Lumpur, Singapore'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-107', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+08:00) Perth'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-108', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+08:00) Taipei'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-109', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+08:00) Ulaanbaatar'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-110', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+08:45) Eucla'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-111', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+09:00) Chita'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-112', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+09:00) Osaka, Sapporo, Tokyo'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-113', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+09:00) Pyongyang'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-114', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+09:00) Seoul'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-115', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+09:00) Yakutsk'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-116', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=bootstrap5');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=bootstrap5' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+09:30) Adelaide'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-117', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=bootstrap5');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=bootstrap5' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+09:30) Darwin'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-118', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=bootstrap5');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=bootstrap5' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+10:00) Brisbane'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-119', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=bootstrap5');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=bootstrap5' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+10:00) Canberra, Melbourne, Sydney'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-120', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=bootstrap5');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=bootstrap5' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+10:00) Guam, Port Moresby'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-121', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=bootstrap5');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=bootstrap5' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+10:00) Hobart'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-122', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=bootstrap5');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=bootstrap5' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+10:00) Vladivostok'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-123', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=bootstrap5');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=bootstrap5' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+10:30) Lord Howe Island'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-124', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=bootstrap5');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=bootstrap5' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+11:00) Bougainville Island'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-125', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=bootstrap5');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=bootstrap5' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+11:00) Chokurdakh'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-126', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2-highcontrast');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2-highcontrast' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+11:00) Magadan'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-127', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2-highcontrast');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2-highcontrast' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+11:00) Norfolk Island'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-128', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2-highcontrast');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2-highcontrast' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+11:00) Sakhalin'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-129', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2-highcontrast');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2-highcontrast' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+11:00) Solomon Is., New Caledonia'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-130', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2-highcontrast');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2-highcontrast' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-131', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2-highcontrast');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2-highcontrast' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+12:00) Auckland, Wellington'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-132', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2-highcontrast');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2-highcontrast' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+12:00) Fiji'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-133', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2-highcontrast');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2-highcontrast' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+12:45) Chatham Islands'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-134', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2-highcontrast');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2-highcontrast' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+13:00) Samoa'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-135', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2-highcontrast');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2-highcontrast' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC+14:00) Kiritimati Island'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-136', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2-highcontrast');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2-highcontrast' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC-12:00) International Date Line West'])").click();
    await page.waitForTimeout(500);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('Timezone-137', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrl + 'timezone?theme=fluent2-highcontrast');
    test.info().annotations.push({ type: 'Sample link', description: 'timezone?theme=fluent2-highcontrast' });
    await page.waitForTimeout(2000);
    // Click the dropdown to select the timezone
    await page.locator("(//span[contains(@class,'e-input')])[2]").click();
    await page.waitForTimeout(1500);
    // Select timezone
    await page.locator("(//li[text()='(UTC-11:00) Coordinated Universal Time-11'])").click();
    await page.waitForTimeout(1000);
    // Click dropdown to change to Week
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Week from the dropdown
    await page.locator("(//li[text()='Week'])").click();
    await page.waitForTimeout(1000);
    // Screenshot validation - Week view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Day
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(1000);
    // Select Day from the dropdown
    await page.locator("(//li[text()='Day'])").click();
    await page.waitForTimeout(500);
    // Screenshot validation - Day view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.waitForTimeout(500);
    // Click dropdown to change to Month
    await page.locator("(//span[contains(@class,'e-input')])[4]").click();
    await page.waitForTimeout(500);
    // Select Month from the dropdown
    await page.locator("(//li[text()='Month'])").click();
    await page.waitForTimeout(2000);
    // Screenshot validation - Month view
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});