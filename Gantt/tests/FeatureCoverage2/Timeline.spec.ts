import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/helper';

test('TLET-001', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-002', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select '2025' format
    await page.locator("(//li[text()='2025'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Jan 01, 2025' format
    await page.locator("(//li[text()='Jan 01, 2025'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-003', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'Jan 25' format
    await page.locator("(//li[text()='Jan 25'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'January' format
    await page.locator("(//li[text()='January'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-004', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'January, 25' format
    await page.locator("(//li[text()='January, 25'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Jan' format
    await page.locator("(//li[text()='Jan'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-005', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('13');
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('6');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-006', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-007', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select '2025' format
    await page.locator("(//li[text()='2025'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select '01' format
    await page.locator("(//li[text()='01'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-008', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'Jan 25' format
    await page.locator("(//li[text()='Jan 25'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Mon' format
    await page.locator("(//li[text()='Mon'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-009', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'January, 25' format
    await page.locator("(//li[text()='January, 25'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select '01' format
    await page.locator("(//li[text()='M'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-010', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('8');
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('5');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-011', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-012', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select '2025' format
    await page.locator("(//li[text()='2025'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select '01' format
    await page.locator("(//li[text()='Mon Jan 01, 25'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-013', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'Jan 25' format
    await page.locator("(//li[text()='Jan 25'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Mon Jan 01' format
    await page.locator("(//li[text()='Mon Jan 01'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-014', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'January, 25' format
    await page.locator("(//li[text()='January, 25'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Mon Jan 01' format
    await page.locator("(//li[text()='Mon Jan 01, 25'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-015', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('6');
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('6');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-016', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-017', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'January, 25' format
    await page.locator("(//li[text()='January, 25'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Mon Jan 01' format
    await page.locator("(//li[text()='Mon Jan 01, 25'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-018', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'Jan 25' format
    await page.locator("(//li[text()='Jan 25'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select '0 : 00 AM' format
    await page.locator("(//li[text()='0 : 00 AM'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-019', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'January, 25' format
    await page.locator("(//li[text()='January, 25'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select '00' format
    await page.locator("(//li[text()='00'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-020', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(800);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('5');
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(800);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('3');
    //select width
    await page.locator("(//input[contains(@class,'e-control')])[6]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('28');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-021', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-022', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'Mon Jan 01, 25' format
    await page.locator("(//li[text()='Mon Jan 01, 25'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Jan 01,2025' format
    await page.locator("(//li[text()='Jan 01, 2025'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-023', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'Mon Jan 01' format
    await page.locator("(//li[text()='Mon Jan 01'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'January' format
    await page.locator("(//li[text()='January'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-024', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('2');
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('3');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-025', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(2000);
    //Screenshot validation-The 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-026', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'Mon Jan 01, 25' format
    await page.locator("(//li[text()='Mon Jan 01, 25'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Mon' format
    await page.locator("(//li[text()='Mon'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-027', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'Mon Jan 01, 25' format
    await page.locator("(//li[text()='Mon Jan 01'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'M' format
    await page.locator("(//li[text()='M'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-028', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('2');
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('4');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-029', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-The 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-030', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'Jan 25' format
    await page.locator("(//li[text()='Mon Jan 01, 25'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select '0 : 00 AM' format
    await page.locator("(//li[text()='00 : 00 AM'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-031', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'Jan 25' format
    await page.locator("(//li[text()='Mon Jan 01'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select '0 : 00 AM' format
    await page.locator("(//li[text()='0 : 00 AM'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-032', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('4');
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('8');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-033', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-034', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'Jan 25' format
    await page.locator("(//li[text()='Mon Jan 01, 25'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select '' format
    await page.locator("(//li[text()='Mon Jan 01, 25'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-035', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'Jan 25' format
    await page.locator("(//li[text()='Mon Jan 01'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select '' format
    await page.locator("(//li[text()='Mon Jan 01'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-036', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('4');
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('8');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-037', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-038', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'January' format
    await page.locator("(//li[text()='January'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Jan 25' format
    await page.locator("(//li[text()='Jan 25'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-039', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'January' format
    await page.locator("(//li[text()='Jan'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Jan 25' format
    await page.locator("(//li[text()='January, 25'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-040', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('1');
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('3');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-041', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation-
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-042', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'January' format
    await page.locator("(//li[text()='January'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'January' format
    await page.locator("(//li[text()='January'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-043', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'Jan' format
    await page.locator("(//li[text()='Jan'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'January' format
    await page.locator("(//li[text()='Jan'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-044', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('2');
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('4');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-045', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-046', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'January' format
    await page.locator("(//li[text()='January'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Mon Jan 01' format
    await page.locator("(//li[text()='Mon Jan 01, 25'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-047', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'Jan' format
    await page.locator("(//li[text()='Jan'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Mon Jan 01' format
    await page.locator("(//li[text()='Mon Jan 01'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-048', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('2');
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('3');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-049', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-050', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'January' format
    await page.locator("(//li[text()='January'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Mon' format
    await page.locator("(//li[text()='Mon'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-051', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'January' format
    await page.locator("(//li[text()='January'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select '01' format
    await page.locator("(//li[text()='01'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-052', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('2');
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('5');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-053', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-054', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'January' format
    await page.locator("(//li[text()='January'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select '00:00 AM' format
    await page.locator("(//li[text()='00 : 00 AM'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-055', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'Jan' format
    await page.locator("(//li[text()='Jan'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select '0:00 AM' format
    await page.locator("(//li[text()='0 : 00 AM'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-056', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('2');
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('6');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-057', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-058', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'M' format
    await page.locator("(//li[text()='M'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Jan 25' format
    await page.locator("(//li[text()='Jan 25'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-059', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select '01' format
    await page.locator("(//li[text()='01'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'January, 25' format
    await page.locator("(//li[text()='January, 25'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-060', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('3');
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Year
    await page.locator("(//li[text()='Year'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('3');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-061', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-062', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'M' format
    await page.locator("(//li[text()='M'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'January' format
    await page.locator("(//li[text()='January'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-063', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select '01' format
    await page.locator("(//li[text()='01'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Jan 01,2025' format
    await page.locator("(//li[text()='Jan 01, 2025'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-064', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('3');
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.locator("(//li[text()='Month'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('3');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-065', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-066', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'M' format
    await page.locator("(//li[text()='M'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Mon Jan 01,25' format
    await page.locator("(//li[text()='Mon Jan 01, 25'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-067', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select '01' format
    await page.locator("(//li[text()='01'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Mon Jan 01' format
    await page.locator("(//li[text()='Mon Jan 01'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-068', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('4');
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.locator("(//li[text()='Week'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('3');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-069', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-070', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select 'M' format
    await page.locator("(//li[text()='M'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select 'Mon' format
    await page.locator("(//li[text()='Mon'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-071', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format 
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Select '01' format
    await page.locator("(//li[text()='01'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the Format
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Select '01' format
    await page.locator("(//li[text()='01'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-072', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //select the count
    await page.locator("(//input[contains(@class,'e-control')])[7]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('3');
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[22]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//input[contains(@class,'e-control')])[10]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('3');
    await page.waitForTimeout(1000);
    //Screenshot validation
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-073', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5004/TimeLine/timeline');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5004/TimeLine/timeline' });
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.locator("(//li[text()='Day'])[1]").click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.locator("(//li[text()='Hour'])[1]").click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('TLET-074', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //select the Format 'M'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'M', exact: true }).click();
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    //select the Format '00 : 00 AM'
    await page.getByRole('option', { name: '00 : 00 AM' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-075', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //select the Format '01'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: '01', exact: true }).click();
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    //select the Format '00 : 00 AM'
    await page.getByRole('option', { name: '0 : 00 AM', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-076', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //select the count "2"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('2');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    //select the count "4"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('4');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-077', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-078', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the Format '00'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: '00', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //select the Format 'Jan 25'
    await page.getByRole('option', { name: 'Jan 25' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-079', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the Format '0:00 AM'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: '0 : 00 AM', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //select the Format 'January 25'
    await page.getByRole('option', { name: 'January,' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-080', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the count "6"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('6');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    //select the count "4"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('2');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-081', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-082', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the Format '00'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: '00', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //select the Format 'January'
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'January' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-083', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(1000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //select the Format '0:00 AM'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '0 : 00 AM', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(600);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //select the Format 'January'
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Jan 01,' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-084', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the count "5"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('5');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //select the count "2"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('2');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-085', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //select the Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-086', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(800);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //select the Format '00'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '00', exact: true }).click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    //select the Format 'Mon Jan 01,25'
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Mon Jan 01,' }).click();
    await page.waitForTimeout(1200);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-087', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(800);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //select the Format '0.00 AM'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '0 : 00 AM', exact: true }).click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    //select the Format 'Mon Jan 01'
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Mon Jan 01', exact: true }).click();
    await page.waitForTimeout(1200);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-088', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the count "4"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('4');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Week' }).click();
    //select the count "3"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('2');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-089', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-090', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(800);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //select the Format '00'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '00', exact: true }).click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //select the Format 'Mon'
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Mon' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-091', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the Format '0.00 AM'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: '0 : 00 AM', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //select the Format 'M'
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'M', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-092', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(1000);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the count "5"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('5');
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //select the count "4"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('4');
    await page.waitForTimeout(300);
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-093', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-094', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the Format '00'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: '00', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the Format '0 : 00 AM'
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: '00 : 00 AM' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-095', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the Format '0 : 00 AM'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: '00 : 00 AM', exact: true }).click();
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the Format '0 : 00 AM'
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: '00 : 00 AM' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-096', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the count "7"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('7');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //select the count "4"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('4');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-097', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click on Zoom to fit button
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-098', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click on Zoom In button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-099', async ({ page }) => {
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click on Zoom Out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-100', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click on Next timespan button
    await page.getByRole('button', { name: 'Next timespan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-101', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Click on Previous timespan button
    await page.getByRole('button', { name: 'Previous timespan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-102', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // //Enable the "ResourceView" toggle button
    await page.locator("//span[@class='e-switch-handle']").click();
    await page.waitForTimeout(300);
    //Click on Zoom to fit button
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-103', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // //Enable the "ResourceView" toggle button
    await page.locator("//span[@class='e-switch-handle']").click();
    await page.waitForTimeout(300);
    //Click on Zoom In button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-104', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Enable the "ResourceView" toggle button
    await page.locator("//span[@class='e-switch-handle']").click();
    await page.waitForTimeout(300);
    //Click on Zoom Out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-105', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Enable the "ResourceView" toggle button
    await page.locator("//span[@class='e-switch-handle']").click();
    await page.waitForTimeout(300);
    //Click on Next timespan button
    await page.getByRole('button', { name: 'Next timespan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-106', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //Enable the "ResourceView" toggle button
    await page.locator("//span[@class='e-switch-handle']").click();
    await page.waitForTimeout(300);
    //Click on Previous timespan button
    await page.getByRole('button', { name: 'Previous timespan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-107', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-108', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //select the Format '2025'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: '2025' }).click();
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Bottom tier select  "Jan 01, 2025
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.getByRole('option', { name: 'Jan 01,' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-109', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //select the Format 'Jan 25'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Jan 25' }).click();
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Bottom tier select  "January"
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.getByRole('option', { name: 'January' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-110', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //select the Format 'Jan 25'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'January' }).click();
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Bottom tier select  "Jan"
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.getByRole('option', { name: 'Jan', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-111', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //select the count "13"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('13');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    //select the count "6"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('6');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-112', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-113', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //select the Format '2025'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: '2025' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Bottom tier select  "01"
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: '01' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-114', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //select the Format 'Jan 25'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Jan 25' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Bottom tier select  "01"
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Mon' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-115', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //select the Format 'January 25'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'January,' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Bottom tier select  "m"
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'M', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-116', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //select the count "13"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('13');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //select the count "6"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('6');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-117', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-118', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //select the Format '2025'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: '2025' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Bottom tier select  "Mon Jan 01,25"
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Mon Jan 01,' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-119', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //select the Format 'Jan 25'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Jan 25' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Bottom tier select  "Mon Jan 01"
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Mon Jan 01', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-120', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //select the Format 'January 25'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'January,' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Bottom tier select  ""
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Mon Jan 01,' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-121', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //select the count "6"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('6');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the count "6"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('6');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-122', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-123', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(1000);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    //select the Format '2025'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '2025' }).click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Bottom tier select  "00 : 00 AM"
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '00 : 00 AM' }).click();
    await page.waitForTimeout(1200);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-124', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(1000);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    //select the Format 'Jan 25'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Jan 25' }).click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Bottom tier select  "0 : 00 AM"
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '0 : 00 AM', exact: true }).click();
    await page.waitForTimeout(1200);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-125', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(500);
    //select the Format 'January 25'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'January,' }).click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //Bottom tier select  "00"
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: '00', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-126', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //select the count "5"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('5');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the count "3"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('3');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //select the unit width "28"
    await page.locator('(//input[@role="spinbutton"])[1]').fill('28');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-127', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-128', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the Format 'Mon Jan 01 25'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Mon Jan 01,' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Bottom tier select  "Jan 01,2025"
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Jan 01,' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-129', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the Format 'Mon Jan 01'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Mon Jan 01', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Bottom tier select  "January"
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'January' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-130', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the count "2"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('2');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //select the count "3"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('3');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-131', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-132', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the Format 'Mon Jan 01 25'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Mon Jan 01,' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Bottom tier select  "Mon"
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Mon' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-133', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the Format 'Mon Jan 01'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Mon Jan 01', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Bottom tier select  "M"
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'M', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-134', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the count "2"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('2');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //select the count "4"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('4');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-135', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-136', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the Format 'Mon Jan 01 25'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Mon Jan 01,' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Bottom tier select  "00:00 AM"
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: '00 : 00 AM' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-137', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the Format 'Mon Jan 01'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Mon Jan 01', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Bottom tier select  "0 : 00 AM"
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: '0 : 00 AM', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-138', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the count "4"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('4');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the count "8"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('8');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-139', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-140', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the Format 'Mon Jan 01 25'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Mon Jan 01,' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the Format 'Mon Jan 01 25'
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Mon Jan 01,' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-141', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the Format 'Mon Jan 01'
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Mon Jan 01', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the Format 'Mon Jan 01'
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Mon Jan 01', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-142', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the count "4"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('4');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the count "8"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('8');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-143', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-144', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format January
    await page.getByRole('option', { name: 'January' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format Jan 25
    await page.getByRole('option', { name: 'Jan 25' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-145', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format Jan
    await page.getByRole('option', { name: 'Jan', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format January 25
    await page.getByRole('option', { name: 'January,' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-146', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //select the count "1"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('1');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //select the count "3"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('3');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-147', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-148', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(1000);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(500);
    //Format January
    await page.getByRole('option', { name: 'January' }).click();
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(500);
    //Format January
    await page.getByRole('option', { name: 'January' }).click();
    await page.waitForTimeout(1200);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-149', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format Jan
    await page.getByRole('option', { name: 'Jan', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select month
    await page.getByRole('option', { name: 'month' }).click();
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format Jan
    await page.getByRole('option', { name: 'Jan', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-150', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //select the count "2"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('2');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //select the count "4"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('4');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-151', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-152', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format January
    await page.getByRole('option', { name: 'January' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format Mon Jan 01
    await page.getByRole('option', { name: 'Mon Jan 01,' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-153', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format Jan
    await page.getByRole('option', { name: 'Jan', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format Mon Jan 01
    await page.getByRole('option', { name: 'Mon Jan 01', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-154', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //select the count "2"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('2');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the count "3"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('3');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-155', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-156', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format January
    await page.getByRole('option', { name: 'January' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format Mon 
    await page.getByRole('option', { name: 'Mon' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-157', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format Jan
    await page.getByRole('option', { name: 'Jan', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format 01
    await page.getByRole('option', { name: '01' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-158', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //select the count "2"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('2');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //select the count "5"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('5');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-159', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-160', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format January
    await page.getByRole('option', { name: 'January' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format 00 : 00 AM
    await page.getByRole('option', { name: '00 : 00 AM' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-161', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format Jan
    await page.getByRole('option', { name: 'Jan', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format 0 : 00 AM
    await page.getByRole('option', { name: '0 : 00 AM', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-162', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    //select the count "2"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(500);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('2');
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //select the count "6"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('6');
    await page.waitForTimeout(500);
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-163', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-164', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format 'M'
    await page.getByRole('option', { name: 'M', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select 
    await page.getByRole('option', { name: 'Year' }).click();
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format Jan 25
    await page.getByRole('option', { name: 'Jan 25' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-165', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format '01'
    await page.getByRole('option', { name: '01' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select 
    await page.getByRole('option', { name: 'Year' }).click();
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format January 25
    await page.getByRole('option', { name: 'January,' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-166', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //select the count "3"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('3');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //select the count "3"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('3');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-167', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-168', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format 'M'
    await page.getByRole('option', { name: 'M', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format January
    await page.getByRole('option', { name: 'January' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-169', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format '01'
    await page.getByRole('option', { name: '01' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format Jan 01,2025
    await page.getByRole('option', { name: 'Jan 01,' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-170', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //select the count "3"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('3');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //select the count "3"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('3');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-171', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-172', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format 'M'
    await page.getByRole('option', { name: 'M', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format Mon Jan 01,25
    await page.getByRole('option', { name: 'Mon Jan 01,' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-173', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format '01'
    await page.getByRole('option', { name: '01' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format Mon Jan 01
    await page.getByRole('option', { name: 'Mon Jan 01', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-174', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //select the count "4"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('4');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //select the count "3"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('3');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-175', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-176', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format 'M'
    await page.getByRole('option', { name: 'M', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format Mon 
    await page.getByRole('option', { name: 'Mon' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-177', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format '01'
    await page.getByRole('option', { name: '01' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format 01
    await page.getByRole('option', { name: '01' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-178', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //select the count "3"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('3');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //select the count "3"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('3');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-179', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-180', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format 'M'
    await page.getByRole('option', { name: 'M', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format 00 : 00 AM
    await page.getByRole('option', { name: '00 : 00 AM' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-181', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format '01'
    await page.getByRole('option', { name: '01' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format 0 : 00 AM
    await page.getByRole('option', { name: '0 : 00 AM', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-182', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //select the count "2"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('2');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the count "4"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('4');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-183', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-184', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format '00'
    await page.getByRole('option', { name: '00', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format Jan 25
    await page.getByRole('option', { name: 'Jan 25' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-185', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format '0 : 00 AM'
    await page.getByRole('option', { name: '0 : 00 AM', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format 'January 25
    await page.getByRole('option', { name: 'January,' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-186', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the count "6"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('6');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //select the count "2"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('2');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-187', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-188', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format '00'
    await page.getByRole('option', { name: '00', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format January
    await page.getByRole('option', { name: 'January' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-189', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format '0 : 00 AM'
    await page.getByRole('option', { name: '0 : 00 AM', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format 'Jan 01,2025
    await page.getByRole('option', { name: 'Jan 01,' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-190', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(1000);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //select the count "5"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(500);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('5');
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(350);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //select the count "2"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('2');
    await page.waitForTimeout(500);
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-191', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-192', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format '00'
    await page.getByRole('option', { name: '00', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format Mon Jan 01,25
    await page.getByRole('option', { name: 'Mon Jan 01,' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-193', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format '0 : 00 AM'
    await page.getByRole('option', { name: '0 : 00 AM', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format 'Mon Jan 01
    await page.getByRole('option', { name: 'Mon Jan 01', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-194', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(1000);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(500);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(500);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(500);
    //select the count "4"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(500);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('4');
    await page.waitForTimeout(500);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(500);
    //Select Month
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    //select the count "2"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('2');
    await page.waitForTimeout(500);
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-195', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-196', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format '00'
    await page.getByRole('option', { name: '00', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format Mon 
    await page.getByRole('option', { name: 'Mon' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-197', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format '0 : 00 AM'
    await page.getByRole('option', { name: '0 : 00 AM', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format M
    await page.getByRole('option', { name: 'M', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-198', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the count "5"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('5');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //select the count "2"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('2');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-199', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-200', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format '00'
    await page.getByRole('option', { name: '00', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format '00 : 00 AM' 
    await page.getByRole('option', { name: '00 : 00 AM' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-201', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[18]").click();
    await page.waitForTimeout(300);
    //Format '0 : 00 AM'
    await page.getByRole('option', { name: '0 : 00 AM', exact: true }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    await page.locator("(//span[contains(@class,'e-input')])[25]").click();
    await page.waitForTimeout(300);
    //Format '0 : 00 AM'
    await page.getByRole('option', { name: '0 : 00 AM', exact: true }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-202', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the count "7"
    await page.locator("(//span[contains(@class,'e-input')])[14]").click();
    await page.waitForTimeout(300);
    await page.locator('(//input[@role="spinbutton"])[2]').fill('7');
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //select the count "4"
    await page.locator('(//input[@role="spinbutton"])[3]').fill('4');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-203', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click on zoomToFit button
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-204', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-205', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-206', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click on Next timespan button
    await page.getByRole('button', { name: 'Next timespan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-207', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Click on Previous timespan button
    await page.getByRole('button', { name: 'Previous timespan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-208', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Enable the Resource View
    await page.locator("//span[contains(@class, 'e-switch-handle')]").click();
    await page.waitForTimeout(300);
    //Click on zoom To Fit button
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-209', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Enable the Resource View
    await page.locator("//span[contains(@class, 'e-switch-handle')]").click();
    await page.waitForTimeout(300);
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-210', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Enable the Resource View
    await page.locator("//span[contains(@class, 'e-switch-handle')]").click();
    await page.waitForTimeout(300);
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-211', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Enable the Resource View
    await page.locator("//span[contains(@class, 'e-switch-handle')]").click();
    await page.waitForTimeout(300);
    //Click on Next timespan button
    await page.getByRole('button', { name: 'Next timespan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-212', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //Enable the Resource View
    await page.locator("//span[contains(@class, 'e-switch-handle')]").click();
    await page.waitForTimeout(300);
    //Click on Previous timespan button
    await page.getByRole('button', { name: 'Previous timespan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-213', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-214', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-215', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    // Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    // Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    // Change the unit to '200'
    await page.locator("(//span[contains(@class,'e-input')])[9]").click();
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('200');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    await page.waitForTimeout(1000);
    // Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-216', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-217', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    // Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    // Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    // Change the unit to 100
    await page.locator("(//span[contains(@class,'e-input')])[9]").click();
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.keyboard.type('100');
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    await page.waitForTimeout(1000);
    // Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-218', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-219', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-220', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-221', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-222', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-223', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-224', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-225', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click on Zoom Out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-226', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-227', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select month
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-228', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-229', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-230', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click on "Zoom ToFiT Button
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-231', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click on "ZoomToFit" button
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-232', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click on "ZoomToFit" button
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-233', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click on "ZoomToFit" button
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-234', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click on "ZoomToFit" button
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-235', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click on "NextTimeSpan" button
    await page.getByRole('button', { name: 'Next timespan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-236', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    //Click on "Previous timespan" button
    await page.getByRole('button', { name: 'Previous timespan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-237', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-238', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-239', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-240', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-241', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-242', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-243', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-244', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-245', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-246', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-247', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-248', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-249', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});
test('TLET-250', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-251', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-252', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-253', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-254', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-255', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-256', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-257', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    //Click on NextTimeSpan button
    await page.getByRole('button', { name: 'Next TimeSpan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-258', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    //Click on PrevTimeSpan button
    await page.getByRole('button', { name: 'Previous timespan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-259', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "NoTimelineTiers"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'NoTimelineTiers' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-260', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "NoTimelineTiers"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'NoTimelineTiers' }).click();
    await page.waitForTimeout(500);
    // Change the unit to 70
    await page.locator("(//span[contains(@class,'e-input')])[9]").click();
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.type('70');
    await page.waitForTimeout(500);
    await page.getByRole('article').locator('div').filter({ hasText: 'Unit width Top tier Count' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-261', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "NoTimelineTiers"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'NoTimelineTiers' }).click();
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-262', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "NoTimelineTiers"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'NoTimelineTiers' }).click();
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-263', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "NoTimelineTiers"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'NoTimelineTiers' }).click();
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-264', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "NoTimelineTiers"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'NoTimelineTiers' }).click();
    //Click on Next timespan button
    await page.getByRole('button', { name: 'Next timespan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-265', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "NoTimelineTiers"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'NoTimelineTiers' }).click();
    //Click on Previous timespan button
    await page.getByRole('button', { name: 'Previous timespan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-266', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "Virtual"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom to fit button
    await page.getByRole('button', { name: 'Zoom to fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-267', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "Virtual"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-268', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "Virtual"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(300);
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-269', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "Virtual"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(300);
    //Click on Next timespan button
    await page.getByRole('button', { name: 'Next timespan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-270', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "Virtual"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(300);
    //Click on Previous timespan button
    await page.getByRole('button', { name: 'Previous timespan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-271', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "Virtual"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-272', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-273', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-274', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-275', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-276', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-277', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-278', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-279', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-280', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-281', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-282', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-283', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-284', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-285', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-286', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-287', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-288', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-289', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-290', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-291', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-292', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-293', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-294', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-295', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-296', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-297', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-298', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-299', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-300', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-301', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-302', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-303', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-304', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-305', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-306', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-307', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-308', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-309', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-310', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-311', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-312', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-313', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-314', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-315', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-316', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-317', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-318', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-319', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour'
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-320', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-321', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-322', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-323', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-324', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-325', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-326', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-327', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-328', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-329', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-330', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-331', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-332', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-333', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-334', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-335', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-336', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-337', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-338', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-339', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-340', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-341', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-342', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-343', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-344', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-345', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-346', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-347', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-348', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-349', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-350', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-351', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-352', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-353', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-354', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-355', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-356', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-357', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-358', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-359', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-360', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-361', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-362', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-363', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-364', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-365', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-366', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-367', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Day
    await page.getByRole('option', { name: 'Day' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-368', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-369', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Top tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[16]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-370', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-371', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minutes"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-372', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-373', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minutes"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Year
    await page.getByRole('option', { name: 'Year' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-374', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-375', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Month
    await page.getByRole('option', { name: 'Month' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-376', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-377', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Week
    await page.getByRole('option', { name: 'Week' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-378', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-379', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(300);
    //Click the Bottom tier drop down
    await page.locator("(//span[contains(@class,'e-input')])[23]").click();
    await page.waitForTimeout(300);
    //Select Hour
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-380', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-381', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-390', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "NoTimelineTier"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'NoTimelineTiers' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-391', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "NoTimelineTier"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'NoTimelineTiers' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-392', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "NoTimelineTier"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'NoTimelineTiers' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-393', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "NoTimelineTier"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'NoTimelineTiers' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-394', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-395', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-396', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-397', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-398', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "RTL"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'RTL' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-399', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "RTL"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'RTL' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-400', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-401', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-402', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "Virtual"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-403', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "Virtual"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom To Fit button
    await page.getByRole('button', { name: 'Zoom To Fit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-404', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "NoTimelineTiers"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'NoTimelineTiers' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-405', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "NoTimelineTiers"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'NoTimelineTiers' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-406', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-407', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-408', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-409', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-410', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "Rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-411', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "Rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-412', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-413', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-414', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "Virtual"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-415', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "Virtual"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom in button
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-416', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "NoTimelineTiers"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'NoTimelineTiers' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-417', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "NoTimelineTiers"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'NoTimelineTiers' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-418', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-419', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "TopTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'TopTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-420', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-421', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "BottomTierOnly"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'BottomTierOnly' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-422', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "Rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-423', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "Rtl"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Rtl' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-424', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-425', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-426', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "virtual"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Minute"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});


test('TLET-427', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "virtual"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    await page.waitForTimeout(300);
    //From the Duration Unit dropdown, select "Hour"
    await page.getByRole('combobox').nth(3).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Hour' }).click();
    //Click on Zoom out button
    await page.getByRole('button', { name: 'Zoom out' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-428', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Methods dropdown, select "ZoomToFit"
    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('option', { name: 'ZoomToFit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-429', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Methods dropdown, select "ZoomIn"
    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('option', { name: 'ZoomIn' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-430', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Methods dropdown, select "ZoomOut"
    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('option', { name: 'ZoomOut' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-431', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Methods dropdown, select "NextTimeSpan"
    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('option', { name: 'NextTimeSpan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-432', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Methods dropdown, select "PrevTimeSpan"
    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('option', { name: 'PrevTimeSpan' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-433', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Methods dropdown, select "ScrollIntoView"
    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('option', { name: 'ScrollIntoView' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-434', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "virtual"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    //From the Methods dropdown, select "ScrollIntoView"
    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('option', { name: 'ScrollIntoView' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-435', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    //From the Methods dropdown, select "ScrollIntoView"
    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('option', { name: 'ScrollIntoView' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-436', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "virtual"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Virtual' }).click();
    //From the Methods dropdown, select "ScrollIntoView"
    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('option', { name: 'ScrollIntoView' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-437', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "WorkUnit"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'WorkUnit' }).click();
    await page.waitForTimeout(1000);
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-438', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "WorkUnit"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'WorkUnit' }).click();
    // From the WorkUnit dropdown, select "Day"
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Day' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('TLET-439', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(Helper.baseUrlserver + '/TimeLine/timeline');
    await page.waitForTimeout(500);
    // From the Data Source dropdown, select "WorkUnit"
    await page.getByRole('combobox').first().click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'WorkUnit' }).click();
    // From the WorkUnit dropdown, select "Minute"
    await page.getByRole('combobox').nth(2).click();
    await page.waitForTimeout(300);
    await page.getByRole('option', { name: 'Minute' }).click();
    //Screenshot validation 
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});